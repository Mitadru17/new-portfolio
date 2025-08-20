"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { 
  GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "University/College Name", // You can update this with your actual institution
    period: "2021 - 2025 (Expected)",
    location: "India",
    status: "In Progress",
    description: "Currently pursuing my undergraduate degree with a focus on software engineering, data structures, algorithms, and modern programming paradigms.",
    highlights: [
      "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
      "Focus Areas: Web Development, AI/ML, System Design",
      "Active in coding competitions and technical societies",
      "Maintaining strong academic performance while working on practical projects"
    ],
    gpa: "8.5/10 (Current)", // Update with your actual GPA if you want to include it
    projects: ["HiQ - AI Interview System", "AQUASIST - Water Monitoring Platform", "Multiple Full-Stack Applications"]
  }
];

const certifications = [
  {
    name: "Full-Stack Web Development",
    provider: "Self-Taught & Online Resources",
    date: "2023",
    description: "Comprehensive understanding of MERN stack, Next.js, and modern web development practices",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "Next.js"]
  },
  {
    name: "Machine Learning & AI Fundamentals",
    provider: "Online Courses & Practical Implementation",
    date: "2024",
    description: "Hands-on experience with ML models, NLP, and AI integration in web applications",
    skills: ["Python", "TensorFlow", "Hugging Face", "OpenAI API", "NLP"]
  },
  {
    name: "Hackathon Achievements",
    provider: "Various Hackathon Organizations",
    date: "2023-2024",
    description: "Participated in 10+ hackathons with multiple wins and recognition for innovative solutions",
    skills: ["Rapid Prototyping", "Team Leadership", "Innovation", "Problem Solving"]
  }
];

const skills = [
  {
    category: "Academic Focus",
    items: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "System Design", "Computer Networks", "Operating Systems"]
  },
  {
    category: "Self-Taught Expertise",
    items: ["Full-Stack Development", "AI/ML Integration", "Cloud Technologies", "DevOps Basics", "Mobile Development", "UI/UX Design"]
  },
  {
    category: "Practical Experience",
    items: ["Project Management", "Client Communication", "Code Review", "Testing & Debugging", "Performance Optimization", "Security Best Practices"]
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <AnimatedHeading 
            text="Education" 
            className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational journey combines formal computer science education with extensive self-learning and hands-on project experience.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Formal Education
          </h3>
          {education.map((edu, index) => (
            <Card key={index} className="border-l-4 border-l-primary/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.field}</p>
                    <p className="text-lg text-foreground mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                  </div>
                  <div className="text-right min-w-0 md:min-w-[200px]">
                    <Badge variant="secondary" className="mb-2">{edu.status}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1 md:justify-end">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2 md:justify-end">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="text-sm font-medium text-primary">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Academic Highlights:</h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Major Projects:</h5>
                    <div className="space-y-2">
                      {edu.projects.map((project, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs mr-2 mb-1">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications & Continuous Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                  <p className="text-sm text-primary font-medium">{cert.provider}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Areas */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Learning Journey
            </CardTitle>
            <p className="text-muted-foreground">
              My educational approach combines formal academics with practical, hands-on learning and industry experience.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground mb-3 text-center">{skillGroup.category}</h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((item, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground text-center p-2 bg-background/50 rounded-md">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
