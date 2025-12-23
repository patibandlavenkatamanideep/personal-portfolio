import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Sparkles, Award, Brain, Bot, Eye, Wrench, Cpu, Zap, TrendingUp, Database, BarChart3, Activity, Stethoscope, MessageSquare, Cloud, GraduationCap, Wine, Umbrella, Landmark, Trophy, Target, CheckCircle2, Layers, Clock, X } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  gradient: string;
  githubUrl?: string;
  isPrivate?: boolean;
  details?: {
    problem: string;
    solution: string;
    features: string[];
    impact: string[];
    timeline?: string;
  };
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          details: {
            problem: "Medical professionals need quick and accurate assistance in interpreting X-ray images, but traditional methods are time-consuming and prone to human error.",
            solution: "Developed an AI-powered diagnostic tool that leverages Groq Cloud API and advanced LLM vision models to provide rapid, accurate medical image analysis with sub-2-second response times.",
            features: [
              "Automated image preprocessing pipeline",
              "GPU-optimized inference for real-time analysis",
              "RESTful API for seamless integration",
              "Support for multiple X-ray image formats",
              "Confidence scoring for predictions",
              "CI/CD pipeline for continuous deployment"
            ],
            impact: [
              "Processed 10,000+ medical images",
              "Achieved 88% diagnostic accuracy",
              "Reduced analysis time from minutes to seconds",
              "Enabled faster clinical decision-making"
            ],
            timeline: "3 months"
          }
        },
        {
          title: "End-to-End Chicken Disease Classification",
          subtitle: "CNN with AWS Deployment",
          description: "Deep learning pipeline for classifying chicken diseases using CNN and TensorFlow, with complete MLOps workflow including DVC, Docker containerization, and AWS deployment via CI/CD.",
          tech: ["Python 3.8", "TensorFlow", "Keras", "CNN", "Flask", "DVC", "Docker", "AWS EC2", "AWS ECR", "GitHub Actions"],
          metrics: ["CNN Model", "AWS Deployed", "CI/CD Pipeline"],
          icon: Activity,
          color: "secondary",
          gradient: "from-secondary to-accent",
          githubUrl: "https://github.com/patibandlavenkatamanideep/EndtoEnd_Chicken_Disease_Classification",
          details: {
            problem: "Poultry farmers face significant losses due to undetected chicken diseases, and manual identification is time-consuming and requires expert knowledge.",
            solution: "Built an end-to-end deep learning solution using CNN for automated chicken disease classification with production-ready deployment on AWS infrastructure.",
            features: [
              "CNN-based image classification model",
              "TensorFlow/Keras deep learning pipeline",
              "Flask web application for inference",
              "DVC for data and model versioning",
              "Docker containerization",
              "AWS EC2 & ECR deployment",
              "GitHub Actions CI/CD pipeline"
            ],
            impact: [
              "Automated disease detection",
              "Production-ready AWS deployment",
              "Reproducible ML workflow with DVC",
              "Scalable containerized solution"
            ],
            timeline: "3 months"
          }
        },
        {
          title: "End-to-End Chest Cancer Classification",
          subtitle: "MLFlow & DVC Pipeline",
          description: "Complete MLOps pipeline for chest cancer classification using MLFlow for experiment tracking and DVC for data version control with automated model training.",
          tech: ["Python", "MLFlow", "DVC", "Deep Learning", "Medical AI"],
          metrics: ["MLOps Pipeline", "Version Control", "Auto-Retraining"],
          icon: Activity,
          color: "accent",
          gradient: "from-accent to-primary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/End-to-End-Chest-cancer-Classification-Using-MLFlow-DVC",
          isPrivate: true,
          details: {
            problem: "Cancer classification models require rigorous version control and experiment tracking to ensure reproducibility and continuous improvement in healthcare settings.",
            solution: "Built a production-grade MLOps pipeline with MLFlow for experiment tracking and DVC for data versioning, enabling automated retraining and model deployment.",
            features: [
              "MLFlow experiment tracking & model registry",
              "DVC for data and model version control",
              "Automated model retraining pipeline",
              "Deep learning classification model",
              "Reproducible training workflows",
              "Model performance monitoring"
            ],
            impact: [
              "Fully reproducible ML experiments",
              "Automated model versioning",
              "Streamlined deployment process",
              "Improved model governance"
            ],
            timeline: "4 months"
          }
        },
        {
          title: "Complete Medical Chatbot Using LLMs",
          subtitle: "End-to-End LLM Application",
          description: "An intelligent medical chatbot leveraging Large Language Models to provide healthcare information and assistance with natural language understanding.",
          tech: ["Jupyter Notebook", "LLMs", "NLP", "Healthcare", "Apache License"],
          metrics: ["LLM Powered", "Medical Domain", "Conversational AI"],
          icon: MessageSquare,
          color: "primary",
          gradient: "from-primary to-secondary",
          githubUrl: "https://github.com/patibandlavenkatamanideep/Complete-End-to-End-Medical-Chatbot-Using-LLMs",
          details: {
            problem: "Patients often have medical questions but lack immediate access to healthcare professionals, leading to anxiety and delayed care.",
            solution: "Created an LLM-powered chatbot that provides accurate, conversational medical information while maintaining appropriate disclaimers for professional consultation.",
            features: [
              "Natural language understanding",
              "Medical knowledge base integration",
              "Context-aware conversations",
              "Safety guardrails for medical advice",
              "Multi-turn dialogue management",
              "Source citation for information"
            ],
            impact: [
              "24/7 medical information access",
              "Reduced burden on healthcare staff",
              "Improved patient education",
              "Scalable healthcare assistance"
            ],
            timeline: "2 months"
          }
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
          details: {
            problem: "Traditional ML projects lack proper versioning, monitoring, and automated deployment, making them difficult to maintain in production environments.",
            solution: "Implemented a complete MLOps pipeline demonstrating best practices for the entire ML lifecycle from data ingestion to production deployment.",
            features: [
              "Data ingestion and validation",
              "Feature engineering pipeline",
              "Model training with hyperparameter tuning",
              "Model registry and versioning",
              "Automated testing and validation",
              "Production deployment automation"
            ],
            impact: [
              "Reduced deployment time by 70%",
              "Enabled reproducible experiments",
              "Automated model monitoring",
              "MIT licensed for community use"
            ],
            timeline: "3 months"
          }
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
          details: {
            problem: "Wine quality assessment is traditionally subjective and requires expert sommeliers, making it inaccessible and inconsistent.",
            solution: "Developed a predictive model using physicochemical properties to objectively assess wine quality with high accuracy.",
            features: [
              "Comprehensive EDA and visualization",
              "Feature engineering and selection",
              "Multiple algorithm comparison",
              "Cross-validation and hyperparameter tuning",
              "Model performance benchmarking",
              "Interpretable predictions"
            ],
            impact: [
              "Objective quality assessment",
              "Consistent rating system",
              "Cost-effective quality control",
              "Data-driven decision making"
            ],
            timeline: "2 months"
          }
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
          details: {
            problem: "Educational institutions struggle to identify at-risk students early enough to provide effective intervention and support.",
            solution: "Built a predictive system with MLOps practices to forecast student performance and enable proactive educational support.",
            features: [
              "Student data preprocessing",
              "Performance prediction models",
              "Automated training pipelines",
              "Model versioning and tracking",
              "Early warning indicators",
              "Intervention recommendations"
            ],
            impact: [
              "Early identification of at-risk students",
              "Data-driven intervention strategies",
              "Improved student outcomes",
              "Scalable across institutions"
            ],
            timeline: "2 months"
          }
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
          details: {
            problem: "Falls are a leading cause of injury among elderly and individuals with mobility issues, and delayed response can lead to severe complications.",
            solution: "Developed a real-time fall detection system using YOLOv8 that instantly alerts caregivers, significantly reducing emergency response time.",
            features: [
              "YOLOv8-based pose estimation",
              "Real-time video stream processing",
              "AWS Lambda for serverless deployment",
              "Instant alert notifications",
              "Model quantization for edge devices",
              "40% reduced inference costs"
            ],
            impact: [
              "95% fall detection accuracy",
              "Sub-3 second alert latency",
              "40% reduction in inference costs",
              "Enhanced elderly safety monitoring"
            ],
            timeline: "4 months"
          }
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
          details: {
            problem: "Businesses need accurate sales forecasts to optimize inventory, staffing, and resource allocation, but traditional methods are often slow and inaccurate.",
            solution: "Built a real-time forecasting system with an intuitive Streamlit interface that provides instant, accurate sales predictions using ensemble ML models.",
            features: [
              "Streamlit interactive dashboard",
              "XGBoost and LightGBM models",
              "Ensemble prediction methods",
              "Real-time forecast updates",
              "Interactive visualizations",
              "CSV export functionality"
            ],
            impact: [
              "Instant sales predictions",
              "Improved inventory planning",
              "User-friendly interface",
              "Data-driven business decisions"
            ],
            timeline: "2 months"
          }
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
          details: {
            problem: "Accurate rainfall prediction is crucial for agriculture, disaster preparedness, and water resource management but requires sophisticated analysis.",
            solution: "Developed a Random Forest-based prediction model with comprehensive data preprocessing to accurately forecast rainfall patterns.",
            features: [
              "Comprehensive data cleaning",
              "Feature engineering pipeline",
              "Random Forest classification",
              "Cross-validation analysis",
              "Model performance metrics",
              "Kaggle dataset integration"
            ],
            impact: [
              "High prediction accuracy",
              "Agricultural planning support",
              "Disaster preparedness",
              "Water resource optimization"
            ],
            timeline: "1 month"
          }
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
          details: {
            problem: "Manual loan approval processes are time-consuming and can be inconsistent, leading to delays and potential bias in lending decisions.",
            solution: "Created an ML model that predicts loan approval status based on applicant features, enabling faster and more consistent lending decisions.",
            features: [
              "Applicant data analysis",
              "Feature engineering for finance",
              "Multiple classification algorithms",
              "Model comparison and selection",
              "Risk score generation",
              "Interpretable predictions"
            ],
            impact: [
              "Faster loan processing",
              "Consistent approval criteria",
              "Reduced manual effort",
              "Risk-aware lending"
            ],
            timeline: "1 month"
          }
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
          details: {
            problem: "Business decisions often lack data-driven insights due to the complexity of analyzing diverse datasets and extracting actionable intelligence.",
            solution: "Compiled a portfolio of real-world case studies demonstrating end-to-end analytics workflows using SQL, Python, and visualization tools.",
            features: [
              "Real-world business scenarios",
              "SQL query analysis",
              "Python data processing",
              "Statistical hypothesis testing",
              "Interactive visualizations",
              "Actionable recommendations"
            ],
            impact: [
              "Demonstrated analytical skills",
              "Multi-tool proficiency",
              "Industry-relevant solutions",
              "Community recognition (starred)"
            ],
            timeline: "Ongoing"
          }
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
          details: {
            problem: "Cricket fans and analysts need accessible tools to explore match statistics and player performance across tournaments.",
            solution: "Built an interactive Power BI dashboard that enables comprehensive analysis of T20 World Cup data with intuitive visualizations.",
            features: [
              "Interactive Power BI dashboard",
              "Match-by-match analysis",
              "Player performance metrics",
              "Team comparison charts",
              "Historical trend analysis",
              "Filtering and drill-down"
            ],
            impact: [
              "Easy data exploration",
              "Visual storytelling",
              "Fan engagement",
              "Sports analytics showcase"
            ],
            timeline: "1 month"
          }
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
          githubUrl: "https://github.com/patibandlavenkatamanideep",
          details: {
            problem: "Job seekers spend countless hours manually tailoring resumes and applications for each position, leading to fatigue and missed opportunities.",
            solution: "Architected an intelligent automation system using GPT-4 that automates resume optimization and skills extraction through a multi-stage LLM pipeline.",
            features: [
              "n8n workflow orchestration",
              "GPT-4 powered analysis",
              "Resume optimization engine",
              "Skills extraction and matching",
              "Multi-stage LLM pipeline",
              "Automated application tracking"
            ],
            impact: [
              "90% reduction in manual effort",
              "Consistent resume quality",
              "Faster application turnaround",
              "Improved job match rates"
            ],
            timeline: "2 months"
          }
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
          githubUrl: "https://github.com/patibandlavenkatamanideep",
          details: {
            problem: "Industrial equipment failures cause significant downtime and costs, but traditional scheduled maintenance is inefficient and often too late.",
            solution: "Developed an LSTM-based forecasting system that predicts equipment failures before they occur, enabling proactive maintenance.",
            features: [
              "LSTM time-series forecasting",
              "AWS Step Functions orchestration",
              "CloudWatch monitoring",
              "Automated model retraining",
              "Failure prediction alerts",
              "Distributed processing"
            ],
            impact: [
              "30% improvement in prediction accuracy",
              "40% reduction in maintenance costs",
              "Minimized unplanned downtime",
              "Optimized maintenance schedules"
            ],
            timeline: "4 months"
          }
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
                        onClick={() => setSelectedProject(project)}
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

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card to-card/95 border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-${selectedProject.color}/20 to-${selectedProject.color}/10 border border-${selectedProject.color}/30`}>
                    <selectedProject.icon className={`h-6 w-6 text-${selectedProject.color}`} />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                    <p className={`text-${selectedProject.color} font-medium mt-1`}>{selectedProject.subtitle}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div key={idx} className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-${selectedProject.color}/15 to-${selectedProject.color}/5 border border-${selectedProject.color}/20 font-semibold`}>
                      <Zap className={`h-4 w-4 text-${selectedProject.color}`} />
                      {metric}
                    </div>
                  ))}
                  {selectedProject.details?.timeline && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border font-semibold">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {selectedProject.details.timeline}
                    </div>
                  )}
                </div>

                {selectedProject.details && (
                  <>
                    {/* Problem */}
                    <div className="p-4 rounded-xl bg-muted/30 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-destructive" />
                        <h4 className="font-semibold">The Problem</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{selectedProject.details.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">The Solution</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{selectedProject.details.solution}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Layers className="h-5 w-5 text-secondary" />
                        <h4 className="font-semibold">Key Features</h4>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {selectedProject.details.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/20 border border-border/50">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-5 w-5 text-accent" />
                        <h4 className="font-semibold">Impact & Results</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details.impact.map((item, idx) => (
                          <div key={idx} className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="h-5 w-5 text-muted-foreground" />
                    <h4 className="font-semibold">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {selectedProject.githubUrl && (
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
