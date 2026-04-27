// app/about/page.jsx  — About (Server Component)
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import StatsCounter from '@/components/StatsCounter';
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
    name: 'WordPress Development',
    desc: 'Building responsive and high-performance WordPress websites using modern tools and best practices. Focused on clean structure, speed optimization, and scalable solutions for businesses.',
  },
  {
    name: 'AI-Assisted Development',
    desc: 'Utilizing AI tools to streamline coding workflows, improve efficiency, and deliver faster, more accurate results while maintaining high-quality standards.',
  },
  {
    name: 'UI Design & User Experience',
    desc: 'Designing clean, intuitive interfaces that enhance usability and create seamless user experiences across all devices.',
  },
  {
    name: 'Performance & Optimization',
    desc: 'Optimizing websites for speed, responsiveness, and overall performance to ensure smooth user interaction and better engagement.',
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
            Cebu City.
          </ScrollReveal>

          <ScrollReveal className="about__bio">
          <p> I specialize in building modern, high-performance WordPress 
              websites that are designed to be fast, responsive, and user-focused. 
              My approach combines AI-assisted development with clean, intuitive UI design, 
              allowing me to create efficient solutions while maintaining a strong visual experience. 
              By integrating AI into my workflow, I streamline development, write optimized code,
              and deliver projects efficiently without compromising quality. </p> <p> In addition to 
              web development, I also provide reliable data entry and administrative support, ensuring 
              accuracy, organization, and efficiency in handling large sets of information. I create 
              visually engaging graphics for social media and business use, helping brands communicate 
              clearly and maintain a consistent visual identity. </p> <p> From landing pages to full 
              website builds, I focus on creating digital experiences that are both functional and visually
              engaging. I’m passionate about helping businesses establish a strong online presence through websites 
              and content that not only look great but also perform effectively and deliver real value to users. </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal className="about__stats">
            {STATS.map((s) => {
              const match = String(s.number).match(/^(\d+)(\+)?$/);
              const target = match ? Number(match[1]) : 0;
              const suffix = match ? match[2] || '' : '';

              return (
                <div key={s.label} className="stat">
                  <span className="stat__number">
                    <StatsCounter target={target} suffix={suffix} />
                  </span>
                  <span className="stat__label">{s.label}</span>
                </div>
              );
            })}
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
