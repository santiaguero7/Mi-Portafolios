import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "PetPal",
      description: "Aplicacion Movil de Gestion de paseadores y mascotas. Mi tesis.",
      technologies: ["React Native", "TypeScript", "Node.js", "SQL", "Railway"],
      image: "/images/PetPalLogo.png",
      github: "https://github.com/santiaguero7/PetPal-App.git",
      demo: "https://demo.com"
    },
    {
      title: "Lista de tareas web",
      description: "Pagina web para agregar y quitar tareas",
      technologies: ["React", "Tailwind CSS"],
      image: "photo-1461749280684-dccba630e2f6",
      github: "https://github.com/santiaguero7/Lista-de-Tareas.git",
      demo: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico interactivo con pronósticos detallados, mapas y análisis de tendencias climáticas.",
      technologies: ["React", "Python", "FastAPI", "Chart.js"],
      image: "photo-1498050108023-c5249f4df085",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Social Media Analytics",
      description: "Herramienta de análisis de redes sociales con métricas avanzadas, reportes automáticos y visualización de datos.",
      technologies: ["Vue.js", "Django", "Redis", "D3.js"],
      image: "photo-1488590528505-98d2b5aba04b",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mis Proyectos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
              Una selección de proyectos que demuestran mis habilidades en desarrollo full stack
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 180 + 200}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden" data-aos="zoom-in" data-aos-delay={index * 180 + 300}>
                  <img
                    src={
                      project.image.startsWith("/")
                        ? project.image // Imagen local
                        : `https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-6" data-aos="fade-up" data-aos-delay={index * 180 + 400}>
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
                        data-aos="zoom-in"
                        data-aos-delay={index * 180 + 500 + techIndex * 40}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 group/btn"
                      data-aos="fade-right"
                      data-aos-delay={index * 180 + 600}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 group/btn"
                      data-aos="fade-left"
                      data-aos-delay={index * 180 + 650}
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
      </div>
    </section>
  );
};