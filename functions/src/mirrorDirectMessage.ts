// functions/src/mirrorDirectMessage.ts
// Mirrors legacy group-scoped DMs into global collections:
//   Threads  -> /dmThreads/{pairId}
//   Messages -> /dmMessages/{pairId}/messages/{msgId}
import * as admin from "firebase-admin";
import { onDocumentCreated } from "firebase-functions/v2/firestore";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

export const mirrorDirectMessageCreate = onDocumentCreated(
  {
    document: "groups/{groupId}/directMessages/{pairId}/messages/{msgId}",
    region: "us-central1",
    retry: true,
  },
  async (event) => {
    const { groupId, pairId, msgId } = event.params as {
      groupId: string;
      pairId: string;
      msgId: string;
    };
    const snap = event.data;
    if (!snap) return;

    const data = snap.data() as {
      text?: string;
      from: string;
      to?: string;
      displayName?: string;
      createdAt?: FirebaseFirestore.Timestamp | admin.firestore.FieldValue;
    };

    try {
      // Determine participants: author + recipients
      const authorUid = data.from;
      let recipients: string[] = [];

      if (data.to && data.to !== authorUid) {
        recipients = [data.to];
      } else {
        const pairDoc = await db.doc(`groups/${groupId}/directMessages/${pairId}`).get();
        const users = (pairDoc.data()?.users as string[]) || [];
        recipients = users.filter((u) => u && u !== authorUid);
      }
      const participants = Array.from(new Set([authorUid, ...recipients])).sort();

      // Mirror message into global path
      const globalMsgRef = db.doc(`dmMessages/${pairId}/messages/${msgId}`);
      await globalMsgRef.set(
        {
          ...data,
          groupId,
          pairId,
        },
        { merge: false }
      );

      // Upsert global thread metadata
      const threadRef = db.doc(`dmThreads/${pairId}`);
      await threadRef.set(
        {
          users: participants,
          lastText: data.text ?? "",
          lastAt: admin.firestore.FieldValue.serverTimestamp(),
          lastSender: authorUid,
        },
        { merge: true }
      );
      // Merge sender name (if provided) into userNames map without clobbering
      if (data.displayName) {
        await threadRef.set({ [`userNames.${authorUid}`]: data.displayName }, { merge: true });
      }
    } catch (err) {
      console.error("mirrorDirectMessageCreate failed", { groupId, pairId, msgId, err });
    }
  }
);
