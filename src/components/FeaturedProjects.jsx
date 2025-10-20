import React from "react";
import { projects } from "../data/projects";

function FeaturedCard({ project }) {
  return (
    <div className="project-card" style={{ padding: 12, height: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 6 }}>{project.category}</div>
        <h3 className="project-title" style={{ marginBottom: 6 }}>{project.name}</h3>
        <p className="muted" style={{ fontSize: 13 }}>Mini description pour donner envie de cliquer et voir la démo.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href={project.url || '#'} style={{ color: "var(--accent-2)", fontWeight: 700 }}>Voir</a>
        <div style={{ width: 64, height: 40, borderRadius: 8, background: "rgba(255,255,255,0.02)" }} />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  // pick first 3 animations or fallback
  const featured = projects.filter(p => p.category === 'Animations').slice(0, 3);

  return (
    <section style={{ marginTop: 28 }}>
      <h2>Featured</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 12 }}>
        {featured.map(p => (
          <FeaturedCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
