"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, Database, Globe, Zap, Brain, BarChart3, GitBranch, Settings,
  Rocket, Lightbulb, Gamepad2, Terminal, Cloud, Shield
} from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, 
  SiNodedotjs, SiTailwindcss, SiMongodb, SiFirebase, SiGit,
  SiDocker, SiRedux, SiExpress, SiOpenjdk, SiHtml5, SiCss3,
  SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiJupyter,
  SiLinux, SiJira, SiPostman, SiFigma, SiJenkins, SiMysql, SiPostgresql
} from 'react-icons/si';
import { useEffect, useRef, useState } from "react";

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript (ES6+)", level: 95, icon: <SiJavascript />, color: "#F7DF1E", description: "Advanced ES6+ features, async/await, modules, DOM manipulation" },
    { name: "TypeScript", level: 92, icon: <SiTypescript />, color: "#3178C6", description: "Type-safe development, interfaces, generics, advanced types" },
    { name: "Python", level: 90, icon: <SiPython />, color: "#3776AB", description: "ML libraries, automation, web development, data analysis" },
    { name: "Java", level: 85, icon: <SiOpenjdk />, color: "#ED8B00", description: "OOP concepts, Spring basics, enterprise applications" },
    { name: "HTML5 & CSS3", level: 95, icon: <div className="flex gap-1"><SiHtml5 /><SiCss3 /></div>, color: "#E34F26", description: "Semantic markup, modern CSS, animations, responsive design" },
    { name: "SQL", level: 88, icon: <SiMysql />, color: "#336791", description: "Complex queries, database design, optimization, joins" },
  ],
  "Frontend Development": [
    { name: "React.js", level: 96, icon: <SiReact />, color: "#61DAFB", description: "Hooks, Context API, performance optimization, custom components" },
    { name: "Next.js", level: 94, icon: <SiNextdotjs />, color: "#000000", description: "SSR, SSG, App Router, API routes, deployment" },
    { name: "Redux/Zustand", level: 87, icon: <SiRedux />, color: "#764ABC", description: "State management, middleware, Redux Toolkit" },
    { name: "TailwindCSS", level: 93, icon: <SiTailwindcss />, color: "#06B6D4", description: "Utility-first styling, custom components, responsive design" },
    { name: "Responsive Design", level: 90, icon: <Globe />, color: "#4285F4", description: "Mobile-first approach, cross-browser compatibility" },
    { name: "UI/UX Principles", level: 85, icon: <SiFigma />, color: "#FF6B6B", description: "User-centered design, accessibility, modern interfaces" },
  ],
  "Backend Development": [
    { name: "Node.js", level: 91, icon: <SiNodedotjs />, color: "#339933", description: "Server-side JavaScript, event-driven programming" },
    { name: "Express.js", level: 89, icon: <SiExpress />, color: "#000000", description: "RESTful APIs, middleware, authentication, routing" },
    { name: "REST APIs", level: 92, icon: <Terminal />, color: "#FF9500", description: "API design, documentation, testing, best practices" },
    { name: "MongoDB", level: 86, icon: <SiMongodb />, color: "#47A248", description: "NoSQL database, aggregation, indexing, Mongoose ODM" },
    { name: "Firebase", level: 88, icon: <SiFirebase />, color: "#FFCA28", description: "Authentication, Firestore, hosting, cloud functions" },
    { name: "PostgreSQL", level: 82, icon: <SiPostgresql />, color: "#336791", description: "Relational database, complex queries, performance tuning" },
  ],
  "AI & Data Science": [
    { name: "Machine Learning", level: 82, icon: <SiTensorflow />, color: "#FF6B35", description: "Supervised/unsupervised learning, model training, evaluation" },
    { name: "Natural Language Processing", level: 85, icon: <Brain />, color: "#4ECDC4", description: "Text processing, sentiment analysis, language models" },
    { name: "Data Analysis", level: 80, icon: <SiPandas />, color: "#150458", description: "Pandas, NumPy, data visualization, statistical analysis" },
    { name: "TensorFlow Basics", level: 75, icon: <SiTensorflow />, color: "#FF6F00", description: "Neural networks, basic model implementation" },
    { name: "Hugging Face", level: 85, icon: <Zap />, color: "#FFD21E", description: "Pre-trained models, transformers, model integration" },
    { name: "OpenAI API", level: 88, icon: <Brain />, color: "#412991", description: "GPT integration, prompt engineering, AI applications" },
  ],
  "Tools & DevOps": [
    { name: "Git / GitHub", level: 95, icon: <SiGit />, color: "#F05032", description: "Version control, branching strategies, collaboration" },
    { name: "Docker", level: 75, icon: <SiDocker />, color: "#2496ED", description: "Containerization basics, Dockerfile, container management" },
    { name: "VS Code", level: 95, icon: <Code2 />, color: "#007ACC", description: "Extensions, debugging, productivity optimization" },
    { name: "Postman", level: 90, icon: <SiPostman />, color: "#FF6C37", description: "API testing, documentation, automation" },
    { name: "Figma", level: 80, icon: <SiFigma />, color: "#F24E1E", description: "Design collaboration, prototyping, design systems" },
    { name: "Linux/Terminal", level: 85, icon: <SiLinux />, color: "#FCC624", description: "Command line proficiency, shell scripting, system administration" },
  ],
  "Soft Skills & Methodologies": [
    { name: "Agile/Scrum", level: 83, icon: <Rocket />, color: "#00C853", description: "Sprint planning, stand-ups, retrospectives" },
    { name: "Problem Solving", level: 95, icon: <Lightbulb />, color: "#FFC107", description: "Analytical thinking, debugging, algorithm design" },
    { name: "Project Management", level: 88, icon: <Settings />, color: "#9C27B0", description: "Task prioritization, timeline management, client communication" },
    { name: "Team Collaboration", level: 92, icon: <GitBranch />, color: "#2196F3", description: "Code reviews, knowledge sharing, mentoring" },
    { name: "Client Communication", level: 90, icon: <Globe />, color: "#4CAF50", description: "Requirements gathering, progress updates, feedback incorporation" },
    { name: "Continuous Learning", level: 98, icon: <BarChart3 />, color: "#FF5722", description: "Staying updated with tech trends, self-directed learning" },
  ]
};

// Tech logos for display
const featuredTech = [
  { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript", level: 95 },
  { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", level: 92 },
  { icon: <SiReact className="w-8 h-8" />, name: "React", level: 96 },
  { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", level: 94 },
  { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.js", level: 91 },
  { icon: <SiPython className="w-8 h-8" />, name: "Python", level: 90 },
  { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", level: 86 },
  { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind", level: 93 },
];

function SkillBar({ name, level, icon, color, description }: { 
  name: string, level: number, icon: React.ReactNode, color: string, description: string 
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
      <div className="flex items-center mb-3">
        <span className="text-xl mr-3 transition-transform group-hover:scale-110">
          {icon}
        </span>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-sm font-mono text-muted-foreground">{level}%</p>
          </div>
          <Progress 
            value={progress} 
            className="h-2"
            style={{
              // @ts-ignore
              '--progress-background': color,
            }}
          />
          {isHovered && (
            <p className="text-xs text-muted-foreground mt-2 transition-opacity duration-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <AnimatedHeading 
            text="Skills & Technologies" 
            className="text-3xl sm:text-4xl font-bold mb-6 text-foreground"
          />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, tools I work with, and the skills I've developed through hands-on experience and continuous learning.
          </p>
        </div>

        {/* Featured Technologies */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {featuredTech.map((tech, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.level}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
            <Card key={category} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-center text-primary">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((skill) => (
                  <SkillBar 
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

        {/* Learning Philosophy */}
        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">My Learning Philosophy</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              I believe in continuous learning and hands-on experience. Every project teaches me something new, 
              and I'm always exploring emerging technologies to stay ahead of the curve. My approach combines 
              theoretical knowledge with practical implementation to build robust, scalable solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">🚀 Always Learning</Badge>
              <Badge variant="secondary" className="px-4 py-2">🔬 Experimental Mindset</Badge>
              <Badge variant="secondary" className="px-4 py-2">🎯 Problem-First Approach</Badge>
              <Badge variant="secondary" className="px-4 py-2">🤝 Collaborative Growth</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
