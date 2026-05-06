
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
    "/Shreya_Parekh1.png",
    "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "/IMG_20240427_184653_Bokeh.jpg"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-light-blue/10 to-transparent opacity-30" />

      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mt-[15px]">Full Stack Developer & AI Enthusiast</p>
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
                      <AspectRatio ratio={4 / 3} className="w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-highlight/20 to-transparent opacity-60 z-0"></div>
                        <img
                          src={image}
                          alt="About Me"
                          className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 hover:scale-105 z-0"
                        />
                      </AspectRatio>

                      {/* Pulse dot indicators */}
                      <div className="absolute top-3 right-3 w-3 h-3 bg-highlight rounded-full animate-pulse-slow"></div>
                      <div className="absolute bottom-3 left-3 w-3 h-3 bg-highlight rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
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
                <p className="text-muted-foreground">3+ Years</p>
              </div>

              <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
                <div className="mb-4 flex justify-center">
                  <Award className="h-10 w-10 text-highlight" />
                </div>
                <h3 className="font-bold text-lg">Completed</h3>
                <p className="text-muted-foreground">5+ Projects</p>
              </div>

              <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
                <div className="mb-4 flex justify-center">
                  <BookOpen className="h-10 w-10 text-highlight" />
                </div>
                <h3 className="font-bold text-lg">Education</h3>
                <p className="text-muted-foreground">Bachelor of computer engineering</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Experienced Software Developer with 3+ years in full-cycle development of enterprise web and client-server applications. Proficient in front-end technologies including HTML, CSS, JavaScript (ES6+), TypeScript, Angular, React, Bootstrap, and Sass, with backend experience in Node.js, Java, and CMS platforms like Shopify and WordPress.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                In addition to traditional development, I have hands-on experience building AI-powered applications, including integrating Large Language Models (LLMs), developing chatbot solutions, and working with frameworks like LangChain to create intelligent, context-aware systems. I have applied AI in real-world projects such as building RAG (Retrieval-Augmented Generation) based chatbots and automating workflows using modern AI tools.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I bring a strong foundation in structured programming (C, C++, C#, Python) along with expertise in responsive UI/UX design, REST API integration, and scalable architecture. Adept at working in Agile environments, I am experienced in managing production systems and communicating complex technical solutions clearly.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Driven by continuous learning, I actively explore emerging technologies in AI and software development. With strong analytical and problem-solving skills, I enjoy tackling complex challenges and building innovative, high-impact solutions in fast-paced, deadline-driven environments.
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
