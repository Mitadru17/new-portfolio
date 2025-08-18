import ProjectCard from "@/components/project-card";
import AnimatedHeading from "@/components/animated-heading";

const projects = [
  {
    title: "HiQ — Personalized Interview & Placement Training",
    role: "Data Science Developer | NLP & Resume Analysis",
    description: "An AI-powered system providing real-time NLP feedback on interview answers, resume scoring, and AI-driven Q&A to help students prepare for placements.",
    tech: ["Python", "Hugging Face", "OpenAI API", "Node.js", "React"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "AI analytics",
  },
  {
    title: "AQUASIST — Community Water Watch Platform",
    role: "Frontend & Chatbot Developer",
    description: "A platform enabling users to report water-related issues via a chatbot, fostering community-driven monitoring and solutions for local water management.",
    tech: ["React", "Node.js", "Firebase", "Dialogflow"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "community water",
  },
  {
    title: "MatDash Dashboard Clone",
    role: "Frontend Developer",
    description: "A UI/UX assignment to clone a professional dashboard, demonstrating skills in building complex, responsive user interfaces with modern frontend technologies.",
    tech: ["React", "Redux", "TailwindCSS"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "dashboard UI",
  },
  {
    title: "Freelance React Development (Internship)",
    role: "Frontend Intern",
    description: "Gained practical experience building production-ready UIs, dashboards, and various features for web applications using React and its ecosystem.",
    tech: ["React", "JavaScript", "CSS"],
    imageUrl: "https://placehold.co/1200x800.png",
    imageHint: "react code",
  },
  {
    title: "Side Hustles — Automation Experiments",
    role: "Automation Enthusiast",
    description: "Exploring passive income strategies through web automation, including building bots for Reddit engagement and CPA affiliate marketing experiments.",
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
