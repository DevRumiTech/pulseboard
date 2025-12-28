import React, { useState } from "react";

const insights = [
  {
    id: 1,
    title: "Onboarding simplification increased activation",
    impact: "High",
    text: "Reducing onboarding steps improved user completion rates.",
  },
  {
    id: 2,
    title: "Performance optimizations reduced churn",
    impact: "Medium",
    text: "Caching and query optimization improved perceived speed.",
  },
];

export default function Insights() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? insights : insights.filter((i) => i.impact === filter);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Insights</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-3 rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
        </select>
      </div>

      {visible.map((i) => (
        <div
          key={i.id}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        >
          <h3 className="font-semibold">{i.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{i.text}</p>
          <span className="mt-2 inline-block text-xs text-slate-500">
            Impact: {i.impact}
          </span>
        </div>
      ))}
    </div>
  );
}
