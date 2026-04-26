import { Cormorant_Garamond, DM_Mono, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import '@/styles/global.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio',
  description: 'Creative portfolio & work',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable} ${montserrat.variable}`}>
      <body>
        <SmokeBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}