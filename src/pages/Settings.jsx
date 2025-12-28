import React, { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("Your Name");
  const [role, setRole] = useState("Full Stack Developer");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>

      <label className="block text-sm font-medium mb-1">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
      />

      <label className="block text-sm font-medium mb-1">Role</label>
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
      />

      <div className="mt-6 text-sm text-slate-600">
        Preview: <strong>{name}</strong> — {role}
      </div>
    </div>
  );
}
