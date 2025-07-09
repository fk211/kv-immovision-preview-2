'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, Calendar, Globe, Award, Users, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Valentin Leon Köller",
      role: "Gründer & Geschäftsführer",
      phone: "+49 151 27276715",
      initials: "VK",
      email: "valentin@kg-immovision.ch",
      expertise: "Luxusimmobilien",
      experience: "15+ Jahre",
      image: "/images/people/valentin.jpg"
    },
    {
      name: "Clarissa Franziska Görnandt", 
      role: "Partner",
      phone: "+49 151 75091716",
      initials: "CG",
      email: "clarissa@kg-immovision.ch",
      expertise: "Investment Advisory",
      experience: "12+ Jahre",
      image: "/images/people/clarissa.jpg"
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "Premium Service",
      description: "Exklusive Betreuung für anspruchsvolle Kunden"
    },
    {
      icon: Shield,
      title: "Diskrete Abwicklung",
      description: "Absolute Vertraulichkeit bei allen Transaktionen"
    },
    {
      icon: Globe,
      title: "Internationale Reichweite", 
      description: "Globales Netzwerk für Ihre Immobilienwünsche"
    }
  ];

  return (
    <section id="kontakt" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.04),transparent_30%)]" />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary/20 rounded-full animate-pulse blur-sm" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse blur-sm" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-primary/25 rounded-full animate-pulse blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse blur-sm" style={{ animationDelay: '3s' }} />
      
      {/* Geometric Patterns */}
      <div className="absolute top-16 right-16 w-24 h-24 border border-primary/10 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-primary/15 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] shadow-lg backdrop-blur-sm border border-primary/20">
            <Users className="w-4 h-4 mr-2" />
            Ihr Expertenteam
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[0.9] mb-8 opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
            <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Die Visionäre hinter</span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">der Vision.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
            Lernen Sie die Menschen kennen, deren Leidenschaft und Expertise KG Immovision definieren. 
            <br className="hidden md:block" />
            Wir freuen uns darauf, von Ihnen zu hören.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {/* Enhanced Team Members */}
          <div className="xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 hover:border-primary/20 transform hover:-translate-y-3 opacity-0 animate-[fadeInUp_1s_forwards] hover:bg-white/90"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  {/* Enhanced Avatar */}
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-3 border-white animate-pulse shadow-lg">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 animate-ping opacity-20" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="mb-6">
                    <h4 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold mb-4 text-lg">{member.role}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/20">
                        {member.expertise}
                      </span>
                      <span className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Contact */}
                  <div className="space-y-4">
                    <a 
                      href={`tel:${member.phone}`} 
                      className="flex items-center text-sm hover:text-primary transition-all duration-300 group/phone rounded-xl p-3 hover:bg-primary/5"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mr-3 group-hover/phone:bg-gradient-to-br group-hover/phone:from-primary group-hover/phone:to-primary/90 group-hover/phone:text-white transition-all duration-300 shadow-md">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{member.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="flex items-center text-sm hover:text-primary transition-all duration-300 group/mail rounded-xl p-3 hover:bg-primary/5"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mr-3 group-hover/mail:bg-gradient-to-br group-hover/mail:from-primary group-hover/mail:to-primary/90 group-hover/mail:text-white transition-all duration-300 shadow-md">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{member.email}</span>
                    </a>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/3 rounded-3xl transition-all duration-700 ${hoveredMember === index ? 'opacity-100' : 'opacity-0'}`} />
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent rounded-3xl transition-all duration-700 ${hoveredMember === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-8 opacity-0 animate-[fadeInUp_1s_1.2s_forwards]">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-display font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Kontakt aufnehmen
              </h3>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex items-start p-5 rounded-2xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-300 shadow-md">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="text-foreground font-semibold text-lg">Büro Schweiz</strong>
                      <p className="text-muted-foreground mt-1">Dorf 109, 9428 Walzenhausen</p>
                      <p className="text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Direkt an der Grenze zu Österreich
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="flex items-start p-5 rounded-2xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-300 shadow-md">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="text-foreground font-semibold text-lg">Email</strong>
                      <p className="mt-1">
                        <a 
                          href="mailto:kontakt@kg-immovision.ch" 
                          className="text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          kontakt@kg-immovision.ch
                        </a>
                      </p>
                      <p className="text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Antwort innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="flex items-start p-5 rounded-2xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-300 shadow-md">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="text-foreground font-semibold text-lg">Verfügbarkeit</strong>
                      <div className="text-muted-foreground mt-1 space-y-1">
                        <p className="flex justify-between">
                          <span>Mo-Fr:</span>
                          <span className="font-medium">9:00 - 18:00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sa:</span>
                          <span className="font-medium">10:00 - 16:00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>So:</span>
                          <span className="font-medium">Nach Vereinbarung</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full mt-8 rounded-2xl bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/95 hover:to-primary text-white shadow-xl hover:shadow-2xl transition-all duration-500 group border-0 text-lg h-14"
                size="lg"
              >
                <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Beratungstermin vereinbaren
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 opacity-0 animate-[fadeInUp_1s_1.4s_forwards]">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 hover:border-primary/20 transform hover:-translate-y-2 hover:bg-white/90"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ring-1 ring-primary/10 group-hover:ring-primary/30">
                <highlight.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {highlight.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
