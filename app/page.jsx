import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import ScrollReveal from '@/components/ScrollReveal';
import '@/styles/Home.css';

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const WordPressIcon = () => (
  <svg viewBox="0 0 20 20" width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.775 5.202C18.818 5.521 18.842 5.862 18.842 6.23C18.842 7.988 18.679 8.087 15.027 18.644C18 16.91 20 13.689 20 10C20 8.261 19.556 6.626 18.775 5.202ZM10.176 10.875L7.175 19.593C9.2 20.189 11.346 20.128 13.321 19.434C13.294 19.391 13.27 19.345 13.25 19.296L10.176 10.875ZM16.751 9.495C16.751 8.259 16.307 7.403 15.926 6.737C15.42 5.913 14.944 5.216 14.944 4.392C14.944 3.473 15.642 2.617 16.624 2.617C16.668 2.617 16.71 2.623 16.753 2.625C14.974 0.995 12.604 0 10 0C6.507 0 3.433 1.792 1.645 4.507C2.282 4.527 3.137 4.535 4.954 4.393C5.493 4.361 5.556 5.153 5.018 5.216C5.018 5.216 4.476 5.28 3.873 5.312L7.515 16.144L9.703 9.58L8.145 5.311C7.607 5.28 7.097 5.216 7.097 5.216C6.558 5.184 6.621 4.36 7.16 4.392C9.227 4.551 10.285 4.563 12.459 4.392C12.998 4.36 13.062 5.152 12.523 5.216C12.523 5.216 11.98 5.28 11.378 5.311L14.992 16.061C16.419 11.293 16.751 10.495 16.751 9.495ZM0 10C0 13.958 2.3 17.379 5.636 19L0.866 5.93C0.311 7.174 0 8.55 0 10Z"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 16 16" width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"/>
    <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"/>
    <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"/>
  </svg>
);

const UIIcon = () => (
  <svg viewBox="0 0 30 30" width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 15c-.797 0-1.456.314-1.88.793-.424.48-.62 1.098-.62 1.707 0 .78-.568 1.418-.81 1.607-.372.294-.165.892.31.893H17c.786 0 1.517-.23 2.072-.662.555-.432.928-1.09.928-1.838 0-.683-.193-1.32-.63-1.785C18.93 15.25 18.273 15 17.5 15zm0 1c.57 0 .914.16 1.14.4.227.24.36.602.36 1.1 0 .432-.19.776-.54 1.05-.353.272-.872.45-1.46.45h-1.423c.237-.4.422-.9.422-1.5 0-.39.13-.772.368-1.043.24-.27.583-.457 1.132-.457zM29.284 5.01c-.126.015-.233.048-.352.09-.238.08-.513.21-.838.374-.65.33-1.477.813-2.35 1.365-1.75 1.103-3.66 2.457-4.642 3.438-.935.934-1.616 1.784-1.936 2.637-.32.852-.186 1.777.478 2.44.665.665 1.59.8 2.442.48.853-.32 1.703-1.002 2.637-1.936.98-.983 2.335-2.893 3.44-4.64.552-.876 1.035-1.704 1.365-2.353.165-.324.293-.6.375-.838.04-.12.072-.226.086-.352.013-.126.047-.327-.167-.54-.214-.215-.413-.18-.54-.167zm-.647 1.444c-.307.603-.78 1.416-1.32 2.27-1.08 1.713-2.46 3.628-3.3 4.468-.888.887-1.678 1.48-2.283 1.707-.604.225-.954.177-1.383-.25-.427-.43-.475-.78-.25-1.384.228-.604.82-1.394 1.71-2.28.84-.84 2.754-2.22 4.466-3.3.856-.542 1.668-1.015 2.272-1.322.134-.036.13.022.09.09zM2.5 8h17c.277 0 .5.223.5.5s-.223.5-.5.5h-17c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zM7 6.5c0 .276-.224.5-.5.5S6 6.776 6 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S4 6.776 4 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S2 6.776 2 6.5s.224-.5.5-.5.5.224.5.5zM1.5 4C.678 4 0 4.678 0 5.5v19c0 .822.678 1.5 1.5 1.5h25c.822 0 1.5-.678 1.5-1.5v-12c0-.668-1-.665-1 0v12c0 .286-.214.5-.5.5h-25c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5h25c.665 0 .657-1 0-1z"/>
  </svg>
);

const TEASER_PROJECTS = PROJECTS.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="home">
        <div className="home__left">
          <p className="home__tag">Available for projects</p>

          <h1 className="home__title">
            Creative<em>Portfolio</em><br />
            &amp; Work
          </h1>

          <div className="home__badges">
            <div className="home__badge">
              <span className="home__badge-icon"><WordPressIcon /></span>
              WordPress Developer
            </div>
            <div className="home__badge-divider" />
            <div className="home__badge">
              <span className="home__badge-icon"><UIIcon /></span>
              UI Designer
            </div>
            <div className="home__badge-divider" />
            <div className="home__badge">
              <span className="home__badge-icon"><CodeIcon /></span>
              Vibe Coder
            </div>
          </div>

          <p className="home__sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua — crafting
            digital experiences that leave a lasting impression.
          </p>

          <Link href="/works" className="home__cta">
            View my work <span>→</span>
          </Link>
        </div>

        <div className="home__right">
          <div className="home__hero-img">
            <Image
              src="/images/Hero Image.png"
              alt="Hero"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        <div className="home__scroll">
          <span className="home__scroll-line" />
          Scroll
        </div>
      </section>

      <section className="home__works">
        <ScrollReveal className="home__works-header">
          <h2 className="home__works-title">Selected Works</h2>
          <Link href="/works" className="home__works-link">
            View all →
          </Link>
        </ScrollReveal>

        <div className="home__teaser-grid">
          {TEASER_PROJECTS.map((project) => (
            <Link href="/works" key={project.id} className="home__teaser-item reveal">
              <div className="home__teaser-img">
                {project.imgSrc ? (
                  <Image src={project.imgSrc} alt={project.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div className="home__teaser-placeholder">
                    <ImageIcon />
                    {project.hint || 'Project image'}
                  </div>
                )}
              </div>
              <p className="home__teaser-name">{project.title}</p>
              <p className="home__teaser-cat">{project.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}