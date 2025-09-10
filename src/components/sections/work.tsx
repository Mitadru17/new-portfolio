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
  id: "smart-care-assistant",
  title: "🏥 Smart Care Assistant — Revolutionizing Healthcare for Small Clinics",
  role: "Full-Stack Developer & Healthcare Technology Specialist",
  description: "A comprehensive smart assistant platform built for small clinics and junior doctors to streamline patient management, detect early warning signs, and improve care in fast-paced, resource-limited environments. Features AI-powered ADR detection, voice-to-text input, and real-time analytics.",
  tech: ["React.js", "Node.js", "Python", "Flask", "MongoDB", "Firebase", "Scikit-learn", "Chart.js", "Tailwind CSS"],
  imageUrl: "/images/projects/smart-care-assistant.jpg",
  imageHint: "healthcare dashboard with patient management",
  githubUrl: "https://github.com/Mitadru17/AidX", // Add your actual GitHub URL
  liveUrl: "https://aid-x-cyan.vercel.app/", // Add your actual live URL here
  featured: true,
  comingSoon: false,
};

const otherProjects = [
  {
    id: "ai-therapist",
    title: "AI Therapist — Because Human Therapists Aren't Available 24/7",
    role: "Full-Stack Developer & Digital Psychologist",
    description: "Built an AI-powered mental health companion that listens to your problems better than your friends. Features personality-based therapeutic approaches and the patience of a saint (unlike real therapists who charge by the hour).",
    tech: ["React.js", "Node.js", "OpenAI API", "WebRTC", "MongoDB", "Express.js"],
    imageUrl: "/images/projects/ai-therapist.jpg",
    imageHint: "AI therapy chat interface",
    githubUrl: "https://github.com/Mitadru17/AI-Therapist",
    liveUrl: "https://ai-therapist-7wxu.onrender.com/",
    featured: true,
    comingSoon: false,
  },
  {
    id: "greengrow-tech",
    title: "GreenGrow Tech — Making Agriculture Smart (Finally)",
    role: "Full-Stack Developer & Plant Whisperer",
    description: "The website appears to focus on optimizing greenhouse farming through AI-driven solutions. It provides tools for smart irrigation, seeding/planting, climate control, crop monitoring, and data analytics to enhance agricultural productivity.",
    tech: ["React Native"],
    imageUrl: "/images/projects/greengrow-tech.jpg",
    imageHint: "smart farming dashboard",
    githubUrl: "https://github.com/Mitadru17/Green-Grow-Tech",
    liveUrl: "https://greenhousefarming.great-site.net/", // Add your actual live URL here
    featured: false,
    comingSoon: false,
  },
  {
    id: "dev-portfolio",
    title: "Dev Portfolio — Excited to launch my new developer portfolio",
    role: "Front-End Developer & Designer",
    description: "A highlights my skills, projects, and experience in an interactive and visually engaging environment. Built with React Native, Next.js, and Tailwind CSS, focusing on performance, accessibility, and user experience.",
    tech: ["React Native", "Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/images/projects/dev-portfolio.jpg",
    imageHint: "developer portfolio showcase",
    githubUrl: "https://github.com/Mitadru17/portfolio", // Add your actual GitHub URL
    liveUrl: "https://portfoliomitadru.vercel.app/", // Add your actual live URL here
    featured: false,
    comingSoon: false,
  },
  {
    id: "myntra-clone",
    title: "Myntra Functional Clone by Mitadru",
    role: "Full-Stack Developer & E-commerce Expert",
    description: "Boutique Myntra Clone: Get a glimpse of the world of fashion with this wonderful, responsive e-commerce site in HTML, CSS and Bootstrap. It reflects my skills in front-end development and user-centered design.",
    tech: ["HTML", "Cascading Style Sheets (CSS)", "JavaScript"],
    imageUrl: "/images/projects/myntra-clone.jpg",
    imageHint: "myntra clone e-commerce",
    githubUrl: "https://github.com/Mitadru17/Myntra-Clone-", // Add your actual GitHub URL
    liveUrl: "https://www.myntra.com/", // Add your actual live URL here
    featured: false,
    comingSoon: false,
  },
  {
    id: "spotify-clone",
    title: "Spotify — Web Player Music by Mitadru",
    role: "Full-Stack Developer & Music Tech Enthusiast",
    description: "Built an updated version of the original Spotify Clone for Music Streaming – Learn web design with HTML and CSS. Responsive design. It's a brain of fresh air and an indication of my passion for front-end development.",
    tech: ["HTML", "Cascading Style Sheets (CSS)", "JavaScript"],
    imageUrl: "/images/projects/spotify-clone.jpg",
    imageHint: "spotify music streaming clone",
    githubUrl: "https://github.com/Mitadru17/Spotify-clone-", // Add your actual GitHub URL
    liveUrl: "https://open.spotify.com/", // Add your actual live URL here
    featured: false,
    comingSoon: false,
  },
  {
    id: "swiggy-clone",
    title: "Swiggy Clone by Mitadru",
    role: "Front-End Developer & Food Tech Specialist",
    description: "Savour the taste of web development by relishing my Swiggy Clone – an intuitive, responsive food delivery platform designed with the use of HTML and CSS. This is a great reflection of my love for seamless experiences while working on front-end development.",
    tech: ["HTML", "Cascading Style Sheets (CSS)"],
    imageUrl: "/images/projects/swiggy-clone.jpg",
    imageHint: "swiggy food delivery clone",
    githubUrl: "https://github.com/Mitadru17/Swiggy-Clone-", // Add your actual GitHub URL
    liveUrl: "https://www.swiggy.com/", // Add your actual live URL here
    featured: false,
    comingSoon: false,
  },
  {
    id: "upfeet",
    title: "UpFeet - Techwise Footwear",
    role: "Full-Stack Developer & E-commerce Architect",
    description: "UpFeet: A next-gen sneaker eCommerce platform designed for style-conscious sneaker lovers. From dynamic product filtering, to engaging shopping experiences in foot-wear, it's a brain of fresh air and an indication of my passion for front-end development.",
    tech: ["React Native", "TypeScript", "Express.js", "Tailwind CSS"],
    imageUrl: "/images/projects/upfeet.jpg",
    imageHint: "upfeet sneaker e-commerce",
    githubUrl: "https://github.com/mitadru17/upfeet", // Add your actual GitHub URL
    liveUrl: "https://up-feet.vercel.app/", // Add your actual live URL here
    featured: true,
    comingSoon: false,
  },
  {
    id: "glowminal",
    title: "✨ Glowminal — Minimalist Skincare Meets Seamless Digital Experience",
    role: "Full-Stack Developer & Brand-Tech Specialist",
    description: "A modern e-commerce platform crafted for a skincare brand, integrating minimalist design with robust technology to deliver a seamless user journey. Features secure authentication, dynamic product showcase, admin dashboard, and mobile-first design built to scale.",
    tech: ["React.js", "Node.js", "Next.js", "Supabase", "Firebase", "Tailwind CSS", "Stripe", "Figma"],
    imageUrl: "/images/projects/glowminal.jpg",
    imageHint: "glowminal skincare e-commerce platform",
    githubUrl: "https://github.com/Mitadru17/Glowminal", // Add your actual GitHub URL
    liveUrl: "", // Coming soon - no live URL yet
    featured: false,
    comingSoon: true,
  },
  {
    id: "xhanium-agency",
    title: "🚀 Xhanium - Digital Innovation Agency (Founder & Lead Developer)",
    role: "Founder & Full-Stack Developer",
    description: "A modern, high-performance website for Xhanium Digital Agency built with cutting-edge technologies. Features optimized performance, mobile-first design, integrated booking system, and comprehensive SEO optimization. As the founder, I led the complete development and business strategy.",
    tech: ["Next.js 13", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Cal.com", "React Hook Form", "Zod"],
    imageUrl: "/images/projects/xhanium-agency.jpg",
    imageHint: "xhanium digital agency website",
    githubUrl: "https://github.com/Mitadru17/xhanium", // Add your actual GitHub URL
    liveUrl: "https://xhanium.in", // Add your actual live URL here
    featured: true,
    comingSoon: false,
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
      {project.liveUrl && !project.comingSoon && (
        <Button asChild size="sm">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      )}
      {project.comingSoon && (
        <Button disabled size="sm" className="opacity-60">
          <ExternalLink className="mr-2 h-4 w-4" />
          Coming Soon
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
                  <Button size="lg" className="group relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-blue-600 hover:to-purple-700 text-white overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
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
                          <div className="absolute top-2 right-2 flex gap-2">
                            <Badge className={`${project.featured ? 'bg-yellow-500' : 'bg-blue-500'}`}>
                              {project.featured ? '⭐ Featured' : 'Project'}
                            </Badge>
                            {project.comingSoon && (
                              <Badge className="bg-purple-500">
                                🚀 Coming Soon
                              </Badge>
                            )}
                          </div>
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
              
              <Button variant="outline" size="lg" asChild className="group border-2 border-primary/20 bg-background/50 hover:bg-gradient-to-r hover:from-primary/10 hover:via-accent/10 hover:to-primary/10 hover:border-primary/60 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                <a href="#contact">
                  <Eye className="mr-2 h-4 w-4 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                  <span className="group-hover:text-primary transition-colors duration-300">Let's Collaborate</span>
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
                    comingSoon={project.comingSoon}
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
                  <Button variant="default" size="lg" className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-all duration-300" />
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
                          <div className="absolute top-2 right-2 flex gap-2">
                            <Badge className={`${project.featured ? 'bg-yellow-500' : 'bg-blue-500'}`}>
                              {project.featured ? '⭐ Featured' : 'Project'}
                            </Badge>
                            {project.comingSoon && (
                              <Badge className="bg-purple-500">
                                🚀 Coming Soon
                              </Badge>
                            )}
                          </div>
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
                          {project.liveUrl && !project.comingSoon && (
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
                          {project.comingSoon && (
                            <Button 
                              disabled 
                              size="sm"
                              className="opacity-60"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <Button asChild variant="outline" className="group border-2 border-accent/20 bg-background/50 hover:bg-gradient-to-r hover:from-accent/10 hover:via-blue-500/10 hover:to-accent/10 hover:border-accent/60 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 hover:scale-105">
                <a href="https://github.com/mitadru17" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover:rotate-12 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                  <span className="group-hover:text-accent transition-colors duration-300">GitHub Portfolio</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="group border-2 border-primary/20 bg-background/50 hover:bg-gradient-to-r hover:from-primary/10 hover:via-purple-500/10 hover:to-primary/10 hover:border-primary/60 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                <a href="#contact">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                  <span className="group-hover:text-primary transition-colors duration-300">Get In Touch</span>
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
