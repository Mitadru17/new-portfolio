"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import LogoLoop from "@/components/LogoLoop";
import MagicBento from "@/components/MagicBento";
import type { BentoCardProps } from "@/components/MagicBento";
import { 
  Code2, Database, Globe, Zap, Brain, BarChart3, GitBranch, Settings,
  Rocket, Lightbulb, Terminal, Shield
} from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, 
  SiNodedotjs, SiTailwindcss, SiMongodb, SiFirebase, SiGit,
  SiDocker, SiExpress, SiPostgresql, SiTensorflow
} from 'react-icons/si';
import React, { useState } from "react";

// Transform skills data for MagicBento - organized by categories
const skillsCategories = {
  "Frontend Development": [
    {
      title: "React.js",
      description: "Because vanilla JS is for peasants who enjoy suffering",
      icon: <SiReact className="w-6 h-6" />,
      color: "97, 218, 251",
      techColor: "#61DAFB",
      level: 96
    },
    {
      title: "JavaScript (ES6+)",
      description: "Making browsers cry since 1995, now with more promises",
      icon: <SiJavascript className="w-6 h-6" />,
      color: "247, 223, 30",
      techColor: "#F7DF1E",
      level: 95
    },
    {
      title: "TypeScript",
      description: "JavaScript for people who actually want to sleep at night",
      icon: <SiTypescript className="w-6 h-6" />,
      color: "49, 120, 198",
      techColor: "#3178C6",
      level: 92
    },
    {
      title: "HTML5 & CSS3",
      description: "Still the building blocks, despite what React fanboys say",
      icon: <Code2 className="w-6 h-6" />,
      color: "227, 79, 38",
      techColor: "#E34F26",
      level: 95
    },
    {
      title: "TailwindCSS",
      description: "Because writing actual CSS is apparently too mainstream",
      icon: <SiTailwindcss className="w-6 h-6" />,
      color: "6, 182, 212",
      techColor: "#06B6D4",
      level: 93
    }
  ],
  "Backend & Full Stack": [
    {
      title: "Node.js",
      description: "JavaScript on the server? What could possibly go wrong?",
      icon: <SiNodedotjs className="w-6 h-6" />,
      color: "51, 153, 51",
      techColor: "#339933",
      level: 91
    },
    {
      title: "Express.js",
      description: "Fast, unopinionated, minimalist - unlike my code reviews",
      icon: <SiExpress className="w-6 h-6" />,
      color: "68, 68, 68",
      techColor: "#444444",
      level: 89
    },
    {
      title: "Python",
      description: "The language that makes everything look easy (spoiler: it's not)",
      icon: <SiPython className="w-6 h-6" />,
      color: "55, 118, 171",
      techColor: "#3776AB",
      level: 88
    },
    {
      title: "Java",
      description: "Write once, debug everywhere - thanks Oracle!",
      icon: <Terminal className="w-6 h-6" />,
      color: "237, 139, 0",
      techColor: "#ED8B00",
      level: 85
    },
    {
      title: "C/C++",
      description: "For when you want to manually manage every byte like a masochist",
      icon: <Code2 className="w-6 h-6" />,
      color: "100, 149, 237",
      techColor: "#6495ED",
      level: 80
    }
  ],
  "Databases & APIs": [
    {
      title: "MongoDB",
      description: "NoSQL because who needs ACID compliance anyway?",
      icon: <SiMongodb className="w-6 h-6" />,
      color: "71, 162, 72",
      techColor: "#47A248",
      level: 86
    },
    {
      title: "REST APIs",
      description: "Making HTTP requests feel fancy since 2000",
      icon: <Globe className="w-6 h-6" />,
      color: "255, 149, 0",
      techColor: "#FF9500",
      level: 92
    },
    {
      title: "Firebase",
      description: "Google's way of making us forget how to build real backends",
      icon: <SiFirebase className="w-6 h-6" />,
      color: "255, 202, 40",
      techColor: "#FFCA28",
      level: 88
    },
    {
      title: "SQL",
      description: "Because sometimes you need your data to actually make sense",
      icon: <Database className="w-6 h-6" />,
      color: "51, 103, 145",
      techColor: "#336791",
      level: 85
    }
  ],
  "Data & AI": [
    {
      title: "Machine Learning",
      description: "Teaching computers to be almost as confused as humans",
      icon: <Brain className="w-6 h-6" />,
      color: "255, 107, 53",
      techColor: "#FF6B35",
      level: 82
    },
    {
      title: "Data Structures & Algorithms",
      description: "The art of overcomplicating simple problems since forever",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "156, 39, 176",
      techColor: "#9C27B0",
      level: 85
    },
    {
      title: "Data Analysis",
      description: "Finding patterns in chaos, or at least pretending to",
      icon: <Database className="w-6 h-6" />,
      color: "21, 64, 88",
      techColor: "#150458",
      level: 80
    }
  ],
  "Security & DevOps": [
    {
      title: "Git/GitHub",
      description: "Version control for people who can't remember what they did yesterday",
      icon: <SiGit className="w-6 h-6" />,
      color: "240, 80, 50",
      techColor: "#F05032",
      level: 95
    },
    {
      title: "Data Security",
      description: "Keeping hackers out while letting bugs in",
      icon: <Shield className="w-6 h-6" />,
      color: "76, 175, 80",
      techColor: "#4CAF50",
      level: 83
    },
    {
      title: "Identity & Access Management",
      description: "Making sure only the right people can break things",
      icon: <Settings className="w-6 h-6" />,
      color: "33, 150, 243",
      techColor: "#2196F3",
      level: 78
    }
  ],
  "Testing & Leadership": [
    {
      title: "Unit Testing",
      description: "Writing tests that pass until they don't",
      icon: <Zap className="w-6 h-6" />,
      color: "255, 193, 7",
      techColor: "#FFC107",
      level: 85
    },
    {
      title: "Problem Solving",
      description: "Professional bug creator and occasional bug destroyer",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "255, 193, 7",
      techColor: "#FFC107",
      level: 95
    },
    {
      title: "Agile Project Management",
      description: "Sprinting in circles while calling it methodology",
      icon: <Rocket className="w-6 h-6" />,
      color: "0, 200, 83",
      techColor: "#00C853",
      level: 88
    },
    {
      title: "Team Communication",
      description: "Explaining why your code broke in production at 3 AM",
      icon: <GitBranch className="w-6 h-6" />,
      color: "33, 150, 243",
      techColor: "#2196F3",
      level: 92
    }
  ]
};

// Category metadata with icons and sarcastic descriptions
const categoryMetadata = {
  "Frontend Development": {
    icon: <Code2 className="w-4 h-4" />,
    description: "Making things look pretty while slowly losing sanity"
  },
  "Backend & Full Stack": {
    icon: <Terminal className="w-4 h-4" />,
    description: "Where the real magic happens (and breaks at 3 AM)"
  },
  "Databases & APIs": {
    icon: <Database className="w-4 h-4" />,
    description: "Storing data responsibly (sometimes)"
  },
  "Data & AI": {
    icon: <Brain className="w-4 h-4" />,
    description: "Teaching computers to think, with mixed results"
  },
  "Security & DevOps": {
    icon: <Shield className="w-4 h-4" />,
    description: "Keeping the bad guys out and good guys frustrated"
  },
  "Testing & Leadership": {
    icon: <Rocket className="w-4 h-4" />,
    description: "Breaking things professionally and managing the chaos"
  }
};

// Core technologies for LogoLoop with original brand colors
const coreTechnologies = [
  { 
    node: <SiJavascript style={{ color: "#F7DF1E" }} />, 
    title: "JavaScript", 
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ariaLabel: "JavaScript programming language"
  },
  { 
    node: <SiTypescript style={{ color: "#3178C6" }} />, 
    title: "TypeScript", 
    href: "https://www.typescriptlang.org",
    ariaLabel: "TypeScript programming language"
  },
  { 
    node: <SiReact style={{ color: "#61DAFB" }} />, 
    title: "React", 
    href: "https://react.dev",
    ariaLabel: "React JavaScript library"
  },
  { 
    node: <SiNextdotjs style={{ color: "#000000" }} />, 
    title: "Next.js", 
    href: "https://nextjs.org",
    ariaLabel: "Next.js React framework"
  },
  { 
    node: <SiNodedotjs style={{ color: "#339933" }} />, 
    title: "Node.js", 
    href: "https://nodejs.org",
    ariaLabel: "Node.js runtime environment"
  },
  { 
    node: <SiPython style={{ color: "#3776AB" }} />, 
    title: "Python", 
    href: "https://python.org",
    ariaLabel: "Python programming language"
  },
  { 
    node: <SiTailwindcss style={{ color: "#06B6D4" }} />, 
    title: "Tailwind CSS", 
    href: "https://tailwindcss.com",
    ariaLabel: "Tailwind CSS framework"
  },
  { 
    node: <SiMongodb style={{ color: "#47A248" }} />, 
    title: "MongoDB", 
    href: "https://www.mongodb.com",
    ariaLabel: "MongoDB database"
  },
  { 
    node: <SiFirebase style={{ color: "#FFCA28" }} />, 
    title: "Firebase", 
    href: "https://firebase.google.com",
    ariaLabel: "Firebase platform"
  },
  { 
    node: <SiGit style={{ color: "#F05032" }} />, 
    title: "Git", 
    href: "https://git-scm.com",
    ariaLabel: "Git version control"
  },
  { 
    node: <SiDocker style={{ color: "#2496ED" }} />, 
    title: "Docker", 
    href: "https://docker.com",
    ariaLabel: "Docker containerization"
  },
  { 
    node: <SiTensorflow style={{ color: "#FF6F00" }} />, 
    title: "TensorFlow", 
    href: "https://tensorflow.org",
    ariaLabel: "TensorFlow machine learning"
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(skillsCategories)[0]);

  return (
    <section id="skills" className="py-16 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <AnimatedHeading 
            text="Skills & Technologies" 
            className="text-3xl sm:text-4xl font-bold mb-6 text-foreground"
          />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A carefully curated collection of technologies I've wrestled with, survived, and occasionally emerged victorious from. 
            Warning: Side effects may include imposter syndrome and an unhealthy relationship with Stack Overflow.
          </p>
        </div>

        {/* Core Technologies Logo Loop */}
        <div className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground mx-4 sm:mx-6 lg:mx-8">Core Technologies</h3>
          <div className="relative h-20 w-full overflow-hidden">
            <LogoLoop
              logos={coreTechnologies}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={48}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={false}
              ariaLabel="Core technologies I work with"
              className="h-full w-full"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 mx-4 sm:mx-6 lg:mx-8">
            Hover to pause • Click to learn more
          </p>
        </div>

        {/* Categorized Skills Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Technical Skills & Expertise
          </h3>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 max-w-5xl mx-auto">
            {Object.keys(skillsCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:scale-102'
                }`}
              >
                {categoryMetadata[category as keyof typeof categoryMetadata]?.icon}
                <span>{category}</span>
              </button>
            ))}
          </div>

          {/* Active Category Skills */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-primary mb-2 flex items-center justify-center gap-2">
                {categoryMetadata[activeCategory as keyof typeof categoryMetadata]?.icon}
                {activeCategory}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                {categoryMetadata[activeCategory as keyof typeof categoryMetadata]?.description}
              </p>
              <p className="text-xs text-muted-foreground/70">
                {skillsCategories[activeCategory as keyof typeof skillsCategories].length} skills in this category
              </p>
            </div>
            <MagicBento skillsData={skillsCategories[activeCategory as keyof typeof skillsCategories]} />
          </div>
        </div>

        {/* Learning Philosophy */}
        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 border-border/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">My Learning Philosophy</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              I believe in continuous learning because technology changes faster than my ability to keep up. 
              Every project is a new opportunity to discover creative ways to break things, and I'm always 
              exploring emerging technologies that promise to solve all our problems (narrator: they don't).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">� Trial by Fire</Badge>
              <Badge variant="secondary" className="px-4 py-2">� Professional Bug Creator</Badge>
              <Badge variant="secondary" className="px-4 py-2">☕ Caffeine-Driven Development</Badge>
              <Badge variant="secondary" className="px-4 py-2">🚀 Fake It Till You Make It</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
