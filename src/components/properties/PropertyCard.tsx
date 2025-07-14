'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, Home, Maximize2, Sparkles, Mountain, Car, Wifi, Dumbbell, Calendar, Trees, Waves, Eye } from 'lucide-react';
import { getPropertyUrl, type Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const nextImage = () => {
    if (property.sold) return;
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (property.sold) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (property.sold) return;
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setTouchEnd(null);
    setIsDragging(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (property.sold || !touchStart) return;
    
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStart.x);
    const deltaY = Math.abs(touch.clientY - touchStart.y);
    
    // Lockere Erkennung: horizontale Bewegung bevorzugt, aber nicht zu streng
    if (deltaX > 15 && deltaX > deltaY) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    }
    
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (property.sold || !touchStart || !touchEnd) {
      setTouchStart(null);
      setTouchEnd(null);
      setIsDragging(false);
      return;
    }
    
    // Handle swipe wenn horizontale Bewegung dominiert
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      const deltaX = touchStart.x - touchEnd.x;
      const deltaY = Math.abs(touchStart.y - touchEnd.y);
      if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > deltaY) {
        if (deltaX > 0) {
          nextImage();
        } else {
          prevImage();
        }
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  };

  const handleImageError = (src: string) => {
    console.log('Image loading error for:', src);
    setImageError(prev => ({ ...prev, [src]: true }));
  };

  const getFeatureIcon = (feature: string) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('pool') || lowerFeature.includes('schwimmbad')) return <Waves className="w-4 h-4" />;
    if (lowerFeature.includes('garten') || lowerFeature.includes('garden') || lowerFeature.includes('park')) return <Trees className="w-4 h-4" />;
    if (lowerFeature.includes('garage') || lowerFeature.includes('parking') || lowerFeature.includes('stellplatz')) return <Car className="w-4 h-4" />;
    if (lowerFeature.includes('wellness') || lowerFeature.includes('fitness') || lowerFeature.includes('spa')) return <Dumbbell className="w-4 h-4" />;
    if (lowerFeature.includes('modern') || lowerFeature.includes('smart') || lowerFeature.includes('technologie')) return <Wifi className="w-4 h-4" />;
    if (lowerFeature.includes('blick') || lowerFeature.includes('view') || lowerFeature.includes('panorama')) return <Eye className="w-4 h-4" />;
    if (lowerFeature.includes('luxus') || lowerFeature.includes('exklusiv') || lowerFeature.includes('premium')) return <Sparkles className="w-4 h-4" />;
    if (lowerFeature.includes('terrasse') || lowerFeature.includes('balkon') || lowerFeature.includes('loggia')) return <Mountain className="w-4 h-4" />;
    return <Home className="w-4 h-4" />;
  };

  return (
    <Link 
      href={property.sold ? '#' : getPropertyUrl(property)}
      className={`block group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-500 overflow-hidden flex flex-col transform hover:-translate-y-1 ${
        property.sold ? 'opacity-75 cursor-default' : 'cursor-pointer'
      }`} 
      style={{ height: '520px' }}
      onClick={(e) => {
        if (property.sold) {
          e.preventDefault();
        }
      }}
    >
      {/* Image Slider */}
      <div 
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: '240px', touchAction: 'pan-y pinch-zoom' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {property.images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {!imageError[src] ? (
              <Image
                src={src}
                alt={`${property.name} - Bild ${index + 1}`}
                fill
                className="object-cover"
                onError={() => handleImageError(src)}
                onLoad={() => console.log('Image loaded successfully:', src)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0} // Priorität für das erste Bild
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Home className="w-16 h-16 text-gray-400" />
                <p className="text-xs text-gray-500 mt-2">Bild konnte nicht geladen werden</p>
              </div>
            )}
          </div>
        ))}

        {/* VERKAUFT Overlay */}
        {property.sold && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-xl transform -rotate-12 shadow-lg">
              VERKAUFT
            </div>
          </div>
        )}

        {/* Navigation Arrows - Show clearly on desktop hover */}
        {!property.sold && property.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 z-20 hidden md:opacity-0 md:group-hover:opacity-100 md:flex"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 z-20 hidden md:opacity-0 md:group-hover:opacity-100 md:flex"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </>
        )}

        {/* Image Counter & Swipe Indicator - Only if not sold */}
        {!property.sold && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm flex items-center">
            {/* Swipe Indicator - Only on mobile with multiple images */}
            {property.images.length > 1 && (
              <div className="md:hidden flex items-center mr-2">
                <ChevronLeft className="w-3 h-3" />
                <span className="mx-1 text-sm font-medium">swipe</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            )}
            
            {/* Image Counter */}
            <span>{currentImageIndex + 1} / {property.images.length}</span>
          </div>
        )}

        {/* Image Dots - Only if not sold */}
        {!property.sold && property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`h-2 rounded-full transition-all duration-300 border border-white/30 ${
                  index === currentImageIndex
                    ? 'bg-white w-8 shadow-lg'
                    : 'bg-white/60 hover:bg-white/90 w-2'
                }`}
              />
            ))}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* Title and Location */}
        <div className="mb-3">
          <h3 className="text-lg font-display font-bold text-gray-900 mb-2 line-clamp-1">
            {property.name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
        </div>

        {/* Key Facts - Fixed height */}
        <div className="mb-4" style={{ minHeight: '84px' }}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <Maximize2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-xs font-medium">{property.area}</span>
            </div>
            <div className="flex items-center">
              <Home className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-xs font-medium">{property.rooms}</span>
            </div>
            {property.year && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-xs font-medium">{property.year}</span>
              </div>
            )}
            {property.parking && (
              <div className="flex items-center">
                <Car className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-xs font-medium">{property.parking}</span>
              </div>
            )}
            {property.view && (
              <div className="flex items-center">
                <Eye className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-xs font-medium">{property.view}</span>
              </div>
            )}
            {property.style && (
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-xs font-medium">{property.style}</span>
              </div>
            )}
          </div>
        </div>

        {/* Features - Fixed height */}
        <div style={{ minHeight: '70px' }}>
          <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
            {property.sold ? 'Status' : 'Highlights'}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {property.sold ? (
              <div className="flex items-center bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                <span className="ml-1">Erfolgreich verkauft</span>
              </div>
            ) : (
              <>
                {property.features.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {getFeatureIcon(feature)}
                    <span className="ml-1">{feature}</span>
                  </div>
                ))}
                {property.features.length > 2 && (
                  <div className="flex items-center bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                    +{property.features.length - 2} weitere
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
