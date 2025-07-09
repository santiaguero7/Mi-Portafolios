import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "Email",
      value: "santiago.aguero@email.com",
      href: "mailto:santiago.aguero@email.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      label: "Teléfono",
      value: "+54 9 11 1234-5678",
      href: "tel:+5491112345678"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-400" />,
      label: "Ubicación",
      value: "Buenos Aires, Argentina",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/10">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-noto">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto px-4">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar de ti! 
            Contáctame y trabajemos juntos en tu próxima idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-delay="200" className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Hablemos
              </h3>
              <p className="text-foreground/70 mb-6 sm:mb-8 text-sm sm:text-base">
                Estoy siempre abierto a discutir nuevas oportunidades, 
                proyectos interesantes o simplemente charlar sobre tecnología.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 sm:p-6 glass rounded-xl hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">{item.label}</div>
                    <div className="text-foreground/70 text-sm sm:text-base">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3 sm:space-y-4">
              <Button 
                className="w-full justify-start bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = 'mailto:santiago.aguero@email.com'}
              >
                <Mail size={20} className="mr-3" />
                Enviar Email Directo
              </Button>
              <Button 
                variant="outline"
                className="w-full justify-start border-foreground/20 hover:bg-foreground/10"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Conectar en LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-delay="300" className="glass rounded-2xl p-6 sm:p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                    Envía un Mensaje
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/20 border border-muted/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/20 border border-muted/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/20 border border-muted/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted/20 border border-muted/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 py-3 sm:py-4 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-3" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle size={64} className="mx-auto text-green-500 mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-foreground/70 text-sm sm:text-base">
                  Gracias por contactarme. Te responderé pronto.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
