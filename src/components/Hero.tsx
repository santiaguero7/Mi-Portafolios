import { useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

export const Hero = () => {
  const [showMail, setShowMail] = useState(false);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    const navbar = document.querySelector("nav");
    if (aboutSection && navbar) {
      const y = aboutSection.getBoundingClientRect().top + window.scrollY - navbar.clientHeight - 35; // 16px extra margen opcional
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-28 pb-12"
      data-aos="fade"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                SA
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="200">
            Santiago Agüero
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-300 mb-4" data-aos="fade-up" data-aos-delay="300">
            Estudiante de Ingeniería en Sistemas
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="400">
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="500">
            Desarrollando soluciones innovadoras con tecnologías modernas. 
            Apasionado por crear experiencias digitales que marcan la diferencia.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12" data-aos="fade-up" data-aos-delay="600">
            <a
              href="https://github.com/santiaguero7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-200 transform hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-200 transform hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:aguero17.2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-200 transform hover:scale-110 group"
              aria-label="Enviar correo"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="/SA-CV.pdf"
              download
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-200 transform hover:scale-110 group"
              aria-label="Descargar CV"
            >
              <FileText className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
              <span className="sr-only">CV</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToNext}
            className="group flex items-center justify-center mx-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-110 mb-20 sm:mb-24"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Ver mis proyectos
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-0">
        {/* Indicador de scroll */}
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Modal para mostrar el mail */}
      {showMail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="bg-blue-900 bg-opacity-100 border-2 border-blue-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center max-w-xs w-full animate-modal-in">
            <p className="mb-2 text-blue-200">Correo de contacto:</p>
            <p className="font-mono text-lg mb-6 select-all text-white">aguero17.2001@gmail.com</p>
            <button
              onClick={() => setShowMail(false)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};