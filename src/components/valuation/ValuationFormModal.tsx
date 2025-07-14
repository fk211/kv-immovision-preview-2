'use client';

import { useState, useEffect } from 'react';
import { 
  Home, 
  Building, 
  MapPin, 
  Ruler, 
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

interface ValuationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ValuationFormModal({ isOpen, onClose }: ValuationFormModalProps) {
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
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const totalSteps = formData.propertyType === 'house' ? 4 : 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const updateFormData = (field: string, value: string | number | number[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto animate-[fadeInUp_0.3s_ease-in-out]">
        <Card className="p-3 xs:p-4 sm:p-5 md:p-6 bg-white/98 backdrop-blur-sm shadow-2xl border-0 relative">
          {/* Close Button - Sticky */}
          <button 
            onClick={onClose}
            className="sticky top-4 right-4 ml-auto w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors shadow-lg z-30 border border-red-200 float-right"
            style={{ marginBottom: '-2.5rem' }}
          >
            <X className="w-5 h-5 text-red-600" />
          </button>
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base xs:text-lg md:text-xl font-serif text-slate-900">
              Immobilienbewertung
            </h3>
          </div>

          <div className="space-y-3 xs:space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-slate-600 text-xs sm:text-sm">
                Schritt {currentStep} von {totalSteps}
              </p>
              <div className="text-slate-800">
                {currentStep === 1 && <Home className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />}
                {currentStep === 2 && formData.propertyType === 'house' && <Building className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />}
                {((currentStep === 2 && formData.propertyType !== 'house') || (currentStep === 3 && formData.propertyType === 'house')) && <MapPin className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />}
                {((currentStep === 3 && formData.propertyType !== 'house') || (currentStep === 4 && formData.propertyType === 'house')) && <Ruler className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />}
              </div>
            </div>

            <Progress value={(currentStep / totalSteps) * 100} className="h-1 xs:h-1.5 md:h-2" />

            <div className="min-h-[260px] xs:min-h-[280px] md:min-h-[320px]">
              {/* Step 1: Property Type */}
              {currentStep === 1 && (
                <div className="space-y-4 xs:space-y-5">
                  <div className="flex items-center mb-4 xs:mb-6">
                    <Home className="w-4 h-4 xs:w-5 xs:h-5 text-slate-800 mr-2 xs:mr-3" />
                    <h4 className="text-slate-900 font-semibold text-base xs:text-lg">Was möchten Sie bewerten?</h4>
                  </div>
                  
                  <RadioGroup 
                    value={formData.propertyType} 
                    onValueChange={(value) => updateFormData('propertyType', value)}
                    className="space-y-2 xs:space-y-3"
                  >
                    {[
                      { value: 'house', label: 'Einfamilienhaus', icon: Home, desc: 'Freistehendes Haus, Villa oder Bungalow' },
                      { value: 'apartment', label: 'Eigentumswohnung', icon: Building, desc: 'Wohnung in einem Mehrfamilienhaus' },
                      { value: 'multi-family', label: 'Mehrfamilienhaus', icon: Building, desc: 'Gebäude mit mehreren Wohneinheiten' },
                      { value: 'plot', label: 'Grundstück', icon: MapPin, desc: 'Unbebautes oder bebautes Grundstück' }
                    ].map((option) => (
                      <Label 
                        key={option.value} 
                        htmlFor={option.value} 
                        className="flex items-start space-x-3 xs:space-x-4 p-2.5 xs:p-3 sm:p-4 border-2 border-slate-300 rounded-xl hover:border-slate-800 hover:bg-slate-50 transition-all cursor-pointer group"
                      >
                        <RadioGroupItem value={option.value} id={option.value} className="mt-1 border-slate-400 text-slate-800" />
                        <option.icon className="w-4 h-4 xs:w-5 xs:h-5 text-slate-700 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 group-hover:text-slate-800 text-sm xs:text-base">{option.label}</div>
                          <div className="text-xs xs:text-sm text-slate-600 mt-0.5 xs:mt-1">{option.desc}</div>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 2: Building Type (nur bei Einfamilienhaus) */}
              {currentStep === 2 && formData.propertyType === 'house' && (
                <div className="space-y-4 xs:space-y-5">
                  <div className="flex items-center mb-4 xs:mb-6">
                    <Building className="w-4 h-4 xs:w-5 xs:h-5 text-slate-800 mr-2 xs:mr-3" />
                    <h4 className="text-slate-900 font-semibold text-base xs:text-lg">Welcher Haustyp?</h4>
                  </div>
                  
                  <RadioGroup 
                    value={formData.buildingType} 
                    onValueChange={(value) => updateFormData('buildingType', value)}
                    className="space-y-2 xs:space-y-3"
                  >
                    {[
                      { value: 'detached', label: 'Freistehendes Haus', desc: 'Einzelstehendes Einfamilienhaus' },
                      { value: 'semi-detached', label: 'Doppelhaushälfte', desc: 'Mit einem anderen Haus verbunden' },
                      { value: 'terraced', label: 'Reihenhaus', desc: 'Teil einer zusammenhängenden Häuserreihe' },
                      { value: 'villa', label: 'Villa', desc: 'Großzügiges, hochwertiges Einfamilienhaus' },
                      { value: 'bungalow', label: 'Bungalow', desc: 'Einstöckiges Einfamilienhaus' }
                    ].map((option) => (
                      <Label 
                        key={option.value} 
                        htmlFor={option.value} 
                        className="flex items-start space-x-3 xs:space-x-4 p-2.5 xs:p-3 sm:p-4 border-2 border-slate-300 rounded-xl hover:border-slate-800 hover:bg-slate-50 transition-all cursor-pointer group"
                      >
                        <RadioGroupItem value={option.value} id={option.value} className="mt-1 border-slate-400 text-slate-800" />
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 group-hover:text-slate-800 text-sm xs:text-base">{option.label}</div>
                          <div className="text-xs xs:text-sm text-slate-600 mt-0.5 xs:mt-1">{option.desc}</div>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 2/3: Location */}
              {((currentStep === 2 && formData.propertyType !== 'house') || (currentStep === 3 && formData.propertyType === 'house')) && (
                <div className="space-y-4 xs:space-y-5">
                  <div className="flex items-center mb-4 xs:mb-6">
                    <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-slate-800 mr-2 xs:mr-3" />
                    <h4 className="text-slate-900 font-semibold text-base xs:text-lg">Wo befindet sich die Immobilie?</h4>
                  </div>
                  
                  <div className="space-y-3 xs:space-y-4">
                    <div>
                      <Label className="text-slate-800 font-semibold mb-1.5 xs:mb-2 block text-sm xs:text-base">Straße und Hausnummer</Label>
                      <Input
                        placeholder="z.B. Hauptstraße 123"
                        value={formData.address}
                        onChange={(e) => updateFormData('address', e.target.value)}
                        className="h-10 xs:h-11 sm:h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                      />
                    </div>

                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                      <div>
                        <Label className="text-slate-800 font-semibold mb-1.5 xs:mb-2 block text-sm xs:text-base">Postleitzahl</Label>
                        <Input
                          placeholder="12345"
                          value={formData.postalCode}
                          onChange={(e) => updateFormData('postalCode', e.target.value)}
                          className="h-10 xs:h-11 sm:h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                        />
                      </div>
                      <div>
                        <Label className="text-slate-800 font-semibold mb-1.5 xs:mb-2 block text-sm xs:text-base">Ort</Label>
                        <Input
                          placeholder="München"
                          value={formData.city}
                          onChange={(e) => updateFormData('city', e.target.value)}
                          className="h-10 xs:h-11 sm:h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3/4: Contact */}
              {((currentStep === 3 && formData.propertyType !== 'house') || (currentStep === 4 && formData.propertyType === 'house')) && (
                <div className="space-y-4 xs:space-y-5">
                  <div className="flex items-center mb-4 xs:mb-6">
                    <Ruler className="w-4 h-4 xs:w-5 xs:h-5 text-slate-800 mr-2 xs:mr-3" />
                    <h4 className="text-slate-900 font-semibold text-base xs:text-lg">Ihre Kontaktdaten</h4>
                  </div>
                  
                  <div className="space-y-3 xs:space-y-4">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                      <div>
                        <Label className="text-slate-800 font-semibold mb-1.5 xs:mb-2 block text-sm xs:text-base">Vorname</Label>
                        <Input
                          name="firstName"
                          placeholder="Max"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="h-10 xs:h-11 sm:h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                        />
                      </div>
                      <div>
                        <Label className="text-slate-800 font-semibold mb-1.5 xs:mb-2 block text-sm xs:text-base">Nachname</Label>
                        <Input
                          name="lastName"
                          placeholder="Mustermann"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="h-10 xs:h-11 sm:h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-slate-800 font-semibold mb-1.5 xs:mb-2 block text-sm xs:text-base">E-Mail Adresse</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="max.mustermann@email.de"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-10 xs:h-11 sm:h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                      />
                    </div>

                    <div>
                      <Label className="text-slate-800 font-semibold mb-1.5 xs:mb-2 block text-sm xs:text-base">Telefonnummer</Label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+49 89 123456789"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-10 xs:h-11 sm:h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 xs:pt-6 border-t border-slate-300">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-slate-400 text-slate-700 hover:bg-slate-100 disabled:opacity-50 h-9 xs:h-10 sm:h-12 px-3 xs:px-4 sm:px-6 text-xs xs:text-sm sm:text-base"
              >
                <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                Zurück
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-slate-900 hover:bg-slate-800 text-white h-9 xs:h-10 sm:h-12 px-3 xs:px-4 sm:px-6 text-xs xs:text-sm sm:text-base"
                >
                  Weiter
                  <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 ml-1 xs:ml-2" />
                </Button>
              ) : (
                <Button className="bg-slate-900 hover:bg-slate-800 text-white h-9 xs:h-10 sm:h-12 px-3 xs:px-4 sm:px-6 text-xs xs:text-sm sm:text-base">
                  Bewertung anfordern
                </Button>
              )}
            </div>

            <div className="text-center pt-1 xs:pt-2">
              <p className="text-[10px] xs:text-xs text-slate-600 leading-relaxed font-medium">
                ✓ Kostenlos & unverbindlich ✓ Professionelle Bewertung ✓ Antwort in 24h
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
