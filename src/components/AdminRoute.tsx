import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
export default function AdminRoute({ children }: { children: JSX.Element }) {
  const { user, loading, isAdmin } = useAuth();
  if (loading) return <div className="container py-10">Loading…</div>;
  if (!user || !isAdmin) return <Navigate to="/dashboard" replace />;
  return children;
}
