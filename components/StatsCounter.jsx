'use client';

import { useEffect, useState } from 'react';

export default function StatsCounter({ target = 0, suffix = '', duration = 1200 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = null;
    const from = 0;
    const to = Number(target);
    if (Number.isNaN(to)) {
      setValue(0);
      return;
    }

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationId);
  }, [target, duration]);

  return <>{value}{suffix}</>;
}
