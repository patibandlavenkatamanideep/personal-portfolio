import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Award, Target, Rocket, Code, TrendingUp, Cloud, BookOpen, Users, Trophy, GraduationCapIcon, Database, BarChart3 } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const About = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science and Information Technology",
      institution: "Sacred Heart University, Fairfield, CT",
      period: "GPA: 3.8",
      highlight: "March 2025",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "GMR Institute of Technology, Vizianagaram, India",
      period: "GPA: 3.6",
      highlight: "May 2023",
      icon: GraduationCap,
    },
  ];

  const recognitions = [
    {
      title: "Upsilon Pi Epsilon (UPE) Honor Society",
      description: "Recognized for academic excellence, discipline, and outstanding performance in Computer Science",
      organization: "Honor Society",
      icon: Trophy,
    },
    {
      title: "Research Publication",
      description: "A Study on Deep Learning Approaches for Mood-Based Music Recommendation Systems - Designed and evaluated CNN-based architectures for emotion-aware music recommendation",
      organization: "Academic Research",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Who I Am</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-50 -z-10" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights and building intelligent systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          {/* Enhanced Bio Section */}
          <div className="space-y-6 animate-fade-in-delay">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Professional Summary</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Master's in Computer Science with <span className="text-foreground font-semibold bg-primary/10 px-2 py-0.5 rounded">1+ year building production ML systems</span> and scalable data pipelines. Specializing in Python, SQL, and AWS with expertise in developing and deploying ML models using Flask.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Expert in implementing <span className="text-foreground font-semibold bg-secondary/10 px-2 py-0.5 rounded">CI/CD workflows and creating Tableau dashboards</span> that deliver actionable insights. Proven track record solving real-world problems through data-driven solutions with strong analytical skills and a passion for innovative technology.
                </p>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Code className="h-8 w-8 text-primary mb-3" />
                <div className="relative text-3xl font-bold text-primary mb-1">Python</div>
                <div className="relative text-sm text-muted-foreground font-medium">ML & Data Science</div>
              </div>
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Database className="h-8 w-8 text-secondary mb-3" />
                <div className="relative text-3xl font-bold text-secondary mb-1">SQL</div>
                <div className="relative text-sm text-muted-foreground font-medium">Data Warehousing</div>
              </div>
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Cloud className="h-8 w-8 text-accent mb-3" />
                <div className="relative text-3xl font-bold text-accent mb-1">AWS</div>
                <div className="relative text-sm text-muted-foreground font-medium">Cloud Services</div>
              </div>
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <BarChart3 className="h-8 w-8 text-primary mb-3" />
                <div className="relative text-3xl font-bold text-primary mb-1">Tableau</div>
                <div className="relative text-sm text-muted-foreground font-medium">Visualization</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <a 
                  href="/Venkata_Manideep_ML_Engineer.pdf" 
                  download="Venkata_Manideep_Resume.pdf"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg" 
                variant="outline"
                className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Education Timeline */}
        <div className="animate-fade-in">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold">Education Journey</h2>
          </div>
          <div className="relative space-y-8 max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden sm:block" />
            
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-5 h-5 rounded-full bg-primary border-4 border-background hidden sm:block group-hover:scale-125 transition-transform" />
                  
                  <div className="sm:ml-16 p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-[1.02] hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-start gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all border border-primary/20">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                        <p className="text-secondary font-semibold mb-1 flex items-center gap-2">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">{edu.highlight}</p>
                        <p className="text-sm text-muted-foreground bg-muted/50 inline-block px-3 py-1 rounded-full">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recognitions & Achievements Section */}
        <div className="mt-32 animate-fade-in relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/5 via-accent/5 to-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4 group cursor-default">
              <div className="relative p-3 rounded-xl bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-secondary animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-3">
              Awards &{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Publications
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notable accomplishments and contributions to the field
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => {
              const Icon = recognition.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md border border-border hover:border-secondary/50 transition-all hover:scale-[1.02] hover:shadow-2xl h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative">
                      <div className="flex items-start gap-5 mb-4">
                        <div className="relative">
                          <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:from-secondary/30 group-hover:to-accent/30 transition-all border border-secondary/20 group-hover:scale-110 group-hover:rotate-3 duration-300">
                            <Icon className="h-7 w-7 text-secondary" />
                          </div>
                          <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                            {recognition.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {recognition.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-8 bg-gradient-to-r from-secondary to-accent rounded-full" />
                            <p className="text-xs text-accent font-bold bg-gradient-to-r from-accent/20 to-secondary/20 px-4 py-2 rounded-full border border-accent/30">
                              {recognition.organization}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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