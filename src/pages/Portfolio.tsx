import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section id="home" className="snap-start snap-always min-h-screen pt-16">
        <Home />
      </section>
      
      <section id="about" className="snap-start snap-always min-h-screen pt-16">
        <About />
      </section>
      
      <section id="experience" className="snap-start snap-always min-h-screen pt-16">
        <Experience />
      </section>
      
      <section id="skills" className="snap-start snap-always min-h-screen pt-16">
        <Skills />
      </section>
      
      <section id="projects" className="snap-start snap-always min-h-screen pt-16">
        <Projects />
      </section>
      
      <section id="contact" className="snap-start snap-always min-h-screen pt-16">
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
