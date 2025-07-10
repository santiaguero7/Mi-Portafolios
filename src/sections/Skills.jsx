const icons = {
  HTML: "/icons/html.png",
  CSS: "/icons/css-3.png",
  JavaScript: "/icons/js.png",
  React: "/icons/react.png",
  "React Native": "/icons/native.png",
  TailwindCSS: "/icons/tailwind.png",
  TypeScript: "/icons/ts.png",
  Figma: "/icons/figma.png",

  "Node.js": "/icons/nodejs.png",
  Python: "/icons/piton.png",
  PostgreSQL: "/icons/postgre.png",
  MySQL: "/icons/mysql.png",

  Git: "/icons/git.png",
  GitHub: "/icons/github.png",
  Docker: "/icons/docker.png",
  Azure: "/icons/azure.png",
  Vite: "/icons/vite.png",
  VisualStudio: "/icons/vs.png",
  Terminal: "/icons/termina.png",
  Railway: "/icons/railway.png",
  UX: "/icons/uxui.png",
  Responsive: "/icons/responsive.png",
  Prototyping: "/icons/prototyping.png",
  n8n: "/icons/n8n.png",
};

const skillsData = [
  {
    title: "Frontend",
    color: "text-sky-400",
    items: [
      { name: "HTML", icon: icons.HTML },
      { name: "CSS", icon: icons.CSS },
      { name: "JavaScript", icon: icons.JavaScript },
      { name: "TypeScript", icon: icons.TypeScript },
      { name: "React", icon: icons.React },
      { name: "React Native", icon: icons["React Native"] },
      { name: "TailwindCSS", icon: icons.TailwindCSS },
    ],
  },
  {
    title: "Backend",
    color: "text-green-400",
    items: [
      { name: "Node.js", icon: icons["Node.js"] },
      { name: "Python", icon: icons.Python },
      { name: "PostgreSQL", icon: icons.PostgreSQL },
      { name: "MySQL", icon: icons.MySQL },
    ],
  },
  {
    title: "Herramientas",
    color: "text-blue-400",
    items: [
      { name: "Git", icon: icons.Git },
      { name: "GitHub", icon: icons.GitHub },
      { name: "Docker", icon: icons.Docker },
      { name: "Azure", icon: icons.Azure },
      { name: "Vite", icon: icons.Vite },
      { name: "Visual Studio", icon: icons.VisualStudio },
      { name: "Terminal", icon: icons.Terminal },
      { name: "Railway", icon: icons.Railway },
    ],
  },
  {
    title: "Design & UX",
    color: "text-purple-400",
    items: [
      { name: "Figma", icon: icons.Figma },
      { name: "UI/UX Design", icon: icons.UX },
      { name: "Responsive", icon: icons.Responsive },
      { name: "Prototyping", icon: icons.Prototyping },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding overflow-hidden">
    <div className="container overflow-hidden">
      <div className="text-center mb-8 sm:mb-12">
        <h2 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-noto">
          <span className="gradient-text">Habilidades</span> & Tecnologías
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-2 sm:px-4">
          Las tecnologías y herramientas que uso para crear soluciones.
        </p>
      </div>
      
      {/* Primera fila - Frontend y Backend - Solo desktop */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-5 gap-8 overflow-hidden">

        <div data-aos="fade-right" data-aos-delay="200" className={`
          relative rounded-2xl p-8 flex flex-col items-center 
          bg-gradient-to-br from-black/30 via-black/20 to-black/10 
          backdrop-blur-xl border border-white/10 
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-sky-400/10
          group select-none col-span-1 lg:col-span-3
          h-[340px]
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[0].color} transition-all duration-300 group-hover:scale-102`}>
            Frontend
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-x-8 gap-y-8 w-full max-w-2xl">
            {skillsData[0].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item transition-all duration-200 ease-out"
              >
                <div className="relative mb-3 transform group-hover/item:scale-105 transition-transform duration-200 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-full blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                  <div className="absolute inset-0 bg-sky-400/20 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover/item:drop-shadow-xl transition-all duration-200 ease-out"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-sm text-foreground/80 text-center font-medium group-hover/item:text-foreground transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend - 2 columnas */}
        <div data-aos="fade-left" data-aos-delay="300" className={`
          relative rounded-2xl p-8 flex flex-col items-center 
          bg-gradient-to-br from-black/30 via-black/20 to-black/10 
          backdrop-blur-xl border border-white/10 
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-green-400/10
          group select-none col-span-1 lg:col-span-2
          h-[340px]
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[1].color} transition-all duration-300 group-hover:scale-102`}>
            Backend
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-sm">
            {skillsData[1].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item transition-all duration-200 ease-out"
              >
                <div className="relative mb-3 transform group-hover/item:scale-105 transition-transform duration-200 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover/item:drop-shadow-xl transition-all duration-200 ease-out"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-sm text-foreground/80 text-center font-medium group-hover/item:text-foreground transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segunda fila - Herramientas y Design & UX - Solo desktop */}
      <div className="hidden lg:grid grid-cols-5 gap-8 mt-8 w-full overflow-hidden">
        {/* Herramientas */}
        <div data-aos="fade-right" data-aos-delay="400" className={`
          relative rounded-2xl p-8 flex flex-col items-center
          bg-gradient-to-br from-black/30 via-black/20 to-black/10
          backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-blue-400/10
          group select-none col-span-3
          h-[340px]
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[2].color} transition-all duration-300 group-hover:scale-102`}>
            Herramientas
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-8 gap-y-8 w-full max-w-2xl">
            {skillsData[2].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item transition-all duration-200 ease-out"
              >
                <div className="relative mb-3 transform group-hover/item:scale-105 transition-transform duration-200 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover/item:drop-shadow-xl transition-all duration-200 ease-out"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-sm text-foreground/80 text-center font-medium group-hover/item:text-foreground transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Design & UX */}
        <div data-aos="fade-left" data-aos-delay="500" className={`
          relative rounded-2xl p-8 flex flex-col items-center
          bg-gradient-to-br from-black/30 via-black/20 to-black/10
          backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-purple-400/10
          group select-none col-span-2
          h-[340px]
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[3].color} transition-all duration-300 group-hover:scale-102`}>
            Design & UX
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-sm">
            {skillsData[3].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:item:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover:item:drop-shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-sm text-foreground/80 text-center font-medium group-hover:item:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frontend y Backend en mobile */}
      <div className="grid grid-cols-1 gap-8 mt-8 lg:hidden overflow-hidden">
        {/* Frontend */}
        <div data-aos="fade-up" data-aos-delay="200" className={`
          relative overflow-hidden rounded-2xl p-8 flex flex-col items-center
          bg-gradient-to-br from-black/30 via-black/20 to-black/10
          backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-sky-400/10
          group select-none
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[0].color} transition-all duration-300 group-hover:scale-102`}>
            Frontend
          </h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-6 w-full max-w-xs mx-auto">
            {skillsData[0].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:item:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover:item:drop-shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-xs text-foreground/80 text-center font-medium group-hover:item:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Backend */}
        <div data-aos="fade-up" data-aos-delay="300" className={`
          relative rounded-2xl p-8 flex flex-col items-center
          bg-gradient-to-br from-black/30 via-black/20 to-black/10
          backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-green-400/10
          group select-none
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[1].color} transition-all duration-300 group-hover:scale-102`}>
            Backend
          </h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-6 w-full max-w-xs mx-auto">
            {skillsData[1].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:item:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover:item:drop-shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-xs text-foreground/80 text-center font-medium group-hover:item:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segunda fila - Herramientas y Design & UX en mobile */}
      <div className="grid grid-cols-1 gap-8 mt-8 lg:hidden overflow-hidden">
        {/* Herramientas */}
        <div data-aos="fade-up" data-aos-delay="400" className={`
          relative rounded-2xl p-8 flex flex-col items-center
          bg-gradient-to-br from-black/30 via-black/20 to-black/10
          backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-blue-400/10
          group cursor-pointer
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[2].color} transition-all duration-300 group-hover:scale-102`}>
            Herramientas
          </h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-6 w-full max-w-xs mx-auto">
            {skillsData[2].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:item:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover:item:drop-shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-xs text-foreground/80 text-center font-medium group-hover:item:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Design & UX */}
        <div data-aos="fade-up" data-aos-delay="500" className={`
          relative rounded-2xl p-8 flex flex-col items-center
          bg-gradient-to-br from-black/30 via-black/20 to-black/10
          backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-out
          hover:scale-102 hover:shadow-lg hover:border-white/20
          hover:bg-gradient-to-br hover:from-black/40 hover:via-black/30 hover:to-black/20
          hover:shadow-purple-400/10
          group cursor-pointer
        `}>
          <h3 className={`text-3xl font-bold mb-8 ${skillsData[3].color} transition-all duration-300 group-hover:scale-102`}>
            Design & UX
          </h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-6 w-full max-w-xs mx-auto">
            {skillsData[3].items.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center group/item hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:item:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain relative z-10 drop-shadow-lg group-hover:item:drop-shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-xs text-foreground/80 text-center font-medium group-hover:item:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default Skills;
