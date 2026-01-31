import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Zap, TrendingUp, Brain, Eye, BarChart3, MessageSquare, Wine, Play } from "lucide-react";

interface FeaturedProject {
  title: string;
  tagline: string;
  story: string;
  tech: string[];
  impact: string;
  githubUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  hasDemo?: boolean;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "Astro Sales Forecasting Pipeline",
    tagline: "Real-Time ML Forecasting",
    story: "Built a real-time sales forecasting system using XGBoost & LightGBM; deployed interactive Streamlit dashboard; improved forecast accuracy by 15%.",
    tech: ["Python", "Streamlit", "XGBoost", "LightGBM", "Ensemble Models"],
    impact: "15% Better Accuracy",
    githubUrl: "https://github.com/patibandlavenkatamanideep/Astro-SalesForecasting-Pipeline",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    hasDemo: true,
  },
  {
    title: "Sure Step – AI Fall Detection",
    tagline: "YOLOv8 Computer Vision",
    story: "Developed real-time fall detection using YOLOv8 with 95% accuracy; sends instant alerts to caregivers; reduced inference costs by 40% via edge optimization.",
    tech: ["YOLOv8", "OpenCV", "AWS Lambda", "Edge Computing"],
    impact: "95% Accuracy, <3s Alerts",
    githubUrl: "https://github.com/patibandlavenkatamanideep/Sure-Step-Detection-Using-Yolov8",
    icon: Eye,
    gradient: "from-purple-500 to-pink-500",
    hasDemo: true,
  },
  {
    title: "Complete Medical Chatbot Using LLMs",
    tagline: "End-to-End LLM Application",
    story: "Created an intelligent healthcare chatbot leveraging Large Language Models for 24/7 medical information with safety guardrails and source citations.",
    tech: ["LLMs", "NLP", "RAG", "Healthcare AI"],
    impact: "24/7 Medical Assistance",
    githubUrl: "https://github.com/patibandlavenkatamanideep/Complete-End-to-End-Medical-Chatbot-Using-LLMs",
    icon: MessageSquare,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Business Case Studies Analytics",
    tagline: "SQL, Python & Visualization",
    story: "Comprehensive collection of real-world business case studies solved using SQL, Python, and data visualization with actionable insights for decision making.",
    tech: ["SQL", "Python", "Statistical Analysis", "Power BI"],
    impact: "Multi-Industry Solutions",
    githubUrl: "https://github.com/patibandlavenkatamanideep/Business_Case_Studies---Analytics",
    icon: BarChart3,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "End-to-End MLOps Wine Quality",
    tagline: "Complete ML Lifecycle",
    story: "Production MLOps pipeline covering data ingestion to deployment; automated retraining, model versioning, and monitoring; reduced deployment time by 70%.",
    tech: ["MLFlow", "DVC", "Docker", "CI/CD", "AWS"],
    impact: "70% Faster Deployment",
    githubUrl: "https://github.com/patibandlavenkatamanideep/End-to-End-MLOps-Pipeline-for-Wine-Quality-Prediction",
    icon: Wine,
    gradient: "from-red-500 to-rose-500",
  },
  {
    title: "Red Wine Quality Prediction",
    tagline: "End-to-End ML Project",
    story: "Comprehensive ML project predicting wine quality from physicochemical properties; multiple algorithm comparison; achieved high accuracy with interpretable results.",
    tech: ["Python", "scikit-learn", "Feature Engineering", "EDA"],
    impact: "Production-Ready Model",
    githubUrl: "https://github.com/patibandlavenkatamanideep/RedWineQualityPrediction_EndtoEnd_MLProject",
    icon: Brain,
    gradient: "from-violet-500 to-purple-500",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
          <Star className="h-6 w-6 text-yellow-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <p className="text-sm text-muted-foreground">High-impact projects with business value & deployment</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-md border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
            >
              {/* Featured badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">Featured</span>
              </div>

              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20 border border-white/10 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0 pr-16">
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Story - Problem → Approach → Results format */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.story}
              </p>

              {/* Impact highlight */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-primary/15 to-secondary/10 border border-primary/20 mb-4">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{project.impact}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md bg-muted/50 text-xs font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 rounded-md bg-muted/30 text-xs text-muted-foreground">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto pt-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  View Code
                </Button>
                {project.hasDemo && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-secondary/30 hover:bg-secondary/10 hover:scale-105 transition-all"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Play className="mr-1 h-3.5 w-3.5" />
                    Demo
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProjects;
