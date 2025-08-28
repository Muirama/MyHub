import { useRef, useEffect } from "react";

const CursorPortal = ({
  portalRadius = 80,
  bgColor = "#000",
  portalColor = "rgba(0,255,255,0.3)",
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const animate = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.beginPath();
      ctx.arc(
        mouseRef.current.x,
        mouseRef.current.y,
        portalRadius,
        0,
        Math.PI * 2
      );
      ctx.clip();

      // Dessin du fond du portail (par exemple un dégradé ou motif)
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        portalRadius
      );
      gradient.addColorStop(0, portalColor);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.restore();
      requestAnimationFrame(animate);
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
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, [portalRadius, bgColor, portalColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};

export default CursorPortal;
