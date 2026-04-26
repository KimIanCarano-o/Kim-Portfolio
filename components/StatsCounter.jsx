'use client';

import { useEffect, useState, useRef } from 'react';

export default function StatsCounter({ target = 0, suffix = '', duration = 1200 }) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  // Step 1 — watch when the number becomes visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Step 2 — only animate once it's visible
  useEffect(() => {
    if (!hasStarted) return;

    const to = Number(target);
    if (Number.isNaN(to)) { setValue(0); return; }

    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) window.requestAnimationFrame(step);
    };

    const id = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(id);
  }, [hasStarted, target, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}