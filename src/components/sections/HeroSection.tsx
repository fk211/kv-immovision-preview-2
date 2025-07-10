'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ValuationForm from '@/components/valuation/ValuationForm';
import ValuationFormModal from '@/components/valuation/ValuationFormModal';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openValuationModal = () => {
    setIsModalOpen(true);
  };

  const closeValuationModal = () => {
    setIsModalOpen(false);
  };

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#manifesto');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/properties/haus-kufstein/pool-1.jpg"
          alt="KG Immovision AG"
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
                  KG Immovision AG
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 font-light opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
                Ihr Partner für außergewöhnliche Immobilien
              </p>
            </div>

            <p className="text-lg text-white/90 max-w-2xl leading-relaxed opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
              Persönliche Beratung und diskrete Vermittlung exklusiver Immobilien 
              für anspruchsvolle Kunden seit über 15 Jahren.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_1s_0.8s_forwards]">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3">
                Immobilien entdecken
              </Button>
              
              {/* Valuation Button (on all screen sizes) */}
              <Button 
                size="lg" 
                onClick={openValuationModal}
                className="bg-slate-800/80 hover:bg-slate-700 text-white border border-white/20 px-8 py-3 flex items-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Immobilie bewerten
              </Button>
            </div>
          </div>

          {/* Rechte Spalte leer lassen für ein ausgewogenes Layout */}
          <div className="lg:col-span-5">
            {/* Leer gelassen wie angefordert */}
          </div>
        </div>
      </div>

      {/* Valuation Form Modal (for both mobile and desktop) */}
      <ValuationFormModal isOpen={isModalOpen} onClose={closeValuationModal} />

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
          Entdecken
        </span>
        <ArrowDown className="text-white/80 group-hover:text-white transition-colors" size={20} />
      </button>
    </section>
  );
}
