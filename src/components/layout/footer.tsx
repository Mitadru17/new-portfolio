import { Moon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-muted-foreground sm:flex-row">
        <p className="font-headline text-lg text-foreground/80">Minimal Tech, Maximum Impact.</p>
        <div className="flex flex-col items-center gap-2 sm:items-end">
            <p>&copy; {new Date().getFullYear()} Mitadru Roy. All Rights Reserved.</p>
            <p className="flex items-center gap-1 text-xs">Built at 2 AM <Moon className="h-3 w-3" /></p>
        </div>
      </div>
    </footer>
  );
}
