import React from "react";

export default function HomePage() {
    return (
        <div className="site-container">
            <section className="hero">
                <div className="hero-left">
                    <h1 className="hero-title">Bienvenue sur mon Hub</h1>
                    <p className="hero-sub">Un espace pour montrer mes projets, mes animations et mes expérimentations créatives.</p>
                    <a className="cta" href="/projects">Voir les projets</a>
                </div>

                <div className="hero-right float" style={{ width: 420, height: 260, borderRadius: 18, overflow: "hidden", background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06))" }}>
                    {/* Place a small montage or animated canvas here; keep it lightweight */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--muted)" }}>✨ Aperçu animé ✨</div>
                </div>
            </section>
        </div>
    );
}