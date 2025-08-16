import React, { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";
import { useUserProfile, UserProfile } from "@/hooks/useUserProfile";

export default function Profile() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { loading, profile, uid } = useUserProfile();

  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [campus, setCampus] = useState("");
  const [bio, setBio] = useState("");
  const [dmOptOut, setDmOptOut] = useState(false);

  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName || "");
      setPhone(profile.phone || "");
      setCampus(profile.campus || "");
      setBio((profile as any).bio || "");
      setDmOptOut(Boolean((profile as any).dmOptOut));
    }
  }, [profile]);

  async function save() {
    if (!uid) return;
    setSaving(true);
    setStatus(null);
    try {
      const trimmed = (displayName || "").trim();
      if (trimmed.length < 2) {
        setStatus("⚠️ Please enter your name.");
        setSaving(false);
        return;
      }
      const payload: Partial<UserProfile> & { dmOptOut: boolean; bio?: string | null } = {
        displayName: trimmed,
        phone: phone.trim() || undefined,
        campus: campus || undefined,
        bio: bio.trim() ? bio.trim() : null,
        dmOptOut: !!dmOptOut,
        updatedAt: serverTimestamp() as any,
      };

      await setDoc(doc(db, "users", uid), payload as any, { merge: true });

      if (auth.currentUser && auth.currentUser.displayName !== trimmed) {
        await updateProfile(auth.currentUser, { displayName: trimmed });
      }

      // refresh local snapshot
      const fresh = await getDoc(doc(db, "users", uid));
      if (fresh.exists()) {
        const data = fresh.data() as any;
        setDmOptOut(Boolean(data.dmOptOut));
      }

      setStatus("✅ Profile saved.");
    } catch (e: any) {
      setStatus("❌ " + (e?.message || "Failed to save."));
    } finally {
      setSaving(false);
    }
  }

  if (!uid) {
    return <div className="max-w-3xl mx-auto p-6"><p className="text-slate-700">Please sign in to view your profile.</p></div>;
  }
  if (loading && !profile) {
    return <div className="max-w-3xl mx-auto p-6"><Loader label="Loading profile…" /></div>;
  }

  const email = auth.currentUser?.email || "";

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Your Profile</h1>
      <p className="text-slate-600 mt-1">Update your info and messaging preferences.</p>

      <div className="mt-4 grid grid-cols-1 gap-4">
        {/* Identity */}
        <section className="rounded-2xl border border-slate-200 bg-white/70 p-4">
          <h2 className="font-medium text-slate-900">Identity</h2>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g., Jordan Smith"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                value={email}
                disabled
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600"
              />
            </div>
          </div>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone (optional)</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Campus (optional)</label>
              <select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm"
              >
                <option value="">Select a campus</option>
                <option value="downtown">Downtown</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-slate-700">About you (optional)</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="A short bio other members can see."
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
        </section>

        {/* Messaging prefs */}
        <section className="rounded-2xl border border-slate-200 bg-white/70 p-4">
          <h2 className="font-medium text-slate-900">Messaging Preferences</h2>
          <div className="mt-2 flex items-start gap-3">
            <input
              id="dmOptOut"
              type="checkbox"
              checked={dmOptOut}
              onChange={(e) => setDmOptOut(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300"
            />
            <label htmlFor="dmOptOut" className="text-sm text-slate-700">
              <span className="font-medium">Opt out of app‑wide direct messages</span>
              <br />
              When enabled, other users cannot start DMs with you outside of groups.
              You can still participate in messages inside your groups.
            </label>
          </div>
        </section>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={save}
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
          {status && <p className="text-sm text-slate-700">{status}</p>}
        </div>
      </div>

      {/* Meta */}
      <div className="mt-6 text-xs text-slate-500">
        <div>Your UID: <code>{uid}</code></div>
      </div>
    </div>
  );
}
