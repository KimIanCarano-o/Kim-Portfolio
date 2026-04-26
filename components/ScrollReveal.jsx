'use client';

// components/ScrollReveal.jsx
// Drop-in replacement for the useScrollReveal hook.
// Wraps children in a div (or custom tag) with the .reveal class
// and observes it via IntersectionObserver.

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', tag: Tag = 'div', ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
