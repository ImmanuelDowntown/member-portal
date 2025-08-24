import * as https from "firebase-functions/v2/https";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();
const PASTOR_UID = functions.config().pastor?.uid as string | undefined;

export const askPastorQuestion = https.onCall({ region: "us-central1" }, async (request) => {
  const uid = request.auth?.uid;
  if (!uid) {
    throw new https.HttpsError("unauthenticated", "Sign in required.");
  }
  const text = String(request.data?.text || "").trim();
  if (!text) {
    throw new https.HttpsError("invalid-argument", "text is required");
  }

  const pastorUid = PASTOR_UID;
  if (!pastorUid) {
    throw new https.HttpsError(
      "failed-precondition",
      "Pastor UID not configured"
    );
  }
  const pairId = [uid, pastorUid].sort().join("_");

  let displayName = "Member";
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    displayName =
      (userSnap.data()?.displayName as string) ||
      (userSnap.data()?.name as string) ||
      (await db.doc(`admins/${uid}`).get()).data()?.displayName ||
      "Member";
  } catch {
    // ignore
  }

  await db.doc(`dmThreads/${pairId}`).set(
    {
      users: [uid, pastorUid].sort(),
      userNames: { [uid]: displayName },
    },
    { merge: true }
  );

  await db.collection(`dmMessages/${pairId}/messages`).add({
    text,
    from: uid,
    to: pastorUid,
    displayName,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { ok: true };
});
