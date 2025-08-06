'use client';


import { useEffect, useRef } from 'react';


const PHILOSOPHY_ITEMS = [
  "Diskrete Vermarktung",
  "Kuratierte Akquise",
  "Architektonische Bewertung",
  "Portfolio-Optimierung",
  "Marktanalyse",
  "Exklusivberatung"
];

const VALUES = [
  {
    icon: "K",
    title: "Kompetenz",
    desc: "Tiefes Verständnis für Architektur, Markt und Kundenbedürfnisse"
  },
  {
    icon: "Q",
    title: "Qualität",
    desc: "Höchste Standards in Service, Auswahl und Kundenbetreuung"
  },
  {
    icon: "V",
    title: "Vertrauen",
    desc: "Langfristige Partnerschaften basierend auf Transparenz und Integrität"
  }
];

function Marquee({ items }: { items: string[] }) {
  const marqueeRef = useRef<HTMLDivElement>(null);

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
    <div className="relative select-none" aria-label="Philosophie Marquee">
      <div
        ref={marqueeRef}
        className="flex items-center gap-2 md:gap-4 lg:gap-8 animate-[marquee_40s_linear_infinite] whitespace-nowrap text-3xl md:text-5xl lg:text-6xl font-serif text-muted-foreground/30 leading-tight"
        tabIndex={0}
        role="list"
        style={{ minHeight: '2.8em' }}
      >
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center">
            <span className="hover:text-primary transition-colors duration-500 cursor-default px-1 md:px-2">
              {item}
            </span>
            <span className="flex items-center justify-center align-middle" style={{height: '1em'}}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary" style={{display:'block'}}>
                <path d="M11 2l2.472 6.44 6.861.5-5.333 4.56 1.667 6.5L11 15.25l-5.667 4.75 1.667-6.5-5.333-4.56 6.861-.5L11 2z" fill="currentColor"/>
              </svg>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PhilosophySection() {

  return (

    <section id="philosophie" className="py-28 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
          Unsere Philosophie
        </h3>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
          Exzellenz als <span className="text-primary">Maßstab</span>
        </h2>
        <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
          Wir sind nicht nur Immobilienmakler – wir sind Architektur-Kuratoren mit einem untrüglichen Gespür für Qualität. Jede Immobilie wird von uns als Investition in Lebensqualität und Wertbeständigkeit verstanden.
        </p>
      </div>

      {/* Marquee */}
      <div className="mb-10">
        <Marquee items={PHILOSOPHY_ITEMS} />
      </div>

      {/* Werte Grid */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-[fadeInUp_1s_0.8s_forwards]">
          {VALUES.map((val) => (
            <div className="text-center group" key={val.title}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-serif text-primary">{val.icon}</span>
              </div>
              <h4 className="text-xl font-serif mb-2">{val.title}</h4>
              <p className="text-sm text-muted-foreground">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
