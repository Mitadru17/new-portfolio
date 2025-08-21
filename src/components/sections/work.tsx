"use client";

import ProjectCard from "@/components/project-card";
import AnimatedHeading from "@/components/animated-heading";
import CardSwap, { Card } from "@/components/CardSwap";
import SwapProjectCard from "@/components/SwapProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Eye, X } from "lucide-react";
import { useState } from "react";

const featuredProject = {
  id: "ai-therapist",
  title: "AI Therapist — Because Human Therapists Aren't Available 24/7",
  role: "Full-Stack Developer & Digital Psychologist",
  description: "Built an AI-powered mental health companion that listens to your problems better than your friends. Features personality-based therapeutic approaches and the patience of a saint (unlike real therapists who charge by the hour).",
  tech: ["React.js", "Node.js", "OpenAI API", "WebRTC", "MongoDB", "Express.js"],
  imageUrl: "https://placehold.co/1200x800.png",
  imageHint: "AI therapy chat interface",
  githubUrl: "https://github.com/mitadru17/ai-therapist",
  liveUrl: "https://ai-therapist-demo.vercel.app",
  featured: true,
};

const otherProjects = [
  {
    id: "greengrow-tech",
    title: "GreenGrow Tech — Making Agriculture Smart (Finally)",
    role: "Full-Stack Developer & Plant Whisperer",
    description: "IoT-based crop monitoring system that knows more about your plants than you do. Features real-time monitoring, predictive analytics, and the ability to make farmers feel slightly less stressed about their crops.",
    tech: ["React.js", "Node.js", "IoT Sensors", "MongoDB", "Chart.js", "Express.js"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "smart farming dashboard",
    githubUrl: "https://github.com/mitadru17/greengrow-tech",
    liveUrl: "https://greengrow-tech-demo.vercel.app",
    featured: false,
  },
  {
    id: "upfeet",
    title: "UpFeet — E-commerce That Actually Works",
    role: "Full-Stack Developer & Digital Shopkeeper",
    description: "Complete e-commerce platform with all the bells and whistles. Admin panels, user dashboards, and payment integration that doesn't make customers want to abandon their carts.",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe API", "JWT", "Express.js"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "e-commerce platform",
    githubUrl: "https://github.com/mitadru17/upfeet",
    liveUrl: "https://upfeet-demo.vercel.app",
    featured: false,
  },
  {
    id: "portfolio-evolution",
    title: "Portfolio Website — Meta, Right?",
    role: "Full-Stack Developer & Self-Promoter",
    description: "The website you're currently browsing. A showcase of sarcasm, clean code, and the ability to talk about myself in third person. Features animations that don't make your eyes hurt.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "portfolio website",
    githubUrl: "https://github.com/mitadru17/portfolio",
    liveUrl: "https://mitadru-portfolio.vercel.app",
    featured: false,
  },
  {
    id: "freelance-adventures",
    title: "Various Client Projects — Solving Problems for Money",
    role: "Freelance Developer & Problem Solver",
    description: "Collection of client projects ranging from landing pages to complex web applications. Taught me that scope creep is real and deadlines are more like... suggestions.",
    tech: ["React.js", "Node.js", "WordPress", "PHP", "MySQL", "JavaScript"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "client projects showcase",
    githubUrl: "https://github.com/mitadru17/client-projects",
    featured: false,
  },
];

// All projects combined for the modal
const allProjects = [featuredProject, ...otherProjects];

// Detailed project modal component
const ProjectModal = ({ project }: { project: typeof featuredProject }) => (
  <div className="space-y-6">
    <div className="relative">
      <img 
        src={project.imageUrl} 
        alt={project.imageHint}
        className="w-full h-64 object-cover rounded-lg"
      />
      <Badge className={`absolute top-4 right-4 ${project.featured ? 'bg-yellow-500' : 'bg-blue-500'}`}>
        {project.featured ? '⭐ Featured' : 'Project'}
      </Badge>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
      <p className="text-lg text-primary font-medium mb-4">{project.role}</p>
      <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>

    <div className="flex gap-3 pt-4">
      {project.githubUrl && (
        <Button asChild variant="outline" size="sm">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </a>
        </Button>
      )}
      {project.liveUrl && (
        <Button asChild size="sm">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      )}
    </div>
  </div>
);

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProject | null>(null);

  return (
    <section id="work" className="py-20 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedHeading 
          text="MY PROJECTS" 
          className="mb-16 text-center text-4xl font-bold tracking-wider sm:text-5xl text-foreground" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Project Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Projects That Actually Work
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Here's a collection of digital solutions I've built that solve real problems (and sometimes create new ones). 
                From AI therapists to smart farming systems, each project taught me something new about code, life, 
                and why coffee is essential for debugging at 3 AM.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">🤖 AI Integration (Teaching machines to think)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">🚀 Full-Stack Magic (Frontend to Backend wizardry)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-muted-foreground">🎨 UI/UX Design (Making pixels look pretty)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">⚡ Performance Optimization (Making things fast, finally)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Github className="mr-2 h-4 w-4" />
                    View All Projects
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground mb-6">
                      All Projects Portfolio
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {allProjects.map((project) => (
                      <div 
                        key={project.id} 
                        className="group cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="relative mb-4">
                          <img 
                            src={project.imageUrl} 
                            alt={project.imageHint}
                            className="w-full h-48 object-cover rounded-md"
                          />
                          <Badge className={`absolute top-2 right-2 ${project.featured ? 'bg-yellow-500' : 'bg-blue-500'}`}>
                            {project.featured ? '⭐ Featured' : 'Project'}
                          </Badge>
                        </div>
                        
                        <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-primary font-medium mb-2">{project.role}</p>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tech.length - 4} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button 
                              asChild 
                              variant="outline" 
                              size="sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button 
                              asChild 
                              size="sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" size="lg">
                    <Eye className="mr-2 h-4 w-4" />
                    View All Projects
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground mb-6">
                      All Projects Portfolio
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {allProjects.map((project) => (
                      <div 
                        key={project.id} 
                        className="group cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="relative mb-4">
                          <img 
                            src={project.imageUrl} 
                            alt={project.imageHint}
                            className="w-full h-48 object-cover rounded-md"
                          />
                          <Badge className={`absolute top-2 right-2 ${project.featured ? 'bg-yellow-500' : 'bg-blue-500'}`}>
                            {project.featured ? '⭐ Featured' : 'Project'}
                          </Badge>
                        </div>
                        
                        <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-primary font-medium mb-2">{project.role}</p>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tech.length - 4} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button 
                              asChild 
                              variant="outline" 
                              size="sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button 
                              asChild 
                              size="sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <Button asChild variant="outline">
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

        {/* Individual Project Detail Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="sr-only">Project Details</DialogTitle>
            </DialogHeader>
            {selectedProject && <ProjectModal project={selectedProject} />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
