import * as https from "firebase-functions/v2/https";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();
const PASTOR_UID = functions.config().pastor?.uid as string;

export const askPastorQuestion = https.onCall({ region: "us-central1" }, async (request) => {
  const uid = request.auth?.uid;
  if (!uid) {
    throw new https.HttpsError("unauthenticated", "Sign in required.");
  }
  const text = String(request.data?.text || "").trim();
  if (!text) {
    throw new https.HttpsError("invalid-argument", "text is required");
  }

  const pairId = [uid, PASTOR_UID].sort().join("_");

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
      users: [uid, PASTOR_UID].sort(),
      userNames: { [uid]: displayName },
    },
    { merge: true }
  );

  await db.collection(`dmMessages/${pairId}/messages`).add({
    text,
    from: uid,
    to: PASTOR_UID,
    displayName,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { ok: true };
});
