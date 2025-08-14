import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
export default function AuthRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const loc = useLocation();
  if (loading) return <div className="container py-10">Loading…</div>;
  if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
  return children;
}
