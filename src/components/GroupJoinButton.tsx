import React, { useEffect, useMemo, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "../lib/firebase";

type Status = "none" | "member" | "pending";

export default function GroupJoinButton({ groupId }: { groupId: string }) {
  const auth = useMemo(() => getAuth(app), []);
  const db = useMemo(() => getFirestore(app), []);

  const [uid, setUid] = useState<string>("");
  const [status, setStatus] = useState<Status>("none");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>("");

  // Subscribe to auth and track UID (fix: was using auth.currentUser once at mount)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUid(u?.uid ?? ""));
    return unsub;
  }, [auth]);

  // Resolve current status from Firestore whenever uid/group changes
  useEffect(() => {
    let active = true;
    async function loadStatus() {
      setError("");
      if (!uid || !groupId) {
        setStatus("none");
        return;
      }
      try {
        // Member? (we store membership at users/{uid}/memberships/{groupId})
        const memSnap = await getDoc(doc(db, `users/${uid}/memberships/${groupId}`));
        if (!active) return;
        if (memSnap.exists()) {
          setStatus("member");
          return;
        }
        // Pending?
        const pendingSnap = await getDoc(doc(db, `groups/${groupId}/membershipRequests/${uid}`));
        if (!active) return;
        setStatus(pendingSnap.exists() ? "pending" : "none");
      } catch (e) {
        if (!active) return;
        setError("Could not check membership status.");
        setStatus("none");
      }
    }
    void loadStatus();
    return () => {
      active = false;
    };
  }, [db, uid, groupId]);

  async function requestJoin() {
    setError("");
    if (!uid) {
      // optional: redirect to login
      return;
    }
    setBusy(true);
    try {
      const payload = {
        uid,
        groupId,
        createdAt: serverTimestamp(),
      };
      await Promise.all([
        setDoc(doc(db, `users/${uid}/membershipRequests/${groupId}`), payload, { merge: true }),
        setDoc(doc(db, `groups/${groupId}/membershipRequests/${uid}`), payload, { merge: true }),
      ]);
      setStatus("pending");
    } catch (e) {
      setError("Could not submit join request. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function cancelRequest() {
    setError("");
    if (!uid) return;
    setBusy(true);
    try {
      await Promise.all([
        deleteDoc(doc(db, `users/${uid}/membershipRequests/${groupId}`)),
        deleteDoc(doc(db, `groups/${groupId}/membershipRequests/${uid}`)),
      ]);
      setStatus("none");
    } catch (e) {
      setError("Could not cancel the request.");
    } finally {
      setBusy(false);
    }
  }

  if (!uid) return null;

  if (status === "member") {
    return (
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
        Member
      </span>
    );
  }

  if (status === "pending") {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={cancelRequest}
          className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60"
          disabled={busy}
          title="Cancel request"
        >
          {busy ? "Working…" : "Pending — Cancel"}
        </button>
        {error && <span className="text-[11px] text-rose-700">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={requestJoin}
        className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60"
        disabled={busy}
        title="Request to Join"
      >
        {busy ? "Working…" : "Request to Join"}
      </button>
      {error && <span className="text-[11px] text-rose-700">{error}</span>}
    </div>
  );
}
