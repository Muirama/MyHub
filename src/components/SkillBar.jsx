import React, { useEffect, useRef } from "react";

export default function SkillBar({ skill }) {
  const fillRef = useRef(null);

  useEffect(() => {
    if (fillRef.current && skill.level) {
      // trigger a smooth width transition
      requestAnimationFrame(() => {
        fillRef.current.style.width = `${skill.level}%`;
      });
    }
  }, [skill.level]);

  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <div className="skill-name">{skill.name}</div>
        <div className="skill-level muted">{skill.level}%</div>
      </div>
      <div className="skill-track">
        <div className="skill-fill" ref={fillRef} style={{ width: 0 }} />
      </div>
    </div>
  );
}
