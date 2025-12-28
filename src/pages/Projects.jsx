import React, { useMemo, useState } from "react";
import { projectsSeed } from "../data/mockData";

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projectsSeed.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Projects</h2>
        <p className="text-sm text-slate-600 mb-4">
          Example project list with client-side search.
        </p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="w-full md:w-72 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
          >
            <div className="text-xs text-slate-500">{p.tag}</div>
            <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.notes}</p>
            <div className="mt-3 text-sm text-slate-500">
              Owner: <span className="font-semibold">{p.owner}</span> · {p.updated}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
