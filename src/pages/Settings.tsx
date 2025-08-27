import React from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

export default function Settings() {
  const auth = React.useMemo(() => getAuth(app), []);
  const db = React.useMemo(() => getFirestore(app), []);

  const [calendarIds, setCalendarIds] = React.useState("");
  const [isSuperAdmin, setIsSuperAdmin] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;
    getDoc(doc(db, "admins", uid))
      .then((snap) => setIsSuperAdmin(snap.exists()))
      .catch(() => setIsSuperAdmin(false));
  }, [auth, db]);

  React.useEffect(() => {
    getDoc(doc(db, "appSettings", "general"))
      .then((snap) => {
        if (snap.exists()) {
          const data = snap.data() as { calendarIds?: string[]; calendarId?: string } | undefined;
          if (data?.calendarIds && data.calendarIds.length) {
            setCalendarIds(data.calendarIds.join(", "));
          } else if (data?.calendarId) {
            setCalendarIds(data.calendarId);
          }
        }
      })
      .catch(() => {});
  }, [db]);

  const save = async () => {
    setSaving(true);
    try {
      await setDoc(
        doc(db, "appSettings", "general"),
        (() => {
          const ids = calendarIds
            .split(",")
            .map((id) => id.trim())
            .filter(Boolean);
          return { calendarIds: ids, calendarId: ids[0] || "" };
        })(),
        { merge: true }
      );
    } catch {
      // eslint-disable-next-line no-alert
      alert("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold text-accent">Settings</h1>
      <p className="text-text2 mt-2">Preferences and app settings.</p>

      {isSuperAdmin && (
        <div className="mt-8 max-w-lg">
          <label className="block text-sm font-medium text-text">
            Calendar IDs (comma-separated)
            <input
              type="text"
              value={calendarIds}
              onChange={(e) => setCalendarIds(e.target.value)}
              placeholder="id1@group.calendar.google.com, id2@group.calendar.google.com"
              className="mt-1 w-full rounded border border-border p-2"
            />
          </label>
          <button
            onClick={save}
            disabled={saving}
            className="mt-2 px-3 py-1.5 rounded-lg bg-accent text-white hover:bg-accent/90 disabled:opacity-50"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

