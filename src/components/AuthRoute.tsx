import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

/**
 * AuthRoute
 * Protects a route; if not signed in, send to /login and remember the target.
 * After login, PostLoginRedirect (on the Login page) will bring them back,
 * defaulting to /dashboard if no prior target exists.
 */
export default function AuthRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="p-6 text-sm text-text2">Loading…</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
