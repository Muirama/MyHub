import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AnimationsPage from "./pages/AnimationsPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animations" element={<AnimationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
