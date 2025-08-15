import React, { useState } from "react";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { app } from "../firebase";
import defaultGroupsJson from "../data/defaultGroups";

// If your file exports named types, this local type mirrors it.
type AppGroup = {
  slug: string;
  name: string;
  description?: string;
  parentId?: string; // slug of parent group
};

const rows: AppGroup[] = (defaultGroupsJson as any) as AppGroup[];

export default function SeedGroupsFromDefaults() {
  const db = getFirestore(app);
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  async function seed() {
    setBusy(true);
    setDone(false);
    setLog([]);
    try {
      for (const g of rows) {
        const id = g.slug;
        await setDoc(doc(db, "groups", id), {
          name: g.name,
          description: g.description || "",
          parent: g.parentId || null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }, { merge: true });
        setLog(prev => [...prev, `✔ upserted "${g.name}" (${id})`]);
      }
      setDone(true);
    } catch (e: any) {
      setLog(prev => [...prev, `✖ error: ${e?.message || e}`]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Seed Groups From Defaults</h1>
      <p className="text-slate-600 mt-2">
        Imports your <code>defaultGroups.ts</code> list and writes it into the Firestore
        <code> groups </code> collection.
      </p>
      <ol className="list-decimal ml-5 mt-3 text-sm text-slate-700 space-y-1">
        <li>Ensure your file is located at <code>src/data/defaultGroups.ts</code> and exports default.</li>
        <li>Add the temporary route (see ROUTES_SEED_FROM_DEFAULTS.txt).</li>
        <li>Visit <code>/admin/seed-from-defaults</code> and click “Seed from Defaults”.</li>
      </ol>
      <button
        onClick={seed}
        disabled={busy}
        className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {busy ? "Seeding…" : "Seed from Defaults"}
      </button>
      <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-4">
        <h2 className="font-medium text-slate-900">Log</h2>
        <ul className="mt-2 space-y-1 text-sm text-slate-700">
          {log.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
        {done && <p className="text-green-700 text-sm mt-2">Done. Visit /groups/explore to verify.</p>}
      </div>
      <div className="mt-6 text-xs text-slate-500">
        <p><strong>Note:</strong> If you see a permission error, adjust Firestore rules to allow authenticated reads on <code>groups</code>.</p>
      </div>
    </div>
  );
}
