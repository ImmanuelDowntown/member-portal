
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  orderBy,
  where,
  collectionGroup,
  getCountFromServer,
  documentId,
  DocumentData,
  
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";

type GroupRow = {
  id: string;
  name?: string;
  parent?: string | null;
  pendingRequests?: number;
};

type MemberDoc = {
  displayName?: string;
  email?: string;
  role?: string;
};

export default function AdminGroupsIndex() {
  const db = useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);

  const [loading, setLoading] = useState(true);
  const [isSuper, setIsSuper] = useState(false);
  const [groups, setGroups] = useState<GroupRow[]>([]);

  // Users block
  const [usersLoading, setUsersLoading] = useState(false);
  const [userRows, setUserRows] = useState<Array<{ uid: string; name?: string; email?: string; groups: Array<{ id: string; name: string }> }>>([]);

  // Determine super-admin and load groups user can manage
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const u = auth.currentUser;
        if (!u) { setIsSuper(false); setGroups([]); return; }
        const uid = u.uid;

        // super-admin check
        const superSnap = await getDoc(doc(db, "admins", uid));
        const superAdmin = superSnap.exists();
        if (!cancelled) setIsSuper(superAdmin);

        let groupIds: string[] = [];
        if (superAdmin) {
          // Load all groups
          const gsnap = await getDocs(query(collection(db, "groups"), orderBy("name")));
          groupIds = gsnap.docs.map(d => d.id);
        } else {
          // Load groups where user is group admin via collectionGroup on groupAdmins/{uid}
          const cg = await getDocs(query(collectionGroup(db, "groupAdmins"), where(documentId(), "==", uid)));
          groupIds = cg.docs.map(d => {
            // parent path: groups/{groupId}/groupAdmins/{uid}
            const parent = d.ref.parent.parent; // groups/{groupId}
            return parent ? parent.id : "";
          }).filter(Boolean);
        }

        // Fetch group docs + pending request counts
        const rows: GroupRow[] = [];
        for (const gid of groupIds) {
          try {
            const gdoc = await getDoc(doc(db, "groups", gid));
            const data = (gdoc.data() || {}) as DocumentData;
            // Count pending membership requests
            let pending = 0;
            try {
              const agg = await getCountFromServer(collection(db, `groups/${gid}/membershipRequests`));
              // @ts-ignore - count lives under .data().count in aggregation snapshot
              pending = Number((agg.data() as any)?.count || 0);
            } catch {}
            rows.push({ id: gid, name: data.name || gid, parent: data.parent || null, pendingRequests: pending });
          } catch {
            // ignore
          }
        }
        if (!cancelled) setGroups(rows);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [db, auth.currentUser]);

  // Build "Users & Groups" rollup from the groups we have
  useEffect(() => {
    let cancelled = false;
    async function loadUsersFromGroups() {
      try {
        setUsersLoading(true);
        const byUser: Record<string, { uid: string; name?: string; email?: string; groups: Array<{ id: string; name: string }> }> = {};
        for (const g of groups) {
          try {
            const msnap = await getDocs(collection(db, `groups/${g.id}/members`));
            msnap.forEach((m) => {
              const data = m.data() as MemberDoc;
              const uid = m.id;
              if (!byUser[uid]) {
                byUser[uid] = {
                  uid,
                  name: data?.displayName,
                  email: data?.email,
                  groups: []
                };
              }
              byUser[uid].groups.push({ id: g.id, name: g.name || g.id });
            });
          } catch {
            // continue
          }
          if (cancelled) return;
        }
        const rows = Object.values(byUser).sort((a, b) => (a.name || a.uid).localeCompare(b.name || b.uid));
        if (!cancelled) setUserRows(rows);
      } finally {
        if (!cancelled) setUsersLoading(false);
      }
    }
    if (groups.length) {
      loadUsersFromGroups();
    } else {
      setUserRows([]);
    }
    return () => { cancelled = true; };
  }, [db, groups]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <Loader label="Loading admin groups…" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{isSuper ? "All Groups" : "Your Groups"}</h1>
          <p className="text-slate-600 mt-2">{isSuper ? "You are a super admin." : "You are a group admin."}</p>
        </div>
        <Link to="/admin/users" className="text-sm text-slate-700 underline">Users</Link>
      </div>

      {/* Groups list */}
      {groups.length === 0 ? (
        <p className="text-slate-600 mt-4">No groups to manage.</p>
      ) : (
        <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {groups.map((g) => {
            const pending = g.pendingRequests || 0;
            const reqBtnBase = "text-sm px-3 py-1.5 rounded-lg text-center leading-tight min-w-[9rem] whitespace-normal md:whitespace-nowrap";
            const reqBtnClass = pending > 0
              ? `${reqBtnBase} bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200`
              : `${reqBtnBase} bg-slate-100 text-slate-900 hover:bg-slate-200`;
            return (
              <li key={g.id} className="p-4 flex items-center justify-between">
                <div className="min-w-0">
                  <div className="font-medium text-slate-900 truncate">{g.name || g.id}</div>
                  {g.parent && <div className="text-xs text-slate-500 truncate">Parent: {g.parent}</div>}
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link
                    to={`/admin/groups/${g.id}/requests`}
                    className={reqBtnClass}
                    title={pending > 0 ? `${pending} pending` : undefined}
                  >
                    {pending > 0 ? `View Requests (${pending})` : "View Requests"}
                  </Link>
                  <Link
                    to={`/admin/groups/${g.id}/members`}
                    className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]">
                    Members
                  </Link>
                  <Link
                    to={`/groups/${g.id}`}
                    className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]">
                    Open Group
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Users & Groups block */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white/70 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Users</h2>
          <Link to="/admin/users" className="text-sm text-slate-700 underline">Open full users page</Link>
        </div>
        {usersLoading ? (
          <p className="text-sm text-slate-600 mt-3">Loading users…</p>
        ) : userRows.length === 0 ? (
          <p className="text-sm text-slate-600 mt-3">No users found.</p>
        ) : (
          <ul className="mt-3 divide-y divide-slate-200">
            {userRows.map((u) => (
              <li key={u.uid} className="py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-slate-900 break-all">{u.name || u.uid}</div>
                    {u.email && <div className="text-xs text-slate-600 break-all">{u.email}</div>}
                    <div className="mt-1 flex flex-wrap gap-1">
                      {u.groups.map((g) => (
                        <Link
                          key={g.id}
                          to={`/admin/groups/${g.id}/members`}
                          className="text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200"
                          title="Manage members"
                        >
                          {g.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/admin/users?uid=${encodeURIComponent(u.uid)}`}
                    className="text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100 shrink-0"
                  >
                    View
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
