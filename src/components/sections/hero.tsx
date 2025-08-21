
"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import AnimatedHeading from "@/components/animated-heading";
import SplitText from "@/components/SplitText";
import ParticleBackground from "@/components/particle-background";
import TypingEffect from "@/components/typing-effect";
import { ChevronDown, Download, Mail, ExternalLink } from "lucide-react";

const ProfileCard = dynamic(() => import("@/components/ProfileCard"), { 
  ssr: false,
  loading: () => <div className="w-full aspect-[0.718] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl animate-pulse" />
});

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);

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

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log('Download CV clicked');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        scrollToWork();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          style={parallaxStyle(-0.02)}
          className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-scale-pulse"
        />
        <div 
          style={{...parallaxStyle(0.03), animationDelay: '2s'}}
          className="absolute bottom-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-scale-pulse"
        />
        <div 
          style={parallaxStyle(-0.01)}
          className="absolute top-1/2 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-bounce-slow"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto spacing-responsive text-center pt-16 sm:pt-20 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 animate-slide-in-left lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <SplitText 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground drop-shadow-lg mobile-center" 
                  delay={0.2}
                  stagger={0.08}
                  duration={0.6}
                  trigger={isVisible}
                >
                  Mitadru Roy
                </SplitText>
              </div>
              
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-4 mobile-center lg:text-left">
                  <TypingEffect 
                    texts={[
                      "Computer Science Engineer (Surviving since 2025)",
                      "Full-Stack Developer (Frontend & Backend Juggler)",
                      "AI & ML Enthusiast (Teaching machines to be smarter than me)",
                      "React Developer (Making components cry since day one)",
                      "Problem Solver (Creator of new problems)"
                    ]}
                    speed={80}
                  />
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mobile-center lg:text-left">
                  From Bengaluru with code. Building digital solutions that actually work (most of the time). 
                  Specializing in making computers do exactly what I want, when I want it.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                onClick={scrollToWork}
                size="lg" 
                className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white hover-lift mobile-full sm:w-auto"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="hover-lift mobile-full sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadCV}
                className="hover-lift mobile-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Proof */}
            <div className={`pt-6 sm:pt-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-sm text-muted-foreground mobile-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div>Based in Bengaluru, India</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className={`w-full max-w-sm lg:max-w-md transition-all duration-1000 delay-300 hover-lift ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <ProfileCard 
                avatarUrl="/images/mitadru-photo.jpg"
                name="Mitadru Roy"
                role="Full-Stack Developer"
                isOnline={true}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToWork}
            className="group animate-bounce hover:animate-none transition-all"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs sm:text-sm font-medium tracking-wider mobile-text-sm">Explore My Projects</span>
              <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
