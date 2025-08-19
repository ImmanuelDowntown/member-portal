// functions/src/onResourceCreated.ts
// Fires when a new resource is added under a group and pushes a notification to the group.
// Minimal wiring that relies on the shared sendToGroup() helper.
// If you later need to exclude the author or respect per‑group prefs, do it inside notifications.ts.

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
      // Try to pull a friendly group name and slug for the click‑through URL
      const groupDoc = await db.doc(`groups/${groupId}`).get();
      const group = groupDoc.exists ? (groupDoc.data() as Record<string, unknown>) : {};
      const groupName =
        (group?.name as string) ||
        (group?.title as string) ||
        "your group";

      const slug =
        (group?.slug as string) ||
        String(groupId);
      const url = `/groups/${slug}`; // matches your web route: /groups/:slug

      // Build a string‑only data payload for FCM
      const payload: DataPayload = {
        title: resource.title ? String(resource.title) : `New resource in ${groupName}`,
        body: resource.description ? String(resource.description) : "Tap to view the latest resource.",
        url,
        type: "resource",
        icon: "/icons/icon-192.png",
        badge: "/icons/icon-192.png",
      };

      const delivered = await sendToGroup(groupId, payload);
      console.log(`onResourceCreated: sent to ${delivered} users`, { groupId, resourceId, title: payload.title });
    } catch (e) {
      console.error("onResourceCreated failed", e);
    }
  }
);
