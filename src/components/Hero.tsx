
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

const Hero = () => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the profile image glow
    if (imageWrapperRef.current) {
      const interval = setInterval(() => {
        imageWrapperRef.current?.classList.add('animate-glow');
        setTimeout(() => {
          imageWrapperRef.current?.classList.remove('animate-glow');
        }, 2000);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, []);

  const fullText = "Full Stack Developer | UI/UX Designer | Aspiring AI Engineer";
  const [text, setText] = useState("");
  debugger;
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-light-blue/10 to-transparent opacity-50" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Hero content */}
          <div className="order-2 lg:order-1 animate-slide-right">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <br />
              <span className="gradient-text">Shreya Parekh</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-md md:text-xl text-gray-300"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.p>
            {/* <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              And I'm a <span className="text-highlight">Full Stack Developer with UI/UX expertise</span>
            </h2>  */}
           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-gray-400 leading-relaxed"
          >
            I build modern, user-centric web applications combining UI/UX design with full-stack development. 
            I also work on AI-powered projects like chatbots and intelligent web systems, and I am actively
            improving my skills in Artificial Intelligence and Machine Learning.
          </motion.p>
            <div className="flex flex-wrap gap-4 mb-10 mt-[15px]" 
>
              {/* <a href="#" aria-label="Facebook" className="transform hover:scale-110 transition-transform duration-300">
                <Facebook className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
              </a>
              <a href="#" aria-label="Twitter" className="transform hover:scale-110 transition-transform duration-300">
                <Twitter className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
               </a> */}
              <a href="https://github.com/ShreyaParekh25" aria-label="GitHub" className="transform hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/shreya-parekh-071688193/" aria-label="LinkedIn" className="transform hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
              </a>
            </div>

            {/* <div className="flex flex-wrap gap-4"> */}
            {/* <Button className="btn-primary">Hire Me</Button> */}
            {/* <Button className="btn-outline">Contact Me</Button> */}
            {/* </div> */}
          </div>

          {/* Hero image - enhanced with hexagonal shape and improved effects */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-left">
            <div
              ref={imageWrapperRef}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Hexagonal clip path with animation */}
              <div className="absolute inset-0 bg-blue-gradient rotate-45 animate-spin-slow rounded-3xl"></div>

              {/* Outer glow ring */}
              <div className="absolute inset-4 bg-gradient-to-tr from-highlight/80 to-accent-pink/40 rounded-3xl shadow-neon-intense"></div>

              {/* Image container with clip path */}
              <div className="absolute inset-8 overflow-hidden rounded-3xl border-2 border-highlight shadow-neon">
                <AspectRatio ratio={1 / 1} className="w-full h-full">
                  <img
                    src="/IMG_20240427_184653_Bokeh.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
              </div>

              {/* Accent decorations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-highlight rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent-pink rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

              {/* Animated dots in background */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-highlight/70 rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute -bottom-6 -right-6 w-4 h-4 bg-accent-pink/70 rounded-full animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
