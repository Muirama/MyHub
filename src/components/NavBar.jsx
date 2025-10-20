import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg,var(--accent),var(--accent-2))" }} />
                    <div style={{ fontWeight: 800 }}>MyHub</div>
                </div>

                <ul className="nav-list">
                    <li>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/components" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Components
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
