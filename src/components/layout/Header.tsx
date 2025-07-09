'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';

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

  const navItems = [
    { href: '#referenzen', label: 'Referenzen' },
    { href: '#philosophie', label: 'Philosophie' },
    { href: '#bewertung', label: 'Bewertung' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center min-h-[64px]">
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Logo onDark={!scrolled} />
          </div>
          
          {/* Mobile Logo */}
          <div className="md:hidden flex-1">
            <Logo compact onDark={!scrolled} />
          </div>
          
          {/* Desktop Navigation - Perfekt zentriert */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-12 text-sm font-medium">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className={`relative group transition-all duration-300 ${
                  scrolled 
                    ? 'hover:text-primary' 
                    : 'text-white hover:text-primary/80 drop-shadow-lg'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className={`hidden md:inline-flex rounded-full font-medium border-2 transition-all duration-300 ml-auto ${
              scrolled 
                ? 'hover:bg-primary hover:text-primary-foreground hover:border-primary' 
                : 'text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white drop-shadow-lg'
            }`}
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Exklusive Beratung
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden p-2 transition-all duration-300 ${
              scrolled 
                ? 'hover:bg-gray-100' 
                : 'text-white hover:bg-white/10 drop-shadow-lg'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300 md:hidden">
          <nav className="flex flex-col items-center space-y-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-display hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="text-2xl font-display hover:text-primary transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <div className="mt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full font-medium border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Exklusive Beratung
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
