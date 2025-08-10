"use client";
import { useEffect } from "react";

export default function RainEffect() {
  useEffect(() => {
    const canvas = document.getElementById("rainCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    let drops: { x: number; y: number; length: number; speed: number }[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = Array.from({ length: 150 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 5 + 2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 1;

      drops.forEach(drop => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
      });
      update();
      requestAnimationFrame(draw);
    }

    function update() {
      drops.forEach(drop => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });
    }

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas id="rainCanvas" className="fixed inset-0 z-0" />;
}
