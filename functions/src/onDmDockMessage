// functions/src/onDmDockMessage.ts
// Push a notification to the recipient when a new DM Dock message is created.
// Path: dmMessages/{pairId}/messages/{msgId}

import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";

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

async function getUserTokens(uid: string): Promise<string[]> {
  const snap = await db.collection(`users/${uid}/pushTokens`).get();
  const tokens: string[] = [];
  snap.forEach((doc) => {
    const data = doc.data() as { token?: string };
    const tok = (data && data.token) || doc.id;
    if (tok) tokens.push(tok);
  });
  return Array.from(new Set(tokens));
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

      const tokenLists = await Promise.all(recipients.map(getUserTokens));
      const tokens = Array.from(new Set(tokenLists.flat().filter(Boolean)));
      if (tokens.length === 0) {
        console.log("onDmDockMessageCreate: recipients have no push tokens", {
          pairId,
          msgId,
        });
        return;
      }

      const senderName = data.displayName || "New message";
      const body = data.text
        ? preview(data.text, 160)
        : "Tap to view the message.";
      const url = "/dashboard";

      const message: admin.messaging.MulticastMessage = {
        notification: {
          title: `Message from ${senderName}`,
          body,
        },
        data: {
          title: `Message from ${senderName}`,
          body,
          type: "dm-message",
          pairId,
          msgId,
          fromUid: authorUid,
          ...(data.groupId ? { groupId: data.groupId } : {}),
        },
        webpush: {
          notification: {
            title: `Message from ${senderName}`,
            body,
          },
          fcmOptions: {
            link: url,
          },
        },
        tokens,
      };

      const resp = await admin.messaging().sendEachForMulticast(message);
      const delivered = resp.responses.filter((r) => r.success).length;
      const failures = resp.responses.length - delivered;
      console.log("onDmDockMessageCreate: pushed", {
        pairId,
        msgId,
        recipients: recipients.length,
        tokens: tokens.length,
        delivered,
        failures,
      });
    } catch (err) {
      console.error("onDmDockMessageCreate failed", err);
    }
  }
);
