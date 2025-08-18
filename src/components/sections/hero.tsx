
import AnimatedHeading from "@/components/animated-heading";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pt-24">
       <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-float">
            <h1 className="font-headline text-6xl font-bold tracking-tighter text-foreground drop-shadow-lg sm:text-7xl md:text-8xl">Mitadru Roy</h1>
        </div>
        <p className="mt-4 font-headline text-xl text-muted-foreground drop-shadow-md sm:text-2xl md:text-3xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Designing through a different lens.
        </p>
      </div>
      <div className="relative mt-12 w-full max-w-5xl aspect-[16/9]">
        <Image 
            src="https://placehold.co/1200x675.png" 
            alt="Hero illustration" 
            fill
            className="object-contain"
            data-ai-hint="personal illustration workspace"
            />
      </div>
    </section>
  );
}
