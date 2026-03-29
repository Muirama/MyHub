/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import "../styles/ContactPage.css";

// ── CONFIG EmailJS ──────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_w4yce8j";
const EMAILJS_TEMPLATE_ID = "template_kiuh5fn";
const EMAILJS_PUBLIC_KEY = "xdpsk7V39LTGd3U4p";
// ───────────────────────────────────────────────────────────────

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Muirama",
    icon: Github,
    label: "@Muirama",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ton-profil",
    icon: Linkedin,
    label: "Mandresy Michel",
  },
  {
    name: "Email",
    url: "mailto:mandresy.michel.ramandimbinirina@esti.mg",
    icon: Mail,
    label: "mandresy.michel.ramandimbinirina@esti.mg",
  },
];

const contactInfos = [
  {
    icon: Mail,
    label: "Email",
    value: "mandresy.michel.ramandimbinirina@esti.mg",
    href: "mailto:mandresy.michel.ramandimbinirina@esti.mg",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 34 23 405 14",
    href: "tel:+261342340514",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Antananarivo, Madagascar",
    href: null,
  },
];

export default function ContactPage() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  // ── Validation ──────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Le nom est requis.";
    if (!formData.email.trim()) {
      e.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Adresse email invalide.";
    }
    if (!formData.message.trim()) e.message = "Le message est requis.";
    else if (formData.message.trim().length < 10)
      e.message = "Message trop court (min 10 caractères).";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // ── Envoi EmailJS ───────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="site-container">
      {/* ── HERO ── */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="hero-label">Contact</span>
        <h1>Travaillons ensemble</h1>
        <p className="contact-hero-subtitle">
          Une idée, une opportunité, une collaboration ? Je suis disponible et
          toujours partant pour en discuter.
        </p>
      </motion.section>

      {/* ── GRID PRINCIPAL ── */}
      <div className="contact-grid">
        {/* ── COLONNE GAUCHE : infos + réseaux + carte ── */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Infos directes */}
          <div className="contact-card">
            <h2>Coordonnées</h2>
            <ul className="contact-info-list">
              {contactInfos.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="contact-info-item">
                  <div className="contact-info-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="contact-info-label">{label}</span>
                    {href ? (
                      <a href={href} className="contact-info-value link">
                        {value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="contact-card">
            <h2>Réseaux sociaux</h2>
            <div className="social-links">
              {socialLinks.map(({ name, url, icon: Icon, label }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Icon size={20} />
                  <div className="social-link-text">
                    <span className="social-link-name">{name}</span>
                    <span className="social-link-label">{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Carte OpenStreetMap */}
          <div className="contact-card map-card">
            <h2>Localisation</h2>
            <div className="map-wrapper">
              <iframe
                title="Antananarivo, Madagascar"
                src="https://www.openstreetmap.org/export/embed.html?bbox=47.4500%2C-18.9500%2C47.5800%2C-18.8500&layer=mapnik&marker=-18.9137%2C47.5361"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="map-caption">
              <MapPin size={14} />
              Antananarivo, Madagascar
            </p>
          </div>
        </motion.div>

        {/* ── COLONNE DROITE : formulaire ── */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="contact-card form-card">
            <h2>Envoyer un message</h2>

            {/* Succès */}
            {status === "success" && (
              <motion.div
                className="form-feedback success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={22} />
                <span>
                  Message envoyé avec succès ! Je vous répondrai rapidement.
                </span>
              </motion.div>
            )}

            {/* Erreur */}
            {status === "error" && (
              <motion.div
                className="form-feedback error"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <AlertCircle size={22} />
                <span>
                  Une erreur est survenue. Réessayez ou contactez-moi
                  directement par email.
                </span>
              </motion.div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="contact-form"
            >
              {/* Nom */}
              <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  autoComplete="name"
                />
                {errors.name && (
                  <span className="field-error">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                <label htmlFor="email">Adresse email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </div>

              {/* Message */}
              <div
                className={`form-group ${errors.message ? "has-error" : ""}`}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Décrivez votre projet, votre idée ou votre demande..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
                {errors.message && (
                  <span className="field-error">{errors.message}</span>
                )}
              </div>

              {/* Bouton submit */}
              <motion.button
                type="submit"
                className="btn-submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
              >
                {status === "loading" ? (
                  <>
                    <span className="btn-spinner" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
