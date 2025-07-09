'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#manifesto');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/properties/haus-vorarlberg/haus-5.jpg"
          alt="Architektonisches Meisterwerk"
          fill
          className="object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[0.95] text-white mb-6 md:mb-8">
            <span className="block opacity-0 animate-[fadeInUp_1s_0.2s_forwards]">
              Exklusive Immobilien.
            </span>
            <span className="block opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
              Visionäre Architektur.
            </span>
            <span className="block opacity-0 animate-[fadeInUp_1s_0.6s_forwards] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
              Für Kenner des Besonderen.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl opacity-0 animate-[fadeInUp_1s_0.8s_forwards]">
            Diskrete Vermittlung exklusiver Immobilien für anspruchsvolle Klientel.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToNext}
        className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-2 animate-bounce cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
          Entdecken
        </span>
        <ArrowDown className="text-white/80 group-hover:text-white transition-colors" size={20} />
      </button>

      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 right-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="hidden md:block absolute bottom-1/3 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
      <div className="hidden md:block absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" />
    </section>
  );
}
