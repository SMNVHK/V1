import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { useTheme } from './ThemeSwitch';

interface TransitionAnimationProps {
  onAnimationComplete: (finalColor: string) => void;
}

const TransitionAnimation: React.FC<TransitionAnimationProps> = ({ onAnimationComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [finalColor, setFinalColor] = useState<string>("#041E42");
  const { colors: themeColors, currentTheme } = useTheme(); // Récupérer currentTheme

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cW: number, cH: number;
    let bgColor = themeColors.background;
    const animations: anime.AnimeInstance[] = [];

    // Ajuster les couleurs en fonction du thème
    let primaryColor, secondaryColor;

    switch (currentTheme) {
      case 'blue':
        primaryColor = themeColors.primary;
        secondaryColor = themeColors.secondary;
        break;
      case 'pink':
        primaryColor = themeColors.primary;
        secondaryColor = themeColors.secondary;
        break;
      case 'green':
        primaryColor = themeColors.primary;
        secondaryColor = themeColors.secondary;
        break;
      default:
        primaryColor = '#3f51b5';
        secondaryColor = '#f50057';
    }

    // Inverser les couleurs ici
    [primaryColor, secondaryColor] = [secondaryColor, primaryColor];

    const colors = [primaryColor, secondaryColor];

    let index = 0;
    const colorPicker = {
      next: () => {
        index = (index + 1) % colors.length;
        return colors[index];
      },
      current: () => colors[index]
    };

    const removeAnimation = (animation: anime.AnimeInstance) => {
      const idx = animations.indexOf(animation);
      if (idx > -1) animations.splice(idx, 1);
    };

    const calcPageFillRadius = (x: number, y: number) => {
      const l = Math.max(x - 0, cW - x);
      const h = Math.max(y - 0, cH - y);
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    };

    class Circle {
      constructor(public x: number, public y: number, public r: number, public fill: string, public stroke?: { width: number; color: string }, public opacity?: number) {}
      
      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity || 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        if (this.stroke) {
          ctx.strokeStyle = this.stroke.color;
          ctx.lineWidth = this.stroke.width;
          ctx.stroke();
        }
        if (this.fill) {
          ctx.fillStyle = this.fill;
          ctx.fill();
        }
        ctx.closePath();
        ctx.globalAlpha = 1;
      }
    }

    const handleEvent = (e: MouseEvent) => {
      const currentColor = colorPicker.current();
      const nextColor = colorPicker.next() || currentColor; // Pour le thème bleu, nextColor sera identique
      const targetR = calcPageFillRadius(e.pageX, e.pageY);
      const rippleSize = Math.min(200, (cW * 0.4));
      const minCoverDuration = 750;
      
      const pageFill = new Circle(e.pageX, e.pageY, 0, nextColor);
      const fillAnimation = anime({
        targets: pageFill,
        r: targetR,
        duration: Math.max(targetR / 2, minCoverDuration),
        easing: "easeOutQuart",
        complete: function(){
          bgColor = pageFill.fill;
          setFinalColor(bgColor);
          removeAnimation(fillAnimation);
          onAnimationComplete(bgColor);
        }
      });
      
      const ripple = new Circle(e.pageX, e.pageY, 0, currentColor, { width: 3, color: currentColor }, 1);
      const rippleAnimation: anime.AnimeInstance = anime({
        targets: ripple,
        r: rippleSize,
        opacity: 0,
        easing: "easeOutExpo",
        duration: 900,
        complete: () => removeAnimation(rippleAnimation)
      });
      
      const particles: Circle[] = [];
      for (let i = 0; i < 32; i++) {
        particles.push(new Circle(e.pageX, e.pageY, anime.random(24, 48), currentColor));
      }
      const particlesAnimation: anime.AnimeInstance = anime({
        targets: particles,
        x: (particle: Circle) => particle.x + anime.random(rippleSize, -rippleSize),
        y: (particle: Circle) => particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15),
        r: 0,
        easing: "easeOutExpo",
        duration: anime.random(1000,1300),
        complete: () => removeAnimation(particlesAnimation)
      });

      animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    };

    const resizeCanvas = () => {
      cW = window.innerWidth;
      cH = window.innerHeight;
      canvas.width = cW * devicePixelRatio;
      canvas.height = cH * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const animate = anime({
      duration: Infinity,
      update: function() {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, cW, cH);
        animations.forEach(function(anim) {
          anim.animatables.forEach(function(animatable) {
            (animatable.target as unknown as Circle).draw();
          });
        });
      }
    });

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousedown", handleEvent);

    // Déclenchez l'animation immédiatement
    handleEvent({
      pageX: window.innerWidth / 2,
      pageY: window.innerHeight / 2
    } as MouseEvent);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousedown", handleEvent);
      animate.pause();
    };
  }, [onAnimationComplete, themeColors, currentTheme]); // Ajoutez currentTheme aux dépendances

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 9999,
        backgroundColor: finalColor
      }} 
    />
  );
};

export default TransitionAnimation;