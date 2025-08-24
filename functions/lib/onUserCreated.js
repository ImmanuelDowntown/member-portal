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
exports.onUserCreated = void 0;
const functions = __importStar(require("firebase-functions/v2"));
const admin = __importStar(require("firebase-admin"));
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
exports.onUserCreated = functions.firestore.onDocumentCreated("users/{uid}", async (event) => {
    const { uid } = event.params;
    const data = event.data?.data();
    const name = data?.displayName || data?.email || uid;
    try {
        const adminsSnap = await db.collection("admins").get();
        const batch = db.batch();
        adminsSnap.forEach((docSnap) => {
            const adminId = docSnap.id;
            const ref = db.collection(`users/${adminId}/notifications`).doc();
            batch.set(ref, {
                type: "new-user",
                text: `New user ${name} joined`,
                href: `/admin/users?uid=${uid}`,
                uid,
                read: false,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
    }
    catch (err) {
        console.error("onUserCreated notification failed", err);
    }
});
