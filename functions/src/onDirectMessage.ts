// functions/src/onDirectMessage.ts
// Push a notification to the recipient when a new DM message is created.
// Path: groups/{groupId}/directMessages/{pairId}/messages/{msgId}
import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";
import { sendToUser } from "./notifications";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

type DmMessage = {
  text?: string;
  from: string;
  to?: string;
  displayName?: string;
  createdAt?: FirebaseFirestore.Timestamp;
};

function preview(text: string, max = 140): string {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}

export const onDirectMessageCreate = functions.firestore.onDocumentCreated(
  "groups/{groupId}/directMessages/{pairId}/messages/{msgId}",
  async (event) => {
    const { groupId, pairId, msgId } = event.params as { groupId: string; pairId: string; msgId: string };
    const data = event.data?.data() as DmMessage | undefined;
    if (!data) return;

    try {
      const authorUid = data.from;
      // Determine recipient: prefer explicit 'to', else read pair users[]
      let recipients: string[] = [];
      if (data.to && data.to !== authorUid) {
        recipients = [data.to];
      } else {
        const pairDoc = await db.doc(`groups/${groupId}/directMessages/${pairId}`).get();
        const users = (pairDoc.data()?.users as string[]) || [];
        recipients = users.filter((u) => u && u !== authorUid);
      }
      recipients = Array.from(new Set(recipients)).filter(Boolean);
      if (recipients.length === 0) {
        console.log("onDirectMessageCreate: no recipients", { groupId, pairId, msgId });
        return;
      }

      const senderName = data.displayName || "New message";
      const body = data.text ? preview(data.text, 160) : "Tap to view the message.";
      const payload: Record<string, unknown> = {
        title: `Message from ${senderName}`,
        body,
        type: "dm-message",
        groupId,
        pairId,
        msgId,
        fromUid: authorUid,
        url: "/dashboard",
      };
      let delivered = 0;
      for (const uid of recipients) {
        delivered += await sendToUser(uid, payload);
      }
      console.log("onDirectMessageCreate: pushed", {
        groupId,
        pairId,
        msgId,
        recipients: recipients.length,
        delivered,
      });
    } catch (err) {
      console.error("onDirectMessageCreate failed", err);
    }
  }
);
