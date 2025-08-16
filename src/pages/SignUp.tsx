import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { app } from "@/lib/firebase";

function splitName(full: string) {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export default function SignUp() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // If user is already signed in and navigates to /signup, send them to the app
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) navigate("/dashboard", { replace: true });
    });
    return unsub;
  }, [auth, navigate]);

  async function handleEmailSignUp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const fn = firstName.trim();
    const ln = lastName.trim();
    if (!fn) { setError("Please enter your first name."); return; }
    if (!email || !password) { setError("Please enter an email and password."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }

    const fullName = (fn + " " + ln).trim();
    setBusy(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (cred.user) {
        await updateProfile(cred.user, { displayName: fullName });
      }
      try {
        localStorage.setItem("signupName", fullName);
        localStorage.setItem("signupFirstName", fn);
        localStorage.setItem("signupLastName", ln);
      } catch {}
      navigate("/welcome", { replace: true, state: { name: fullName, firstName: fn, lastName: ln } });
    } catch (err: any) {
      const code = String(err?.code || "");
      let msg = "Could not create account.";
      if (code === "auth/email-already-in-use") msg = "That email is already in use.";
      else if (code === "auth/invalid-email") msg = "Please enter a valid email address.";
      else if (code === "auth/weak-password") msg = "Password should be at least 6 characters.";
      setError(msg);
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setBusy(true);
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      const providerName = cred.user?.displayName || "";
      const { firstName: pf, lastName: pl } = splitName(providerName);
      try {
        if (providerName) {
          localStorage.setItem("signupName", providerName);
          localStorage.setItem("signupFirstName", pf);
          localStorage.setItem("signupLastName", pl);
        }
      } catch {}
      navigate("/welcome", { replace: true, state: { name: providerName, firstName: pf, lastName: pl } });
    } catch (err: any) {
      setError("Google sign-in was cancelled or failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow">
        <h1 className="text-2xl font-semibold text-accent mb-1">Create your account</h1>
        <p className="text-sm text-text2 mb-6">Join Immanuel Downtown to access your dashboard and groups.</p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailSignUp} className="grid gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="grid gap-1">
              <span className="text-sm">First name</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jordan"
                autoComplete="given-name"
                required
                className="rounded-lg border border-border bg-background px-3 py-2 outline-none"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Last name</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Smith"
                autoComplete="family-name"
                className="rounded-lg border border-border bg-background px-3 py-2 outline-none"
              />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="rounded-lg border border-border bg-background px-3 py-2 outline-none"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Password</span>
            <div className="flex gap-2">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                required
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="rounded-lg border border-border px-3 py-2 text-sm"
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Confirm password</span>
            <input
              type={showPw ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              required
              className="rounded-lg border border-border bg-background px-3 py-2 outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="mt-2 rounded-lg bg-accent px-4 py-2 text-white hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Creating…" : "Create account"}
          </button>
        </form>

        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogle}
            disabled={busy}
            className="w-full rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted disabled:opacity-60"
          >
            Continue with Google
          </button>
        </div>

        <div className="mt-4 text-sm text-text2">
          Already have an account?{" "}
          <Link to="/login" className="text-accent underline underline-offset-2">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
