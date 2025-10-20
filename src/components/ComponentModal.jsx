import React, { useEffect, useState, Suspense } from "react";

export default function ComponentModal({ item, onClose }) {
  const [Loaded, setLoaded] = useState(null);

  useEffect(() => {
    if (!item) return;
    const load = async () => {
      try {
        // dynamic import based on path (simple mapping)
        const mapping = {
          'CardGlass': () => import('./CardGlass'),
          'SkillBar': () => import('./SkillBar'),
          'Timeline': () => import('./Timeline')
        };
        const loader = mapping[item.name.replace(/\s+/g, '')] || mapping[item.name];
        if (loader) {
          const mod = await loader();
          setLoaded(() => mod.default || null);
        } else {
          setLoaded(() => null);
        }
      } catch (e) {
        console.error(e);
        setLoaded(() => null);
      }
    };
    load();
  }, [item]);

  if (!item) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(2,6,23,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 80 }} onClick={onClose}>
      <div style={{ width: '90%', maxWidth: 900, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.05))', borderRadius: 12, padding: 18 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>{item.name}</h3>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--muted)', fontSize: 18 }}>✕</button>
        </div>
        <div style={{ marginTop: 12 }}>
          {Loaded ? (
            <Suspense fallback={<div>Loading component...</div>}>
              <Loaded />
            </Suspense>
          ) : (
            <div className="muted">No live preview available</div>
          )}
        </div>
      </div>
    </div>
  );
}
