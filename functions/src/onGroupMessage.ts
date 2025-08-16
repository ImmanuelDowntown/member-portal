// functions/src/onGroupMessage.ts
import * as admin from "firebase-admin";
import * as functions from "firebase-functions/v1";

const db = admin.firestore();

/**
 * On group message creation, notify all MEMBERS and GROUP ADMINS of that group,
 * excluding the sender.
 *
 * Sources of truth (doc id must be the user's uid):
 *   - groups/{groupId}/members/{uid}
 *   - groups/{groupId}/groupAdmins/{uid}
 */
export const onGroupMessageCreated = functions.firestore
  .document("groups/{groupId}/messages/{msgId}")
  .onCreate(async (snap, ctx) => {
    const { groupId, msgId } = ctx.params as { groupId: string; msgId: string };
    const data = snap.data() as any;
    const senderUid: string | undefined = data?.uid;

    // Load group metadata (friendly name)
    const groupRef = db.collection("groups").doc(groupId);
    const groupSnap = await groupRef.get();
    const groupName = (groupSnap.exists && (groupSnap.data()?.name as string)) || groupId;

    // Recipients = union(members, groupAdmins)
    const recipients = new Set<string>();

    const [membersSnap, adminsSnap] = await Promise.all([
      groupRef.collection("members").get(),
      groupRef.collection("groupAdmins").get(),
    ]);

    membersSnap.forEach((d) => recipients.add(d.id));
    adminsSnap.forEach((d) => recipients.add(d.id));

    // Exclude the sender
    if (senderUid) recipients.delete(senderUid);

    if (recipients.size === 0) return;

    const payload = {
      type: "group_message",
      text: `You have a new message in the ${groupName} group.`,
      href: `/groups/${groupId}`,
      groupId,
      groupName,
      messageId: msgId,
      read: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await Promise.all(
      Array.from(recipients).map((uid) =>
        db.collection("users").doc(uid).collection("notifications").add(payload)
      )
    );
  });
