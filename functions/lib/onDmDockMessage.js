import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

if (admin.apps.length === 0) {
  admin.initializeApp();
}
const db = admin.firestore();
const messaging = admin.messaging();

type DMMessage = {
  from?: string;
  to?: string[];            // optional; fallback to thread doc
  text?: string;
  groupId?: string;         // optional: if associated with a group
  createdAt?: FirebaseFirestore.Timestamp;
};

type DMThread = {
  members?: string[];       // [senderUid, recipientUid]
  groupId?: string;         // optional
};

function preview(text?: string, max = 120): string {
  if (!text) return "";
  const trimmed = text.replace(/\s+/g, " ").trim();
  return trimmed.length > max ? `${trimmed.slice(0, max - 1)}…` : trimmed;
}

async function getUserTokens(uid: string): Promise<string[]> {
  // Adjust the path/field names if your schema differs.
  // Expected: users/{uid}/pushTokens/{docId} with { token: "<fcm-token>" }
  const snap = await db.collection(`users/${uid}/pushTokens`).get();
  const tokens: string[] = [];
  snap.forEach((d) => {
    const t = d.get("token");
    if (typeof t === "string" && t) tokens.push(t);
  });
  // de-dupe
  return Array.from(new Set(tokens));
}

export const onDmDockMessage = onDocumentCreated(
  { region: "us-central1" },
  "dmMessages/{pairId}/messages/{msgId}",
  async (event): Promise<void> => {
    try {
      const { pairId, msgId } = event.params as { pairId: string; msgId: string };

      const data = (event.data?.data() ?? {}) as DMMessage;
      if (!data.text || !data.from) {
        logger.info("Skipping notification: missing text/from", { pairId, msgId });
        return;
      }

      // figure out recipients
      let recipients: string[] | undefined = data.to;
      let groupId: string | undefined = data.groupId;

      if (!recipients || recipients.length === 0 || recipients.some((r) => !r)) {
        const threadSnap = await db.doc(`dmThreads/${pairId}`).get();
        const thread = (threadSnap.data() ?? {}) as DMThread;
        recipients = (thread.members ?? []).filter(Boolean) as string[];
        if (!groupId && thread.groupId) groupId = thread.groupId;
      }

      // exclude the sender
      const toUids = (recipients ?? []).filter((u) => u && u !== data.from);
      if (toUids.length === 0) {
        logger.info("No recipients (after excluding sender); nothing to notify", { pairId, msgId });
        return;
      }

      // collect tokens
      const tokenSets = await Promise.all(toUids.map(getUserTokens));
      const tokens = Array.from(new Set(tokenSets.flat().filter(Boolean)));

      if (tokens.length === 0) {
        logger.info("No FCM tokens for recipients; skipping send", { toUids });
        return;
      }

      const title = groupId ? "New group message" : "New message";
      const body = preview(data.text, 120);

      const payload = {
        notification: { title, body },
        data: {
          type: groupId ? "group_dm" : "dm",
          pairId,
          msgId,
          from: data.from,
          ...(groupId ? { groupId } : {}),
        },
        // Web push hints (adjust to your app needs)
        webpush: {
          fcmOptions: { link: groupId ? `/groups/${groupId}` : `/dm/${pairId}` },
        },
      } as admin.messaging.MessagingPayload;

      const resp = await messaging.sendEachForMulticast({
        tokens,
        data: payload.data,
        notification: payload.notification,
        webpush: payload.webpush as admin.messaging.WebpushConfig,
      });

      const delivered = resp.responses.filter((r) => r.success).length;
      const failed = resp.responses.filter((r) => !r.success).length;

      logger.info("DM notify result", {
        pairId,
        msgId,
        recipients: toUids,
        tokens: tokens.length,
        delivered,
        failed,
        errors: resp.responses
          .map((r) => r.error?.message)
          .filter(Boolean)
          .slice(0, 5), // keep log tidy
      });

      // prune dead tokens (optional but recommended)
      if (failed > 0) {
        const dead = resp.responses
          .map((r, i) => (!r.success ? tokens[i] : null))
          .filter(Boolean) as string[];
        if (dead.length) {
          logger.info("Pruning invalid tokens", { count: dead.length });
          // remove any dead tokens from users’ pushTokens collections (left as an exercise)
        }
      }
    } catch (err: any) {
      logger.error("onDmDockMessage failed", { message: err?.message, stack: err?.stack });
    }
