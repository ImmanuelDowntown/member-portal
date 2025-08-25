// functions/src/onDmDockMessage.ts
// Push a notification to the recipient when a new DM Dock message is created.
// Path: dmMessages/{pairId}/messages/{msgId}

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
  groupId?: string; // optional, may be present when mirrored
};

function preview(text: string, max = 140): string {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}

export const onDmDockMessageCreate = functions.firestore.onDocumentCreated(
  "dmMessages/{pairId}/messages/{msgId}",
  async (event) => {
    const { pairId, msgId } = event.params as { pairId: string; msgId: string };
    const data = event.data?.data() as DmMessage | undefined;
    if (!data) return;

    try {
      const authorUid = data.from;
      let recipients: string[] = [];
      if (data.to && data.to !== authorUid) {
        recipients = [data.to];
      } else {
        const threadDoc = await db.doc(`dmThreads/${pairId}`).get();
        const users = (threadDoc.data()?.users as string[]) || [];
        recipients = users.filter((u) => u && u !== authorUid);
      }
      recipients = Array.from(new Set(recipients)).filter(Boolean);
      if (recipients.length === 0) {
        console.log("onDmDockMessageCreate: no recipients", { pairId, msgId });
        return;
      }

      const senderName = data.displayName || "New message";
      const body = data.text
        ? preview(data.text, 160)
        : "Tap to view the message.";
      const payload: Record<string, unknown> = {
        title: `Message from ${senderName}`,
        body,
        type: "dm-message",
        pairId,
        msgId,
        fromUid: authorUid,
        url: "/dashboard",
        ...(data.groupId ? { groupId: data.groupId } : {}),
      };
      let delivered = 0;
      for (const uid of recipients) {
        delivered += await sendToUser(uid, payload);
        // Also write a notification document for in-app display
        try {
          await db.collection(`users/${uid}/notifications`).add({
            type: "dm-message",
            text: `Message from ${senderName}: ${body}`,
            href: "/dashboard",
            pairId,
            msgId,
            fromUid: authorUid,
            read: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        } catch (e) {
          console.warn("onDmDockMessageCreate: failed to write notification", e);
        }
      }
      console.log("onDmDockMessageCreate: pushed", {
        pairId,
        msgId,
        recipients: recipients.length,
        delivered,
      });
    } catch (err) {
      console.error("onDmDockMessageCreate failed", err);
    }
  }
);
