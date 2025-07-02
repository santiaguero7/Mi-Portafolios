import { useState, useEffect } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Acerca de mí" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-900"
      style={{ backgroundColor: "rgba(15,23,42,0.85)" }} // Más opacidad
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex space-x-14">
            {navItems.map((item) => (
              <span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-blue-400 scale-110"
                    : "text-gray-300 hover:text-blue-400 hover:scale-110"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};