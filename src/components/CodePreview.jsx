/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function CodePreview({ component }) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="code-preview-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="code-preview-header">
        <div className="component-info">
          <h3>{component.name}</h3>
          <p>{component.description}</p>
        </div>

        <div className="code-preview-actions">
          <button
            className={`toggle-btn ${showPreview ? "active" : ""}`}
            onClick={() => setShowPreview(true)}
          >
            <Eye size={16} />
            Aperçu
          </button>
          <button
            className={`toggle-btn ${!showPreview ? "active" : ""}`}
            onClick={() => setShowPreview(false)}
          >
            <Code size={16} />
            Code
          </button>
          <button
            className={`copy-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copié !" : "Copier"}
          </button>
        </div>
      </div>

      {showPreview ? (
        <div className="component-preview">
          <div className="preview-wrapper">{component.preview}</div>
        </div>
      ) : (
        <div className="code-block">
          <pre>
            <code>{component.code}</code>
          </pre>
        </div>
      )}

      <div className="component-tags">
        {component.tags.map((tag, i) => (
          <span key={i} className="component-tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

