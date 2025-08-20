"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "../ui/button";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Play", href: "#play" }, // Changed from Contact
];

export default function Header() {
  const [time, setTime] = useState("");

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
    <header className="fixed top-4 inset-x-0 z-50 w-full flex justify-center">
      <div className="w-full max-w-lg flex h-14 items-center justify-between rounded-full bg-background/60 backdrop-blur-lg px-6 border border-border/30 shadow-lg">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          MR
        </Link>
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          <span className="text-sm text-muted-foreground font-medium hidden sm:inline">{time}</span>
        </div>
      </div>
    </header>
  );
}
