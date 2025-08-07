'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Wie läuft der Verkaufsprozess einer Immobilie ab?",
    answer: "Der Verkaufsprozess beginnt mit einer kostenlosen Bewertung Ihrer Immobilie. Anschließend erstellen wir ein maßgeschneidertes Marketingkonzept, führen Besichtigungen durch und begleiten Sie bis zum Notartermin. Der gesamte Prozess dauert in der Regel 2-4 Monate."
  },
  {
    question: "Welche Unterlagen benötige ich für den Immobilienverkauf?",
    answer: "Für den Verkauf benötigen Sie: Grundbuchauszug, Energieausweis, Grundrisse, Lageplan, bei Eigentumswohnungen die Teilungserklärung und Hausgeldabrechnungen, sowie bei vermieteten Objekten die Mietverträge. Wir unterstützen Sie gerne beim Zusammenstellen aller erforderlichen Dokumente."
  },
  {
    question: "Was sind Off-Market-Immobilien?",
    answer: "Off-Market-Immobilien sind Objekte, die nicht öffentlich beworben werden. Diese diskreten Verkäufe bieten sowohl Verkäufern als auch Käufern Vorteile: mehr Privatsphäre, exklusiver Zugang und oft bessere Konditionen. Wir haben Zugang zu einem umfangreichen Off-Market-Netzwerk."
  },
  {
    question: "Wie wird der Wert meiner Immobilie ermittelt?",
    answer: "Wir verwenden verschiedene Bewertungsverfahren: das Vergleichswertverfahren, Ertragswertverfahren und Sachwertverfahren. Dabei berücksichtigen wir Lage, Zustand, Ausstattung, aktuelle Marktlage und vergleichbare Verkäufe. Eine erste Einschätzung erhalten Sie kostenlos."
  },
  {
    question: "Welche Kosten entstehen beim Immobilienkauf?",
    answer: "Zusätzlich zum Kaufpreis fallen an: Grunderwerbsteuer (3,5-6,5% je nach Bundesland), Notar- und Grundbuchkosten (ca. 1,5-2%), Maklerprovision (regional unterschiedlich) und ggf. Finanzierungskosten. Insgesamt sollten Sie mit 8-15% Nebenkosten rechnen."
  },
  {
    question: "Bieten Sie auch Projektentwicklung an?",
    answer: "Ja, wir realisieren Immobilienprojekte von der ersten Idee bis zur Fertigstellung. Unser Leistungsspektrum umfasst Grundstücksakquise, Projektplanung, Baugenehmigungen, Baubetreuung und Vermarktung. Dabei legen wir besonderen Wert auf nachhaltige und wirtschaftlich sinnvolle Konzepte."
  },
  {
    question: "Wie lange dauert es, bis meine Immobilie verkauft ist?",
    answer: "Die Verkaufsdauer hängt von verschiedenen Faktoren ab: Lage, Preis, Zustand und Marktsituation. In begehrten Lagen und bei realistischer Preisgestaltung verkaufen sich Immobilien oft innerhalb von 4-8 Wochen. Wir beraten Sie gerne zu einer optimalen Verkaufsstrategie."
  },
  {
    question: "Unterstützen Sie auch bei der Finanzierung?",
    answer: "Ja, wir arbeiten mit renommierten Finanzierungspartnern zusammen und können Ihnen kompetente Beratung zu Finanzierungsmöglichkeiten anbieten. Von der ersten Beratung bis zur Auszahlung begleiten wir Sie durch den gesamten Finanzierungsprozess."
  },
  {
    question: "Was unterscheidet Sie von anderen Maklern?",
    answer: "Unser Fokus liegt auf exklusiven Immobilien und diskretem Service. Wir bieten persönliche Betreuung, professionelles Marketing, ein starkes Netzwerk und langjährige Erfahrung in der Immobilienwirtschaft. Jeder Kunde erhält eine individuelle, auf seine Bedürfnisse zugeschnittene Beratung."
  },
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer: "Wir sind hauptsächlich in Deutschland, Österreich und der Schweiz tätig, mit besonderem Fokus auf München, Frankfurt, Zürich und andere Wirtschaftszentren. Bei besonderen Objekten erweitern wir unseren Aktionsradius gerne auch auf andere attraktive Immobilienmärkte."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <button
        className="w-full px-6 py-5 text-left hover:bg-slate-50/50 transition-colors flex items-center justify-between group"
        onClick={onClick}
      >
        <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 transform transition-transform duration-200" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transform transition-all duration-200" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-slate-100">
          <p className="text-muted-foreground leading-relaxed text-[15px]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display mb-6 text-foreground">
              Häufig gestellte <span className="text-primary">Fragen</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Immobilienkauf, -verkauf und unsere Dienstleistungen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.includes(index)}
                  onClick={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-foreground">
              Weitere <span className="text-primary">Fragen</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Wenn Sie weitere Fragen haben, zögern Sie nicht, uns zu kontaktieren. 
              Wir beraten Sie gerne persönlich und unverbindlich.
            </p>
            <a 
              href="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
