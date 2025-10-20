import React from "react";

export default function ProjectFilters({ categories, value, onChange, onCategoryChange }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
      <input placeholder="Search projects..." value={value} onChange={(e) => onChange(e.target.value)} style={{ padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.04)', background: 'transparent', color: 'inherit' }} />

      <select onChange={(e) => onCategoryChange(e.target.value)} style={{ padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.04)', background: 'transparent', color: 'inherit' }}>
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
