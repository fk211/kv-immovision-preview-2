import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt - KG IMMOVISION',
  description: 'Kontaktieren Sie KG IMMOVISION für eine persönliche Beratung zu Luxusimmobilien und Projektentwicklung.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display mb-6 text-foreground">
              Lassen Sie uns <span className="text-primary">sprechen</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ihre Vision, unsere Expertise. Kontaktieren Sie uns für eine persönliche Beratung zu Ihren Immobilienprojekten.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-display mb-2 text-foreground">
                  Nachricht senden
                </h2>
                <p className="text-muted-foreground mb-8">
                  Füllen Sie das Formular aus und wir melden uns binnen 24 Stunden bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-2xl md:text-3xl font-display mb-8 text-foreground">
                  Kontaktinformationen
                </h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                      <p className="text-muted-foreground mb-2">Sprechen Sie direkt mit unserem Team</p>
                      <a 
                        href="tel:+49123456789" 
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        +49 123 456 789
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                      <p className="text-muted-foreground mb-2">Schreiben Sie uns eine Nachricht</p>
                      <a 
                        href="mailto:info@kg-immovision.de" 
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        info@kg-immovision.de
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground mb-2">Besuchen Sie uns in unserem Büro</p>
                      <address className="text-foreground not-italic leading-relaxed">
                        Musterstraße 123<br />
                        80331 München<br />
                        Deutschland
                      </address>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Bürozeiten</h3>
                      <p className="text-muted-foreground mb-2">Wann Sie uns erreichen können</p>
                      <div className="text-foreground space-y-1">
                        <p>Montag - Freitag: 9:00 - 18:00</p>
                        <p>Samstag: 10:00 - 16:00</p>
                        <p>Sonntag: Termine nach Vereinbarung</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Persönlicher Termin</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Vereinbaren Sie einen unverbindlichen Beratungstermin in unserem Büro oder bei Ihnen vor Ort.
                  </p>
                  <a 
                    href="tel:+49123456789"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
              Unser <span className="text-primary">Standort</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Mitten im Herzen von München - leicht erreichbar und zentral gelegen.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interaktive Karte wird hier angezeigt
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Musterstraße 123, 80331 München
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
