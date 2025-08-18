import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  role: string;
  description: string;
  tech: string[];
  imageUrl: string;
  imageHint: string;
};

export default function ProjectCard({ title, role, description, tech, imageUrl, imageHint }: ProjectCardProps) {
  return (
    <div className="group [perspective:1000px]">
      <Card className="glowing-border h-full transform-gpu overflow-hidden bg-card transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group-hover:[transform:rotateX(4deg)]">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <Badge key={item} variant="secondary" className="border-accent/50 bg-accent/20 text-accent-foreground transition-all group-hover:scale-105 group-hover:bg-accent/30">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
