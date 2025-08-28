import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collectionGroup,
  getDocs,
  getDoc as getDocDirect,
  query,
  where,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

export default function AdminTools() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [uid, setUid] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [isSuper, setIsSuper] = useState(false);
  const [groups, setGroups] = useState<Array<{ id: string; name?: string }>>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUid(u?.uid ?? ""));
    return unsub;
  }, [auth]);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!uid) {
        setLoading(false);
        setIsSuper(false);
        setGroups([]);
        return;
      }
      setLoading(true);
      try {
        // 1) Check super-admin
        const adminSnap = await getDoc(doc(db, "users", uid));
        const superYes = (adminSnap.data() as any)?.isSuperAdmin === true;
        if (!active) return;
        setIsSuper(superYes);

        // 2) Find groups where user is group admin
        const cg = collectionGroup(db, "groupAdmins");
        let parents: DocumentReference<DocumentData>[] = [];

        if (superYes) {
          // Super admins are allowed to read all groupAdmins docs; filter client-side by UID
          const snap = await getDocs(cg);
          const seen = new Set<string>();
          snap.forEach((d) => {
            const data = d.data() || {};
            if (d.id === uid || data.uid === uid) {
              const p = d.ref.parent.parent;
              if (p && !seen.has(p.id)) {
                seen.add(p.id);
                parents.push(p);
              }
            }
          });
        } else {
          // Non-super: query only docs with uid field equal to the user
          // (This requires your groupAdmins docs to include { uid: <userId> } )
          const q = query(cg, where("uid", "==", uid));
          const snap = await getDocs(q);
          const seen = new Set<string>();
          snap.forEach((d) => {
            const p = d.ref.parent.parent;
            if (p && !seen.has(p.id)) {
              seen.add(p.id);
              parents.push(p);
            }
          });
        }

        // 3) Load each group's name
        const list: Array<{ id: string; name?: string }> = [];
        for (const pref of parents) {
          const gs = await getDocDirect(pref);
          if (gs.exists()) {
            const data = gs.data() as any;
            list.push({ id: gs.id, name: data?.name });
          } else {
            list.push({ id: pref.id });
          }
        }
        list.sort((a, b) => (a.name ?? a.id).localeCompare(b.name ?? b.id));
        if (!active) return;
        setGroups(list);
      } catch {
        if (active) {
          setGroups([]);
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [db, uid]);

  const hasAnyAdmin = useMemo(() => isSuper || groups.length > 0, [isSuper, groups.length]);

  if (loading) return null;
  if (!hasAnyAdmin) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Admin Tools</h2>
          <p className="text-sm text-slate-600">
            {isSuper ? "You are a super admin." : "You are a group admin."}
          </p>
        </div>
        <Link
          to="/admin"
          className="text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
        >
          Admin Console
        </Link>
      </div>

      {groups.length > 0 && (
        <div className="mt-3">
          <div className="text-sm font-medium text-slate-700 mb-2">Groups you administer</div>
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.id}>
                <Link
                  to={`/admin/groups/${g.id}/requests`}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200"
                >
                  {g.name || humanizeSlug(g.id)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function humanizeSlug(slug: string) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
