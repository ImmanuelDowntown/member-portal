// functions/src/index.ts
import * as admin from "firebase-admin";
import * as functions from "firebase-functions/v1";
admin.initializeApp();
const db = admin.firestore();

export { onGroupMessageCreate, onGroupReplyCreate } from "./onGroupMessage";

export const grantGroupAdminByEmail = functions
  .region("us-central1")
  .https.onCall(async (data, context) => {
    const callerUid = context.auth?.uid;
    if (!callerUid) throw new functions.https.HttpsError("unauthenticated", "Sign-in required.");
    const isSuper = (await db.collection("admins").doc(callerUid).get()).exists;
    if (!isSuper) throw new functions.https.HttpsError("permission-denied", "Super admin only.");

    const email = String(data?.email || "").toLowerCase().trim();
    const groupId = String(data?.groupId || "").trim();
    if (!email || !groupId) throw new functions.https.HttpsError("invalid-argument", "email and groupId required.");

    const target = await admin.auth().getUserByEmail(email).catch(() => { throw new functions.https.HttpsError("not-found", "No user with that email."); });
    await db.collection("groups").doc(groupId).collection("groupAdmins").doc(target.uid).set({
      uid: target.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdBy: callerUid,
      method: "email-lookup",
    }, { merge: true });
    return { ok: true, uid: target.uid };
  });



/**
 * When a membership request is created under groups/{groupId}/membershipRequests/{uid},
 * write a groupEvents entry so admins can see an audit trail or trigger notifications.
 */
export const onMembershipRequestCreated = functions.firestore
  .document("groups/{groupId}/membershipRequests/{uid}")
  .onCreate(async (snap, ctx) => {
    const { groupId, uid } = ctx.params;
    const data = snap.data() || {};
    await db.collection("groups").doc(groupId).collection("groupEvents").add({
      type: "request_created",
      uid,
      at: admin.firestore.FieldValue.serverTimestamp(),
      source: "function",
      payload: data,
    });
  });

/**
 * When a membership is approved (users/{uid}/memberships/{groupId} write),
 * mirror an event under the group for audit.
 */
export const onMembershipApproved = functions.firestore
  .document("users/{uid}/memberships/{groupId}")
  .onWrite(async (change, ctx) => {
    const { groupId, uid } = ctx.params;
    if (!change.after.exists) return; // deleted
    await db.collection("groups").doc(groupId).collection("groupEvents").add({
      type: "membership_approved",
      uid,
      at: admin.firestore.FieldValue.serverTimestamp(),
      source: "function",
    });
  });
