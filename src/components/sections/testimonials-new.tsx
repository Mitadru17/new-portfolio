import AnimatedHeading from "@/components/animated-heading";
import InfiniteScroll from "@/components/InfiniteScroll";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Project Manager, Tech Solutions",
    avatar: "/avatars/01.png",
    fallback: "JD",
    rating: 5,
    quote: "Mitadru's ability to quickly grasp complex requirements and deliver clean, efficient code was instrumental to our project's success."
  },
  {
    name: "John Smith",
    title: "Hackathon Organizer",
    avatar: "/avatars/02.png",
    fallback: "JS",
    rating: 5,
    quote: "I've seen Mitadru in action at multiple hackathons. He's a powerhouse of creativity and execution, consistently building innovative prototypes."
  },
  {
    name: "Samuel Lee",
    title: "Startup Founder",
    avatar: "/avatars/03.png",
    fallback: "SL",
    rating: 5,
    quote: "Working with Mitadru was a game-changer for my startup. He not only built our MVP but also provided invaluable insights into AI integration."
  },
  {
    name: "Emily White",
    title: "Senior Developer",
    avatar: "/avatars/04.png",
    fallback: "EW",
    rating: 5,
    quote: "His passion for technology is contagious. Mitadru is a fast learner, a great collaborator, and tackles challenging problems head-on."
  },
  {
    name: "David Chen",
    title: "Tech Lead, Innovation Labs",
    avatar: "/avatars/05.png",
    fallback: "DC",
    rating: 5,
    quote: "Mitadru's full-stack expertise and attention to detail made our complex project seamless. His problem-solving skills are exceptional."
  },
  {
    name: "Sarah Johnson",
    title: "Product Manager",
    avatar: "/avatars/06.png",
    fallback: "SJ",
    rating: 5,
    quote: "One of the most dedicated developers I've worked with. Mitadru brings creativity and technical excellence to every project."
  },
  {
    name: "Michael Brown",
    title: "CTO, StartupHub",
    avatar: "/avatars/07.png",
    fallback: "MB",
    rating: 5,
    quote: "Impressive technical skills combined with great communication. Mitadru delivered beyond our expectations every single time."
  },
  {
    name: "Lisa Wang",
    title: "Frontend Developer",
    avatar: "/avatars/08.png",
    fallback: "LW",
    rating: 5,
    quote: "Working alongside Mitadru was inspiring. His approach to React development and modern web technologies is truly professional."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <Card className="bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full">
    <CardContent className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
          <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
          <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm font-bold">
            {testimonial.fallback}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
          <div className="flex gap-1 mt-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <Quote className="w-6 h-6 text-primary/30" />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed italic">
        "{testimonial.quote}"
      </p>
    </CardContent>
  </Card>
);

// Create testimonial items for InfiniteScroll
const testimonialItems = testimonials.map(testimonial => ({
  content: <TestimonialCard testimonial={testimonial} />
}));

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto max-w-7xl px-4 py-20">
      <div className="mb-16 text-center">
        <AnimatedHeading 
          text="WHAT OTHERS SAY" 
          className="mb-12 text-center text-4xl font-bold tracking-wider sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" 
        />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          Hear from colleagues, clients, and collaborators about their experience working with me
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trusted by Professionals
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Infinite Scroll */}
        <div className="lg:col-span-1 h-[600px]">
          <InfiniteScroll
            items={testimonialItems}
            width="100%"
            maxHeight="600px"
            itemMinHeight={200}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.8}
            autoplayDirection="down"
            pauseOnHover={true}
            negativeMargin="-1rem"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Why Work With Me?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-sm">Full-Stack Expertise</h4>
                  <p className="text-xs text-muted-foreground">React, Node.js, and modern web technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-sm">Problem Solver</h4>
                  <p className="text-xs text-muted-foreground">Creative solutions for complex challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-sm">Team Player</h4>
                  <p className="text-xs text-muted-foreground">Great communication and collaboration skills</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-sm">Fast Delivery</h4>
                  <p className="text-xs text-muted-foreground">Quality code delivered on time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
