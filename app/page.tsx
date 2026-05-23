import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSplit from "@/components/ExperienceSplit";
import VillasSlider from "@/components/VillasSlider";
import GalapagosParallax from "@/components/GalapagosParallax";
import AtAGlance from "@/components/AtAGlance";
import Testimonials from "@/components/Testimonials";
import FullBleedCTA from "@/components/FullBleedCTA";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <VillasSlider />
      <ExperienceSplit />
      <GalapagosParallax />
      <AtAGlance />
      <Testimonials />
      <FullBleedCTA />
      <LocationMap />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
