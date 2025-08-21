// src/components/DMDock.tsx
import React from "react";
import {
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
  addDoc,
  setDoc,
  type DocumentData,
  type Unsubscribe,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";

type Thread = {
  id: string;                // pairId
  users: string[];           // [uidA, uidB]
  lastText?: string;
  lastAt?: unknown;
  otherUid: string;
  otherName?: string;
};

type ChatMsg = {
  id: string;
  text: string;
  from: string;
  to: string;
  displayName?: string;
  createdAt?: unknown;
};

type Member = {
  uid: string;
  displayName?: string;
  email?: string;
};

type MyGroup = { id: string; name?: string };

function pairIdFor(a: string, b: string) {
  return [a, b].sort().join("_");
}

export default function DMDock() {
  const db = React.useMemo(() => getFirestore(app), []);
  const auth = React.useMemo(() => getAuth(app), []);

  // Auth + role
  const [me, setMe] = React.useState<string | null>(auth.currentUser?.uid ?? null);
  const [meApproved, setMeApproved] = React.useState<boolean>(false);
  const [isSuper, setIsSuper] = React.useState<boolean>(false);
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setMe(u?.uid ?? null);
      if (u?.uid) {
        try {
          const s = await getDoc(doc(db, "users", u.uid));
          setMeApproved(Boolean(s.data()?.isCommunityApproved));
        } catch {
          setMeApproved(false);
        }
        try {
          const admin = await getDoc(doc(db, "admins", u.uid));
          setIsSuper(admin.exists());
        } catch {
          setIsSuper(false);
        }
      } else {
        setMeApproved(false);
        setIsSuper(false);
      }
    });
    return () => unsub();
  }, [auth, db]);

  // UI state
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState<"list" | "chat" | "compose">("list");

  const [threads, setThreads] = React.useState<Thread[]>([]);
  const [active, setActive] = React.useState<Thread | null>(null);
  const [msgs, setMsgs] = React.useState<ChatMsg[]>([]);
  const [text, setText] = React.useState("");
  const unsubRef = React.useRef<Unsubscribe | null>(null);

  // Compose state (no group picker; we aggregate members across all my groups)
  const [myGroups, setMyGroups] = React.useState<MyGroup[]>([]);
  const [allMembers, setAllMembers] = React.useState<Member[]>([]);
  const [sel, setSel] = React.useState<Record<string, boolean>>({});
  const [composeText, setComposeText] = React.useState("");
  const [composeBusy, setComposeBusy] = React.useState(false);
  const [filter, setFilter] = React.useState("");

  // Resolve other user's display name cache
  const nameCache = React.useRef<Record<string, string>>({});
  async function resolveName(uid: string, pairId?: string) {
    if (nameCache.current[uid]) return nameCache.current[uid];
    try {
      // Try users collection
      let snap = await getDoc(doc(db, "users", uid));
      let nm = (snap.data()?.displayName as string) || (snap.data()?.name as string);
      if (!nm) {
        // Fallback to admins collection
        snap = await getDoc(doc(db, "admins", uid));
        nm = (snap.data()?.displayName as string) || (snap.data()?.name as string);
      }
      if (nm) {
        nameCache.current[uid] = nm;
        if (pairId) {
          // Persist into dmThreads for faster next-time lookups
          try {
            await setDoc(doc(db, `dmThreads/${pairId}`), { [`userNames.${uid}`]: nm }, { merge: true });
          } catch {}
        }
        return nm;
      }
      return uid; // fallback (do not cache so we can retry later)
    } catch {
      return uid;
    }
  }

  // Backfill helper: derive missing thread metadata from GLOBAL messages I participated in
  async function backfillThreadsFromMessages(currentUid: string) {
    try {
      const qFrom = query(collectionGroup(db, "messages"), where("from", "==", currentUid));
      const qTo = query(collectionGroup(db, "messages"), where("to", "==", currentUid));
      const [fromSnap, toSnap] = await Promise.all([getDocs(qFrom), getDocs(qTo)]);
      const all = [...fromSnap.docs, ...toSnap.docs];
      const ops: Array<Promise<unknown>> = [];
      for (const d of all) {
        const parts = d.ref.path.split("/"); // dmMessages/{pairId}/messages/{id} OR groups/... (legacy)
        if (parts.length < 4) continue;
        if (parts[0] !== "dmMessages") continue; // only global DMs
        const pairId = parts[1];
        const data = d.data() as DocumentData;
        const otherUid = (data.from === currentUid ? data.to : data.from) as string;
        if (!otherUid) continue;
        const users = [currentUid, otherUid].sort();
        const metaRef = doc(db, `dmThreads/${pairId}`);
        const meta: Record<string, unknown> = {
          users,
          lastText: (data.text as string) || "",
          lastAt: data.createdAt || serverTimestamp(),
          lastSender: (data.from as string) || currentUid,
        };
        ops.push(setDoc(metaRef, meta, { merge: true }));
      }
      await Promise.allSettled(ops);
    } catch {
      // ignore
    }
  }

  // Load my groups + aggregate members for compose (recipients)
  React.useEffect(() => {
    (async () => {
      if (!me) return;
      try {
        const ms = await getDocs(collection(db, `users/${me}/memberships`));
        const list: MyGroup[] = [];
        for (const d of ms.docs) {
          const gid = d.id;
          list.push({ id: gid });
        }
        setMyGroups(list);

        const seen: Record<string, boolean> = {};
        const members: Member[] = [];
        for (const g of list) {
          try {
            const mSnap = await getDocs(collection(db, `groups/${g.id}/members`));
            for (const m of mSnap.docs) {
              if (m.id === me || seen[m.id]) continue;
              seen[m.id] = true;
              // Prefer member doc fields (tend to be readable)
              const mdata = m.data() as DocumentData;
              let displayName: string | undefined = (mdata?.displayName as string) || (mdata?.name as string) || undefined;
              let email: string | undefined = (mdata?.email as string) || undefined;
              if (!displayName || !email) {
                try {
                  const u = await getDoc(doc(db, "users", m.id));
                  const data = u.data() as DocumentData | undefined;
                  displayName = displayName || (data?.displayName as string) || (data?.name as string) || undefined;
                  email = email || (data?.email as string) || undefined;
                } catch {}
              }
              members.push({ uid: m.id, displayName, email });
            }
          } catch {}
        }
        setAllMembers(members);
      } catch {
        setMyGroups([]);
        setAllMembers([]);
      }
    })();
  }, [db, me]);

  // Listen for my DM threads from GLOBAL collection (requires approval)
  React.useEffect(() => {
    if (!me || !meApproved) return;
    let unsub: Unsubscribe | null = null;
    let cancelled = false;
    (async () => {
      try {
        try {
          const baseQ = query(collection(db, "dmThreads"), where("users", "array-contains", me));
          // Try with ordering first; if index missing, fallback without and sort client-side
          const qOrdered = query(baseQ, orderBy("lastAt", "desc"));
          unsub = onSnapshot(qOrdered, (snap) => {
            const rows: Thread[] = [];
            snap.docs.forEach((d) => {
              const data = d.data() as DocumentData;
              const users = (data?.users as string[]) || [];
              const otherUid = users.find((u) => u !== me) || "";
              rows.push({
                id: d.id,
                users,
                lastText: (data?.lastText as string) || "",
                lastAt: data?.lastAt,
                otherUid,
                otherName: (data?.userNames?.[otherUid] as string) || nameCache.current[otherUid],
              });
            });
            if (!cancelled) setThreads(rows);
            if (rows.length === 0) { void backfillThreadsFromMessages(me); }
            rows.forEach((r) => {
              if (r.otherUid && !r.otherName) {
                resolveName(r.otherUid, r.id)
                  .then((nm) => {
                    if (cancelled) return;
                    setThreads((prev) =>
                      prev.map((p) => (p.id === r.id ? { ...p, otherName: nm } : p))
                    );
                  })
                  .catch(() => {});
              }
            });
          }, (err) => {
            if (err && err.code === "failed-precondition") {
              // reattach without orderBy
              const q2 = baseQ;
              unsub = onSnapshot(q2, (snap2) => {
                const rows2: Thread[] = [];
                snap2.docs.forEach((d) => {
                  const data = d.data() as DocumentData;
                  const users = (data?.users as string[]) || [];
                  const otherUid = users.find((u) => u !== me) || "";
                  rows2.push({
                    id: d.id,
                    users,
                    lastText: (data?.lastText as string) || "",
                    lastAt: data?.lastAt,
                    otherUid,
                    otherName: (data?.userNames?.[otherUid] as string) || nameCache.current[otherUid],
                  });
                });
                rows2.sort((a, b) => {
                  const aa = (a.lastAt as any)?.toMillis ? (a.lastAt as any).toMillis() : 0;
                  const bb = (b.lastAt as any)?.toMillis ? (b.lastAt as any).toMillis() : 0;
                  return bb - aa;
                });
                if (!cancelled) setThreads(rows2);
                if (rows2.length === 0) { void backfillThreadsFromMessages(me); }
                rows2.forEach((r) => {
                  if (r.otherUid && !r.otherName) {
                    resolveName(r.otherUid, r.id)
                      .then((nm) => {
                        if (cancelled) return;
                        setThreads((prev) =>
                          prev.map((p) => (p.id === r.id ? { ...p, otherName: nm } : p))
                        );
                      })
                      .catch(() => {});
                  }
                });
              });
            } else if (err) {
              // eslint-disable-next-line no-console
              console.warn("DM thread listener error:", err);
            }
          });
        } catch {
          // eslint-disable-next-line no-console
          console.warn("DM thread listener attach failed");
        }
      } catch {}
    })();
    return () => {
      if (unsub) unsub();
    };
  }, [db, me, meApproved]);

  // Load messages for active thread (GLOBAL path)
  React.useEffect(() => {
    if (!active || !me) {
      if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; }
      setMsgs([]);
      return;
    }
    if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; }
    const colRef = collection(db, `dmMessages/${active.id}/messages`);
    const q = query(colRef, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const rows: ChatMsg[] = snap.docs.map((d) => {
        const data = d.data() as DocumentData;
        return {
          id: d.id,
          text: (data?.text as string) || "",
          from: (data?.from as string) || "",
          to: (data?.to as string) || "",
          displayName: (data?.displayName as string) || "",
          createdAt: data?.createdAt,
        };
      });
      setMsgs(rows);
      rows.forEach((r) => {
        if (!r.displayName) {
          resolveName(r.from, active.id).then((nm) => {
            setMsgs((prev) => prev.map((m) => (m.id === r.id ? { ...m, displayName: nm } : m)));
          });
        }
      });
    });
    unsubRef.current = unsub;
    return () => { if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; } };
  }, [db, active?.id, me]);

  // Ensure thread for a target uid (GLOBAL thread id)
  async function ensureThreadFor(targetUid: string): Promise<{ pid: string }> {
    if (!me) throw new Error("No user");
    // Prefer an existing thread in memory
    const existing = threads.find((t) => t.otherUid === targetUid);
    if (existing) return { pid: existing.id };
    // Otherwise derive deterministic pairId
    return { pid: pairIdFor(me, targetUid) };
  }

  async function send() {
    if (!active || !me) return;
    const txt = text.trim();
    if (!txt) return;
    const toUid = active.otherUid;
    try {
      const myName = (auth.currentUser?.displayName as string) || (await resolveName(me, active.id)) || "Member";
      const otherName = active.otherName || (await resolveName(toUid, active.id));
      // write message
      const col = collection(db, `dmMessages/${active.id}/messages`);
      await addDoc(col, {
        text: txt,
        from: me,
        to: toUid,
        displayName: myName,
        createdAt: serverTimestamp(),
      });
      // upsert thread meta with name map
      const meta: Record<string, unknown> = {
        users: [me, toUid].sort(),
        lastText: txt,
        lastAt: serverTimestamp(),
        lastSender: me,
      };
      meta[`userNames.${me}`] = myName;
      meta[`userNames.${toUid}`] = otherName;
      await setDoc(doc(db, `dmThreads/${active.id}`), meta, { merge: true });
      setText("");
    } catch {
      // eslint-disable-next-line no-alert
      alert("Could not send message.");
    }
  }

  async function sendCompose() {
    if (!me) return;
    const targets = Object.entries(sel).filter(([, v]) => v).map(([k]) => k);
    const body = composeText.trim();
    if (targets.length === 0 || !body) return;
    setComposeBusy(true);
    try {
      for (const toUid of targets) {
        const { pid } = await ensureThreadFor(toUid);
        const myName = (auth.currentUser?.displayName as string) || (await resolveName(me, pid)) || "Member";
        const known = allMembers.find((m) => m.uid === toUid)?.displayName;
        const otherName = known || (await resolveName(toUid, pid));
        await addDoc(collection(db, `dmMessages/${pid}/messages`), {
          text: body,
          from: me,
          to: toUid,
          displayName: myName,
          createdAt: serverTimestamp(),
        });
        const meta: Record<string, unknown> = {
          users: [me, toUid].sort(),
          lastText: body,
          lastAt: serverTimestamp(),
          lastSender: me,
        };
        meta[`userNames.${me}`] = myName;
        meta[`userNames.${toUid}`] = otherName;
        await setDoc(doc(db, `dmThreads/${pid}`), meta, { merge: true });
      }
      setComposeText("");
      setSel({});
      setView("list");
    } catch {
      // eslint-disable-next-line no-alert
      alert("Failed to send message(s).");
    } finally {
      setComposeBusy(false);
    }
  }

  async function deleteMessage(msgId: string) {
    if (!active || !me) return;
    // Allow delete if I am the sender OR I am super admin
    const msg = msgs.find((m) => m.id === msgId);
    if (!msg) return;
    if (!(msg.from === me || isSuper)) return;
    try {
      await deleteDoc(doc(db, `dmMessages/${active.id}/messages/${msgId}`));
    } catch {
      // eslint-disable-next-line no-alert
      alert("Failed to delete message (check rules).");
    }
  }

  if (!me || !meApproved) return null;

  const filteredMembers = allMembers.filter((m) => {
    const needle = filter.trim().toLowerCase();
    if (!needle) return true;
    const name = (m.displayName || "").toLowerCase();
    const email = (m.email || "").toLowerCase();
    return name.includes(needle) || email.includes(needle);
  });

  // ---------- UI ----------
  return (
    <>
      {/* Floating toggle pill: visible on desktop always; on mobile only when dock is closed */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); if (!open) setView("list"); }}
        className={`fixed bottom-4 right-4 z-[1100] shadow-lg rounded-full px-4 py-2 text-white text-sm md:text-[13px] ${open ? "hidden md:inline-flex" : "inline-flex"}`}
        style={{ backgroundColor: "#919FAA" }}
        aria-label={open ? "Close direct messages" : "Open direct messages"}
      >
        {open ? "Close DMs" : "Open DMs"}
      </button>

      {/* Dock */}
      {open && (
        <div
          className="fixed z-[1000] bottom-0 inset-x-0 w-full h-[85vh] rounded-t-2xl
                     md:bottom-16 md:left-1/2 md:inset-x-auto md:w-full md:max-w-[780px] md:max-h-[480px] md:rounded-xl md:-translate-x-1/2 md:transform
                     border border-slate-800 bg-slate-900 text-white shadow-xl overflow-hidden
                     flex md:flex-row flex-col"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Mobile header with Close and New/Back */}
          <div className="md:hidden flex items-center justify-between px-3 py-2 border-b border-slate-800">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs rounded-md border border-slate-700 px-2 py-1"
              aria-label="Close direct messages"
            >
              Close
            </button>
            <div className="text-sm font-semibold">Direct Messages</div>
            {view !== "compose" ? (
              <button
                type="button"
                onClick={() => setView("compose")}
                className="text-xs rounded-md border border-slate-700 px-2 py-1"
                aria-label="New message"
              >
                New
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setView("list")}
                className="text-xs rounded-md border border-slate-700 px-2 py-1"
                aria-label="Back to conversations"
              >
                Back
              </button>
            )}
          </div>

          {/* Left: Threads list (hidden on mobile while composing/chatting) */}
          {view === "list" && (
            <div className="md:w-64 md:border-r md:border-slate-800 h-[40vh] md:h-full overflow-auto">
              <div className="hidden md:flex px-3 py-2 text-sm font-semibold items-center justify-between">
                <span>Conversations</span>
                <button
                  type="button"
                  onClick={() => setView("compose")}
                  className="text-xs rounded-md border border-slate-700 px-2 py-1 hover:bg-slate-800"
                  title="New message"
                >
                  New
                </button>
              </div>
              {threads.length === 0 ? (
                <div className="px-3 py-2 text-sm text-slate-300">No conversations yet.</div>
              ) : (
                <ul>
                  {threads.map((t) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => { setActive(t); setView("chat"); }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-800 ${active && active.id === t.id ? "bg-slate-800" : ""}`}
                      >
                        <div className="font-medium truncate">{t.otherName || t.otherUid}</div>
                        <div className="text-xs text-slate-300 truncate">{t.lastText || "…"}</div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Right: Panel */}
          <div className="flex-1 h-full flex flex-col">
            {view === "chat" && active && (
              <>
                <div className="px-3 py-2 border-b border-slate-800 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className="text-xs rounded-md border border-slate-700 px-2 py-1 hover:bg-slate-800 md:hidden"
                  >
                    ← Back
                  </button>
                  <div className="text-sm font-semibold truncate">{active.otherName || active.otherUid}</div>
                </div>

                <div className="flex-1 overflow-auto p-3 space-y-2">
                  {msgs.map((m) => {
                    const mine = m.from === me;
                    return (
                      <div
                        key={m.id}
                        className={`max-w-[85%] md:max-w-[80%] rounded-lg px-3 py-2 text-sm relative ${mine ? "ml-auto border border-slate-700" : "bg-slate-800"}`}
                      >
                        <div className="text-xs opacity-70 mb-0.5">{m.displayName || m.from}</div>
                        <div>{m.text}</div>
                        {(mine || isSuper) && (
                          <button
                            type="button"
                            onClick={() => void deleteMessage(m.id)}
                            className="absolute -top-2 -right-2 text-[10px] rounded-full border border-slate-700 bg-slate-900 px-1.5 py-0.5 hover:bg-slate-800"
                            title="Delete message"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    );
                  })}
                  {msgs.length === 0 && <div className="text-sm text-slate-300">No messages in this conversation yet.</div>}
                </div>

                <div className="border-t border-slate-800 p-2 flex gap-2">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write a message…"
                    className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm outline-none text-white placeholder:text-slate-400 h-10 md:h-auto md:min-h-[40px] max-h-28"
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void send(); } }}
                  />
                  <button
                    type="button"
                    onClick={() => void send()}
                    className="rounded-lg px-3 py-2 text-white text-sm hover:opacity-90"
                    style={{ backgroundColor: "#919FAA" }}
                    disabled={!text.trim()}
                  >
                    Send
                  </button>
                </div>
              </>
            )}

            {view === "compose" && (
              <>
                <div className="px-3 py-2 border-b border-slate-800 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className="text-xs rounded-md border border-slate-700 px-2 py-1 hover:bg-slate-800"
                  >
                    ← Back
                  </button>
                  <div className="text-sm font-semibold">New message</div>
                </div>

                <div className="flex-1 p-3 grid grid-cols-1 md:grid-cols-5 gap-3 overflow-auto">
                  <div className="md:col-span-2">
                    <label className="text-xs text-slate-300">Recipients</label>
                    <input
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      placeholder="Search by name or email…"
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-2 py-1.5 text-sm outline-none"
                    />
                    <div className="mt-2 h-56 md:h-48 overflow-auto rounded-lg border border-slate-700">
                      {filteredMembers.length === 0 ? (
                        <div className="px-2 py-2 text-xs text-slate-400">No matching users.</div>
                      ) : (
                        <ul className="p-2 space-y-1">
                          {filteredMembers.map((m) => (
                            <li key={m.uid} className="flex items-center gap-2">
                              <input
                                id={`sel-${m.uid}`}
                                type="checkbox"
                                className="h-4 w-4 accent-[#919FAA]"
                                checked={!!sel[m.uid]}
                                onChange={(e) => setSel((prev) => ({ ...prev, [m.uid]: e.target.checked }))}
                              />
                              <label htmlFor={`sel-${m.uid}`} className="text-sm truncate">
                                {m.displayName || "(unknown user)"}{m.email ? ` • ${m.email}` : ""}
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-col">
                    <label className="text-xs text-slate-300">Message</label>
                    <textarea
                      value={composeText}
                      onChange={(e) => setComposeText(e.target.value)}
                      placeholder="Write your message…"
                      className="mt-1 flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm outline-none h-40 md:h-auto"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-800 p-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => void sendCompose()}
                    disabled={composeBusy || !composeText.trim() || !Object.values(sel).some(Boolean)}
                    className="rounded-lg px-3 py-2 text-white text-sm hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#919FAA" }}
                  >
                    {composeBusy ? "Sending…" : "Send"}
                  </button>
                </div>
              </>
            )}

            {view === "list" && !active && (
              <div className="hidden md:grid place-items-center flex-1 text-sm text-slate-300">
                Select a conversation or click <b className="mx-1">New</b> to start one.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
