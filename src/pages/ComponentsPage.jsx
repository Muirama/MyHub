import React, { useState } from "react";
import { componentsList } from "../data/components";
import ComponentCard from "../components/ComponentCard";
import ComponentModal from "../components/ComponentModal";

export default function ComponentsPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="site-container">
      <h2>Components</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginTop: 12 }}>
        {componentsList.map(c => (
          <ComponentCard key={c.id} item={c} onOpen={setActive} />
        ))}
      </div>

      <ComponentModal item={active} onClose={() => setActive(null)} />
    </div>
  );
}
