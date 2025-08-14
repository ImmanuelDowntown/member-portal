import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err: any) {
      setError(err?.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-2 text-center">Forgot password</h1>
        <p className="mb-6 text-center text-text2">
          Enter your account email and we’ll send you a reset link.
        </p>

        {sent ? (
          <div className="border border-border p-4 text-center">
            <p className="text-accent">Check your email</p>
            <p className="text-text2 text-sm mt-1">
              If an account exists for <span className="text-text">{email}</span>, you’ll receive a password reset link shortly.
            </p>
            <Link to="/login" className="btn btn-outline mt-4 w-full">Back to sign in</Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <button className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Sending…" : "Send reset link"}
            </button>
            <div className="text-center">
              <Link to="/login" className="text-sm underline text-text2">Back to sign in</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
