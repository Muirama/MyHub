import AnimatedButton from "../components/examples/AnimatedButton";
import GlassCard from "../components/examples/GlassCard";
import LoadingSpinner from "../components/examples/LoadingSpinner";
import ToggleSwitch from "../components/examples/ToggleSwitch";
import ProgressBar from "../components/examples/ProgressBar";

export const components = [
  {
    name: "Bouton Animé",
    description: "Bouton avec effet de hover et animation au clic",
    tags: ["React", "Framer Motion", "Button"],
    preview: <AnimatedButton />,
    code: `import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <motion.button
      className="animated-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      Cliquez-moi
    </motion.button>
  );
}

/* CSS */
.animated-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}`,
  },
  {
    name: "Card Glassmorphism",
    description: "Carte avec effet de verre moderne",
    tags: ["React", "CSS", "Glassmorphism"],
    preview: <GlassCard />,
    code: `export default function GlassCard() {
  return (
    <div className="glass-card">
      <h3>Glassmorphism</h3>
      <p>Effet de verre moderne et élégant</p>
    </div>
  );
}

/* CSS */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
  },
  {
    name: "Loading Spinner",
    description: "Indicateur de chargement animé",
    tags: ["React", "CSS", "Animation"],
    preview: <LoadingSpinner />,
    code: `export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

/* CSS */
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(102, 126, 234, 0.2);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    name: "Toggle Switch",
    description: "Interrupteur toggle personnalisé",
    tags: ["React", "Interactive", "CSS"],
    preview: <ToggleSwitch />,
    code: `import { useState } from "react";

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="slider"></span>
    </label>
  );
}

/* CSS */
.toggle-switch {
  position: relative;
  width: 60px;
  height: 30px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #667eea;
}

input:checked + .slider:before {
  transform: translateX(30px);
}`,
  },
  {
    name: "Progress Bar",
    description: "Barre de progression animée",
    tags: ["React", "Animation", "Progress"],
    preview: <ProgressBar />,
    code: `import { motion } from "framer-motion";

export default function ProgressBar({ progress = 75 }) {
  return (
    <div className="progress-container">
      <div className="progress-label">
        <span>Progression</span>
        <span>{progress}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: \`\${progress}%\` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* CSS */
.progress-container {
  width: 100%;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}`,
  },
];