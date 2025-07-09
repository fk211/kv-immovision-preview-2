'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { 
  ChevronRight, 
  ChevronLeft, 
  Home, 
  MapPin, 
  Ruler, 
  Euro, 
  CheckCircle2,
  Building,
  Shield,
  User,
  Mail,
  Phone
} from 'lucide-react';

interface FormData {
  // Step 1: Property Type
  propertyType: string;
  buildingType: string;
  
  // Step 2: Location & Address
  address: string;
  postalCode: string;
  city: string;
  country: string;
  
  // Step 3: Property Details
  livingArea: number[];
  totalArea: number[];
  rooms: number[];
  bedrooms: number[];
  bathrooms: number[];
  floors: number[];
  buildYear: number[];
  
  // Step 4: Features & Condition
  condition: string;
  features: string[];
  heating: string;
  energyClass: string;
  
  // Step 5: Financial Information
  purchasePrice: number[];
  renovationCosts: number[];
  rentalIncome: number[];
  
  // Step 6: Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: string;
  marketingConsent: boolean;
}

const initialFormData: FormData = {
  propertyType: '',
  buildingType: '',
  address: '',
  postalCode: '',
  city: '',
  country: 'Deutschland',
  livingArea: [100],
  totalArea: [150],
  rooms: [3],
  bedrooms: [2],
  bathrooms: [1],
  floors: [1],
  buildYear: [2000],
  condition: '',
  features: [],
  heating: '',
  energyClass: '',
  purchasePrice: [500000],
  renovationCosts: [0],
  rentalIncome: [0],
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  preferredContact: '',
  marketingConsent: false
};

export default function MultiStepValuationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 6;
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const updateFormData = (field: string, value: string | number | boolean | number[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 md:p-12 shadow-2xl border-0 text-center">
        <CardContent className="p-0">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-3xl font-serif mb-4">Vielen Dank!</h3>
          <p className="text-muted-foreground mb-8">
            Ihre Bewertungsanfrage wurde erfolgreich übermittelt. Ein Experte wird sich innerhalb von 24 Stunden bei Ihnen melden.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData(initialFormData);
            }}
            variant="outline"
          >
            Neue Bewertung starten
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border-0">
      <CardHeader className="p-0 mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-serif">Immobilienbewertung</CardTitle>
          <span className="text-sm text-muted-foreground">
            Schritt {currentStep} von {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="w-full h-2" />
      </CardHeader>

      <CardContent className="p-0">
        {/* Step 1: Property Type */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Home className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Art der Immobilie</h3>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-4 block">Welche Art von Immobilie möchten Sie bewerten lassen?</Label>
              <RadioGroup 
                value={formData.propertyType} 
                onValueChange={(value) => updateFormData('propertyType', value)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  { value: 'house', label: 'Einfamilienhaus', icon: Home },
                  { value: 'apartment', label: 'Eigentumswohnung', icon: Building },
                  { value: 'multi-family', label: 'Mehrfamilienhaus', icon: Building },
                  { value: 'plot', label: 'Grundstück', icon: MapPin }
                ].map((option) => (
                  <Label 
                    key={option.value} 
                    htmlFor={option.value} 
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <option.icon className="w-5 h-5 text-primary" />
                    <span className="flex-1 font-medium">{option.label}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {formData.propertyType === 'house' && (
              <div>
                <Label className="text-sm font-medium mb-4 block">Haustyp</Label>
                <Select value={formData.buildingType} onValueChange={(value) => updateFormData('buildingType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wählen Sie den Haustyp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="detached">Freistehendes Haus</SelectItem>
                    <SelectItem value="semi-detached">Doppelhaushälfte</SelectItem>
                    <SelectItem value="terraced">Reihenhaus</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="bungalow">Bungalow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Location */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Lage der Immobilie</h3>
            </div>
            
            <div>
              <Label htmlFor="address" className="text-sm font-medium">Straße und Hausnummer</Label>
              <Input
                id="address"
                placeholder="z.B. Musterstraße 123"
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="postalCode" className="text-sm font-medium">Postleitzahl</Label>
                <Input
                  id="postalCode"
                  placeholder="12345"
                  value={formData.postalCode}
                  onChange={(e) => updateFormData('postalCode', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="city" className="text-sm font-medium">Ort</Label>
                <Input
                  id="city"
                  placeholder="Musterstadt"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="country" className="text-sm font-medium">Land</Label>
              <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Deutschland">Deutschland</SelectItem>
                  <SelectItem value="Österreich">Österreich</SelectItem>
                  <SelectItem value="Schweiz">Schweiz</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 3: Property Details */}
        {currentStep === 3 && (
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Ruler className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Immobiliendetails</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Label className="text-sm font-medium mb-4 block">
                  Wohnfläche: {formData.livingArea[0]} m²
                </Label>
                <Slider
                  value={formData.livingArea}
                  onValueChange={(value) => updateFormData('livingArea', value)}
                  max={500}
                  min={20}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>20 m²</span>
                  <span>500 m²</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">
                  Grundstücksfläche: {formData.totalArea[0]} m²
                </Label>
                <Slider
                  value={formData.totalArea}
                  onValueChange={(value) => updateFormData('totalArea', value)}
                  max={2000}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0 m²</span>
                  <span>2000 m²</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">
                  Anzahl Zimmer: {formData.rooms[0]}
                </Label>
                <Slider
                  value={formData.rooms}
                  onValueChange={(value) => updateFormData('rooms', value)}
                  max={15}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1</span>
                  <span>15+</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">
                  Schlafzimmer: {formData.bedrooms[0]}
                </Label>
                <Slider
                  value={formData.bedrooms}
                  onValueChange={(value) => updateFormData('bedrooms', value)}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1</span>
                  <span>10+</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">
                  Badezimmer: {formData.bathrooms[0]}
                </Label>
                <Slider
                  value={formData.bathrooms}
                  onValueChange={(value) => updateFormData('bathrooms', value)}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1</span>
                  <span>5+</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">
                  Baujahr: {formData.buildYear[0]}
                </Label>
                <Slider
                  value={formData.buildYear}
                  onValueChange={(value) => updateFormData('buildYear', value)}
                  max={2024}
                  min={1900}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1900</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Features & Condition */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Ausstattung & Zustand</h3>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-4 block">Zustand der Immobilie</Label>
              <RadioGroup 
                value={formData.condition} 
                onValueChange={(value) => updateFormData('condition', value)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  { value: 'new', label: 'Neubau/Neuwertig' },
                  { value: 'renovated', label: 'Vollständig saniert' },
                  { value: 'good', label: 'Gut gepflegt' },
                  { value: 'needs-renovation', label: 'Renovierungsbedürftig' }
                ].map((option) => (
                  <Label 
                    key={option.value} 
                    htmlFor={option.value} 
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <span className="flex-1 font-medium">{option.label}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">Ausstattungsmerkmale</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'balcony', label: 'Balkon/Terrasse' },
                  { value: 'garage', label: 'Garage/Stellplatz' },
                  { value: 'garden', label: 'Garten' },
                  { value: 'basement', label: 'Keller' },
                  { value: 'attic', label: 'Dachboden' },
                  { value: 'elevator', label: 'Aufzug' },
                  { value: 'fireplace', label: 'Kamin' },
                  { value: 'pool', label: 'Pool/Schwimmbad' }
                ].map((feature) => (
                  <Label 
                    key={feature.value} 
                    htmlFor={feature.value} 
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <Checkbox 
                      id={feature.value}
                      checked={formData.features.includes(feature.value)}
                      onCheckedChange={() => toggleFeature(feature.value)}
                    />
                    <span className="flex-1 font-medium">{feature.label}</span>
                  </Label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Heizungsart</Label>
                <Select value={formData.heating} onValueChange={(value) => updateFormData('heating', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wählen Sie die Heizungsart" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gas">Gasheizung</SelectItem>
                    <SelectItem value="oil">Ölheizung</SelectItem>
                    <SelectItem value="electric">Elektroheizung</SelectItem>
                    <SelectItem value="heat-pump">Wärmepumpe</SelectItem>
                    <SelectItem value="district">Fernwärme</SelectItem>
                    <SelectItem value="wood">Holz/Pellets</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Energieeffizienzklasse</Label>
                <Select value={formData.energyClass} onValueChange={(value) => updateFormData('energyClass', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Energieeffizienzklasse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                    <SelectItem value="E">E</SelectItem>
                    <SelectItem value="F">F</SelectItem>
                    <SelectItem value="G">G</SelectItem>
                    <SelectItem value="H">H</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Financial Information */}
        {currentStep === 5 && (
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Euro className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Finanzielle Informationen</h3>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-4 block">
                Geschätzter Kaufpreis: {formData.purchasePrice[0].toLocaleString('de-DE')} €
              </Label>
              <Slider
                value={formData.purchasePrice}
                onValueChange={(value) => updateFormData('purchasePrice', value)}
                max={5000000}
                min={50000}
                step={10000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>50.000 €</span>
                <span>5.000.000 €</span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">
                Investierte Renovierungskosten: {formData.renovationCosts[0].toLocaleString('de-DE')} €
              </Label>
              <Slider
                value={formData.renovationCosts}
                onValueChange={(value) => updateFormData('renovationCosts', value)}
                max={500000}
                min={0}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>0 €</span>
                <span>500.000 €</span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">
                Monatliche Mieteinnahmen: {formData.rentalIncome[0].toLocaleString('de-DE')} €
              </Label>
              <Slider
                value={formData.rentalIncome}
                onValueChange={(value) => updateFormData('rentalIncome', value)}
                max={10000}
                min={0}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>0 €</span>
                <span>10.000 €</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Contact Information */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Kontaktdaten</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium">Vorname *</Label>
                <Input
                  id="firstName"
                  placeholder="Ihr Vorname"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium">Nachname *</Label>
                <Input
                  id="lastName"
                  placeholder="Ihr Nachname"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium">E-Mail-Adresse *</Label>
              <Input
                id="email"
                type="email"
                placeholder="ihre@email.de"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium">Telefonnummer</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+49 123 456789"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium">Nachricht (optional)</Label>
              <Textarea
                id="message"
                placeholder="Weitere Informationen zu Ihrer Immobilie..."
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                className="mt-1"
                rows={4}
              />
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">Bevorzugte Kontaktmöglichkeit</Label>
              <RadioGroup 
                value={formData.preferredContact} 
                onValueChange={(value) => updateFormData('preferredContact', value)}
                className="flex gap-6"
              >
                <Label htmlFor="contact-email" className="flex items-center space-x-2 cursor-pointer">
                  <RadioGroupItem value="email" id="contact-email" />
                  <Mail className="w-4 h-4" />
                  <span>E-Mail</span>
                </Label>
                <Label htmlFor="contact-phone" className="flex items-center space-x-2 cursor-pointer">
                  <RadioGroupItem value="phone" id="contact-phone" />
                  <Phone className="w-4 h-4" />
                  <span>Telefon</span>
                </Label>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="marketing"
                checked={formData.marketingConsent}
                onCheckedChange={(checked) => updateFormData('marketingConsent', checked)}
              />
              <Label htmlFor="marketing" className="cursor-pointer text-sm">
                Ich möchte über neue Immobilienangebote und Marktentwicklungen informiert werden.
              </Label>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>

          {currentStep < totalSteps ? (
            <Button 
              onClick={handleNext}
              className="flex items-center"
              disabled={
                (currentStep === 1 && !formData.propertyType) ||
                (currentStep === 2 && (!formData.address || !formData.city || !formData.postalCode)) ||
                (currentStep === 6 && (!formData.firstName || !formData.lastName || !formData.email))
              }
            >
              Weiter
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email}
              className="flex items-center"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Bewertung anfordern'}
              <CheckCircle2 className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
