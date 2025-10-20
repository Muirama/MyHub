import { useEffect, useRef } from "react";

const OrbitingCubes = ({ previewMode = false }) => {
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

    const cubes = [];
    const count = previewMode ? 6 : 18;
    for (let i = 0; i < count; i++) {
      cubes.push({
        angle: Math.random() * Math.PI * 2,
        radius: (Math.random() * 0.4 + 0.2) * Math.min(width, height) / 2,
        size: (previewMode ? 8 : 18) + Math.random() * (previewMode ? 8 : 20),
        speed: (Math.random() * 0.6 + 0.2) * (previewMode ? 0.2 : 1)
      });
    }

    let rafId;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      cubes.forEach((c, i) => {
        c.angle += 0.01 * c.speed;
        const x = Math.cos(c.angle) * c.radius;
        const y = Math.sin(c.angle) * c.radius * 0.6;
        const scale = 0.6 + (y / (height / 2)) * 0.4;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(c.angle / 2);
        ctx.fillStyle = `rgba(96,165,250,${0.25 + i / cubes.length * 0.6})`;
        const s = c.size * scale;
        ctx.fillRect(-s/2, -s/2, s, s);
        ctx.restore();
      });
      ctx.restore();
      rafId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', onResize);
    draw();
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(rafId); };
  }, [previewMode]);

  return <canvas ref={canvasRef} className="animation-canvas" style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default OrbitingCubes;
