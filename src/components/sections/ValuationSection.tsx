'use client';

import MultiStepValuationForm from '@/components/valuation/MultiStepValuationForm';
import { TrendingUp, Shield, Users } from 'lucide-react';

export default function ValuationSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Präzise Marktanalyse durch Experten",
      description: "Fundierte Bewertung basierend auf aktuellen Marktdaten und Trends"
    },
    {
      icon: Shield,
      title: "Absolute Diskretion und Vertraulichkeit",
      description: "Ihre Daten und Anfragen werden streng vertraulich behandelt"
    },
    {
      icon: Users,
      title: "Aufdeckung von ungenutztem Potenzial",
      description: "Wir identifizieren versteckte Wertsteigerungsmöglichkeiten"
    }
  ];

  return (
    <section id="bewertung" className="py-32 md:py-40 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-8 opacity-0 animate-[fadeInUp_1s_0.2s_forwards]">
              Was ist Ihre Immobilie{' '}
              <span className="text-primary">wert?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
              Der Wert einer außergewöhnlichen Immobilie lässt sich nicht allein in Zahlen fassen. 
              Er bemisst sich an Potenzial, Charakter und unersetzlicher Lage. Wir verstehen diese Nuancen.
            </p>

            <div className="space-y-6 opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Multi-Step Form */}
          <div className="opacity-0 animate-[fadeInUp_1s_0.8s_forwards]">
            <MultiStepValuationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
