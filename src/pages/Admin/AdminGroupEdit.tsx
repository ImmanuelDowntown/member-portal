import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

type GroupForm = {
  name?: string;
  description?: string | null;
  parent?: string | null;
  campus?: string | null;
  meetingDay?: string | null;
  meetingTime?: string | null;
  meetingFrequency?: "weekly" | "biweekly" | "monthly" | "" | null;
  imageUrl?: string | null;
  calendarIds?: string[];
};

export default function AdminGroupEdit() {
  const { slug } = useParams();
  const db = getFirestore(app);
  const nav = useNavigate();
  const [form, setForm] = useState<GroupForm | null>(null);
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
      const data = snap.exists() ? (snap.data() as GroupForm) : {};
      setForm({
        name: data?.name || "",
        description: data?.description ?? "",
        parent: data?.parent ?? "",
        campus: data?.campus ?? "",
        meetingDay: data?.meetingDay ?? "",
        meetingTime: data?.meetingTime ?? "",
        meetingFrequency: (data?.meetingFrequency as any) ?? "",
        imageUrl: data?.imageUrl ?? "",
        calendarIds: Array.isArray((data as any)?.calendarIds) ? (data as any).calendarIds : [],
      });
      setLoading(false);
    }
    load();
    return () => { active = false; };
  }, [db, slug]);

  async function save() {
    if (!slug || !form) return;
    setSaving(true);
    setStatus(null);
    try {
      const payload: GroupForm & { updatedAt: unknown } = {
        ...form,
        name: String(form?.name || "").trim(),
        description: (form?.description || "")?.trim() || null,
        parent: (form?.parent || "")?.trim() || null,
        campus: (form?.campus || "")?.trim() || null,
        meetingDay: (form?.meetingDay || "")?.trim() || null,
        meetingTime: (form?.meetingTime || "")?.trim() || null,
        meetingFrequency: (form?.meetingFrequency || "") as GroupForm["meetingFrequency"],
        imageUrl: (form?.imageUrl || "")?.trim() || null,
        calendarIds: (form?.calendarIds || []).map((id) => id.trim()).filter(Boolean),
        updatedAt: serverTimestamp(),
      };
      await setDoc(doc(db, "groups", slug), payload as any, { merge: true });
      setStatus("✅ Saved");
    } catch(e: unknown) {
      const msg = (e as { message?: string })?.message || "Failed to save.";
      setStatus(msg);
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    if (!slug) return;
    // eslint-disable-next-line no-alert
    if (!confirm("Delete this group? This cannot be undone.")) return;
    try {
      await deleteDoc(doc(db, "groups", slug));
      nav("/admin/groups", { replace: true });
    } catch (e: unknown) {
      const msg = (e as { message?: string })?.message || "Failed to delete.";
      setStatus(msg);
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
          <input
            value={form?.name || ""}
            onChange={e=>setForm(prev=>({ ...(prev as GroupForm), name: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </Field>
        <Field label="Description">
          <textarea
            value={form?.description || ""}
            onChange={e=>setForm(prev=>({ ...(prev as GroupForm), description: e.target.value }))}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Parent ministry">
            <input
              value={form?.parent || ""}
              onChange={e=>setForm(prev=>({ ...(prev as GroupForm), parent: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </Field>
          <Field label="Campus">
            <input
              value={form?.campus || ""}
              onChange={e=>setForm(prev=>({ ...(prev as GroupForm), campus: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          <Field label="Meeting day">
            <select
              value={form?.meetingDay || ""}
              onChange={e=>setForm(prev=>({ ...(prev as GroupForm), meetingDay: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70"
            >
              <option value="">—</option>
              {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(d=>(
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </Field>
          <Field label="Meeting time">
            <input
              value={form?.meetingTime || ""}
              onChange={e=>setForm(prev=>({ ...(prev as GroupForm), meetingTime: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="e.g., 7:00pm"
            />
          </Field>
          <Field label="Meeting frequency">
            <select
              value={form?.meetingFrequency || ""}
              onChange={e=>setForm(prev=>({ ...(prev as GroupForm), meetingFrequency: e.target.value as GroupForm['meetingFrequency'] }))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70"
            >
              <option value="">—</option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi‑weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </Field>
        </div>

        <Field label="Image URL">
          <input
            value={form?.imageUrl || ""}
            onChange={e=>setForm(prev=>({ ...(prev as GroupForm), imageUrl: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="https://…"
          />
        </Field>

        <Field label="Google Calendar IDs (comma-separated)">
          <input
            value={form?.calendarIds?.join(", ") || ""}
            onChange={e=>setForm(prev=>({ ...(prev as GroupForm), calendarIds: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) }))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="id1@group.calendar.google.com,id2@group.calendar.google.com"
          />
        </Field>

        {status && <p className="text-sm text-slate-700">{status}</p>}

        <div className="flex gap-3">
          <button
            onClick={save}
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
          <button
            onClick={remove}
            className="px-4 py-2 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200"
          >
            Delete group
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
