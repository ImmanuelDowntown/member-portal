// functions/src/index.ts
import * as admin from "firebase-admin";

// Initialize Admin SDK exactly once
if (!admin.apps.length) {
  admin.initializeApp();
}

// ---- Export v2 triggers/callables defined in their own modules ----
export { onGroupMessageCreate, onGroupReplyCreate } from "./onGroupMessage";
export { onResourceCreated } from "./onResourceCreated";
export { onDirectMessageCreate } from "./onDirectMessage";
export { sendTestPush, registerPushToken } from "./notifications";
export { setUserDisabled, deleteUserAccount } from "./adminUsers";

// ---- v1 callable kept for backward compatibility ----
import * as functionsV1 from "firebase-functions/v1";

/**
 * grantGroupAdminByEmail
 * Callable used by the Admin UI to promote a user to group admin by email.
 * Requires the caller to be a Super Admin (`/admins/{uid}` exists).
 * Side effects:
 *  - creates/merges doc at groups/{groupId}/admins/{targetUid}
 *  - appends a groupEvents entry (membership_approved) for audit
 */
export const grantGroupAdminByEmail = functionsV1
  .region("us-central1")
  .https.onCall(async (data, context) => {
    if (!context.auth?.uid) {
      throw new functionsV1.https.HttpsError("unauthenticated", "Sign in required.");
    }
    const callerUid = context.auth.uid;
    const db = admin.firestore();

    // Only Super Admins may call
    const isSuper = (await db.doc(`admins/${callerUid}`).get()).exists;
    if (!isSuper) {
      throw new functionsV1.https.HttpsError("permission-denied", "Only Super Admins can grant group admins.");
    }

    const groupId = String(data?.groupId || "").trim();
    const email = String(data?.email || "").trim().toLowerCase();
    if (!groupId || !email) {
      throw new functionsV1.https.HttpsError("invalid-argument", "groupId and email are required.");
    }

    // Look up target user by email
    let target;
    try {
      target = await admin.auth().getUserByEmail(email);
    } catch (e) {
      throw new functionsV1.https.HttpsError("not-found", "No user found with that email.");
    }
    const targetUid = target.uid;

    // Grant admin on the group
    await db.doc(`groups/${groupId}/admins/${targetUid}`).set(
      {
        grantedBy: callerUid,
        email,
        at: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    // Write an audit event to the group (matches existing pattern)
    await db.collection(`groups/${groupId}/groupEvents`).add({
      type: "membership_approved",
      uid: targetUid,
      at: admin.firestore.FieldValue.serverTimestamp(),
      source: "function",
    });

    return { ok: true, groupId, uid: targetUid };
  });

/**
 * approveMembershipRequest
 * Callable used by the Admin UI to approve a pending group membership request.
 * Caller must be a group admin or super admin.
 * Side effects:
 *  - writes membership docs for user and group
 *  - deletes mirrored membershipRequests docs
 */
export const approveMembershipRequest = functionsV1
  .region("us-central1")
  .https.onCall(async (data, context) => {
    if (!context.auth?.uid) {
      throw new functionsV1.https.HttpsError("unauthenticated", "Sign in required.");
    }
    const callerUid = context.auth.uid;
    const db = admin.firestore();

    const groupId = String(data?.groupId || "").trim();
    const targetUid = String(data?.uid || "").trim();
    const displayNameInput = String(data?.displayName || "").trim();
    if (!groupId || !targetUid) {
      throw new functionsV1.https.HttpsError("invalid-argument", "groupId and uid are required.");
    }

    const isSuper = (await db.doc(`admins/${callerUid}`).get()).exists;
    const isGroupAdmin = (await db.doc(`groups/${groupId}/admins/${callerUid}`).get()).exists;
    if (!isSuper && !isGroupAdmin) {
      throw new functionsV1.https.HttpsError("permission-denied", "Only group admins or super admins may approve requests.");
    }

    await db.doc(`users/${targetUid}/memberships/${groupId}`).set(
      {
        groupId,
        approvedAt: admin.firestore.FieldValue.serverTimestamp(),
        approvedBy: callerUid,
      },
      { merge: true }
    );

    const userSnap = await db.doc(`users/${targetUid}`).get();
    const profileName =
      (userSnap.data()?.displayName as string) ||
      (userSnap.data()?.name as string);

    await db.doc(`groups/${groupId}/members/${targetUid}`).set(
      {
        uid: targetUid,
        displayName: displayNameInput || profileName || "Member",
        joinedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    await Promise.all([
      db.doc(`groups/${groupId}/membershipRequests/${targetUid}`)
        .delete()
        .catch(() => {}),
      db.doc(`users/${targetUid}/membershipRequests/${groupId}`)
        .delete()
        .catch(() => {}),
    ]);

    return { ok: true, groupId, uid: targetUid };
  });
