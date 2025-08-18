import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-black to-background animated-gradient">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-6xl font-bold tracking-tighter text-white drop-shadow-lg sm:text-8xl md:text-9xl">
          Mitadru Roy
        </h1>
        <p className="mt-4 font-headline text-xl text-primary drop-shadow-md sm:text-2xl md:text-3xl">
          AI-Driven. Hackathon-Powered. Full-Stack Focused.
        </p>
        <p className="mt-2 text-lg text-muted-foreground">
          Freelance Full-Stack Developer • Data Science Enthusiast • Hackathon Builder
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#work">
              <Rocket className="mr-2 h-5 w-5" />
              View My Work
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
