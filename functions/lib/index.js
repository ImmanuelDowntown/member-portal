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
exports.registerPushToken = exports.sendTestPush = exports.onResourceCreated = exports.onMembershipApproved = exports.onMembershipRequestCreated = exports.grantGroupAdminByEmail = exports.onGroupReplyCreate = exports.onGroupMessageCreate = void 0;
// functions/src/index.ts
const admin = __importStar(require("firebase-admin"));
const functions = __importStar(require("firebase-functions/v1"));
admin.initializeApp();
const db = admin.firestore();
var onGroupMessage_1 = require("./onGroupMessage");
Object.defineProperty(exports, "onGroupMessageCreate", { enumerable: true, get: function () { return onGroupMessage_1.onGroupMessageCreate; } });
Object.defineProperty(exports, "onGroupReplyCreate", { enumerable: true, get: function () { return onGroupMessage_1.onGroupReplyCreate; } });
/**
 * Grant group admin by email (v1 callable)
 */
exports.grantGroupAdminByEmail = functions
    .region("us-central1")
    .https.onCall(async (data, context) => {
    const callerUid = context.auth?.uid;
    if (!callerUid)
        throw new functions.https.HttpsError("unauthenticated", "Sign-in required.");
    const isSuper = (await db.collection("admins").doc(callerUid).get()).exists;
    if (!isSuper)
        throw new functions.https.HttpsError("permission-denied", "Super admin only.");
    const email = String(data?.email || "").toLowerCase().trim();
    const groupId = String(data?.groupId || "").trim();
    if (!email || !groupId)
        throw new functions.https.HttpsError("invalid-argument", "email and groupId required.");
    const target = await admin.auth().getUserByEmail(email).catch(() => { throw new functions.https.HttpsError("not-found", "No user with that email."); });
    await db.collection("groups").doc(groupId).collection("groupAdmins").doc(target.uid).set({
        uid: target.uid,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        createdBy: callerUid,
        method: "email-lookup",
    }, { merge: true });
    return { ok: true, uid: target.uid };
});
/**
 * When a membership request is created under groups/{groupId}/membershipRequests/{uid},
 * write a groupEvents entry so admins can see an audit trail or trigger notifications.
 */
exports.onMembershipRequestCreated = functions.firestore
    .document("groups/{groupId}/membershipRequests/{uid}")
    .onCreate(async (snap, ctx) => {
    const { groupId, uid } = ctx.params;
    const data = snap.data() || {};
    await db.collection("groups").doc(groupId).collection("groupEvents").add({
        type: "request_created",
        uid,
        at: admin.firestore.FieldValue.serverTimestamp(),
        source: "function",
        payload: data,
    });
});
/**
 * When a membership is approved (users/{uid}/memberships/{groupId} write),
 * mirror an event under the group for audit.
 */
exports.onMembershipApproved = functions.firestore
    .document("users/{uid}/memberships/{groupId}")
    .onWrite(async (change, ctx) => {
    const { groupId, uid } = ctx.params;
    if (!change.after.exists)
        return; // deleted
    await db.collection("groups").doc(groupId).collection("groupEvents").add({
        type: "membership_approved",
        uid,
        at: admin.firestore.FieldValue.serverTimestamp(),
        source: "function",
    });
});
// Expose v2 callables and triggers (single export each; avoid duplicates)
var onResourceCreated_1 = require("./onResourceCreated");
Object.defineProperty(exports, "onResourceCreated", { enumerable: true, get: function () { return onResourceCreated_1.onResourceCreated; } });
var notifications_1 = require("./notifications");
Object.defineProperty(exports, "sendTestPush", { enumerable: true, get: function () { return notifications_1.sendTestPush; } });
Object.defineProperty(exports, "registerPushToken", { enumerable: true, get: function () { return notifications_1.registerPushToken; } });
