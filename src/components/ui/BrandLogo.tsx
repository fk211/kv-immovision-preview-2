'use client';

import Image from 'next/image';

interface BrandLogoProps {
  scrolled?: boolean;
  mobileMenuOpen?: boolean;
  className?: string;
}

export default function BrandLogo({ scrolled = false, mobileMenuOpen = false, className = '' }: BrandLogoProps) {
  // Bestimme die Logo-Quelle basierend auf dem Zustand
  // 1. Bei offenem mobilen Menü: immer das schwarze Logo
  // 2. Beim Scrollen: schwarzes Logo
  // 3. Standard/Anfang: weißes Logo für besseren Kontrast auf dunklem Hintergrund
  const logoSrc = mobileMenuOpen || scrolled 
    ? '/images/logos/kg-immovision-logo-small.svg'
    : '/images/logos/kg-immovision-logo-white.svg';
  
  // Mobile-first responsive Logo-Größen
  const getLogoSize = () => {
    if (mobileMenuOpen) {
      return { width: 90, height: 45, maxHeight: '45px' };
    }
    if (scrolled) {
      return { width: 80, height: 40, maxHeight: '40px' };
    }
    return { width: 120, height: 60, maxHeight: '60px' };
  };
  
  const logoSize = getLogoSize();
  
  return (
    <div className={`relative transition-all duration-300 py-1 sm:py-1.5 md:py-2 lg:py-3 ${className}`}>
      <Image
        src={logoSrc}
        alt="KG Immovision AG"
        width={logoSize.width}
        height={logoSize.height}
        priority
        className="transition-all duration-500"
        style={{ 
          objectFit: 'contain',
          maxHeight: logoSize.maxHeight
        }}
      />
    </div>
  );
}
