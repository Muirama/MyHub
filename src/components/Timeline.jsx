import React from "react";

export default function Timeline({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((it, idx) => (
        <div key={idx} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{ width: 64, textAlign: "right", color: "var(--muted)", fontWeight: 700 }}>{it.year}</div>
          <div style={{ background: "rgba(255,255,255,0.02)", padding: 12, borderRadius: 10, flex: 1 }}>
            <div style={{ fontWeight: 700 }}>{it.title}</div>
            <div className="muted" style={{ marginTop: 6 }}>{it.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
