"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedHeading from "@/components/animated-heading";
import { useState } from "react";
import { 
  Code, Database, Globe, Smartphone, Palette, Wrench,
  CheckCircle, Star
} from "lucide-react";

// React Icons imports
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiShadcnui,
  SiFigma, SiGit, SiGithub, SiNpm, SiDocker,
  SiAdobexd, SiCanva, SiPython, SiTensorflow, SiOpenai,
  SiFlutter, SiFirebase
} from "react-icons/si";
import { FaTools, FaDatabase, FaBrain, FaChartBar, FaVideo, FaMobile, FaGlobe, FaCode } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillsCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Client-side technologies',
    icon: <Code className="w-5 h-5" />,
    color: 'bg-blue-500',
    skills: [
      { 
        name: 'HTML', 
        level: 95, 
        description: 'Markup language for web pages',
        logo: <SiHtml5 className="w-6 h-6" />,
        bgColor: 'bg-orange-500'
      },
      { 
        name: 'CSS', 
        level: 90, 
        description: 'Style and layout of web pages',
        logo: <SiCss3 className="w-6 h-6" />,
        bgColor: 'bg-blue-500'
      },
      { 
        name: 'JavaScript', 
        level: 90, 
        description: 'Programming language for the Web',
        logo: <SiJavascript className="w-6 h-6" />,
        bgColor: 'bg-yellow-400'
      },
      { 
        name: 'TypeScript', 
        level: 85, 
        description: 'Type safety of JavaScript',
        logo: <SiTypescript className="w-6 h-6" />,
        bgColor: 'bg-blue-600'
      },
      { 
        name: 'React.js', 
        level: 88, 
        description: 'Library for building web interfaces',
        logo: <SiReact className="w-6 h-6" />,
        bgColor: 'bg-cyan-500'
      },
      { 
        name: 'Next.js', 
        level: 85, 
        description: 'Framework for server-rendered React apps',
        logo: <SiNextdotjs className="w-6 h-6" />,
        bgColor: 'bg-black'
      },
      { 
        name: 'Tailwind CSS', 
        level: 92, 
        description: 'Utility-first CSS framework',
        logo: <SiTailwindcss className="w-6 h-6" />,
        bgColor: 'bg-teal-500'
      },
      { 
        name: 'Shadcn UI', 
        level: 80, 
        description: 'Beautiful, fast, and modern React UI library',
        logo: <SiShadcnui className="w-6 h-6" />,
        bgColor: 'bg-purple-600'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Server-side technologies',
    icon: <Database className="w-5 h-5" />,
    color: 'bg-green-500',
    skills: [
      { 
        name: 'Node.js', 
        level: 85, 
        description: 'JavaScript runtime for server-side',
        logo: <SiNodedotjs className="w-6 h-6" />,
        bgColor: 'bg-green-600'
      },
      { 
        name: 'Express.js', 
        level: 82, 
        description: 'Minimal Node.js web framework',
        logo: <SiExpress className="w-6 h-6" />,
        bgColor: 'bg-gray-700'
      },
      { 
        name: 'MongoDB', 
        level: 78, 
        description: 'NoSQL database for modern apps',
        logo: <SiMongodb className="w-6 h-6" />,
        bgColor: 'bg-green-500'
      },
      { 
        name: 'PostgreSQL', 
        level: 75, 
        description: 'Advanced relational database',
        logo: <FaDatabase className="w-6 h-6" />,
        bgColor: 'bg-blue-600'
      },
      { 
        name: 'RESTful APIs', 
        level: 88, 
        description: 'API design and development',
        logo: <FaTools className="w-6 h-6" />,
        bgColor: 'bg-indigo-500'
      },
      { 
        name: 'JWT', 
        level: 80, 
        description: 'JSON Web Token authentication',
        logo: <FaCode className="w-6 h-6" />,
        bgColor: 'bg-purple-500'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    description: 'Development and deployment tools',
    icon: <Wrench className="w-5 h-5" />,
    color: 'bg-purple-500',
    skills: [
      { 
        name: 'Git', 
        level: 88, 
        description: 'Distributed version control system',
        logo: <SiGit className="w-6 h-6" />,
        bgColor: 'bg-orange-600'
      },
      { 
        name: 'GitHub', 
        level: 90, 
        description: 'Platform for hosting and managing Git repos',
        logo: <SiGithub className="w-6 h-6" />,
        bgColor: 'bg-gray-800'
      },
      { 
        name: 'npm', 
        level: 85, 
        description: 'Package manager for JavaScript projects',
        logo: <SiNpm className="w-6 h-6" />,
        bgColor: 'bg-red-500'
      },
      { 
        name: 'VS Code', 
        level: 95, 
        description: 'Code editor with powerful features',
        logo: <VscCode className="w-6 h-6" />,
        bgColor: 'bg-blue-600'
      },
      { 
        name: 'Docker', 
        level: 70, 
        description: 'Containerization platform',
        logo: <SiDocker className="w-6 h-6" />,
        bgColor: 'bg-blue-500'
      },
      { 
        name: 'Figma', 
        level: 82, 
        description: 'Collaborative design tool',
        logo: <SiFigma className="w-6 h-6" />,
        bgColor: 'bg-pink-500'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design & UI/UX',
    description: 'Design and user experience',
    icon: <Palette className="w-5 h-5" />,
    color: 'bg-pink-500',
    skills: [
      { 
        name: 'UI/UX Design', 
        level: 78, 
        description: 'User interface and experience design',
        logo: <Palette className="w-6 h-6" />,
        bgColor: 'bg-purple-500'
      },
      { 
        name: 'Adobe XD', 
        level: 75, 
        description: 'Design and prototyping tool',
        logo: <SiAdobexd className="w-6 h-6" />,
        bgColor: 'bg-purple-600'
      },
      { 
        name: 'Canva', 
        level: 88, 
        description: 'Graphic design platform',
        logo: <SiCanva className="w-6 h-6" />,
        bgColor: 'bg-cyan-400'
      },
      { 
        name: 'Responsive Design', 
        level: 90, 
        description: 'Design for multiple screen sizes',
        logo: <Smartphone className="w-6 h-6" />,
        bgColor: 'bg-green-500'
      },
      { 
        name: 'Design Systems', 
        level: 80, 
        description: 'Consistent design patterns',
        logo: <Star className="w-6 h-6" />,
        bgColor: 'bg-orange-500'
      }
    ]
  },
  {
    id: 'ai',
    title: 'AI & ML',
    description: 'Artificial intelligence and machine learning',
    icon: <Star className="w-5 h-5" />,
    color: 'bg-orange-500',
    skills: [
      { 
        name: 'Python', 
        level: 82, 
        description: 'Programming language for AI/ML',
        logo: <SiPython className="w-6 h-6" />,
        bgColor: 'bg-yellow-500'
      },
      { 
        name: 'TensorFlow', 
        level: 70, 
        description: 'Machine learning framework',
        logo: <SiTensorflow className="w-6 h-6" />,
        bgColor: 'bg-orange-500'
      },
      { 
        name: 'OpenAI APIs', 
        level: 78, 
        description: 'Integration with AI models',
        logo: <SiOpenai className="w-6 h-6" />,
        bgColor: 'bg-green-500'
      },
      { 
        name: 'Data Analysis', 
        level: 75, 
        description: 'Analyzing and interpreting data',
        logo: <FaChartBar className="w-6 h-6" />,
        bgColor: 'bg-blue-500'
      },
      { 
        name: 'Machine Learning', 
        level: 68, 
        description: 'Algorithms that learn from data',
        logo: <FaBrain className="w-6 h-6" />,
        bgColor: 'bg-purple-500'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile & Others',
    description: 'Mobile development and other technologies',
    icon: <Smartphone className="w-5 h-5" />,
    color: 'bg-teal-500',
    skills: [
      { 
        name: 'React Native', 
        level: 75, 
        description: 'Cross-platform mobile development',
        logo: <FaMobile className="w-6 h-6" />,
        bgColor: 'bg-cyan-500'
      },
      { 
        name: 'Flutter', 
        level: 65, 
        description: 'Google\'s mobile UI framework',
        logo: <SiFlutter className="w-6 h-6" />,
        bgColor: 'bg-blue-400'
      },
      { 
        name: 'Firebase', 
        level: 78, 
        description: 'Backend-as-a-Service platform',
        logo: <SiFirebase className="w-6 h-6" />,
        bgColor: 'bg-orange-500'
      },
      { 
        name: 'Progressive Web Apps', 
        level: 82, 
        description: 'Web apps that work like native apps',
        logo: <FaGlobe className="w-6 h-6" />,
        bgColor: 'bg-green-500'
      },
      { 
        name: 'WebRTC', 
        level: 70, 
        description: 'Real-time communication',
        logo: <FaVideo className="w-6 h-6" />,
        bgColor: 'bg-purple-500'
      }
    ]
  }
];

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    description: string;
    logo: React.ReactElement;
    bgColor: string;
  };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gray-900/90 border-gray-700/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`${skill.bgColor} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0`}>
            {skill.logo}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              {skill.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">Proficiency</div>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                {skill.level}%
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');

  const selectedCategoryData = skillsCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="bg-gray-950 py-20 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <AnimatedHeading 
            text="MY SKILLS" 
            className="text-4xl font-bold tracking-wider text-white mb-4" 
          />
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                ${selectedCategory === category.id 
                  ? `${category.color} text-white shadow-lg scale-105` 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }
              `}
            >
              {category.icon}
              <span>{category.title}</span>
              <Badge variant="secondary" className="bg-black/20 text-current border-current/20">
                {category.skills.length}
              </Badge>
            </button>
          ))}
        </div>

        {/* Selected Category Description */}
        {selectedCategoryData && (
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedCategoryData.title}
            </h3>
            <p className="text-gray-400 text-lg">
              {selectedCategoryData.description}
            </p>
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedCategoryData?.skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              className="animate-fadeIn"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Category Stats */}
        <div className="mt-16 bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {selectedCategoryData?.skills.length || 0}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {selectedCategoryData ? 
                  Math.round(selectedCategoryData.skills.reduce((acc, skill) => acc + skill.level, 0) / selectedCategoryData.skills.length) 
                  : 0}%
              </div>
              <div className="text-gray-400">Average Proficiency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {selectedCategoryData?.skills.filter(skill => skill.level >= 85).length || 0}
              </div>
              <div className="text-gray-400">Expert Level</div>
            </div>
          </div>
        </div>

        {/* Overall Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4">
                <span className="text-2xl font-bold text-white">6</span>
              </div>
              <div className="text-lg font-semibold text-white">Categories</div>
              <div className="text-sm text-gray-400">Skill areas</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4">
                <span className="text-2xl font-bold text-white">{skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}</span>
              </div>
              <div className="text-lg font-semibold text-white">Technologies</div>
              <div className="text-sm text-gray-400">And growing</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4">
                <span className="text-2xl font-bold text-white">3+</span>
              </div>
              <div className="text-lg font-semibold text-white">Years</div>
              <div className="text-sm text-gray-400">Experience</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4">
                <span className="text-2xl font-bold text-white">∞</span>
              </div>
              <div className="text-lg font-semibold text-white">Passion</div>
              <div className="text-sm text-gray-400">Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
