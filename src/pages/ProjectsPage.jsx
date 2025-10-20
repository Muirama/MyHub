import React, { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";
import ProjectModal from "../components/ProjectModal";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(null);

  const categories = useMemo(() => {
    const set = new Set();
    projects.forEach(p => set.add(p.category));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category ? p.category === category : true;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="site-container">
      <h2 style={{ marginBottom: 8 }}>Projects</h2>

      <ProjectFilters categories={categories} value={query} onChange={setQuery} onCategoryChange={setCategory} />

      <div className="projects-grid">
        {filtered.map((p) => (
          <div key={p.id} className="project-card">
            <ProjectCard project={p} onQuickView={setActive} />
          </div>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
