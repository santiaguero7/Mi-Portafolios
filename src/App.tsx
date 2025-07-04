import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}