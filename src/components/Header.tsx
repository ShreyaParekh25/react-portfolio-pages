
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 10);

    // Update active section based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/Shreya Parekh Resume (2025).pdf'; // path to your PDF file (public/sample.pdf)
    link.download = 'Shreya Parekh Resume.pdf'; // suggested file name
    link.click();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-deep-blue/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-highlight tracking-tight">
              Portfolio
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Download CV Button */}
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 btn-outline" onClick={handleDownload}>
            <Download size={16} />
            <span>Download CV</span>
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-highlight" />
            ) : (
              <Menu className="h-6 w-6 text-highlight" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
        <div className="bg-medium-blue/80 backdrop-blur-md px-4 py-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-center py-3 ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline" size="sm" className="flex items-center justify-center gap-2 mt-4 btn-outline" onClick={handleDownload}>
              <Download size={16} />
              <span>Download CV</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
