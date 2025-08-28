import { useEffect, useRef } from "react";

const FallingFlowers = () => {
  const canvasRef = useRef(null);
  const flowers = ["🌸", "🌼", "💮", "🌺", "🌻"];

  const petals = [];

  class Petal {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.size = 20 + Math.random() * 20;
      this.speed = 1 + Math.random() * 2;
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (let i = 0; i < 25; i++) petals.push(new Petal(canvas.width, canvas.height));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((p) => {
        p.update(canvas);
        p.draw(ctx);
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block", background: "lightblue" }} />;
};

export default FallingFlowers;
