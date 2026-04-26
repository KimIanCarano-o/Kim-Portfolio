// app/about/page.jsx  — About (Server Component)
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import '@/styles/About.css';

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// ✏️ Edit your skills here
const SKILLS = [
  {
    name: 'Skill One',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Skill Two',
    desc: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    name: 'Skill Three',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    name: 'Skill Four',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate.',
  },
];

// ✏️ Edit your stats here
const STATS = [
  { number: '5+',  label: 'Years experience' },
  { number: '40+', label: 'Projects delivered' },
  { number: '20+', label: 'Happy clients' },
];

export const metadata = {
  title: 'About — Portfolio',
};

export default function AboutPage() {
  return (
    <main>
      <section className="about">
        {/* ── Photo column ──────────────── */}
        <div className="about__img-col">
          {/* ✏️ REPLACE: swap the div below with:
              <Image
                className="about__photo"
                src="/images/about.jpg"
                alt="Your Name"
                fill
                style={{ objectFit: 'cover' }}
              />
          */}
         <Image
                className="about__photo"
                src="/images/about.jpg"
                alt="Kim Ian Carano-o"
                fill
                style={{ objectFit: 'cover' }}
              />
        </div>

        {/* ── Content column ────────────── */}
        <div className="about__content">
          <ScrollReveal tag="p" className="section-label">About me</ScrollReveal>

          <ScrollReveal tag="p" className="about__intro">
            Hi, I&apos;m <em>Kim Ian Carano-o</em> — a creative professional based in
            Your City.
          </ScrollReveal>

          <ScrollReveal className="about__bio">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal className="about__stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__number">{s.number}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </ScrollReveal>

          {/* Skills grid */}
          <ScrollReveal className="about__skills">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="skill-card">
                <p className="skill-card__name">{skill.name}</p>
                <p className="skill-card__desc">{skill.desc}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal tag="span">
            <Link href="/contact" className="about__cta">
              Get in touch →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
