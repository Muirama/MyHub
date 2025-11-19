import "../styles/AboutPage.css";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-container">
      {/* 1. Hero / Présentation */}
      <section className="about-hero-new">
        <div className="hero-content-grid">
          <div className="hero-image-wrapper">
            <div className="hero-image-container animate-on-scroll">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="hero-profile-image"
              />
              <div className="hero-image-backdrop"></div>
            </div>
          </div>
          <div className="hero-text-content animate-on-scroll">
            <h1>RAMANDIMBINIRINA Mandresy Michel</h1>
            <p className="hero-role">Développeur Junior</p>
            <p className="hero-pitch">
              Développeur polyvalent, passionné par la création d'expériences
              web modernes et intuitives.
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
          <div className="bio-who animate-on-scroll">
            <h3>Qui suis‑je ?</h3>
            <p>
              Étudiant en 3ème année en Intégration et Développement
              Informatique, je construis des applications web, mobiles et
              desktop. J’aime apprendre par la pratique, travailler en équipe et
              explorer de nouvelles technologies.
            </p>
            <p className="bio-quick">
              Flexible, curieux, motivé et orienté résultat — je cherche des
              opportunités de travail, d'alternance ou d'autres types de
              collaboration pour continuer à monter en compétences.
            </p>
          </div>

          <div className="bio-extended animate-on-scroll">
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
              jeux vidéo. En attendant, je continue à progresser sur le web, le
              mobile et le desktop.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Statistiques */}
      <section className="stats-showcase animate-on-scroll">
        {/* anciens chiffres */}
        <div className="stat-card">
          <span className="stat-icon">⭐</span>
          <h3 className="stat-number">+30</h3>
          <p className="stat-label">
            Projets réalisés ( personnel et académiques )
          </p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">💼</span>
          <h3 className="stat-number">Disponible</h3>
          <p className="stat-label">
            Pour alternance ou autres types de collaborations
          </p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <h3 className="stat-number">3 ans</h3>
          <p className="stat-label">D'apprentissage et encore plus à suivre</p>
        </div>

        <div className="stat-card">
          <span className="stat-icon">📅</span>
          <h3 className="stat-number">Depuis 2021</h3>
          <p className="stat-label">Développement actif</p>
        </div>
      </section>
    </div>
  );
}
