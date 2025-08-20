"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { 
  Cpu, Gamepad2, Lightbulb, Rocket, Clapperboard, Code, 
  Database, Globe, Zap, Brain, BarChart3, GitBranch,
  Terminal, Settings, Cloud, Workflow, Shield, Monitor
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import 3D components to avoid SSR issues
const InteractiveSkillsUniverse = dynamic(() => import('../InteractiveSkillsUniverse'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading Skills Universe...</p>
      </div>
    </div>
  ),
});

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript (ES6+)", level: 95, icon: "🚀", color: "#F7DF1E", description: "Modern JS, async/await, modules" },
    { name: "TypeScript", level: 92, icon: "🔷", color: "#3178C6", description: "Type-safe development" },
    { name: "Python", level: 90, icon: "🐍", color: "#3776AB", description: "ML, automation, backends" },
    { name: "Java", level: 85, icon: "☕", color: "#ED8B00", description: "Enterprise applications" },
    { name: "SQL", level: 88, icon: "🗃️", color: "#336791", description: "Database queries & optimization" },
    { name: "HTML5 & CSS3", level: 95, icon: "🎨", color: "#E34F26", description: "Semantic markup & modern styling" },
  ],
  "Frontend Development": [
    { name: "React.js", level: 96, icon: "⚛️", color: "#61DAFB", description: "Hooks, context, performance" },
    { name: "Next.js", level: 94, icon: "▲", color: "#000000", description: "SSR, SSG, App Router" },
    { name: "Redux", level: 87, icon: "🔄", color: "#764ABC", description: "State management" },
    { name: "TailwindCSS", level: 93, icon: "🎭", color: "#06B6D4", description: "Utility-first styling" },
    { name: "Responsive UI/UX Design", level: 90, icon: "📱", color: "#FF6B6B", description: "Mobile-first approach" },
  ],
  "Backend Development": [
    { name: "Node.js", level: 91, icon: "🟢", color: "#339933", description: "Server-side JavaScript" },
    { name: "Express.js", level: 89, icon: "🚄", color: "#000000", description: "Web application framework" },
    { name: "REST APIs", level: 92, icon: "🔗", color: "#FF9500", description: "RESTful services" },
    { name: "MongoDB", level: 86, icon: "🍃", color: "#47A248", description: "NoSQL database" },
    { name: "Firebase", level: 88, icon: "🔥", color: "#FFCA28", description: "Backend-as-a-Service" },
  ],
  "AI & Data (Bonus Edge)": [
    { name: "Machine Learning Basics", level: 82, icon: "🤖", color: "#FF6B35", description: "Supervised & unsupervised learning" },
    { name: "NLP Fundamentals", level: 85, icon: "💬", color: "#4ECDC4", description: "Text processing & analysis" },
    { name: "Data Visualization", level: 80, icon: "📊", color: "#45B7D1", description: "Matplotlib, D3.js insights" },
  ],
  "Tools & Dev Practices": [
    { name: "Git / GitHub", level: 95, icon: "🔀", color: "#F05032", description: "Version control & collaboration" },
    { name: "Docker (basic)", level: 75, icon: "🐳", color: "#2496ED", description: "Containerization" },
    { name: "Agile / Scrum", level: 83, icon: "🏃", color: "#00C853", description: "Project management" },
    { name: "CI/CD (concepts)", level: 78, icon: "⚙️", color: "#FFC107", description: "Automated deployment" },
  ],
};

const interests = [
  { icon: Rocket, text: "Hackathons", color: "from-orange-500 to-red-500" },
  { icon: Brain, text: "AI & Automation", color: "from-purple-500 to-pink-500" },
  { icon: Gamepad2, text: "Gaming", color: "from-green-500 to-blue-500" },
  { icon: Lightbulb, text: "Creative Problem Solving", color: "from-yellow-500 to-orange-500" },
  { icon: Clapperboard, text: "Video Editing", color: "from-red-500 to-purple-500" },
  { icon: Code, text: "Open Source", color: "from-blue-500 to-cyan-500" },
];

function EnhancedSkillBar({ name, level, icon, color, description }: { 
  name: string, level: number, icon: string, color: string, description: string 
}) {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(level), Math.random() * 500);
        }
      },
      { threshold: 0.5 }
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
    <div 
      ref={ref}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-3 transition-transform group-hover:scale-125">
          {icon}
        </span>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-sm font-mono text-muted-foreground">{level}%</p>
          </div>
          <div className="mt-1 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-1000 ease-out rounded-full relative"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${color}, ${color}CC)`,
                boxShadow: isHovered ? `0 0 20px ${color}66` : 'none'
              }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          {isHovered && (
            <p className="text-xs text-muted-foreground mt-1 transition-opacity duration-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [activeView, setActiveView] = useState<'3d' | 'traditional'>('traditional');

  return (
    <section id="about" className="container mx-auto max-w-7xl px-4 py-20">
      <AnimatedHeading 
        text="SKILLS & EXPERTISE" 
        className="mb-12 text-center text-4xl font-bold tracking-wider sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" 
      />

      <div className="mx-auto max-w-4xl text-center mb-16">
        <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
          I'm a <span className="text-blue-400 font-semibold">aspiring full-stack web developer</span> from{' '}
          <span className="text-purple-400 font-semibold">Bengaluru, Karnataka</span> who specializes in building dynamic web applications 
          with <span className="text-pink-400 font-semibold">React, Node.js, and REST APIs</span>. Currently surviving engineering 
          while trying to convince computers to do what I want them to do (success rate: approximately 60%).
        </p>
        
        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-full p-1 flex gap-1">
            <button
              onClick={() => setActiveView('3d')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeView === '3d'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              🌌 Skills Universe
            </button>
            <button
              onClick={() => setActiveView('traditional')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeView === 'traditional'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              📊 Traditional View
            </button>
          </div>
        </div>
      </div>

      {/* 3D Interactive Skills Universe */}
      {activeView === '3d' && (
        <div className="mb-20">
          <h3 className="mb-8 text-center font-headline text-3xl text-primary">Interactive Skills Universe</h3>
          <p className="text-center text-muted-foreground mb-8">
            🎮 <span className="font-semibold">Click and drag</span> to explore • 
            🌟 <span className="font-semibold">Hover</span> over skills to learn more • 
            🚀 <span className="font-semibold">Scroll</span> to zoom
          </p>
          <div className="w-full h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-xl font-semibold mb-2">3D Skills Universe</p>
              <p className="text-muted-foreground">Coming soon with interactive 3D technology!</p>
            </div>
          </div>
        </div>
      )}

      {/* Traditional Skills View */}
      {activeView === 'traditional' && (
        <div className="mb-20">
          <h3 className="mb-12 text-center font-headline text-3xl text-primary">Technical Proficiency</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skillsData).map(([category, items]) => (
              <Card key={category} className="bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className="font-headline text-xl font-semibold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {items.map((skill) => (
                    <EnhancedSkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level}
                      icon={skill.icon}
                      color={skill.color}
                      description={skill.description}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Interests & Hobbies */}
      <div>
        <h3 className="mb-12 text-center font-headline text-3xl text-primary">Beyond Code</h3>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-3 lg:grid-cols-6 mb-12">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-white/10 bg-gradient-to-r ${interest.color}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <interest.icon className="h-8 w-8 text-white mx-auto mb-3 transition-transform group-hover:scale-110 drop-shadow-lg" />
              <p className="text-white font-medium text-sm drop-shadow-md">{interest.text}</p>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="text-2xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20">
            <div className="text-2xl font-bold text-green-400">10+</div>
            <div className="text-sm text-muted-foreground">Hackathons</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="text-2xl font-bold text-purple-400">5+</div>
            <div className="text-sm text-muted-foreground">AI Models</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
            <div className="text-2xl font-bold text-orange-400">24/7</div>
            <div className="text-sm text-muted-foreground">Learning Mode</div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          💡 Pro tip: Type{' '}
          <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
            :facts
          </kbd>{' '}
          to discover hidden easter eggs about my journey!
        </p>
      </div>
    </section>
  );
}
