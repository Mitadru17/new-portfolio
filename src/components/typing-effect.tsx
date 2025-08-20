"use client";

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  className?: string;
}

export default function TypingEffect({ texts, speed = 100, className = "" }: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentTextIndex, texts, speed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}
