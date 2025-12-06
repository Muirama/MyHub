/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../../styles/examples.css";

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
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
