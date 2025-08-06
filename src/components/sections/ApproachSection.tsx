'use client';

import Image from 'next/image';

export default function ApproachSection() {
  return (
    <section id="approach" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 opacity-100">
            <div className="relative h-[600px] rounded-md overflow-hidden">
              <Image
                src="/images/properties/haus-vorarlberg/haus-5.jpg"
                alt="Exklusives Anwesen in Vorarlberg"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
              Unser Ansatz
            </h3>
            <h2 className="text-4xl md:text-5xl font-display leading-tight mb-8 opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
              Wir verstehen Immobilien als <span className="text-primary">Kunstwerke</span> und Leben als Gestaltungsaufgabe
            </h2>
            
            <div className="space-y-8 opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M2 22h20" />
                    <path d="M6.87 2a10 10 0 0 0 8.27 15h-2.29A6 6 0 0 1 6.87 2" />
                    <path d="M6 13H2" />
                    <path d="M9 6.8 7.39 8.4" />
                    <path d="m17 17 3.35 3.35a2.41 2.41 0 0 0 3.3-3.5l-2.12-2.12" />
                    <path d="m12 13-1.56 1.56" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Persönliche Begleitung</h4>
                  <p className="text-muted-foreground">Wir begleiten Sie durch jeden Schritt des Prozesses - diskret, individuell und mit Liebe zum Detail.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Ästhetisches Verständnis</h4>
                  <p className="text-muted-foreground">Unsere Expertise verbindet architektonisches Verständnis mit einem Blick für Raumgefühl und funktionale Qualität.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2H2v10h10V2Z" />
                    <path d="M22 12h-4v4h-4v4h8v-8Z" />
                    <path d="M12 22v-8h-2v-2h2v-2h2v2h2v-2h2v2h2v2h-8" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Exklusives Netzwerk</h4>
                  <p className="text-muted-foreground">Wir pflegen ein diskretes Netzwerk aus Architekten, Innenarchitekten, Handwerkern und Designern für einen ganzheitlichen Service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
