import AIEasterEgg from "@/components/ai-easter-egg";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import TestimonialsSection from "@/components/sections/testimonials";
import WorkSection from "@/components/sections/work";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WorkSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <AIEasterEgg />
    </div>
  );
}
