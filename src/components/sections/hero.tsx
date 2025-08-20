
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
      <div className="container relative z-10 mx-auto px-4 text-center pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="lg:text-left">
            {/* Name with Split Text Animation */}
            <div style={parallaxStyle(0.02)} className="mb-6">
              <SplitText 
                className="text-5xl font-bold tracking-tighter text-foreground drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl hover:scale-105 transition-all duration-300"
                delay={0.2}
                stagger={0.08}
                duration={0.6}
                trigger={isVisible}
              >
                Mitadru Roy
              </SplitText>
            </div>

            {/* Professional Title */}
            <div 
              style={parallaxStyle(0.025)}
              className={`mb-4 transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="font-headline text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
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
              </h2>
            </div>

            {/* Tagline */}
            <div 
              style={parallaxStyle(0.03)}
              className={`mb-8 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <p className="font-headline text-lg text-muted-foreground drop-shadow-md sm:text-xl md:text-2xl">
                From Bengaluru with code. Building digital solutions that actually work (most of the time). 
                Specializing in making computers do exactly what I want, when I want it.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div 
              style={parallaxStyle(0.035)}
              className={`mb-8 lg:mb-16 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Button 
                onClick={scrollToWork}
                size="lg" 
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="group border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </span>
              </Button>
              
              <Button 
                onClick={handleDownloadCV}
                variant="ghost" 
                size="lg"
                className="group hover:bg-secondary/50 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Download CV
                  <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div 
              style={parallaxStyle(-0.015)} 
              className={`relative transform transition-all duration-1500 delay-1200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <ProfileCard 
                avatarUrl="/images/mitadru-photo.jpg"
                miniAvatarUrl="/images/mitadru-photo.jpg"
                name="Mitadru Roy"
                title="Computer Science Engineer"
                handle="Mitadru17"
                status="Coding (Probably)"
                contactText="Let's build something cool"
                showUserInfo={true}
                onContactClick={scrollToContact}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <button
          onClick={scrollToWork}
          className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Scroll to work section"
        >
          <span className="text-sm font-medium tracking-wider">Explore My Work</span>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <ChevronDown className="relative z-10 w-6 h-6 animate-bounce group-hover:text-primary group-hover:animate-bounce-slow transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
}
