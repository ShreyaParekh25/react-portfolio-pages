
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-medium-blue pt-12 pb-6 relative">
      <div className="absolute inset-0 bg-blue-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="bg-highlight text-deep-blue w-12 h-12 rounded-full flex items-center justify-center mb-8 hover:shadow-neon transition-all duration-300 -mt-20 animate-pulse-slow"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
          
          {/* Footer logo/name */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-highlight tracking-tight">
              Tejas Bhandari
            </h2>
          </div>
          
          {/* Footer navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Social links */}
          <div className="flex gap-6 mb-10">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center glow-hover"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center glow-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center glow-hover"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center glow-hover"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
