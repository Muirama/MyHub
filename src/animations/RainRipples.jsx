import { useRef, useEffect } from "react";

const RainRipples = ({
  dropCount = 50,
  rippleColor = "rgba(173,216,230,0.6)",
}) => {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Drop {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 0;
        this.speed = 0.05 + Math.random() * 0.15; // plus lent
        this.maxRadius = 30 + Math.random() * 20; // éclaboussures plus grandes et durables
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

    dropsRef.current = Array.from({ length: dropCount }, () => new Drop());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      dropsRef.current.forEach((d) => {
        d.update();
        d.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dropsRef.current = Array.from({ length: dropCount }, () => new Drop());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dropCount, rippleColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default RainRipples;
