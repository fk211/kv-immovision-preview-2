'use client';

export default function PhilosophySection() {

  return (

    <section id="philosophie" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
          Unsere Philosophie
        </h3>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
          Exzellenz als <span className="text-primary">Maßstab</span>
        </h2>
        <p className="text-xl text-muted-foreground mt-8 max-w-4xl mx-auto opacity-0 animate-[fadeInUp_1s_0.6s_forwards] leading-relaxed">
          Wir sind nicht nur Immobilienmakler – wir sind Architektur-Kuratoren mit einem untrüglichen Gespür für Qualität. 
          Jede Immobilie wird von uns als Investition in Lebensqualität und Wertbeständigkeit verstanden.
          <br /><br />
          Unsere <strong className="text-foreground font-semibold">Kompetenz</strong> beruht auf einem tiefen Verständnis für Architektur, den Markt und die individuellen Bedürfnisse unserer Kunden.
          <br /><br />
          Unsere <strong className="text-foreground font-semibold">Qualität</strong> zeigt sich in höchsten Standards – in der Auswahl der Objekte, im Service und in der persönlichen Betreuung.
          <br /><br />
          Unser Anspruch ist <strong className="text-foreground font-semibold">Vertrauen</strong>: Wir pflegen langfristige Partnerschaften, basierend auf Transparenz, Integrität und Verlässlichkeit.
        </p>
      </div>
    </section>
  );
}
