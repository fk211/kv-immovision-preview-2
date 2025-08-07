import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Seite nicht gefunden</h2>
        <p className="text-muted-foreground mb-8">
          Die angeforderte Seite konnte nicht gefunden werden.
        </p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
