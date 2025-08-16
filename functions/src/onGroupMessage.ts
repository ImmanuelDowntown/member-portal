// functions/src/onGroupMessage.ts
import * as admin from "firebase-admin";
import * as functions from "firebase-functions/v1";

const db = admin.firestore();

/**
 * On group message creation, notify all members except the sender.
 * Writes docs to: users/{uid}/notifications/{auto-id}
 */
export const onGroupMessageCreated = functions.firestore
  .document("groups/{groupId}/messages/{msgId}")
  .onCreate(async (snap, ctx) => {
    const { groupId, msgId } = ctx.params as { groupId: string; msgId: string };
    const data = snap.data() as any;
    const senderUid: string | undefined = data?.uid;

    // Load group metadata (for name)
    const groupSnap = await db.collection("groups").doc(groupId).get();
    const groupName = (groupSnap.exists && (groupSnap.data()?.name as string)) || groupId;

    // Gather recipients
    const recipients = new Set<string>();

    // 1) Preferred: groups/{groupId}/members/{uid}
    try {
      const memSnap = await db.collection("groups").doc(groupId).collection("members").get();
      memSnap.forEach((d) => recipients.add(d.id));
    } catch (e) {
      console.warn("members subcollection read failed (fallback to user mirrors)", e);
    }

    // 2) Fallback: collectionGroup over users/*/memberships with groupId OR groupSlug
    if (recipients.size === 0) {
      const cg = db.collectionGroup("memberships");
      const [byId, bySlug] = await Promise.all([
        cg.where("groupId", "==", groupId).get(),
        cg.where("groupSlug", "==", groupId).get(),
      ]);
      for (const d of byId.docs.concat(bySlug.docs)) {
        const userDocRef = d.ref.parent.parent; // users/{uid}
        if (userDocRef) recipients.add(userDocRef.id);
      }
    }

    // Remove sender
    if (senderUid) recipients.delete(senderUid);

    if (recipients.size === 0) return;

    const notifText = `You have a new message in the ${groupName} group.`;
    const payload = {
      type: "group_message",
      text: notifText,
      href: `/groups/${groupId}`,
      groupId,
      groupName,
      messageId: msgId,
      read: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const writes: Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>[] = [];
    recipients.forEach((uid) => {
      writes.push(
        db.collection("users").doc(uid).collection("notifications").add(payload)
      );
    });
    await Promise.all(writes);
  });
