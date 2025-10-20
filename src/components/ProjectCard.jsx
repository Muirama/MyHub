import React, { Suspense } from "react";

export default function ProjectCard({ project, onQuickView }) {
  const Preview = project.component || null;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h3 className="project-title">{project.name}</h3>
          <div className="project-meta">{project.category}</div>
        </div>
        <div className="muted">#{project.id}</div>
      </div>

      <div className="preview-wrapper" style={{ marginTop: 12 }}>
        <div className="preview-inner">
          {Preview ? (
            <Suspense fallback={<div style={{ padding: 12, color: "var(--muted)" }}>Loading preview...</div>}>
              <div style={{ width: "100%", height: "100%" }}>
                <Preview previewMode={true} />
              </div>
            </Suspense>
          ) : (
            <div style={{ color: "var(--muted)" }}>No preview available</div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
        <button onClick={() => onQuickView && onQuickView(project)} style={{ padding: '8px 12px', borderRadius: 8, border: 'none', background: 'var(--accent)', color: '#04263b', fontWeight: 700 }}>Demo</button>
        {project.url ? (
          <a href={project.url} style={{ color: "var(--accent-2)", fontWeight: 700 }}>Open</a>
        ) : (
          <span className="muted">Local demo</span>
        )}
      </div>
    </div>
  );
}
