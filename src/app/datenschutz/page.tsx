import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Datenschutz - KG IMMOVISION',
  description: 'Datenschutzerklärung der KG IMMOVISION AG.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-foreground">
              Datenschutz
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Schutz Ihrer persönlichen Daten ist uns wichtig
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  1. Datenschutz auf einen Blick
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="font-semibold text-lg text-foreground">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                    Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>
              </div>

              {/* Data Collection */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  2. Datenerfassung auf dieser Website
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                    </h3>
                    <p className="text-muted-foreground">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                      können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser Datenschutzerklärung entnehmen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      Wie erfassen wir Ihre Daten?
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                      z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="text-muted-foreground">
                      Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                      IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem 
                      oder Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsible Party */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  3. Hinweis zur verantwortlichen Stelle
                </h2>
                <div className="text-foreground space-y-2">
                  <p className="font-medium">Verantwortliche Stelle für die Datenverarbeitung:</p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p>KG IMMOVISION AG</p>
                    <p>Ein Projekt der Valentin Immovision AG</p>
                    <p>Dorf 109</p>
                    <p>9428 Walzenhausen, Schweiz</p>
                    <p className="mt-2">
                      <span className="font-medium">E-Mail:</span> 
                      <a href="mailto:kontakt@kg-immovision.ch" className="text-primary hover:underline ml-1">
                        kontakt@kg-immovision.ch
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Telefon:</span> 
                      <a href="tel:+4915127276715" className="text-primary hover:underline ml-1">
                        +49 151 27276715
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* SSL/TLS */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  4. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                  wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                  Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in 
                  Ihrer Browserzeile.
                </p>
              </div>

              {/* Contact Forms */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  5. Kontaktformular
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <p>
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten 
                    erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung 
                    eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                </div>
              </div>

              {/* Server Log Files */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  6. Server-Log-Dateien
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
              </div>

              {/* Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  7. Ihre Rechte
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Sie haben jederzeit das Recht:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                    <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                    <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                    <li>der Datenverarbeitung zu widersprechen</li>
                    <li>die Datenübertragbarkeit zu verlangen</li>
                  </ul>
                  <p>
                    Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die 
                    Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </p>
                </div>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="mb-8">
                <h2 className="text-2xl font-display mb-6 text-foreground">
                  8. Änderungen dieser Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                  rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                  Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </div>

              {/* Last Updated */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm text-muted-foreground">
                  Stand: August 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
