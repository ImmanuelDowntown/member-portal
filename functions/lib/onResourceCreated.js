"use strict";
// functions/src/onResourceCreated.ts
// Fires when a new resource is added under a group and pushes a notification to the group.
// Minimal wiring that relies on the shared sendToGroup() helper.
// If you later need to exclude the author or respect per‑group prefs, do it inside notifications.ts.
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
exports.onResourceCreated = void 0;
const functions = __importStar(require("firebase-functions/v2"));
const admin = __importStar(require("firebase-admin"));
const notifications_1 = require("./notifications");
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
exports.onResourceCreated = functions.firestore.onDocumentCreated("groups/{groupId}/resources/{resourceId}", async (event) => {
    const { groupId, resourceId } = event.params;
    const resource = event.data?.data();
    if (!resource)
        return;
    try {
        // Try to pull a friendly group name and slug for the click‑through URL
        const groupDoc = await db.doc(`groups/${groupId}`).get();
        const group = groupDoc.exists ? groupDoc.data() : {};
        const groupName = group?.name ||
            group?.title ||
            "your group";
        const slug = group?.slug ||
            String(groupId);
        const url = `/groups/${slug}`; // matches your web route: /groups/:slug
        // Build a string‑only data payload for FCM
        const payload = {
            title: resource.title ? String(resource.title) : `New resource in ${groupName}`,
            body: resource.description ? String(resource.description) : "Tap to view the latest resource.",
            url,
            type: "resource",
            icon: "/icons/icon-192.png",
            badge: "/icons/icon-192.png",
        };
        const delivered = await (0, notifications_1.sendToGroup)(groupId, payload);
        console.log(`onResourceCreated: sent to ${delivered} users`, { groupId, resourceId, title: payload.title });
    }
    catch (e) {
        console.error("onResourceCreated failed", e);
    }
});
