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
        // Spawn from bottom, but only in random horizontal spots
        // so smoke doesn't cover the whole screen evenly
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 100 + 40;
        this.speedY = Math.random() * 0.3 + 0.08;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = 0;
        // KEY: very low max opacity so black always shows through
        this.targetOpacity = Math.random() * 0.025 + 0.008;
        this.life = 0;
        this.maxLife = Math.random() * 400 + 250;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.002;
        this.wobble = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.angle += this.angleSpeed;
        this.x += this.speedX + Math.sin(this.angle) * this.wobble;
        this.y -= this.speedY;
        this.size += 0.25;
        this.life++;

        // Slow fade in
        if (this.opacity < this.targetOpacity) {
          this.opacity += 0.0003;
        }

        // Start fading out after 60% of life
        if (this.life > this.maxLife * 0.6) {
          this.opacity -= 0.0002;
        }

        if (this.opacity <= 0 && this.life > this.maxLife * 0.5) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * 0.2);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0,   `rgba(180, 165, 140, ${this.opacity})`);
        gradient.addColorStop(0.4, `rgba(130, 118, 100, ${this.opacity * 0.5})`);
        gradient.addColorStop(1,   `rgba(60, 55, 48, 0)`);

        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.4, this.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
    }

    // KEY: only 12 particles max — sparse so black shows through
    for (let i = 0; i < 12; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      p.opacity = Math.random() * 0.015;
      p.life = Math.random() * p.maxLife * 0.4;
      p.size = Math.random() * 80 + 40;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Max 15 particles total at any time
      if (particles.length < 15 && Math.random() < 0.008) {
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