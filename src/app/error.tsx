'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Etwas ist schiefgelaufen!</h2>
        <p className="text-muted-foreground mb-4">
          Es ist ein unerwarteter Fehler aufgetreten.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
