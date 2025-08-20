"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedHeading from "@/components/animated-heading";
import { 
  Code, Database, Globe, Smartphone, Palette, Wrench,
  CheckCircle, Star
} from "lucide-react";

const skillsCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Making things look pretty and actually work',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    skills: [
      { name: 'React.js', level: 90, description: 'Building interactive UIs' },
      { name: 'Next.js', level: 85, description: 'Full-stack React framework' },
      { name: 'TypeScript', level: 80, description: 'JavaScript but better' },
      { name: 'JavaScript', level: 90, description: 'The language of the web' },
      { name: 'HTML5', level: 95, description: 'Structure and semantics' },
      { name: 'CSS3', level: 85, description: 'Styling and animations' },
      { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS' },
      { name: 'SASS/SCSS', level: 75, description: 'Advanced CSS preprocessing' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'The behind-the-scenes magic',
    icon: <Database className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20',
    borderColor: 'border-green-200 dark:border-green-800',
    skills: [
      { name: 'Node.js', level: 85, description: 'Server-side JavaScript' },
      { name: 'Express.js', level: 80, description: 'Web application framework' },
      { name: 'MongoDB', level: 75, description: 'NoSQL database' },
      { name: 'PostgreSQL', level: 70, description: 'Relational database' },
      { name: 'RESTful APIs', level: 85, description: 'API design and development' },
      { name: 'JWT', level: 80, description: 'Authentication tokens' }
    ]
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'The essentials for getting stuff done',
    icon: <Wrench className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    skills: [
      { name: 'Git & GitHub', level: 90, description: 'Version control mastery' },
      { name: 'VS Code', level: 95, description: 'My coding sanctuary' },
      { name: 'npm/yarn', level: 85, description: 'Package management' },
      { name: 'Webpack', level: 70, description: 'Module bundling' },
      { name: 'Vite', level: 80, description: 'Fast build tool' },
      { name: 'Docker', level: 65, description: 'Containerization' }
    ]
  },
  {
    id: 'design',
    title: 'Design & UI/UX',
    description: 'Making things beautiful and user-friendly',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50/50 to-rose-50/50 dark:from-pink-950/20 dark:to-rose-950/20',
    borderColor: 'border-pink-200 dark:border-pink-800',
    skills: [
      { name: 'Figma', level: 80, description: 'Design and prototyping' },
      { name: 'Adobe XD', level: 70, description: 'User experience design' },
      { name: 'Canva', level: 85, description: 'Quick design solutions' },
      { name: 'UI/UX Principles', level: 75, description: 'User-centered design' },
      { name: 'Responsive Design', level: 90, description: 'Mobile-first approach' }
    ]
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Teaching machines to be smart',
    icon: <Star className="w-6 h-6" />,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'from-orange-50/50 to-yellow-50/50 dark:from-orange-950/20 dark:to-yellow-950/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
    skills: [
      { name: 'Python', level: 80, description: 'AI development language' },
      { name: 'TensorFlow', level: 65, description: 'Machine learning framework' },
      { name: 'OpenAI APIs', level: 75, description: 'GPT integration' },
      { name: 'Langchain', level: 70, description: 'LLM applications' },
      { name: 'Data Analysis', level: 75, description: 'Making sense of data' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile & Other',
    description: 'Beyond the web',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-teal-500 to-blue-500',
    bgColor: 'from-teal-50/50 to-blue-50/50 dark:from-teal-950/20 dark:to-blue-950/20',
    borderColor: 'border-teal-200 dark:border-teal-800',
    skills: [
      { name: 'React Native', level: 70, description: 'Cross-platform mobile' },
      { name: 'Flutter', level: 60, description: 'Google\'s UI toolkit' },
      { name: 'Firebase', level: 75, description: 'Backend-as-a-Service' },
      { name: 'Progressive Web Apps', level: 80, description: 'Web apps that feel native' },
      { name: 'WebRTC', level: 65, description: 'Real-time communication' }
    ]
  }
];

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <div className="group space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
          {skill.name}
        </span>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100/80 dark:bg-gray-800/80 px-2 py-0.5 rounded-full">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-1.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000 ease-out shadow-sm relative overflow-hidden"
          style={{ width: `${skill.level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/30 dark:bg-secondary/20 py-16 min-h-screen">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <AnimatedHeading 
            text="SKILLS & TECHNOLOGIES" 
            className="text-3xl font-bold tracking-wider sm:text-4xl text-foreground mb-3" 
          />
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-blue-950/30 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
            <div className="relative p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 dark:bg-purple-500/20 rounded-full border border-purple-200/50 dark:border-purple-500/30">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Always Learning</span>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                        Tech Stack That Actually Works
                      </h3>
                      <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        A comprehensive toolkit of technologies, frameworks, and tools I use to transform ideas into digital reality.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-800/30">
                      <div className="p-1.5 bg-blue-500 rounded-lg">
                        <Code className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">Frontend</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">React, Next.js, TS</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-100 dark:border-green-800/30">
                      <div className="p-1.5 bg-green-500 rounded-lg">
                        <Database className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">Backend</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Node.js, APIs</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-100 dark:border-purple-800/30">
                      <div className="p-1.5 bg-purple-500 rounded-lg">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">AI/ML</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Python, TensorFlow</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-100 dark:border-orange-800/30">
                      <div className="p-1.5 bg-orange-500 rounded-lg">
                        <Wrench className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">DevOps</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Git, Docker</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Skills Overview</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Technologies I'm proficient with</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">6</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Categories</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-xl">
                          <div className="text-xl font-bold text-green-600 dark:text-green-400">34</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Technologies</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                          <div className="text-xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Years Learning</div>
                        </div>
                        <div className="text-center p-3 bg-pink-50 dark:bg-pink-950/30 rounded-xl">
                          <div className="text-xl font-bold text-pink-600 dark:text-pink-400">∞</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Passion Level</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl -z-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {skillsCategories.map((category) => (
            <div 
              key={category.id} 
              className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Category Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="px-6 pb-6 space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
                
                {/* Category Summary */}
                <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Category Mastery</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">
                        {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden">
            <div className="p-12 lg:p-16">
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">The Numbers Don't Lie</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Skill Categories</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">All the important ones</div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">34</span>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Technologies</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">And counting...</div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">3+</span>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Years Learning</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Started young</div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">∞</span>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Passion Level</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Off the charts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
