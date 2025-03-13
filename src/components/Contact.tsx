
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, Phone, MapPin, 
  Send, Loader2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "bhandari.tejas001@gmail.com",
      link: "mailto:bhandari.tejas001@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9601092501",
      link: "tel:+91 9601092501"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Valsad, Gujarat",
      link: "https://maps.google.com/?q=San+Francisco,+CA"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-light-blue/10 to-transparent opacity-30" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Get in touch</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact cards */}
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center hover:shadow-neon transition-all duration-300 group"
            >
              <div className="mb-4 w-16 h-16 rounded-full bg-accent/30 mx-auto flex items-center justify-center text-highlight group-hover:bg-highlight group-hover:text-deep-blue transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.value}</p>
            </a>
          ))}
        </div>
        
        {/* Contact form */}
        <div className="glass-card p-8 mt-12 rounded-xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tejas Bhandari"
                  required
                  className="bg-deep-blue border-border/50 focus:border-highlight focus:ring-1 focus:ring-highlight"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="xyz@example.com"
                  required
                  className="bg-deep-blue border-border/50 focus:border-highlight focus:ring-1 focus:ring-highlight"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                className="bg-deep-blue border-border/50 focus:border-highlight focus:ring-1 focus:ring-highlight"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
                rows={6}
                className="bg-deep-blue border-border/50 focus:border-highlight focus:ring-1 focus:ring-highlight resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="btn-primary w-full sm:w-auto" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
