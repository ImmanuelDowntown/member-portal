import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/firebase";
import Loader from "@/components/Loader";
import { useUserProfile, isProfileComplete } from "@/hooks/useUserProfile";

/**
 * Wrap protected routes with OnboardRoute to require profile completion.
 * Users without a complete profile are redirected to /welcome.
 */
export default function OnboardRoute({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);
  const { loading, profile } = useUserProfile();
  const [authReady, setAuthReady] = React.useState(false);
  const user = auth.currentUser;
  const loc = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, () => setAuthReady(true));
    return () => unsub();
  }, [auth]);

  if (!authReady || loading) {
    return <div className="max-w-xl mx-auto p-6"><Loader label="Loading your profile…" /></div>;
  }

  if (!user) return <Navigate to="/login" replace />;

  const complete = isProfileComplete(profile);
  const onWelcome = loc.pathname === "/welcome";

  if (!complete && !onWelcome) {
    return <Navigate to="/welcome" replace />;
  }
  if (complete && onWelcome) {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
}
