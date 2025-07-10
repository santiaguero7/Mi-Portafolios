import { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "EMAIL",
      value: "aguero17.2001@gmail.com",
      href: "mailto:aguero17.2001@gmail.com",
      color: "hover:text-red-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GITHUB",
      value: "github.com/santiaguero7",
      href: "https://github.com/santiaguero7",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LINKEDIN",
      value: "linkedin.com/in/santiago-aguero",
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    }
  ];

  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 relative bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-noto text-blue-600">
              Conectemos
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tus ideas y colaborar contigo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
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
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Envíame un mensaje</h3>
              
              {sent ? (
                <div className="text-blue-400 text-center text-lg font-semibold py-8">
                  ¡Mensaje enviado correctamente! Gracias por contactarme.
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target;
                    const data = new FormData(form);
                    try {
                      await fetch('/', {
                        method: 'POST',
                        body: data,
                        headers: { 'Accept': 'application/x-www-form-urlencoded' },
                      });
                      setSent(true);
                      form.reset();
                    } catch (err) {
                      alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
                    }
                  }}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-blue-500/25"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
