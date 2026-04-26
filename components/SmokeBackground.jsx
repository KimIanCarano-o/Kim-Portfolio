'use client';

import { useEffect, useRef } from 'react';

export default function SmokeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200;
        this.size = Math.random() * 200 + 100;
        this.speedY = Math.random() * 0.25 + 0.05;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.opacity = 0;
        this.targetOpacity = Math.random() * 0.06 + 0.02;
        this.life = 0;
        this.maxLife = Math.random() * 500 + 300;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.002;
        this.wobble = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.angle += this.angleSpeed;
        this.x += this.speedX + Math.sin(this.angle) * this.wobble;
        this.y -= this.speedY;
        this.size += 0.35;
        this.life++;

        // Fade in
        if (this.opacity < this.targetOpacity) {
          this.opacity += 0.0005;
        }

        // Fade out near end of life
        if (this.life > this.maxLife * 0.65) {
          this.opacity -= 0.0003;
        }

        if (this.opacity <= 0 && this.life > this.maxLife * 0.5) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * 0.3);

        // Elongated wispy shape
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0,   `rgba(210, 200, 185, ${this.opacity})`);
        gradient.addColorStop(0.3, `rgba(160, 150, 135, ${this.opacity * 0.7})`);
        gradient.addColorStop(0.6, `rgba(100, 95, 85,   ${this.opacity * 0.3})`);
        gradient.addColorStop(1,   `rgba(50, 45, 40,    0)`);

        ctx.beginPath();
        // Ellipse for wispy tendril shape
        ctx.ellipse(0, 0, this.size * 0.45, this.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
    }

    // Pre-populate particles spread across screen
    for (let i = 0; i < 25; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      p.opacity = Math.random() * 0.04;
      p.life = Math.random() * p.maxLife * 0.5;
      p.size = Math.random() * 180 + 80;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Slowly add more particles over time
      if (particles.length < 35 && Math.random() < 0.03) {
        particles.push(new Particle());
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}