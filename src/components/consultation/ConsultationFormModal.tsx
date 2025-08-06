'use client';

import { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConsultationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationFormModal({ isOpen, onClose }: ConsultationFormModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'online',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Consultation booking:', formData);
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      consultationType: 'online',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-[60] overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-hidden flex flex-col my-2 sm:my-4 md:my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
          <div className="flex items-center gap-3">
            <Calendar className="text-slate-600" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl font-display text-slate-900">Erstgespräch vereinbaren</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-slate-600 mb-6">
            Vereinbaren Sie ein unverbindliches Erstgespräch mit unseren Immobilienexperten. 
            Wir nehmen uns gerne Zeit für Ihre Fragen und Wünsche.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Vorname *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base"
                  placeholder="Ihr Vorname"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nachname *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base"
                  placeholder="Ihr Nachname"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base"
                  placeholder="ihre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base"
                  placeholder="+43 123 456 789"
                />
              </div>
            </div>

            {/* Appointment Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Wunschtermin
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Wunschzeit
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base"
                >
                  <option value="">Bitte wählen</option>
                  <option value="09:00">09:00 - 10:00</option>
                  <option value="10:00">10:00 - 11:00</option>
                  <option value="11:00">11:00 - 12:00</option>
                  <option value="14:00">14:00 - 15:00</option>
                  <option value="15:00">15:00 - 16:00</option>
                  <option value="16:00">16:00 - 17:00</option>
                </select>
              </div>
            </div>

            {/* Consultation Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Art des Gesprächs
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 hover:border-slate-400 transition-colors text-sm sm:text-base">
                  <input
                    type="radio"
                    name="consultationType"
                    value="online"
                    checked={formData.consultationType === 'online'}
                    onChange={handleChange}
                    className="mr-2 text-slate-600"
                  />
                  Online
                </label>
                <label className="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 hover:border-slate-400 transition-colors text-sm sm:text-base">
                  <input
                    type="radio"
                    name="consultationType"
                    value="office"
                    checked={formData.consultationType === 'office'}
                    onChange={handleChange}
                    className="mr-2 text-slate-600"
                  />
                  Vor Ort
                </label>
                <label className="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 hover:border-slate-400 transition-colors text-sm sm:text-base">
                  <input
                    type="radio"
                    name="consultationType"
                    value="phone"
                    checked={formData.consultationType === 'phone'}
                    onChange={handleChange}
                    className="mr-2 text-slate-600"
                  />
                  Telefon
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <MessageSquare className="inline w-4 h-4 mr-1" />
                Nachricht (optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-none text-sm sm:text-base"
                placeholder="Teilen Sie uns mit, womit wir Ihnen helfen können..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <Calendar className="w-5 h-5" />
                )}
                {isSubmitting ? 'Wird gesendet...' : 'Termin anfragen'}
              </Button>
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Abbrechen
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
