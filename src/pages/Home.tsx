import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
                Master's in Computer Science
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Venkata Manideep{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Patibandla
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground">
                Data Scientist & Machine Learning Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Transforming data into actionable insights with 3+ years of experience in ML, MLOps, and cloud deployment. Specialized in building scalable, production-ready AI systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <NavLink to="/projects">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                  View Projects
                </Button>
              </NavLink>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
              <NavLink to="/contact">
                <Button size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </NavLink>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-primary/20 transition-colors border border-border hover:border-primary/50"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-secondary/20 transition-colors border border-border hover:border-secondary/50"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in-delay lg:ml-auto">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl rounded-full animate-glow" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Venkata Manideep Patibandla"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating labels */}
              <div className="absolute -top-4 -right-4 px-6 py-3 bg-card/90 backdrop-blur-md rounded-full border border-primary/30 shadow-lg">
                <span className="text-primary font-semibold">ML Engineer</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-card/90 backdrop-blur-md rounded-full border border-secondary/30 shadow-lg">
                <span className="text-secondary font-semibold">Data Scientist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-delay">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "15+", label: "ML Projects" },
            { value: "AWS", label: "Cloud Certified" },
            { value: "Python", label: "Primary Stack" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
