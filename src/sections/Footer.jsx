import { Github, Linkedin, Mail, FileText, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/santiaguero7'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:aguero17.2001@gmail.com'
    },
    {
      name: 'CV',
      icon: <FileText size={20} />,
      url: '/CV-Santiago.pdf'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center text-center md:text-left">
          {/* Logo/Name */}
          <div className="order-1 md:order-1">
            <button 
              onClick={scrollToTop}
              className="text-xl sm:text-2xl font-bold text-primary hover:opacity-80 transition-opacity font-noto tracking-tight"
            >
              Santiago Agüero
            </button>
            <p className="text-foreground/60 mt-2 text-sm sm:text-base">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 order-3 md:order-2">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200 p-2 glass rounded-lg hover:bg-white/10"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right order-2 md:order-3">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Santiago Agüero
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
