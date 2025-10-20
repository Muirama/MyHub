import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ComponentsPage from "./pages/ComponentsPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
