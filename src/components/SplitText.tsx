"use client";
import React, { useRef, useEffect, useState } from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  trigger?: boolean;
  animationType?: 'slideUp' | 'fadeIn' | 'slideDown' | 'scaleIn';
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = '',
  delay = 0,
  stagger = 0.05,
  duration = 0.6,
  trigger = true,
  animationType = 'slideUp',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [trigger, delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible && !trigger) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible, trigger]);

  const getAnimationClasses = (isVisible: boolean) => {
    const baseClasses = `inline-block transition-all ease-out`;
    
    switch (animationType) {
      case 'slideUp':
        return `${baseClasses} ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0'
        }`;
      case 'slideDown':
        return `${baseClasses} ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`;
      case 'fadeIn':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`;
      case 'scaleIn':
        return `${baseClasses} ${
          isVisible 
            ? 'scale-100 opacity-100' 
            : 'scale-0 opacity-0'
        }`;
      default:
        return `${baseClasses} ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0'
        }`;
    }
  };

  const words = children.split(' ');

  return (
    <div 
      ref={ref} 
      className={`${className} overflow-hidden`}
      style={{ display: 'block', width: 'fit-content' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, charIndex) => {
            const globalIndex = words.slice(0, wordIndex).join('').length + charIndex;
            return (
              <span
                key={charIndex}
                className={getAnimationClasses(isVisible)}
                style={{
                  transitionDelay: `${globalIndex * stagger}s`,
                  transitionDuration: `${duration}s`,
                  display: char === ' ' ? 'inline' : 'inline-block',
                  transformOrigin: 'bottom',
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block w-2" />
          )}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
