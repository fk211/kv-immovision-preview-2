import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VerkaufHeroSection from '@/components/sections/verkauf/VerkaufHeroSection';

export default function VerkaufPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <VerkaufHeroSection />
      </main>
      
      <Footer />
    </div>
  );
}
