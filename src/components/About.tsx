import { Code, Database, Globe, Cpu } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, React Native"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack",
      description: "Desarrollo completo de aplicaciones web"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automatizacion de sistemas",
      description: "Aprendiendo N8N"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Acerca de mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy estudiante de <span className="text-blue-400 font-semibold">Ingeniería en Sistemas</span>, 
                apasionado por la tecnología y el desarrollo de software. Me especializo en crear 
                soluciones web completas utilizando las tecnologías más modernas del mercado.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Como <span className="text-purple-400 font-semibold">Full Stack Developer</span>, 
                disfruto trabajando tanto en el frontend como en el backend, creando experiencias 
                de usuario respaldadas por arquitecturas robustas y escalables.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Siempre aprendiendo</h3>
                  <p className="text-gray-300">Manteniéndome actualizado con las últimas tecnologías</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};