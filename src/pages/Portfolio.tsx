import { useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section 
        id="home" 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="snap-start snap-always min-h-screen pt-16 section-animate animate-zoom"
      >
        <Home />
      </section>
      
      <section 
        id="about" 
        ref={(el) => (sectionsRef.current[1] = el)}
        className="snap-start snap-always min-h-screen pt-16 section-animate animate-slide-left"
      >
        <About />
      </section>
      
      <section 
        id="experience" 
        ref={(el) => (sectionsRef.current[2] = el)}
        className="snap-start snap-always min-h-screen pt-16 section-animate animate-slide-right"
      >
        <Experience />
      </section>
      
      <section 
        id="skills" 
        ref={(el) => (sectionsRef.current[3] = el)}
        className="snap-start snap-always min-h-screen pt-16 section-animate animate-zoom"
      >
        <Skills />
      </section>
      
      <section 
        id="projects" 
        ref={(el) => (sectionsRef.current[4] = el)}
        className="snap-start snap-always min-h-screen pt-16 section-animate animate-slide-left"
      >
        <Projects />
      </section>
      
      <section 
        id="contact" 
        ref={(el) => (sectionsRef.current[5] = el)}
        className="snap-start snap-always min-h-screen pt-16 section-animate animate-slide-right"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
