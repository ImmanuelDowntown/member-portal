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
  type DocumentData,
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

export default function AdminGroupsIndex() {
  const db = useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);

  const [loading, setLoading] = useState(true);
  const [isSuper, setIsSuper] = useState(false);
  const [groups, setGroups] = useState<GroupRow[]>([]);

  // Determine super-admin and load groups user can manage
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const u = auth.currentUser;
        if (!u) {
          if (!cancelled) {
            setIsSuper(false);
            setGroups([]);
          }
          return;
        }
        const uid = u.uid;

        // super-admin check
        const superSnap = await getDoc(doc(db, "users", uid));
        const superAdmin = (superSnap.data() as any)?.isSuperAdmin === true;
        if (!cancelled) setIsSuper(superAdmin);

        let groupIds: string[] = [];
        if (superAdmin) {
          // Load all groups
          const gsnap = await getDocs(query(collection(db, "groups"), orderBy("name")));
          groupIds = gsnap.docs.map((d) => d.id);
        } else {
          // Load groups where user is group admin via collectionGroup on groupAdmins/{uid} OR docId match
          // Prefer documentId() match when groupAdmins docs use uid as document id
          const cgById = await getDocs(query(collectionGroup(db, "groupAdmins"), where("uid", "==", uid))
);
          const idsFromDocId = cgById.docs
            .map((d) => d.ref.parent.parent?.id || "")
            .filter(Boolean);

          if (idsFromDocId.length) {
            groupIds = idsFromDocId;
          } else {
            const cg = await getDocs(query(collectionGroup(db, "groupAdmins"), where("uid", "==", uid)));
            groupIds = cg.docs
              .map((d) => d.ref.parent.parent?.id || "")
              .filter(Boolean);
          }
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
              pending = Number((agg.data() as any)?.count || 0);
            } catch {
              // ignore count failure for this group
            }
            rows.push({ id: gid, name: data.name || gid, parent: data.parent || null, pendingRequests: pending });
          } catch {
            // ignore missing group doc
          }
        }
        if (!cancelled) setGroups(rows);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [db, auth.currentUser]);

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
        <div className="flex items-center gap-3">
          {isSuper && (
            <Link
              to="/admin/groups/new"
              className="text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
              title="Create a new group"
            >
              New Group
            </Link>
          )}
          <Link to="/admin/users" className="text-sm text-slate-700 underline">
            Users
          </Link>
          <Link to="/admin" className="text-sm text-slate-700 underline">Back to Admin Console</Link>
        </div>
      </div>

      {/* Groups list */}
      {groups.length === 0 ? (
        <p className="text-slate-600 mt-4">No groups to manage.</p>
      ) : (
        <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {groups.map((g) => {
            const pending = g.pendingRequests || 0;
            const reqBtnBase =
              "text-sm px-3 py-1.5 rounded-lg text-center leading-tight min-w-[9rem] whitespace-normal md:whitespace-nowrap";
            const reqBtnClass =
              pending > 0
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
                    className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]"
                  >
                    Members
                  </Link>
                  <Link
                    to={`/groups/${g.id}`}
                    className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]"
                  >
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
