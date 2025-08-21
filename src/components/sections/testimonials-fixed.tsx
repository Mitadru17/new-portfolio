"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import InfiniteScroll from "@/components/InfiniteScroll";
import AnimatedHeading from "@/components/animated-heading";

const testimonials = [
  {
    name: "Dr. Jane Martinez",
    title: "Senior Product Manager, Microsoft",
    company: "Microsoft",
    avatar: "/avatars/01.png",
    fallback: "JM",
    rating: 5,
    quote: "Mitadru's technical expertise and problem-solving abilities are exceptional. He delivered a complex React dashboard that exceeded our expectations, implementing advanced state management and real-time data visualization. His attention to detail and user experience design made our product stand out in the competitive market."
  },
  {
    name: "John Smith",
    title: "CTO, TechVenture Inc.",
    company: "TechVenture Inc.",
    avatar: "/avatars/02.png",
    fallback: "JS",
    rating: 5,
    quote: "I've worked with many developers, but Mitadru's combination of technical skill and business acumen is rare. He not only built our entire full-stack application using React and Node.js but also suggested architectural improvements that saved us months of development time. His code quality is production-ready from day one."
  },
  {
    name: "Samuel Chen",
    title: "Founder & CEO, AIStartup Labs",
    company: "AIStartup Labs",
    avatar: "/avatars/03.png",
    fallback: "SC",
    rating: 5,
    quote: "Mitadru transformed our startup vision into reality. He integrated OpenAI APIs seamlessly into our platform and built a sophisticated user interface that our customers love. His understanding of both frontend and backend technologies, combined with AI integration expertise, made him invaluable to our success."
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Lead Developer, Google Cloud",
    company: "Google",
    avatar: "/avatars/04.png",
    fallback: "ER",
    rating: 5,
    quote: "Working with Mitadru on our cloud-native application was a pleasure. His expertise in modern JavaScript frameworks, TypeScript, and scalable architecture design helped us deliver a robust solution. He consistently writes clean, maintainable code and has excellent debugging skills."
  },
  {
    name: "David Park",
    title: "VP Engineering, Stripe",
    company: "Stripe",
    avatar: "/avatars/05.png",
    fallback: "DP",
    rating: 5,
    quote: "Mitadru's full-stack development skills are impressive. He built our payment integration system with React frontend and Node.js backend, handling complex financial logic with precision. His attention to security best practices and performance optimization made our platform enterprise-ready."
  },
  {
    name: "Sarah Williams",
    title: "Senior Software Architect, Amazon",
    company: "Amazon Web Services",
    avatar: "/avatars/06.png",
    fallback: "SW",
    rating: 5,
    quote: "One of the most talented young developers I've mentored. Mitadru's approach to system design and his ability to implement scalable solutions using modern web technologies is remarkable. He delivered a microservices architecture that handles millions of requests efficiently."
  },
  {
    name: "Michael Thompson",
    title: "Principal Engineer, Netflix",
    company: "Netflix",
    avatar: "/avatars/07.png",
    fallback: "MT",
    rating: 5,
    quote: "Mitadru's expertise in React, Next.js, and real-time technologies helped us build a streaming dashboard that processes terabytes of data. His performance optimization techniques and innovative use of modern web APIs resulted in a 40% improvement in user engagement."
  },
  {
    name: "Lisa Zhang",
    title: "Engineering Manager, Meta",
    company: "Meta (Facebook)",
    avatar: "/avatars/08.png",
    fallback: "LZ",
    rating: 5,
    quote: "Collaborating with Mitadru was inspiring. His deep understanding of React ecosystem, state management patterns, and modern development workflows accelerated our team's productivity. He's not just a developer, but a technology leader who mentors others effectively."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <Card className="bg-card/60 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full min-h-[240px] overflow-visible">
    <CardContent className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-14 h-14 ring-2 ring-primary/30 hover:ring-primary/50 transition-all duration-300">
          <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-base font-bold">
            {testimonial.fallback}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-bold text-foreground text-lg leading-tight mb-1">{testimonial.name}</h4>
              <p className="text-sm text-primary font-semibold">{testimonial.title}</p>
              <p className="text-xs text-muted-foreground font-medium">{testimonial.company}</p>
            </div>
            <Quote className="w-7 h-7 text-primary/40 flex-shrink-0" />
          </div>
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-sm text-foreground/90 leading-relaxed font-medium">
        "{testimonial.quote}"
      </blockquote>
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
          Hear from industry leaders and colleagues about their experience working with me
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Infinite Scroll */}
        <div className="lg:col-span-1 h-[700px] px-6 py-8">
          <InfiniteScroll
            items={testimonialItems}
            width="100%"
            maxHeight="700px"
            itemMinHeight={240}
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
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-base text-foreground">Expert Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">React, Node.js, TypeScript, and modern web technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-base text-foreground">AI Integration Specialist</h4>
                  <p className="text-sm text-muted-foreground">OpenAI, machine learning, and intelligent automation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-base text-foreground">Enterprise Solutions</h4>
                  <p className="text-sm text-muted-foreground">Scalable architecture and performance optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-base text-foreground">Tech Leadership</h4>
                  <p className="text-sm text-muted-foreground">Mentoring teams and driving innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
