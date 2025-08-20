"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Calendar, User, Briefcase, GraduationCap, Mail, 
  Code2, Award, BookOpen, Zap
} from "lucide-react";

const aboutTabs = [
  { id: "bio", label: "About Me", icon: <User className="w-4 h-4" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
];

export default function AboutMainSection() {
  const [activeTab, setActiveTab] = useState("bio");

  const renderContent = () => {
    switch (activeTab) {
      case "bio":
        return <BiographyContent setActiveTab={setActiveTab} />;
      case "experience":
        return <ExperienceContent />;
      case "education":
        return <EducationContent />;
      default:
        return <BiographyContent setActiveTab={setActiveTab} />;
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto max-w-6xl px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AnimatedHeading 
            text="About Mitadru Roy" 
            className="text-3xl sm:text-4xl font-bold mb-6 text-foreground"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, experience, education, and the skills that drive my passion for technology.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {aboutTabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.id 
                  ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                  : "hover:bg-primary/10"
              }`}
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}

// Biography Content Component
function BiographyContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="space-y-8">
      {/* Personal Bio */}
      <Card className="border-0 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Hi, I'm Mitadru Roy! 👋</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm a passionate <span className="text-primary font-medium">Full-Stack Developer</span> and{' '}
                <span className="text-primary font-medium">AI Enthusiast</span> based in India. At 21 years old, 
                I'm driven by curiosity and a love for creating innovative digital solutions that make a real impact.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My journey in tech started with a simple fascination: <em>"How do things work under the hood?"</em> This curiosity 
                has led me to explore everything from modern web frameworks to cutting-edge AI technologies, 
                hackathon innovations, and automation experiments that solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I believe in the power of technology to transform ideas into reality. Whether it's building a 
                full-stack web application, integrating AI models, or automating tedious processes, I approach 
                each project with enthusiasm and a problem-solving mindset.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
                gaming, experimenting with video editing, or contributing to open-source projects. I'm always 
                excited about the next challenge and love collaborating with like-minded individuals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <MapPin className="w-5 h-5" />
              Personal Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span className="font-medium">India</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Age:</span>
              <span className="font-medium">21 years old</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-700 dark:text-green-400">
                Available for work
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Focus:</span>
              <span className="font-medium">Full-Stack + AI</span>
            </div>
          </CardContent>
        </Card>

        {/* Interests & Passions */}
        <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <Zap className="w-5 h-5" />
              Beyond Coding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <span className="text-sm">Hackathons</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎮</span>
                <span className="text-sm">Gaming</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎬</span>
                <span className="text-sm">Video Editing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔬</span>
                <span className="text-sm">AI Research</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🌐</span>
                <span className="text-sm">Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💡</span>
                <span className="text-sm">Innovation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20">
        <CardHeader>
          <CardTitle className="text-center text-orange-600 dark:text-orange-400">
            Quick Stats & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-background/30">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/30">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Hackathons</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/30">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Coding</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/30">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Learning Mode</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Want to know more about my professional journey? Check out my experience, education, and skills using the tabs above!
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" onClick={() => setActiveTab("experience")}>
            <Briefcase className="w-4 h-4 mr-2" />
            View Experience
          </Button>
          <Button variant="outline" onClick={() => setActiveTab("education")}>
            <GraduationCap className="w-4 h-4 mr-2" />
            View Education
          </Button>
        </div>
      </div>
    </div>
  );
}

// Experience Content Component
function ExperienceContent() {
  const experiences = [
    {
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote, India",
      type: "Freelance",
      description: "Working with various clients to build modern web applications, focusing on React, Next.js, and full-stack solutions.",
      highlights: [
        "Built 10+ production-ready web applications",
        "Integrated AI/ML models into web interfaces",
        "Automated business processes saving 50+ hours/month for clients"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript", "MongoDB"]
    },
    {
      title: "Data Science Developer",
      company: "HiQ Project",
      period: "2024",
      location: "Remote",
      type: "Project",
      description: "Developed an AI-powered interview and placement training system with NLP feedback and resume analysis.",
      highlights: [
        "Implemented NLP models for real-time interview feedback",
        "Built resume scoring algorithms with 85% accuracy",
        "Created AI-driven Q&A system for placement preparation"
      ],
      technologies: ["Python", "Hugging Face", "OpenAI API", "NLP", "React", "Node.js"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-3">Professional Experience</h3>
        <p className="text-muted-foreground">My journey in freelance development and innovative projects</p>
      </div>
      
      {experiences.map((exp, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
              </div>
              <div className="text-right min-w-0 md:min-w-[200px]">
                <Badge variant="secondary" className="mb-2">{exp.type}</Badge>
                <div className="text-sm text-muted-foreground">{exp.period}</div>
                <div className="text-sm text-muted-foreground">{exp.location}</div>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="font-medium text-foreground mb-2">Key Highlights:</h5>
              <ul className="space-y-1">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-foreground mb-2">Technologies:</h5>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Education Content Component  
function EducationContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-3">Education & Learning</h3>
        <p className="text-muted-foreground">My academic journey and continuous learning approach</p>
      </div>

      {/* Formal Education */}
      <Card className="border-l-4 border-l-primary/50 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-foreground mb-1">Bachelor of Technology (B.Tech)</h4>
              <p className="text-primary font-medium mb-2">Computer Science & Engineering</p>
              <p className="text-muted-foreground mb-4">
                Currently pursuing my undergraduate degree with a focus on software engineering, 
                data structures, algorithms, and modern programming paradigms.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Academic Focus:</h5>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground">• Data Structures & Algorithms</li>
                    <li className="text-sm text-muted-foreground">• Software Engineering</li>
                    <li className="text-sm text-muted-foreground">• Database Systems</li>
                    <li className="text-sm text-muted-foreground">• System Design</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Timeline:</h5>
                  <p className="text-sm text-muted-foreground">2021 - 2025 (Expected)</p>
                  <p className="text-sm text-muted-foreground">Currently in Progress</p>
                  <Badge variant="secondary" className="mt-2">Academic Excellence</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Self-Learning & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-foreground mb-2">🚀 Hackathon Achievements</h5>
              <p className="text-sm text-muted-foreground mb-2">10+ hackathons with multiple wins</p>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-2">💻 Full-Stack Expertise</h5>
              <p className="text-sm text-muted-foreground mb-2">Self-taught MERN stack development</p>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-2">🤖 AI/ML Integration</h5>
              <p className="text-sm text-muted-foreground mb-2">Practical ML model implementation</p>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-2">📚 Continuous Learning</h5>
              <p className="text-sm text-muted-foreground mb-2">Always exploring new technologies</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
