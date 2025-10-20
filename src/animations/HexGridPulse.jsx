import { useEffect, useRef } from "react";

const HexGridPulse = ({ previewMode = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.clientWidth || window.innerWidth;
    let height = canvas.clientHeight || window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);

    const size = previewMode ? 18 : 36;
    const cols = Math.ceil(width / (size * 1.5)) + 2;
    const rows = Math.ceil(height / (size * Math.sqrt(3))) + 2;

    const hexTo = (x, y, r) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i;
        const xi = x + Math.cos(angle) * r;
        const yi = y + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(xi, yi); else ctx.lineTo(xi, yi);
      }
      ctx.closePath();
    };

    let t = 0;
    let rafId;
    const animate = () => {
      t += 0.02;
      ctx.clearRect(0,0,width,height);
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * size * 1.5;
          const y = row * size * Math.sqrt(3) + (col % 2 ? (size * Math.sqrt(3))/2 : 0);
          const pulse = 0.5 + 0.5 * Math.sin((col+row)+t + (col*0.1));
          const alpha = 0.05 + pulse * 0.25;
          hexTo(x + size, y + size, size * (0.6 + pulse*0.4));
          ctx.fillStyle = `rgba(96,165,250,${alpha})`;
          ctx.fill();
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();
    const onResize = () => { width = canvas.clientWidth || window.innerWidth; height = canvas.clientHeight || window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(rafId); };
  }, [previewMode]);

  return <canvas ref={canvasRef} className="animation-canvas" style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default HexGridPulse;
