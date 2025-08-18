
"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = (factor: number) => {
    if (typeof window === 'undefined') return {};
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      transition: 'transform 0.1s ease-out',
    };
  };

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pt-24">
       <div className="container relative z-10 mx-auto px-4 text-center">
        <div style={parallaxStyle(0.02)} className="animate-float">
            <h1 className="font-headline text-6xl font-bold tracking-tighter text-foreground drop-shadow-lg sm:text-7xl md:text-8xl">Mitadru Roy</h1>
        </div>
        <p 
          style={parallaxStyle(0.03)} 
          className="mt-4 font-headline text-xl text-muted-foreground drop-shadow-md sm:text-2xl md:text-3xl animate-fade-in-up"
        >
          Designing through a different lens.
        </p>
      </div>
      <div 
        style={parallaxStyle(-0.015)} 
        className="relative mt-12 w-full max-w-5xl aspect-[16/9]"
      >
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
