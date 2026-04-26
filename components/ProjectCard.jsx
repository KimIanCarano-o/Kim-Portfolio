// components/ProjectCard.jsx  — Server Component
// Props:
//   title    — project title
//   category — e.g. "Branding"
//   year     — e.g. "2024"
//   imgSrc   — path to image (leave undefined to show placeholder)
//   imgAlt   — alt text for real image
//   hint     — placeholder size hint, e.g. "1920 × 1080"

import Image from 'next/image';

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export default function ProjectCard({ title, category, year, imgSrc, imgAlt, hint }) {
  return (
    <article className="project-card reveal">
      <div className="project-card__img-wrap">
        {imgSrc ? (
          // ✏️ Replace: set imgSrc in your projects data
          <Image
            src={imgSrc}
            alt={imgAlt || title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          // Placeholder — remove once you add real images
          <div className="project-card__placeholder">
            <ImageIcon />
            {hint || 'Project image'}
          </div>
        )}
        <div className="project-card__overlay" />
      </div>

      <div className="project-card__meta">
        <div>
          <p className="project-card__title">{title}</p>
          <p className="project-card__cat">{category}</p>
        </div>
        <span className="project-card__year">{year}</span>
      </div>
    </article>
  );
}
