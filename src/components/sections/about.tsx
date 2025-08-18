import { Badge } from "@/components/ui/badge";
import AnimatedHeading from "@/components/animated-heading";
import { CookingPot, Moon, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  "Frontend": [
    { name: "React.js/Next.js", level: 95 },
    { name: "Redux", level: 85 },
    { name: "TailwindCSS", level: 90 },
  ],
  "Backend": [
    { name: "Node.js/Express.js", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 85 },
  ],
  "AI/ML": [
    { name: "Python", level: 90 },
    { name: "Genkit/Gemini", level: 85 },
    { name: "Hugging Face", level: 75 },
  ],
  "Tools": [
    { name: "Git/GitHub", level: 95 },
    { name: "AWS/GCP", level: 70 },
    { name: "Vercel/Netlify", level: 90 },
  ],
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-xl font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <p className="text-sm font-medium text-muted-foreground">{skill.name}</p>
                      <p className="text-sm font-medium text-muted-foreground">{skill.level}%</p>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </CardContent>
            </Card>
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
