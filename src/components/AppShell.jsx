import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, FolderKanban, Sparkles, Settings } from "lucide-react";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-6 md:grid-cols-[260px_1fr]">
          
          {/* Sidebar */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
            <div className="mb-6 text-lg font-semibold">PulseBoard</div>
            <nav className="space-y-1">
              <SideLink to="/dashboard" icon={<BarChart3 size={18} />} label="Dashboard" />
              <SideLink to="/projects" icon={<FolderKanban size={18} />} label="Projects" />
              <SideLink to="/insights" icon={<Sparkles size={18} />} label="Insights" />
              <SideLink to="/settings" icon={<Settings size={18} />} label="Settings" />
            </nav>
          </aside>

          {/* Main */}
          <main className="space-y-6">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
}

function SideLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
          isActive
            ? "bg-slate-900 text-white"
            : "text-slate-700 hover:bg-slate-100",
        ].join(" ")
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}
