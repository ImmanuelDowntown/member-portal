import * as functions from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
const PASTOR_UID = "N86oGmSc8oVnHHeHm2Nlxi2L8Wb2";

export const askPastorQuestion = functions.onCall(
  { region: "us-central1" },
  async (request) => {
    const uid = request.auth?.uid;
    if (!uid) {
      throw new functions.HttpsError("unauthenticated", "Sign in required.");
    }

    const text = String(request.data?.text || "").trim();
    if (!text) {
      throw new functions.HttpsError("invalid-argument", "text is required");
    }

    const pastorUid = PASTOR_UID;

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

    console.log("askPastorQuestion called", { uid, text });
    const docRef = await db.collection("pastorQuestions").add({
      text,
      from: uid,
      to: pastorUid,
      displayName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log("askPastorQuestion document created", docRef.id);

    return { ok: true };
  },
);
