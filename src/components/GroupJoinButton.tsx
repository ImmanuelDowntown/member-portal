import React, { useEffect, useMemo, useState } from "react";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

type Props = {
  groupId: string; // group document id (slug)
  className?: string;
};

/**
 * GroupJoinButton
 * - "Request to Join" for non-members
 * - "Pending — Cancel" when user has a request
 * - "Member" when already in the group
 * Uses only user-owned reads to avoid permission-denied errors for non-admins.
 */
export default function GroupJoinButton({ groupId, className = "" }: Props) {
  const auth = useMemo(() => getAuth(app), []);
  const db = useMemo(() => getFirestore(app), []);

  type Status = "checking" | "none" | "pending" | "member";
  const [status, setStatus] = useState<Status>("checking");
  const [uid, setUid] = useState<string | null>(auth.currentUser?.uid ?? null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u: User | null) => {
      setUid(u?.uid ?? null);
    });
    return () => unsub();
  }, [auth]);

  // Determine membership/request status
  useEffect(() => {
    let active = true;
    async function check() {
      if (!uid) {
        setStatus("none");
        return;
      }
      try {
        // 1) Membership (direct doc id == groupId)
        const direct = await getDoc(doc(db, `users/${uid}/memberships/${groupId}`));
        if (!active) return;
        if (direct.exists()) {
          setStatus("member");
          return;
        }
        // 2) Membership (where("groupId","==",groupId))
        const mRef = collection(db, `users/${uid}/memberships`);
        const mQ = query(mRef, where("groupId", "==", groupId));
        const mSnap = await getDocs(mQ);
        if (!active) return;
        if (!mSnap.empty) {
          setStatus("member");
          return;
        }
        // 3) Pending request (user-owned path)
        const reqDoc = await getDoc(doc(db, `users/${uid}/membershipRequests/${groupId}`));
        if (!active) return;
        setStatus(reqDoc.exists() ? "pending" : "none");
      } catch (err) {
        console.warn("Unable to determine membership status; defaulting to 'none'.", err);
        if (active) setStatus("none");
      }
    }
    check();
    return () => { active = false; };
  }, [db, uid, groupId]);

  async function requestJoin() {
    if (!uid) return;
    setBusy(true);
    try {
      // Write user-owned request
      await setDoc(
        doc(db, `users/${uid}/membershipRequests/${groupId}`),
        { groupId, requestedAt: serverTimestamp() },
        { merge: true }
      );
      setStatus("pending");
      // Mirror to group path (for admin review). If rules block it, we still stay pending on the user side.
      try {
        await setDoc(
          doc(db, `groups/${groupId}/membershipRequests/${uid}`),
          { uid, requestedAt: serverTimestamp() },
          { merge: true }
        );
      } catch (e) {
        console.warn("Could not mirror to group joinRequests; ensure rules allow create.", e);
      }
    } finally {
      setBusy(false);
    }
  }

  async function cancelRequest() {
    if (!uid) return;
    setBusy(true);
    try {
      await deleteDoc(doc(db, `users/${uid}/membershipRequests/${groupId}`));
      try { await deleteDoc(doc(db, `groups/${groupId}/membershipRequests/${uid}`)); } catch {}
      setStatus("none");
    } finally {
      setBusy(false);
    }
  }

  // Render states
  if (status === "checking") {
    return (
      <button
        className={`text-xs px-3 py-1.5 rounded-lg border border-border bg-muted text-text2 ${className}`}
        disabled
      >
        Checking…
      </button>
    );
  }
  if (status === "member") {
    return (
      <button className={`text-xs px-3 py-1.5 rounded-lg border border-border bg-muted text-text2 ${className}`} disabled>
        Member
      </button>
    );
  }
  if (status === "pending") {
    return (
      <button
        onClick={cancelRequest}
        className={`text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60 ${className}`}
        disabled={busy}
        title="Click to cancel your join request"
      >
        Pending — Cancel
      </button>
    );
  }
  return (
    <button
      onClick={requestJoin}
      className={`text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60 ${className}`}
      disabled={busy || !uid}
      title={!uid ? "Sign in to request" : undefined}
    >
      Request to Join
    </button>
  );
}
