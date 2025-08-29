import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export async function logResourceAccess(resourcePath: string, title?: string) {
  try {
    const uid = auth.currentUser?.uid;
    if (!uid || !resourcePath) return;
    await addDoc(collection(db, `users/${uid}/activity`), {
      type: "resource_access",
      resourcePath,
      title: title || null,
      displayName: auth.currentUser?.displayName || null,
      createdAt: serverTimestamp(),
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Failed to log activity", err);
  }
}
