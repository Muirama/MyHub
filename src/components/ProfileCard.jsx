import React from "react";

export default function ProfileCard({ data }) {
  return (
    <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
      <div style={{ width: 120, height: 120, borderRadius: 18, overflow: "hidden", boxShadow: "0 12px 30px rgba(2,6,23,0.6)", border: "1px solid rgba(255,255,255,0.04)" }}>
        <img src={data.photo} alt={data.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      <div>
        <h2 style={{ margin: 0 }}>{data.name}</h2>
        <div style={{ color: "var(--muted)", margin: "6px 0" }}>{data.title} — {data.location.city}, {data.location.country}</div>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <a className="cta" href={data.resumeUrl}>Télécharger le CV</a>
          <a href={`mailto:${data.email}`} style={{ color: "var(--accent-2)", alignSelf: "center" }}>Contact</a>
        </div>
      </div>
    </div>
  );
}
