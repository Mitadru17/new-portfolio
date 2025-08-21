"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import AnimatedHeading from "@/components/animated-heading";
import { Github, Linkedin, Mail, FileText, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/ai/flows/submit-contact-form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/CoderMitadru",
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "https://linkedin.com/in/mitadru-roy",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/Mitadru_Roy_CV.pdf",
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      toast({
        title: "Message Sent!",
        description: result.reply,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-responsive bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl spacing-responsive">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <AnimatedHeading 
            text="LET'S BUILD SOMETHING GREAT" 
            className="mb-4 sm:mb-6 text-responsive-xl font-bold tracking-wider text-foreground" 
          />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to connect? Drop me a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Information */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            {/* Get in Touch Section */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 hover-lift">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Get in Touch</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I'm always open to collaborations, freelance projects, and hackathon teams. 
                Reach out and let's start a conversation about your next big idea!
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover-lift">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Connect With Me</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a 
                    key={label} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-4 p-3 sm:p-4 bg-muted/30 rounded-lg hover:bg-muted/50 hover:shadow-lg transition-all hover-lift"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {label}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {href.replace('https://','').replace('/Mitadru_Roy_CV.pdf', 'Download CV')}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20">
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                ⚡ Quick Response
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                I typically respond within 24 hours. Let's build something great together!
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 hover-lift">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your awesome name here" 
                            {...field} 
                            className="bg-background/50 mobile-p-4 transition-smooth" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@domain.com" 
                            {...field} 
                            className="bg-background/50 mobile-p-4 transition-smooth"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your amazing project idea, or just say hi! I promise to respond faster than most support tickets..." 
                            {...field} 
                            className="min-h-[120px] sm:min-h-[140px] bg-background/50 mobile-p-4 resize-none transition-smooth" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover-lift mobile-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                        Sending Magic...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> 
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
