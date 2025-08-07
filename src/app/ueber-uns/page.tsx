import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

// Maximaler SEO-Schutz: Komplette Seite wird nicht indexiert
export const metadata: Metadata = {
  title: 'Über uns - VK Immovision AG',
  description: 'Lernen Sie unser Team kennen',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  other: {
    'googlebot': 'noindex, nofollow, noarchive, nosnippet',
    'bingbot': 'noindex, nofollow, noarchive, nosnippet',
    'slurp': 'noindex, nofollow, noarchive, nosnippet',
    'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
  }
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-display leading-tight mb-4">
                Über <span className="text-primary">uns</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Lernen Sie die Menschen hinter VK Immovision AG kennen
              </p>
            </div>
          </div>
        </section>

        {/* Team Section - Nicht indexierbar */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Profilbild */}
                  <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-xl border-4 border-muted mx-auto lg:mx-0 flex-shrink-0">
                    <Image 
                      src="/images/people/valentin.jpg"
                      alt="Geschäftsführer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Inhalt */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Name - Hier kann er stehen, da die Seite noindex ist */}
                    <div className="mb-3">
                      <h2 className="text-2xl md:text-3xl font-display">
                        Valentin Leon Köller
                      </h2>
                      <p className="text-lg text-primary/80 font-medium mt-1">
                        Geschäftsführer der VK Immovision AG
                      </p>
                    </div>
                    
                    {/* Bio Text */}
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Ich bin Valentin Leon Köller. Schon früh habe ich erlebt, welchen Einfluss Immobilien auf Lebensqualität und urbane Kultur haben können. Räume zu schaffen, die langfristig Bestand haben und für Menschen echten Mehrwert bieten – das war für mich nie bloß ein Geschäft, sondern immer eine Haltung.
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

        {/* Kontakt Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Lernen Sie uns <span className="text-primary">persönlich</span> kennen
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Wir freuen uns darauf, Sie in einem persönlichen Gespräch kennenzulernen und gemeinsam Ihre Immobilienziele zu verwirklichen.
            </p>
            <a 
              href="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}