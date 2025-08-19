import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ensurePushTokenForUser, listenForegroundMessages } from "@/lib/messaging";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/lib/firebase";

type PushPreview = { title?: string; body?: string } | null;

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [profile, setProfile] = useState<any>(null);
  const [lastPush, setLastPush] = useState<PushPreview>(null);

  // Load user profile
  useEffect(() => {
    if (!user) return;
    const ref = doc(db, "users", user.uid);
    const unsub = onSnapshot(
      ref,
      (snap) => setProfile(snap.data()),
      (err) => console.warn("Profile onSnapshot error:", err)
    );
    return () => unsub();
  }, [user]);

  // Foreground push listener
  useEffect(() => {
    if (!user) return;
    let unsub: (() => void) | null = null;
    let cancelled = false;

    (async () => {
      try {
        const stop = await listenForegroundMessages((payload) => {
          console.log("[push] Foreground message:", payload);
          const data = (payload?.data as any) || {};
          setLastPush({ title: data.title || "Notification", body: data.body || "" });
          // Auto-hide after 6s
          setTimeout(() => setLastPush(null), 6000);
        });
        if (!cancelled) {
          unsub = typeof stop === "function" ? stop : null;
        } else if (typeof stop === "function") {
          stop();
        }
      } catch (e) {
        console.warn("listenForegroundMessages failed:", e);
      }
    })();

    return () => {
      cancelled = true;
      if (typeof unsub === "function") {
        try {
          unsub();
        } catch {
          // no-op
        }
      }
    };
  }, [user]);

  const region = "us-central1"; // ensure we call the same region we deploy to

  const handleEnableNotifications = async () => {
    try {
      const u = auth.currentUser;
      if (!u) return;
      const token = await ensurePushTokenForUser(u.uid);
      alert(
        token
          ? "Notifications enabled on this device."
          : "Notifications not enabled (permission denied or unsupported)."
      );
    } catch (e) {
      console.error("Notification setup failed", e);
      alert("Could not enable notifications.");
    }
  };

  const handleSendTestPush = async () => {
    try {
      const fn = httpsCallable(getFunctions(app, region), "sendTestPush");
      const res: any = await fn({
        title: "Hello!",
        body: "This is a test push.",
        url: "/dashboard",
      });
      console.log("sendTestPush:", res.data);
      alert("Test push sent! Check your notifications.");
    } catch (e) {
      console.error("sendTestPush failed", e);
      alert("sendTestPush failed. See console for details.");
    }
  };

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card p-6">
        <h1 className="text-xl font-semibold text-accent mb-4">Profile</h1>

        {user && (
          <div className="mb-4 text-sm text-text">
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">UID:</span> {user.uid}
            </p>
          </div>
        )}

        {profile && (
          <div className="mb-6 text-sm text-text2">
            {profile.displayName && (
              <p>
                <span className="font-medium text-text">Display Name:</span>{" "}
                {profile.displayName}
              </p>
            )}
          </div>
        )}

        {/* Foreground push toast (debug) */}
        {lastPush && (
          <div className="mb-4 rounded-lg border border-border bg-card p-3">
            <div className="text-sm font-semibold text-accent">{lastPush.title}</div>
            <div className="text-sm text-text2">{lastPush.body}</div>
          </div>
        )}

        {/* Notifications */}
        <section className="mt-2 rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold text-accent">Notifications</h2>
          <p className="text-sm text-text2 mt-1">
            Enable push notifications on this device to get updates.
          </p>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={handleEnableNotifications}
              className="rounded-lg px-4 py-2 text-white text-sm"
              style={{ backgroundColor: "#919FAA" }}
            >
              Enable notifications on this device
            </button>
            <button
              type="button"
              onClick={handleSendTestPush}
              className="rounded-lg px-4 py-2 text-white text-sm"
              style={{ backgroundColor: "#919FAA" }}
            >
              Send test push
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
