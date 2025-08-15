import React from "react";
import { Link } from "react-router-dom";

export type Group = {
  id: string;           // slug
  name?: string;
  title?: string;       // fallback key if used in seed
  description?: string;
  parent?: string;
  [key: string]: any;
};

export default function GroupCard({ group, footer }: { group: Group; footer?: React.ReactNode }) {
  const title = group.name || group.title || humanizeSlug(group.id);
  const desc =
    group.description ||
    "A discussion and ministry group for our community. Details coming soon.";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-5 flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {group.parent && (
          <p className="text-xs text-slate-500 mt-0.5">Parent: {humanizeSlug(group.parent)}</p>
        )}
        <p className="text-sm text-slate-600 mt-2">{desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Link
          to={`/groups/${group.id}`}
          className="text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
        >
          View
        </Link>
        {footer}
      </div>
    </div>
  );
}

function humanizeSlug(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
