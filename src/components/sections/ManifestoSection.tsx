'use client';

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-32 md:py-40 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-8 opacity-0 animate-[fadeInUp_1s_0.2s_forwards]">
            Architektonische Meisterwerke.{' '}
            <span className="text-primary">
              Für Kenner außergewöhnlicher Lebensräume.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
            Wir kuratieren exklusive Immobilien-Portfolios für eine anspruchsvolle Klientel, 
            die Wert auf Einzigartigkeit, Qualität und visionäre Architektur legt. 
            Jede Vermittlung ist eine Komposition aus Ästhetik, Funktion und Emotion.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
            <div className="text-center">
              <div className="text-4xl font-display text-primary mb-4">15+</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                Jahre Expertise
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-primary mb-4">300+</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                Exklusive Vermittlungen
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-primary mb-4">250 Mio. €</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                Transaktionsvolumen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
