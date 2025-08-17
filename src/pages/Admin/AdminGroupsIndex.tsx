import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  collectionGroup,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  doc,
  getCountFromServer,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";

type Group = { id: string; name?: string; parent?: string | null; pendingCount?: number };

export default function AdminGroupsIndex() {
  const auth = getAuth(app);
  const uid = auth.currentUser?.uid || "";
  const db = getFirestore(app);
  const [loading, setLoading] = useState(true);
  const [isSuper, setIsSuper] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);

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

        async function attachPendingCounts(list: Group[]): Promise<Group[]> {
          const withCounts = await Promise.all(
            list.map(async (g) => {
              try {
                const agg = await getCountFromServer(collection(db, `groups/${g.id}/membershipRequests`));
                const count = Number((agg.data() as any)?.count || 0);
                return { ...g, pendingCount: count };
              } catch {
                return { ...g, pendingCount: 0 };
              }
            })
          );
          return withCounts;
        }

        if (superAdmin) {
          const allQ = query(collection(db, "groups"), orderBy("name", "asc"));
          const snap = await getDocs(allQ);
          if (!active) return;
          const baseList: Group[] = [];
          snap.forEach((d) => baseList.push({ id: d.id, ...(d.data() as any) }));
          const listWithCounts = await attachPendingCounts(baseList);
          if (!active) return;
          setGroups(listWithCounts);
        } else {
          // Find groups where this user is in groupAdmins
          const cg = query(collectionGroup(db, "groupAdmins"), where("uid", "==", uid));
          const snap = await getDocs(cg);
          const baseList: Group[] = [];
          for (const d of snap.docs) {
            const groupRef = d.ref.parent?.parent;
            if (groupRef) {
              const gs = await getDoc(groupRef);
              if (gs.exists()) baseList.push({ id: gs.id, ...(gs.data() as any) });
            }
          }
          if (!active) return;
          baseList.sort((a, b) => ((a.name || a.id).localeCompare(b.name || b.id)));
          const listWithCounts = await attachPendingCounts(baseList);
          if (!active) return;
          setGroups(listWithCounts);
        }
      } finally {
        setLoading(false);
      }
    }
    if (uid) load();
    return () => { active = false; };
  }, [db, uid]);

  if (loading) return <div className="max-w-5xl mx-auto p-6"><Loader label="Loading admin groups…" /></div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">{isSuper ? "All Groups" : "Your Groups"}</h1>
      <p className="text-slate-600 mt-2">{isSuper ? "You are a super admin." : "You are a group admin."}</p>

      {groups.length === 0 ? (
        <p className="text-slate-600 mt-4">No groups to manage.</p>
      ) : (
        <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {groups.map((g) => {
            const pending = g.pendingCount || 0;
            const btnBase = "text-sm px-3 py-1.5 rounded-lg text-center leading-tight min-w-[9rem] whitespace-normal md:whitespace-nowrap";
            const reqClass =
              pending > 0
                ? `${btnBase} bg-yellow-400 text-black hover:bg-yellow-500`
                : `${btnBase} bg-slate-900 text-white hover:bg-slate-800`;
            return (
              <li key={g.id} className="p-4 flex items-center justify-between">
                <div className="min-w-0">
                  <div className="font-medium text-slate-900 truncate">{g.name || humanizeSlug(g.id)}</div>
                  {g.parent && <div className="text-xs text-slate-500 truncate">Parent: {humanizeSlug(g.parent)}</div>}
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link
                    to={`/admin/groups/${g.id}/requests`}
                    className={reqClass}
                    title={pending > 0 ? `${pending} pending` : undefined}
                  >
                    {pending > 0 ? `View Requests (${pending})` : "View Requests"}
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
    </div>
  );
}

function humanizeSlug(slug: string) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
