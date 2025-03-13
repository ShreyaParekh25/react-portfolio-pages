
import { useState } from 'react';
import { 
  Code, Database, Layout, 
  Server, Smartphone, Monitor
} from 'lucide-react';

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
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
   
        { name: "Python", proficiency: 90 },
        { name: "Django", proficiency: 90 },
        { name: "FastAPI", proficiency: 70 },
        { name: "FlaskAPI", proficiency: 85 },
      ]
    },
    {
      name: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: "HTML/CSS", proficiency: 95 },
        { name: "JavaScript", proficiency: 90 },
        { name: "React", proficiency: 50 },
        { name: "svelte", proficiency: 60 },
      ]
    },
    
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "PostgreSQL", proficiency: 90 },
        { name: "MySQL", proficiency: 80 },
        { name: "Redis", proficiency: 60 },
        { name: "MongoDB", proficiency: 20 },

      ]
    },
   
    {
      name: "Dev Tools",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git", proficiency: 95 },
        { name: "Gitlab", proficiency: 85 },
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
          <p className="section-subtitle">My technical expertise</p>
        </div>
        
        {/* Skills tabs navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === index 
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
                  <span className="text-highlight">{skill.proficiency}%</span>
                </div>
                <div className="h-2 w-full bg-deep-blue rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-highlight transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
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
