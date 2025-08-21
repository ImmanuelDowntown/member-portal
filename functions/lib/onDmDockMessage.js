"use strict";
// functions/src/onDmDockMessage.ts
// Push a notification to the recipient when a new DM Dock message is created.
// Path: dmMessages/{pairId}/messages/{msgId}
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
exports.onDmDockMessageCreate = void 0;
const functions = __importStar(require("firebase-functions/v2"));
const admin = __importStar(require("firebase-admin"));
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
function preview(text, max = 140) {
    const t = text.replace(/\s+/g, " ").trim();
    return t.length > max ? t.slice(0, max - 1) + "…" : t;
}
async function getUserTokens(uid) {
    const snap = await db.collection(`users/${uid}/pushTokens`).get();
    const tokens = [];
    snap.forEach((doc) => {
        const data = doc.data();
        const tok = (data && data.token) || doc.id;
        if (tok)
            tokens.push(tok);
    });
    return Array.from(new Set(tokens));
}
exports.onDmDockMessageCreate = functions.firestore.onDocumentCreated("dmMessages/{pairId}/messages/{msgId}", async (event) => {
    const { pairId, msgId } = event.params;
    const data = event.data?.data();
    if (!data)
        return;
    try {
        const authorUid = data.from;
        let recipients = [];
        if (data.to && data.to !== authorUid) {
            recipients = [data.to];
        }
        else {
            const threadDoc = await db.doc(`dmThreads/${pairId}`).get();
            const users = threadDoc.data()?.users || [];
            recipients = users.filter((u) => u && u !== authorUid);
        }
        recipients = Array.from(new Set(recipients)).filter(Boolean);
        if (recipients.length === 0) {
            console.log("onDmDockMessageCreate: no recipients", { pairId, msgId });
            return;
        }
        const tokenLists = await Promise.all(recipients.map(getUserTokens));
        const tokens = Array.from(new Set(tokenLists.flat().filter(Boolean)));
        if (tokens.length === 0) {
            console.log("onDmDockMessageCreate: recipients have no push tokens", {
                pairId,
                msgId,
            });
            return;
        }
        const senderName = data.displayName || "New message";
        const body = data.text
            ? preview(data.text, 160)
            : "Tap to view the message.";
        const url = "/dashboard";
        const message = {
            notification: {
                title: `Message from ${senderName}`,
                body,
            },
            data: {
                title: `Message from ${senderName}`,
                body,
                type: "dm-message",
                pairId,
                msgId,
                fromUid: authorUid,
                ...(data.groupId ? { groupId: data.groupId } : {}),
            },
            webpush: {
                notification: {
                    title: `Message from ${senderName}`,
                    body,
                },
                fcmOptions: {
                    link: url,
                },
            },
            tokens,
        };
        const resp = await admin.messaging().sendEachForMulticast(message);
        const delivered = resp.responses.filter((r) => r.success).length;
        const failures = resp.responses.length - delivered;
        console.log("onDmDockMessageCreate: pushed", {
            pairId,
            msgId,
            recipients: recipients.length,
            tokens: tokens.length,
            delivered,
            failures,
        });
    }
    catch (err) {
        console.error("onDmDockMessageCreate failed", err);
    }
});
