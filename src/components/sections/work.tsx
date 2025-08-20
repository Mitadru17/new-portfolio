import ProjectCard from "@/components/project-card";
import AnimatedHeading from "@/components/animated-heading";
import CardSwap, { Card } from "@/components/CardSwap";
import SwapProjectCard from "@/components/SwapProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const featuredProject = {
  id: "hiq",
  title: "HiQ — Personalized Interview & Placement Training",
  role: "Data Science Developer | NLP & Resume Analysis",
  description: "An AI-powered system providing real-time NLP feedback on interview answers, resume scoring, and AI-driven Q&A to help students prepare for placements. This project showcases my ability to integrate complex AI models into a user-friendly application.",
  tech: ["Python", "Hugging Face", "OpenAI API", "Node.js", "React", "NLP"],
  imageUrl: "https://placehold.co/1200x800.png",
  imageHint: "AI analytics dashboard",
  githubUrl: "https://github.com/mitadru17/hiq-project",
  liveUrl: "https://hiq-demo.vercel.app",
  featured: true,
};

const otherProjects = [
  {
    id: "aquasist",
    title: "AQUASIST — Community Water Watch Platform",
    role: "Frontend & Chatbot Developer",
    description: "A platform enabling users to report water-related issues via a chatbot, fostering community-driven monitoring.",
    tech: ["React", "Node.js", "Firebase", "Dialogflow"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "community water",
    githubUrl: "https://github.com/mitadru17/aquasist",
    liveUrl: "https://aquasist-demo.vercel.app",
    featured: false,
  },
  {
    id: "matdash",
    title: "MatDash Dashboard Clone",
    role: "Frontend Developer",
    description: "A UI/UX assignment to clone a professional dashboard, demonstrating skills in building complex, responsive user interfaces.",
    tech: ["React", "Redux", "TailwindCSS"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "dashboard UI",
    githubUrl: "https://github.com/mitadru17/matdash-clone",
    liveUrl: "https://matdash-clone.vercel.app",
    featured: false,
  },
  {
    id: "freelance",
    title: "Freelance React Development (Internship)",
    role: "Frontend Intern",
    description: "Gained practical experience building production-ready UIs and dashboards for web applications using React.",
    tech: ["React", "JavaScript", "CSS"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "react code",
    githubUrl: "https://github.com/mitadru17/freelance-projects",
    featured: false,
  },
  {
    id: "automation",
    title: "Side Hustles — Automation Experiments",
    role: "Automation Enthusiast",
    description: "Exploring passive income through web automation, including building bots for Reddit and affiliate marketing.",
    tech: ["Python", "Selenium", "APIs"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "automation chart",
    githubUrl: "https://github.com/mitadru17/automation-projects",
    featured: false,
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-secondary/30 dark:bg-secondary/20 py-20 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedHeading 
          text="MY WORK" 
          className="mb-16 text-center text-4xl font-bold tracking-wider sm:text-5xl text-foreground" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Project Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Featured Projects
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Explore my collection of innovative projects ranging from AI-powered applications 
                to full-stack web solutions. Each project showcases different aspects of my 
                technical expertise and problem-solving approach.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">🤖 AI & Machine Learning Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">🚀 Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-muted-foreground">🎨 Modern UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">⚡ Performance Optimization</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <a href="https://github.com/mitadru17" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Eye className="mr-2 h-4 w-4" />
                  Let's Collaborate
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - CardSwap Animation */}
          <div className="flex justify-center items-center min-h-[600px]">
            <CardSwap
              width={400}
              height={500}
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              <Card>
                <SwapProjectCard
                  title={featuredProject.title}
                  role={featuredProject.role}
                  description={featuredProject.description}
                  tech={featuredProject.tech}
                  imageUrl={featuredProject.imageUrl}
                  imageHint={featuredProject.imageHint}
                  githubUrl={featuredProject.githubUrl}
                  liveUrl={featuredProject.liveUrl}
                  featured={featuredProject.featured}
                />
              </Card>
              
              {otherProjects.map((project) => (
                <Card key={project.id}>
                  <SwapProjectCard
                    title={project.title}
                    role={project.role}
                    description={project.description}
                    tech={project.tech}
                    imageUrl={project.imageUrl}
                    imageHint={project.imageHint}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                  />
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

        {/* Bottom Section - Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to see more projects?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have many more projects 
              covering various technologies and domains. Let's connect and discuss how we 
              can work together on your next project.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild variant="default">
                <a href="https://github.com/mitadru17" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Portfolio
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
