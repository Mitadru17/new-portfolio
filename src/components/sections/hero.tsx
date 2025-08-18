
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Download } from "lucide-react";
import AnimatedHeading from "@/components/animated-heading";
import CosmicDust from "@/components/cosmic-dust";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <CosmicDust className="absolute inset-0 w-full h-full object-cover" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-float">
            <AnimatedHeading as="h1" text="Mitadru Roy" className="font-headline text-6xl font-bold tracking-tighter text-white drop-shadow-lg sm:text-8xl md:text-9xl" />
        </div>
        <p className="mt-4 font-headline text-xl text-primary drop-shadow-md sm:text-2xl md:text-3xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Building Tomorrow's Web, Today.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          I'm a freelance full-stack developer and AI enthusiast, turning complex problems into elegant, high-performance digital solutions.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#work">
              <Rocket className="mr-2 h-5 w-5" />
              Explore My Work
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/Mitadru_Roy_CV.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
