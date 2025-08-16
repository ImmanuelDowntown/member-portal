import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { app } from "@/lib/firebase";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function AdminGroupNew() {
  const db = getFirestore(app);
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [parent, setParent] = useState("");
  const [campus, setCampus] = useState("");
  const [meetingDay, setMeetingDay] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const effectiveSlug = useMemo(() => (slug || slugify(name)), [slug, name]);

  async function save() {
    const s = effectiveSlug.trim();
    if (!name.trim() || !s) { setStatus("⚠️ Name and slug are required."); return; }
    setSaving(true);
    setStatus(null);
    try {
      const ref = doc(db, "groups", s);
      const exists = await getDoc(ref);
      if (exists.exists()) {
        setStatus("❌ A group with that slug already exists.");
        setSaving(false);
        return;
      }
      await setDoc(ref, {
        id: s,            // keep id handy in the document itself
        name: name.trim(),
        slug: s,
        description: description.trim() || null,
        parent: parent || null,
        campus: campus || null,
        meetingDay: meetingDay || null,
        meetingTime: meetingTime || null,
        imageUrl: imageUrl || null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      nav(`/admin/groups/${s}/edit`, { replace: true });
    } catch (e: any) {
      setStatus("❌ " + (e?.message || "Failed to create group."));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Create Group</h1>
      <div className="mt-4 grid gap-3">
        <Field label="Name">
          <input
            value={name}
            onChange={e=>setName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <p className="mt-1 text-xs text-slate-500">Slug preview: <code>{effectiveSlug || "—"}</code></p>
        </Field>
        <Field label="Slug (optional)">
          <input
            value={slug}
            onChange={e=>setSlug(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="auto from name if blank"
          />
        </Field>
        <Field label="Description">
          <textarea
            value={description}
            onChange={e=>setDescription(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Parent ministry (optional)">
            <input value={parent} onChange={e=>setParent(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          </Field>
          <Field label="Campus (optional)">
            <input value={campus} onChange={e=>setCampus(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Meeting day (optional)">
            <select value={meetingDay} onChange={e=>setMeetingDay(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70">
              <option value="">—</option>
              {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(d=>(<option key={d} value={d}>{d}</option>))}
            </select>
          </Field>
          <Field label="Meeting time (optional)">
            <input value={meetingTime} onChange={e=>setMeetingTime(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="e.g., 7:00pm" />
          </Field>
        </div>
        <Field label="Image URL (optional)">
          <input value={imageUrl} onChange={e=>setImageUrl(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="https://…" />
        </Field>

        {status && <p className="text-sm text-slate-700">{status}</p>}

        <div className="flex gap-3">
          <button onClick={save} disabled={saving} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
            {saving ? "Creating…" : "Create group"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({label, children}:{label:string; children: React.ReactNode}){
  return (
    <label className="block">
      <div className="text-sm font-medium text-slate-700">{label}</div>
      <div className="mt-1">{children}</div>
    </label>
  );
}
