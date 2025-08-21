"use strict";
// functions/src/adminUsers.ts
// Super Admin-only actions: inactivate/reactivate users and delete users.
// Uses Firebase Admin SDK; callable functions require caller to be a super admin (doc exists at /admins/{uid}).
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
exports.deleteUserAccount = exports.setUserDisabled = void 0;
const admin = __importStar(require("firebase-admin"));
const https_1 = require("firebase-functions/v2/https");
const firebase_functions_1 = require("firebase-functions");
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
async function assertSuperAdmin(callerUid) {
    if (!callerUid) {
        throw new https_1.HttpsError("unauthenticated", "Must be authenticated.");
    }
    const snap = await db.doc(`admins/${callerUid}`).get();
    if (!snap.exists) {
        throw new https_1.HttpsError("permission-denied", "Super admin privileges required.");
    }
}
async function deleteDocs(docs) {
    let count = 0;
    const chunks = [];
    for (let i = 0; i < docs.length; i += 300)
        chunks.push(docs.slice(i, i + 300));
    for (const chunk of chunks) {
        const batch = db.batch();
        chunk.forEach((d) => batch.delete(d.ref));
        await batch.commit();
        count += chunk.length;
    }
    return count;
}
exports.setUserDisabled = (0, https_1.onCall)({ region: "us-central1" }, async (request) => {
    const callerUid = request.auth?.uid;
    await assertSuperAdmin(callerUid);
    const { targetUid, disabled, reason } = (request.data || {});
    if (!targetUid || typeof disabled !== "boolean") {
        throw new https_1.HttpsError("invalid-argument", "Expected { targetUid: string, disabled: boolean, reason?: string }");
    }
    if (targetUid === callerUid) {
        throw new https_1.HttpsError("failed-precondition", "You cannot change your own enabled/disabled state.");
    }
    // Update Firebase Auth
    await admin.auth().updateUser(targetUid, { disabled });
    // Update Firestore user doc (status + audit fields)
    const userRef = db.doc(`users/${targetUid}`);
    const now = admin.firestore.FieldValue.serverTimestamp();
    const update = {
        status: disabled ? "inactive" : "active",
        updatedAt: now,
    };
    if (disabled) {
        update["disabledAt"] = now;
        update["disabledBy"] = callerUid;
        if (reason)
            update["disabledReason"] = reason;
    }
    else {
        update["disabledAt"] = admin.firestore.FieldValue.delete();
        update["disabledBy"] = admin.firestore.FieldValue.delete();
        update["disabledReason"] = admin.firestore.FieldValue.delete();
    }
    await userRef.set(update, { merge: true });
    firebase_functions_1.logger.info("setUserDisabled: updated", { targetUid, disabled, by: callerUid });
    return { ok: true, targetUid, disabled };
});
exports.deleteUserAccount = (0, https_1.onCall)({ region: "us-central1", timeoutSeconds: 540 }, async (request) => {
    const callerUid = request.auth?.uid;
    await assertSuperAdmin(callerUid);
    const { targetUid, hardDelete } = (request.data || {});
    if (!targetUid) {
        throw new https_1.HttpsError("invalid-argument", "Expected { targetUid: string, hardDelete?: boolean }");
    }
    if (targetUid === callerUid) {
        throw new https_1.HttpsError("failed-precondition", "You cannot delete your own account.");
    }
    // Clean up tokens under users/{uid}/pushTokens/*
    const tokenSnap = await db.collection(`users/${targetUid}/pushTokens`).get();
    const deletedTokens = await deleteDocs(tokenSnap.docs);
    // Clean up user-centric memberships (if your app writes these)
    const membershipsSnap = await db.collection(`users/${targetUid}/memberships`).get().catch(() => ({ docs: [] }));
    const deletedMemberships = membershipsSnap && "docs" in membershipsSnap ? await deleteDocs(membershipsSnap.docs) : 0;
    // Clean up group-centric members where docId === uid
    const membersSnap = await db
        .collectionGroup("members")
        .where(admin.firestore.FieldPath.documentId(), "==", targetUid)
        .get()
        .catch(() => ({ docs: [] }));
    const deletedGroupMembers = membersSnap && "docs" in membersSnap ? await deleteDocs(membersSnap.docs) : 0;
    // Clean up groupAdmins (if present) where docId === uid
    const adminsSnap = await db
        .collectionGroup("groupAdmins")
        .where(admin.firestore.FieldPath.documentId(), "==", targetUid)
        .get()
        .catch(() => ({ docs: [] }));
    const deletedGroupAdmins = adminsSnap && "docs" in adminsSnap ? await deleteDocs(adminsSnap.docs) : 0;
    // Optionally mark or delete the user doc
    const userRef = db.doc(`users/${targetUid}`);
    let userDocDeleted = false;
    if (hardDelete) {
        await userRef.delete().catch(() => { });
        userDocDeleted = true;
    }
    else {
        const now = admin.firestore.FieldValue.serverTimestamp();
        await userRef.set({
            status: "deleted",
            deletedAt: now,
            deletedBy: callerUid,
            updatedAt: now,
        }, { merge: true });
    }
    // Delete Firebase Auth account
    await admin.auth().deleteUser(targetUid);
    const result = {
        ok: true,
        targetUid,
        hardDelete: !!hardDelete,
        deletedTokens,
        deletedMemberships,
        deletedGroupMembers,
        deletedGroupAdmins,
        userDocDeleted,
    };
    firebase_functions_1.logger.info("deleteUserAccount: completed", result);
    return result;
});
