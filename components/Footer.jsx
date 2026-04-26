// components/Footer.jsx  — Server Component
import Link from 'next/link';
import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copy">
        © {year} Your Name. All rights reserved.
      </span>
      <span className="footer__logo">Your Name</span>
      <Link href="/" className="footer__back">
        Back to top ↑
      </Link>
    </footer>
  );
}
