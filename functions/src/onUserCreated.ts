import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

export const onUserCreated = functions.firestore.onDocumentCreated("users/{uid}", async (event) => {
  const { uid } = event.params as { uid: string };
  const data = event.data?.data() as { displayName?: string; email?: string } | undefined;
  const name = data?.displayName || data?.email || uid;
  try {
    const adminsSnap = await db
      .collection("users")
      .where("isSuperAdmin", "==", true)
      .get();
    const batch = db.batch();
    adminsSnap.forEach((docSnap) => {
      const adminId = docSnap.id;
      const ref = db.collection(`users/${adminId}/notifications`).doc();
      batch.set(ref, {
        type: "new-user",
        text: `New user ${name} joined`,
        href: `/admin/users?uid=${uid}`,
        uid,
        read: false,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    });
    await batch.commit();
  } catch (err) {
    console.error("onUserCreated notification failed", err);
  }
});
