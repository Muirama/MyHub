import { useState, useEffect } from "react";
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

  const techLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            <div className="hero-tags">
              {techLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="tech-logo"
                  title={logo.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-container">
            <div className="photo-wrapper">
              <img src="/profile.jpg" alt="Profile" className="profile-photo" />
              <div className="photo-decoration decoration-1"></div>
              <div className="photo-decoration decoration-2"></div>
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
