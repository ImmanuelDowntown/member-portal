import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const { login, signInWithGoogle } = useAuth();
  const nav = useNavigate();
  const loc = useLocation() as any;
  const next = (loc.state && loc.state.from && loc.state.from.pathname) ? loc.state.from.pathname : "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      nav(next, { replace: true });
    } catch (err: any) {
      setError(err?.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      nav(next, { replace: true });
    } catch (err: any) {
      setError(err?.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-2 text-center">Welcome!</h1>
        <p className="mb-6 text-center text-text2">
          Sign in to access your dashboard, groups, and resources.
        </p>

        {error && <div className="text-red-400 text-sm mb-3 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input w-full" required autoComplete="email"/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input w-full" required autoComplete="current-password"/>
          <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button>
        </form>

        <div className="mt-3">
          <button onClick={handleGoogle} className="btn btn-outline w-full" disabled={loading}>
            {loading ? "Please wait…" : "Sign in with Google"}
          </button>
          <div className="mt-3 text-center">
            <Link to="/forgot" className="text-sm underline text-text2">Forgot your password?</Link>
          </div>
        </div>

        <p className="mt-4 text-xs text-center text-text2">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">Terms</a> and{" "}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
