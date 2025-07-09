'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  MapPin, 
  Home as HomeIcon, 
  Bed, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

interface Property {
  id: number;
  name: string;
  location: string;
  area: string;
  rooms: string;
  features: string[];
  images: string[];
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, property.images.length]);

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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <Card 
      className="group overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 bg-card border-border/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-96 overflow-hidden">
        {/* Main Image */}
        <div className="relative w-full h-full">
          {property.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${property.name} - Bild ${index + 1}`}
              fill
              className={`object-cover transition-all duration-700 ${
                index === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className={`absolute inset-0 flex items-center justify-between p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="secondary"
            size="icon"
            onClick={prevImage}
            className="bg-background/80 hover:bg-background backdrop-blur-sm shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="secondary"
            size="icon"
            onClick={nextImage}
            className="bg-background/80 hover:bg-background backdrop-blur-sm shadow-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Auto-play Control */}
        <div className={`absolute top-4 right-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleAutoPlay}
            className="bg-background/80 hover:bg-background backdrop-blur-sm shadow-lg"
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ 
              width: `${((currentImageIndex + 1) / property.images.length) * 100}%` 
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Property Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-serif font-bold mb-1">{property.name}</h3>
          <p className="text-sm opacity-90 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </p>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              {property.area}
            </span>
            <span className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.rooms}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Entdecken
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
    </Card>
  );
}
