'use client';

// components/WorksClient.jsx
import { useState, useEffect } from 'react';
import { PROJECTS, FILTER_TAGS } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function WorksClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  // Re-trigger scroll reveal whenever filter changes
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    // Reset visibility so newly rendered cards can animate in
    els.forEach((el) => el.classList.remove('visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section className="works">
      {/* ── Header ──────────────────────── */}
      <div className="works__header reveal">
        <div>
          <p className="section-label">Selected works</p>
          <h1 className="works__title">Portfolio</h1>
        </div>
        <span className="works__count">
          {String(filtered.length).padStart(2, '0')} projects
        </span>
      </div>

      {/* ── Filter tabs ─────────────────── */}
      <div className="works__filters reveal">
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            className={`filter-btn${activeFilter === tag ? ' active' : ''}`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Grid ────────────────────────── */}
      <div className="works__grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            year={project.year}
            imgSrc={project.imgSrc}
            imgAlt={project.title}
            hint={project.hint}
          />
        ))}
      </div>
    </section>
  );
}
