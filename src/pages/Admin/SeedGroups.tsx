import React, { useState } from "react";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { app } from "@/lib/firebase"; // change to ../lib/firebase if you don't use the @ alias

type SeedGroup = {
  id: string;
  name: string;
  description: string;
  parent?: string | null;
};

// You can tweak this list or run the 'SeedGroupsFromDefaults' variant to pull from src/data/defaultGroups.ts
const SEED_GROUPS: SeedGroup[] = [
  { id: "teaching-team", name: "Teaching Team", description: "Sermon planning, exegesis collaboration, and teaching development." },
  { id: "worship-team", name: "Worship Team", description: "Music, liturgy, tech, and service planning." },
  { id: "hospitality", name: "Hospitality", description: "Greeters, coffee, newcomer follow-up, and Sunday logistics." },
  { id: "kids-ministry", name: "Kids Ministry", description: "Curriculum, volunteers, and safety for children." },
  { id: "alpha", name: "Alpha / Explore Faith", description: "Open discussions about Christianity for seekers and skeptics." },
  { id: "branding", name: "Branding", description: "Visual identity, signage, and printed materials.", parent: "marketing" },
  { id: "marketing", name: "Marketing", description: "Outreach strategy, social media, and communications." },
  { id: "prayer", name: "Prayer", description: "Intercession, prayer gatherings, and care requests." },
];

export default function SeedGroups() {
  const db = getFirestore(app);
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  async function seed() {
    setBusy(true);
    setDone(false);
    setLog([]);
    try {
      for (const g of SEED_GROUPS) {
        await setDoc(
          doc(db, "groups", g.id),
          {
            name: g.name,
            description: g.description,
            parent: g.parent ?? null,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );
        setLog((prev) => [...prev, `✔ upserted "${g.name}" (${g.id})`]);
      }
      setDone(true);
    } catch (e: any) {
      setLog((prev) => [...prev, `✖ error: ${e?.message || e}`]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Seed Groups</h1>
      <p className="text-slate-600 mt-2">
        Creates a few starter groups in the <code>groups</code> collection. Delete this page/route after running.
      </p>
      <button
        onClick={seed}
        disabled={busy}
        className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {busy ? "Seeding…" : "Seed Groups"}
      </button>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-4">
        <h2 className="font-medium text-slate-900">Log</h2>
        <ul className="mt-2 space-y-1 text-sm text-slate-700">
          {log.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        {done && <p className="text-green-700 text-sm mt-2">Done. Visit /groups/explore to verify.</p>}
      </div>

      <div className="mt-6 text-xs text-slate-500">
        <p><strong>Note:</strong> If you see a permission error, ensure Firestore rules allow authenticated reads on <code>groups</code>.</p>
      </div>
    </div>
  );
}
