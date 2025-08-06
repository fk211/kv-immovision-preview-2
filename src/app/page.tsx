import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ApproachSection from '@/components/sections/ApproachSection';
import StorySection from '@/components/sections/StorySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import RegionsSection from '@/components/sections/RegionsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ManifestoSection />
        <ApproachSection />
        <PhilosophySection />
        <StorySection />
        <TestimonialsSection />
        <RegionsSection />
      </main>
      
      <Footer />
    </div>
  );
}
