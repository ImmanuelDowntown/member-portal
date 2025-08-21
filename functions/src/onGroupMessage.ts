// functions/src/onGroupMessage.ts
// Notify group members when a new message or reply is posted in a group.
// - Uses group-centric membership: groups/{groupId}/members/{uid}
// - Excludes the author (data.uid)
// - Respects per-member 'muted' flag on groups/{groupId}/members/{uid}
// - Routes clicks to /groups/:slug (slug === groupId per user confirmation)

import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";
import type { GroupDoc } from "./types/firestore";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

type MessageDoc = {
  uid: string;           // author's uid
  text?: string;         // message body
  displayName?: string;  // author's display name (optional)
  createdAt?: FirebaseFirestore.Timestamp;
};

function previewText(text: string, max = 140): string {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}

async function getActiveMemberUids(groupId: string, excludeUid?: string): Promise<string[]> {
  const snap = await db.collection(`groups/${groupId}/members`).get();
  const list = snap.docs
    .filter((d) => !(d.data()?.muted === true)) // respect per-member mute
    .map((d) => d.id);
  return excludeUid ? list.filter((u) => u !== excludeUid) : list;
}

async function getUserTokens(uid: string): Promise<string[]> {
  const snap = await db.collection(`users/${uid}/pushTokens`).get();
  const tokens: string[] = [];
  snap.forEach((doc) => {
    const data = doc.data() as { token?: string };
    tokens.push(data?.token || doc.id);
  });
  // Dedupe in case of duplicates
  return Array.from(new Set(tokens));
}

export const onGroupMessageCreate = functions.firestore.onDocumentCreated(
  "groups/{groupId}/messages/{messageId}",
  async (event) => {
    const { groupId, messageId } = event.params as { groupId: string; messageId: string };
    const data = event.data?.data() as MessageDoc | undefined;
    if (!data) return;

    try {
      const authorUid = data.uid;
      // Load group for display name (fallback to groupId)
      const groupSnap = await db.doc(`groups/${groupId}`).get();
      const group = groupSnap.exists ? (groupSnap.data() as Partial<GroupDoc>) : {};
      const groupName = group?.name || groupId;
      const slug = groupId; // user confirmed: slug is the doc ID

      // Build tokens list: all members except author, and not muted
      const memberUids = await getActiveMemberUids(groupId, authorUid);
      if (memberUids.length === 0) {
        console.log("onGroupMessageCreate: no recipients (after excluding author/muted)", { groupId, messageId, authorUid });
        return;
      }
      const tokenLists = await Promise.all(memberUids.map(getUserTokens));
      const tokens = Array.from(new Set(tokenLists.flat().filter(Boolean)));
      if (tokens.length === 0) {
        console.log("onGroupMessageCreate: no device tokens for members", { groupId, messageId });
        return;
      }

      const body = data.text ? previewText(data.text, 160) : "New message posted.";
      const url = `/groups/${encodeURIComponent(slug)}`;

      const message = {
        notification: {
          title: `New message in ${groupName}`,
          body,
        },
        data: {
          title: `New message in ${groupName}`,
          body,
          url,
          type: "group-message",
          groupId,
          messageId,
        },
        webpush: {
          notification: {
            title: `New message in ${groupName}`,
            body,
          },
          fcmOptions: {
            link: url,
          },
        },
        tokens,
      } as admin.messaging.MulticastMessage;

      const resp = await admin.messaging().sendEachForMulticast(message);
      const delivered = resp.responses.filter((r) => r.success).length;
      const failures = resp.responses.filter((r) => !r.success).length;

      console.log("onGroupMessageCreate: pushed", {
        groupId,
        messageId,
        members: memberUids.length,
        tokens: tokens.length,
        delivered,
        failures,
      });
    } catch (err) {
      console.error("onGroupMessageCreate failed", err);
    }
  }
);

export const onGroupReplyCreate = functions.firestore.onDocumentCreated(
  "groups/{groupId}/messages/{messageId}/replies/{replyId}",
  async (event) => {
    const { groupId, messageId, replyId } = event.params as { groupId: string; messageId: string; replyId: string };
    const data = event.data?.data() as MessageDoc | undefined;
    if (!data) return;
    try {
      const replierUid = data.uid;
      const groupSnap = await db.collection("groups").doc(groupId).get();
      const group = groupSnap.data() as Partial<GroupDoc> | undefined;
      const groupName = group?.name || groupId;
      const slug = groupId; // id is slug

      const recipientUids = await getActiveMemberUids(groupId, replierUid);
      if (recipientUids.length === 0) {
        console.log("onGroupReplyCreate: no recipients (after excluding replier/muted)", { groupId, messageId, replyId });
        return;
      }

      const tokenSets = await Promise.all(recipientUids.map((u) => getUserTokens(u)));
      const tokens = Array.from(new Set(tokenSets.flat()));
      if (tokens.length === 0) {
        console.log("onGroupReplyCreate: no device tokens for members", { groupId, messageId, replyId });
        return;
      }

      const body = data.text ? previewText(data.text, 160) : "New reply posted.";
      const url = `/groups/${encodeURIComponent(slug)}`;

      const message = {
        notification: {
          title: `New reply in ${groupName}`,
          body,
        },
        data: {
          title: `New reply in ${groupName}`,
          body,
          url,
          type: "group-reply",
          groupId,
          messageId,
          replyId,
        },
        webpush: {
          notification: {
            title: `New reply in ${groupName}`,
            body,
          },
          fcmOptions: {
            link: url,
          },
        },
        tokens,
      } as admin.messaging.MulticastMessage;

      const resp = await admin.messaging().sendEachForMulticast(message);
      const success = resp.responses.filter(r => r.success).length;
      const failure = resp.responses.length - success;
      console.log("onGroupReplyCreate: sent", { groupId, messageId, replyId, tokens: tokens.length, success, failure });
    } catch (err) {
      console.error("onGroupReplyCreate failed", err);
    }
  }
);
