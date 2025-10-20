import React from "react";

export default function ComponentCard({ item, onOpen }) {
  return (
    <div className="project-card" style={{ padding: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 14, color: 'var(--muted)' }}>{item.id}</div>
          <h3 className="project-title">{item.name}</h3>
          <div className="muted" style={{ fontSize: 13 }}>{item.description}</div>
        </div>
        <div>
          <button className="cta" onClick={() => onOpen(item)}>Open</button>
        </div>
      </div>
    </div>
  );
}
