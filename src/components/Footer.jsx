import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Section Brand */}
          <div className="footer-section">
            <div className="footer-brand">
              <span className="brand-text">MyHub</span>
            </div>
            <p className="footer-description">
              Votre plateforme moderne pour créer, collaborer et innover.
            </p>
          </div>

          {/* Section Navigation */}
          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">À propos</Link>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links contact-icons">
              <li>
                <Mail className="footer-icon" />
                mandresy.michel.ramandimbinirina@esti.mg
              </li>

              <li>
                <Phone className="footer-icon" />
                +261 34 23 405 14
              </li>

              <li>
                <MapPin className="footer-icon" />
                Antananarivo, Madagascar
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} MyHub. Tous droits réservés.</p>

          <div className="footer-legal">
            <a href="#privacy">Confidentialité</a>
            <span>•</span>
            <a href="#terms">Conditions</a>
            <span>•</span>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
