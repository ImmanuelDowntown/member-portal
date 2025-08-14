import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ResetPassword() {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const oobCode = sp.get("oobCode") || "";
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    async function checkCode() {
      try {
        const em = await verifyPasswordResetCode(auth, oobCode);
        setEmail(em);
      } catch (err: any) {
        setError(err?.message || "Invalid or expired reset link.");
      } finally {
        setLoading(false);
      }
    }
    if (oobCode) checkCode();
    else { setError("Missing reset code."); setLoading(false); }
  }, [oobCode]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await confirmPasswordReset(auth, oobCode, password);
      setDone(true);
      setTimeout(() => nav("/login", { replace: true }), 1200);
    } catch (err: any) {
      setError(err?.message || "Failed to reset password.");
    }
  }

  if (loading) return <div className="container py-20">Checking reset link…</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-2 text-center">Reset password</h1>
        {error && (
          <div className="border border-border p-4 text-center">
            <p className="text-red-400 text-sm">{error}</p>
            <Link to="/forgot" className="btn btn-outline mt-4 w-full">Request a new link</Link>
          </div>
        )}
        {!error && !done && (
          <>
            <p className="mb-6 text-center text-text2">Resetting password for {email}</p>
            <form onSubmit={onSubmit} className="space-y-3">
              <input
                type="password"
                className="input w-full"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <input
                type="password"
                className="input w-full"
                placeholder="Confirm new password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                autoComplete="new-password"
              />
              <button className="btn btn-primary w-full">Set new password</button>
            </form>
          </>
        )}
        {done && (
          <div className="border border-border p-4 text-center">
            <p className="text-accent">Password updated!</p>
            <p className="text-text2 text-sm mt-1">Taking you back to sign in…</p>
          </div>
        )}
      </div>
    </div>
  );
}
