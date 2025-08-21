"use client";

import { useEffect, useRef, useState } from "react";
import { useResponsive } from "@/hooks/use-responsive";

interface ResponsiveAnimationProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn" | "fadeIn";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function ResponsiveAnimation({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1
}: ResponsiveAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: isMobile ? 0.05 : threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, hasAnimated, isMobile]);

  // Adjust timing for mobile
  const adjustedDuration = isMobile ? duration * 0.7 : duration;
  const adjustedDelay = isMobile ? delay * 0.5 : delay;

  const animationClass = `animate-${animation}`;
  const visibilityClass = isVisible ? "opacity-100" : "opacity-0";
  
  return (
    <div
      ref={elementRef}
      className={`transition-all ${visibilityClass} ${isVisible ? animationClass : ""} ${className}`}
      style={{
        animationDuration: `${adjustedDuration}s`,
        animationDelay: `${adjustedDelay}s`,
        animationFillMode: "both"
      }}
    >
      {children}
    </div>
  );
}

// Stagger animation for lists
interface StaggeredAnimationProps {
  children: React.ReactNode[];
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn";
  staggerDelay?: number;
  className?: string;
}

export function StaggeredAnimation({
  children,
  animation = "fadeInUp",
  staggerDelay = 0.1,
  className = ""
}: StaggeredAnimationProps) {
  const { isMobile } = useResponsive();
  const adjustedStagger = isMobile ? staggerDelay * 0.5 : staggerDelay;

  return (
    <>
      {children.map((child, index) => (
        <ResponsiveAnimation
          key={index}
          animation={animation}
          delay={index * adjustedStagger}
          className={className}
        >
          {child}
        </ResponsiveAnimation>
      ))}
    </>
  );
}
