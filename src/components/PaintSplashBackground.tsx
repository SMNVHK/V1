import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface PaintSplashBackgroundProps {
  initialColor: string;
}

const PaintSplashBackground: React.FC<PaintSplashBackgroundProps> = ({ initialColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const splashes: any[] = [];

    const createSplash = (x: number, y: number, color: string) => {
      return {
        x,
        y,
        radius: 0,
        color,
        opacity: 1,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner le fond avec la couleur initiale
      ctx.fillStyle = initialColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      splashes.forEach((splash) => {
        ctx.beginPath();
        ctx.arc(splash.x, splash.y, splash.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${splash.color}, ${splash.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const addSplash = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = `${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`;
      const splash = createSplash(x, y, color);
      splashes.push(splash);

      anime({
        targets: splash,
        radius: anime.random(50, 200),
        opacity: 0,
        easing: 'easeOutExpo',
        duration: anime.random(1000, 3000),
        complete: () => {
          const index = splashes.indexOf(splash);
          if (index > -1) splashes.splice(index, 1);
        },
      });
    };

    animate();

    const interval = setInterval(addSplash, 500);

    return () => {
      clearInterval(interval);
    };
  }, [initialColor]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default PaintSplashBackground;