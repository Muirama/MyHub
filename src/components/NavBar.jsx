import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">MyHub</span>
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              À propos
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
