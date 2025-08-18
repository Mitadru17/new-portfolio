import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import AnimatedHeading from "@/components/animated-heading";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:mitadru.roy@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mitadruroy" },
  { icon: Github, label: "GitHub", href: "https://github.com/mitadruroy" },
  { icon: FileText, label: "Resume", href: "/Mitadru_Roy_CV.pdf", download: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <AnimatedHeading text="LET'S BUILD SOMETHING GREAT" className="mb-4 text-4xl font-bold tracking-wider sm:text-5xl" />
        <p className="mb-8 text-lg text-muted-foreground">
          I’m always open to collaborations, freelance gigs, and hackathon teams.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map(({ icon: Icon, label, href, download }) => (
            <Button asChild key={label} variant="outline" className="group h-14 w-14 rounded-full p-0 transition-all hover:bg-primary hover:text-primary-foreground sm:h-auto sm:w-auto sm:rounded-md sm:px-6 sm:py-2">
              <a href={href} target="_blank" rel="noopener noreferrer" download={download}>
                <Icon className="h-6 w-6 sm:mr-2" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
