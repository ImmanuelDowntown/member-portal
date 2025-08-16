import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc, collection, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import GroupCard, { Group } from "@/components/GroupCard";
import Loader from "@/components/Loader";

type MembershipDoc = { role?: "admin" | "member" };

export default function Groups() {
  const auth = getAuth(app);
  const db = useMemo(() => getFirestore(app), []);

  const [groups, setGroups] = useState<Group[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;
    const uid = auth.currentUser.uid;

    // Listen for memberships then fetch group docs
    const unsub = onSnapshot(collection(db, `users/${uid}/memberships`), async (snap) => {
      const ids = snap.docs.map((d) => d.id);
      if (ids.length === 0) {
        setGroups([]);
        setLoading(false);
        return;
      }
      const docs = await Promise.all(ids.map(async (id) => {
        const g = await getDoc(doc(db, "groups", id));
        if (g.exists()) {
          const data = g.data() as any;
          return { id: g.id, ...data } as Group;
        }
        return null;
      }));
      setGroups(docs.filter(Boolean) as Group[]);
      setLoading(false);
    });

    return () => unsub();
  }, [auth.currentUser, db]);

  if (loading) {
    return (
      <div className="container py-8">
        <div className="max-w-5xl mx-auto p-6">
          <Loader label="Loading your groups…" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-accent mb-4">Your Groups</h1>

        {groups && groups.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups.map((g) => (
                <GroupCard key={g.id} group={g} isMember />
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/groups/explore"
                className="inline-flex rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted"
              >
                Other Available Groups
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-text2">You haven’t joined any groups yet.</p>
            <Link to="/groups/explore" className="inline-flex mt-3 rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800">
              View More Groups
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
