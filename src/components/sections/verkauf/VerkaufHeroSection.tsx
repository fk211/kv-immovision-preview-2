'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, Calculator, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ValuationModal from '@/components/modals/ValuationModal';
import ConsultationModal from '@/components/modals/ConsultationModal';

export default function VerkaufHeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#verkaufsprozess');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/properties/haus-vorarlberg/haus-5.jpg"
          alt="Verkaufen Sie Ihre Immobilie"
          fill
          className="object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight">
                <span className="block opacity-0 animate-[fadeInUp_1s_0.2s_forwards]">
                  Verkaufen Sie Ihre Immobilie
                </span>
                <span className="block text-white opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
                  mit Exzellenz
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 font-light opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
                Diskrete Vermarktung. Maximaler Ertrag. Vertrauensvolle Begleitung.
              </p>
            </div>

            <p className="text-lg text-white/90 max-w-2xl leading-relaxed opacity-0 animate-[fadeInUp_1s_0.8s_forwards]">
              Der Verkauf einer exklusiven Immobilie erfordert Fingerspitzengefühl, Marktkenntnis und 
              absolute Diskretion. Wir verstehen den Wert Ihrer Immobilie über den reinen Marktwert hinaus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_1s_1.0s_forwards]">
              <Button 
                size="lg" 
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 flex items-center gap-2 font-medium"
              >
                <Calendar className="w-5 h-5" />
                Verkaufsberatung vereinbaren
              </Button>
              
              <Button 
                size="lg" 
                onClick={() => setIsValuationModalOpen(true)}
                className="bg-slate-800/80 hover:bg-slate-700 text-white border border-white/20 px-8 py-3 flex items-center gap-2 font-medium"
              >
                <Calculator className="w-5 h-5" />
                Marktwert ermitteln
              </Button>
            </div>
          </div>

          {/* Rechte Spalte leer lassen für ein ausgewogenes Layout */}
          <div className="lg:col-span-5">
            {/* Leer gelassen wie in der originalen Hero Section */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <ArrowDown className="text-white/80 group-hover:text-white transition-colors" size={20} />
      </button>

      {/* Modals */}
      <ValuationModal 
        isOpen={isValuationModalOpen}
        onClose={() => setIsValuationModalOpen(false)}
        title="Marktwert Ihrer Immobilie ermitteln"
        subtitle="Erhalten Sie eine kostenlose professionelle Bewertung"
      />

      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        title="Verkaufsberatung vereinbaren"
        subtitle="Besprechen Sie Ihre Verkaufspläne mit unseren Experten"
        consultationType="verkauf"
      />
    </section>
  );
}
