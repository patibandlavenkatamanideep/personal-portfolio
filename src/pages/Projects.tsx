import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Sparkles, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SureStep – AI-Based Fall Detection",
      subtitle: "YOLOv8 Real-time Detection System",
      description:
        "Real-time fall detection system using CNN and OpenCV with automated alert system. Deployed on AWS Lambda with Twilio SMS integration.",
      tech: ["YOLOv8", "OpenCV", "AWS Lambda", "Twilio", "Flask", "Docker"],
      metrics: ["94% Accuracy", "Real-time Processing", "Cloud Deployed"],
      color: "primary",
      gradient: "from-primary to-secondary",
    },
    {
      title: "AI-Assisted Medical Image Diagnosis",
      subtitle: "ResNet50 Deep Learning Pipeline",
      description:
        "Advanced medical imaging diagnosis system with interpretability using Grad-CAM. Production-ready deployment with comprehensive model tracking.",
      tech: ["ResNet50", "Grad-CAM", "MLflow", "AWS SageMaker", "TensorFlow"],
      metrics: ["High Accuracy", "Model Interpretability", "Production Ready"],
      color: "secondary",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Predictive Maintenance System",
      subtitle: "Industrial Equipment Monitoring",
      description:
        "Time-series forecasting models for equipment failure prediction with automated training pipeline on AWS. Improved maintenance efficiency significantly.",
      tech: ["Time-series ML", "AWS Step Functions", "PySpark", "BigQuery"],
      metrics: ["30% Better Forecasting", "Automated Pipeline", "Cost Reduction"],
      color: "accent",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
      
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

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-[1.01] hover:shadow-2xl animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="flex-1 space-y-5">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 border border-${project.color}/30 text-${project.color} text-sm font-semibold backdrop-blur-sm shadow-lg`}>
                          <Sparkles className="h-4 w-4" />
                          Machine Learning
                        </div>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className={`text-${project.color} font-semibold text-lg mb-4 flex items-center gap-2`}>
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-muted/50 backdrop-blur-sm border border-border text-sm font-semibold hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default hover:scale-105 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Metrics */}
                    <div className="flex flex-wrap gap-4 pt-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="group/metric flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 backdrop-blur-sm border border-border hover:border-primary/30 transition-all">
                          <div className={`w-2.5 h-2.5 rounded-full bg-${project.color} group-hover/metric:scale-125 transition-transform`} />
                          <span className="text-sm font-semibold">{metric}</span>
                        </div>
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
                    <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all shadow-lg">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
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
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">More to Explore</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Check out my GitHub for additional projects, open-source contributions, and code samples
              </p>
              <Button size="lg" className="group bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
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
