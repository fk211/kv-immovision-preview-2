'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logos/vk-immo-logo.svg"
                alt="VK Immovision AG"
                width={210}
                height={75}
                className="h-18 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Wir kuratieren architektonische Meisterwerke und realisieren Lebensträume. 
              Jede Immobilie erzählt eine Geschichte.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <a href="/referenzen" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Referenzen
              </a>
              <a href="/verkauf" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Verkauf
              </a>
              <a href="/ueber-uns" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Über uns
              </a>
              <a href="/kontakt" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Dorf 109</p>
              <p>9428 Walzenhausen, Schweiz</p>
              <a href="mailto:kontakt@vk-immovision.ch" className="block hover:text-primary transition-colors">
                kontakt@vk-immovision.ch
              </a>
              <a href="tel:+4915127276715" className="block hover:text-primary transition-colors">
                +49 151 27276715
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} VK Immovision AG. Ein Projekt der Valentin Immovision AG.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/impressum" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
