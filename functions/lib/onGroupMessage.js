"use strict";
// functions/src/onGroupMessage.ts
// Notify group members when a new message or reply is posted in a group.
// - Uses group-centric membership: groups/{groupId}/members/{uid}
// - Excludes the author (data.uid)
// - Respects per-member 'muted' flag on groups/{groupId}/members/{uid}
// - Routes clicks to /groups/:slug (slug === groupId per user confirmation)
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
exports.onGroupReplyCreate = exports.onGroupMessageCreate = void 0;
const functions = __importStar(require("firebase-functions/v2"));
const admin = __importStar(require("firebase-admin"));
const notifications_1 = require("./notifications");
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
function previewText(text, max = 140) {
    const t = text.replace(/\s+/g, " ").trim();
    return t.length > max ? t.slice(0, max - 1) + "…" : t;
}
async function getActiveMemberUids(groupId, excludeUid) {
    const snap = await db.collection(`groups/${groupId}/members`).get();
    const list = snap.docs
        .filter((d) => !(d.data()?.muted === true)) // respect per-member mute
        .map((d) => d.id);
    return excludeUid ? list.filter((u) => u !== excludeUid) : list;
}
exports.onGroupMessageCreate = functions.firestore.onDocumentCreated("groups/{groupId}/messages/{messageId}", async (event) => {
    const { groupId, messageId } = event.params;
    const data = event.data?.data();
    if (!data)
        return;
    try {
        const authorUid = data.uid;
        // Load group for display name (fallback to groupId)
        const groupSnap = await db.doc(`groups/${groupId}`).get();
        const group = groupSnap.exists ? groupSnap.data() : {};
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
        };
        let delivered = 0;
        for (const uid of memberUids) {
            try {
                delivered += await (0, notifications_1.sendToUser)(uid, payload);
            }
            catch (e) {
                console.warn("onGroupMessageCreate: sendToUser failed", { uid, e });
            }
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
            }
            catch (e) {
                console.warn("onGroupMessageCreate: failed to write notification", e);
            }
        }
        console.log("onGroupMessageCreate: pushed", {
            groupId,
            messageId,
            members: memberUids.length,
            delivered,
        });
    }
    catch (err) {
        console.error("onGroupMessageCreate failed", err);
    }
});
exports.onGroupReplyCreate = functions.firestore.onDocumentCreated("groups/{groupId}/messages/{messageId}/replies/{replyId}", async (event) => {
    const { groupId, messageId, replyId } = event.params;
    const data = event.data?.data();
    if (!data)
        return;
    try {
        const replierUid = data.uid;
        const groupSnap = await db.collection("groups").doc(groupId).get();
        const group = groupSnap.data();
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
        };
        let delivered = 0;
        for (const uid of recipientUids) {
            try {
                delivered += await (0, notifications_1.sendToUser)(uid, payload);
            }
            catch (e) {
                console.warn("onGroupReplyCreate: sendToUser failed", { uid, e });
            }
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
            }
            catch (e) {
                console.warn("onGroupReplyCreate: failed to write notification", e);
            }
        }
        console.log("onGroupReplyCreate: pushed", { groupId, messageId, replyId, recipients: recipientUids.length, delivered });
    }
    catch (err) {
        console.error("onGroupReplyCreate failed", err);
    }
});
