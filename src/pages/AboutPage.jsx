import "../styles/AboutPage.css";
import TechCarousel from "../components/TechCarousel";

export default function AboutPage() {
  return (
    <div className="site-container">
      {/* 1. Hero / Présentation */}
      <section className="about-hero-new">
        <div className="hero-content-grid">
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="hero-profile-image"
              />
              <div className="hero-image-backdrop"></div>
            </div>
          </div>
          <div className="hero-text-content">
            <h1>RAMANDIMBINIRINA Mandresy Michel</h1>
            <p className="hero-role">Développeur Full-Stack Junior</p>
            <p className="hero-pitch">
              Développeur full-stack polyvalent, passionné par la création
              d'expériences web modernes et intuitives.
            </p>
            <div className="hero-social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:contact@email.com">Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Parcours / Biographie */}
      <section className="about-section bio-section">
        <h2>Mon Parcours</h2>
        <div className="bio-content-grid">
          <div className="bio-text">
            <p>
              <strong>Qui suis-je ?</strong>
              <br />
              Je m'appelle RAMANDIMBINIRINA Mandresy Michel.
              Acteuellent étudiant de troisième année en Intégration et Développement
              Informatique.
            </p>
            <p>
              <strong>Pourquoi je programme ?</strong>
              <br />
              Passionné par la technologie depuis mon plus jeune âge, j'ai
              découvert le développement web en 2021. Ce qui m'a immédiatement
              séduit, c'est la possibilité de transformer des idées en
              applications concrètes qui peuvent aider des milliers de
              personnes.
            </p>
            <p>
              <strong>Ma mission</strong>
              <br />
              Créer des solutions digitales performantes, intuitives et
              accessibles. Je crois fermement que la technologie doit simplifier
              la vie, pas la compliquer.
            </p>
            <p>
              <strong>Ce que je recherche</strong>
              <br />
              Actuellement ouvert aux opportunités d'alternance, de stage et de
              collaboration sur des projets innovants. Je cherche à rejoindre
              une équipe dynamique où je peux apprendre, grandir et apporter ma
              créativité.
            </p>
          </div>
          <div className="bio-stats-cards">
            <div className="bio-stat-card">
              <span className="bio-stat-icon">📅</span>
              <h3>Depuis 2021</h3>
              <p>Développement actif</p>
            </div>
            <div className="bio-stat-card">
              <span className="bio-stat-icon">🚀</span>
              <h3>+20 Projets</h3>
              <p>Réalisés avec passion</p>
            </div>
            <div className="bio-stat-card">
              <span className="bio-stat-icon">📱</span>
              <h3>3 Apps</h3>
              <p>Publiées en production</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Compétences */}
      <section className="about-section skills-section">
        <TechCarousel />
      </section>

      {/* 4. Statistiques */}
      <section className="stats-showcase">
        <div className="stat-card">
          <span className="stat-icon">⭐</span>
          <h3 className="stat-number">15+</h3>
          <p className="stat-label">Projets réalisés</p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">💼</span>
          <h3 className="stat-number">Disponible</h3>
          <p className="stat-label">Pour alternance</p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <h3 className="stat-number">3 ans</h3>
          <p className="stat-label">D'apprentissage</p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🧠</span>
          <h3 className="stat-number">Passionné</h3>
          <p className="stat-label">IA & UI/UX</p>
        </div>
      </section>

      {/* 6. Éducation & Certifications */}
      <section className="about-section education-section">
        <h2>Formation & Certifications</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-year">2024</div>
            <div className="education-content">
              <h3>Licence Informatique</h3>
              <p className="education-school">Université / École</p>
              <p className="education-description">
                Spécialisation en développement web et mobile
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-year">2023</div>
            <div className="education-content">
              <h3>Formation Full-Stack</h3>
              <p className="education-school">OpenClassrooms</p>
              <p className="education-description">
                React, Node.js, MongoDB - Projet final avec mention
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-year">2022</div>
            <div className="education-content">
              <h3>Certifications en ligne</h3>
              <p className="education-school">Udemy, Coursera</p>
              <p className="education-description">
                JavaScript avancé, React, Flutter, UI/UX Design
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
