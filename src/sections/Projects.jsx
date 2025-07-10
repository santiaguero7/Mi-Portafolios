import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PetPal",
      description: "Aplicación móvil de gestión de mascotas y cuidadores/paseadores. Distintos tipos de cuenta y gestion de reservas.",
      technologies: ["React Native", "Node.js", "MySQL", "Railway", "Tailwind CSS"],
      image: "/PetPalLogo.png",
      githubUrl: "https://github.com/santiaguero7/PetPal-App",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "OpenClima",
      description: "Aplicación web del clima, que consume la API de OpenWeatherMap para mostrar información meteorológica en tiempo real de cualquier ciudad del mundo.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API", "Geolocation API"],
      image: "/clima.png",
      githubUrl: "https://github.com/santiaguero7/OpenClima.git",
      liveUrl: "https://climaopen.netlify.app/",
      featured: true
    },
    {
      id: 3,
      title: "Plataforma de E-commerce",
      description: "Plataforma de comercio de perfumes completa con carrito de compras, gestión de inventario y procesamiento de pagos.",
      technologies: ["React", "Node.js", "MySql", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Herramienta de análisis de redes sociales con métricas avanzadas y visualización de datos.",
      technologies: ["Vue.js", "Django", "D3.js"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-noto">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto px-4">
            Una selección de mis proyectos más destacados. Desde aplicaciones móviles hasta paginas web. 
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-8 sm:mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                      project.id === 2 ? 'object-center' : ''
                    }`}
                    style={project.id === 2 ? { objectPosition: 'center 30%' } : {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Código
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
        <div>
          <h3 data-aos="fade-up" data-aos-delay="300" className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Otros Proyectos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden" style={{ overflow: 'hidden' }}>
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                data-aos="zoom-in"
                data-aos-delay={300 + (index * 100)}
                className="group bg-slate-800/20 backdrop-blur rounded-xl border border-slate-700/30 overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:scale-102"
              >
                {/* Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                      project.id === 2 ? 'object-cover object-center' : 'object-cover'
                    }`}
                    style={project.id === 2 ? { objectPosition: 'center 20%' } : {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">{project.title}</h4>
                    <div className="flex space-x-3">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-1 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white rounded-md transition-all duration-300 text-xs"
                        aria-label="Ver proyecto live"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-1 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-md transition-all duration-300 text-xs"
                        aria-label="Ver código en GitHub"
                      >
                        <Github size={14} className="mr-1" />
                        Código
                      </a>
                    </div>
                  </div>
                  <p className="text-foreground/70 mb-3 text-xs sm:text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-blue-600/10 text-blue-300 text-xs rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 bg-blue-600/10 text-blue-300 text-xs rounded-full border border-blue-500/20">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-foreground/70 mb-6 text-sm sm:text-base">
            ¿Interesado en ver más de mi trabajo?
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => window.open('https://github.com/santiaguero7', '_blank')}
          >
            <Github size={20} className="mr-2" />
            Ver todos en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
