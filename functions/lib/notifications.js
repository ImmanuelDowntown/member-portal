"use strict";
// functions/src/notifications.ts
// Shared helpers for sending Firebase Cloud Messaging (FCM) web push notifications,
// plus callables for token registration and end‑to‑end testing.
// Uses Firebase Functions v2 "onCall" and Admin SDK writes.
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
exports.registerPushToken = exports.sendTestPush = void 0;
exports.sendToUser = sendToUser;
exports.sendToGroup = sendToGroup;
const admin = __importStar(require("firebase-admin"));
const https_1 = require("firebase-functions/v2/https");
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
/** Ensure every value is a string (FCM data‑only messages require strings). */
function toStringMap(input) {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
        out[k] = v == null ? "" : String(v);
    }
    return out;
}
/** Delete an invalid push token document. */
async function deleteTokenDoc(uid, token) {
    try {
        // token docId is usually the token, but fall back to query by field if needed
        const docRef = db.doc(`users/${uid}/pushTokens/${token}`);
        const snap = await docRef.get();
        if (snap.exists) {
            await docRef.delete();
            return;
        }
        const q = await db.collection(`users/${uid}/pushTokens`).where("token", "==", token).limit(1).get();
        if (!q.empty) {
            await q.docs[0].ref.delete();
        }
    }
    catch (e) {
        console.warn("Failed to delete invalid token doc", { uid, token, e });
    }
}
/** Fetch all FCM tokens saved under a user. */
async function getUserTokens(uid) {
    const col = await db.collection(`users/${uid}/pushTokens`).get();
    const tokens = [];
    for (const d of col.docs) {
        const data = d.data();
        tokens.push(data.token || d.id);
    }
    return Array.from(new Set(tokens)).filter(Boolean);
}
/** Send a data‑only push to a single user. Returns number of successful deliveries. */
async function sendToUser(uid, payload) {
    const tokens = await getUserTokens(uid);
    if (tokens.length === 0)
        return 0;
    const data = toStringMap(payload);
    const { title, body, icon, badge, url } = data;
    const message = { tokens, data };
    if (title || body) {
        message.notification = { title, body };
    }
    if (icon || badge || url) {
        message.webpush = {
            notification: {
                icon: icon || undefined,
                badge: badge || undefined,
            },
            fcmOptions: url ? { link: url } : undefined,
        };
    }
    const res = await admin.messaging().sendEachForMulticast(message);
    let ok = 0;
    res.responses.forEach((r, idx) => {
        if (r.success) {
            ok += 1;
        }
        else {
            const code = r.error?.code || "";
            if (code.includes("registration-token-not-registered") || code.includes("invalid-registration-token")) {
                void deleteTokenDoc(uid, tokens[idx]);
            }
        }
    });
    return ok;
}
/** Read group membership and send a data‑only push to all members. */
async function sendToGroup(groupId, payload) {
    // Expect membership under groups/{groupId}/members/{uid}
    const membersSnap = await db.collection(`groups/${groupId}/members`).get();
    const memberUids = membersSnap.docs.map(d => d.id);
    if (memberUids.length === 0)
        return 0;
    const data = toStringMap(payload);
    let delivered = 0;
    // Fetch tokens per user in batches and send
    for (const uid of memberUids) {
        const tokens = await getUserTokens(uid);
        if (tokens.length === 0)
            continue;
        const res = await admin.messaging().sendEachForMulticast({ tokens, data });
        res.responses.forEach((r, idx) => {
            if (r.success) {
                delivered += 1;
            }
            else {
                const code = r.error?.code || "";
                if (code.includes("registration-token-not-registered") || code.includes("invalid-registration-token")) {
                    void deleteTokenDoc(uid, tokens[idx]);
                }
            }
        });
    }
    return delivered;
}
/** Callable test function: sends a push to the caller's current user. */
exports.sendTestPush = (0, https_1.onCall)(async (request) => {
    const auth = request.auth;
    if (!auth || !auth.uid) {
        throw new https_1.HttpsError("unauthenticated", "Sign in to use sendTestPush.");
    }
    const uid = auth.uid;
    const title = request.data?.title ?? "Hello!";
    const body = request.data?.body ?? "This is a test push.";
    const url = request.data?.url ?? "/dashboard";
    const payload = {
        title,
        body,
        url,
        type: "test",
        icon: "/icons/icon-192.png",
        badge: "/icons/icon-192.png",
    };
    const delivered = await sendToUser(uid, payload);
    return { ok: true, delivered };
});
/** Callable: register/save a token server‑side using Admin SDK (bypasses client rules). */
exports.registerPushToken = (0, https_1.onCall)(async (request) => {
    const auth = request.auth;
    if (!auth || !auth.uid) {
        throw new https_1.HttpsError("unauthenticated", "Sign in to register a push token.");
    }
    const uid = auth.uid;
    const token = String(request.data?.token || "").trim();
    if (!token) {
        throw new https_1.HttpsError("invalid-argument", "Token is required.");
    }
    try {
        await db.doc(`users/${uid}/pushTokens/${token}`).set({
            token,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            method: "callable",
            userAgent: request.rawRequest?.headers?.["user-agent"] || "",
        }, { merge: true });
        return { ok: true };
    }
    catch (e) {
        console.error("registerPushToken failed", e);
        throw new https_1.HttpsError("internal", "Failed to save token");
    }
});
