'use client';

import { useState } from 'react';
import { MapPin, Building, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Region {
  id: string;
  country: string;
  flag: string;
  cities: string[];
  description: string;
  marketInfo: {
    avgPrice: string;
    growth: string;
    properties: string;
    clients: string;
  };
  highlights: string[];
  gradient: string;
}

export default function RegionsSection() {
  const [activeRegion, setActiveRegion] = useState('deutschland');

  const regions: Region[] = [
    {
      id: 'deutschland',
      country: 'Deutschland',
      flag: '🇩🇪',
      cities: ['München', 'Hamburg', 'Berlin', 'Frankfurt', 'Düsseldorf'],
      description: 'Der deutsche Luxusimmobilienmarkt bietet stabile Investitionsmöglichkeiten in erstklassigen Lagen mit hoher Wertstabilität.',
      marketInfo: {
        avgPrice: '€2.8M',
        growth: '+12%',
        properties: '450+',
        clients: '280+'
      },
      highlights: [
        'Münchener Maximilianstraße & Bogenhausen',
        'Hamburger Blankenese & Harvestehude',
        'Berliner Grunewald & Charlottenburg',
        'Frankfurter Westend & Sachsenhausen'
      ],
      gradient: 'from-slate-50 to-white'
    },
    {
      id: 'oesterreich',
      country: 'Österreich',
      flag: '🇦🇹',
      cities: ['Wien', 'Salzburg', 'Innsbruck', 'Kitzbühel', 'Bad Ischl'],
      description: 'Österreichs Premiumimmobilien vereinen alpine Exklusivität mit urbaner Eleganz in den schönsten Regionen der Alpenrepublik.',
      marketInfo: {
        avgPrice: '€3.2M',
        growth: '+15%',
        properties: '320+',
        clients: '190+'
      },
      highlights: [
        'Wiener Innere Stadt & Döbling',
        'Salzburger Altstadt & Mönchsberg',
        'Kitzbüheler Hahnenkamm-Region',
        'Innsbrucker Hungerburg & Igls'
      ],
      gradient: 'from-slate-50 to-white'
    },
    {
      id: 'schweiz',
      country: 'Schweiz',
      flag: '🇨🇭',
      cities: ['Zürich', 'Genf', 'Basel', 'Zug', 'St. Moritz'],
      description: 'Die Schweiz steht für höchste Qualität und Exklusivität im Luxusimmobiliensegment mit einzigartigen alpinen Lagen.',
      marketInfo: {
        avgPrice: '€4.5M',
        growth: '+8%',
        properties: '180+',
        clients: '120+'
      },
      highlights: [
        'Zürcher Goldküste & Küsnacht',
        'Genfer Cologny & Bellevue',
        'St. Moritzer Suvretta & Champfèr',
        'Zuger Seeufer & Baar'
      ],
      gradient: 'from-slate-50 to-white'
    }
  ];

  const currentRegion = regions.find(r => r.id === activeRegion) || regions[0];

  return (
    <section id="regionen" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white relative">
      {/* Minimal decorative elements */}
      <div className="absolute top-0 right-0 w-full h-16 bg-gradient-to-l from-slate-25 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 opacity-0 animate-[fadeInUp_1s_0.2s_forwards]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-3 sm:mb-4 text-slate-900 font-light">
            Unsere Märkte
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-2">
            Exzellenz im DACH-Raum für Luxusimmobilien
          </p>
        </div>

        {/* Mobile: Flag-only tabs (side by side), Desktop: Full tabs */}
        <div className="flex justify-center gap-1 sm:gap-3 mb-10 sm:mb-12 opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`group relative transition-all duration-200 border touch-manipulation ${
                activeRegion === region.id
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              } ${
                // Mobile: compact flag-only buttons, Desktop: full width
                'px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl'
              }`}
            >
              <div className="flex items-center justify-center sm:gap-3">
                <span className="text-lg sm:text-xl">{region.flag}</span>
                <span className="hidden sm:block text-sm font-medium">{region.country}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Region Content */}
        <div className="max-w-5xl mx-auto opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
          <div className="rounded-xl bg-white border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              {/* Region Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl">{currentRegion.flag}</span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-slate-900 font-light">{currentRegion.country}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  {currentRegion.description}
                </p>
              </div>

              {/* Market Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center p-3 sm:p-4 bg-slate-50/70 rounded-lg">
                  <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{currentRegion.marketInfo.avgPrice}</div>
                  <div className="text-xs text-slate-500">Ø Objektwert</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50/70 rounded-lg">
                  <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{currentRegion.marketInfo.growth}</div>
                  <div className="text-xs text-slate-500">Wertzuwachs p.a.</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50/70 rounded-lg">
                  <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{currentRegion.marketInfo.properties}</div>
                  <div className="text-xs text-slate-500">Vermittelt</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50/70 rounded-lg">
                  <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{currentRegion.marketInfo.clients}</div>
                  <div className="text-xs text-slate-500">Zufriedene Kunden</div>
                </div>
              </div>

              {/* Cities and Highlights */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* Key Cities */}
                <div className="bg-slate-50/50 rounded-lg p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-display mb-3 flex items-center gap-2 text-slate-900 font-medium">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    Schlüsselmärkte
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentRegion.cities.map((city) => (
                      <span 
                        key={city}
                        className="px-2.5 py-1 bg-white text-slate-600 rounded-md text-xs sm:text-sm font-medium border border-slate-100"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Market Highlights */}
                <div className="bg-slate-50/50 rounded-lg p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-display mb-3 flex items-center gap-2 text-slate-900 font-medium">
                    <Building className="w-4 h-4 text-slate-500" />
                    Premium-Lagen
                  </h4>
                  <ul className="space-y-1.5">
                    {currentRegion.highlights.map((highlight) => (
                      <li 
                        key={highlight}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-600"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-6 sm:mt-8">
                <Button 
                  size="default"
                  className="rounded-full font-medium px-6 py-2.5 text-sm hover:scale-105 transition-all duration-300 bg-slate-900 hover:bg-slate-800 text-white"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Marktberatung anfragen
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
