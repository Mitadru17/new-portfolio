"use client";

import { useEffect } from 'react';

export const useScrollControl = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    // Add smooth scroll momentum and speed control
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      // Reduce scroll speed by dampening the delta
      const dampening = 0.6; // Adjust this value (0.1 = very slow, 1.0 = normal)
      const scrollAmount = e.deltaY * dampening;
      
      // Smooth scroll implementation
      const currentPosition = window.pageYOffset;
      const targetPosition = currentPosition + scrollAmount;
      
      // Use requestAnimationFrame for smooth scrolling
      const smoothScroll = (start: number, end: number, duration: number) => {
        isScrolling = true;
        const startTime = performance.now();
        
        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
          const easedProgress = easeOutCubic(progress);
          
          const currentPos = start + (end - start) * easedProgress;
          window.scrollTo(0, currentPos);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            isScrolling = false;
          }
        };
        
        requestAnimationFrame(animateScroll);
      };
      
      // Prevent default scrolling and apply custom smooth scroll
      e.preventDefault();
      smoothScroll(currentPosition, targetPosition, 400); // 400ms duration
      
      // Clear any existing timeout and set a new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };
    
    // Add scroll indicator for better UX
    const addScrollIndicator = () => {
      const indicator = document.createElement('div');
      indicator.id = 'scroll-indicator';
      indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #8b5cf6, #06b6d4);
        z-index: 9999;
        transition: width 0.3s ease;
        border-radius: 0 3px 3px 0;
      `;
      document.body.appendChild(indicator);
      
      const updateScrollIndicator = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        indicator.style.width = `${Math.min(scrollPercent, 100)}%`;
      };
      
      window.addEventListener('scroll', updateScrollIndicator, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', updateScrollIndicator);
        if (indicator.parentNode) {
          indicator.parentNode.removeChild(indicator);
        }
      };
    };
    
    // Only add wheel listener on desktop (not on touch devices)
    if (!('ontouchstart' in window)) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    const cleanupIndicator = addScrollIndicator();
    
    return () => {
      if (!('ontouchstart' in window)) {
        window.removeEventListener('wheel', handleWheel);
      }
      clearTimeout(scrollTimeout);
      cleanupIndicator();
    };
  }, []);
};
