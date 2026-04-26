'use client';

// components/ContactClient.jsx
import { useState, useEffect } from 'react';

// ✏️ Update your social links here
const SOCIALS = [
  { icon: '✉',  label: 'hello@yourname.com',      href: 'mailto:hello@yourname.com' },
  { icon: 'in', label: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname' },
  { icon: '↗',  label: 'github.com/yourname',      href: 'https://github.com/yourname' },
  { icon: '◉',  label: 'instagram.com/yourname',   href: 'https://instagram.com/yourname' },
];

const INITIAL = { name: '', email: '', subject: '', message: '' };

export default function ContactClient() {
  const [fields,  setFields]  = useState(INITIAL);
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Validation ──────────────────────────────── */
  function validate() {
    const e = {};
    if (!fields.name.trim())                      e.name    = 'Name is required.';
    if (!fields.email.trim())                     e.email   = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email   = 'Enter a valid email.';
    if (!fields.message.trim())                   e.message = 'Message is required.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  /* ── Submit ──────────────────────────────────── */
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);

    /*
     * ✏️ WIRE UP YOUR BACKEND HERE
     * Option A — Formspree (free tier):
     *   const res = await fetch('https://formspree.io/f/YOUR_ID', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(fields),
     *   });
     *
     * Option B — EmailJS:
     *   import emailjs from '@emailjs/browser';
     *   await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY');
     *
     * For now, we simulate a network delay:
     */
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSuccess(true);
    setFields(INITIAL);
  }

  return (
    <section className="contact">
      {/* ── Left column ─────────────────── */}
      <div className="contact__left">
        <p className="section-label reveal">Contact</p>

        <h1 className="contact__tagline reveal">
          Let&apos;s create something{' '}
          <em>remarkable</em>{' '}
          together.
        </h1>

        <p className="contact__body reveal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Have a
          project in mind? I would love to hear about it.
        </p>

        <nav className="contact__socials reveal">
          {SOCIALS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="social-link"
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
            >
              <span className="social-link__icon">{icon}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Right column — Form ──────────── */}
      <div className="contact__right">
        {success ? (
          <p className="contact__success">
            ✓ &nbsp;Thank you — I&apos;ll be in touch soon.
          </p>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="form-group reveal">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={fields.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="form-error-msg">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="form-group reveal">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={fields.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="form-error-msg">{errors.email}</span>}
            </div>

            {/* Subject */}
            <div className="form-group reveal">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                value={fields.subject}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="form-group reveal">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project…"
                value={fields.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="form-error-msg">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="contact__submit reveal"
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
