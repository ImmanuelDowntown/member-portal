import React, { useState } from "react";
import { getFirestore, doc, setDoc, serverTimestamp, getDocs, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase"; // change to ../firebase if needed

function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(label + " timed out after " + ms + "ms")), ms);
    p.then((v) => { clearTimeout(t); resolve(v); }, (e) => { clearTimeout(t); reject(e); });
  });
}

export default function SeedGroupsDebug4() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const SEED_GROUPS = [
    { id: "teaching-team", name: "Teaching Team", description: "Sermon planning, exegesis collaboration, and teaching development." },
    { id: "worship-team", name: "Worship Team", description: "Music, liturgy, tech, and service planning." },
    { id: "hospitality", name: "Hospitality", description: "Greeters, coffee, newcomer follow-up, and Sunday logistics." },
    { id: "kids-ministry", name: "Kids Ministry", description: "Curriculum, volunteers, and safety for children." },
  ] as const;

  function push(line: string) {
    setLog((prev) => [...prev, line]);
    // eslint-disable-next-line no-console
    console.log(line);
  }

  async function seed() {
    setBusy(true);
    setLog([]);
    try {
      const uid = auth.currentUser?.uid;
      push(`Auth: ${uid ? "signed in (uid=" + uid + ")" : "NOT signed in"}`);

      push("Preflight: writing to groups/__health__ …");
      await withTimeout(setDoc(doc(db, "groups", "__health__"), { ts: serverTimestamp() }, { merge: true }), 8000, "Preflight write");
      push("Preflight OK: able to write under /groups.");

      for (const g of SEED_GROUPS) {
        await withTimeout(setDoc(
          doc(db, "groups", g.id),
          {
            name: g.name,
            description: g.description,
            parent: null,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        ), 8000, "Write " + g.id);
        push(`✔ upserted "${g.name}" (${g.id})`);
      }

      const snap = await withTimeout(getDocs(collection(db, "groups")), 8000, "Read /groups");
      push(`Count after seeding: ${snap.size} docs in /groups`);
      push("Done. Visit /groups/explore.");
    } catch (e: any) {
      push("ERROR: " + (e?.message || String(e)));
      push("If this times out, check Firestore rules, project ID in .env, and your browser console Network tab for firestore.googleapis.com responses.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Seed Groups (Debug 4)</h1>
      <div className="mt-4 flex gap-3">
        <button onClick={seed} disabled={busy} className="px-4 py-2 rounded-lg bg-slate-900 text-white disabled:opacity-60">
          {busy ? "Seeding…" : "Seed Groups"}
        </button>
        <button onClick={() => setLog([])} disabled={busy} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-900 disabled:opacity-60">
          Clear Log
        </button>
      </div>
      <ul className="mt-4 space-y-1 text-sm text-slate-700">
        {log.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
      <div className="mt-4 text-xs text-slate-500">
        <p>Tips:</p>
        <ul className="list-disc ml-4">
          <li>Temporarily allow signed-in reads/writes on <code>/groups</code> in Firestore rules.</li>
          <li>Verify <code>VITE_FIREBASE_PROJECT_ID</code> in <code>.env.local</code> matches your Firebase console project.</li>
          <li>Open DevTools → Network → filter for <code>firestore.googleapis.com</code> and check the response.</li>
        </ul>
      </div>
    </div>
  );
}
