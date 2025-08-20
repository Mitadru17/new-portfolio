"use client";

import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for better user experience
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const headerHeight = 80; // Adjust based on your header height
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Custom easing function for smoother animation
            const easeInOutCubic = (t: number) => 
              t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = Math.min(Math.abs(distance) / 2, 1000); // Dynamic duration, max 1s
            let startTime: number | null = null;
            
            const scrollAnimation = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / duration, 1);
              
              const easedProgress = easeInOutCubic(progress);
              const newPosition = startPosition + distance * easedProgress;
              
              window.scrollTo(0, newPosition);
              
              if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
              }
            };
            
            requestAnimationFrame(scrollAnimation);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    // Add momentum scrolling for touch devices
    const addMomentumScrolling = () => {
      if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };

    addMomentumScrolling();

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = 80;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};
