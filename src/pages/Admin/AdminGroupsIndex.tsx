import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  collectionGroup,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";

type Group = { id: string; name?: string; parent?: string | null };

export default function AdminGroupsIndex() {
  const auth = getAuth(app);
  const uid = auth.currentUser?.uid || "";
  const db = getFirestore(app);
  const [loading, setLoading] = useState(true);
  const [isSuper, setIsSuper] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);

    const [requestCounts, setRequestCounts] = useState<Record<string, number>>({});
useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      try {
        // Check super admin
        const adminSnap = await getDoc(doc(db, "admins", uid));
        const superAdmin = adminSnap.exists();
        if (!active) return;
        setIsSuper(superAdmin);

        if (superAdmin) {
          const allQ = query(collection(db, "groups"), orderBy("name", "asc"));
          const snap = await getDocs(allQ);
          if (!active) return;
          const list: Group[] = [];
          snap.forEach((d) => list.push({ id: d.id, ...(d.data() as any) }));
          setGroups(list);
        } else {
          // Find groups where this user is in groupAdmins
          const cg = query(collectionGroup(db, "groupAdmins"), where("uid", "==", uid));
          const snap = await getDocs(cg);
          const list: Group[] = [];
          for (const d of snap.docs) {
            const groupRef = d.ref.parent.parent;
            if (groupRef) {
              const gs = await getDoc(groupRef);
              if (gs.exists()) list.push({ id: gs.id, ...(gs.data() as any) });
            }
          }
          if (!active) return;
          // Sort by name
          list.sort((a, b) => ((a.name || a.id).localeCompare(b.name || b.id)));
          setGroups(list);
        }
      } finally {
        setLoading(false);
      }
    }
    if (uid) load();
    return () => { active = false; };
  }, [db, uid]);

  
  useEffect(() => {
    let active = true;
    async function loadCounts() {
      if (groups.length === 0) {
        setRequestCounts({});
        return;
      }
      const entries = await Promise.all(
        groups.map(async (g) => {
          try {
            const snap = await getDocs(collection(db, `groups/${g.id}/membershipRequests`));
            return [g.id, snap.size] as const;
          } catch {
            return [g.id, 0] as const;
          }
        })
      );
      if (!active) return;
      const map: Record<string, number> = {};
      for (const [id, count] of entries) map[id] = count;
      setRequestCounts(map);
    }
    loadCounts();
    return () => {
      active = false;
    };
  }, [db, groups]);
if (loading) return <div className="max-w-5xl mx-auto p-6"><Loader label="Loading admin groups…" /></div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
<h1 className="text-2xl font-semibold text-slate-900">{isSuper ? "All Groups" : "Your Groups"}</h1>
      <p className="text-slate-600 mt-2">{isSuper ? "You are a super admin." : "You are a group admin."}</p>
      <div className="mt-3 mb-2 text-right pr-4">
        {isSuper && (
          <Link
            to="/admin/groups/new"
            className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200"
          >
            New Group
          </Link>
        )}
      </div>


      {groups.length === 0 ? (
        <p className="text-slate-600 mt-4">No groups to manage.</p>
      ) : (
        <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {groups.map((g) => (
            <li key={g.id} className="p-4 flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">{g.name || humanizeSlug(g.id)}</div>
                {g.parent && <div className="text-xs text-slate-500">Parent: {humanizeSlug(g.parent)}</div>}
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/admin/groups/${g.id}/requests`}
                  className={(requestCounts[g.id] ?? 0) > 0 ? "text-sm px-3 py-1.5 rounded-lg bg-[#B39949] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B39949]" : "text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800"}
                >
                  View Requests
                </Link>
                <Link
                  to={`/groups/${g.id}`}
                  className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200"
                >
                  Open Group
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function humanizeSlug(slug: string) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
