'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import BrandLogo from '@/components/ui/BrandLogo';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Verhindere Scrollen, wenn das mobile Menü geöffnet ist
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { href: '#referenzen', label: 'Referenzen' },
    { href: '/verkauf', label: 'Verkauf' },
    { href: '#testimonials', label: 'Kundenstimmen' },
    { href: '#regionen', label: 'Märkte' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm'
      }`}>
        <div className={`container mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between relative transition-all duration-500 ${
          mobileMenuOpen
            ? 'py-1.5 min-h-[60px]'
            : scrolled 
              ? 'py-1.5 sm:py-2 md:py-2 min-h-[60px] sm:min-h-[65px] md:min-h-[70px] lg:min-h-[80px]' 
              : 'py-2 sm:py-2.5 md:py-3 lg:py-4 min-h-[70px] sm:min-h-[80px] md:min-h-[90px] lg:min-h-[100px]'
        }`}>
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.slice(0, Math.ceil(navItems.length / 2)).map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className={`relative group transition-all duration-300 ${
                  scrolled 
                    ? 'text-slate-800 hover:text-primary text-xs' 
                    : 'text-white hover:text-white/90 drop-shadow-lg text-sm'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-primary' : 'bg-white'
                }`} />
              </a>
            ))}
          </nav>
          
          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <BrandLogo scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} />
          </div>
          
          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8 text-sm font-medium">
              {navItems.slice(Math.ceil(navItems.length / 2)).map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`relative group transition-all duration-300 ${
                    scrolled 
                      ? 'text-slate-800 hover:text-primary text-xs' 
                      : 'text-white hover:text-white/90 drop-shadow-lg text-sm'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-primary' : 'bg-white'
                  }`} />
                </a>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className={`hidden md:inline-flex rounded-full font-medium border-2 transition-all duration-300 ${
                scrolled 
                  ? 'hover:bg-primary hover:text-primary-foreground hover:border-primary py-1 px-3 text-xs scale-90' 
                  : 'text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white drop-shadow-lg'
              }`}
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className={`mr-2 ${scrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
              Kontakt
            </Button>
          </div>

          {/* Mobile Logo and Menu Button */}
          <div className="md:hidden flex-1 flex items-center">
            {/* Kein zweites Logo im mobilen Layout - das zentrierte Logo wird verwendet */}
          </div>

          {/* Mobile Menu Toggle Button (Menu/Close) with animated transition */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-all duration-300 relative touch-manipulation ${
              mobileMenuOpen
                ? 'text-black hover:text-primary p-1.5 scale-100'
                : scrolled 
                  ? 'hover:bg-gray-100 p-1 scale-85' 
                  : 'text-white hover:bg-white/10 drop-shadow-lg p-1.5 scale-100'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`relative transition-all duration-300 ${
              scrolled && !mobileMenuOpen ? 'w-5 h-5' : 'w-6 h-6'
            }`}>
              <Menu className={`absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              } ${scrolled && !mobileMenuOpen ? 'w-5 h-5' : 'w-6 h-6'}`} />
              <X className={`absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
              } ${scrolled && !mobileMenuOpen ? 'w-5 h-5' : 'w-6 h-6'}`} />
            </div>
          </Button>
        </div>
      </header>

      {/* Mobile Menu with enhanced animations */}
      <div 
        className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto animate-menu-slide-in' 
            : 'opacity-0 pointer-events-none animate-menu-slide-out'
        }`}
      >
        {/* Dekorative Elemente im Hintergrund mit verbesserten Animationen */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className={`absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-slate-50 transition-all duration-700 delay-300 
                        ${mobileMenuOpen ? 'opacity-20 translate-x-0 animate-float' : 'opacity-0 -translate-x-20'}`}></div>
          <div className={`absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-slate-50 transition-all duration-700 delay-500
                        ${mobileMenuOpen ? 'opacity-20 translate-x-0 animate-float' : 'opacity-0 translate-x-20'}`}
                style={{ animationDelay: '1.5s' }}></div>
          <div className={`absolute top-2/3 left-1/4 w-24 h-24 rounded-full bg-slate-100 transition-all duration-700 delay-700
                        ${mobileMenuOpen ? 'opacity-10 scale-100 animate-float' : 'opacity-0 scale-0'}`}
                style={{ animationDelay: '0.8s' }}></div>
        </div>
        
        {/* Kein zusätzliches Logo im Menü, da das Logo im Header dynamisch angepasst wird */}
        {/* Schließen-Button ist jetzt im Header */}
        <div className="w-full max-w-md px-4 sm:px-6 z-10 relative">
          <nav className="flex flex-col items-center space-y-6 sm:space-y-7 text-center mt-16 sm:mt-20 lg:mt-24">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                style={{ '--stagger': `${index * 120 + 200}ms` } as React.CSSProperties}
                className={`text-xl sm:text-2xl font-display text-slate-900 relative z-10 group
                          py-2 px-6 transition-all duration-300 touch-manipulation
                          ${mobileMenuOpen ? 'animate-staggered-slide-down' : 'opacity-0'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                <span className="block h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300 mt-1 origin-left"></span>
                <span className="absolute -inset-x-4 inset-y-0 bg-slate-50/0 group-hover:bg-slate-50/80 -z-10 rounded-lg transform scale-95 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100"></span>
              </a>
            ))}
            
            <div 
              style={{ '--stagger': `${navItems.length * 120 + 300}ms` } as React.CSSProperties} 
              className={`mt-8 sm:mt-10 relative z-10 ${mobileMenuOpen ? 'animate-bounce-in' : 'opacity-0'}`}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full font-medium border-2 border-slate-800 text-slate-800 transition-all duration-300 
                         hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 active:scale-95
                         shadow-sm hover:shadow-md touch-manipulation text-base sm:text-lg px-6 py-3"
                onClick={() => {
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Kontakt
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
