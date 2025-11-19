import "../styles/AboutPage.css";

export default function AboutPage() {
  return (
    <div className="site-container">
      <div className="about-hero">
        <h1>À propos de MyHub</h1>
        <p className="hero-subtitle">
          Une plateforme innovante pour transformer vos idées en réalité
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-icon">🎯</div>
          <h2>Notre Mission</h2>
          <p>
            MyHub a pour mission de fournir les meilleurs outils et services pour
            aider les créateurs, les entrepreneurs et les équipes à collaborer
            efficacement et à donner vie à leurs projets.
          </p>
        </section>

        <section className="about-section">
          <div className="section-icon">💡</div>
          <h2>Notre Vision</h2>
          <p>
            Nous croyons en un monde où la technologie facilite la créativité et
            la collaboration. Notre vision est de créer un écosystème où chacun
            peut contribuer, apprendre et grandir ensemble.
          </p>
        </section>

        <section className="values-grid">
          <h2 className="values-title">Nos Valeurs</h2>
          <div className="value-cards">
            <div className="value-card">
              <span className="value-emoji">🚀</span>
              <h3>Innovation</h3>
              <p>Nous repoussons constamment les limites du possible</p>
            </div>
            <div className="value-card">
              <span className="value-emoji">🤝</span>
              <h3>Collaboration</h3>
              <p>Ensemble, nous sommes plus forts et créatifs</p>
            </div>
            <div className="value-card">
              <span className="value-emoji">⚡</span>
              <h3>Excellence</h3>
              <p>La qualité est au cœur de tout ce que nous faisons</p>
            </div>
            <div className="value-card">
              <span className="value-emoji">🌟</span>
              <h3>Impact</h3>
              <p>Créer un changement positif et durable</p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Utilisateurs actifs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Pays</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </section>
      </div>
    </div>
  );
}
