
import { ArrowRight, Award, BookOpen, Calendar } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-light-blue/10 to-transparent opacity-30" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: About image carousel */}
          <div className="relative animate-slide-right">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-lg">
                      {/* Diagonal corner accents */}
                      <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-highlight rounded-tl-lg z-10"></div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-highlight rounded-br-lg z-10"></div>
                      
                      {/* Main image with subtle hover effect */}
                      <AspectRatio ratio={4/3} className="w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-highlight/20 to-transparent opacity-60 z-0"></div>
                        <img 
                          src={image} 
                          alt="About Me" 
                          className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 hover:scale-105 z-0"
                        />
                      </AspectRatio>
                      
                      {/* Pulse dot indicators */}
                      <div className="absolute top-3 right-3 w-3 h-3 bg-highlight rounded-full animate-pulse-slow"></div>
                      <div className="absolute bottom-3 left-3 w-3 h-3 bg-highlight rounded-full animate-pulse-slow" style={{animationDelay: "1s"}}></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-highlight/10 hover:bg-highlight text-highlight hover:text-deep-blue border-highlight" />
              <CarouselNext className="right-2 bg-highlight/10 hover:bg-highlight text-highlight hover:text-deep-blue border-highlight" />
            </Carousel>
          </div>
          
          {/* Right: About content */}
          <div className="animate-slide-left">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
                <div className="mb-4 flex justify-center">
                  <Calendar className="h-10 w-10 text-highlight" />
                </div>
                <h3 className="font-bold text-lg">Experience</h3>
                <p className="text-muted-foreground">4+ Years</p>
              </div>
              
              <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
                <div className="mb-4 flex justify-center">
                  <Award className="h-10 w-10 text-highlight" />
                </div>
                <h3 className="font-bold text-lg">Completed</h3>
                <p className="text-muted-foreground">10+ Projects</p>
              </div>
              
              <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
                <div className="mb-4 flex justify-center">
                  <BookOpen className="h-10 w-10 text-highlight" />
                </div>
                <h3 className="font-bold text-lg">Education</h3>
                <p className="text-muted-foreground">Master of Computer Application</p>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
             
                  A highly skilled and results-driven Python Backend Developer with expertise in building 
                  scalable, high-performance applications. Passionate about crafting clean, efficient, 
                  and secure code, I specialize in Django, RESTful APIs, MySQL, PostgreSQL, 
                  and machine learning.


              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              With experience leading end-to-end backend development, I have successfully optimized system performance, reduced response times, and enhanced security. My background includes developing transportation services applications, hospital management systems, and automated microservices for scheduling and notifications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
Driven by continuous learning, I stay updated with emerging technologies and apply strong analytical and problem-solving skills to tackle complex challenges. Committed to innovation, I thrive in fast-paced, deadline-driven environments, delivering impactful software solutions.
              </p>
            </div>
            
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
              <span>Let's Talk</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
