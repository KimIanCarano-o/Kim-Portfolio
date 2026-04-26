// app/works/page.jsx  — Works (Server Component shell)
import WorksClient from '@/components/WorksClient';
import '@/styles/Works.css';

export const metadata = {
  title: 'Works — Portfolio',
};

export default function WorksPage() {
  return (
    <main>
      <WorksClient />
    </main>
  );
}
