"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Download } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-4 inset-x-0 z-50 w-full flex justify-center">
      <div className="w-fit flex h-16 items-center justify-between rounded-full bg-background/80 backdrop-blur-lg px-8 border border-border/40 shadow-lg">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          MR
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex ml-6">
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
        <div className="flex items-center gap-2 ml-6">
          <Button asChild variant="outline" size="sm">
            <a href="/Mitadru_Roy_CV.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              CV
            </a>
          </Button>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
