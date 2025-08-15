import React, { useEffect, useMemo, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { app } from "@/firebase";
import Loader from "@/components/Loader";
import GroupCard, { Group } from "@/components/GroupCard";
import GroupJoinButton from "@/components/GroupJoinButton";

type G = Group & {
  parent?: string | null;
  campus?: string | null;
  meetingDay?: string | null; // e.g., 'Sunday', 'Wednesday'
};

export default function GroupsExplore() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const user = auth.currentUser;

  const [groups, setGroups] = useState<G[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [parent, setParent] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [campus, setCampus] = useState<string>("");

  useEffect(() => {
    let active = true;
    async function load() {
      setError(null);
      try {
        const ref = collection(db, "groups");
        const q = query(ref, orderBy("name", "asc"));
        const snap = await getDocs(q);
        if (!active) return;
        const list: G[] = [];
        snap.forEach((d) => list.push({ id: d.id, ...(d.data() as any) }));
        setGroups(list);
      } catch (e: any) {
        try {
          const ref = collection(db, "groups");
          const snap = await getDocs(ref);
          const list: G[] = [];
          snap.forEach((d) => list.push({ id: d.id, ...(d.data() as any) }));
          list.sort((a, b) => (label(a) > label(b) ? 1 : -1));
          setGroups(list);
        } catch (inner: any) {
          setError(inner?.message || "Failed to load groups.");
          setGroups([]);
        }
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [db]);

  const facets = useMemo(() => {
    const parents = new Set<string>();
    const days = new Set<string>();
    const campuses = new Set<string>();
    groups.forEach((g) => {
      if (g.parent) parents.add(humanize(g.parent));
      if (g.meetingDay) days.add(String(g.meetingDay));
      if (g.campus) campuses.add(humanize(String(g.campus)));
    });
    return {
      parents: Array.from(parents).sort(),
      days: Array.from(days).sort((a, b) => weekdayOrder(a) - weekdayOrder(b)),
      campuses: Array.from(campuses).sort(),
    };
  }, [groups]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return groups.filter((g) => {
      if (parent && humanize(String(g.parent || "")) !== parent) return false;
      if (day && String(g.meetingDay || "") !== day) return false;
      if (campus && humanize(String(g.campus || "")) !== campus) return false;
      if (!term) return true;
      const text = [g.name, (g as any).title, g.description, g.id, g.parent, g.campus, g.meetingDay]
        .filter(Boolean).join(" ").toLowerCase();
      return text.includes(term);
    });
  }, [groups, search, parent, day, campus]);

  if (!user) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <p className="text-slate-700">Please sign in to browse groups.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Explore Groups</h1>
            <p className="text-slate-600">Filter by ministry, day, and campus.</p>
          </div>
          <div className="w-full sm:w-80">
            <input
              type="search"
              placeholder="Search groups…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Select label="Ministry" value={parent} onChange={setParent} options={facets.parents} />
          <Select label="Day" value={day} onChange={setDay} options={facets.days} />
          <Select label="Campus" value={campus} onChange={setCampus} options={facets.campuses} />
          {(parent || day || campus) && (
            <button onClick={() => { setParent(''); setDay(''); setCampus(''); }}
              className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200">
              Clear filters
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <Loader label="Loading groups…" />
      ) : error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 text-rose-800 p-4">
          <p className="font-medium">Couldn’t load groups.</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-slate-600">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((g) => (
            <GroupCard key={g.id} group={g} footer={<GroupJoinButton groupId={g.id} />} />
          ))}
        </div>
      )}
    </div>
  );
}

function Select({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="text-sm text-slate-700">
      <span className="mr-2">{label}</span>
      <select
        className="rounded-lg border border-slate-300 bg-white/70 px-3 py-1.5 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

function label(g: Group) {
  return (g.name || (g as any).title || humanize(String(g.id))).toLowerCase();
}
function humanize(s: string) {
  return s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function weekdayOrder(d: string) {
  const order = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const i = order.indexOf(d);
  return i === -1 ? 99 : i;
}
