// functions/src/onResourceCreated.ts
// Fires when a new resource is added under a group and pushes a notification to the group.
// - Uses group-centric membership (notifications helper determines recipients)
// - Routes clicks to /groups/:slug (user confirmed slug === groupId)
// - Does not touch onGroupMessage/onGroupReply logic

import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";
import { sendToGroup, type DataPayload } from "./notifications";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

export const onResourceCreated = functions.firestore.onDocumentCreated(
  "groups/{groupId}/resources/{resourceId}",
  async (event) => {
    const { groupId, resourceId } = event.params as { groupId: string; resourceId: string };
    const resource = event.data?.data() as Record<string, unknown> | undefined;
    if (!resource) return;

    try {
      // Friendly group name and slug
      const groupDoc = await db.doc(`groups/${groupId}`).get();
      const group = groupDoc.exists ? (groupDoc.data() as Record<string, unknown>) : {};
      const groupName = (group?.name as string) || (group?.title as string) || String(groupId);
      const slug = (group?.slug as string) || String(groupId);
      const url = `/groups/${encodeURIComponent(slug)}`;

      const title = resource.title ? String(resource.title) : `New resource in ${groupName}`;
      const body =
        resource.description ? String(resource.description) : "Tap to view the latest resource.";

      const payload: DataPayload = {
        title,
        body,
        url,
        type: "resource",
        icon: "/icons/icon-192.png",
        badge: "/icons/icon-192.png",
        groupId: String(groupId),
        resourceId: String(resourceId),
      };

      const delivered = await sendToGroup(groupId, payload);

      // Also create an unread notification doc for each group member
      const membersSnap = await db.collection(`groups/${groupId}/members`).get();
      const authorUid = typeof resource.uid === "string" ? String(resource.uid) : undefined;
      const memberUids = membersSnap.docs.map((d) => d.id).filter((uid) => uid !== authorUid);
      for (const uid of memberUids) {
        try {
          await db.collection(`users/${uid}/notifications`).add({
            type: "resource",
            text: `New resource in ${groupName}: ${title}`,
            href: url,
            groupId,
            groupName,
            resourceId,
            read: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        } catch (e) {
          console.warn("onResourceCreated: failed to write notification", e);
        }
      }

      console.log("onResourceCreated: pushed", {
        groupId,
        resourceId,
        title,
        delivered,
      });
    } catch (err) {
      console.error("onResourceCreated failed", err);
    }
  }
);
