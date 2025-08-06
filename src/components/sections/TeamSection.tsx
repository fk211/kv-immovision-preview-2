'use client';

import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Valentin',
      lastName: 'Mayer',
      role: 'Gründer & Geschäftsführer',
      bio: 'Mit über 15 Jahren Erfahrung im Luxusimmobilienmarkt und einem exzellenten Gespür für außergewöhnliche Objekte.',
      image: '/images/people/valentin.jpg',
      contact: 'valentin@kg-immovision.de'
    },
    {
      name: 'Clarissa',
      lastName: 'Bergmann',
      role: 'Senior Immobilienberaterin',
      bio: 'Spezialisiert auf persönliche Kundenbetreuung und mit besonderer Expertise für Interior Design.',
      image: '/images/people/clarissa.jpg',
      contact: 'clarissa@kg-immovision.de'
    }
  ];

  return (
    <section id="team" className="py-20 md:py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-widest text-primary mb-2 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
            Wir für Sie
          </h3>
          <h2 className="text-3xl md:text-4xl font-display leading-tight opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
            Persönliche <span className="text-primary">Betreuung</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-4 items-center group">
              <div className="relative w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full border-4 border-background">
                <Image 
                  src={member.image}
                  alt={`${member.name} ${member.lastName}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-display">
                  {member.name} <span className="text-primary">{member.lastName}</span>
                </h3>
                <p className="text-sm text-primary/80 mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                
                <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href={`mailto:${member.contact}`} className="hover:text-primary transition-colors">
                    {member.contact}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <p className="max-w-2xl text-center text-muted-foreground">
            Unser Team verbindet jahrelange Erfahrung mit Leidenschaft für außergewöhnliche Immobilien. 
            Wir stehen Ihnen persönlich zur Verfügung und freuen uns darauf, Sie kennenzulernen.
          </p>
        </div>
      </div>
    </section>
  );
}
