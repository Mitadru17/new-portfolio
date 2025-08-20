
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
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mitadruroy" },
  { icon: Github, label: "GitHub", href: "https://github.com/mitadruroy" },
  { icon: FileText, label: "Resume", href: "/Mitadru_Roy_CV.pdf", download: true },
];

export default function ContactSection() {
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
    <section id="contact" className="bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <AnimatedHeading text="LET'S BUILD SOMETHING GREAT" className="mb-4 text-4xl font-bold tracking-wider sm:text-5xl" />
        <p className="mb-8 text-lg text-muted-foreground">
          Have a project in mind or just want to connect? Drop me a message!
        </p>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:text-left">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary">Get in Touch</h3>
              <p className="mt-2 text-muted-foreground">
                I’m always open to collaborations, freelance gigs, and hackathon teams. Reach out and let's start a conversation.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 transition-colors hover:text-primary">
                  <span className="rounded-lg border border-border bg-background/50 p-3 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-muted-foreground">{href.replace('https://','').replace('/Mitadru_Roy_CV.pdf', 'Download CV')}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your awesome name here" {...field} className="bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@domain.com" {...field} className="bg-background/50"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your amazing project idea, or just say hi! I promise to respond faster than most support tickets..." {...field} className="min-h-[120px] bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Magic...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
