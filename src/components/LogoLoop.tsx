"use client";
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 50,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const container = containerRef.current;

    // Clone logos for seamless loop
    const logoElements = Array.from(scroller.children);
    logoElements.forEach(logo => {
      const clone = logo.cloneNode(true) as HTMLElement;
      scroller.appendChild(clone);
    });

    // Calculate animation duration based on speed
    const totalWidth = scroller.scrollWidth / 2; // Divide by 2 because we doubled the content
    const duration = totalWidth / speed;

    scroller.style.animationDuration = `${duration}s`;
    scroller.style.animationDirection = direction === 'left' ? 'normal' : 'reverse';
  }, [logos, speed, direction]);

  const LogoElement: React.FC<{ logo: LogoItem; index: number }> = ({ logo, index }) => {
    const content = (
      <div
        className={`flex-shrink-0 flex items-center justify-center transition-transform duration-300 ${
          scaleOnHover ? 'hover:scale-110' : ''
        }`}
        style={{
          height: `${logoHeight}px`,
          marginRight: `${gap}px`,
        }}
        title={logo.title}
      >
        {logo.node ? (
          <div 
            className="text-current"
            style={{ fontSize: `${logoHeight * 0.8}px` }}
          >
            {logo.node}
          </div>
        ) : logo.src ? (
          <img
            src={logo.src}
            alt={logo.alt || `Logo ${index + 1}`}
            height={logoHeight}
            className="max-h-full w-auto object-contain"
          />
        ) : null}
      </div>
    );

    return logo.href ? (
      <Link 
        href={logo.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </Link>
    ) : (
      content
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ 
        height: `${logoHeight + 20}px`,
        overflow: 'hidden'
      }}
      aria-label={ariaLabel}
    >
      {/* Fade out effects */}
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 z-10 h-full w-20"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`
            }}
          />
          <div
            className="absolute right-0 top-0 z-10 h-full w-20"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`
            }}
          />
        </>
      )}
      
      <div
        ref={scrollerRef}
        className={`flex items-center animate-scroll ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        style={{
          width: 'max-content',
        }}
      >
        {logos.map((logo, index) => (
          <LogoElement key={index} logo={logo} index={index} />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
