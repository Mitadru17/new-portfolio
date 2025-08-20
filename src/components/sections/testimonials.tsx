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
    <section id="testimonials" className="py-20 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <AnimatedHeading 
            text="WHAT OTHERS SAY" 
            className="text-4xl font-bold tracking-wider sm:text-5xl text-foreground mb-4" 
          />
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                People Actually Like Working With Me
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Here's what colleagues, clients, and fellow developers have to say about working with me. 
                Spoiler alert: they don't completely hate the experience.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">🤝 Collaborative Team Player</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">⚡ Fast & Reliable Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-muted-foreground">💡 Creative Problem Solver</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">🎯 Detail-Oriented Professional</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Client Satisfaction</h4>
                <p className="text-muted-foreground text-sm">Based on project feedback</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-500">100%</div>
                  <div className="text-sm text-muted-foreground">Project Success</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-500">95%</div>
                  <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-500">4.9</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-pink-500">∞</div>
                  <div className="text-sm text-muted-foreground">Coffee Consumed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <Card className="h-full backdrop-blur-sm border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all duration-300">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <p className="mb-4 flex-grow text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar className="ring-2 ring-primary/20">
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                            {testimonial.fallback}
                          </AvatarFallback>
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
      </div>
    </section>
  )
}
