import React, { useEffect, useRef, useState } from "react";

export default function SkillsCarousel({ categories, interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % categories.length);
    }, interval);
    return () => clearInterval(timer.current);
  }, [categories.length, interval]);

  if (!categories || categories.length === 0) return null;

  return (
    <div className="skills-carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {categories.map((cat, i) => (
          <div className="carousel-item" key={i}>
            <div className="carousel-header">{cat.category}</div>
            <div className="carousel-body">
              {cat.items.map((it, idx) => (
                it.level ? (
                  <div key={idx} style={{ marginBottom: 8 }}>
                    {/* reuse SkillBar-like styles but lightweight */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ fontWeight: 700 }}>{it.name}</div>
                      <div className="muted">{it.level}%</div>
                    </div>
                    <div style={{ width: "100%", height: 8, borderRadius: 999, background: "rgba(255,255,255,0.04)" }}>
                      <div style={{ width: `${it.level}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg,var(--accent),var(--accent-2))" }} />
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="skill-badge">{it.name}</div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {categories.map((_, i) => (
          <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} aria-label={`Voir ${categories[i].category}`} />
        ))}
      </div>
    </div>
  );
}
