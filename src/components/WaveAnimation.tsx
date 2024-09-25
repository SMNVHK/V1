import React, { useEffect, useRef } from 'react';

const WaveAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    const opt = {
      particles: window.innerWidth / 500 ? 1000 : 500,
      noiseScale: 0.009,
      angle: Math.PI / 180 * -90,
      h1: Math.floor(Math.random() * 360),
      h2: Math.floor(Math.random() * 360),
      s1: Math.floor(20 + Math.random() * 70),
      s2: Math.floor(20 + Math.random() * 70),
      l1: Math.floor(30 + Math.random() * 50),
      l2: Math.floor(30 + Math.random() * 50),
      strokeWeight: 1.2,
      tail: 82,
    };

    class Particle {
      x: number;
      y: number;
      lx: number;
      ly: number;
      vx: number;
      vy: number;
      ax: number;
      ay: number;
      hueSemen: number;
      hue: number;
      sat: number;
      light: number;
      maxSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.lx = x;
        this.ly = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.hueSemen = Math.random();
        this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
        this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
        this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
        this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
      }

      update(width: number, height: number, time: number) {
        this.follow(time);
        
        this.vx += this.ax;
        this.vy += this.ay;
        
        const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const a = Math.atan2(this.vy, this.vx);
        const m = Math.min(this.maxSpeed, p);
        this.vx = Math.cos(a) * m;
        this.vy = Math.sin(a) * m;
        
        this.x += this.vx;
        this.y += this.vy;
        this.ax = 0;
        this.ay = 0;
        
        this.edges(width, height);
      }

      follow(time: number) {
        const angle = (noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale)) * Math.PI * 0.5 + opt.angle;
        this.ax += Math.cos(angle);
        this.ay += Math.sin(angle);
      }

      edges(width: number, height: number) {
        if (this.x < 0) {
          this.x = width;
          this.updatePrev();
        }
        if (this.x > width) {
          this.x = 0;
          this.updatePrev();
        }
        if (this.y < 0) {
          this.y = height;
          this.updatePrev();
        }
        if (this.y > height) {
          this.y = 0;
          this.updatePrev();
        }
      }

      updatePrev() {
        this.lx = this.x;
        this.ly = this.y;
      }

      render(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.lx, this.ly);
        ctx.stroke();
        this.updatePrev();
      }
    }

    // Initialisation
    let particles: Particle[] = [];
    let time = 0;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < opt.particles; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }
      ctx.lineWidth = opt.strokeWeight;
    };

    const animate = () => {
      time++;
      ctx.fillStyle = `rgba(0, 0, 0, ${(100 - opt.tail) / 100})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(canvas.width, canvas.height, time);
        p.render(ctx);
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    zIndex: -1,
    opacity: 0.3 // Ajoutez cette ligne pour contrôler l'opacité
  }} />;
};

// Fonction noise (simplex noise)
function noise(x: number, y: number, z: number): number {
  // Implémentation simplifiée du bruit de Perlin
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;

  x -= Math.floor(x);
  y -= Math.floor(y);
  z -= Math.floor(z);

  const u = fade(x);
  const v = fade(y);
  const w = fade(z);

  const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z;
  const B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;

  return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z),
    grad(p[BA], x - 1, y, z)),
    lerp(u, grad(p[AB], x, y - 1, z),
      grad(p[BB], x - 1, y - 1, z))),
    lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1),
      grad(p[BA + 1], x - 1, y, z - 1)),
      lerp(u, grad(p[AB + 1], x, y - 1, z - 1),
        grad(p[BB + 1], x - 1, y - 1, z - 1))));
}

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(t: number, a: number, b: number): number {
  return a + t * (b - a);
}

function grad(hash: number, x: number, y: number, z: number): number {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

const p = new Array(512);
for (let i = 0; i < 256; i++) {
  p[i] = p[i + 256] = Math.floor(Math.random() * 256);
}

export default WaveAnimation;