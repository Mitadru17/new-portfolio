"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { 
  Briefcase, Calendar, ExternalLink, MapPin
} from "lucide-react";

const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    location: "Remote, India",
    type: "Freelance",
    description: "Working with various clients to build modern web applications, focusing on React, Next.js, and full-stack solutions. Specialized in AI integration and automation projects.",
    highlights: [
      "Built 10+ production-ready web applications",
      "Integrated AI/ML models into web interfaces",
      "Automated business processes saving 50+ hours/month for clients",
      "Maintained 100% client satisfaction rate"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript", "MongoDB"]
  },
  {
    title: "Data Science Developer",
    company: "HiQ Project",
    period: "2024",
    location: "Remote",
    type: "Project",
    description: "Developed an AI-powered interview and placement training system with NLP feedback, resume analysis, and intelligent Q&A capabilities.",
    highlights: [
      "Implemented NLP models for real-time interview feedback",
      "Built resume scoring algorithms with 85% accuracy",
      "Created AI-driven Q&A system for placement preparation",
      "Integrated Hugging Face and OpenAI APIs"
    ],
    technologies: ["Python", "Hugging Face", "OpenAI API", "NLP", "React", "Node.js"]
  },
  {
    title: "Frontend Developer",
    company: "AQUASIST Project",
    period: "2024",
    location: "Remote",
    type: "Project",
    description: "Developed a community-driven water monitoring platform with chatbot integration for reporting water-related issues.",
    highlights: [
      "Built responsive React frontend with real-time updates",
      "Integrated Dialogflow chatbot for issue reporting",
      "Implemented Firebase real-time database",
      "Created admin dashboard for issue management"
    ],
    technologies: ["React", "Node.js", "Firebase", "Dialogflow", "JavaScript"]
  },
  {
    title: "Frontend Development Intern",
    company: "Various Freelance Projects",
    period: "2023",
    location: "Remote",
    type: "Internship",
    description: "Gained hands-on experience building production-ready UIs and dashboards for web applications, focusing on React ecosystem.",
    highlights: [
      "Developed responsive user interfaces",
      "Collaborated with design teams on UI/UX implementation",
      "Optimized application performance and accessibility",
      "Learned industry best practices and code review processes"
    ],
    technologies: ["React", "JavaScript", "CSS", "HTML5", "Git"]
  }
];

const achievements = [
  "🏆 10+ Hackathons participated with multiple wins",
  "🚀 50+ Projects built across various domains",
  "🤖 5+ AI/ML models integrated into production apps",
  "⚡ Automation scripts saving 100+ hours of manual work",
  "🎯 100% client satisfaction in freelance projects"
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <AnimatedHeading 
            text="Experience" 
            className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey showcases a blend of freelance work, innovative projects, and continuous learning in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
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
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                  </div>
                  <div className="text-right min-w-0 md:min-w-[200px]">
                    <Badge variant="secondary" className="mb-2">{exp.type}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Key Highlights:</h4>
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
                  <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
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

        {/* Achievements */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
