// functions/src/types/firestore.ts
// Central Firestore document types for Cloud Functions.
// Keep this file minimal and reusable across triggers.

export interface GroupDoc {
  // Required
  name: string;

  // Optional fields observed in your data model (make optional/null-safe)
  description?: string | null;
  campus?: string | null;
  meetingDay?: string | null;
  meetingTime?: string | null;
  imageUrl?: string | null;
  parent?: string | null;

  // Timestamps stored by Firestore (optional)
  createdAt?: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
}
