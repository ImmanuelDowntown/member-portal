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
exports.mirrorDirectMessageCreate = void 0;
// functions/src/mirrorDirectMessage.ts
// Mirrors legacy group-scoped DMs into global collections:
//   Threads  -> /dmThreads/{pairId}
//   Messages -> /dmMessages/{pairId}/messages/{msgId}
const admin = __importStar(require("firebase-admin"));
const firestore_1 = require("firebase-functions/v2/firestore");
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
exports.mirrorDirectMessageCreate = (0, firestore_1.onDocumentCreated)({
    document: "groups/{groupId}/directMessages/{pairId}/messages/{msgId}",
    region: "us-central1",
    retry: true,
}, async (event) => {
    const { groupId, pairId, msgId } = event.params;
    const snap = event.data;
    if (!snap)
        return;
    const data = snap.data();
    try {
        // Determine participants: author + recipients
        const authorUid = data.from;
        let recipients = [];
        if (data.to && data.to !== authorUid) {
            recipients = [data.to];
        }
        else {
            const pairDoc = await db.doc(`groups/${groupId}/directMessages/${pairId}`).get();
            const users = pairDoc.data()?.users || [];
            recipients = users.filter((u) => u && u !== authorUid);
        }
        const participants = Array.from(new Set([authorUid, ...recipients])).sort();
        // Mirror message into global path
        const globalMsgRef = db.doc(`dmMessages/${pairId}/messages/${msgId}`);
        await globalMsgRef.set({
            ...data,
            groupId,
            pairId,
        }, { merge: false });
        // Upsert global thread metadata
        const threadRef = db.doc(`dmThreads/${pairId}`);
        await threadRef.set({
            users: participants,
            lastText: data.text ?? "",
            lastAt: admin.firestore.FieldValue.serverTimestamp(),
            lastSender: authorUid,
        }, { merge: true });
        // Merge sender name (if provided) into userNames map without clobbering
        if (data.displayName) {
            await threadRef.set({ [`userNames.${authorUid}`]: data.displayName }, { merge: true });
        }
    }
    catch (err) {
        console.error("mirrorDirectMessageCreate failed", { groupId, pairId, msgId, err });
    }
});
