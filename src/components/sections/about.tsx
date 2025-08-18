import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { CookingPot, Moon, Target } from "lucide-react";

const skills = {
  "Frontend": ["React.js", "Redux", "TailwindCSS", "Next.js"],
  "Backend": ["Node.js", "Express.js", "MongoDB", "Firebase"],
  "AI/ML": ["Python", "Hugging Face", "NLTK", "spaCy", "OpenAI API"],
  "Tools": ["Git/GitHub", "AWS/GCP", "Vercel", "Netlify", "Cursor"],
};

const funFacts = [
  { icon: Moon, text: "Night owl — I build best after 2 AM" },
  { icon: Target, text: "Hackathon sprinter — thrive under deadlines" },
  { icon: CookingPot, text: "Budget chef — cooking minimalistic meals" },
];

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto max-w-7xl px-4">
      <AnimatedHeading text="ABOUT ME" className="mb-12 text-center text-4xl font-bold tracking-wider sm:text-5xl" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-12 text-lg text-muted-foreground">
          I’m a chill, self-driven, and versatile tech enthusiast balancing freelancing, hackathons, and academics. I specialize in full-stack web development, NLP, and AI-powered automation. I thrive on late-night problem-solving, hackathon adrenaline, and building minimal, functional, and impactful solutions.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mb-8 text-center font-headline text-3xl text-primary">My Skills</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-lg border bg-card p-6">
              <h4 className="mb-4 font-headline text-xl font-semibold">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-8 text-center font-headline text-3xl text-primary">Fun Facts</h3>
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          {funFacts.map((fact, index) => (
            <div key={index} className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6">
              <fact.icon className="h-10 w-10 text-accent" />
              <p className="text-muted-foreground">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
