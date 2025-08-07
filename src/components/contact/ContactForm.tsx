'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interesse: string;
  datenschutz: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  interesse?: string;
  datenschutz?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interesse: '',
    datenschutz: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Vorname ist erforderlich';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nachname ist erforderlich';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }
    if (!formData.datenschutz) {
      newErrors.datenschutz = 'Datenschutzerklärung muss akzeptiert werden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Hier würde normalerweise der API-Call stattfinden
      // Für die Demo simulieren wir eine erfolgreiche Übermittlung
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interesse: '',
        datenschutz: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Nachricht gesendet!
        </h3>
        <p className="text-muted-foreground mb-6">
          Vielen Dank für Ihre Nachricht. Wir melden uns binnen 24 Stunden bei Ihnen.
        </p>
        <Button 
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
        >
          Neue Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
            Vorname *
          </Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`mt-1 ${errors.firstName ? 'border-red-500' : ''}`}
            placeholder="Ihr Vorname"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
            Nachname *
          </Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
            placeholder="Ihr Nachname"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            E-Mail-Adresse *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="ihre.email@beispiel.de"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            Telefonnummer
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="mt-1"
            placeholder="+49 123 456 789"
          />
        </div>
      </div>

      {/* Interest & Subject */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="interesse" className="text-sm font-medium text-foreground">
            Interesse
          </Label>
          <select
            id="interesse"
            value={formData.interesse}
            onChange={(e) => handleInputChange('interesse', e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            <option value="">Bitte wählen</option>
            <option value="immobilienkauf">Immobilienkauf</option>
            <option value="immobilienverkauf">Immobilienverkauf</option>
            <option value="projektentwicklung">Projektentwicklung</option>
            <option value="bewertung">Immobilienbewertung</option>
            <option value="beratung">Allgemeine Beratung</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>
        
        <div>
          <Label htmlFor="subject" className="text-sm font-medium text-foreground">
            Betreff
          </Label>
          <Input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="mt-1"
            placeholder="Worum geht es?"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Nachricht *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`mt-1 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start space-x-3 pt-2">
        <Checkbox
          id="datenschutz"
          checked={formData.datenschutz}
          onCheckedChange={(checked) => handleInputChange('datenschutz', checked as boolean)}
          className={`mt-0.5 ${errors.datenschutz ? 'border-red-500' : ''}`}
        />
        <div className="flex-1">
          <Label 
            htmlFor="datenschutz" 
            className="text-sm text-muted-foreground leading-relaxed cursor-pointer block"
          >
            Ich habe die{' '}
            <a 
              href="/datenschutz" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Datenschutzerklärung
            </a>{' '}
            gelesen und stimme der Verarbeitung meiner Daten zu. *
          </Label>
          {errors.datenschutz && (
            <p className="mt-2 text-sm text-red-500">{errors.datenschutz}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Nachricht senden
            </>
          )}
        </Button>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <div className="text-sm text-red-700">
            <p className="font-medium">Fehler beim Senden</p>
            <p>Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.</p>
          </div>
        </div>
      )}
    </form>
  );
}
