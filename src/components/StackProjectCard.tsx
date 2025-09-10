"use client";
import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface StackProjectCardProps {
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

const StackProjectCard: React.FC<StackProjectCardProps> = ({
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
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-card/95 backdrop-blur-sm border border-border/50 ${
      featured ? 'border-primary/30 shadow-primary/10' : ''
    }`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageHint}
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/85" />
        {/* Additional bottom gradient for text area */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col backdrop-blur-sm">
        <div className="flex gap-2 mb-4 backdrop-blur-sm bg-background/30 rounded-lg p-3 border border-border/20">
          {featured && (
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Featured Project
            </Badge>
          )}
          {comingSoon && (
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-600 border-purple-500/30">
              🚀 Coming Soon
            </Badge>
          )}
        </div>

        <div className="flex-1 backdrop-blur-sm bg-background/30 rounded-lg p-4 border border-border/20">
          <h3 className="text-2xl font-bold mb-2 text-foreground drop-shadow-sm">{title}</h3>
          <p className="text-primary/90 font-medium mb-4 drop-shadow-sm">{role}</p>
          <p className="text-muted-foreground leading-relaxed mb-6 drop-shadow-sm">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem) => (
              <Badge 
                key={techItem} 
                variant="outline" 
                className="bg-background/70 border-primary/30 text-foreground/90 hover:bg-primary/20 transition-colors backdrop-blur-sm"
              >
                {techItem}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
          {liveUrl && !comingSoon && (
            <Button size="sm" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {comingSoon && (
            <Button disabled size="sm" className="flex items-center gap-2 opacity-60">
              <ExternalLink className="w-4 h-4" />
              Coming Soon
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StackProjectCard;
