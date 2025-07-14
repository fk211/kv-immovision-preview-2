'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, Calendar, Globe, Award, Users, Shield, X, Star, TrendingUp, Building, Heart, Target, Trophy, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  const teamMembers = [
    {
      name: "Valentin Leon Köller",
      role: "Gründer & Geschäftsführer",
      phone: "+49 151 27276715",
      email: "valentin@kg-immovision.ch",
      expertise: ["Luxusimmobilien", "Strategische Beratung", "Marktanalyse"],
      experience: "15+ Jahre",
      image: "/images/people/valentin.jpg",
      location: "Schweiz & Deutschland",
      languages: ["Deutsch", "Englisch", "Französisch"],
      specialties: ["Premium-Immobilien", "Internationale Kunden", "Investmentberatung"],
      bio: `Valentin Leon Köller ist der visionäre Gründer und Geschäftsführer von KG Immovision. Mit über 15 Jahren Erfahrung in der Luxusimmobilienbranche hat er sich als einer der führenden Experten für Premium-Immobilien in der DACH-Region etabliert.

Seine Laufbahn begann in der traditionellen Immobilienbranche, wo er schnell erkannte, dass der Markt für Luxusimmobilien eine völlig neue Herangehensweise benötigt. Diese Erkenntnis führte zur Gründung von KG Immovision - einem Unternehmen, das die Grenzen zwischen klassischer Immobilienvermittlung und innovativer Beratung verwischt.

Valentin ist bekannt für seine analytische Herangehensweise und sein tiefes Verständnis für Markttrends. Er hat bereits über 200 Millionen Euro in Immobilientransaktionen begleitet und dabei stets höchste Standards in Bezug auf Service und Diskretion aufrechterhalten.

Seine Vision ist es, jedem Kunden nicht nur eine Immobilie zu verkaufen, sondern einen Lebenstraum zu verwirklichen. Dabei kombiniert er modernste Technologien mit persönlicher Betreuung auf höchstem Niveau.`,
      achievements: [
        {
          text: "Über 200 Mio. € in Transaktionen begleitet",
          icon: TrendingUp
        },
        {
          text: "Gründer von KG Immovision",
          icon: Lightbulb
        },
        {
          text: "Spezialist für internationale Kunden",
          icon: Globe
        },
        {
          text: "Innovator in der Immobilienbranche",
          icon: Star
        }
      ],
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Clarissa Franziska Görnandt", 
      role: "Geschäftsführerin & Partnerin",
      phone: "+49 151 75091716",
      email: "clarissa@kg-immovision.ch",
      expertise: ["Immobilienentwicklung", "Projektmanagement", "Strategische Planung"],
      experience: "12+ Jahre",
      image: "/images/people/clarissa.jpg",
      location: "Deutschland & Österreich",
      languages: ["Deutsch", "Englisch", "Italienisch"],
      specialties: ["Projektentwicklung", "Marktanalyse", "Kundenbetreuung"],
      bio: `Immobilien sind für mich weit mehr als nur Wände, Zahlen und Lagen – sie sind Ausdruck von Vision, Beständigkeit und Persönlichkeit. Schon früh habe ich gespürt, dass mich dieser Bereich auf ganz besondere Weise fasziniert: das Zusammenspiel aus Gestaltung, Marktgespür und menschlichem Miteinander.

Mein Weg führte mich über das technische Verständnis des Bauzeichnens hin zur eigenverantwortlichen Entwicklung und Vermarktung von Immobilien. Ich denke gerne voraus, habe ein gutes Gespür für Räume mit Potenzial – und weiß genau, worauf es bei erfolgreichen Projekten ankommt: Struktur, Klarheit, Vertrauen und vor allem – ein gutes Netzwerk.

Geprägt durch meine familiäre Nähe zu finanziellen und strategischen Themen rund um Immobilien, konnte ich über viele Jahre tiefes Verständnis für den Markt, den Wert von Lage und Substanz sowie für nachhaltige Investitionen entwickeln. Das spüren auch meine Partner und Kunden: Ich arbeite lösungsorientiert, verbindlich und mit einem hohen Anspruch an Qualität – vom ersten Gespräch bis zur Schlüsselübergabe.

Mit meinem Geschäftspartner Valentin Leon Köller gründeten wir die KG Immovision AG – mit dem Ziel, Immobilienprojekte zu realisieren, die nicht nur wirtschaftlich, sondern auch menschlich und gestalterisch überzeugen.

Von Vision zur Realität – mit uns als Partner. Ich freue mich auf den Austausch, die Zusammenarbeit und darauf, gemeinsam Zukunft zu gestalten.`,
      achievements: [
        {
          text: "Geschäftsführerin der KG Immovision AG",
          icon: Award
        },
        {
          text: "Expertin für Immobilienentwicklung",
          icon: Building
        },
        {
          text: "Spezialistin für nachhaltige Investitionen",
          icon: Target
        },
        {
          text: "Wegbereiterin für innovative Projektkonzepte",
          icon: Trophy
        }
      ],
      social: {
        linkedin: "#",
        instagram: "#"
      }
    }
  ];

  const companyValues = [
    {
      icon: Award,
      title: "Exzellenz",
      description: "Höchste Standards in allem was wir tun"
    },
    {
      icon: Shield,
      title: "Vertrauen",
      description: "Absolute Diskretion und Integrität"
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Begeisterung für außergewöhnliche Immobilien"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Wegweisende Ansätze im Immobilienmarkt"
    }
  ];

  return (
    <>
      <section id="ueber-uns" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20 md:mb-28">
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] shadow-lg backdrop-blur-sm border border-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Über uns
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[0.9] mb-8 opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
              <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Die Menschen hinter</span>
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">KG Immovision.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
              Lernen Sie die Visionäre kennen, die mit Leidenschaft, Expertise und Innovation 
              die Zukunft der Luxusimmobilien gestalten. Jeder mit einer einzigartigen Geschichte 
              und dem gemeinsamen Ziel, Ihre Immobilienträume zu verwirklichen.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 hover:border-primary/20 transform hover:-translate-y-2 opacity-0 animate-[fadeInUp_1s_forwards] cursor-pointer"
                style={{ animationDelay: `${0.8 + index * 0.3}s` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(index)}
              >
                {/* Portrait Header */}
                <div className="p-8 text-center">
                  {/* Portrait Image */}
                  <div className="relative mx-auto mb-6">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700 shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/30 mx-auto">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Status */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-4 border-white shadow-lg">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 animate-ping opacity-30" />
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary text-lg font-medium mb-4">
                    {member.role}
                  </p>

                  {/* Experience & Location Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                      {member.experience}
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                      <MapPin className="w-3 h-3 mr-1" />
                      {member.location}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-8 pb-8">
                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 py-1.5 rounded-full text-sm font-medium border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Sprachen
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">
                        {member.languages.join(' • ')}
                      </span>
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <a 
                      href={`tel:${member.phone}`} 
                      className="flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 text-primary hover:text-white px-4 py-3 rounded-xl transition-all duration-300 group/phone border border-primary/20 hover:border-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Anrufen</span>
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-600 hover:to-gray-700 text-gray-600 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 group/mail border border-gray-200 hover:border-gray-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">E-Mail</span>
                    </a>
                  </div>

                  {/* Learn More */}
                  <div className="text-center">
                    <div className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors cursor-pointer group/more">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/more:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/3 rounded-3xl transition-all duration-700 pointer-events-none ${hoveredMember === index ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="mb-20 opacity-0 animate-[fadeInUp_1s_1.4s_forwards]">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Unsere Werte
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Diese Prinzipien leiten uns bei allem, was wir tun
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-primary/20 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center opacity-0 animate-[fadeInUp_1s_1.6s_forwards]">
            <div className="bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 rounded-3xl p-12 border border-primary/10">
              <Building className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Bereit für Ihr nächstes Immobilienabenteuer?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre Immobilienziele verwirklichen. 
                Kontaktieren Sie unser Expertenteam noch heute.
              </p>
              <Button 
                className="bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/95 hover:to-primary text-white shadow-xl hover:shadow-2xl transition-all duration-500 group border-0 text-lg h-14 px-8 rounded-2xl"
                size="lg"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Kostenloses Beratungsgespräch
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for detailed bio */}
      {selectedMember !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-in zoom-in duration-300 relative">
            {/* Close Button - Sticky */}
            <button
              onClick={() => setSelectedMember(null)}
              className="sticky top-4 right-4 ml-auto w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors shadow-lg z-30 border border-red-200 float-right"
              style={{ marginBottom: '-2.5rem' }}
            >
              <X className="w-5 h-5 text-red-600" />
            </button>

            {/* Modal Header - More compact */}
            <div className="p-6 md:p-8 text-center border-b border-gray-100">
              {/* Portrait Image - smaller */}
              <div className="relative mx-auto mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary/10 mx-auto">
                  <Image
                    src={teamMembers[selectedMember].image}
                    alt={teamMembers[selectedMember].name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online Status */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-4 border-white shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 animate-ping opacity-30" />
                </div>
              </div>

              {/* Name and Role - more compact */}
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                {teamMembers[selectedMember].name}
              </h2>
              <p className="text-primary text-lg font-medium mb-4">
                {teamMembers[selectedMember].role}
              </p>
              
              {/* Quick Info Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <div className="flex items-center bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                  <MapPin className="w-3 h-3 mr-1" />
                  {teamMembers[selectedMember].location}
                </div>
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                  {teamMembers[selectedMember].experience}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Bio - more compact */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-4 text-gray-900 text-center">
                  Über {teamMembers[selectedMember].name.split(' ')[0]}
                </h3>
                <div className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                  {teamMembers[selectedMember].bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-base leading-7">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Achievements - more compact */}
              <div className="mb-8">
                <h3 className="text-lg font-display font-bold mb-4 text-gray-900 flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary mr-2" />
                  Erfolge & Meilensteine
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                  {teamMembers[selectedMember].achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center bg-gradient-to-r from-primary/5 to-primary/3 rounded-xl p-4">
                        <IconComponent className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{achievement.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Skills & Languages - more compact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <h3 className="text-lg font-display font-bold mb-4 text-gray-900">
                    Expertise
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {teamMembers[selectedMember].expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-display font-bold mb-4 text-gray-900">
                    Sprachen
                  </h3>
                  <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                    <Globe className="w-4 h-4 text-primary mr-2" />
                    <span className="text-gray-700 font-medium text-sm">
                      {teamMembers[selectedMember].languages.join(' • ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Actions - single row */}
              <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                  <a 
                    href={`tel:${teamMembers[selectedMember].phone}`} 
                    className="flex items-center justify-center bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-4 py-3 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-medium text-sm">Anrufen</span>
                  </a>
                  <a 
                    href={`mailto:${teamMembers[selectedMember].email}`} 
                    className="flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-4 py-3 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl border border-gray-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="font-medium text-sm">E-Mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
