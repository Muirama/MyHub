import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const Preview = project.component || null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(2,6,23,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60 }} onClick={onClose}>
      <div style={{ width: '90%', maxWidth: 900, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.05))', borderRadius: 12, padding: 18 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>{project.name}</h3>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--muted)', fontSize: 18 }}>✕</button>
        </div>

        <div style={{ marginTop: 12, height: 420 }}>
          {Preview ? <Preview /> : <div className="muted">No demo available</div>}
        </div>

        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="muted">{project.category}</div>
          {project.url ? <a href={project.url} style={{ color: 'var(--accent-2)' }}>Open project</a> : null}
        </div>
      </div>
    </div>
  );
}
