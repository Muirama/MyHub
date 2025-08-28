import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        padding: "1rem",
        background: "#111",
        color: "#fff",
      }}
    >
      <Link style={{ margin: "0 1rem" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "0 1rem" }} to="/animations">
        Animations
      </Link>
    </nav>
  );
};

export default NavBar;
