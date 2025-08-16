import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

function Spinner({ label = "Checking access…" }: { label?: string }) {
  return <div className="max-w-xl mx-auto p-6 text-slate-700">{label}</div>;
}

export default function GroupAdminRoute({ children }: { children: React.ReactNode }) {
  const { slug } = useParams();
  const groupId = slug as string;
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [authReady, setAuthReady] = React.useState(false);
  const [allowed, setAllowed] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setAuthReady(true);
      if (!user || !groupId) {
        setAllowed(false);
        return;
      }
      try {
        // super admin?
        const superSnap = await getDoc(doc(db, "admins", user.uid));
        if (superSnap.exists()) {
          setAllowed(true);
          return;
        }
        // group admin?
        const gaSnap = await getDoc(doc(db, `groups/${groupId}/groupAdmins/${user.uid}`));
        setAllowed(gaSnap.exists());
      } catch {
        setAllowed(false);
      }
    });
    return () => unsub();
  }, [auth, db, groupId]);

  if (!authReady || allowed === null) return <Spinner />;
  if (!allowed) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}
