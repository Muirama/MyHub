import { useEffect, useRef } from "react";

const ParticleField = ({ previewMode = false, particleCount = 80 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.clientWidth || window.innerWidth;
    let height = canvas.clientHeight || window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = previewMode ? Math.max(10, Math.floor(particleCount / 6)) : particleCount;
    const particles = [];
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * (previewMode ? 0.3 : 1.2);
        this.vy = (Math.random() - 0.5) * (previewMode ? 0.3 : 1.2);
        this.r = (previewMode ? 1 : 2) + Math.random() * (previewMode ? 2 : 3);
        this.color = `rgba(255,255,255,${0.08 + Math.random() * 0.6})`;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) particles.push(new Particle());

    let rafId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(ctx); });
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(rafId); };
  }, [previewMode, particleCount]);

  return <canvas ref={canvasRef} className="animation-canvas" style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default ParticleField;
