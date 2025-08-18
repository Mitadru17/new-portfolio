import ProjectCard from "@/components/project-card";
import AnimatedHeading from "@/components/animated-heading";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const featuredProject = {
  title: "HiQ — Personalized Interview & Placement Training",
  role: "Data Science Developer | NLP & Resume Analysis",
  description: "An AI-powered system providing real-time NLP feedback on interview answers, resume scoring, and AI-driven Q&A to help students prepare for placements. This project showcases my ability to integrate complex AI models into a user-friendly application.",
  tech: ["Python", "Hugging Face", "OpenAI API", "Node.js", "React", "NLP"],
  imageUrl: "https://placehold.co/1200x800.png",
  imageHint: "AI analytics dashboard",
};

const otherProjects = [
  {
    title: "AQUASIST — Community Water Watch Platform",
    role: "Frontend & Chatbot Developer",
    description: "A platform enabling users to report water-related issues via a chatbot, fostering community-driven monitoring.",
    tech: ["React", "Node.js", "Firebase", "Dialogflow"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "community water",
  },
  {
    title: "MatDash Dashboard Clone",
    role: "Frontend Developer",
    description: "A UI/UX assignment to clone a professional dashboard, demonstrating skills in building complex, responsive user interfaces.",
    tech: ["React", "Redux", "TailwindCSS"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "dashboard UI",
  },
  {
    title: "Freelance React Development (Internship)",
    role: "Frontend Intern",
    description: "Gained practical experience building production-ready UIs and dashboards for web applications using React.",
    tech: ["React", "JavaScript", "CSS"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "react code",
  },
  {
    title: "Side Hustles — Automation Experiments",
    role: "Automation Enthusiast",
    description: "Exploring passive income through web automation, including building bots for Reddit and affiliate marketing.",
    tech: ["Python", "Selenium", "APIs"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "automation chart",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-secondary/30 dark:bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedHeading text="MY WORK" className="mb-12 text-center text-4xl font-bold tracking-wider sm:text-5xl" />
        
        {/* Featured Project */}
        <div className="group mb-16">
          <div className="glowing-border grid grid-cols-1 gap-8 rounded-lg bg-card p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 md:grid-cols-2 md:items-center">
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg">
              <Image
                src={featuredProject.imageUrl}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={featuredProject.imageHint}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Badge variant="secondary" className="w-fit border-primary/50 bg-primary/20 text-primary-foreground">Featured Project</Badge>
              <h3 className="font-headline text-3xl font-bold text-primary">{featuredProject.title}</h3>
              <p className="text-lg font-semibold text-muted-foreground">{featuredProject.role}</p>
              <p className="text-muted-foreground">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tech.map((item) => (
                  <Badge key={item} variant="secondary" className="border-accent/50 bg-accent/20 text-accent-foreground">
                    {item}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-4 w-fit">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
