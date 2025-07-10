import { User, MapPin, Calendar, Award, Code2, Heart } from 'lucide-react';

const About = () => {
  const facts = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Ubicación",
      value: "Cordoba, Argentina"
    },
  
    {
      icon: <Code2 className="w-5 h-5 text-orange-400" />,
      label: "Proyectos",
      value: "+8 completados"
    },
    {
      icon: <Award className="w-5 h-5 text-purple-400" />,
      label: "Estudios",
      value: "+5 años de Ingeniería en Sistemas en UCC"
    },
    {
      icon: <Calendar className="w-5 h-5 text-accent" />,
      label: "Autodidacta",
      value: "Constantemente aprendiendo"
    },
    
  ];

  return (
    <section id="about" className="section-padding bg-muted/10 overflow-hidden">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center overflow-hidden">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-noto">
                Sobre <span className="gradient-text">Mí</span>
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6">
                Estudiante de <span className="gradient-text">Ingeniería en Sistemas</span>, orientado a resolver problemas reales con tecnología.
              </p>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6">
                Me gusta involucrarme en todo el proceso: <span className="gradient-text">front</span>, <span className="gradient-text">back</span>, <span className="gradient-text">base de datos</span> o donde haga falta. Busco escribir código limpio y entendible, pero también <span className="gradient-text">entender el propósito</span> detrás de cada decisión.
              </p>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                Para mí, programar es pensar, diseñar, probar y, sobre todo, <span className="gradient-text">crear</span>.
              </p>
            </div>

            {/* Facts Grid */}
            <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-2 gap-4 sm:gap-6">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 sm:p-6 text-center shadow-lg shadow-primary/10 border border-transparent hover:border-primary/70 hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <span className="inline-flex items-center justify-center bg-primary/10 rounded-full p-2 transition-all duration-300 group-hover:bg-primary/20">
                      {fact.icon}
                    </span>
                  </div>
                  <div className="font-bold text-base sm:text-lg mb-1">{fact.value}</div>
                  <div className="text-foreground/60 text-xs sm:text-sm">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Content */}
          <div data-aos="fade-left" data-aos-delay="300" className="relative order-first lg:order-last flex items-center justify-center min-h-full">
            <div className="relative glass rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center w-full max-w-xl mx-auto">
              {/* Profile Image */}
              <div className="w-full aspect-square max-w-[280px] sm:max-w-[320px] mx-auto bg-gradient-to-br from-primary/20 via-accent/20 to-purple-400/20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src="/yo.png" 
                  alt="Foto de Santiago Aguero" 
                  className="object-cover w-full h-full rounded-2xl shadow-lg" 
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Santiago Agüero</h3>
                <p className="text-foreground/70 mb-4">Full Stack Developer</p>
                <div className="flex items-center justify-center text-foreground/60 text-sm">

                </div>
              </div>
              {/* Decorative elements eliminados */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
