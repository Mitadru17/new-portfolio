
import AnimatedHeading from "@/components/animated-heading";

export default function PlaySection() {
  return (
    <section id="play" className="container mx-auto max-w-7xl px-4 text-center">
      <AnimatedHeading text="PLAY" className="mb-4 text-4xl font-bold tracking-wider sm:text-5xl" />
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        This is a space for creative experiments, fun side-projects, and anything else that doesn't fit into the "Work" category. Check back later for more!
      </p>
       <p className="text-center text-sm text-muted-foreground mt-8">Psst! Try typing <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">:hiq</kbd> to see a fun AI animation.</p>
    </section>
  );
}
