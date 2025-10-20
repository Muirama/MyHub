import { useEffect, useRef } from "react";

const FallingLeaves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const colors = ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#228B22"];
    const leaves = [];

    class Leaf {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.size = 15 + Math.random() * 20;
        this.speed = 1 + Math.random() * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * 360;
      }
      update(canvas) {
        this.y += this.speed;
        this.x += Math.sin(this.y / 50) * 2;
        this.rotation += 2;
        if (this.y > canvas.height) this.y = -this.size;
      }
      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size / 2, this.size, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 30; i++) leaves.push(new Leaf(canvas.width, canvas.height));

    let rafId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      leaves.forEach((leaf) => {
        leaf.update(canvas);
        leaf.draw(ctx);
      });
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block", background: "skyblue" }} />;
};

export default FallingLeaves;
