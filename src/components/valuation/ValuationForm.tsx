'use client';

import { useState } from 'react';
import { 
  Home, 
  Building, 
  MapPin, 
  Ruler, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';

export default function ValuationForm() {
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

  return (
    <Card className="p-6 bg-white/98 backdrop-blur-sm shadow-2xl border-0 opacity-0 animate-[fadeInUp_1s_1s_forwards]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-1">
              Immobilienbewertung
            </h3>
            <p className="text-slate-600 text-sm">
              Schritt {currentStep} von {totalSteps}
            </p>
          </div>
          <div className="text-slate-800">
            {currentStep === 1 && <Home className="w-6 h-6" />}
            {currentStep === 2 && formData.propertyType === 'house' && <Building className="w-6 h-6" />}
            {((currentStep === 2 && formData.propertyType !== 'house') || (currentStep === 3 && formData.propertyType === 'house')) && <MapPin className="w-6 h-6" />}
            {((currentStep === 3 && formData.propertyType !== 'house') || (currentStep === 4 && formData.propertyType === 'house')) && <Ruler className="w-6 h-6" />}
          </div>
        </div>

        <Progress value={(currentStep / totalSteps) * 100} className="h-2" />

        <div className="min-h-[320px]">
          {/* Step 1: Property Type */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="flex items-center mb-6">
                <Home className="w-5 h-5 text-slate-800 mr-3" />
                <h4 className="text-slate-900 font-semibold text-lg">Was möchten Sie bewerten?</h4>
              </div>
              
              <RadioGroup 
                value={formData.propertyType} 
                onValueChange={(value) => updateFormData('propertyType', value)}
                className="space-y-3"
              >
                {[
                  { value: 'house', label: 'Einfamilienhaus', icon: Home, desc: 'Freistehendes Haus, Villa oder Bungalow' },
                  { value: 'apartment', label: 'Eigentumswohnung', icon: Building, desc: 'Wohnung in einem Mehrfamilienhaus' },
                  { value: 'multi-family', label: 'Mehrfamilienhaus', icon: Building, desc: 'Gebäude mit mehreren Wohneinheiten' },
                  { value: 'plot', label: 'Grundstück', icon: MapPin, desc: 'Unbebautes oder bebautes Grundstück' }
                ].map((option) => (
                  <Label 
                    key={option.value} 
                    htmlFor={`desktop-${option.value}`}
                    className="flex items-start space-x-4 p-4 border-2 border-slate-300 rounded-xl hover:border-slate-800 hover:bg-slate-50 transition-all cursor-pointer group"
                  >
                    <RadioGroupItem value={option.value} id={`desktop-${option.value}`} className="mt-1 border-slate-400 text-slate-800" />
                    <option.icon className="w-5 h-5 text-slate-700 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-slate-800">{option.label}</div>
                      <div className="text-sm text-slate-600 mt-1">{option.desc}</div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 2: Building Type (nur bei Einfamilienhaus) */}
          {currentStep === 2 && formData.propertyType === 'house' && (
            <div className="space-y-5">
              <div className="flex items-center mb-6">
                <Building className="w-5 h-5 text-slate-800 mr-3" />
                <h4 className="text-slate-900 font-semibold text-lg">Welcher Haustyp?</h4>
              </div>
              
              <RadioGroup 
                value={formData.buildingType} 
                onValueChange={(value) => updateFormData('buildingType', value)}
                className="space-y-3"
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
                    htmlFor={`desktop-${option.value}`}
                    className="flex items-start space-x-4 p-4 border-2 border-slate-300 rounded-xl hover:border-slate-800 hover:bg-slate-50 transition-all cursor-pointer group"
                  >
                    <RadioGroupItem value={option.value} id={`desktop-${option.value}`} className="mt-1 border-slate-400 text-slate-800" />
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-slate-800">{option.label}</div>
                      <div className="text-sm text-slate-600 mt-1">{option.desc}</div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 2/3: Location */}
          {((currentStep === 2 && formData.propertyType !== 'house') || (currentStep === 3 && formData.propertyType === 'house')) && (
            <div className="space-y-5">
              <div className="flex items-center mb-6">
                <MapPin className="w-5 h-5 text-slate-800 mr-3" />
                <h4 className="text-slate-900 font-semibold text-lg">Wo befindet sich die Immobilie?</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-slate-800 font-semibold mb-2 block">Straße und Hausnummer</Label>
                  <Input
                    placeholder="z.B. Hauptstraße 123"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    className="h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-slate-800 font-semibold mb-2 block">Postleitzahl</Label>
                    <Input
                      placeholder="12345"
                      value={formData.postalCode}
                      onChange={(e) => updateFormData('postalCode', e.target.value)}
                      className="h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-800 font-semibold mb-2 block">Ort</Label>
                    <Input
                      placeholder="München"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3/4: Contact */}
          {((currentStep === 3 && formData.propertyType !== 'house') || (currentStep === 4 && formData.propertyType === 'house')) && (
            <div className="space-y-5">
              <div className="flex items-center mb-6">
                <Ruler className="w-5 h-5 text-slate-800 mr-3" />
                <h4 className="text-slate-900 font-semibold text-lg">Ihre Kontaktdaten</h4>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-slate-800 font-semibold mb-2 block">Vorname</Label>
                    <Input
                      name="firstName"
                      placeholder="Max"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-800 font-semibold mb-2 block">Nachname</Label>
                    <Input
                      name="lastName"
                      placeholder="Mustermann"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-slate-800 font-semibold mb-2 block">E-Mail Adresse</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="max.mustermann@email.de"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                  />
                </div>

                <div>
                  <Label className="text-slate-800 font-semibold mb-2 block">Telefonnummer</Label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+49 89 123456789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 border-slate-400 focus:border-slate-800 focus:ring-slate-800"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-slate-300">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="border-slate-400 text-slate-700 hover:bg-slate-100 disabled:opacity-50 h-12 px-6"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-6"
            >
              Weiter
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-6">
              Bewertung anfordern
            </Button>
          )}
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            ✓ Kostenlos & unverbindlich ✓ Professionelle Bewertung ✓ Antwort in 24h
          </p>
        </div>
      </div>
    </Card>
  );
}
