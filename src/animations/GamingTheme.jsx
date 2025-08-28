import { useEffect, useRef } from "react";

const GamingTheme = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
    }));

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "cyan";
      stars.forEach((s) => {
        ctx.fillRect(s.x, s.y, s.size, s.size);
        s.y += 2;
        if (s.y > canvas.height) s.y = 0;
      });

      ctx.fillStyle = "magenta";
      ctx.fillRect(0, canvas.height - 100, canvas.width, 5);

      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default GamingTheme;
