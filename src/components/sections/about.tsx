"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import LogoLoop from "@/components/LogoLoop";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Cpu, Gamepad2, Lightbulb, Rocket, Clapperboard, Code, 
  Database, Globe, Zap, Brain, BarChart3, GitBranch,
  Terminal, Settings, Cloud, Workflow, Shield, Monitor
} from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, 
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiFirebase, SiGit, SiDocker,
  SiMysql, SiPostgresql, SiTensorflow, SiPandas, SiNumpy,
  SiScikitlearn, SiJupyter, SiLinux, SiJira,
  SiPostman, SiFigma, SiJenkins, SiOpenjdk
} from 'react-icons/si';
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
    { name: "JavaScript (ES6+)", level: 95, icon: <SiJavascript />, color: "#F7DF1E", description: "Modern JS, async/await, modules" },
    { name: "TypeScript", level: 92, icon: <SiTypescript />, color: "#3178C6", description: "Type-safe development" },
    { name: "Python", level: 90, icon: <SiPython />, color: "#3776AB", description: "ML, automation, backends" },
    { name: "Java", level: 85, icon: <SiOpenjdk />, color: "#ED8B00", description: "Enterprise applications" },
    { name: "SQL", level: 88, icon: <SiMysql />, color: "#336791", description: "Database queries & optimization" },
    { name: "HTML5 & CSS3", level: 95, icon: <div className="flex gap-1"><SiHtml5 /><SiCss3 /></div>, color: "#E34F26", description: "Semantic markup & modern styling" },
  ],
  "Frontend Development": [
    { name: "React.js", level: 96, icon: <SiReact />, color: "#61DAFB", description: "Hooks, context, performance" },
    { name: "Next.js", level: 94, icon: <SiNextdotjs />, color: "#000000", description: "SSR, SSG, App Router" },
    { name: "Redux", level: 87, icon: <SiRedux />, color: "#764ABC", description: "State management" },
    { name: "TailwindCSS", level: 93, icon: <SiTailwindcss />, color: "#06B6D4", description: "Utility-first styling" },
    { name: "Responsive UI/UX Design", level: 90, icon: <SiFigma />, color: "#FF6B6B", description: "Mobile-first approach" },
  ],
  "Backend Development": [
    { name: "Node.js", level: 91, icon: <SiNodedotjs />, color: "#339933", description: "Server-side JavaScript" },
    { name: "Express.js", level: 89, icon: <SiExpress />, color: "#000000", description: "Web application framework" },
    { name: "REST APIs", level: 92, icon: <SiPostman />, color: "#FF9500", description: "RESTful services" },
    { name: "MongoDB", level: 86, icon: <SiMongodb />, color: "#47A248", description: "NoSQL database" },
    { name: "Firebase", level: 88, icon: <SiFirebase />, color: "#FFCA28", description: "Backend-as-a-Service" },
  ],
  "AI & Data (Bonus Edge)": [
    { name: "Machine Learning Basics", level: 82, icon: <SiTensorflow />, color: "#FF6B35", description: "Supervised & unsupervised learning" },
    { name: "NLP Fundamentals", level: 85, icon: <SiPandas />, color: "#4ECDC4", description: "Text processing & analysis" },
    { name: "Data Visualization", level: 80, icon: <SiJupyter />, color: "#45B7D1", description: "Matplotlib, D3.js insights" },
  ],
  "Tools & Dev Practices": [
    { name: "Git / GitHub", level: 95, icon: <SiGit />, color: "#F05032", description: "Version control & collaboration" },
    { name: "Docker (basic)", level: 75, icon: <SiDocker />, color: "#2496ED", description: "Containerization" },
    { name: "Agile / Scrum", level: 83, icon: <SiJira />, color: "#00C853", description: "Project management" },
    { name: "CI/CD (concepts)", level: 78, icon: <SiJenkins />, color: "#FFC107", description: "Automated deployment" },
  ],
};

// Tech logos for the animated loop
const techLogos = [
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiOpenjdk />, title: "Java", href: "https://java.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

const interests = [
  { icon: Code, text: "Open Source Contributing", color: "from-blue-500 to-cyan-500" },
  { icon: Brain, text: "AI & Machine Learning", color: "from-purple-500 to-pink-500" },
  { icon: Rocket, text: "Automation Experiments", color: "from-orange-500 to-red-500" },
  { icon: Database, text: "Data Structures & Algorithms", color: "from-green-500 to-blue-500" },
  { icon: Gamepad2, text: "Gaming (When Code Breaks)", color: "from-indigo-500 to-purple-500" },
  { icon: Lightbulb, text: "Problem Solving", color: "from-yellow-500 to-orange-500" },
];

function EnhancedSkillBar({ name, level, icon, color, description }: { 
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
        {/* Profile Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Avatar className="w-32 h-32 ring-4 ring-primary/20 shadow-2xl">
              <AvatarImage 
                src="/images/mitadru-profile.jpg" 
                alt="Mitadru Roy" 
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white text-2xl font-bold">
                MR
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
          I'm <span className="text-blue-400 font-semibold">Mitadru Roy</span>, a{' '}
          <span className="text-purple-400 font-semibold">19-year-old aspiring Full Stack Web Developer</span> from{' '}
          <span className="text-pink-400 font-semibold">Bengaluru, Karnataka</span> with hands-on experience as a React Developer. 
          I specialize in building dynamic web applications using{' '}
          <span className="text-green-400 font-semibold">React.js, Node.js, and RESTful APIs</span>, successfully developing 
          interactive dashboards and secure authentication systems while ensuring mobile-first responsiveness.
        </p>
        
        <p className="mb-8 text-md text-muted-foreground leading-relaxed">
          Currently pursuing my <span className="text-cyan-400 font-semibold">Bachelor of Engineering in Computer Science</span> at{' '}
          <span className="text-orange-400 font-semibold">JSS Academy of Technical Education Karnataka</span> (expected 2028), 
          I'm eager to leverage my skills in scalable and secure technology solutions. When I'm not debugging code at 3 AM 
          or wondering why my CSS isn't working, I contribute to open-source projects, experiment with AI automation, 
          and try to convince my family that talking to computers for a living is actually a real career choice.
        </p>
        
        {/* Experience & Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Experience */}
          <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/50 dark:to-cyan-950/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Code className="h-5 w-5" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-300 dark:border-blue-700 pl-4">
                <h4 className="font-semibold text-foreground">React Developer</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Glowbal Network • May 2025 - Present • London, England</p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Developed dynamic React apps with Tailwind CSS, secure authentication, and interactive dashboards</li>
                  <li>• Integrated APIs while ensuring mobile-first responsiveness (because desktop-only is so 2010)</li>
                  <li>• Followed modular design, clean code, and GitHub best practices, resulting in maintainable and scalable codebases</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-300 dark:border-blue-700 pl-4">
                <h4 className="font-semibold text-foreground">Contributor</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">GulScript Summer of Code • Sep 2024 - Nov 2024 • India</p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Improved UI and added features for open-source projects using React, Tailwind CSS, and JavaScript</li>
                  <li>• Enhanced user experience and project functionality (someone has to make it look good)</li>
                  <li>• Collaborated on GitHub, followed Agile practices, and gained experience in development workflows</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/50 dark:to-pink-950/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Brain className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-purple-300 dark:border-purple-700 pl-4">
                <h4 className="font-semibold text-foreground">Bachelor of Engineering - BE, Computer Science</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">JSS Academy of Technical Education Karnataka • Jan 2028 (Expected)</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Currently learning how to make computers do exactly what I want them to do (success rate: improving daily). 
                  Mastering algorithms, data structures, and the art of debugging at ungodly hours.
                </p>
              </div>
              <div className="border-l-4 border-purple-300 dark:border-purple-700 pl-4">
                <h4 className="font-semibold text-foreground">XII, Science</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">West Bengal Council of Higher Secondary Education • Jan 2024</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Survived high school science while secretly coding on the side. 
                  Physics, Chemistry, and Mathematics were cool, but JavaScript was cooler.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="mb-6 text-center font-headline text-2xl text-primary">Certifications & Professional Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            <Badge variant="outline" className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 border-orange-200 dark:border-orange-800">
              <div>
                <div className="font-semibold text-orange-600 dark:text-orange-400 mb-1">🔒 Cybersecurity Analyst Job Simulation</div>
                <div className="text-xs text-muted-foreground">Tata Group - Forage</div>
                <div className="text-xs text-muted-foreground/70 mt-1">(Keeping hackers at bay)</div>
              </div>
            </Badge>
            <Badge variant="outline" className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/50 dark:to-blue-950/50 border-green-200 dark:border-green-800">
              <div>
                <div className="font-semibold text-green-600 dark:text-green-400 mb-1">📊 Data Visualization: Empowering Business</div>
                <div className="text-xs text-muted-foreground">Tata Group - Forage</div>
                <div className="text-xs text-muted-foreground/70 mt-1">(Making charts that tell stories)</div>
              </div>
            </Badge>
            <Badge variant="outline" className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800">
              <div>
                <div className="font-semibold text-blue-600 dark:text-blue-400 mb-1">💻 Advanced Software Engineering Job Simulation</div>
                <div className="text-xs text-muted-foreground">Walmart USA - Forage</div>
                <div className="text-xs text-muted-foreground/70 mt-1">(Corporate coding survival)</div>
              </div>
            </Badge>
            <Badge variant="outline" className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-800">
              <div>
                <div className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">🔐 Fundamentals of Information Security</div>
                <div className="text-xs text-muted-foreground">Infosys Springboard</div>
                <div className="text-xs text-muted-foreground/70 mt-1">(Password !== "123456")</div>
              </div>
            </Badge>
            <Badge variant="outline" className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-purple-200 dark:border-purple-800">
              <div>
                <div className="font-semibold text-purple-600 dark:text-purple-400 mb-1">🤖 AI for Students: Build Your Own Generative AI Model</div>
                <div className="text-xs text-muted-foreground">NetWare</div>
                <div className="text-xs text-muted-foreground/70 mt-1">(Teaching AI to be creative)</div>
              </div>
            </Badge>
            <Badge variant="outline" className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50 border-pink-200 dark:border-pink-800">
              <div>
                <div className="font-semibold text-pink-600 dark:text-pink-400 mb-1">🚀 The Web Developer Bootcamp 2024</div>
                <div className="text-xs text-muted-foreground">Udemy</div>
                <div className="text-xs text-muted-foreground/70 mt-1">(Where I learned JS is weird)</div>
              </div>
            </Badge>
          </div>
        </div>
        
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
          <InteractiveSkillsUniverse skills={skillsData} />
        </div>
      )}

      {/* Traditional Skills View */}
      {activeView === 'traditional' && (
        <div className="mb-20">
          {/* Animated Skills Logo Loop */}
          <div className="mb-16 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 py-12 rounded-xl border border-primary/10">
            <h3 className="mb-8 text-center font-headline text-2xl text-primary">🚀 My Tech Stack</h3>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut={false}
              className="dark:text-white text-gray-700"
              ariaLabel="Technology stack showcase"
            />
          </div>

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

        {/* Personal Stats (Reality Check Edition) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="text-2xl font-bold text-blue-400">3</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
            <div className="text-xs text-muted-foreground/60">(AI Therapist, GreenGrow, UpFeet)</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20">
            <div className="text-2xl font-bold text-green-400">6</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
            <div className="text-xs text-muted-foreground/60">(Proof I study sometimes)</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="text-2xl font-bold text-purple-400">2</div>
            <div className="text-sm text-muted-foreground">Work Experiences</div>
            <div className="text-xs text-muted-foreground/60">(Real job references!)</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
            <div className="text-2xl font-bold text-orange-400">19</div>
            <div className="text-sm text-muted-foreground">Years Old</div>
            <div className="text-xs text-muted-foreground/60">(Born in 2006, math checks out)</div>
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
