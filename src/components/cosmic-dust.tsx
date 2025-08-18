import React from 'react';
import { cn } from "@/lib/utils";

interface CosmicDustProps extends React.SVGProps<SVGSVGElement> {}

const CosmicDust: React.FC<CosmicDustProps> = ({ className, ...props }) => {
  return (
    <svg
      id="cosmic-dust"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
      className={cn("pointer-events-none", className)}
      {...props}
    >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'hsla(var(--primary), 0.8)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsla(var(--primary), 0)', stopOpacity: 0 }} />
        </radialGradient>
        <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'hsla(var(--accent), 0.7)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsla(var(--accent), 0)', stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      {/* Background stars */}
      <rect width="100%" height="100%" fill="hsl(var(--background))" />

      {/* Pulsating cosmic dust */}
      <circle cx="15%" cy="20%" r="100" fill="url(#grad1)" />
      <circle cx="80%" cy="30%" r="80" fill="url(#grad2)" />
      <circle cx="50%" cy="80%" r="120" fill="url(#grad1)" />
      <circle cx="20%" cy="75%" r="60" fill="url(#grad2)" />
      <circle cx="90%" cy="85%" r="90" fill="url(#grad1)" />
      <circle cx="5%" cy="50%" r="50" fill="url(#grad2)" />
      <circle cx="40%" cy="10%" r="70" fill="url(#grad1)" />
      <circle cx="65%" cy="55%" r="110" fill="url(#grad2)" />
    </svg>
  );
};

export default CosmicDust;
