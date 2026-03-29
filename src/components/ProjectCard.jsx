/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  Terminal,
  Gamepad,
  CloudRain,
  ListChecks,
  AlarmClock,
  Github,
} from "lucide-react";

const iconMap = {
  terminal: Terminal,
  gamepad: Gamepad,
  "cloud-rain": CloudRain,
  "list-checks": ListChecks,
  "alarm": AlarmClock,
};

export default function ProjectCard({ project, index }) {
  const IconComponent = iconMap[project.icon] || Terminal;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className="project-image project-gradient"
        style={{ background: project.gradient }}
      >
        <div className="project-icon-wrapper">
          <IconComponent size={64} strokeWidth={1.5} />
        </div>

        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className={`project-status ${project.status}`}>
            {project.status === "completed"
              ? "Terminé"
              : project.status === "in-progress"
              ? "En cours"
              : "À venir"}
          </span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-meta">
          <span className="project-date">
            <Calendar size={16} />
            {project.date}
          </span>
        </div>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
