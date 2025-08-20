"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedHeading from "@/components/animated-heading";
import { 
  Briefcase, GraduationCap, Award, MapPin, Calendar, 
  Code, Building, Users, Target, Lightbulb, ExternalLink
} from "lucide-react";
import { useState } from "react";

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
      "Following modular design, clean code, and GitHub best practices, resulting in maintainable and scalable codebases",
      "Collaborated with international team members who thankfully understand my sarcasm"
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Git", "RESTful APIs", "Authentication"],
    achievements: [
      "Successfully delivered multiple features without breaking production (surprisingly)",
      "Improved code quality through modular design patterns",
      "Enhanced user experience with responsive mobile-first design"
    ]
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
      "Collaborated on GitHub, followed Agile practices, and gained experience in development workflows",
      "Learned the art of writing commit messages that actually make sense"
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Open Source", "Git", "Agile"],
    achievements: [
      "Successfully contributed to multiple open-source projects",
      "Improved project functionality and user experience",
      "Gained valuable experience in collaborative development"
    ]
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
      "Discovering that theoretical computer science is different from 'just make it work'",
      "Building a solid foundation in computer science fundamentals"
    ],
    relevantCourses: [
      "Data Structures & Algorithms", "Software Engineering", "Database Management Systems",
      "Computer Networks", "Operating Systems", "Web Technologies"
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
      "Learned that physics formulas are just like programming logic, but with more Greek letters",
      "Balanced academics with early programming exploration"
    ],
    relevantCourses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  }
];

const certifications = [
  {
    title: "Cybersecurity Analyst Job Simulation (Forage)",
    issuer: "Tata Group",
    description: "Learned how to keep hackers at bay and why 'password123' is not a secure password",
    skills: ["Cybersecurity", "Risk Assessment", "Security Analysis"]
  },
  {
    title: "Data Visualization: Empowering Business with Effective Insights (Forage)",
    issuer: "Tata Group", 
    description: "Mastered the art of making charts that actually tell a story instead of confusing people",
    skills: ["Data Visualization", "Business Intelligence", "Analytics"]
  },
  {
    title: "Advanced Software Engineering Job Simulation (Forage)",
    issuer: "Walmart USA",
    description: "Survived corporate coding interviews and learned enterprise development practices",
    skills: ["Software Engineering", "Enterprise Development", "Code Quality"]
  },
  {
    title: "Fundamentals of Information Security",
    issuer: "Infosys Springboard",
    description: "Discovered why information security is more than just strong passwords (shocking, I know)",
    skills: ["Information Security", "Security Fundamentals", "Risk Management"]
  },
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NetWare",
    description: "Taught AI to be creative while learning that machines can be as unpredictable as humans",
    skills: ["Artificial Intelligence", "Machine Learning", "Generative AI"]
  },
  {
    title: "The Web Developer Bootcamp 2024",
    issuer: "Udemy",
    description: "Where I learned that JavaScript makes no sense, but somehow it works (most of the time)",
    skills: ["Web Development", "Full-Stack Development", "JavaScript"]
  }
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');

  return (
    <section id="experience" className="py-20 bg-secondary/30 dark:bg-secondary/20">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedHeading 
          text="MY JOURNEY" 
          className="mb-8 text-center text-4xl font-bold tracking-wider sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" 
        />
        
        <p className="mb-12 text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From high school science student to React developer in London - here's how I convinced the world 
          that a 19-year-old from Bengaluru can actually write code that doesn't break everything. 
          <span className="text-primary font-semibold"> (Plot twist: It only breaks things occasionally now)</span>
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-full p-1 flex gap-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeTab === 'experience'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase className="w-4 h-4 inline-block mr-2" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeTab === 'education'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <GraduationCap className="w-4 h-4 inline-block mr-2" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeTab === 'certifications'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Award className="w-4 h-4 inline-block mr-2" />
              Certifications
            </button>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Work Experience <span className="text-muted-foreground text-lg">(The Plot Thickens)</span>
            </h3>
            
            {workExperience.map((job, index) => (
              <Card key={job.id} className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground flex items-center gap-2">
                        <Building className="w-5 h-5 text-blue-500" />
                        {job.role}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{job.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </span>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-purple-500" />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-yellow-500">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Education <span className="text-muted-foreground text-lg">(The Academic Journey)</span>
            </h3>
            
            {education.map((edu, index) => (
              <Card key={edu.id} className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-purple-500" />
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{edu.institution}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-yellow-500">★</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-500" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Certifications <span className="text-muted-foreground text-lg">(Proof I Actually Study)</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-start gap-2">
                      <Award className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <div>{cert.title}</div>
                        <div className="text-sm font-normal text-orange-600 dark:text-orange-400 mt-1">
                          {cert.issuer}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Skills Gained:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Add Your Project to My Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited about new challenges and opportunities to grow. 
              Whether it's building the next big thing or fixing someone else's "quickly written" code, 
              I'm here for it!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Users className="w-4 h-4" />
                Let's Work Together
              </a>
              <a
                href="/resume-mitadru-roy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}