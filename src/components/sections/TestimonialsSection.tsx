'use client';

import { useState, useRef, useEffect, TouchEvent } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  location: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Clarissa Müller",
      role: "Verkäuferin einer Villa in München",
      image: "/images/people/clarissa.jpg",
      content: "Ich bin äußerst beeindruckt von der Professionalität und dem Engagement des Teams von KG Immovision. Der Verkauf meiner Villa wurde mit größter Sorgfalt und Diskretion abgewickelt. Die erreichte Verkaufssumme übertraf meine Erwartungen.",
      rating: 5,
      location: "München"
    },
    {
      id: 2,
      name: "Valentin Herzog",
      role: "Käufer eines Penthouses",
      image: "/images/people/valentin.jpg",
      content: "Die Beratung war erstklassig und auf meine individuellen Bedürfnisse zugeschnitten. Das Team hat mir exklusive Objekte präsentiert, die nicht öffentlich auf dem Markt waren. Mein neues Penthouse ist genau das, wonach ich gesucht habe.",
      rating: 5,
      location: "Salzburg"
    },
    {
      id: 3,
      name: "Dr. Tobias Weber",
      role: "Investor",
      image: "",
      content: "Als langjähriger Investor schätze ich die umfassende Marktkenntnis und das exzellente Netzwerk von KG Immovision. Die vorgeschlagenen Investitionsobjekte waren immer präzise auf meine Anlagestrategie abgestimmt.",
      rating: 5,
      location: "Kitzbühel"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Minimale Swipe-Distanz
  const MIN_SWIPE_DISTANCE = 50;

  // Touch-Event-Handler für Swipe-Gesten
  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null); // Reset touchEnd
    
    // Pause auto rotation when user is interacting
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > MIN_SWIPE_DISTANCE;
    
    if (isSwipe) {
      if (distance > 0) {
        // Swipe left - go to next
        goToNextTestimonial('swipe-left');
      } else {
        // Swipe right - go to previous
        goToPrevTestimonial('swipe-right');
      }
    }
    
    // Restart auto rotation
    resetInterval();
  };

  // Automatische Rotation der Testimonials
  useEffect(() => {
    resetInterval();
    
    // Pause rotation when user interacts with the carousel through touch or focus
    const carousel = carouselRef.current;
    if (carousel) {
      const pauseInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
      
      const resumeInterval = () => {
        resetInterval();
      };
      
      carousel.addEventListener('focusin', pauseInterval);
      carousel.addEventListener('mouseover', pauseInterval);
      carousel.addEventListener('focusout', resumeInterval);
      carousel.addEventListener('mouseleave', resumeInterval);
      
      return () => {
        carousel.removeEventListener('focusin', pauseInterval);
        carousel.removeEventListener('mouseover', pauseInterval);
        carousel.removeEventListener('focusout', resumeInterval);
        carousel.removeEventListener('mouseleave', resumeInterval);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);
  
  // Funktion, um Interval zurückzusetzen
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goToNextTestimonial();
    }, 8000);
  };

  const goToPrevTestimonial = (animation?: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    // If we're using custom animation, set it on the carousel element
    if (animation && carouselRef.current) {
      carouselRef.current.classList.add(`animate-${animation}`);
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.classList.remove(`animate-${animation}`);
        }
      }, 500);
    }
    
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToNextTestimonial = (animation?: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    // If we're using custom animation, set it on the carousel element
    if (animation && carouselRef.current) {
      carouselRef.current.classList.add(`animate-${animation}`);
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.classList.remove(`animate-${animation}`);
        }
      }, 500);
    }
    
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-28 md:py-36 lg:py-40 bg-muted relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent opacity-30"></div>
      <div className="absolute -top-96 -right-96 w-[600px] h-[600px] rounded-full bg-primary/5"></div>
      <div className="absolute -bottom-96 -left-96 w-[600px] h-[600px] rounded-full bg-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 opacity-0 animate-[fadeInUp_1s_0.2s_forwards]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-3 sm:mb-4 md:mb-5">
            Das sagen unsere <span className="text-primary">Kunden</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Authentische Stimmen von Menschen, die uns ihr Vertrauen geschenkt haben
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-14 left-0 transform -translate-x-1/2 text-primary/10 hidden lg:block">
            <Quote size={120} />
          </div>
          
          {/* Carousel with touch support */}
          <div 
            ref={carouselRef}
            className="carousel relative min-h-[420px] xs:min-h-[400px] sm:min-h-[380px] md:min-h-[360px] lg:min-h-[320px] pb-2 touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`
                  testimonial-item transition-all duration-700 absolute inset-0 w-full select-none
                  ${index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10 animate-[fadeInUp_0.7s_forwards]' 
                    : 'opacity-0 translate-x-20 z-0 pointer-events-none'}
                `}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-3 xs:gap-4 lg:gap-8 p-2 sm:p-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <div className="rounded-full border-4 border-primary/10 shadow-lg h-24 w-24 xs:h-28 xs:w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-48 lg:w-48 overflow-hidden relative">
                      {testimonial.image ? (
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          fill 
                          className="object-cover"
                          sizes="(max-width: 480px) 96px, (max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 192px"
                          priority={index === activeIndex}
                        />
                      ) : (
                        <div className="bg-primary/10 h-full w-full flex items-center justify-center text-primary text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-grow mt-3 xs:mt-4 lg:mt-0 text-center lg:text-left">
                    <div className="flex mb-2 justify-center lg:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          strokeWidth={2.5}
                          className={`mx-0.5 lg:mx-0 lg:mr-1 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-sm xs:text-base sm:text-lg italic mb-3 lg:mb-5 relative max-w-2xl mx-auto lg:mx-0 px-5 sm:px-6 lg:px-0">
                      <span className="inline-block lg:hidden absolute -top-2 left-0 text-primary/10">
                        <Quote size={18} />
                      </span>
                      <span className="hidden lg:inline-block absolute -left-8 -top-5 text-primary/10">
                        <Quote size={36} />
                      </span>
                      <span className="inline-block lg:hidden absolute -bottom-2 right-0 text-primary/10 transform rotate-180">
                        <Quote size={18} />
                      </span>
                      <span className="leading-relaxed">"{testimonial.content}"</span>
                    </blockquote>
                    <div>
                      <h4 className="text-base xs:text-lg sm:text-xl font-display font-medium">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-xs xs:text-sm mt-0.5">
                        {testimonial.role}
                        {testimonial.location && ` • ${testimonial.location}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls - Enhanced for mobile and touch */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 sm:gap-6">
            {/* Previous button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all h-10 w-10 flex items-center justify-center shadow-sm active:scale-95 touch-manipulation"
              onClick={() => goToPrevTestimonial()}
              disabled={isAnimating}
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft size={18} />
            </Button>
            
            {/* Indicators */}
            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Zeige Testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                  className={`h-3 rounded-full transition-all duration-300 touch-manipulation ${
                    index === activeIndex 
                      ? 'bg-primary w-6 sm:w-8' 
                      : 'bg-primary/20 hover:bg-primary/40 w-3'
                  }`}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                    resetInterval();
                  }}
                />
              ))}
            </div>
            
            {/* Next button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all h-10 w-10 flex items-center justify-center shadow-sm active:scale-95 touch-manipulation"
              onClick={() => goToNextTestimonial()}
              disabled={isAnimating}
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
