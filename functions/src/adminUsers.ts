// functions/src/adminUsers.ts
// Super Admin-only actions: inactivate/reactivate users and delete users.
// Uses Firebase Admin SDK; callable functions require caller to be a super admin (doc exists at /admins/{uid}).

import * as admin from "firebase-admin";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

async function assertSuperAdmin(callerUid?: string) {
  if (!callerUid) {
    throw new HttpsError("unauthenticated", "Must be authenticated.");
  }
  const snap = await db.doc(`admins/${callerUid}`).get();
  if (!snap.exists) {
    throw new HttpsError("permission-denied", "Super admin privileges required.");
  }
}

async function deleteDocs(docs: FirebaseFirestore.QueryDocumentSnapshot[]) {
  let count = 0;
  const chunks: FirebaseFirestore.QueryDocumentSnapshot[][] = [];
  for (let i = 0; i < docs.length; i += 300) chunks.push(docs.slice(i, i + 300));
  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((d) => batch.delete(d.ref));
    await batch.commit();
    count += chunk.length;
  }
  return count;
}

export const setUserDisabled = onCall(
  { region: "us-central1" },
  async (request) => {
    const callerUid = request.auth?.uid;
    await assertSuperAdmin(callerUid);

    const { targetUid, disabled, reason } = (request.data || {}) as {
      targetUid?: string;
      disabled?: boolean;
      reason?: string;
    };
    if (!targetUid || typeof disabled !== "boolean") {
      throw new HttpsError("invalid-argument", "Expected { targetUid: string, disabled: boolean, reason?: string }");
    }
    if (targetUid === callerUid) {
      throw new HttpsError("failed-precondition", "You cannot change your own enabled/disabled state.");
    }

    // Update Firebase Auth
    await admin.auth().updateUser(targetUid, { disabled });

    // Update Firestore user doc (status + audit fields)
    const userRef = db.doc(`users/${targetUid}`);
    const now = admin.firestore.FieldValue.serverTimestamp();
    const update: Record<string, unknown> = {
      status: disabled ? "inactive" : "active",
      updatedAt: now,
    };
    if (disabled) {
      update["disabledAt"] = now;
      update["disabledBy"] = callerUid;
      if (reason) update["disabledReason"] = reason;
    } else {
      update["disabledAt"] = admin.firestore.FieldValue.delete();
      update["disabledBy"] = admin.firestore.FieldValue.delete();
      update["disabledReason"] = admin.firestore.FieldValue.delete();
    }
    await userRef.set(update, { merge: true });

    logger.info("setUserDisabled: updated", { targetUid, disabled, by: callerUid });
    return { ok: true, targetUid, disabled };
  }
);

export const deleteUserAccount = onCall(
  { region: "us-central1", timeoutSeconds: 540 },
  async (request) => {
    const callerUid = request.auth?.uid;
    await assertSuperAdmin(callerUid);

    const { targetUid, hardDelete } = (request.data || {}) as {
      targetUid?: string;
      hardDelete?: boolean;
    };
    if (!targetUid) {
      throw new HttpsError("invalid-argument", "Expected { targetUid: string, hardDelete?: boolean }");
    }
    if (targetUid === callerUid) {
      throw new HttpsError("failed-precondition", "You cannot delete your own account.");
    }

    // Clean up tokens under users/{uid}/pushTokens/*
    const tokenSnap = await db.collection(`users/${targetUid}/pushTokens`).get();
    const deletedTokens = await deleteDocs(tokenSnap.docs);

    // Clean up user-centric memberships (if your app writes these)
    const membershipsSnap = await db.collection(`users/${targetUid}/memberships`).get().catch(() => ({ docs: [] as any[] }));
    const deletedMemberships = membershipsSnap && "docs" in membershipsSnap ? await deleteDocs((membershipsSnap as any).docs) : 0;

    // Clean up group-centric members where docId === uid
    const membersSnap = await db
      .collectionGroup("members")
      .where(admin.firestore.FieldPath.documentId(), "==", targetUid)
      .get();
    const deletedGroupMembers = await deleteDocs(membersSnap.docs);

    // Clean up groupAdmins (if present) where docId === uid
    const adminsSnap = await db
      .collectionGroup("groupAdmins")
      .where(admin.firestore.FieldPath.documentId(), "==", targetUid)
      .get()
      .catch(() => ({ docs: [] as any[] }));
    const deletedGroupAdmins = adminsSnap && "docs" in adminsSnap ? await deleteDocs((adminsSnap as any).docs) : 0;

    // Optionally mark or delete the user doc
    const userRef = db.doc(`users/${targetUid}`);
    let userDocDeleted = false;
    if (hardDelete) {
      await userRef.delete().catch(() => {});
      userDocDeleted = true;
    } else {
      const now = admin.firestore.FieldValue.serverTimestamp();
      await userRef.set(
        {
          status: "deleted",
          deletedAt: now,
          deletedBy: callerUid,
          updatedAt: now,
        },
        { merge: true }
      );
    }

    // Delete Firebase Auth account
    await admin.auth().deleteUser(targetUid);

    const result = {
      ok: true,
      targetUid,
      hardDelete: !!hardDelete,
      deletedTokens,
      deletedMemberships,
      deletedGroupMembers,
      deletedGroupAdmins,
      userDocDeleted,
    };
    logger.info("deleteUserAccount: completed", result);
    return result;
  }
);
