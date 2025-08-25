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
exports.onDirectMessageCreate = void 0;
// functions/src/onDirectMessage.ts
// Push a notification to the recipient when a new DM message is created.
// Path: groups/{groupId}/directMessages/{pairId}/messages/{msgId}
const functions = __importStar(require("firebase-functions/v2"));
const admin = __importStar(require("firebase-admin"));
const notifications_1 = require("./notifications");
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
function preview(text, max = 140) {
    const t = text.replace(/\s+/g, " ").trim();
    return t.length > max ? t.slice(0, max - 1) + "…" : t;
}
exports.onDirectMessageCreate = functions.firestore.onDocumentCreated("groups/{groupId}/directMessages/{pairId}/messages/{msgId}", async (event) => {
    const { groupId, pairId, msgId } = event.params;
    const data = event.data?.data();
    if (!data)
        return;
    try {
        const authorUid = data.from;
        // Determine recipient: prefer explicit 'to', else read pair users[]
        let recipients = [];
        if (data.to && data.to !== authorUid) {
            recipients = [data.to];
        }
        else {
            const pairDoc = await db.doc(`groups/${groupId}/directMessages/${pairId}`).get();
            const users = pairDoc.data()?.users || [];
            recipients = users.filter((u) => u && u !== authorUid);
        }
        recipients = Array.from(new Set(recipients)).filter(Boolean);
        if (recipients.length === 0) {
            console.log("onDirectMessageCreate: no recipients", { groupId, pairId, msgId });
            return;
        }
        const senderName = data.displayName || "New message";
        const body = data.text ? preview(data.text, 160) : "Tap to view the message.";
        const payload = {
            title: `Message from ${senderName}`,
            body,
            type: "dm-message",
            groupId,
            pairId,
            msgId,
            fromUid: authorUid,
            url: "/dashboard",
        };
        let delivered = 0;
        for (const uid of recipients) {
            delivered += await (0, notifications_1.sendToUser)(uid, payload);
        }
        console.log("onDirectMessageCreate: pushed", {
            groupId,
            pairId,
            msgId,
            recipients: recipients.length,
            delivered,
        });
    }
    catch (err) {
        console.error("onDirectMessageCreate failed", err);
    }
});
