import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Award, Brain, Bot, Eye, Wrench, Cpu, Zap, TrendingUp, Database, BarChart3, Activity, Stethoscope, MessageSquare, Cloud, GraduationCap, Wine, Umbrella, Landmark, Trophy } from "lucide-react";

const Projects = () => {
  const categories = [
    {
      name: "Healthcare & Medical AI",
      icon: Stethoscope,
      projects: [
        {
          title: "AI-Assisted Medical Image Diagnosis",
          subtitle: "Deep Learning Healthcare Pipeline",
          description: "A lightweight medical image analysis tool using Groq Cloud API and LLM-powered vision models to interpret X-ray images with automated preprocessing and GPU optimization.",
          tech: ["Python", "Groq API", "LLM Vision", "Medical Imaging"],
          metrics: ["10K+ Images", "88% Accuracy", "<2s Latency"],
          icon: Brain,
          color: "primary",
          gradient: "from-primary to-secondary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/AI-Assisted-Medical-Image-Diagnosis",
        },
        {
          title: "End-to-End Chest Cancer Classification",
          subtitle: "MLFlow & DVC Pipeline",
          description: "Complete MLOps pipeline for chest cancer classification using MLFlow for experiment tracking and DVC for data version control with automated model training.",
          tech: ["Python", "MLFlow", "DVC", "Deep Learning", "Medical AI"],
          metrics: ["MLOps Pipeline", "Version Control", "Auto-Retraining"],
          icon: Activity,
          color: "secondary",
          gradient: "from-secondary to-accent",
          githubUrl: "https://github.com/patibandlavenkatamanideep/End-to-End-Chest-cancer-Classification-Using-MLFlow-DVC",
          isPrivate: true,
        },
        {
          title: "Complete Medical Chatbot Using LLMs",
          subtitle: "End-to-End LLM Application",
          description: "An intelligent medical chatbot leveraging Large Language Models to provide healthcare information and assistance with natural language understanding.",
          tech: ["Jupyter Notebook", "LLMs", "NLP", "Healthcare", "Apache License"],
          metrics: ["LLM Powered", "Medical Domain", "Conversational AI"],
          icon: MessageSquare,
          color: "accent",
          gradient: "from-accent to-primary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Complete-End-to-End-Medical-Chatbot-Using-LLMs",
        },
      ],
    },
    {
      name: "MLOps & Production Systems",
      icon: Wrench,
      projects: [
        {
          title: "MLOps Wine Quality Prediction",
          subtitle: "End-to-End MLOps Pipeline",
          description: "Complete MLOps pipeline for wine quality prediction covering the entire ML lifecycle — from data preprocessing to model deployment with automated pipelines.",
          tech: ["Jupyter Notebook", "MLOps", "Pipeline", "MIT License"],
          metrics: ["Full Lifecycle", "Auto Pipeline", "Production Ready"],
          icon: Wine,
          color: "primary",
          gradient: "from-primary to-secondary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/End-to-End-MLOps-Pipeline-for-Wine-Quality-Prediction",
        },
        {
          title: "Red Wine Quality Prediction",
          subtitle: "End-to-End ML Project",
          description: "Comprehensive machine learning project for predicting red wine quality based on physicochemical properties with complete data preprocessing and model evaluation.",
          tech: ["Jupyter Notebook", "Python", "scikit-learn", "Data Analysis"],
          metrics: ["Quality Prediction", "Feature Engineering", "Model Comparison"],
          icon: Database,
          color: "secondary",
          gradient: "from-secondary to-accent",
          githubUrl: "https://github.com/patibandlavenkatamanideep/RedWineQualityPrediction_EndtoEnd_MLProject",
        },
        {
          title: "Student Exam Performance Prediction",
          subtitle: "MLOps Implementation",
          description: "MLOps-focused project predicting student exam performance with automated training pipelines, model versioning, and deployment infrastructure.",
          tech: ["Jupyter Notebook", "MLOps", "Python", "Education Analytics"],
          metrics: ["MLOps Ready", "Auto Training", "Performance Metrics"],
          icon: GraduationCap,
          color: "accent",
          gradient: "from-accent to-primary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Student_Exam_Performance_Prediction_Mlops",
        },
      ],
    },
    {
      name: "Computer Vision & Real-Time Systems",
      icon: Eye,
      projects: [
        {
          title: "Sure Step – AI Fall Detection",
          subtitle: "YOLOv8 Computer Vision System",
          description: "AI-powered fall detection system using YOLOv8 that detects person falling and sends immediate alerts to parents or caregivers for emergency assistance.",
          tech: ["YOLOv8", "OpenCV", "AWS Lambda", "Edge Computing", "Real-Time"],
          metrics: ["95% Accuracy", "<3s Latency", "Alert System"],
          icon: Eye,
          color: "primary",
          gradient: "from-primary to-secondary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Sure-Step-Detection-Using-Yolov8",
        },
      ],
    },
    {
      name: "Forecasting & Predictive Analytics",
      icon: TrendingUp,
      projects: [
        {
          title: "Astro Sales Forecasting Pipeline",
          subtitle: "Real-Time Forecasting System",
          description: "Real-time sales forecasting system with Streamlit UI enabling instant predictions, interactive visualizations, and CSV exports using XGBoost, LightGBM, and Ensemble models.",
          tech: ["Python", "Streamlit", "XGBoost", "LightGBM", "Ensemble Models"],
          metrics: ["Real-Time Predictions", "Interactive UI", "CSV Export"],
          icon: TrendingUp,
          color: "primary",
          gradient: "from-primary to-secondary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Astro-SalesForecasting-Pipeline",
        },
        {
          title: "Rainfall Prediction ML",
          subtitle: "Random Forest Classifier",
          description: "Analyzed rainfall dataset from Kaggle with comprehensive data preprocessing, cleaning, transformation, and model training using Random Forest for optimal prediction.",
          tech: ["Jupyter Notebook", "Random Forest", "Data Preprocessing", "Feature Engineering"],
          metrics: ["Kaggle Dataset", "RF Model", "Best Accuracy"],
          icon: Umbrella,
          color: "secondary",
          gradient: "from-secondary to-accent",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Rainfall-Prediction-Using-Machine-Learning",
        },
        {
          title: "Loan Status Prediction",
          subtitle: "Financial ML Model",
          description: "Machine learning model to predict loan approval status using various classification algorithms with comprehensive feature engineering and model evaluation.",
          tech: ["Python", "Machine Learning", "Classification", "Finance"],
          metrics: ["Loan Prediction", "Classification", "Feature Analysis"],
          icon: Landmark,
          color: "accent",
          gradient: "from-accent to-primary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Loan-Status-Prediction",
        },
      ],
    },
    {
      name: "Data Analytics & Business Intelligence",
      icon: BarChart3,
      projects: [
        {
          title: "Business Case Studies Analytics",
          subtitle: "SQL, Python & Visualization",
          description: "Collection of real-world business case studies solved using Statistical Analysis, SQL, Python, and Data Visualization with actionable insights for decision making.",
          tech: ["Jupyter Notebook", "SQL", "Python", "Statistical Analysis", "Visualization"],
          metrics: ["Real-World Cases", "Multi-Tool", "1 Star"],
          icon: BarChart3,
          color: "primary",
          gradient: "from-primary to-secondary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Business_Case_Studies---Analytics",
        },
        {
          title: "Cricket Data Analytics",
          subtitle: "T20 World Cup Dashboard",
          description: "Power BI dashboard for T-20 Cricket World Cup data analysis. Easily analyze match data, player statistics, and team performance with interactive visualizations.",
          tech: ["Power BI", "Data Analytics", "Sports Analytics", "Dashboard"],
          metrics: ["T20 World Cup", "Interactive Dashboard", "Match Analysis"],
          icon: Trophy,
          color: "secondary",
          gradient: "from-secondary to-accent",
          githubUrl: "https://github.com/patibandlavenkatamanideep/cricket-data-analytics",
        },
      ],
    },
    {
      name: "Automation & LLM Applications",
      icon: Bot,
      projects: [
        {
          title: "Automated Job Application System",
          subtitle: "LLM-Powered Workflow Automation",
          description: "Intelligent automation with GPT-4 APIs for resume optimization and skills extraction, reducing manual effort by 90% through multi-stage LLM pipeline and workflow orchestration.",
          tech: ["n8n", "GPT-4", "OpenAI API", "Workflow Automation", "LLM Pipeline"],
          metrics: ["90% Effort Reduction", "Multi-stage LLM", "Auto Optimization"],
          icon: Bot,
          color: "primary",
          gradient: "from-primary to-secondary",
        },
        {
          title: "Predictive Maintenance System",
          subtitle: "Time-Series Forecasting Infrastructure",
          description: "LSTM forecasting solution with automated retraining, improving accuracy by 30% and reducing maintenance costs by 40% through AWS-based distributed infrastructure.",
          tech: ["LSTM", "AWS Step Functions", "CloudWatch", "Time-Series Analysis"],
          metrics: ["30% Better Accuracy", "40% Cost Reduction", "Auto-Retraining"],
          icon: Cloud,
          color: "secondary",
          gradient: "from-secondary to-accent",
        },
      ],
    },
  ];

  const totalProjects = categories.reduce((acc, cat) => acc + cat.projects.length, 0);

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
            { label: "Total Projects", value: `${totalProjects}+`, icon: Cpu },
            { label: "Categories", value: categories.length.toString(), icon: Database },
            { label: "Best Accuracy", value: "95%", icon: Zap },
            { label: "Cost Reduction", value: "40%", icon: Award },
          ].map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-105 text-center group">
              <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16 animate-fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-sm text-muted-foreground">{category.projects.length} project{category.projects.length > 1 ? 's' : ''}</p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden flex flex-col"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Private badge */}
                  {project.isPrivate && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-muted/80 text-muted-foreground text-xs rounded-md">
                      Private
                    </div>
                  )}

                  <div className="relative flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br from-${project.color}/20 to-${project.color}/10 border border-${project.color}/30 group-hover:scale-110 transition-transform`}>
                        <project.icon className={`h-5 w-5 text-${project.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className={`text-${project.color} text-sm font-medium mt-1`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-${project.color}/15 to-${project.color}/5 border border-${project.color}/20 text-xs font-semibold`}>
                          <Zap className={`h-3 w-3 text-${project.color}`} />
                          {metric}
                        </div>
                      ))}
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
                      {project.githubUrl && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          Code
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 border-secondary/30 hover:bg-secondary/10 hover:scale-105 transition-all"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* GitHub Profile CTA */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Open Source</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Explore All Repositories</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Check out my GitHub for more projects, contributions, and code samples
              </p>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                onClick={() => window.open('https://github.com/patibandlavenkatamanideep?tab=repositories', '_blank')}
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View All Repositories
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
