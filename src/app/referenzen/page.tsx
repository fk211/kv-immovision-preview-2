import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Clock, ArrowRight } from 'lucide-react';

export default function ReferenzenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-6 opacity-0 animate-[fadeInUp_1s_0.2s_forwards]">
                <span className="text-primary">Referenzen</span> & Erfolgsgeschichten
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-[fadeInUp_1s_0.4s_forwards] leading-relaxed">
                Entdecken Sie unsere erfolgreich vermittelten Luxusimmobilien und die Geschichten 
                zufriedener Kunden, die uns ihr Vertrauen geschenkt haben.
              </p>

              {/* Coming Soon Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-xl mx-auto opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h2 className="text-xl md:text-2xl font-display text-slate-900 mb-3">
                  In Kürze verfügbar
                </h2>
                
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Wir arbeiten gerade daran, Ihnen unsere exklusivsten Referenzen und 
                  Erfolgsgeschichten zu präsentieren. Aus Diskretionsgründen benötigen wir 
                  noch etwas Zeit, um die entsprechenden Freigaben unserer Kunden zu erhalten.
                </p>

                <div className="space-y-3 text-left bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">Was Sie erwarten können:</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Detaillierte Fallstudien unserer erfolgreichsten Vermittlungen</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Kundenstimmen und Testimonials</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Einblicke in unsere Arbeitsweise und Expertise</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Marktanalysen und Verkaufserfolge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
