import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="site-container">
      <h2 style={{ marginBottom: 8 }}>Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
