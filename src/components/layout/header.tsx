"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateClock();
    const intervalId = setInterval(updateClock, 1000 * 60); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 w-full flex justify-center px-4 sm:px-0">
      <div className="w-full max-w-2xl flex h-12 sm:h-14 items-center justify-between rounded-full bg-background/80 backdrop-blur-xl px-4 sm:px-6 border border-border/30 shadow-lg transition-smooth">
        <Link 
          href="/" 
          className="font-headline text-xl sm:text-2xl font-bold text-primary hover:scale-105 transition-transform"
        >
          MR
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-all hover:text-primary hover:scale-105 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
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
                    onClick={() => setIsOpen(false)}
                    className="text-center py-3 px-4 rounded-lg hover:bg-primary/10 transition-all animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="font-medium text-foreground hover:text-primary">
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
