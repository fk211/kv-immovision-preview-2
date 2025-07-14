'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';
import { allProperties } from '@/data/properties';

export default function PropertiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fake "VERKAUFT" properties
  // (Diese sind jetzt in der allProperties aus der Data-Datei enthalten)
  
  // Mobile: 1 card per slide, Desktop: 3 cards visible but 1 slide
  const getMaxSlides = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return allProperties.length; // Mobile: each card is a slide
    }
    return allProperties.length - 2; // Desktop: 3 cards visible, slide by 1
  }, []);
  
  const [totalSlides, setTotalSlides] = useState(allProperties.length - 2); // Start with desktop value to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTotalSlides(getMaxSlides());
  }, [getMaxSlides]);

  useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => {
      setTotalSlides(getMaxSlides());
      if (currentSlide >= getMaxSlides()) {
        setCurrentSlide(0);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide, isClient, getMaxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="referenzen" className="py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
            Ausgewählte Referenzen
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-display mb-4 md:mb-6 opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
            Unsere Projekte
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
            Hochwertige Immobilien mit außergewöhnlicher Architektur und erstklassigen Lagen.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Always visible on desktop */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Mobile Navigation Arrows - Positioned higher up */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="lg:hidden absolute -left-2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 z-30"
                style={{ top: 'calc(50% - 50px)' }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="lg:hidden absolute -right-2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 z-30"
                style={{ top: 'calc(50% - 50px)' }}
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Properties Slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: typeof window !== 'undefined' && window.innerWidth < 1024 
                  ? `translateX(-${currentSlide * 100}%)` 
                  : `translateX(-${currentSlide * (100/3)}%)`
              }}
            >
              {allProperties.map((property) => (
                <div key={property.id} className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%] px-2 md:px-4 py-6">
                  <div className="property-card opacity-0 animate-[fadeInUp_1s_forwards]">
                    <PropertyCard property={property} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 border border-gray-300 ${
                  index === currentSlide
                    ? 'bg-primary w-8 border-primary shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
              />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16 opacity-0 animate-[fadeInUp_1s_1.5s_forwards]">
          <p className="text-muted-foreground mb-6">
            Weitere exklusive Immobilien-Highlights in unserem Portfolio.
          </p>
          <button className="text-primary font-medium hover:underline transition-all duration-300">
            Alle Referenzen anzeigen →
          </button>
        </div>
      </div>
    </section>
  );
}
