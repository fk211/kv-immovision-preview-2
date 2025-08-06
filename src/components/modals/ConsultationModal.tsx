'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, MessageSquare, Video, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  consultationType?: 'kauf' | 'verkauf' | 'allgemein';
}

export default function ConsultationModal({ 
  isOpen, 
  onClose, 
  title = "Kostenloses Erstgespräch vereinbaren",
  subtitle = "Lassen Sie uns gemeinsam Ihre Immobilienziele besprechen",
  consultationType = 'allgemein'
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    meetingType: 'online',
    consultationType: consultationType,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        meetingType: 'online',
        consultationType: consultationType,
        message: ''
      });
      setIsSubmitting(false);
    }
  }, [isOpen, consultationType]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Consultation booking:', formData);
    onClose();
  };

  const meetingTypes = [
    {
      value: 'online',
      label: 'Online-Gespräch',
      description: 'Bequem von zu Hause aus',
      icon: Video
    },
    {
      value: 'persoenlich',
      label: 'Persönliches Treffen',
      description: 'In unserem Büro oder vor Ort',
      icon: MapPin
    },
    {
      value: 'telefon',
      label: 'Telefonberatung',
      description: 'Schnell und unkompliziert',
      icon: Phone
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00'
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

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Ihre Kontaktdaten
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Vorname *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Ihr Vorname"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nachname *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Ihr Nachname"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">E-Mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="ihre@email.de"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+49 123 456 789"
                  required
                />
              </div>
            </div>

            {/* Meeting Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Art des Gesprächs</h3>
              <div className="grid grid-cols-1 gap-3">
                {meetingTypes.map((type) => (
                  <Card
                    key={type.value}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                      formData.meetingType === type.value 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setFormData({...formData, meetingType: type.value})}
                  >
                    <div className="flex items-center space-x-3">
                      <type.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Date and Time */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Wunschtermin
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">Wunschdatum</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Wunschzeit</Label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="">Uhrzeit wählen</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time} Uhr</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Ihre Nachricht
              </h3>
              
              <div>
                <Label htmlFor="message">Wie können wir Ihnen helfen?</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                className="px-8"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Erstgespräch vereinbaren'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
