import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getCountFromServer,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

type Props = { groupId: string };

export default function GroupAdminPanel({ groupId }: Props) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
  const [isSuper, setIsSuper] = useState<boolean>(false);
  const [pendingCount, setPendingCount] = useState<number | null>(null);
  const [memberCount, setMemberCount] = useState<number | null>(null);

  useEffect(() => {
    async function check() {
      const uid = auth.currentUser?.uid;
      if (!uid || !groupId) {
        setIsAllowed(false);
        setIsSuper(false);
        return;
      }
      // super admin?
      const superRef = doc(db, "users", uid);
      const superSnap = await getDoc(superRef);
      const superYes = (superSnap.data() as any)?.isSuperAdmin === true;
      setIsSuper(superYes);
      if (superYes) {
        setIsAllowed(true);
        return;
      }
      // group admin?
      const grpRef = doc(db, `groups/${groupId}/groupAdmins/${uid}`);
      const grpSnap = await getDoc(grpRef);
      setIsAllowed(grpSnap.exists());
    }
    check();
  }, [auth.currentUser?.uid, db, groupId]);

  useEffect(() => {
    let active = true;
    async function loadCounts() {
      if (!groupId) return;
      try {
        const reqCol = collection(db, `groups/${groupId}/membershipRequests`);
        const memCol = collection(db, `groups/${groupId}/members`);
        const [reqCount, memCount] = await Promise.all([
          getCountFromServer(reqCol),
          getCountFromServer(memCol),
        ]);
        if (!active) return;
        setPendingCount(reqCount.data().count);
        setMemberCount(memCount.data().count);
      } catch {
        // ignore
      }
    }
    loadCounts();
    return () => { active = false; };
  }, [db, groupId]);

  if (isAllowed === null) return null;
  if (!isAllowed) return null;

  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Admin Panel</h2>
          <p className="text-sm text-slate-600">Quick links for this group</p>
        </div>
        <div className="flex gap-3">
          <div className="text-xs px-2 py-1 rounded-lg bg-slate-100 text-slate-800">
            Members: {memberCount ?? "…"}
          </div>
          <div className="text-xs px-2 py-1 rounded-lg bg-amber-100 text-amber-800">
            Pending: {pendingCount ?? "…"}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Link to={`/admin/groups/${groupId}/requests`} className="text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
          Review Requests
        </Link>
        <Link to={`/admin/groups/${groupId}/members`} className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200">
          Manage Members
        </Link>
        <Link to={`/admin/groups/${groupId}/events`} className="text-sm px-3 py-1.5 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
          View Audit Log
        </Link>

        {isAllowed && (
          <Link to={`/admin/groups/${groupId}/edit`} className="text-sm px-3 py-1.5 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
            Edit Group
          </Link>
        )}
        {isSuper && (
          <>
            <Link to={`/admin/groups/${groupId}/edit`} className="text-sm px-3 py-1.5 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
              Edit Group
            </Link>
            <Link to={`/admin/group-admins/by-email`} className="text-sm px-3 py-1.5 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
              Grant Admin by Email
            </Link>
            <Link to={`/admin/groups/new`} className="text-sm px-3 py-1.5 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
              Create Group
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
