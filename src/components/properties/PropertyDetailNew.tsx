'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Home, 
  Calendar, 
  Car, 
  Eye, 
  Phone,
  Mail,
  Share2,
  Heart,
  BedDouble,
  Bath,
  Leaf,
  Info,
  Building2,
  Thermometer,
  Wifi,
  Waves,
  Trees,
  Dumbbell,
  Mountain,
  Sparkles
} from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetailNew({ property }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || touchStartY === null) return;
    
    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    setTouchEnd(currentX);
    
    const deltaX = Math.abs(touchStart - currentX);
    const deltaY = Math.abs(touchStartY - currentY);
    
    // If user starts moving horizontally (even slightly), treat as swipe
    if (deltaX > 10 || deltaX >= deltaY) {
      e.preventDefault(); // Prevent scrolling when swiping
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 30;
    
    if (Math.abs(distance) > minSwipeDistance && property.images.length > 1) {
      if (distance > 0) {
        nextImage(); // Swipe left - next image
      } else {
        prevImage(); // Swipe right - previous image
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
    setTouchStartY(null);
  };

  const handleImageError = (src: string) => {
    setImageError(prev => ({ ...prev, [src]: true }));
  };

  const getFeatureIcon = (feature: string) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('pool') || lowerFeature.includes('schwimmbad')) return <Waves className="w-5 h-5 text-slate-600" />;
    if (lowerFeature.includes('garten') || lowerFeature.includes('garden') || lowerFeature.includes('park')) return <Trees className="w-5 h-5 text-slate-600" />;
    if (lowerFeature.includes('garage') || lowerFeature.includes('parking') || lowerFeature.includes('stellplatz')) return <Car className="w-5 h-5 text-slate-600" />;
    if (lowerFeature.includes('wellness') || lowerFeature.includes('fitness') || lowerFeature.includes('spa')) return <Dumbbell className="w-5 h-5 text-slate-600" />;
    if (lowerFeature.includes('modern') || lowerFeature.includes('smart') || lowerFeature.includes('technologie')) return <Wifi className="w-5 h-5 text-slate-600" />;
    if (lowerFeature.includes('blick') || lowerFeature.includes('view') || lowerFeature.includes('panorama')) return <Eye className="w-5 h-5 text-slate-600" />;
    if (lowerFeature.includes('luxus') || lowerFeature.includes('exklusiv') || lowerFeature.includes('premium')) return <Sparkles className="w-5 h-5 text-slate-600" />;
    if (lowerFeature.includes('terrasse') || lowerFeature.includes('balkon') || lowerFeature.includes('loggia')) return <Mountain className="w-5 h-5 text-slate-600" />;
    return <Home className="w-5 h-5 text-slate-600" />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image Gallery */}
      <div className="relative">
        {/* Navigation Overlay */}
        <div className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/70 to-transparent">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link 
                href="/#referenzen"
                className="flex items-center text-white hover:text-white/80 transition-all duration-300 group"
              >
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="ml-3 font-medium text-lg hidden md:block">Zurück zur Übersicht</span>
              </Link>
              
              <div className="flex items-center space-x-3">
                <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div 
          className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] group cursor-pointer"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {!imageError[property.images[currentImageIndex]] ? (
            <Image
              src={property.images[currentImageIndex]}
              alt={`${property.name} - Bild ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-300"
              onError={() => handleImageError(property.images[currentImageIndex])}
              priority
              quality={85}
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <Home className="w-20 h-20 text-slate-400" />
            </div>
          )}

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Navigation Arrows - Hidden on Mobile, visible on Desktop */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/20 backdrop-blur-sm rounded-full items-center justify-center shadow-xl hover:bg-black/40 hover:scale-110 transition-all duration-300 hidden md:flex"
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/20 backdrop-blur-sm rounded-full items-center justify-center shadow-xl hover:bg-black/40 hover:scale-110 transition-all duration-300 hidden md:flex"
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>
            </>
          )}

          {/* Image Counter & Swipe Indicator - Higher z-index than navigation */}
          <div className="absolute top-6 right-6 z-50 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center pointer-events-none">
            {property.images.length > 1 && (
              <div className="md:hidden flex items-center mr-3">
                <ChevronLeft className="w-3 h-3" />
                <span className="mx-1 text-sm font-medium">swipe</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            )}
            <span>{currentImageIndex + 1} / {property.images.length}</span>
          </div>

          {/* Image Dots - Positioned lower on mobile to avoid conflicts */}
          {property.images.length > 1 && (
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-none">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-3 rounded-full transition-all duration-300 border border-white/30 pointer-events-auto ${
                    index === currentImageIndex
                      ? 'bg-white w-10 shadow-lg'
                      : 'bg-white/40 hover:bg-white/70 w-3'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Property Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 pointer-events-none">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-3 md:mb-4">
                {property.name}
              </h1>
              <div className="flex items-center text-slate-200 text-lg md:text-xl">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-2 bg-black/20 backdrop-blur-sm rounded-xl p-2">
            {property.images.slice(0, 6).map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-2 ring-white scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                {!imageError[image] ? (
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(image)}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                    <Home className="w-6 h-6 text-slate-500" />
                  </div>
                )}
              </button>
            ))}
            {property.images.length > 6 && (
              <div className="w-16 h-12 rounded-lg bg-black/40 flex items-center justify-center text-white text-sm font-medium">
                +{property.images.length - 6}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Quick Facts */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="mb-4 md:mb-0">
                  <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">{property.price}</p>
                  <p className="text-slate-600">Kaufpreis</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                    <Home className="w-5 h-5 text-slate-600 mr-2" />
                    <span className="font-semibold text-slate-800">{property.size}m²</span>
                  </div>
                  <div className="flex items-center bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                    <BedDouble className="w-5 h-5 text-slate-600 mr-2" />
                    <span className="font-semibold text-slate-800">{property.bedrooms} Zimmer</span>
                  </div>
                  <div className="flex items-center bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                    <Bath className="w-5 h-5 text-slate-600 mr-2" />
                    <span className="font-semibold text-slate-800">{property.bathrooms} Bäder</span>
                  </div>
                  <div className="flex items-center bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                    <Leaf className="w-5 h-5 text-slate-600 mr-2" />
                    <span className="font-semibold text-slate-800">{property.energyClass}</span>
                  </div>
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="bg-slate-100 rounded-xl p-4 mb-3 inline-block border border-slate-200">
                    <Building2 className="w-8 h-8 text-slate-700 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{property.yearBuilt}</p>
                  <p className="text-slate-600">Baujahr</p>
                </div>
                <div className="text-center">
                  <div className="bg-slate-100 rounded-xl p-4 mb-3 inline-block border border-slate-200">
                    <Car className="w-8 h-8 text-slate-700 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{property.parkingSpaces}</p>
                  <p className="text-slate-600">Stellplätze</p>
                </div>
                <div className="text-center">
                  <div className="bg-slate-100 rounded-xl p-4 mb-3 inline-block border border-slate-200">
                    <Thermometer className="w-8 h-8 text-slate-700 mx-auto" />
                  </div>
                  <p className="text-lg font-bold text-slate-900">{property.heatingType}</p>
                  <p className="text-slate-600">Heizung</p>
                </div>
                <div className="text-center">
                  <div className="bg-slate-100 rounded-xl p-4 mb-3 inline-block border border-slate-200">
                    <Home className="w-8 h-8 text-slate-700 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{property.landSize}m²</p>
                  <p className="text-slate-600">Grundstück</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Objektbeschreibung</h2>
              <p className="text-slate-700 leading-relaxed text-lg">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Ausstattung & Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-4 border border-slate-200">
                      {getFeatureIcon(feature)}
                    </div>
                    <span className="text-slate-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-slate-600" />
                Lage & Umgebung
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Infrastruktur</h3>
                  <div className="space-y-3">
                    {property.nearbyAmenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                        <span className="text-slate-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Entfernungen</h3>
                  <div className="space-y-3">
                    {property.distances.map((distance, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-slate-700">{distance.location}</span>
                        <span className="font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                          {distance.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-slate-900 rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-2xl font-display font-bold mb-4">Interesse geweckt?</h3>
              <p className="text-slate-300 mb-6 text-lg">
                Kontaktieren Sie uns für eine persönliche Besichtigung oder weitere Informationen.
              </p>
              
              <div className="space-y-4 mb-8">
                <button className="w-full bg-white text-slate-900 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 flex items-center justify-center group">
                  <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Jetzt anrufen
                </button>
                <button className="w-full bg-slate-800 border border-slate-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group">
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  E-Mail senden
                </button>
                <button className="w-full bg-slate-800 border border-slate-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group">
                  <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Besichtigung vereinbaren
                </button>
              </div>

              <div className="border-t border-slate-700 pt-6 space-y-3">
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+49 151 27276715</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>info@kg-immovision.ch</span>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center">
                <Info className="w-5 h-5 mr-2 text-slate-600" />
                Kostenübersicht
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Kaufpreis</span>
                  <span className="font-bold text-slate-900 text-lg">{property.price}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Nebenkosten</span>
                  <span className="font-semibold text-slate-800">{property.additionalCosts}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Provision</span>
                  <span className="font-semibold text-slate-800">{property.commission}</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-slate-50 rounded-lg px-4 border border-slate-200">
                  <span className="font-bold text-slate-900">Gesamtpreis</span>
                  <span className="font-bold text-slate-900 text-xl">{property.totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
