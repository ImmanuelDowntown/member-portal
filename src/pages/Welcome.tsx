import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/firebase";
import Loader from "@/components/Loader";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function Welcome() {
  const nav = useNavigate();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { loading, profile, uid } = useUserProfile();
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [campus, setCampus] = useState(""); 
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName || "");
      setPhone(profile.phone || "");
      setCampus(profile.campus || "");
    }
  }, [profile]);

  if (!uid) return <div className="max-w-xl mx-auto p-6"><p className="text-slate-700">Please sign in to continue.</p></div>;
  if (loading) return <div className="max-w-xl mx-auto p-6"><Loader label="Loading…" /></div>;

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const trimmed = displayName.trim();
      if (trimmed.length < 2) {
        setError("Please enter your name.");
        setSaving(false);
        return;
      }

      // Narrow UID inside the function to satisfy TypeScript
      const currentUid = auth.currentUser?.uid;
      if (!currentUid) {
        setError("You are not signed in.");
        setSaving(false);
        return;
      }

      await setDoc(doc(db, "users", currentUid), {
        displayName: trimmed,
        phone: phone.trim() || null,
        campus: campus || null,
        updatedAt: serverTimestamp(),
        onboardedAt: serverTimestamp(),
      }, { merge: true });

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: trimmed });
      }
      nav("/dashboard", { replace: true });
    } catch (e: any) {
      setError(e?.message || "Failed to save profile.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Welcome! Let’s set up your profile.</h1>
      <p className="text-slate-600 mt-1">You’ll only do this once.</p>

      <div className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-white/70 p-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Your name</label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="e.g., Jordan Smith"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

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
            <option value="">Select a campus (optional)</option>
            <option value="downtown">Downtown</option>
          </select>
        </div>

        {error && <p className="text-sm text-rose-700">{error}</p>}

        <button
          onClick={save}
          disabled={saving}
          className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save and continue"}
        </button>
      </div>
    </div>
  );
}
