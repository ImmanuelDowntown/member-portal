import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Redirects a signed-in user to their intended page or /dashboard by default.
 * Place this component at the top of your Login page.
 */
export default function PostLoginRedirect() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    const from =
      (location.state as any)?.from?.pathname ||
      (location.state as any)?.from ||
      "/dashboard";
    navigate(from, { replace: true });
  }, [user, location, navigate]);

  return null;
}
