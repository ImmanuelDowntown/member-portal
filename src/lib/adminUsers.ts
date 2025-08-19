// src/lib/adminUsers.ts
// Client helpers to call Super Admin user actions via callable functions.

import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase";

const functions = getFunctions(app, "us-central1");

export async function setUserDisabled(targetUid: string, disabled: boolean, reason?: string) {
  const fn = httpsCallable(functions, "setUserDisabled");
  const res = await fn({ targetUid, disabled, reason });
  return (res?.data as any) ?? null;
}

export async function deleteUserAccount(targetUid: string, hardDelete = false) {
  const fn = httpsCallable(functions, "deleteUserAccount");
  const res = await fn({ targetUid, hardDelete });
  return (res?.data as any) ?? null;
}
