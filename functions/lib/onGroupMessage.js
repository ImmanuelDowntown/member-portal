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
 * On group message creation, notify all MEMBERS and GROUP ADMINS of that group,
 * excluding the sender.
 *
 * Sources of truth (doc id must be the user's uid):
 *   - groups/{groupId}/members/{uid}
 *   - groups/{groupId}/groupAdmins/{uid}
 */
exports.onGroupMessageCreated = functions.firestore
    .document("groups/{groupId}/messages/{msgId}")
    .onCreate(async (snap, ctx) => {
    const { groupId, msgId } = ctx.params;
    const data = snap.data();
    const senderUid = data?.uid;
    // Load group metadata (friendly name)
    const groupRef = db.collection("groups").doc(groupId);
    const groupSnap = await groupRef.get();
    const groupName = (groupSnap.exists && groupSnap.data()?.name) || groupId;
    // Recipients = union(members, groupAdmins)
    const recipients = new Set();
    const [membersSnap, adminsSnap] = await Promise.all([
        groupRef.collection("members").get(),
        groupRef.collection("groupAdmins").get(),
    ]);
    membersSnap.forEach((d) => recipients.add(d.id));
    adminsSnap.forEach((d) => recipients.add(d.id));
    // Exclude the sender
    if (senderUid)
        recipients.delete(senderUid);
    if (recipients.size === 0)
        return;
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
    await Promise.all(Array.from(recipients).map((uid) => db.collection("users").doc(uid).collection("notifications").add(payload)));
});
