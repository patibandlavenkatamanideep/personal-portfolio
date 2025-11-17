import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Award } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const education = [
    {
      degree: "Data Science and ML Specialization",
      institution: "Scaler",
      period: "2024–2025",
      icon: Award,
    },
    {
      degree: "Master's in Computer Science & IT",
      institution: "Sacred Heart University (SHU)",
      period: "2024–2025",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "GMR Institute of Technology",
      period: "2019–2023",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights and building intelligent systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Profile Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative rounded-2xl border-2 border-primary/20 shadow-xl w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in-delay">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Master's in Computer Science with <span className="text-foreground font-semibold">3+ years of experience</span> in Data Analysis and Machine Learning. Skilled in Python, SQL, ML model development, deployment pipelines, AWS cloud, and data visualization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about building <span className="text-foreground font-semibold">scalable, production-ready ML systems</span> and delivering real-world impact through data-driven solutions. Experienced in end-to-end ML workflows from data preprocessing to model deployment and monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">ML Projects</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                <div className="text-3xl font-bold text-secondary">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="text-3xl font-bold text-accent">AWS</div>
                <div className="text-sm text-muted-foreground">Cloud Expert</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary">MLOps</div>
                <div className="text-sm text-muted-foreground">Specialist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <GraduationCap className="inline-block mr-2 h-8 w-8 text-primary" />
            Education
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-secondary font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute left-[38px] bottom-0 translate-y-6 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
