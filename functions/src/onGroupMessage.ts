import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

export const onGroupMessageCreate = functions.firestore.onDocumentCreated(
  "groups/{groupId}/messages/{messageId}",
  async (event) => {
    const { groupId, messageId } = event.params as any;
    const data = event.data?.data() as any;
    if (!data) return;

    // Existing behavior: notify group members except author
    // (Keep your current implementation if already present. This is a placeholder.)
    console.log("Message created", groupId, messageId, data?.text);
  }
);

// NEW: replies
export const onGroupReplyCreate = functions.firestore.onDocumentCreated(
  "groups/{groupId}/messages/{messageId}/replies/{replyId}",
  async (event) => {
    const { groupId, messageId, replyId } = event.params as any;
    const reply = event.data?.data() as any;
    if (!reply) return;

    try {
      const parentSnap = await db.doc(`groups/${groupId}/messages/${messageId}`).get();
      const parent = parentSnap.data() || {};
      const parentAuthor = parent.uid as string | undefined;

      // Gather distinct recipients: parent author + prior repliers (excluding sender)
      const repliersSnap = await db.collection(`groups/${groupId}/messages/${messageId}/replies`).get();
      const recipientSet = new Set<string>();
      if (parentAuthor && parentAuthor !== reply.uid) recipientSet.add(parentAuthor);
      repliersSnap.forEach((d) => {
        const u = (d.data() as any)?.uid;
        if (u && u !== reply.uid) recipientSet.add(u);
      });

      // Write notifications to each recipient's inbox
      const batch = db.batch();
      recipientSet.forEach((uid) => {
        const ref = db.doc(`users/${uid}/notifications/${groupId}__${messageId}__${replyId}`);
        batch.set(ref, {
          kind: "group-reply",
          groupId, messageId, replyId,
          text: reply.text || "",
          fromUid: reply.uid || null,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          read: false,
        }, { merge: true });
      });
      await batch.commit();
    } catch (e) {
      console.error("onGroupReplyCreate failed", e);
    }
  }
);
