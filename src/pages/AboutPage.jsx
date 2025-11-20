/* eslint-disable no-unused-vars */
import "../styles/AboutPage.css";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Briefcase, BookOpen, Calendar } from "lucide-react";

function StatNumber({ value, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 3000;
    const increment = end / (duration / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.ceil(start));
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <h3 ref={ref} className="stat-number">
      {prefix}
      {count}
      {suffix}
    </h3>
  );
}

export default function AboutPage() {
  return (
    <div className="site-container">
      {/* HERO */}
      <section className="about-hero-new">
        <div className="hero-content-grid">
          {/* PHOTO */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="hero-image-container">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="hero-profile-image"
              />
              <div className="hero-image-backdrop"></div>
            </div>
          </motion.div>

          {/* TEXTE HERO */}
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1>RAMANDIMBINIRINA Mandresy Michel</h1>
            <p className="hero-role">Développeur Junior</p>
            <p className="hero-pitch">
              Développeur polyvalent, passionné par la création d'expériences
              web modernes et intuitives.
            </p>

            <div className="hero-social-links">
              <a href="https://github.com" target="_blank">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank">
                LinkedIn
              </a>
              <a href="mailto:contact@email.com">Email</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MON PARCOURS */}
      <section className="about-section bio-section">
        <h2>Mon Parcours</h2>

        <div className="bio-content-grid">
          {/* QUI SUIS-JE */}
          <motion.div
            className="bio-who"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Qui suis-je ?</h3>
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
          </motion.div>

          {/* TEXTE ÉTENDU */}
          <motion.div
            className="bio-extended"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
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
              <br />
              À terme, je souhaite me spécialiser dans le développement de
              jeux vidéo. En attendant, je continue à progresser sur le web, le
              mobile et le desktop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATISTIQUES + COMPTEUR */}
      <section className="stats-showcase">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Star className="stat-icon-pro" />
          <StatNumber value={30} prefix="+" />
          <p className="stat-label">Projets réalisés</p>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
        >
          <Briefcase className="stat-icon-pro" />
          <h3 className="stat-number">Disponible</h3>
          <p className="stat-label">Pour alternance ou collaboration</p>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <BookOpen className="stat-icon-pro" />
          <StatNumber value={3} suffix=" ans" />
          <p className="stat-label">D'apprentissage continu</p>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Calendar className="stat-icon-pro" />
          <h3 className="stat-number">Depuis 2021</h3>
          <p className="stat-label">Développement actif</p>
        </motion.div>
      </section>
    </div>
  );
}
