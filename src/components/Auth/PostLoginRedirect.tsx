import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

/**
 * PostLoginRedirect
 * Place this in your Login page. When a user becomes signed-in,
 * it will navigate them to the page they attempted to visit (location.state.from)
 * or to "/dashboard" by default.
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
