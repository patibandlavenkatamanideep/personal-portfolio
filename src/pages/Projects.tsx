import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-ready ML systems delivering real-world impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-[1.01] animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full bg-${project.color}/10 border border-${project.color}/20 text-${project.color} text-xs font-medium mb-3`}>
                        Machine Learning
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-${project.color} font-medium mb-3`}>
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-${project.color}`} />
                          <span className="text-sm font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex lg:flex-col gap-3">
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90`}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/30">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-secondary/30">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-2xl font-bold mb-3">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for additional projects and contributions
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
