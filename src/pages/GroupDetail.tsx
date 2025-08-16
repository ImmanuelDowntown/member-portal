import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";
import GroupAdminPanel from "@/components/GroupAdminPanel";
import GroupResources from "@/components/groups/GroupResources";
import TeamList from "@/components/groups/TeamList";
import GroupChat from "@/components/groups/GroupChat";
import GroupJoinButton from "@/components/GroupJoinButton";

type GroupDoc = {
  name?: string;
  description?: string;
  parent?: string | null;
  campus?: string | null;
  meetingDay?: string | null;
  meetingTime?: string | null; // e.g., "Wednesdays 7:00pm"
  imageUrl?: string | null;
  [k: string]: any;
};

export default function GroupDetail() {
  const { slug } = useParams();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [group, setGroup] = useState<GroupDoc | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!slug) return;
      setLoading(true);
      const snap = await getDoc(doc(db, "groups", slug));
      if (!active) return;
      setGroup((snap.exists() && (snap.data() as GroupDoc)) || null);
      setLoading(false);
    }
    load();
    return () => { active = false; };
  }, [db, slug]);

  if (loading) return <div className="max-w-5xl mx-auto p-6"><Loader label="Loading group…" /></div>;
  if (!group) return <div className="max-w-5xl mx-auto p-6"><p className="text-slate-700">Group not found.</p></div>;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {group.imageUrl ? (
            <img src={group.imageUrl} alt={group.name || String(slug)} className="h-16 w-16 rounded-xl object-cover border border-slate-200" />
          ) : (
            <div className="h-16 w-16 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
              <span className="text-lg">👥</span>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">{group.name || humanize(String(slug))}</h1>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              {group.parent && <Chip>{humanize(group.parent)}</Chip>}
              {group.campus && <Chip>{humanize(group.campus)}</Chip>}
              {group.meetingDay && <Chip>{group.meetingDay}</Chip>}
              {group.meetingTime && <Chip>{group.meetingTime}</Chip>}
            </div>
          </div>
        </div>
        <div>
          <GroupJoinButton groupId={slug!} />
        </div>
      </div>

      {/* About */}
      {group.description && (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4 prose prose-slate max-w-none">
          <p className="whitespace-pre-wrap">{group.description}</p>
        </div>
      )}

      {/* Related groups */}
      <div className="mt-4 flex flex-wrap gap-2">
        <a href="/groups/marketing" className="text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100">Marketing</a>
        <a href="/groups/branding" className="text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100">Branding</a>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <GroupResources groupId={slug!} />
      </div>

      {/* Team */}
      <div className="mt-4">
        <TeamList groupId={slug!} />
      </div>

      {/* Team Chat */}
      <div className="mt-4">
        <GroupChat groupId={slug!} />
      </div>

      {/* Admin Panel (only shows if super/group admin) */}
      <GroupAdminPanel groupId={slug!} />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
      {children}
    </span>
  );
}
function humanize(s: string) {
  return s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
