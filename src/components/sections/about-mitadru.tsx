"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedHeading from "@/components/animated-heading";
import { 
  Briefcase, GraduationCap, Award, MapPin, Calendar, 
  Code, Building, Users, Target, Lightbulb, ExternalLink, User
} from "lucide-react";
import { useState } from "react";

const personalInfo = {
  name: "Mitadru Roy",
  age: 19,
  location: "Bengaluru, Karnataka, India",
  role: "Aspiring Full Stack Web Developer",
  education: "BE Computer Science Student",
  status: "Available for work",
  bio: "I'm a 19-year-old aspiring Full Stack Web Developer from Bengaluru, Karnataka with hands-on experience as a React Developer. I specialize in building dynamic web applications using React.js, Node.js, and RESTful APIs, successfully developing interactive dashboards and secure authentication systems while ensuring mobile-first responsiveness.",
  extendedBio: "Currently pursuing my Bachelor of Engineering in Computer Science at JSS Academy of Technical Education Karnataka (expected 2028), I'm eager to leverage my skills in scalable and secure technology solutions. When I'm not debugging code at 3 AM or wondering why my CSS isn't working, I contribute to open-source projects, experiment with AI automation, and try to convince my family that talking to computers for a living is actually a real career choice."
};

const workExperience = [
  {
    id: 1,
    company: "Glowbal Network",
    role: "React Developer",
    location: "London, England",
    period: "May 2025 - Present",
    type: "Remote",
    description: "Currently working on dynamic React applications because someone has to make the UI look good and actually work.",
    responsibilities: [
      "Developing dynamic React apps with Tailwind CSS, secure authentication, and interactive dashboards",
      "Integrating APIs while ensuring mobile-first responsiveness (because desktop-only is so 2010)",
      "Following modular design, clean code, and GitHub best practices, resulting in maintainable and scalable codebases"
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Git", "RESTful APIs", "Authentication"]
  },
  {
    id: 2,
    company: "GulScript Summer of Code",
    role: "Contributor",
    location: "India",
    period: "Sep 2024 - Nov 2024",
    type: "Open Source",
    description: "Contributing to open-source projects and learning that code reviews can be both helpful and humbling.",
    responsibilities: [
      "Improved UI and added features for open-source projects using React, Tailwind CSS, and JavaScript",
      "Enhanced user experience and project functionality (someone has to make it look good)",
      "Collaborated on GitHub, followed Agile practices, and gained experience in development workflows"
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Open Source", "Git", "Agile"]
  }
];

const education = [
  {
    id: 1,
    institution: "JSS Academy Of Technical Education Karnataka",
    degree: "Bachelor of Engineering - BE, Computer Science",
    location: "Karnataka, India",
    period: "Jan 2025 - Jan 2028 (Expected)",
    description: "Currently learning how to make computers do exactly what I want them to do (success rate: improving daily).",
    highlights: [
      "Mastering algorithms, data structures, and the art of debugging at ungodly hours",
      "Learning advanced programming concepts while questioning life choices",
      "Building a solid foundation in computer science fundamentals"
    ]
  },
  {
    id: 2,
    institution: "West Bengal Council of Higher Secondary Education",
    degree: "XII, Science",
    location: "West Bengal, India",
    period: "Jan 2022 - Jan 2024",
    description: "Survived high school science while secretly coding on the side because why choose between chemistry and JavaScript?",
    highlights: [
      "Completed with Science stream focusing on Physics, Chemistry, and Mathematics",
      "Developed analytical thinking and problem-solving skills",
      "Balanced academics with early programming exploration"
    ]
  }
];

const certifications = [
  {
    title: "Cybersecurity Analyst Job Simulation (Forage)",
    issuer: "Tata Group",
    description: "Learned how to keep hackers at bay and why 'password123' is not a secure password"
  },
  {
    title: "Data Visualization: Empowering Business with Effective Insights (Forage)",
    issuer: "Tata Group", 
    description: "Mastered the art of making charts that actually tell a story instead of confusing people"
  },
  {
    title: "Advanced Software Engineering Job Simulation (Forage)",
    issuer: "Walmart USA",
    description: "Survived corporate coding interviews and learned enterprise development practices"
  },
  {
    title: "Fundamentals of Information Security",
    issuer: "Infosys Springboard",
    description: "Discovered why information security is more than just strong passwords (shocking, I know)"
  },
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NetWare",
    description: "Taught AI to be creative while learning that machines can be as unpredictable as humans"
  },
  {
    title: "The Web Developer Bootcamp 2024",
    issuer: "Udemy",
    description: "Where I learned that JavaScript makes no sense, but somehow it works (most of the time)"
  }
];

export default function AboutMitadruSection() {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'education' | 'certifications'>('about');

  return (
    <section id="about-mitadru" className="py-20 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <AnimatedHeading 
            text="ABOUT MITADRU ROY" 
            className="text-4xl font-bold tracking-wider sm:text-5xl text-foreground mb-4" 
          />
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto mb-12">
          {/* Hero Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 dark:bg-blue-500/20 rounded-full border border-blue-200/50 dark:border-blue-500/30">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Available for work</span>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                        The Developer Behind The Code
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Building digital solutions that solve real problems, one line of code at a time. 
                        Currently crafting the future from Bengaluru.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="group">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-800/30 transition-all hover:scale-105">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">Student</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">BE Computer Science</div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-100 dark:border-purple-800/30 transition-all hover:scale-105">
                        <div className="p-2 bg-purple-500 rounded-lg">
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">React Dev</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Glowbal Network</div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-100 dark:border-green-800/30 transition-all hover:scale-105">
                        <div className="p-2 bg-green-500 rounded-lg">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">Certified</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">6 Certifications</div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-100 dark:border-orange-800/30 transition-all hover:scale-105">
                        <div className="p-2 bg-orange-500 rounded-lg">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">Based in</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Bengaluru, India</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="relative mx-auto w-20 h-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-75"></div>
                        <div className="relative w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">Mitadru Roy</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Full-Stack Developer & AI Enthusiast</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-2 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">19</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Years Old</div>
                        </div>
                        <div className="text-center p-2 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">3+</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Years Coding</div>
                        </div>
                        <div className="text-center p-2 bg-green-50 dark:bg-green-950/30 rounded-xl">
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">2</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Work Experience</div>
                        </div>
                        <div className="text-center p-2 bg-pink-50 dark:bg-pink-950/30 rounded-xl">
                          <div className="text-lg font-bold text-pink-600 dark:text-pink-400">∞</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Passion Level</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl -z-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-2 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <button
              onClick={() => setActiveTab('about')}
              className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                activeTab === 'about'
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
              }`}
            >
              <User className="w-4 h-4 inline-block mr-1" />
              Personal
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                activeTab === 'experience'
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
              }`}
            >
              <Briefcase className="w-4 h-4 inline-block mr-1" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                activeTab === 'education'
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
              }`}
            >
              <GraduationCap className="w-4 h-4 inline-block mr-1" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                activeTab === 'certifications'
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
              }`}
            >
              <Award className="w-4 h-4 inline-block mr-1" />
              Certifications
            </button>
          </div>
        </div>

        {/* About Me Tab */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Hi, I'm Mitadru! 👋
                  </h4>
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    A passionate Full-Stack Developer and AI Enthusiast based in Bengaluru, India. 
                    At 19, I'm driven by curiosity and love creating innovative digital solutions that make a real impact.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">My Journey</h5>
                      <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                        <p>
                          My tech journey started with a simple question: <em>"How do things work under the hood?"</em> 
                          This curiosity led me through everything from modern web frameworks to cutting-edge AI technologies.
                        </p>
                        <p>
                          Currently pursuing my BE in Computer Science at JSS Academy of Technical Education Karnataka, 
                          I'm building scalable solutions while contributing to open-source projects and experimenting with AI automation.
                        </p>
                        <p>
                          When I'm not debugging at 3 AM (my most productive hours, apparently), you'll find me participating in hackathons, 
                          gaming, or trying to convince my family that talking to computers is a legitimate career choice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Beyond Coding</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/30 transition-all hover:scale-105 hover:shadow-lg">
                          <div className="text-center">
                            <span className="text-2xl mb-2 block">🎯</span>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">Hackathons</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Competition Ready</p>
                          </div>
                        </div>
                        
                        <div className="group p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-xl border border-purple-200/50 dark:border-purple-700/30 transition-all hover:scale-105 hover:shadow-lg">
                          <div className="text-center">
                            <span className="text-2xl mb-2 block">🎮</span>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">Gaming</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Stress Relief</p>
                          </div>
                        </div>
                        
                        <div className="group p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-xl border border-green-200/50 dark:border-green-700/30 transition-all hover:scale-105 hover:shadow-lg">
                          <div className="text-center">
                            <span className="text-2xl mb-2 block">🔍</span>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">AI Research</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Future Focus</p>
                          </div>
                        </div>
                        
                        <div className="group p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 rounded-xl border border-pink-200/50 dark:border-pink-700/30 transition-all hover:scale-105 hover:shadow-lg">
                          <div className="text-center">
                            <span className="text-2xl mb-2 block">💡</span>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">Innovation</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Always Learning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-foreground">
              Work Experience <span className="text-muted-foreground text-base">(The Plot Thickens)</span>
            </h3>
            
            {workExperience.map((job) => (
              <Card key={job.id} className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg text-foreground flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-500" />
                        {job.role}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-muted-foreground text-sm">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{job.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {job.period}
                        </span>
                        <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                      <Target className="w-3 h-3 text-green-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2 text-sm">
                          <span className="text-primary text-xs">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                      <Code className="w-3 h-3 text-purple-500" />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-foreground">
              Education <span className="text-muted-foreground text-base">(The Academic Journey)</span>
            </h3>
            
            {education.map((edu) => (
              <Card key={edu.id} className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-foreground flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-500" />
                    {edu.degree}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-muted-foreground text-sm">
                    <span className="font-semibold text-purple-600 dark:text-purple-400">{edu.institution}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                      <Lightbulb className="w-3 h-3 text-yellow-500" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2 text-sm">
                          <span className="text-yellow-500 text-xs">★</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-foreground">
              Certifications <span className="text-muted-foreground text-base">(Proof I Actually Study)</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-foreground flex items-start gap-2">
                      <Award className="w-4 h-4 text-orange-500 mt-1" />
                      <div>
                        <div className="text-sm font-semibold">{cert.title}</div>
                        <div className="text-sm font-normal text-orange-600 dark:text-orange-400 mt-1">
                          {cert.issuer}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
