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
exports.approveMembershipRequest = exports.grantGroupAdminByEmail = exports.deleteUserAccount = exports.setUserDisabled = exports.registerPushToken = exports.sendTestPush = exports.onDirectMessageCreate = exports.onResourceCreated = exports.onGroupReplyCreate = exports.onGroupMessageCreate = void 0;
// functions/src/index.ts
const admin = __importStar(require("firebase-admin"));
// Initialize Admin SDK exactly once
if (!admin.apps.length) {
    admin.initializeApp();
}
// ---- Export v2 triggers/callables defined in their own modules ----
var onGroupMessage_1 = require("./onGroupMessage");
Object.defineProperty(exports, "onGroupMessageCreate", { enumerable: true, get: function () { return onGroupMessage_1.onGroupMessageCreate; } });
Object.defineProperty(exports, "onGroupReplyCreate", { enumerable: true, get: function () { return onGroupMessage_1.onGroupReplyCreate; } });
var onResourceCreated_1 = require("./onResourceCreated");
Object.defineProperty(exports, "onResourceCreated", { enumerable: true, get: function () { return onResourceCreated_1.onResourceCreated; } });
var onDirectMessage_1 = require("./onDirectMessage");
Object.defineProperty(exports, "onDirectMessageCreate", { enumerable: true, get: function () { return onDirectMessage_1.onDirectMessageCreate; } });
var notifications_1 = require("./notifications");
Object.defineProperty(exports, "sendTestPush", { enumerable: true, get: function () { return notifications_1.sendTestPush; } });
Object.defineProperty(exports, "registerPushToken", { enumerable: true, get: function () { return notifications_1.registerPushToken; } });
var adminUsers_1 = require("./adminUsers");
Object.defineProperty(exports, "setUserDisabled", { enumerable: true, get: function () { return adminUsers_1.setUserDisabled; } });
Object.defineProperty(exports, "deleteUserAccount", { enumerable: true, get: function () { return adminUsers_1.deleteUserAccount; } });
// ---- v1 callable kept for backward compatibility ----
const functionsV1 = __importStar(require("firebase-functions/v1"));
/**
 * grantGroupAdminByEmail
 * Callable used by the Admin UI to promote a user to group admin by email.
 * Requires the caller to be a Super Admin (`/admins/{uid}` exists).
 * Side effects:
 *  - creates/merges doc at groups/{groupId}/admins/{targetUid}
 *  - appends a groupEvents entry (membership_approved) for audit
 */
exports.grantGroupAdminByEmail = functionsV1
    .region("us-central1")
    .https.onCall(async (data, context) => {
    if (!context.auth?.uid) {
        throw new functionsV1.https.HttpsError("unauthenticated", "Sign in required.");
    }
    const callerUid = context.auth.uid;
    const db = admin.firestore();
    // Only Super Admins may call
    const isSuper = (await db.doc(`admins/${callerUid}`).get()).exists;
    if (!isSuper) {
        throw new functionsV1.https.HttpsError("permission-denied", "Only Super Admins can grant group admins.");
    }
    const groupId = String(data?.groupId || "").trim();
    const email = String(data?.email || "").trim().toLowerCase();
    if (!groupId || !email) {
        throw new functionsV1.https.HttpsError("invalid-argument", "groupId and email are required.");
    }
    // Look up target user by email
    let target;
    try {
        target = await admin.auth().getUserByEmail(email);
    }
    catch (e) {
        throw new functionsV1.https.HttpsError("not-found", "No user found with that email.");
    }
    const targetUid = target.uid;
    // Grant admin on the group
    await db.doc(`groups/${groupId}/admins/${targetUid}`).set({
        grantedBy: callerUid,
        email,
        at: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    // Write an audit event to the group (matches existing pattern)
    await db.collection(`groups/${groupId}/groupEvents`).add({
        type: "membership_approved",
        uid: targetUid,
        at: admin.firestore.FieldValue.serverTimestamp(),
        source: "function",
    });
    return { ok: true, groupId, uid: targetUid };
});
/**
 * approveMembershipRequest
 * Callable used by the Admin UI to approve a pending group membership request.
 * Caller must be a group admin or super admin.
 * Side effects:
 *  - writes membership docs for user and group
 *  - deletes mirrored membershipRequests docs
 */
exports.approveMembershipRequest = functionsV1
    .region("us-central1")
    .https.onCall(async (data, context) => {
    if (!context.auth?.uid) {
        throw new functionsV1.https.HttpsError("unauthenticated", "Sign in required.");
    }
    const callerUid = context.auth.uid;
    const db = admin.firestore();
    const groupId = String(data?.groupId || "").trim();
    const targetUid = String(data?.uid || "").trim();
    const displayName = String(data?.displayName || "").trim();
    if (!groupId || !targetUid) {
        throw new functionsV1.https.HttpsError("invalid-argument", "groupId and uid are required.");
    }
    const isSuper = (await db.doc(`admins/${callerUid}`).get()).exists;
    const isGroupAdmin = (await db.doc(`groups/${groupId}/admins/${callerUid}`).get()).exists;
    if (!isSuper && !isGroupAdmin) {
        throw new functionsV1.https.HttpsError("permission-denied", "Only group admins or super admins may approve requests.");
    }
    await db.doc(`users/${targetUid}/memberships/${groupId}`).set({
        groupId,
        approvedAt: admin.firestore.FieldValue.serverTimestamp(),
        approvedBy: callerUid,
    }, { merge: true });
    await db.doc(`groups/${groupId}/members/${targetUid}`).set({
        uid: targetUid,
        displayName: displayName || "Member",
        joinedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    await Promise.all([
        db.doc(`groups/${groupId}/membershipRequests/${targetUid}`).delete().catch(() => { }),
        db.doc(`users/${targetUid}/membershipRequests/${groupId}`).delete().catch(() => { }),
    ]);
    return { ok: true, groupId, uid: targetUid };
});
