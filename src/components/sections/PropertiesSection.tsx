'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';

const properties = [
  {
    id: 1,
    name: "Residenz Kössen",
    location: "Kitzbüheler Alpen, Österreich",
    area: "320 m²",
    rooms: "5 Zimmer",
    year: "2021",
    parking: "2 Stellplätze",
    view: "Alpenpanorama",
    style: "Modern",
    features: ["Privatgarten", "Infinity-Pool", "Alpenpanorama", "Wellness-Bereich"],
    images: [
      "/images/properties/haus-koessen/haus-1.jpg",
      "/images/properties/haus-koessen/wohnzimmer-5.jpg",
      "/images/properties/haus-koessen/schlafzimmer-1.jpg",
      "/images/properties/haus-koessen/badezimmer-1.jpg",
      "/images/properties/haus-koessen/garten-1.jpg",
      "/images/properties/haus-koessen/pool-2.jpg"
    ]
  },
  {
    id: 2,
    name: "Villa Kufstein",
    location: "Kufstein, Österreich",
    area: "280 m²",
    rooms: "4 Zimmer",
    year: "2020",
    parking: "Garage",
    view: "Stadtblick",
    style: "Minimalistisch",
    features: ["Minimalistische Architektur", "Wellness-Bereich", "Panoramaterrasse", "Smart-Home"],
    images: [
      "/images/properties/haus-kufstein/haus-2.jpg",
      "/images/properties/haus-kufstein/schlafzimmer-9.jpg",
      "/images/properties/haus-kufstein/badezimmer-2.jpg",
      "/images/properties/haus-kufstein/pool-1.jpg"
    ]
  },
  {
    id: 3,
    name: "Domizil Vorarlberg",
    location: "Vorarlberg, Österreich",
    area: "450 m²",
    rooms: "6 Zimmer",
    year: "2019",
    parking: "3 Stellplätze",
    view: "Bergpanorama",
    style: "Luxuriös",
    features: ["Luxuriöse Ausstattung", "Parkähnlicher Garten", "Exklusiver Pool", "Weinkeller"],
    images: [
      "/images/properties/haus-vorarlberg/haus-5.jpg",
      "/images/properties/haus-vorarlberg/wohnzimmer-2.jpg",
      "/images/properties/haus-vorarlberg/schlafzimmer-7.jpg",
      "/images/properties/haus-vorarlberg/badezimmer-3.jpg",
      "/images/properties/haus-vorarlberg/garten-2.jpg",
      "/images/properties/haus-vorarlberg/pool-3.jpg"
    ]
  },
  {
    id: 4,
    name: "Penthouse Oberhaching",
    location: "Oberhaching, Deutschland",
    area: "380 m²",
    rooms: "7 Zimmer",
    year: "2022",
    parking: "Tiefgarage",
    view: "Panoramablick",
    style: "Exklusiv",
    features: ["Exklusiver Wellness-Bereich", "Rooftop-Pool", "Panoramablick", "Butler-Service"],
    images: [
      "/images/properties/mfh-oberhaching/haus-3.jpg",
      "/images/properties/mfh-oberhaching/wohnzimmer-3.jpg",
      "/images/properties/mfh-oberhaching/schlafzimmer-8.jpg",
      "/images/properties/mfh-oberhaching/badezimmer-4.jpg",
      "/images/properties/mfh-oberhaching/pool-4.jpg",
      "/images/properties/mfh-oberhaching/pool-innen-1.jpg"
    ]
  },
  {
    id: 5,
    name: "Residenz Tengstraße",
    location: "München, Deutschland",
    area: "250 m²",
    rooms: "4 Zimmer",
    year: "2021",
    parking: "1 Stellplatz",
    view: "Stadtblick",
    style: "Elegant",
    features: ["Zentrale Lage", "Stilvolle Architektur", "Südterrasse", "Concierge-Service"],
    images: [
      "/images/properties/tengstr/haus-4.jpg",
      "/images/properties/tengstr/wohnzimmer-1.jpg",
      "/images/properties/tengstr/wohnzimmer-4.jpg",
      "/images/properties/tengstr/schlafzimmer-6.jpg",
      "/images/properties/tengstr/badezimmer-5.jpg",
      "/images/properties/tengstr/terrasse-1.jpg"
    ]
  }
];

export default function PropertiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fake "VERKAUFT" properties
  const soldProperties = [
    {
      id: 101,
      name: "Villa München",
      location: "München, Deutschland",
      area: "420 m²",
      rooms: "6 Zimmer",
      year: "2020",
      parking: "2 Stellplätze",
      view: "Stadtblick",
      style: "VERKAUFT",
      features: ["Verkauft"],
      images: ["https://placehold.co/600x400/f3f4f6/6b7280?text=VERKAUFT"],
      sold: true
    },
    {
      id: 102,
      name: "Penthouse Berlin",
      location: "Berlin, Deutschland", 
      area: "380 m²",
      rooms: "5 Zimmer",
      year: "2021",
      parking: "Tiefgarage",
      view: "Panoramablick",
      style: "VERKAUFT",
      features: ["Verkauft"],
      images: ["https://placehold.co/600x400/f3f4f6/6b7280?text=VERKAUFT"],
      sold: true
    },
    {
      id: 103,
      name: "Landhaus Salzburg",
      location: "Salzburg, Österreich",
      area: "520 m²", 
      rooms: "8 Zimmer",
      year: "2019",
      parking: "3 Stellplätze",
      view: "Alpenpanorama",
      style: "VERKAUFT",
      features: ["Verkauft"],
      images: ["https://placehold.co/600x400/f3f4f6/6b7280?text=VERKAUFT"],
      sold: true
    }
  ];

  const allProperties = [...properties, ...soldProperties];
  
  // Mobile: 1 card per slide, Desktop: 3 cards visible but 1 slide
  const getMaxSlides = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return allProperties.length; // Mobile: each card is a slide
    }
    return allProperties.length - 2; // Desktop: 3 cards visible, slide by 1
  }, [allProperties.length]);
  
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
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
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
                disabled={currentSlide === 0}
                className="hidden lg:flex absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="hidden lg:flex absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Mobile Navigation Arrows - Positioned further out from title */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="lg:hidden absolute -left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 z-30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="lg:hidden absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 z-30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
