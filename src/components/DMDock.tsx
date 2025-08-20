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
  groupId: string;           // parent group slug
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
  async function resolveName(uid: string) {
    if (nameCache.current[uid]) return nameCache.current[uid];
    try {
      const snap = await getDoc(doc(db, "users", uid));
      const nm = (snap.data()?.displayName as string) || (snap.data()?.name as string) || uid;
      nameCache.current[uid] = nm;
      return nm;
    } catch {
      return uid;
    }
  }

  // Backfill helper: derive missing thread metadata from messages I participated in
  async function backfillThreadsFromMessages(currentUid: string) {
    try {
      const qFrom = query(collectionGroup(db, "messages"), where("from", "==", currentUid));
      const qTo = query(collectionGroup(db, "messages"), where("to", "==", currentUid));
      const [fromSnap, toSnap] = await Promise.all([getDocs(qFrom), getDocs(qTo)]);
      const all = [...fromSnap.docs, ...toSnap.docs];
      const ops: Array<Promise<unknown>> = [];
      for (const d of all) {
        const data = d.data() as DocumentData;
        const parts = d.ref.path.split("/"); // groups/{groupId}/directMessages/{pairId}/messages/{id}
        if (parts.length < 6) continue;
        const groupId = parts[1];
        const pairId = parts[3];
        const otherUid = (data.from === currentUid ? data.to : data.from) as string;
        if (!otherUid) continue;
        const users = [currentUid, otherUid].sort();
        const metaRef = doc(collection(db, `groups/${groupId}/directMessages`), pairId);
        ops.push(setDoc(metaRef, {
          users,
          lastText: (data.text as string) || "",
          lastAt: data.createdAt || serverTimestamp(),
          lastSender: (data.from as string) || currentUid,
        }, { merge: true }));
      }
      await Promise.allSettled(ops);
    } catch {
      // ignore
    }
  }

  // Fallback: listen per-group if collectionGroup query is blocked by rules
  const perGroupUnsubs = React.useRef<Unsubscribe[]>([]);
  function clearPerGroupUnsubs() {
    perGroupUnsubs.current.forEach((u) => { try { u(); } catch {} });
    perGroupUnsubs.current = [];
  }
  function setupPerGroupThreadListeners(currentUid: string, groups: MyGroup[]) {
    clearPerGroupUnsubs();
    const all: Record<string, Thread> = {};
    groups.forEach((g) => {
      try {
        const qref = query(collection(db, `groups/${g.id}/directMessages`), where("users", "array-contains", currentUid));
        const unsub = onSnapshot(qref, (snap) => {
          snap.docs.forEach((d) => {
            const data = d.data() as DocumentData;
            const users = (data?.users as string[]) || [];
            const otherUid = users.find((u) => u !== currentUid) || "";
            const t: Thread = {
              id: d.id,
              groupId: g.id,
              users,
              lastText: (data?.lastText as string) || "",
              lastAt: data?.lastAt,
              otherUid,
              otherName: nameCache.current[otherUid],
            };
            all[`${g.id}__${d.id}`] = t;
          });
          const list = Object.values(all).sort((a, b) => {
            const aa = (a.lastAt as any)?.toMillis ? (a.lastAt as any).toMillis() : 0;
            const bb = (b.lastAt as any)?.toMillis ? (b.lastAt as any).toMillis() : 0;
            return bb - aa;
          });
          setThreads(list);
          list.forEach((r) => {
            if (r.otherUid && !r.otherName) {
              resolveName(r.otherUid).then((nm) => {
                setThreads((prev) => prev.map((p) => (p.id === r.id && p.groupId === r.groupId ? { ...p, otherName: nm } : p)));
              });
            }
          });
        }, (err) => {
          if (err && err.code !== "permission-denied") {
            // eslint-disable-next-line no-console
            console.warn("DM per-group listener error:", err);
          }
        });
        perGroupUnsubs.current.push(unsub);
      } catch {}
    });
  }

  // Load my groups + aggregate members for compose
  React.useEffect(() => {
    (async () => {
      if (!me) return;
      try {
        // Load my group memberships
        const ms = await getDocs(collection(db, `users/${me}/memberships`));
        const list: MyGroup[] = [];
        for (const d of ms.docs) {
          const gid = d.id;
          list.push({ id: gid });
        }
        setMyGroups(list);

        // Load members of each group and aggregate/dedupe (excluding me)
        const seen: Record<string, boolean> = {};
        const members: Member[] = [];
        for (const g of list) {
          try {
            const mSnap = await getDocs(collection(db, `groups/${g.id}/members`));
            for (const m of mSnap.docs) {
              if (m.id === me || seen[m.id]) continue;
              seen[m.id] = true;
              // optional profile enrich
              let displayName: string | undefined;
              let email: string | undefined;
              try {
                const u = await getDoc(doc(db, "users", m.id));
                const data = u.data() as DocumentData | undefined;
                displayName = (data?.displayName as string) || undefined;
                email = (data?.email as string) || undefined;
              } catch {}
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

  // Listen for my DM threads across all groups (requires approval)
  React.useEffect(() => {
    if (!me || !meApproved) return;
    let unsub: Unsubscribe | null = null;
    let cancelled = false;
    (async () => {
      try {
        try {
          const q = query(
            collectionGroup(db, "directMessages"),
            where("users", "array-contains", me),
            orderBy("lastAt", "desc")
          );
          unsub = onSnapshot(q, async (snap) => {
            const rows: Thread[] = [];
            for (const d of snap.docs) {
              const data = d.data() as DocumentData;
              const parts = d.ref.path.split("/");
              const groupId = parts.length >= 2 ? parts[1] : "";
              const users = (data?.users as string[]) || [];
              const otherUid = users.find((u) => u !== me) || "";
              const t: Thread = {
                id: d.id,
                groupId,
                users,
                lastText: (data?.lastText as string) || "",
                lastAt: data?.lastAt,
                otherUid,
                otherName: nameCache.current[otherUid],
              };
              rows.push(t);
            }
            for (const r of rows) {
              if (r.otherUid && !r.otherName) {
                resolveName(r.otherUid).then((nm) => {
                  setThreads((prev) => prev.map((p) => (p.id === r.id ? { ...p, otherName: nm } : p)));
                });
              }
            }
            if (!cancelled) setThreads(rows);
            if (rows.length === 0) { await backfillThreadsFromMessages(me); }
          }, (err) => {
            if (err && (err.code === "permission-denied" || err.code === "failed-precondition")) {
              setupPerGroupThreadListeners(me, myGroups);
            } else {
              // eslint-disable-next-line no-console
              console.warn("DM listener error:", err);
            }
          });
        } catch {
          setupPerGroupThreadListeners(me, myGroups);
        }
      } catch {}
    })();
    return () => {
      if (unsub) unsub();
      clearPerGroupUnsubs();
    };
  }, [db, me, meApproved, myGroups]);

  // Load messages for active thread
  React.useEffect(() => {
    if (!active || !me) {
      if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; }
      setMsgs([]);
      return;
    }
    if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; }
    const colRef = collection(db, `groups/${active.groupId}/directMessages/${active.id}/messages`);
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
    });
    unsubRef.current = unsub;
    return () => { if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; } };
  }, [db, active?.groupId, active?.id, me]);

  // Ensure thread group for a target uid (existing thread, or first group we both share)
  async function ensureThreadFor(targetUid: string): Promise<{ groupId: string; pid: string }> {
    if (!me) throw new Error("No user");
    // Prefer an existing thread
    const existing = threads.find((t) => t.otherUid === targetUid);
    if (existing) return { groupId: existing.groupId, pid: existing.id };
    // Find first shared group where target is a member
    for (const g of myGroups) {
      try {
        const m = await getDoc(doc(db, `groups/${g.id}/members`, targetUid));
        if (m.exists()) return { groupId: g.id, pid: pairIdFor(me, targetUid) };
      } catch {}
    }
    // Fallback to my first group (keeps schema consistent)
    const fallback = myGroups[0]?.id;
    if (!fallback) throw new Error("No group memberships found");
    return { groupId: fallback, pid: pairIdFor(me, targetUid) };
  }

  async function send() {
    if (!active || !me) return;
    const txt = text.trim();
    if (!txt) return;
    const toUid = active.otherUid;
    try {
      const col = collection(db, `groups/${active.groupId}/directMessages/${active.id}/messages`);
      await addDoc(col, {
        text: txt,
        from: me,
        to: toUid,
        displayName: (auth.currentUser?.displayName as string) || "Member",
        createdAt: serverTimestamp(),
      });
      // upsert thread meta
      await setDoc(
        doc(collection(db, `groups/${active.groupId}/directMessages`), active.id),
        { users: [me, toUid].sort(), lastText: txt, lastAt: serverTimestamp(), lastSender: me },
        { merge: true }
      );
      setText("");
    } catch {
      // eslint-disable-next-line no-alert
      alert("Could not send message.");
    }
  }

  async function sendCompose() {
    if (!me) return;
    const targets = Object.entries(sel).filter(([,v]) => v).map(([k]) => k);
    const body = composeText.trim();
    if (targets.length === 0 || !body) return;
    setComposeBusy(true);
    try {
      for (const toUid of targets) {
        const { groupId, pid } = await ensureThreadFor(toUid);
        await addDoc(collection(db, `groups/${groupId}/directMessages/${pid}/messages`), {
          text: body,
          from: me,
          to: toUid,
          displayName: (auth.currentUser?.displayName as string) || "Member",
          createdAt: serverTimestamp(),
        });
        await setDoc(doc(db, `groups/${groupId}/directMessages/${pid}`), {
          users: [me, toUid].sort(),
          lastText: body,
          lastAt: serverTimestamp(),
          lastSender: me,
        }, { merge: true });
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
      await deleteDoc(doc(db, `groups/${active.groupId}/directMessages/${active.id}/messages/${msgId}`));
    } catch {
      // eslint-disable-next-line no-alert
      alert("Failed to delete message (check rules).");
    }
  }

  if (!me || !meApproved) return null;

  const filteredMembers = allMembers.filter(m => {
    const needle = filter.trim().toLowerCase();
    if (!needle) return true;
    const name = (m.displayName || "").toLowerCase();
    const email = (m.email || "").toLowerCase();
    return name.includes(needle) || email.includes(needle) || m.uid.toLowerCase().includes(needle);
  });

  // ---------- UI ----------
  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); if (!open) setView("list"); }}
        className="fixed bottom-4 right-4 z-[1000] shadow-lg rounded-full px-4 py-2 text-white text-sm md:text-[13px]"
        style={{ backgroundColor: "#919FAA" }}
        aria-label={open ? "Close direct messages" : "Open direct messages"}
      >
        {open ? "Close DMs" : "Open DMs"}
      </button>

      {/* Dock */}
      {open && (
        <div
          className="fixed z-[1000] md:right-4 md:bottom-16 md:w-[780px] md:h-[480px] md:rounded-xl
                     inset-x-0 bottom-0 w-screen h-[85vh] rounded-t-2xl
                     border border-slate-800 bg-slate-900 text-white shadow-xl overflow-hidden
                     flex md:flex-row flex-col"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Mobile header (hidden on desktop) */}
          <div className="md:hidden flex items-center justify-between px-3 py-2 border-b border-slate-800">
            <div className="text-sm font-semibold">Direct Messages</div>
            {view !== "compose" ? (
              <button
                type="button"
                onClick={() => setView("compose")}
                className="text-xs rounded-md border border-slate-700 px-2 py-1"
              >
                New
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setView("list")}
                className="text-xs rounded-md border border-slate-700 px-2 py-1"
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
                    <li key={`${t.groupId}__${t.id}`}>
                      <button
                        type="button"
                        onClick={() => { setActive(t); setView("chat"); }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-800 ${active && active.id === t.id && active.groupId === t.groupId ? "bg-slate-800" : ""}`}
                      >
                        <div className="font-medium truncate">{t.otherName || t.otherUid}</div>
                        <div className="text-xs text-slate-300 truncate">{t.lastText || "…"}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Group: {t.groupId}</div>
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
                  <div className="text-xs text-slate-400 ml-auto hidden md:block">Group: {active.groupId}</div>
                </div>

                <div className="flex-1 overflow-auto p-3 space-y-2">
                  {msgs.map((m) => {
                    const mine = m.from === me;
                    return (
                      <div key={m.id} className={`max-w-[85%] md:max-w-[80%] rounded-lg px-3 py-2 text-sm relative ${mine ? "ml-auto border border-slate-700" : "bg-slate-800"}`}>
                        {m.text}
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
                      placeholder="Search by screen name…"
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
                                {m.displayName || m.uid}{m.email ? ` • ${m.email}` : ""}
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
