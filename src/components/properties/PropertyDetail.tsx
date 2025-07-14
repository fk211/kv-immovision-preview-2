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
  Phone,
  Mail,
  Share2,
  Heart,
  Check,
  BedDouble,
  Bath,
  Leaf,
  FileText,
  CheckCircle,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Property } from '@/data/properties';

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

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

  // Touch Event Handlers für Mobile Swipe
  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setTouchEnd(null);
    setIsDragging(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStart.x);
    const deltaY = Math.abs(touch.clientY - touchStart.y);
    
    // Only prevent default if this is clearly a horizontal swipe
    if (deltaX > deltaY && deltaX > 25 && deltaY < 15) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    }
    
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !touchEnd) {
      setTouchStart(null);
      setTouchEnd(null);
      setIsDragging(false);
      return;
    }
    
    // Only handle the touch if we detected dragging
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      
      const deltaX = touchStart.x - touchEnd.x;
      const deltaY = Math.abs(touchStart.y - touchEnd.y);
      
      // Only trigger if horizontal swipe is significant and greater than vertical
      if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > deltaY * 2) {
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
    setImageError(prev => ({ ...prev, [src]: true }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <Link 
              href="/#referenzen"
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zu allen Properties
            </Link>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Merken
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Teilen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Main Image */}
              <div 
                className="relative h-[400px] md:h-[500px] lg:h-[600px]"
                style={{ touchAction: 'pan-y pinch-zoom' }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {!imageError[property.images[currentImageIndex]] ? (
                  <Image
                    src={property.images[currentImageIndex]}
                    alt={`${property.name} - Bild ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(property.images[currentImageIndex])}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Home className="w-20 h-20 text-gray-400" />
                  </div>
                )}

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 z-10 opacity-0 md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 z-10 opacity-0 md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </>
                )}

                {/* Image Counter & Swipe Indicator */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm flex items-center">
                  {/* Swipe Indicator - Only on mobile with multiple images */}
                  {property.images.length > 1 && (
                    <div className="md:hidden flex items-center mr-3">
                      <ChevronLeft className="w-3 h-3" />
                      <span className="mx-1 text-sm font-medium">swipe</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  )}
                  
                  {/* Image Counter */}
                  <span>{currentImageIndex + 1} / {property.images.length}</span>
                </div>

                {/* Image Dots */}
                {property.images.length > 1 && (
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
              </div>

              {/* Thumbnail Gallery */}
              {property.images.length > 1 && (
                <div className="p-4 bg-gray-50">
                  <div className="flex space-x-2 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'ring-2 ring-primary scale-105' 
                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                        }`}
                      >
                        {!imageError[image] ? (
                          <Image
                            src={image}
                            alt={`${property.name} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(image)}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <Home className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Property Info Sidebar */}
          <div className="space-y-6">
            {/* Price & Key Details Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{property.name}</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl md:text-4xl font-bold text-blue-900">{property.price}</p>
                  <p className="text-gray-600 text-sm mt-1">Kaufpreis</p>
                </div>
              </div>

              {/* Key Property Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-3 mb-2">
                    <Home className="w-6 h-6 text-blue-600 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{property.size}m²</p>
                  <p className="text-sm text-gray-600">Wohnfläche</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-3 mb-2">
                    <BedDouble className="w-6 h-6 text-green-600 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{property.bedrooms}</p>
                  <p className="text-sm text-gray-600">Schlafzimmer</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-3 mb-2">
                    <Bath className="w-6 h-6 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{property.bathrooms}</p>
                  <p className="text-sm text-gray-600">Badezimmer</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-50 rounded-lg p-3 mb-2">
                    <Leaf className="w-6 h-6 text-orange-600 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{property.energyClass}</p>
                  <p className="text-sm text-gray-600">Energieklasse</p>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Objektbeschreibung
              </h3>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Features & Amenities */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Ausstattung & Besonderheiten
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Property Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-600" />
                Weitere Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Grundstücksinformationen</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grundstücksgröße:</span>
                      <span className="font-medium">{property.landSize}m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Baujahr:</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Heizungsart:</span>
                      <span className="font-medium">{property.heatingType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parkplätze:</span>
                      <span className="font-medium">{property.parkingSpaces}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Kostenübersicht</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kaufpreis:</span>
                      <span className="font-medium text-blue-900">{property.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nebenkosten:</span>
                      <span className="font-medium">{property.additionalCosts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Provision:</span>
                      <span className="font-medium">{property.commission}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-gray-800 font-semibold">Gesamtpreis:</span>
                      <span className="font-bold text-blue-900">{property.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Transport */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-600" />
                Lage & Verkehrsanbindung
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Infrastruktur</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.nearbyAmenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <MapPin className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Entfernungen</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.distances.map((distance, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{distance.location}:</span>
                        <span className="font-medium">{distance.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Kontakt & Besichtigung
              </h3>
              <p className="mb-4 text-blue-100">
                Interessiert an dieser Immobilie? Kontaktieren Sie uns für eine persönliche Besichtigung oder weitere Informationen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </button>
                <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 border border-blue-600 flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  E-Mail senden
                </button>
                <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 border border-blue-600 flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Besichtigung vereinbaren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
