// components/Footer.jsx  — Server Component
import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copy">
        © {year} Your Name. All rights reserved.
      </span>
      <span className="footer__logo">Kim Ian C.</span>
      <a href="#top" className="footer__back">
        Back to top ↑
      </a>
    </footer>
  );
}
