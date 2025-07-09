'use client';

import { useEffect, useRef } from 'react';

export default function PhilosophySection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const philosophyItems = [
    "Diskrete Vermarktung",
    "Kuratierte Akquise", 
    "Architektonische Bewertung",
    "Portfolio-Optimierung",
    "Marktanalyse",
    "Exklusivberatung"
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const handleMouseEnter = () => {
      marquee.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      marquee.style.animationPlayState = 'running';
    };

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="philosophie" className="py-32 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
          Unsere Philosophie
        </h3>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
          Exzellenz als{' '}
          <span className="text-primary">Maßstab</span>
        </h2>
        <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
          Wir sind nicht nur Immobilienmakler – wir sind Architektur-Kuratoren mit einem 
          untrüglichen Gespür für Qualität. Jede Immobilie wird von uns als Investition 
          in Lebensqualität und Wertbeständigkeit verstanden.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div 
          ref={marqueeRef}
          className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap"
        >
          <div className="flex items-center space-x-12 text-4xl md:text-6xl lg:text-7xl font-serif text-muted-foreground/20">
            {/* First set */}
            {philosophyItems.map((item, index) => (
              <span key={`first-${index}`} className="flex items-center">
                <span className="hover:text-primary transition-colors duration-500 cursor-default">
                  {item}
                </span>
                <span className="text-primary mx-8">*</span>
              </span>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {philosophyItems.map((item, index) => (
              <span key={`second-${index}`} className="flex items-center">
                <span className="hover:text-primary transition-colors duration-500 cursor-default">
                  {item}
                </span>
                <span className="text-primary mx-8">*</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-[fadeInUp_1s_0.8s_forwards]">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl font-serif text-primary">K</span>
            </div>
            <h4 className="text-xl font-serif mb-2">Kompetenz</h4>
            <p className="text-sm text-muted-foreground">
              Tiefes Verständnis für Architektur, Markt und Kundenbedürfnisse
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl font-serif text-primary">Q</span>
            </div>
            <h4 className="text-xl font-serif mb-2">Qualität</h4>
            <p className="text-sm text-muted-foreground">
              Höchste Standards in Service, Auswahl und Kundenbetreuung
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl font-serif text-primary">V</span>
            </div>
            <h4 className="text-xl font-serif mb-2">Vertrauen</h4>
            <p className="text-sm text-muted-foreground">
              Langfristige Partnerschaften basierend auf Transparenz und Integrität
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
