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
exports.onGroupReplyCreate = exports.onGroupMessageCreate = void 0;
const functions = __importStar(require("firebase-functions/v2"));
const admin = __importStar(require("firebase-admin"));
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
exports.onGroupMessageCreate = functions.firestore.onDocumentCreated("groups/{groupId}/messages/{messageId}", async (event) => {
    const { groupId, messageId } = event.params;
    const data = event.data?.data();
    if (!data)
        return;
    // Existing behavior: notify group members except author
    // (Keep your current implementation if already present. This is a placeholder.)
    console.log("Message created", groupId, messageId, data?.text);
});
// NEW: replies
exports.onGroupReplyCreate = functions.firestore.onDocumentCreated("groups/{groupId}/messages/{messageId}/replies/{replyId}", async (event) => {
    const { groupId, messageId, replyId } = event.params;
    const reply = event.data?.data();
    if (!reply)
        return;
    try {
        const parentSnap = await db.doc(`groups/${groupId}/messages/${messageId}`).get();
        const parent = parentSnap.data() || {};
        const parentAuthor = parent.uid;
        // Gather distinct recipients: parent author + prior repliers (excluding sender)
        const repliersSnap = await db.collection(`groups/${groupId}/messages/${messageId}/replies`).get();
        const recipientSet = new Set();
        if (parentAuthor && parentAuthor !== reply.uid)
            recipientSet.add(parentAuthor);
        repliersSnap.forEach((d) => {
            const u = d.data()?.uid;
            if (u && u !== reply.uid)
                recipientSet.add(u);
        });
        // Write notifications to each recipient's inbox
        const batch = db.batch();
        recipientSet.forEach((uid) => {
            const ref = db.doc(`users/${uid}/notifications/${groupId}__${messageId}__${replyId}`);
            batch.set(ref, {
                kind: "group-reply",
                groupId, messageId, replyId,
                text: reply.text || "",
                fromUid: reply.uid || null,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                read: false,
            }, { merge: true });
        });
        await batch.commit();
    }
    catch (e) {
        console.error("onGroupReplyCreate failed", e);
    }
});
