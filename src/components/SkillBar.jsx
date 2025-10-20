import React from "react";

export default function SkillBar({ skill }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <div style={{ fontWeight: 700 }}>{skill.name}</div>
        <div className="muted">{skill.level}%</div>
      </div>
      <div style={{ width: "100%", height: 10, borderRadius: 999, background: "rgba(255,255,255,0.04)" }}>
        <div style={{ width: `${skill.level}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg,var(--accent),var(--accent-2))", transition: "width 1.2s ease" }} />
      </div>
    </div>
  );
}
