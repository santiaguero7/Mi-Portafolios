import { useState, useEffect } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);

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
    setOpen(false);
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
      style={{ backgroundColor: "rgba(15,23,42,0.85)" }}
    >
      <div className="container mx-auto px-6 py-2 md:py-4">
        <div className="flex w-full justify-between items-center">
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-14 mx-auto">
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
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none ml-[-8px]" // mueve el botón más al borde
              aria-label="Abrir menú"
              style={{ background: "none", border: "none", boxShadow: "none" }}
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {open && (
              <div className="absolute top-full left-0 w-full bg-slate-900/95 flex flex-col items-center py-6 mb-4 space-y-4 z-50 border-b border-slate-700">
                {navItems.map((item) => (
                  <span
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer text-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-blue-400 scale-110"
                        : "text-gray-300 hover:text-blue-400 hover:scale-110"
                    }`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};