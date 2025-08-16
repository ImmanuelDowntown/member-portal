"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGroupMessageCreated = void 0;
// functions/src/onGroupMessage.ts
const admin = __importStar(require("firebase-admin"));
const functions = __importStar(require("firebase-functions/v1"));
const db = admin.firestore();
/**
 * On group message creation, notify group members.
 * Default now: includes the sender (so a solo-member group still gets a notification).
 */
exports.onGroupMessageCreated = functions.firestore
    .document("groups/{groupId}/messages/{msgId}")
    .onCreate(async (snap, ctx) => {
    const { groupId, msgId } = ctx.params;
    const data = snap.data();
    const senderUid = data?.uid;
    // Load group metadata (for name)
    const groupSnap = await db.collection("groups").doc(groupId).get();
    const groupName = (groupSnap.exists && groupSnap.data()?.name) || groupId;
    // Gather recipients
    const recipients = new Set();
    // 1) Preferred: groups/{groupId}/members/{uid}
    try {
        const memSnap = await db.collection("groups").doc(groupId).collection("members").get();
        memSnap.forEach((d) => recipients.add(d.id));
    }
    catch (e) {
        console.warn("members subcollection read failed (fallback to user mirrors)", e);
    }
    // 2) Fallback: collectionGroup over users/*/memberships with groupId OR groupSlug
    if (recipients.size === 0) {
        const cg = db.collectionGroup("memberships");
        const [byId, bySlug] = await Promise.all([
            cg.where("groupId", "==", groupId).get(),
            cg.where("groupSlug", "==", groupId).get(),
        ]);
        for (const d of byId.docs.concat(bySlug.docs)) {
            const userDocRef = d.ref.parent.parent; // users/{uid}
            if (userDocRef)
                recipients.add(userDocRef.id);
        }
    }
    // NOTE: We no longer remove the sender so solo-member groups still get a notification.
    // If you want to exclude the sender again, uncomment the line below:
    // if (senderUid) recipients.delete(senderUid);
    if (recipients.size === 0)
        return;
    const notifText = `You have a new message in the ${groupName} group.`;
    const payload = {
        type: "group_message",
        text: notifText,
        href: `/groups/${groupId}`,
        groupId,
        groupName,
        messageId: msgId,
        read: false,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const writes = [];
    recipients.forEach((uid) => {
        writes.push(db.collection("users").doc(uid).collection("notifications").add(payload));
    });
    await Promise.all(writes);
});
