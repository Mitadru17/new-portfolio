"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, Database, Globe, Zap, Brain, BarChart3,
  Rocket, Lightbulb, Gamepad2, GitBranch
} from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, 
  SiNodedotjs, SiTailwindcss, SiMongodb, SiFirebase, SiGit
} from 'react-icons/si';

const coreSkills = [
  {
    category: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Node.js", "Python", "MongoDB", "Firebase"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    category: "AI & Data",
    icon: <Brain className="w-5 h-5" />,
    skills: ["Machine Learning", "NLP", "Data Analysis", "TensorFlow"],
    color: "from-purple-500/20 to-violet-500/20"
  },
  {
    category: "Tools",
    icon: <GitBranch className="w-5 h-5" />,
    skills: ["Git", "Docker", "VS Code", "Figma"],
    color: "from-orange-500/20 to-yellow-500/20"
  }
];

const techStack = [
  { icon: <SiJavascript className="w-6 h-6" />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiReact className="w-6 h-6" />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs className="w-6 h-6" />, name: "Next.js", color: "#000000" },
  { icon: <SiNodedotjs className="w-6 h-6" />, name: "Node.js", color: "#339933" },
  { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind", color: "#06B6D4" },
  { icon: <SiPython className="w-6 h-6" />, name: "Python", color: "#3776AB" },
  { icon: <SiMongodb className="w-6 h-6" />, name: "MongoDB", color: "#47A248" },
  { icon: <SiFirebase className="w-6 h-6" />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiGit className="w-6 h-6" />, name: "Git", color: "#F05032" }
];

const interests = [
  { icon: Rocket, text: "Hackathons", color: "text-orange-500" },
  { icon: Brain, text: "AI Research", color: "text-purple-500" },
  { icon: Gamepad2, text: "Gaming", color: "text-green-500" },
  { icon: Lightbulb, text: "Innovation", color: "text-yellow-500" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto max-w-6xl px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedHeading 
            text="About Me" 
            className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
          />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate <span className="text-primary font-medium">full-stack developer</span> and{' '}
            <span className="text-primary font-medium">AI enthusiast</span> who loves creating innovative solutions 
            that make a difference. With a strong foundation in modern web technologies and emerging AI tools, 
            I bring both technical expertise and creative problem-solving to every project.
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreSkills.map((skillGroup, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br ${skillGroup.color} backdrop-blur-sm hover:-translate-y-1`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-background/50 text-primary">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{skillGroup.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-muted-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="transition-transform group-hover:scale-110">
                  {tech.icon}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Beyond Coding</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <interest.icon className={`w-5 h-5 ${interest.color} transition-transform group-hover:scale-110`} />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {interest.text}
                </span>
              </div>
            ))}
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-3 rounded-lg bg-background/30 border border-border/30">
              <div className="text-xl font-bold text-primary">50+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/30 border border-border/30">
              <div className="text-xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground">Hackathons</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/30 border border-border/30">
              <div className="text-xl font-bold text-primary">3+</div>
              <div className="text-xs text-muted-foreground">Years Coding</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/30 border border-border/30">
              <div className="text-xl font-bold text-primary">∞</div>
              <div className="text-xs text-muted-foreground">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
