"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export default function AIEasterEgg() {
  const [keySequence, setKeySequence] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animationDataUri, setAnimationDataUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const targetSequence = ":hiq";

  const triggerAIAnimation = useCallback(async () => {
    setIsDialogOpen(true);
    setIsLoading(true);
    try {
      const result = await generateProjectDescription({ keyword: "hiq" });
      setAnimationDataUri(result.animationDataUri);
    } catch (error) {
      console.error("Error generating AI animation:", error);
      // Optionally, set an error state or a fallback image
      setIsDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let newSequence = keySequence + event.key;
      if (!targetSequence.startsWith(newSequence)) {
        newSequence = event.key;
      }

      if (newSequence === targetSequence) {
        triggerAIAnimation();
        newSequence = "";
      }
      setKeySequence(newSequence);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keySequence, triggerAIAnimation]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsDialogOpen(false);
      setAnimationDataUri(null);
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">AI Easter Egg Activated!</DialogTitle>
          <DialogDescription>
            You've discovered a hidden animation.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center p-4 min-h-[200px]">
          {isLoading ? (
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
          ) : (
            animationDataUri && (
              <Image
                src={animationDataUri}
                alt="AI Generated Animation"
                width={300}
                height={300}
                className="rounded-lg object-contain"
              />
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
