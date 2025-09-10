"use client";
import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface SwapProjectCardProps {
  title: string;
  role: string;
  description: string;
  tech: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

const SwapProjectCard: React.FC<SwapProjectCardProps> = ({
  title,
  role,
  description,
  tech,
  imageUrl,
  imageHint,
  githubUrl,
  liveUrl,
  featured = false,
  comingSoon = false,
}) => {
  return (
    <div className="relative w-full h-full p-6 overflow-hidden group cursor-pointer">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageHint}
          fill
          className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        />
        {/* Stronger gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/85" />
        {/* Additional bottom gradient for text area */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-2">
            {featured && (
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Featured</span>
              </div>
            )}
            {comingSoon && (
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">🚀 Coming Soon</span>
              </div>
            )}
          </div>
          <div className="flex gap-2 ml-auto">
            {githubUrl && (
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-8 w-8 p-0 opacity-70 hover:opacity-100 hover:scale-110 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubUrl, '_blank');
                }}
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
            {liveUrl && !comingSoon && (
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-8 w-8 p-0 opacity-70 hover:opacity-100 hover:scale-110 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(liveUrl, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1 backdrop-blur-sm bg-background/30 rounded-lg p-4 border border-border/20">
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 drop-shadow-sm">
            {title}
          </h3>
          <p className="text-sm text-primary/90 font-medium mb-3 line-clamp-1 drop-shadow-sm">
            {role}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 drop-shadow-sm">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto backdrop-blur-sm bg-background/30 rounded-lg p-3 border border-border/20">
          <div className="flex flex-wrap gap-1.5">
            {tech.slice(0, 4).map((techItem) => (
              <Badge 
                key={techItem} 
                variant="secondary" 
                className="text-xs px-2 py-0.5 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors backdrop-blur-sm"
              >
                {techItem}
              </Badge>
            ))}
            {tech.length > 4 && (
              <Badge 
                variant="outline" 
                className="text-xs px-2 py-0.5 text-muted-foreground border-muted-foreground/40 bg-background/50"
              >
                +{tech.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default SwapProjectCard;
