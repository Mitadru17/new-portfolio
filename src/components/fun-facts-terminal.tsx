
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Terminal } from "lucide-react";

const funFacts = [
  "🌙 Night Owl Coder — Most productive between 11 PM and 2 AM.",
  "☕ Survives on Minimal Fuel — Can go a whole day with just one or two meals.",
  "🍜 Kettle Chef — Masters budget recipes cooked entirely in an electric kettle.",
  "💻 Hackathon Addict — Loves the rush of building entire projects in 24–48 hours.",
  "🎯 Chill Hustler — Can juggle freelancing, college, and hackathons without losing the calm vibe.",
  "🎮 Gamer at Heart — Always on the lookout for the perfect all-rounder laptop for coding + gaming + editing.",
  "🤖 AI Whisperer — Experiments with NLP, AI chatbots, and automation side hustles just for fun.",
  "⚡ “Done is Better Than Perfect” — Believes in shipping projects fast and improving later.",
  "🔧 Fixer Mindset — Enjoys debugging, optimizing, and finding budget hacks for both tech and life.",
  "🌍 DIY Minimalist — Likes living lean: simple tools, efficient hacks, and maximum output.",
  "🌀 Easter Egg Guy — Loves hiding little secrets, quirks, or jokes inside projects (like keyboard shortcuts or hidden lines in code).",
  "🔥 Momentum Driven — Once in flow, can grind for hours without noticing the time.",
  "🛠 All-Rounder Vibes — Can switch between full-stack dev, AI tinkering, and creative hacks seamlessly.",
  "🎤 Mock Interview Pro — Turned practice interview prep into a full hackathon project (HiQ).",
];

const TerminalLine = ({ text, onFinished }: { text: string; onFinished?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length - 1) {
        clearInterval(intervalId);
        onFinished?.();
      }
    }, 30);
    return () => clearInterval(intervalId);
  }, [text, onFinished]);

  return <p>{displayedText}<span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1"></span></p>;
};


export default function FunFactsTerminal() {
  const [keySequence, setKeySequence] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [revealedFacts, setRevealedFacts] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [unusedFacts, setUnusedFacts] = useState([...funFacts]);
  const contentRef = useRef<HTMLDivElement>(null);
  const targetSequence = ":facts";

  const showNextFact = useCallback(() => {
    if (isTyping || unusedFacts.length === 0) return;

    setIsTyping(true);
    const randomIndex = Math.floor(Math.random() * unusedFacts.length);
    const nextFact = unusedFacts[randomIndex];
    
    setUnusedFacts(prev => prev.filter(fact => fact !== nextFact));
    setRevealedFacts(prev => [...prev, nextFact]);

  }, [isTyping, unusedFacts]);

  const triggerTerminal = useCallback(() => {
    setUnusedFacts([...funFacts]);
    setRevealedFacts([]);
    setIsDialogOpen(true);
    showNextFact();
  }, [showNextFact]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isDialogOpen) return;

      let newSequence = keySequence + event.key;
      if (!targetSequence.startsWith(newSequence)) {
        newSequence = event.key;
      }

      if (newSequence === targetSequence) {
        triggerTerminal();
        newSequence = "";
      }
      setKeySequence(newSequence);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keySequence, triggerTerminal, isDialogOpen]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [revealedFacts, isTyping]);


  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsDialogOpen(false);
    }
  }

  const handleTerminalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if(target.tagName !== 'BUTTON' && target.tagName !== 'A' ) {
       showNextFact();
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl h-[500px] flex flex-col font-code" onClick={handleTerminalClick}>
        <DialogHeader>
          <DialogTitle className="font-headline text-primary flex items-center gap-2">
            <Terminal size={20} /> Fun Facts Terminal
          </DialogTitle>
          <DialogDescription>
            You've discovered a hidden terminal. Click anywhere to get a new fact.
          </DialogDescription>
        </DialogHeader>
        <div ref={contentRef} className="bg-black/80 text-green-400 p-4 rounded-md flex-grow overflow-y-auto text-sm">
            <p className="text-gray-400">MitadruOS v1.0.0</p>
            <p className="text-gray-400">Type `help` for a list of commands. Oh wait, this is just a fun facts generator.</p>
            <br />
            {revealedFacts.slice(0, -1).map((fact, index) => (
              <p key={index}><span className="text-primary">[mitadru@portfolio ~]$</span> {fact}</p>
            ))}
            {isTyping && revealedFacts.length > 0 && (
                 <div className="flex">
                    <p className="text-primary mr-2">[mitadru@portfolio ~]$</p> 
                    <TerminalLine 
                        text={revealedFacts[revealedFacts.length-1]} 
                        onFinished={() => setIsTyping(false)} 
                    />
                 </div>
            )}
            {!isTyping && unusedFacts.length > 0 && (
                <p><span className="text-primary">[mitadru@portfolio ~]$</span> <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1"></span></p>
            )}
             {!isTyping && unusedFacts.length === 0 && (
                <>
                <p className="text-accent mt-4">You've seen all the fun facts!</p>
                <p><span className="text-primary">[mitadru@portfolio ~]$</span> <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1"></span></p>
                </>
             )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
