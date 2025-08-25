// functions/src/onGroupMessage.ts
// Notify group members when a new message or reply is posted in a group.
// - Uses group-centric membership: groups/{groupId}/members/{uid}
// - Excludes the author (data.uid)
// - Respects per-member 'muted' flag on groups/{groupId}/members/{uid}
// - Routes clicks to /groups/:slug (slug === groupId per user confirmation)

import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";
import type { GroupDoc } from "./types/firestore";
import { sendToUser } from "./notifications";

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

      const memberUids = await getActiveMemberUids(groupId, authorUid);
      if (memberUids.length === 0) {
        console.log("onGroupMessageCreate: no recipients (after excluding author/muted)", { groupId, messageId, authorUid });
        return;
      }

      const body = data.text ? previewText(data.text, 160) : "New message posted.";
      const url = `/groups/${encodeURIComponent(slug)}`;

      const payload = {
        title: `New message in ${groupName}`,
        body,
        url,
        type: "group-message",
        groupId,
        messageId,
      } as Record<string, unknown>;

      let delivered = 0;
      for (const uid of memberUids) {
        delivered += await sendToUser(uid, payload);
        try {
          await db.collection(`users/${uid}/notifications`).add({
            type: "group-message",
            text: `New message in ${groupName}: ${body}`,
            href: url,
            groupId,
            groupName,
            messageId,
            read: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        } catch (e) {
          console.warn("onGroupMessageCreate: failed to write notification", e);
        }
      }

      console.log("onGroupMessageCreate: pushed", {
        groupId,
        messageId,
        members: memberUids.length,
        delivered,
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

      const body = data.text ? previewText(data.text, 160) : "New reply posted.";
      const url = `/groups/${encodeURIComponent(slug)}`;

      const payload = {
        title: `New reply in ${groupName}`,
        body,
        url,
        type: "group-reply",
        groupId,
        messageId,
        replyId,
      } as Record<string, unknown>;

      let delivered = 0;
      for (const uid of recipientUids) {
        delivered += await sendToUser(uid, payload);
        try {
          await db.collection(`users/${uid}/notifications`).add({
            type: "group-reply",
            text: `New reply in ${groupName}: ${body}`,
            href: url,
            groupId,
            groupName,
            messageId,
            replyId,
            read: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        } catch (e) {
          console.warn("onGroupReplyCreate: failed to write notification", e);
        }
      }

      console.log("onGroupReplyCreate: pushed", { groupId, messageId, replyId, recipients: recipientUids.length, delivered });
    } catch (err) {
      console.error("onGroupReplyCreate failed", err);
    }
  }
);
