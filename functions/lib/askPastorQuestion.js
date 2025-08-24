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
exports.askPastorQuestion = void 0;
const https = __importStar(require("firebase-functions/v2/https"));
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
// Allow configuring the pastor UID either via `functions:config:set` or an
// environment variable. Previously this relied solely on Functions config which
// meant the callable would silently fail in local/emulator setups where the
// config wasn't provided, resulting in no Firestore writes.
const PASTOR_UID = (process.env.PASTOR_UID || functions.config().pastor?.uid);
exports.askPastorQuestion = https.onCall({
    region: "us-central1",
    invoker: "public",
    cors: ["https://member-portal-virid.vercel.app", "http://localhost:5173"],
}, async (request) => {
    const uid = request.auth?.uid;
    if (!uid) {
        throw new https.HttpsError("unauthenticated", "Sign in required.");
    }
    const text = String(request.data?.text || "").trim();
    if (!text) {
        throw new https.HttpsError("invalid-argument", "text is required");
    }
    const pastorUid = PASTOR_UID;
    if (!pastorUid) {
        throw new https.HttpsError("failed-precondition", "Pastor UID not configured");
    }
    const pairId = [uid, pastorUid].sort().join("_");
    let displayName = "Member";
    try {
        const userSnap = await db.doc(`users/${uid}`).get();
        displayName =
            userSnap.data()?.displayName ||
                userSnap.data()?.name ||
                (await db.doc(`admins/${uid}`).get()).data()?.displayName ||
                "Member";
    }
    catch {
        // ignore
    }
    await db.doc(`dmThreads/${pairId}`).set({
        users: [uid, pastorUid].sort(),
        userNames: { [uid]: displayName },
    }, { merge: true });
    await db.collection(`dmMessages/${pairId}/messages`).add({
        text,
        from: uid,
        to: pastorUid,
        displayName,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    return { ok: true };
});
