import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import "./MagicBento.css";

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  icon?: React.ReactNode;
  level?: number;
  techColor?: string;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  skillsData?: BentoCardProps[];
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "139, 92, 246";
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 1000;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard: React.FC<BentoCardProps> = ({
  color = DEFAULT_GLOW_COLOR,
  title,
  description,
  icon,
  level,
  textAutoHide = false,
  disableAnimations = false,
  techColor
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationsRef = useRef<(gsap.core.Tween | gsap.core.Timeline)[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const createParticles = useCallback((event: MouseEvent) => {
    if (disableAnimations || isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (let i = 0; i < 3; i++) {
      const particle = createParticleElement(x, y, color);
      cardRef.current.appendChild(particle);

      const tl = gsap.timeline({
        onComplete: () => {
          particle.remove();
          const index = animationsRef.current.indexOf(tl);
          if (index > -1) animationsRef.current.splice(index, 1);
        }
      });

      const angle = (i / 3) * Math.PI * 2;
      const distance = 30 + Math.random() * 40;
      const endX = x + Math.cos(angle) * distance;
      const endY = y + Math.sin(angle) * distance;

      tl.to(particle, {
        duration: 0.8,
        x: endX - x,
        y: endY - y,
        opacity: 0,
        scale: 0,
        ease: "power2.out"
      });

      animationsRef.current.push(tl);
    }
  }, [color, disableAnimations, isMobile]);

  const handleMouseEnter = useCallback(() => {
    if (disableAnimations || isMobile) return;
    setIsHovered(true);
    
    if (cardRef.current) {
      const tl = gsap.timeline();
      tl.to(cardRef.current, {
        duration: 0.3,
        scale: 1.02,
        rotationY: 5,
        rotationX: 5,
        ease: "power2.out"
      });
      animationsRef.current.push(tl);
    }
  }, [disableAnimations, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (disableAnimations || isMobile) return;
    setIsHovered(false);
    
    if (cardRef.current) {
      const tl = gsap.timeline();
      tl.to(cardRef.current, {
        duration: 0.3,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out"
      });
      animationsRef.current.push(tl);
    }
  }, [disableAnimations, isMobile]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || disableAnimations || isMobile) return;

    card.addEventListener('click', createParticles);
    return () => card.removeEventListener('click', createParticles);
  }, [createParticles, disableAnimations, isMobile]);

  useEffect(() => {
    return () => {
      animationsRef.current.forEach(animation => animation.kill());
    };
  }, []);

  const cardStyle = {
    '--card-color': `rgba(${color}, 0.1)`,
    '--border-color': `rgba(${color}, 0.3)`,
    '--glow-color': `rgba(${color}, 0.6)`,
  } as React.CSSProperties;

  return (
    <div
      ref={cardRef}
      className="particle-card"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="particle-card-content">
        <div className="particle-card-header">
          {icon && (
            <div className="particle-card-icon" style={{ color: techColor || `rgb(${color})` }}>
              {icon}
            </div>
          )}
          <div className="particle-card-title-section">
            {title && <h3 className="particle-card-title">{title}</h3>}
            {level !== undefined && (
              <div className="particle-card-level">
                <span className="level-text">{level}%</span>
                <div className="level-bar">
                  <div 
                    className="level-fill" 
                    style={{ 
                      width: `${level}%`,
                      backgroundColor: techColor || `rgb(${color})`
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {description && (
          <p className={`particle-card-description ${textAutoHide && isHovered ? 'hide-text' : ''}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  enableSpotlight: boolean;
  spotlightRadius: number;
  glowColor: string;
  disableAnimations: boolean;
}> = ({ enableSpotlight, spotlightRadius, glowColor, disableAnimations }) => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableSpotlight || disableAnimations) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        spotlightRef.current.style.background = `radial-gradient(${spotlightRadius}px circle at ${x}px ${y}px, rgba(${glowColor}, 0.1) 0%, transparent 70%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [enableSpotlight, spotlightRadius, glowColor, disableAnimations]);

  if (!enableSpotlight || disableAnimations) return null;

  return (
    <div
      ref={spotlightRef}
      className="global-spotlight"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

const MagicBento: React.FC<BentoProps> = ({
  skillsData = [],
  textAutoHide = false,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || disableAnimations) return;

    const cards = containerRef.current.querySelectorAll('.particle-card');
    
    // Clear any existing animations
    gsap.killTweensOf(cards);
    
    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.95 
      }, 
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.1
      }
    );
  }, [skillsData, disableAnimations]);

  return (
    <div className="magic-bento-container" ref={containerRef}>
      <GlobalSpotlight
        enableSpotlight={enableSpotlight}
        spotlightRadius={spotlightRadius}
        glowColor={glowColor}
        disableAnimations={disableAnimations}
      />
      
      <div className="bento-grid">
        {skillsData.map((skill, index) => (
          <ParticleCard
            key={`${skill.title}-${index}`}
            color={skill.color}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
            level={skill.level}
            textAutoHide={textAutoHide}
            disableAnimations={disableAnimations}
            techColor={skill.techColor}
          />
        ))}
      </div>
    </div>
  );
};

export default MagicBento;
