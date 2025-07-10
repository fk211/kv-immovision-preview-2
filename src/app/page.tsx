import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import PropertiesSection from '@/components/sections/PropertiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import RegionsSection from '@/components/sections/RegionsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ManifestoSection />
        <PropertiesSection />
        <TestimonialsSection />
        <RegionsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
