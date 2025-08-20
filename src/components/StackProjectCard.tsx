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
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {featured && (
          <div className="mb-4">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Featured Project
            </Badge>
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-primary/80 font-medium mb-4">{role}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem) => (
              <Badge 
                key={techItem} 
                variant="outline" 
                className="bg-background/50 border-primary/20 text-foreground/80 hover:bg-primary/10 transition-colors"
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
          {liveUrl && (
            <Button size="sm" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StackProjectCard;
