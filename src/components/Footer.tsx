
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from "framer-motion";

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
          <motion.button
            onClick={scrollToTop}
            className="bg-highlight text-deep-blue w-12 h-12 rounded-full flex items-center justify-center mb-8 hover:shadow-neon transition-all duration-300 -mt-20 animate-pulse-slow"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>

          {/* Footer logo/name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8">
            <h2 className="text-3xl font-bold text-highlight tracking-tight text-center">
              Shreya Parekh
            </h2>
            <p className="text-gray-400 mt-2">
              Full Stack Developer • AI Enthusiast • Future AI Engineer
            </p>
          </motion.div>

          {/* Footer navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social links */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex gap-6 mb-10">
            {[
              { icon: <Github />, link: "https://github.com/ShreyaParekh25", label: "GitHub" },
              { icon: <Linkedin />, link: "https://www.linkedin.com/in/shreya-parekh-071688193/", label: "LinkedIn" },
              { icon: <Twitter />, link: "https://twitter.com/", label: "Twitter" },
              { icon: <Mail />, link: "mailto:shreyaparekh685@gmail.com", label: "Email" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer"
              >
                {item.icon}
                <span className="absolute -top-8 text-xs bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            <motion.p
             initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>© {new Date().getFullYear()} Shreya Parekh • Built with ❤️ using React & AI </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
