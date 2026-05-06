
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Layout,
  Server, Smartphone, Monitor
} from 'lucide-react';

const Icon = ({ symbol }) => (
  <span className="text-lg">{symbol}</span>
);

const getLevel = (value) => {
  if (value >= 80) return "Advanced";
  if (value >= 60) return "Intermediate";
  return "Learning";
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    proficiency: number;
  }[];
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Icon symbol="💻" />,
      skills: [
        { name: "Angular", proficiency: 90 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "JavaScript", proficiency: 90 },
        { name: "React", proficiency: 75 },
      ]
    },
    {
      name: "Backend",
      icon: <Icon symbol="🖥️" />,
      skills: [
        { name: "ASP.NET", proficiency: 60 },
        { name: "Java", proficiency: 55 },
        { name: "PHP", proficiency: 30 },
        { name: "Python", proficiency: 30 },

      ]
    },
    {
      name: "Database",
      icon: <Icon symbol="🗄️" />,
      skills: [
        { name: "PostgreSQL", proficiency: 80 },
        { name: "MySQL", proficiency: 80 },
        // { name: "Redis", proficiency: 60 },
        { name: "MongoDB", proficiency: 20 },

      ]
    },
    {
      name: "AI / ML",
      icon: <Icon symbol="🤖" />,
      skills: [
        { name: "OpenAI API", proficiency: 70 },
        { name: "Chatbot Development", proficiency: 70 },
        { name: "Prompt Engineering", proficiency: 65 },
        { name: "Python for AI", proficiency: 50 },
        { name: "Machine Learning Basics", proficiency: 45 },

      ]
    },
    {
      name: "Dev Tools",
      icon: <Icon symbol="⚙️" />,
      skills: [
        { name: "Git", proficiency: 85 },
        { name: "Postman", proficiency: 85 },
        { name: "AWS", proficiency: 50 },

      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-light-blue/10 to-transparent opacity-30" />

      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-400 mt-[15px]">Full Stack Development with growing expertise in AI & Machine Learning</p>
        </div>

        {/* Skills tabs navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === index
                  ? 'bg-highlight text-deep-blue shadow-neon'
                  : 'bg-secondary/70 hover:bg-secondary'
                }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills content */}
        <div className="glass-card p-8 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            {categories[activeCategory].icon}
            <span>{categories[activeCategory].name} Skills</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {categories[activeCategory].skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-400">
                    {getLevel(skill.proficiency)}
                  </span>
                </div>
                <div className="h-2 w-full bg-deep-blue rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-highlight transition-all duration-1000 ease-out"
                   initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
