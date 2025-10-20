import React from "react";

export default function AnimatedHero({ onPrimaryClick }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">Salut — je crée des expériences web interactives</h1>
        <p className="hero-sub">Animations, interfaces et mini-apps. Portfolio & playground — tout au même endroit.</p>
        <div style={{ display: "flex", gap: 12 }}>
          <button className="cta" onClick={onPrimaryClick}>Voir les projets</button>
          <a className="cta" href="/about" style={{ background: "transparent", color: "var(--muted)", boxShadow: "none" }}>À propos</a>
        </div>
      </div>

      <div className="hero-right" aria-hidden>
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>
          {/* placeholder pour animation légère */}
          <div style={{ width: 320, height: 200, borderRadius: 12, background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.05))", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>Aperçu animé</div>
          </div>
        </div>
      </div>
    </section>
  );
}
