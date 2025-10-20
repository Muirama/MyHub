import { useEffect, useRef } from "react";

// FallingFlowers
// Props: previewMode (boolean) to reduce particle count and work for card previews
const FallingFlowers = ({ previewMode = false, count = 25 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const flowers = ["🌸", "🌼", "💮", "🌺", "🌻"];
    const petals = [];

    class Petal {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.size = (previewMode ? 12 : 20) + Math.random() * (previewMode ? 12 : 20);
        this.speed = (previewMode ? 0.6 : 1) + Math.random() * (previewMode ? 1 : 2);
        this.emoji = flowers[Math.floor(Math.random() * flowers.length)];
      }
      update(canvas) {
        this.y += this.speed;
        this.x += Math.sin(this.y / 40) * 1.5;
        if (this.y > canvas.height) this.y = -this.size;
      }
      draw(ctx) {
        ctx.font = `${this.size}px serif`;
        ctx.fillText(this.emoji, this.x, this.y);
      }
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.clientHeight || window.innerHeight);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const resize = () => {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      petals.length = 0;
      const target = previewMode ? Math.max(6, Math.floor((count / 4))) : count;
      for (let i = 0; i < target; i++) petals.push(new Petal(width, height));
    };

    resize();
    window.addEventListener("resize", resize);

    let rafId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((p) => {
        p.update({ width, height });
        p.draw(ctx);
      });
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, [previewMode, count]);

  return <canvas ref={canvasRef} className="animation-canvas" style={{ width: "100%", height: "100%", display: "block" }} />;
};

export default FallingFlowers;
