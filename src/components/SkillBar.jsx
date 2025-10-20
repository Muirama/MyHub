import React, { useEffect, useRef } from "react";

export default function SkillBar({ skill }) {
  const fillRef = useRef(null);
  const level = skill && typeof skill.level === 'number' ? skill.level : null;
  const name = skill && skill.name ? skill.name : "";

  useEffect(() => {
    if (fillRef.current && typeof level === 'number') {
      // trigger a smooth width transition
      requestAnimationFrame(() => {
        fillRef.current.style.width = `${level}%`;
      });
    }
    // we intentionally depend on 'level' only
  }, [level]);

  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <div className="skill-name">{name}</div>
        <div className="skill-level muted">{typeof level === 'number' ? `${level}%` : ""}</div>
      </div>
      <div className="skill-track">
        <div className="skill-fill" ref={fillRef} style={{ width: typeof level === 'number' ? 0 : '0' }} />
      </div>
    </div>
  );
}
