// app/contact/page.jsx  — Contact (Server Component shell)
import ContactClient from '@/components/ContactClient';
import '@/styles/Contact.css';

export const metadata = {
  title: 'Contact — Portfolio',
};

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  );
}
