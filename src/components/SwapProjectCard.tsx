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
}) => {
  return (
    <div className="relative w-full h-full p-6 overflow-hidden group cursor-pointer">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageHint}
          fill
          className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          {featured && (
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Featured</span>
            </div>
          )}
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
            {liveUrl && (
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
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-primary/80 font-medium mb-3 line-clamp-1">
            {role}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {tech.slice(0, 4).map((techItem) => (
              <Badge 
                key={techItem} 
                variant="secondary" 
                className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {techItem}
              </Badge>
            ))}
            {tech.length > 4 && (
              <Badge 
                variant="outline" 
                className="text-xs px-2 py-0.5 text-muted-foreground border-muted-foreground/30"
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
