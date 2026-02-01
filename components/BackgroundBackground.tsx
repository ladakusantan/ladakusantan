
import React, { useEffect, useRef } from 'react';

const BackgroundBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    const particles: any[] = [];
    // Significantly reduced particle count for mobile
    const particleCount = isMobile ? 20 : 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid only on desktop
      if (!isMobile) {
        ctx.strokeStyle = 'rgba(0, 255, 204, 0.01)';
        ctx.lineWidth = 0.5;
        const gridSize = 80;

        for (let x = 0; x <= width; x += gridSize) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
        }
        for (let y = 0; y <= height; y += gridSize) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
        }
      }

      // Draw particles (optimized loop)
      const len = particles.length;
      ctx.fillStyle = `rgba(0, 255, 204, 0.15)`; // Constant fill style for potentially batched drawing

      for (let i = 0; i < len; i++) {
        const p = particles[i];
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.rect(p.x, p.y, p.size, p.size);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;
      }
      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#030303]"
    />
  );
};

export default BackgroundBackground;
