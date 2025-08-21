// functions/src/onDirectMessage.ts
// Push a notification to the recipient when a new DM message is created.
// Path: groups/{groupId}/directMessages/{pairId}/messages/{msgId}
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
    // fallback to doc.id for older records
    const tok = (data && data.token) || doc.id;
    if (tok) tokens.push(tok);
  });
  return Array.from(new Set(tokens));
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

      // Collect device tokens for all recipients
      const tokenLists = await Promise.all(recipients.map(getUserTokens));
      const tokens = Array.from(new Set(tokenLists.flat().filter(Boolean)));
      if (tokens.length === 0) {
        console.log("onDirectMessageCreate: recipients have no push tokens", { groupId, pairId, msgId });
        return;
      }

      const senderName = data.displayName || "New message";
      const body = data.text ? preview(data.text, 160) : "Tap to view the message.";
      // Open the app; DM dock is global. If you want a deep link, we can add a route param later.
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
          groupId,
          pairId,
          msgId,
          fromUid: authorUid,
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
      console.log("onDirectMessageCreate: pushed", {
        groupId,
        pairId,
        msgId,
        recipients: recipients.length,
        tokens: tokens.length,
        delivered,
        failures,
      });
    } catch (err) {
      console.error("onDirectMessageCreate failed", err);
    }
  }
);
