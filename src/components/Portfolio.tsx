
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { prototype } from 'events';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Diatech-SGI",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      description: "It is a web-based software that has global client/user base, Offering features such as inventory tracking and management, Sales order management, Sales analysis & optimization tools, Client on-boarding, etc",
      technologies: ["Angular","TypeScript,", "MySQL", "ASP.NET", ],
      githubUrl: "#",
      liveUrl: "#"
    },
     {
      id: 2,
      title: "Inventory Manager",
      category: "web",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "To develop a robust backend system for managing inventory items, including product tracking, stock levels, suppliers, and orders.",
      technologies: ["Angular", "SpringBoot REST", "In-memory H2 "],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "mobile",
      image: "https://plus.unsplash.com/premium_vector-1682303104623-bcabb4db6f04?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVwb3J0fGVufDB8fDB8fHww&ixlib=rb-4.0.3&q=60&w=3000",
      description: "A cross-platform mobile application for task management with real-time updates and team collaboration features.",
      technologies: ["Android Studio", "Java", "Firebase", "XML", "Material Design Components"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Morden Human care services",
      category: "web",
      image: "https://thumbs.dreamstime.com/b/healthcare-service-online-medical-consultation-concept-fem-female-doctor-computer-screen-vector-illustration-90728194.jpg",
      description: "Uses machine learning to assist with health prediction, early diagnosis, personalized care, and wellness monitoring for individuals—especially in remote or under-served areas",
      technologies: ["Angular", "Flask", "Firebase", "TensorFlow", "Matplotlib","Transformers"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "School management system",
      category: "web",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/59590f161506911.63c69267a1f81.jpg",
      description: "Manage and automate daily operations of a school such as managing students, teachers, classes, subjects, attendance, and results using a centralized PHP-based web system",
      technologies: ["PHP ", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "WAMP "],
      githubUrl: "#",
      liveUrl: "#"
    },
    // {
    //   id: 6,
    //   title: "Carrer Guidence Management System",
    //   category: "mobile",
    //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   description: "Developed using Android Studio. This project helps students or users to get appropriate career suggestions based on their interests, qualifications, and skills.",
    //   technologies: ["Android Studio", "Firebase", "XML ", "Google Material Design"],
    //   githubUrl: "#",
    //   liveUrl: "#"
    // },
    {
      id: 6,
      title: "Fasted Food Delivery Service",
      category: "prototype",
      image: "https://plus.unsplash.com/premium_vector-1683141179079-189216713537?fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
      description: "Designed a high-fidelity prototype using Figma. create an intuitive, fast, and visually engaging user experience for customers to browse menus, customize orders, and track deliveries.",
      technologies: ["Figma","(for wireframes, UI design, and prototyping)"],
      githubUrl: "#",
      liveUrl: "https://www.figma.com/proto/yVnZZRYxFHFtJdNOWHQlNa/Shreya-Practice?node-id=2-877&p=f&t=pd20EGGqqeYz4Vi5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
    },

  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const openProjectModal = (project: Project) => {
    setCurrentProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setCurrentProject(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateProject = (direction: 'prev' | 'next') => {
    if (!currentProject) return;
    
    const currentIndex = projects.findIndex(p => p.id === currentProject.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length;
    }
    
    setCurrentProject(projects[newIndex]);
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-light-blue/10 to-transparent opacity-30" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">Recent projects</p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', 'web', 'mobile', 'prototype'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-highlight text-deep-blue shadow-neon' 
                  : 'bg-secondary/70 hover:bg-secondary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-xl overflow-hidden group hover:shadow-neon transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    className="btn-primary"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-accent/30 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-accent/30 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project details modal */}
      {currentProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <div 
            className="glass-card max-w-4xl w-full rounded-xl animate-fade-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => navigateProject('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-highlight hover:text-deep-blue transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => navigateProject('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-highlight hover:text-deep-blue transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
              
              <p className="text-muted-foreground mb-6">{currentProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/30 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {currentProject.githubUrl && (
                  <a 
                    href={currentProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    <span>View Code</span>
                  </a>
                )}
                {currentProject.liveUrl && (
                  <a 
                    href={currentProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
