import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "../lib/firebase";

type Status = "none" | "member" | "pending";

export default function GroupJoinButton({ groupId }: { groupId: string }) {
  const [status, setStatus] = useState<Status>("none");
  const [busy, setBusy] = useState(false);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const user = auth.currentUser;

  useEffect(() => {
    let active = true;
    async function load() {
      if (!user) return;
      const mRef = collection(db, `users/${user.uid}/memberships`);
      const q = query(mRef, where("groupId", "==", groupId));
      const snap = await getDocs(q);
      if (!active) return;

      if (!snap.empty) {
        setStatus("member");
        return;
      }

      const pendingRef = doc(db, `groups/${groupId}/membershipRequests/${user.uid}`);
      const pendingSnap = await getDoc(pendingRef);
      if (!active) return;

      setStatus(pendingSnap.exists() ? "pending" : "none");
    }
    load();
    return () => { active = false; };
  }, [db, user, groupId]);

  async function requestJoin() {
    if (!user) return;
    setBusy(true);
    try {
      const userReqRef = doc(db, `users/${user.uid}/membershipRequests/${groupId}`);
      const groupReqRef = doc(db, `groups/${groupId}/membershipRequests/${user.uid}`);

      const payload = {
        uid: user.uid,
        groupId,
        createdAt: serverTimestamp(),
        displayName: user.displayName || user.email || "Member",
      };

      await Promise.all([setDoc(userReqRef, payload), setDoc(groupReqRef, payload)]);
      setStatus("pending");
    } finally {
      setBusy(false);
    }
  }

  async function cancelRequest() {
    if (!user) return;
    setBusy(true);
    try {
      const userReqRef = doc(db, `users/${user.uid}/membershipRequests/${groupId}`);
      const groupReqRef = doc(db, `groups/${groupId}/membershipRequests/${user.uid}`);
      await Promise.all([deleteDoc(userReqRef), deleteDoc(groupReqRef)]);
      setStatus("none");
    } finally {
      setBusy(false);
    }
  }

  if (!user) return null;

  if (status === "member") {
    return (
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
        Member
      </span>
    );
  }

  if (status === "pending") {
    return (
      <button
        onClick={cancelRequest}
        className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60"
        disabled={busy}
        title="Cancel request"
      >
        Pending — Cancel
      </button>
    );
  }

  return (
    <button
      onClick={requestJoin}
      className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60"
      disabled={busy}
    >
      Request to Join
    </button>
  );
}
