"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navItems = [
  { label: "About", href: "#about-mitadru" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateClock();
    const intervalId = setInterval(updateClock, 1000 * 60); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Find active section
      const sections = navItems.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 w-full flex justify-center px-4 sm:px-0">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-background/20 z-40">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="w-full max-w-2xl flex h-12 sm:h-14 items-center justify-between rounded-full bg-background/80 backdrop-blur-xl px-4 sm:px-6 border border-border/30 shadow-lg transition-smooth">
        <Link 
          href="/" 
          className="font-headline text-xl sm:text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300"
        >
          MR
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                  isActive ? 'text-primary scale-105' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggleButton />
          <span className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:inline">
            {time}
          </span>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden p-2 hover:bg-primary/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              className="h-auto bg-background/95 backdrop-blur-xl border-border/50"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-primary">Portfolio Navigation</div>
                  <div className="text-sm text-muted-foreground">{time}</div>
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-center py-3 px-4 rounded-lg hover:bg-primary/10 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="font-medium text-foreground hover:text-primary transition-colors duration-300">
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
