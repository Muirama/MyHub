import { useState } from "react";
import { projects } from "../data/projects";
import Card from "../components/Card";
import Modal from "../components/Modal";

const AnimationsPage = () => {
  const [active, setActive] = useState(null);
  const animationProjects = projects.filter((p) => p.category === "Animations");

  return (
    <div
      style={{
        padding: "2rem",
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h1>Animations</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "1rem",
        }}
      >
        {animationProjects.map((proj) => (
          <Card key={proj.id} title={proj.name} onClick={() => setActive(proj)}>
            <p>Click to view</p>
          </Card>
        ))}
      </div>

      {active && (
        <Modal onClose={() => setActive(null)}>
          <div style={{ width: "90vw", height: "80vh" }}>
            <active.component />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AnimationsPage;
