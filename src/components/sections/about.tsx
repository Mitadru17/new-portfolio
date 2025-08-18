
"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { Cpu, Gamepad2, Lightbulb, Rocket, Clapperboard, Code } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const skills = {
  "Frontend": [
    { name: "React.js/Next.js", level: 95 },
    { name: "Redux", level: 85 },
    { name: "TailwindCSS", level: 90 },
  ],
  "Backend": [
    { name: "Node.js/Express.js", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 85 },
  ],
  "AI/ML": [
    { name: "Python", level: 90 },
    { name: "Genkit/Gemini", level: 85 },
    { name: "Hugging Face", level: 75 },
  ],
  "Tools": [
    { name: "Git/GitHub", level: 95 },
    { name: "AWS/GCP", level: 70 },
    { name: "Vercel/Netlify", level: 90 },
  ],
};

const interests = [
  { icon: Rocket, text: "Hackathons" },
  { icon: Cpu, text: "AI & Automation" },
  { icon: Gamepad2, text: "Gaming" },
  { icon: Lightbulb, text: "Creative Problem Solving" },
  { icon: Clapperboard, text: "Video Editing" },
  { icon: Code, text: "Open Source" },
];

function SkillBar({ name, level }: { name: string, level: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(level);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-1 flex justify-between">
        <p className="text-sm font-medium text-muted-foreground">{name}</p>
        <p className="text-sm font-medium text-muted-foreground">{level}%</p>
      </div>
      <Progress value={progress} aria-label={`${name} proficiency`} />
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto max-w-7xl px-4">
      <AnimatedHeading text="ABOUT ME" className="mb-12 text-center text-4xl font-bold tracking-wider sm:text-5xl" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-12 text-lg text-muted-foreground">
          I’m a chill, self-driven, and versatile tech enthusiast balancing freelancing, hackathons, and academics. I specialize in full-stack web development, NLP, and AI-powered automation. I thrive on late-night problem-solving, hackathon adrenaline, and building minimal, functional, and impactful solutions.
        </p>
      </div>

      <div className="mb-16">
        <h3 className="mb-8 text-center font-headline text-3xl text-primary">My Skills</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-xl font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-8 text-center font-headline text-3xl text-primary">Interests & Hobbies</h3>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-3 lg:grid-cols-6">
          {interests.map((fact, index) => (
            <div key={index} className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/50">
              <fact.icon className="h-10 w-10 text-accent transition-transform group-hover:scale-110" />
              <p className="text-muted-foreground text-sm">{fact.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Psst! Try typing <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">:facts</kbd> to learn more about me.</p>
      </div>
    </section>
  );
}
