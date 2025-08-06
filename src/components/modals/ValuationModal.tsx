'use client';

import { useState, useEffect } from 'react';
import { 
  Home, 
  Building, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';

interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function ValuationModal({ 
  isOpen, 
  onClose, 
  title = "Kostenlose Immobilienbewertung",
  subtitle = "Erhalten Sie eine professionelle Einschätzung Ihrer Immobilie"
}: ValuationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    buildingType: '',
    address: '',
    postalCode: '',
    city: '',
    livingArea: [100],
    rooms: [3],
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setFormData({
        propertyType: '',
        buildingType: '',
        address: '',
        postalCode: '',
        city: '',
        livingArea: [100],
        rooms: [3],
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Valuation request:', formData);
    onClose();
  };

  const propertyTypes = [
    { value: 'haus', label: 'Haus', icon: Home },
    { value: 'wohnung', label: 'Wohnung', icon: Building },
    { value: 'grundstueck', label: 'Grundstück', icon: MapPin },
    { value: 'gewerbe', label: 'Gewerbe', icon: Building }
  ];

  const buildingTypes = [
    { value: 'einfamilienhaus', label: 'Einfamilienhaus' },
    { value: 'doppelhaus', label: 'Doppelhaus' },
    { value: 'reihenhaus', label: 'Reihenhaus' },
    { value: 'villa', label: 'Villa' },
    { value: 'mehrfamilienhaus', label: 'Mehrfamilienhaus' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[70] animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-display font-semibold">{title}</h2>
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress */}
        <div className="px-6 py-4 bg-muted">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Schritt {currentStep} von {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Step 1: Property Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Welche Art von Immobilie möchten Sie bewerten lassen?</h3>
              <div className="grid grid-cols-2 gap-4">
                {propertyTypes.map((type) => (
                  <Card
                    key={type.value}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                      formData.propertyType === type.value 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setFormData({...formData, propertyType: type.value})}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <type.icon className="w-8 h-8 text-primary" />
                      <span className="font-medium">{type.label}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Building Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Details zur Immobilie</h3>
              
              {formData.propertyType === 'haus' && (
                <div className="space-y-4">
                  <Label>Haustyp</Label>
                  <RadioGroup 
                    value={formData.buildingType} 
                    onValueChange={(value) => setFormData({...formData, buildingType: value})}
                  >
                    {buildingTypes.map((type) => (
                      <div key={type.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <Label htmlFor={type.value}>{type.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Wohnfläche (m²)</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      value={formData.livingArea[0]}
                      onChange={(e) => setFormData({...formData, livingArea: [parseInt(e.target.value) || 100]})}
                      min="20"
                      max="1000"
                    />
                  </div>
                </div>
                <div>
                  <Label>Anzahl Zimmer</Label>
                  <div className="mt-2">
                    <Input
                      type="number"
                      value={formData.rooms[0]}
                      onChange={(e) => setFormData({...formData, rooms: [parseInt(e.target.value) || 3]})}
                      min="1"
                      max="20"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Wo befindet sich Ihre Immobilie?</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Straße und Hausnummer"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postalCode">PLZ</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Stadt</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Stadt"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Information */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Ihre Kontaktdaten</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="ihre@email.de"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+49 123 456 789"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-muted">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Zurück
          </Button>
          
          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !formData.propertyType) ||
                (currentStep === 3 && (!formData.address || !formData.postalCode || !formData.city))
              }
              className="flex items-center gap-2"
            >
              Weiter
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!formData.firstName || !formData.lastName || !formData.email}
              className="flex items-center gap-2"
            >
              Bewertung anfordern
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
