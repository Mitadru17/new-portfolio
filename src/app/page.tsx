
import AIEasterEgg from "@/components/ai-easter-egg";
import FunFactsTerminal from "@/components/fun-facts-terminal";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import TestimonialsSection from "@/components/sections/testimonials";
import WorkSection from "@/components/sections/work";
import PlaySection from "@/components/sections/play";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WorkSection />
        <TestimonialsSection />
        <AboutSection />
        <PlaySection />
        <ContactSection />
      </main>
      <Footer />
      <AIEasterEgg />
      <FunFactsTerminal />
    </div>
  );
}
