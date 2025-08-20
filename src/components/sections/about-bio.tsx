"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, Calendar, User, Briefcase, GraduationCap, Mail
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto max-w-4xl px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AnimatedHeading 
            text="About Me" 
            className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
          />
        </div>

        {/* Personal Bio */}
        <Card className="mb-8 border-0 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Mitadru Roy</h3>
                <p className="text-muted-foreground mb-4">
                  Hi there! I'm Mitadru Roy, a passionate <span className="text-primary font-medium">Full-Stack Developer</span> and{' '}
                  <span className="text-primary font-medium">AI Enthusiast</span> based in India. At 21 years old, I'm driven by curiosity and a love for creating innovative digital solutions that make a real impact.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey in tech started with a fascination for how things work under the hood. This curiosity has led me to explore everything from modern web frameworks to cutting-edge AI technologies, hackathon innovations, and automation experiments.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, participating in hackathons, gaming, or experimenting with video editing. I believe in continuous learning and am always excited about the next challenge or project.
                </p>
              </div>
            </div>
            
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/30">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Based in India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Age: 21</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Available for work</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
