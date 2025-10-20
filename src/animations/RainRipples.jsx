import { useRef, useEffect } from "react";

const RainRipples = ({ previewMode = false, dropCount = 50, rippleColor = "rgba(173,216,230,0.6)" }) => {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);

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

    class Drop {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 0;
        this.speed = (previewMode ? 0.02 : 0.05) + Math.random() * (previewMode ? 0.08 : 0.15);
        this.maxRadius = (previewMode ? 12 : 30) + Math.random() * (previewMode ? 8 : 20);
      }
      update() {
        this.radius += this.speed;
        if (this.radius > this.maxRadius) {
          this.radius = 0;
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = rippleColor;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    const targetCount = previewMode ? Math.max(6, Math.floor(dropCount / 4)) : dropCount;
    dropsRef.current = Array.from({ length: targetCount }, () => new Drop());

    let rafId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      dropsRef.current.forEach((d) => {
        d.update();
        d.draw(ctx);
      });
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
      dropsRef.current = Array.from({ length: targetCount }, () => new Drop());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [previewMode, dropCount, rippleColor]);

  return (
    <canvas ref={canvasRef} className="animation-canvas" style={{ width: "100%", height: "100%", display: "block" }} />
  );
};

export default RainRipples;
