import { useRef, useEffect } from "react";

const DynamicOcean = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  const layers = [
    { color: "rgba(30,144,255,0.4)", ampX: 20, ampY: 10, speed: 0.005 },
    { color: "rgba(30,144,255,0.6)", ampX: 30, ampY: 15, speed: 0.008 },
    { color: "rgba(30,144,255,0.9)", ampX: 40, ampY: 20, speed: 0.012 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particules flottantes
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: (Math.random() * height) / 2,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));

    const noise = (x, y) => Math.sin(x * 0.01 + y * 0.01);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      // Dessin des vagues
      layers.forEach((layer, i) => {
        ctx.strokeStyle = layer.color;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
          const y =
            height / 2 +
            Math.sin(x * 0.01 + Date.now() * layer.speed) * layer.ampY;
          ctx.lineTo(x, y + i * 10); // Calques décalés
        }
        ctx.stroke();
      });

      // Particules reflets
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.fill();
        p.y += p.speed;
        if (p.y > height) p.y = 0;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouse = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default DynamicOcean;
