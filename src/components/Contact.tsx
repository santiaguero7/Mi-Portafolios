import { Github, Linkedin, Mail, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "santiago.aguero@example.com",
      href: "mailto:santiago.aguero@example.com",
      color: "hover:text-red-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/santiago-aguero",
      href: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/santiago-aguero",
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conectemos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
              ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tus ideas y colaborar contigo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">¡Hablemos!</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estoy siempre abierto a nuevas oportunidades, proyectos interesantes 
                  y colaboraciones. No dudes en contactarme a través de cualquiera de 
                  estos medios.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 ${contact.color}`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 120 + 350}
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform mr-4">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">
                        {contact.label}
                      </div>
                      <div className="text-white font-medium">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="350">Envíame un mensaje</h3>
              
              <form className="space-y-6">
                <div data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="450">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-slate-700/50" data-aos="fade-up" data-aos-delay="700">
            <p className="text-gray-400">
              © 2024 Santiago Agüero. Desarrollado con ❤️ y mucho ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};