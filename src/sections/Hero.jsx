import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Efecto de subrayado
  const [isShining, setIsShining] = React.useState(false);
  
  React.useEffect(() => {
    let timeoutId;
    const interval = setInterval(() => {
      setIsShining(true);
      timeoutId = setTimeout(() => setIsShining(false), 1000);
    }, 7000); 

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="hero" className="flex items-center justify-center relative py-20 sm:py-32 min-h-screen max-h-screen overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/4 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Subtle moving lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-noto" style={{ fontFamily: 'Noto Sans, Nunito, Inter, sans-serif', fontWeight: '800', letterSpacing: '-0.02em' }}>
            <span className="gradient-text">Santiago Agüero</span>
          </h1>
          
          <p className={`text-2xl md:text-3xl text-foreground/80 mb-4 font-medium shine-text ${isShining ? 'shine-animate' : ''}`}>
            Ingeniería en Sistemas
            <span className="shine-effect" style={{ display: 'none' }}></span>
          </p>
          
          <p className="text-lg md:text-xl text-foreground/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Full Stack Developer, apasionado por crear con código y transformar ideas en soluciones reales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 sm:px-10 py-4 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-transform duration-200 ease-out active:scale-100 hover:scale-105 shadow-md"
            >
              Ver Proyectos
            </Button>
          </div>

          <div className="flex justify-center space-x-7 sm:space-x-10 mb-8 sm:mb-16 px-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Github size={34} className="sm:w-10 sm:h-10" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={34} className="sm:w-10 sm:h-10" />
            </a>
            <a
              href="mailto:santiago.aguero@email.com"
              className="text-foreground/60 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={34} className="sm:w-10 sm:h-10" />
            </a>
            <a
              href="/cv-santiago-aguero.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <FileText size={34} className="sm:w-10 sm:h-10" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-foreground/60 hover:text-primary transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
