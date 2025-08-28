import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  type User,
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collectionGroup,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthCtx = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useMemo(() => getAuth(app), []);
  const db = useMemo(() => getFirestore(app), []);

  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  async function computeAdmin(u: User | null) {
    if (!u) {
      setIsAdmin(false);
      return;
    }
    try {
      const uid = u.uid;
      // Super admin check
      const superSnap = await getDoc(doc(db, "users", uid));
      const isSuper = (superSnap.data() as any)?.isSuperAdmin === true;

      // Group admin check (we rely on presence of { uid } field to query)
      let isGroupAdmin = false;
      try {
        const q = query(collectionGroup(db, "groupAdmins"), where("uid", "==", uid));
        const snap = await getDocs(q);
        isGroupAdmin = !snap.empty;
      } catch {
        // If query fails (e.g., missing composite indexes), keep false.
        isGroupAdmin = false;
      }

      setIsAdmin(isSuper || isGroupAdmin);
    } catch {
      setIsAdmin(false);
    }
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      await computeAdmin(u);
      setLoading(false);
    });
    return () => unsub();
  }, [auth]);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    await computeAdmin(auth.currentUser);
  };

  const signInWithGoogleHandler = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    await computeAdmin(auth.currentUser);
  };

  const logout = async () => {
    await signOut(auth);
    setIsAdmin(false);
  };

  const refresh = async () => {
    await computeAdmin(auth.currentUser);
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      isAdmin,
      login,
      signInWithGoogle: signInWithGoogleHandler,
      logout,
      refresh,
    }),
    [user, loading, isAdmin]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
