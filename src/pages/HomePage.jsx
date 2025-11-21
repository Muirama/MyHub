/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TechCarousel from "../components/TechCarousel";
import "../styles/HomePage.css";

export default function HomePage() {
  const titles = [
    "Développeur Web",
    "Développeur Mobile",
    "Développeur Desktop",
    "Designer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="site-container">
      <div className="hero-split">
        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="hero-content">
            <motion.span
              className="hero-label"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Portfolio & Hub
            </motion.span>

            <div className="title-container">
              <h1
                className={`animated-title ${
                  isAnimating ? "fade-out" : "fade-in"
                }`}
              >
                {titles[currentTitleIndex]}
              </h1>
            </div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Étudiant développeur polyvalent : web, mobile, desktop et design.
              Enthousiaste à l'idée de collaborer sur de nouveaux projets.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Mes Projets
              </motion.button>

              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Me Contacter
              </motion.button>
            </motion.div>

            <TechCarousel />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="photo-container">
            <motion.div
              className="photo-wrapper"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src="/profile.jpg" alt="Profile" className="profile-photo" />
            </motion.div>

            {/* NEW BADGE */}
            <motion.div
              className="enhanced-badge"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="badge-online-dot">
                <img src="/icon/dispo.png" alt="Dispo"  />
              </span>
              <span className="badge-text">Disponible pour collaboration</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
