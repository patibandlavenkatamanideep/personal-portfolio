import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Sparkles, Award, Brain, Bot, Eye, Wrench, Cpu, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Assisted Medical Image Diagnosis",
      subtitle: "Deep Learning Healthcare Pipeline",
      description:
        "Engineered a deep learning system processing 10,000+ images with 88% accuracy, implementing automated preprocessing and RESTful API with sub-2-second latency and GPU optimization.",
      tech: ["PyTorch", "CNNs", "Python", "NumPy", "SciPy", "RESTful API", "CI/CD"],
      metrics: ["10K+ Images", "88% Accuracy", "<2s Latency"],
      icon: Brain,
      color: "primary",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Automated Job Application System",
      subtitle: "LLM-Powered Workflow Automation",
      description:
        "Architected intelligent automation with GPT-4 APIs for resume optimization and skills extraction, reducing manual effort by 90% through a multi-stage LLM pipeline and workflow orchestration.",
      tech: ["n8n", "GPT-4", "OpenAI API", "Workflow Automation", "LLM Pipeline"],
      metrics: ["90% Effort Reduction", "Multi-stage LLM", "Auto Optimization"],
      icon: Bot,
      color: "secondary",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Sure Step – AI-Based Fall Detection",
      subtitle: "Computer Vision Edge System",
      description:
        "Deployed computer vision system on AWS Lambda achieving sub-3 second latency and 95% accuracy, reducing inference costs by 40% through model quantization and edge computing.",
      tech: ["CNNs", "OpenCV", "AWS Lambda", "Edge Computing", "Model Quantization"],
      metrics: ["95% Accuracy", "<3s Latency", "40% Cost Reduction"],
      icon: Eye,
      color: "accent",
      gradient: "from-accent to-primary",
      githubUrl: "https://github.com/patibandlavenkatamanideep/Sure-Step-Detection-Using-Yolov8",
    },
    {
      title: "Predictive Maintenance System",
      subtitle: "Time-Series Forecasting Infrastructure",
      description:
        "Developed an LSTM forecasting solution with automated retraining, improving accuracy by 30% and reducing maintenance costs by 40% through AWS-based distributed infrastructure.",
      tech: ["LSTM", "AWS Step Functions", "CloudWatch", "Time-Series Analysis", "PySpark"],
      metrics: ["30% Better Accuracy", "40% Cost Reduction", "Auto-Retraining"],
      icon: Wrench,
      color: "primary",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Portfolio Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Projects
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-50 -z-10" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-ready ML systems delivering real-world impact
          </p>
        </div>

        {/* Project Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {[
            { label: "Projects Completed", value: "10+", icon: Cpu },
            { label: "Accuracy Achieved", value: "95%", icon: Zap },
            { label: "Cost Reduction", value: "40%", icon: Award },
            { label: "Images Processed", value: "10K+", icon: Brain },
          ].map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-105 text-center group">
              <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Floating icon background */}
              <div className={`absolute -right-8 -bottom-8 w-48 h-48 bg-gradient-to-br from-${project.color}/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="flex-1 space-y-5">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br from-${project.color}/20 to-${project.color}/10 border border-${project.color}/30 shadow-lg group-hover:scale-110 transition-transform`}>
                          <project.icon className={`h-6 w-6 text-${project.color}`} />
                        </div>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 border border-${project.color}/30 text-${project.color} text-sm font-semibold backdrop-blur-sm shadow-lg`}>
                          <Sparkles className="h-4 w-4" />
                          Machine Learning
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className={`text-${project.color} font-semibold text-lg mb-4 flex items-center gap-2`}>
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Metrics Pills */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 border border-${project.color}/30 text-sm font-bold shadow-sm`}>
                          <Zap className={`h-3.5 w-3.5 text-${project.color}`} />
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-muted/50 backdrop-blur-sm border border-border text-sm font-semibold hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default hover:scale-105 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex lg:flex-col gap-3">
                    <Button
                      size="lg"
                      className={`group/btn relative bg-gradient-to-r ${project.gradient} hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-xl`}
                    >
                      <span className="relative z-10 flex items-center">
                        <Play className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </span>
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all shadow-lg"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    <Button size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10 hover:scale-105 transition-all shadow-lg">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced More Projects CTA */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">More to Explore</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Check out my GitHub for additional projects, open-source contributions, and code samples
              </p>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                onClick={() => window.open('https://github.com/patibandlavenkatamanideep', '_blank')}
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View GitHub Profile
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
