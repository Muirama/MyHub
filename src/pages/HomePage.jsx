import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Animations",
    description: "Explore interactive animations",
    color: "#61dafb",
    route: "/animations",
  },
  {
    id: 2,
    name: "Components",
    description: "UI components library",
    color: "#f39c12",
    route: "/components",
  },
  {
    id: 3,
    name: "Projects",
    description: "Mini projects & demos",
    color: "#2ecc71",
    route: "/projects",
  },
  {
    id: 4,
    name: "Games",
    description: "Fun & interactive mini-games",
    color: "#e74c3c",
    route: "/games",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0d",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "'Roboto', sans-serif",
        boxSizing: "border-box", // ✅ évite les overflow
        overflowX: "hidden", // ✅ masque tout débordement horizontal
      }}
    >
      <header style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h1
          style={{ fontSize: "3rem", marginBottom: "1rem", color: "#61dafb" }}
        >
          Welcome to My Interactive Hub
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#ccc" }}>
          Explore animations, components, mini-projects, and games
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            onMouseEnter={() => setHovered(cat.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(cat.route)}
            style={{
              cursor: "pointer",
              padding: "2rem",
              borderRadius: "15px",
              background: "#111",
              boxShadow:
                hovered === cat.id ? `0 0 40px ${cat.color}` : "0 0 15px #000",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              overflow: "hidden", // ✅ empêche le scale de dépasser
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: cat.color,
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "#0d0d0d",
                transform: hovered === cat.id ? "scale(1.1)" : "scale(1)", // 🔹 scale moins agressif
                transition: "transform 0.3s",
              }}
            >
              {cat.name.charAt(0)}
            </div>
            <h2 style={{ margin: "0.5rem 0", color: cat.color }}>{cat.name}</h2>
            <p style={{ color: "#aaa" }}>{cat.description}</p>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: "5rem", color: "#666" }}>
        &copy; {new Date().getFullYear()} Interactive Hub. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
