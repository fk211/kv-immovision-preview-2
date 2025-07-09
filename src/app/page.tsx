import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import PropertiesSection from '@/components/sections/PropertiesSection';
import ValuationSection from '@/components/sections/ValuationSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ManifestoSection />
        <PropertiesSection />
        <ValuationSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
