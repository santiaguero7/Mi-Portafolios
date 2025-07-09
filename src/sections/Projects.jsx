import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/santiago/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y seguimiento de proyectos.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/santiago/taskmanager",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard del clima con predicciones avanzadas, mapas interactivos y alertas personalizadas.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/santiago/weather-dashboard",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con diseño responsivo y animaciones avanzadas.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "https://santiago-portfolio.com",
      githubUrl: "https://github.com/santiago/portfolio",
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
            Una selección de mis proyectos más destacados, desde aplicaciones web hasta soluciones empresariales
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-8 sm:mb-12">
          <h3 data-aos="fade-up" data-aos-delay="200" className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Proyectos Destacados</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 overflow-hidden" style={{ overflow: 'hidden' }}>
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
                className="glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-500 group"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary/20 via-accent/20 to-purple-400/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg hover:bg-primary/30 transition-colors"
                        aria-label="Ver proyecto live"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-foreground/20 backdrop-blur-sm rounded-lg hover:bg-foreground/30 transition-colors"
                        aria-label="Ver código en GitHub"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-foreground/70 mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs glass border border-muted/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Ver Proyecto
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-foreground/20 hover:bg-foreground/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 data-aos="fade-up" data-aos-delay="500" className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Otros Proyectos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden" style={{ overflow: 'hidden' }}>
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 100)}
                className="glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg sm:text-xl font-bold">{project.title}</h4>
                  <div className="flex space-x-2">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                      aria-label="Ver proyecto live"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs glass border border-muted/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs glass border border-muted/20">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-foreground/70 mb-6 text-sm sm:text-base">
            ¿Interesado en ver más de mi trabajo?
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => window.open('https://github.com', '_blank')}
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
