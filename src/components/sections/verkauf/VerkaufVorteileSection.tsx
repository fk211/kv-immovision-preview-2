'use client';

import { Shield, TrendingUp, Clock, Users, Eye, CheckCircle } from 'lucide-react';

const advantages = [
  {
    icon: TrendingUp,
    title: "Maximaler Verkaufserlös",
    description: "Durch professionelle Marktanalyse und strategische Preisfindung erzielen wir für Sie den optimalen Verkaufspreis."
  },
  {
    icon: Shield,
    title: "Diskrete Vermarktung",
    description: "Absoluter Schutz Ihrer Privatsphäre durch selektive Vermarktung an qualifizierte Interessenten."
  },
  {
    icon: Clock,
    title: "Verkauf in Rekordzeit",
    description: "Dank unserem exklusiven Netzwerk und zielgerichteter Vermarktung verkaufen wir Ihre Immobilie in kürzester Zeit."
  },
  {
    icon: Users,
    title: "Vollumfängliche Betreuung",
    description: "Von der ersten Bewertung bis zur Schlüsselübergabe - wir begleiten Sie durch den gesamten Verkaufsprozess."
  },
  {
    icon: Eye,
    title: "Professionelle Präsentation",
    description: "Hochwertige Fotografie, virtuelle Rundgänge und professionelle Exposés setzen Ihre Immobilie optimal in Szene."
  },
  {
    icon: CheckCircle,
    title: "Rechtssichere Abwicklung",
    description: "Unsere Experten sorgen für eine rechtlich einwandfreie und reibungslose Kaufabwicklung."
  }
];

export default function VerkaufVorteileSection() {
  return (
    <section id="verkaufsprozess" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6">
            Ihre Vorteile beim Verkauf mit uns
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Wir bringen über Jahre aufgebaute Expertise, ein exklusives Netzwerk und 
            maßgeschneiderte Strategien für den erfolgreichen Verkauf Ihrer Immobilie mit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display text-white mb-4">
            Bereit für den Verkauf?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose und unverbindliche Erstberatung. 
            Gemeinsam entwickeln wir die optimale Verkaufsstrategie für Ihre Immobilie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Kostenlose Bewertung
            </button>
            <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
              Beratung vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}