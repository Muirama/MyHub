/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import CodePreview from "../components/CodePreview";
import { Folder, Code2 } from "lucide-react";
import { projects } from "../data/projectData";
import { components } from "../data/componentData.jsx";
import "../styles/ProjectsPage.css";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="site-container">
      <section className="projects-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-subtitle">
            Découvrez mes réalisations et composants réutilisables
          </p>
        </motion.div>

        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <Folder size={20} />
            Projets
          </button>
          <button
            className={`tab-btn ${activeTab === "components" ? "active" : ""}`}
            onClick={() => setActiveTab("components")}
          >
            <Code2 size={20} />
            Composants
          </button>
        </div>
      </section>

      {activeTab === "projects" ? (
        <section className="projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      ) : (
        <section className="components-section">
          <div className="components-list">
            {components.map((component, index) => (
              <CodePreview key={index} component={component} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
