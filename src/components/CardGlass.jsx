import React from "react";

export default function CardGlass({ children, style }) {
  return (
    <div style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', borderRadius: 12, padding: 12, boxShadow: '0 12px 30px rgba(2,6,23,0.6)', border: '1px solid rgba(255,255,255,0.03)', ...style }}>
      {children}
    </div>
  );
}
