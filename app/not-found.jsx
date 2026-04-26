// app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '6rem',
          color: 'var(--accent)',
          fontStyle: 'italic',
          fontWeight: 300,
        }}
      >
        404
      </h1>
      <p
        style={{
          color: 'var(--muted)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Page not found
      </p>
      <Link
        href="/"
        style={{
          color: 'var(--accent)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          marginTop: '1rem',
          borderBottom: '1px solid var(--accent)',
          paddingBottom: '2px',
        }}
      >
        Go home →
      </Link>
    </main>
  );
}
