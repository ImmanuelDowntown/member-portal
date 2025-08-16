import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

export type UserProfile = {
  displayName?: string;
  phone?: string;
  campus?: string;
  photoURL?: string;
  onboardedAt?: any;
  createdAt?: any;
  updatedAt?: any;
  [k: string]: any;
};

export function useUserProfile() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const uid = auth.currentUser?.uid;

  useEffect(() => {
    let active = true;
    async function load() {
      if (!uid) { setProfile(null); setLoading(false); return; }
      setLoading(true);
      try {
        const ref = doc(db, "users", uid);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          // seed a minimal profile
          await setDoc(ref, {
            createdAt: serverTimestamp(),
          }, { merge: true });
          const snap2 = await getDoc(ref);
          if (!active) return;
          setProfile((snap2.data() as any) || {});
        } else {
          if (!active) return;
          setProfile((snap.data() as any) || {});
        }
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [db, uid]);

  return { loading, profile, uid };
}

export function isProfileComplete(p: UserProfile | null) {
  if (!p) return false;
  // Require at least displayName; expand later if needed
  return !!(p.displayName && String(p.displayName).trim().length > 1);
}
