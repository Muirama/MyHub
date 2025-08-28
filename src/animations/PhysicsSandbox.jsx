import { useRef, useEffect, useState } from "react";

const PhysicsSandbox = ({ gravity = 0.5, friction = 0.9 }) => {
  const canvasRef = useRef(null);
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Ball {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 4 - 2;
        this.vy = Math.random() * 2;
        this.radius = 20;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      }
      update() {
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;

        // collision avec le sol
        if (this.y + this.radius > height) {
          this.y = height - this.radius;
          this.vy *= -friction;
        }
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.vx *= -friction;
        }
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      balls.forEach((ball) => {
        ball.update();
        ball.draw(ctx);
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleClick = (e) => {
      setBalls((prev) => [...prev, new Ball(e.clientX, e.clientY)]);
    };
    canvas.addEventListener("click", handleClick);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [balls, gravity, friction]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default PhysicsSandbox;
