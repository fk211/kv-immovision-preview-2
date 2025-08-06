'use client';

export default function StorySection() {
  return (
    <section id="story" className="py-32 md:py-40 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 opacity-0 animate-[fadeInUp_1s_0.2s_forwards] font-medium">
              Unsere Geschichte
            </h3>
            <h2 className="text-4xl md:text-5xl font-display leading-tight mb-8 opacity-0 animate-[fadeInUp_1s_0.4s_forwards]">
              Eine <span className="text-primary">Vision</span> wird Wirklichkeit
            </h2>
            
            <div className="prose prose-lg dark:prose-invert opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
              <p>
                Was 2008 als kleine Agentur begann, hat sich zu einem der führenden Namen im Bereich exklusiver Immobilien entwickelt. Unser Gründer Valentin erkannte früh eine Lücke im Markt: Es fehlte an Maklern, die wirklich verstehen, was architektonische Qualität ausmacht.
              </p>
              <p>
                Mit einer Leidenschaft für moderne Architektur und einem Auge für das Besondere bauten wir ein Unternehmen auf, das sich durch einen ganz eigenen Ansatz auszeichnet. Wir sehen Immobilien nicht als bloße Quadratmeter, sondern als Lebensräume, die Geschichten erzählen und Emotionen wecken.
              </p>
              <p>
                Heute sind wir stolz darauf, eine kuratierte Auswahl an außergewöhnlichen Objekten anbieten zu können, die höchsten ästhetischen und qualitativen Ansprüchen gerecht werden. Unser Team teilt die Leidenschaft für exzellente Architektur und den Anspruch, jedem Kunden eine maßgeschneiderte Betreuung zu bieten.
              </p>
            </div>
          </div>
          
          <div className="opacity-0 animate-[fadeInUp_1s_0.8s_forwards]">
            <div className="bg-background rounded-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-display mb-6 border-b border-border pb-4">Unsere Meilensteine</h3>
              
              <div className="space-y-8 flex-1">
                <div className="flex gap-6">
                  <div className="text-3xl font-display text-primary">2008</div>
                  <div>
                    <h4 className="font-medium mb-1">Gründung in München</h4>
                    <p className="text-sm text-muted-foreground">
                      Eröffnung des ersten Büros in Schwabing mit einem kleinen Team von drei Immobilienspezialisten.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-3xl font-display text-primary">2013</div>
                  <div>
                    <h4 className="font-medium mb-1">Expansion nach Österreich</h4>
                    <p className="text-sm text-muted-foreground">
                      Eröffnung unseres zweiten Standorts in Kitzbühel und Beginn der internationalen Ausrichtung.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-3xl font-display text-primary">2016</div>
                  <div>
                    <h4 className="font-medium mb-1">Architektur-Kooperationen</h4>
                    <p className="text-sm text-muted-foreground">
                      Start unseres Architektur-Netzwerks mit exklusiven Partnerschaften zu renommierten Architekturbüros.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-3xl font-display text-primary">2020</div>
                  <div>
                    <h4 className="font-medium mb-1">Digitale Transformation</h4>
                    <p className="text-sm text-muted-foreground">
                      Einführung unserer 3D-Virtualtour-Technologie und Ausbau der digitalen Präsentation exklusiver Objekte.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="text-3xl font-display text-primary">2023</div>
                  <div>
                    <h4 className="font-medium mb-1">Premium-Partner-Netzwerk</h4>
                    <p className="text-sm text-muted-foreground">
                      Aufbau eines exklusiven Netzwerks aus Interior-Designern, Landschaftsarchitekten und Handwerkern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
