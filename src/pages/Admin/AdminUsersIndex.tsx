
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";

type UserRow = {
  uid: string;
  displayName?: string;
  email?: string;
  groups: Array<{ id: string; name: string }>;
};

export default function AdminUsersIndex() {
  const db = useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [q, setQ] = useState("");

  // optional preselect via ?uid=...
  const { search } = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const pre = params.get("uid") || "";
    if (pre) setQ(pre);
  }, [search]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        // Require sign-in
        if (!auth.currentUser) { setUsers([]); return; }

        // Read all /users docs (super admins can read them per rules)
        const usnap = await getDocs(collection(db, "users"));
        const base: UserRow[] = usnap.docs.map((d) => {
          const data = d.data() as any;
          return {
            uid: d.id,
            displayName: data?.displayName || data?.name || "",
            email: data?.email || "",
            groups: []
          };
        });

        // For each user, read memberships and resolve group names
        for (const row of base) {
          try {
            const msnap = await getDocs(collection(db, `users/${row.uid}/memberships`));
            const groups: Array<{ id: string; name: string }> = [];
            for (const m of msnap.docs) {
              const gid = m.id;
              try {
                const gdoc = await getDoc(doc(db, "groups", gid));
                const gdata = gdoc.data() as any || {};
                groups.push({ id: gid, name: gdata?.name || gid });
              } catch {
                groups.push({ id: gid, name: gid });
              }
            }
            row.groups = groups.sort((a, b) => a.name.localeCompare(b.name));
          } catch {
            row.groups = [];
          }
          if (cancelled) return;
        }

        // Sort users by name/email/uid
        base.sort((a, b) => (a.displayName || a.email || a.uid).localeCompare(b.displayName || b.email || b.uid));
        if (!cancelled) setUsers(base);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [db, auth.currentUser]);

  const filtered = users.filter((u) => {
    const needle = q.trim().toLowerCase();
    if (!needle) return true;
    return (
      u.uid.toLowerCase().includes(needle) ||
      (u.displayName || "").toLowerCase().includes(needle) ||
      (u.email || "").toLowerCase().includes(needle) ||
      u.groups.some((g) => g.name.toLowerCase().includes(needle) || g.id.toLowerCase().includes(needle))
    );
  });

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <Loader label="Loading users…" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Users</h1>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search users…"
          className="rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none w-56"
        />
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs font-medium text-slate-600">
          <div className="col-span-4">Name</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-3">Groups</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        <div className="divide-y divide-slate-200">
          {filtered.length === 0 ? (
            <div className="px-4 py-4 text-sm text-slate-600">No users found.</div>
          ) : (
            filtered.map((u) => (
              <div key={u.uid} className="grid grid-cols-12 gap-2 px-4 py-3 items-start">
                <div className="col-span-4 min-w-0">
                  <div className="text-sm text-slate-900 truncate">{u.displayName || u.uid}</div>
                  {u.email && <div className="text-xs text-slate-600 truncate">{u.email}</div>}
                </div>
                <div className="col-span-3 min-w-0">
                  <div className="flex flex-wrap gap-1">
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
                    {u.groups.length === 0 && <span className="text-xs text-slate-600">—</span>}
                  </div>
                </div>
                <div className="col-span-3 min-w-0">
                  <span className="text-xs break-all">{u.uid}</span>
                </div>
                <div className="col-span-2 text-right">
                  <Link
                    to={`/admin/users?uid=${encodeURIComponent(u.uid)}`}
                    className="text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
