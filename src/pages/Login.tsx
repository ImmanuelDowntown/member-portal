import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "@/lib/firebase";

export default function Login() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const [loading, setLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) navigate("/dashboard", { replace: true });
    });
    return unsub;
  }, [auth, navigate]);

  async function handleGoogle() {
    setError(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);

    } catch (e: any) {
      setError("Google sign-in was cancelled or failed.");
      setLoading(false);
    }
  }

  async function handleEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setEmailLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      const code = String(err?.code || "");
      let msg = "Could not sign in with email and password.";
      if (code === "auth/invalid-email") {
        msg = "Please enter a valid email address.";
      } else if (code === "auth/user-not-found" || code === "auth/wrong-password") {
        msg = "Email or password is incorrect.";
      }
      setError(msg);
    } finally {
      setEmailLoading(false);
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow">
        <h1 className="text-2xl font-semibold text-accent mb-1">Welcome back</h1>
        <p className="text-sm text-text2 mb-6">Sign in to continue.</p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Email + password form */}
        <form onSubmit={handleEmailPassword} className="grid gap-3 mb-4">
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="rounded-lg border border-border bg-background px-3 py-2 outline-none"
              required
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
                autoComplete="current-password"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none"
                required
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

          <button
            type="submit"
            disabled={emailLoading}
            className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white disabled:opacity-60"
          >
            {emailLoading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        {/* Google sign-in */}
        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          className="btn btn-outline w-full"
        >
          {loading ? "Please wait…" : "Sign in with Google"}
        </button>

        {/* Create account button below Google */}
        <div className="mt-2">
          <Link to="/signup" className="btn btn-outline w-full">
            Create account
          </Link>
        </div>

        {/* Forgot password link moved down */}
        <div className="mt-6 text-center">
          <Link to="/forgot" className="text-sm text-accent underline underline-offset-2">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
