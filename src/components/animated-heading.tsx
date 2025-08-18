import { cn } from "@/lib/utils";

interface AnimatedHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function AnimatedHeading({ text, as: Tag = 'h2', className, ...props }: AnimatedHeadingProps) {
  return (
    <Tag className={cn("font-headline", className)} {...props}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="fade-in-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </Tag>
  );
}
