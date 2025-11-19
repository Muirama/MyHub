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
          <div className="bio-who">
            <h3>Qui suis‑je ?</h3>
            <p>
              Étudiant en 3ème année en Intégration et Développement
              Informatique, je construis des applications web, mobiles et
              desktop. J’aime apprendre par la pratique, travailler en équipe et
              explorer de nouvelles technologies.
            </p>
            <p className="bio-quick">
              Flexible, curieux et orienté résultat — je cherche des
              opportunités d'alternance ou de collaboration pour continuer à
              monter en compétences.
            </p>
          </div>

          <div className="bio-extended">
            <p>
              <strong>Mon expérience en quelques mots</strong>
              <br />
              Au cours de mes trois premières années en intégration et
              développement informatique, j’ai développé de solides compétences
              en développement web, mobile et desktop, aussi bien côté Front‑End
              que Back‑End. J’ai appris à concevoir toutes sortes d’applications
              : certaines bonnes, d’autres moins réussies, parfois maladroites
              ou incomplètes, mais chacune d’elles a été précieuse dans ma
              progression.
            </p>
            <p>
              <strong>Ce que ces années m'ont apporté</strong>
              <br />
              Ces années m’ont appris à travailler de manière autonome, à
              collaborer en équipe et à m’adapter à de nouvelles technologies
              grâce à la veille constante. Sur le plan personnel, j’ai gagné en
              ouverture, en communication et en assurance.
            </p>
            <p>
              <strong>Réflexion sur l'avenir et l'IA</strong>
              <br />
              J’estime que l’IA sera un outil incontournable : ceux qui
              l’utiliseront efficacement auront une longueur d’avance.
            </p>
            <p>
              <strong>Objectif</strong>
              <br />À terme, je souhaite me spécialiser dans le développement de
              jeux vidéo. En attendant, je continue à progresser sur le web et
              le mobile.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Statistiques */}
      <section className="stats-showcase">
        {/* anciens chiffres */}
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

        {/* cartes déplacées depuis la bio (intégrées ici) */}
        <div className="stat-card">
          <span className="stat-icon">📅</span>
          <h3 className="stat-number">Depuis 2021</h3>
          <p className="stat-label">Développement actif</p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🚀</span>
          <h3 className="stat-number">+20</h3>
          <p className="stat-label">Projets</p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📱</span>
          <h3 className="stat-number">3</h3>
          <p className="stat-label">Apps publiées</p>
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
