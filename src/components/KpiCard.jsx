import React from "react";

export default function KpiCard({ label, value, delta }) {
  const positive = delta.startsWith("+");
  const negative = delta.startsWith("-");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div
        className={[
          "mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
          positive && "bg-emerald-50 text-emerald-700",
          negative && "bg-rose-50 text-rose-700",
        ].filter(Boolean).join(" ")}
      >
        {delta}
      </div>
    </div>
  );
}
