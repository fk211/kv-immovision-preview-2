'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-serif font-bold mb-4">
              KG<span className="text-primary">.</span>
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
              <a href="#kollektion" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Kollektion
              </a>
              <a href="#philosophie" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Philosophie
              </a>
              <a href="#bewertung" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Bewertung
              </a>
              <a href="#kontakt" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
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
              <a href="mailto:kontakt@kg-immovision.ch" className="block hover:text-primary transition-colors">
                kontakt@kg-immovision.ch
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
              &copy; {currentYear} KG Immovision AG. Ein Unternehmen der Valentin Immovision AG.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-primary transition-colors">
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
