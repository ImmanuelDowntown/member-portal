import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

export default function AdminGroupEdit() {
  const { slug } = useParams();
  const db = getFirestore(app);
  const nav = useNavigate();
  const [form, setForm] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!slug) return;
      setLoading(true);
      const snap = await getDoc(doc(db, "groups", slug));
      if (!active) return;
      setForm(snap.exists() ? snap.data() : {});
      setLoading(false);
    }
    load();
    return () => { active = false; };
  }, [db, slug]);

  async function save() {
    if (!slug) return;
    setSaving(true);
    setStatus(null);
    try {
      await setDoc(doc(db, "groups", slug), {
        ...form,
        name: String(form?.name || "").trim(),
        description: (form?.description || "").trim() || null,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      setStatus("✅ Saved");
    } catch(e:any) {
      setStatus(e?.message || "Failed to save.");
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    if (!slug) return;
    if (!confirm("Delete this group? This cannot be undone.")) return;
    try {
      await deleteDoc(doc(db, "groups", slug));
      nav("/admin/groups", { replace: true });
    } catch (e:any) {
      setStatus(e?.message || "Failed to delete.");
    }
  }

  if (loading) return <div className="max-w-3xl mx-auto p-6">Loading…</div>;
  if (!form) return <div className="max-w-3xl mx-auto p-6">Not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Edit Group</h1>
        <Link to="/admin/groups" className="text-sm text-slate-700 underline">Back to groups</Link>
      </div>

      <div className="mt-4 grid gap-3">
        <Field label="Name">
          <input value={form?.name || ""} onChange={e=>setForm({...form, name: e.target.value})} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Description">
          <textarea value={form?.description || ""} onChange={e=>setForm({...form, description: e.target.value})} rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Parent ministry">
            <input value={form?.parent || ""} onChange={e=>setForm({...form, parent: e.target.value})} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          </Field>
          <Field label="Campus">
            <input value={form?.campus || ""} onChange={e=>setForm({...form, campus: e.target.value})} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Meeting day">
            <select value={form?.meetingDay || ""} onChange={e=>setForm({...form, meetingDay: e.target.value})} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70">
              <option value="">—</option>
              {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(d=>(<option key={d} value={d}>{d}</option>))}
            </select>
          </Field>
          <Field label="Meeting time">
            <input value={form?.meetingTime || ""} onChange={e=>setForm({...form, meetingTime: e.target.value})} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="e.g., 7:00pm" />
          </Field>
        </div>
        <Field label="Image URL">
          <input value={form?.imageUrl || ""} onChange={e=>setForm({...form, imageUrl: e.target.value})} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="https://…" />
        </Field>

        {status && <p className="text-sm text-slate-700">{status}</p>}

        <div className="flex gap-3">
          <button onClick={save} disabled={saving} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
            {saving ? "Saving…" : "Save changes"}
          </button>
          <button onClick={remove} className="px-4 py-2 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200">Delete group</button>
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
