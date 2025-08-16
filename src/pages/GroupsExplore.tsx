import React, { useEffect, useMemo, useState } from "react";
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import GroupCard, { Group } from "@/components/GroupCard";
import GroupJoinButton from "@/components/GroupJoinButton";
import Loader from "@/components/Loader";

export default function GroupsExplore() {
  const db = useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);

  const [groups, setGroups] = useState<Group[]>([]);
  const [memberOf, setMemberOf] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        // Load all groups
        const gs = await getDocs(query(collection(db, "groups"), orderBy("name")));
        const list: Group[] = gs.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
        if (!cancelled) setGroups(list);

        // Load memberships for current user
        if (auth.currentUser) {
          const uid = auth.currentUser.uid;
          const ms = await getDocs(collection(db, `users/${uid}/memberships`));
          if (!cancelled) setMemberOf(new Set(ms.docs.map((d) => d.id)));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [db, auth.currentUser]);

  const visible = useMemo(
    () => groups.filter((g) => !memberOf.has(g.id)),
    [groups, memberOf]
  );

  if (loading) {
    return (
      <div className="container py-8">
        <div className="max-w-5xl mx-auto p-6">
          <Loader label="Loading groups…" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-accent mb-4">Explore Groups</h1>

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((g) => (
              <GroupCard
                key={g.id}
                group={g}
                isMember={false}
                footer={<GroupJoinButton groupId={g.id} />}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-text2">You’ve already joined all available groups.</p>
          </div>
        )}
      </div>
    </div>
  );
}
