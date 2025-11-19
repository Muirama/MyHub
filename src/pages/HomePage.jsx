import { useState, useEffect } from "react";
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
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="site-container">
      <div className="hero-split">
        <div className="hero-left">
          <div className="hero-content">
            <span className="hero-label">Portfolio & Hub</span>

            <div className="title-container">
              <h1
                className={`animated-title ${
                  isAnimating ? "fade-out" : "fade-in"
                }`}
              >
                {titles[currentTitleIndex]}
              </h1>
            </div>

            <p className="hero-description">
              Étudiant développeur polyvalent : web, mobile, desktop et design.
              Enthousiaste à l'idée de collaborer sur de nouveaux projets.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Mes Projets</button>
              <button className="btn-secondary">Me Contacter</button>
            </div>

            <TechCarousel />
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-container">
            <div className="photo-wrapper">
              <img src="/profile.jpg" alt="Profile" className="profile-photo" />
              <div className="photo-decoration decoration-1" />
              <div className="photo-decoration decoration-2" />
            </div>

            <div className="photo-badge">
              <span className="badge-icon">✨</span>
              <span className="badge-text">Disponible pour collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
