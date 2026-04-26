# Portfolio — Next.js 14

A creative portfolio built with **Next.js 14 App Router**, ready to deploy on **Vercel**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-nextjs/
├── app/                    # App Router pages
│   ├── layout.jsx          # Root layout (Navbar + Footer + fonts)
│   ├── page.jsx            # Home
│   ├── works/page.jsx      # Works
│   ├── about/page.jsx      # About
│   ├── contact/page.jsx    # Contact
│   └── not-found.jsx       # 404
├── components/
│   ├── Navbar.jsx          # 'use client' — scroll + mobile menu
│   ├── Footer.jsx          # Server Component
│   ├── ProjectCard.jsx     # Server Component
│   ├── ScrollReveal.jsx    # 'use client' — IntersectionObserver wrapper
│   ├── WorksClient.jsx     # 'use client' — filter state
│   └── ContactClient.jsx   # 'use client' — form state + validation
├── data/
│   └── projects.js         # ✏️ Edit your projects here
├── styles/                 # CSS modules (same as original)
│   ├── global.css
│   ├── Navbar.css
│   ├── Home.css
│   ├── About.css
│   ├── Works.css
│   ├── Contact.css
│   └── Footer.css
└── public/
    └── images/             # ✏️ Drop your images here
```

## Customising Your Content

| What to change | Where |
|---|---|
| Your name | `components/Navbar.jsx`, `components/Footer.jsx`, `app/about/page.jsx` |
| Bio text & skills | `app/about/page.jsx` |
| Projects | `data/projects.js` |
| Social links | `components/ContactClient.jsx` |
| Hero image | `app/page.jsx` — swap placeholder div for `<Image>` |
| About photo | `app/about/page.jsx` — swap placeholder div for `<Image>` |
| Project images | Add `imgSrc: '/images/your-file.jpg'` in `data/projects.js` |

## Wiring up the Contact Form

In `components/ContactClient.jsx`, find the `handleSubmit` function and replace the simulated delay with your preferred service:

**Formspree** (free tier, easiest):
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(fields),
});
```

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Next.js — click **Deploy**. Done!

No extra configuration needed. Next.js is Vercel's native framework.
