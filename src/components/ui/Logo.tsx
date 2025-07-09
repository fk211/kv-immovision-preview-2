'use client';

import { Building2, Gem } from 'lucide-react';

interface LogoProps {
  compact?: boolean;
  onDark?: boolean;
}

export default function Logo({ compact = false, onDark = false }: LogoProps) {
  if (compact) {
    // Compact version for mobile
    return (
      <div className="flex items-center space-x-2 group">
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-lg flex items-center justify-center shadow-lg">
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
        <div className={`text-lg font-serif font-bold tracking-tight leading-none ${
          onDark ? 'drop-shadow-lg' : ''
        }`}>
          <span className={onDark ? 'text-white' : 'text-foreground'}>KG</span>
          <span className="text-primary mx-0.5">I</span>
          <span className={`text-sm font-light ${onDark ? 'text-white/80' : 'text-muted-foreground'}`}>AG</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 group">
      {/* Logo Icon */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
          <Building2 className="w-6 h-6 text-white" />
          <div className="absolute top-1 right-1">
            <Gem className="w-3 h-3 text-white/80" />
          </div>
        </div>
        {/* Accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <div className={`text-2xl font-serif font-bold tracking-tight leading-none ${
          onDark ? 'drop-shadow-lg' : ''
        }`}>
          <span className={onDark ? 'text-white' : 'text-foreground'}>KG</span>
          <span className="text-primary mx-1">Immovision</span>
          <span className={`text-sm font-light ${onDark ? 'text-white/80' : 'text-muted-foreground'}`}>AG</span>
        </div>
        <div className={`text-xs font-light tracking-[0.2em] uppercase leading-none mt-0.5 ${
          onDark ? 'text-white/70 drop-shadow-sm' : 'text-muted-foreground'
        }`}>
          Exklusivität. Vision. Vertrauen.
        </div>
      </div>
    </div>
  );
}
