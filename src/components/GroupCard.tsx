import React from "react";
import { Link } from "react-router-dom";

export type Group = {
  id: string;           // slug
  name?: string;
  title?: string;       // legacy seed key
  description?: string;
  parent?: string | null;
  campus?: string | null;
  [key: string]: any;
};

export default function GroupCard({
  group,
  isMember,
  footer,
}: {
  group: Group;
  isMember?: boolean;
  footer?: React.ReactNode;
}) {
  const title = group.name || group.title || humanizeSlug(group.id);
  const desc = group.description || "";
  const parent = group.parent ? `Parent: ${humanizeSlug(group.parent)}` : null;

  return (
    <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-accent">{title}</h3>
          {isMember ? (
            <Link
              to={`/groups/${group.id}`}
              className="inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800"
            >
              View
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center rounded-lg bg-slate-200 text-slate-500 px-3 py-1.5 text-sm cursor-not-allowed"
              title="Join this group to view"
            >
              View
            </button>
          )}
        </div>
        {parent && <p className="text-xs text-text2 mt-1">{parent}</p>}
        {desc && <p className="text-sm text-text2 mt-3">{desc}</p>}
      </div>

      {footer && <div className="mt-4 flex items-center gap-2">{footer}</div>}
    </div>
  );
}

function humanizeSlug(slug: string) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
