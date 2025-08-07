'use client';

import Image from 'next/image';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-primary mb-2 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
            Unser Team
          </h3>
          <h2 className="text-3xl md:text-4xl font-display leading-tight opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
            Persönliche <span className="text-primary">Expertise</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
          <div className="bg-background rounded-xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Profilbild */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-xl border-4 border-muted mx-auto lg:mx-0 flex-shrink-0">
                <Image 
                  src="/images/people/valentin.jpg"
                  alt="Valentin Leon Köller"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Inhalt */}
              <div className="flex-1 text-center lg:text-left">
                {/* Name */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-display">
                    Valentin Leon Köller
                  </h3>
                  <p className="text-lg text-primary/80 font-medium mt-1">
                    Geschäftsführer der VK Immovision AG
                  </p>
                </div>
                
                {/* Bio Text */}
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ich bin Valentin Leon Köller, Geschäftsführer der VK Immovision AG. Schon früh habe ich erlebt, welchen Einfluss Immobilien auf Lebensqualität und urbane Kultur haben können. Räume zu schaffen, die langfristig Bestand haben und für Menschen echten Mehrwert bieten – das war für mich nie bloß ein Geschäft, sondern immer eine Haltung.
                  </p>
                  
                  <p>
                    Durch meine familiären Wurzeln und die enge Einbindung in die Immobilienwirtschaft konnte ich von klein auf wertvolle Erfahrungen sammeln und ein Gespür dafür entwickeln, was nachhaltige Projektentwicklung wirklich bedeutet.
                  </p>
                  
                  <p>
                    Ein besonderer Schwerpunkt meiner Tätigkeit liegt auf Off-Market-Immobilien. Der direkte Zugang zu nicht öffentlich gehandelten Objekten ermöglicht es, besondere Chancen frühzeitig zu identifizieren und maßgeschneiderte Lösungen für Verkäufer und Investoren zu entwickeln. Dieser diskrete und partnerschaftliche Ansatz bildet die Grundlage meiner Arbeit – mit dem Ziel, Werte zu schaffen, die weit über kurzfristige Renditeziele hinausgehen.
                  </p>
                  
                  <p>
                    Mit der VK Immovision AG realisiere ich Immobilienprojekte, die wirtschaftliche Effizienz mit gestalterischer Qualität und menschlichem Anspruch vereinen. Dabei bringe ich meine Erfahrung, mein unternehmerisches Gespür und meine Leidenschaft in jedes Projekt ein – als Investor, Projektentwickler und Partner auf Augenhöhe.
                  </p>
                  
                  <p className="text-primary font-medium">
                    Von Vision zur Realität – mit uns als Partner.
                  </p>
                  
                  <p>
                    Ich freue mich auf den Austausch, die Zusammenarbeit und darauf, gemeinsam Zukunft zu gestalten.
                  </p>
                  
                  <p className="font-medium text-foreground">
                    Ihr<br />
                    Valentin Leon Köller
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
