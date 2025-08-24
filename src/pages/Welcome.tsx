import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, updateProfile, type User } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";
import { CAMPUSES } from "@/data/campuses";

function splitName(full: string) {
  // unchanged

  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}


function resolveCampusId(value?: string | null): string {
  if (!value) return "";
  const v = String(value).trim();
  // Try by id
  if (CAMPUSES.some(c => c.id.toLowerCase() === v.toLowerCase())) {
    return CAMPUSES.find(c => c.id.toLowerCase() === v.toLowerCase())!.id;
  }
  // Try by name
  if (CAMPUSES.some(c => c.name.toLowerCase() === v.toLowerCase())) {
    return CAMPUSES.find(c => c.name.toLowerCase() === v.toLowerCase())!.id;
  }
  return "";
}
export default function Welcome() {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { name?: string; firstName?: string; lastName?: string } };
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [ready, setReady] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(auth.currentUser);

  const [name, setName] = React.useState<string>("");
  const [nameLocked, setNameLocked] = React.useState<boolean>(false);
  const [phone, setPhone] = React.useState<string>("");
  const [campus, setCampus] = React.useState<string>("");
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Load auth + profile once
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (!u) {
        setReady(true);
        return;
      }
      let initialName = u.displayName || location.state?.name || "";
      if (!initialName) {
        try {
          const ls = localStorage.getItem("signupName");
          if (ls) initialName = ls;
        } catch {}
      }
      try {
        const snap = await getDoc(doc(db, "users", u.uid));
        const data = snap.exists() ? (snap.data() as any) : null;
        if (!initialName && data?.displayName) initialName = String(data.displayName);
        if (data?.phone) setPhone(String(data.phone));
        if (data?.campus) setCampus(resolveCampusId(String(data.campus)));
      } catch {/* ignore */}

      setName(initialName || "");
      setNameLocked(Boolean(initialName)); // lock if it already exists
      setReady(true);
    });
    return () => unsub();
  }, [auth, db, location.state]);

  async function handleSave() {
    setError(null);
    if (!user) {
      setError("You are not signed in.");
      return;
    }

    const trimmed = name.trim();
    if (!nameLocked && !trimmed) {
      setError("Please enter your name.");
      return;
    }

    const finalDisplayName = nameLocked ? (user?.displayName || name) : trimmed;
    const { firstName, lastName } = splitName(finalDisplayName);

    setSaving(true);
    try {
      // Update Auth displayName only when it's not locked (i.e., newly provided here)
      if (!nameLocked) {
        if (!auth.currentUser) throw new Error("No current user.");
        await updateProfile(auth.currentUser, { displayName: finalDisplayName });
      }

      // Write user profile doc (store first/last + displayName for consistency)
      await setDoc(
        doc(db, "users", user.uid),
        {
          displayName: finalDisplayName,
          firstName,
          lastName,
          phone: phone.trim() || null,
          campus: campus || null,
          campusName: CAMPUSES.find(c => c.id === campus)?.name || null,
          updatedAt: serverTimestamp(),
          onboardedAt: serverTimestamp(),
          reviewed: false,
          needsReview: true,
        },
        { merge: true }
      );

      try {
        localStorage.removeItem("signupName");
        localStorage.removeItem("signupFirstName");
        localStorage.removeItem("signupLastName");
      } catch {}
      navigate("/dashboard", { replace: true });
    } catch (e: any) {
      setError(e?.message || "Could not save your profile.");
    } finally {
      setSaving(false);
    }
  }

  if (!ready) {
    return (
      <div className="container py-8">
        <div className="mx-auto max-w-md">
          <Loader label="Loading your account…" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container py-8">
        <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6">
          <p className="text-sm text-text2">You are not signed in.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow">
        <h1 className="text-2xl font-semibold text-accent mb-2">Welcome!</h1>
        <p className="text-sm text-text2 mb-4">
          Let’s finish setting up your profile.
        </p>

        {/* Name */}
        {nameLocked ? (
          <div className="mb-4">
            <label className="text-sm block text-text2">Name</label>
            <div className="mt-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm">
              {name}
            </div>
            <p className="mt-1 text-xs text-text2">
              Pulled from your sign-up. You can edit this later in Profile.
            </p>
          </div>
        ) : (
          <label className="mb-4 block">
            <span className="text-sm">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Last"
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            />
          </label>
        )}

        {/* Phone */}
        <label className="mb-4 block">
          <span className="text-sm">Phone (optional)</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 555-5555"
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
          />
        </label>

        {/* Campus */}
        <label className="mb-4 block">
          <span className="text-sm">Campus (optional)</span>
          <select
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
          >
            <option value="">Select a campus (optional)</option>
            {CAMPUSES.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>

        {error && <p className="text-sm text-rose-700 mb-2">{error}</p>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save and continue"}
        </button>
      </div>
    </div>
  );
}
