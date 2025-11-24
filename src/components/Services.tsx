
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Monitor,
  X,
  CodeXml
} from 'lucide-react';

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const services: Service[] = [
     {
      title: "Front end Development",
      description: "creating the user-facing parts of websites and web applications, ensuring they are visually appealing, user-friendly, and functional.", 
      icon: <CodeXml  className="h-10 w-10" />,
      features: [
        "Responsive and Cross-platform Web development",
        "Single-Page Application (SPA) Development ",
        "App performance optimization",
        "SEO-friendly development",
        "Progressive Web App (PWA) Development",
      ]
    },
     {
      title: "UI/UX Design",
      description: "Creating intuitive and attractive user interfaces.",
      icon: <Monitor className="h-10 w-10" />,
      features: [
        "User interface design",
        "User experience optimization",
        "Wireframing & prototyping",
        "Design system creation",
        "Accessibility compliance",
      ]
    },
    {
      title: "Web Development",
      description: "Creating responsive and engaging web applications.",
      icon: <Globe className="h-10 w-10" />,
      features: [
        "Responsive web design",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Content Management Systems",
        "Web performance optimization",
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      icon: <Server className="h-10 w-10" />,
      features: [
        "RESTful API development",
        "Database design & optimization",
        "Authentication & authorization",
      ]
    },
   
    {
      title: "Database Design",
      description: "Designing efficient and scalable database solutions.",
      icon: <Database className="h-10 w-10" />,
      features: [
        "Database schema design",
        "Data migration & ETL",
        "Database performance tuning",
        "NoSQL & SQL databases",
        "Data security & integrity",
      ]
    },
   
    {
      title: "Code Review & Refactoring",
      description: "Improving existing codebases for better performance and maintainability.",
      icon: <Code className="h-10 w-10" />,
      features: [
        "Code quality assessment",
        "Technical debt reduction",
        "Performance optimization",
        "Architecture improvement",
        "Code documentation",
      ]
    },
  ];

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-light-blue/10 to-transparent opacity-30" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">What I offer</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-neon hover:-translate-y-2"
            >
              <div className="mb-5 text-highlight">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                className="text-highlight border-highlight hover:bg-highlight/10"
                onClick={() => openServiceDetails(service)}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Service details modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="glass-card max-w-2xl w-full p-8 rounded-xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="text-highlight">{selectedService.icon}</span>
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              </div>
              <button
                onClick={closeServiceDetails}
                className="text-muted-foreground hover:text-highlight transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">{selectedService.description}</p>
            
            <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
            <ul className="space-y-3 mb-8">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-highlight/20 p-1 rounded-full mt-0.5">
                    <div className="w-2 h-2 bg-highlight rounded-full"></div>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-end">
              <Button onClick={closeServiceDetails} className="btn-primary">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
