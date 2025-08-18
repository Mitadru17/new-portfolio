import AnimatedHeading from "@/components/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Project Manager, Tech Solutions",
    avatar: "/avatars/01.png",
    fallback: "JD",
    quote: "Mitadru's ability to quickly grasp complex requirements and deliver clean, efficient code was instrumental to our project's success. His expertise in both frontend and backend development is truly impressive."
  },
  {
    name: "John Smith",
    title: "Hackathon Organizer",
    avatar: "/avatars/02.png",
    fallback: "JS",
    quote: "I've seen Mitadru in action at multiple hackathons. He's a powerhouse of creativity and execution, consistently building innovative and functional prototypes under extreme pressure. A true asset to any team."
  },
  {
    name: "Samuel Lee",
    title: "Startup Founder",
    avatar: "/avatars/03.png",
    fallback: "SL",
    quote: "Working with Mitadru was a game-changer for my startup. He not only built our MVP but also provided invaluable insights into AI integration that has set our product apart from the competition."
  },
  {
    name: "Emily White",
    title: "Senior Developer",
    avatar: "/avatars/04.png",
    fallback: "EW",
    quote: "His passion for technology is contagious. Mitadru is a fast learner, a great collaborator, and someone who isn't afraid to tackle challenging problems head-on. Highly recommended."
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto max-w-7xl px-4">
      <AnimatedHeading text="WHAT OTHERS SAY" className="mb-12 text-center text-4xl font-bold tracking-wider sm:text-5xl" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <p className="mb-4 flex-grow text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
