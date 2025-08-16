import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";

/**
 * AuthRoute
 * - Waits for Firebase Auth to initialize
 * - If not signed in, redirects to /login
 * - If signed in, renders children
 * (No admin checks here — those belong in AdminRoute)
 */
export default function AuthRoute({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);
  const [authReady, setAuthReady] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(auth.currentUser);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
    });
    return () => unsub();
  }, [auth]);

  if (!authReady) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <Loader label="Checking authentication…" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
