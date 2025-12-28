import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import { kpis, trend, channels } from "../data/mockData";
import KpiCard from "../components/KpiCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <section className="grid gap-4 md:grid-cols-4">
        {kpis.map((k) => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta} />
        ))}
      </section>

      {/* Charts */}
      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-sm font-semibold mb-3">User Growth</h2>
          <div className="h-72 min-h-[18rem]">

            
            <ResponsiveContainer width="100%" height={260}>

              <AreaChart data={trend}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-sm font-semibold mb-3">Acquisition Channels</h2>
          <div className="h-72">
          
            <ResponsiveContainer width="100%" height={260}>

              <PieChart>
                <Pie data={channels} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {channels.map((_, i) => (
                    <Cell key={i} fill={["#6366f1", "#0ea5e9", "#10b981", "#a855f7"][i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
