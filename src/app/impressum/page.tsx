import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Impressum - KG IMMOVISION',
  description: 'Impressum und rechtliche Angaben zur KG IMMOVISION AG.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-foreground">
              Impressum
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Rechtliche Angaben und Kontaktinformationen
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
              
              {/* Company Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-4 text-foreground">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">KG IMMOVISION AG</h3>
                    <p className="text-muted-foreground mb-1">Ein Projekt der Valentin Immovision AG</p>
                    <p>Dorf 109</p>
                    <p>9428 Walzenhausen</p>
                    <p>Schweiz</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  Kontakt
                </h2>
                <div className="space-y-2 text-foreground">
                  <p>
                    <span className="font-medium">Telefon:</span> 
                    <a href="tel:+4915127276715" className="text-primary hover:underline ml-2">
                      +49 151 27276715
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">E-Mail:</span> 
                    <a href="mailto:kontakt@kg-immovision.ch" className="text-primary hover:underline ml-2">
                      kontakt@kg-immovision.ch
                    </a>
                  </p>
                </div>
              </div>

              {/* Legal Representative */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  Vertretungsberechtigte Geschäftsführung
                </h2>
                <div className="text-foreground">
                  <p>Valentin Leon Köller</p>
                </div>
              </div>

              {/* Register Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  Registereintrag
                </h2>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-medium">Eintragung im Handelsregister:</span> Schweiz</p>
                  <p><span className="font-medium">Registergericht:</span> Handelsregisteramt Appenzell Ausserrhoden</p>
                  <p><span className="font-medium">Registernummer:</span> [Wird nachgetragen]</p>
                </div>
              </div>

              {/* VAT Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  Umsatzsteuer
                </h2>
                <div className="text-foreground">
                  <p><span className="font-medium">Umsatzsteuer-Identifikationsnummer:</span> [Wird nachgetragen]</p>
                </div>
              </div>

              {/* Responsible for Content */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="text-foreground">
                  <p>Valentin Leon Köller</p>
                  <p>Dorf 109</p>
                  <p>9428 Walzenhausen, Schweiz</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  Haftungsausschluss
                </h2>
                
                <div className="space-y-6 text-foreground">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Haftung für Inhalte</h3>
                    <p className="text-muted-foreground">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                      unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Haftung für Links</h3>
                    <p className="text-muted-foreground">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Urheberrecht</h3>
                    <p className="text-muted-foreground">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                      Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm text-muted-foreground">
                  Stand: August 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
