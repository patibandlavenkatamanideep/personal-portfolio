import { Code, Database, Cloud, Wrench, Brain, TrendingUp, Sparkles, Zap, Bot, BarChart3, Award, ExternalLink } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & ML",
      icon: Code,
      color: "primary",
      skills: [
        "Python",
        "SQL",
        "Machine Learning",
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Feature Engineering",
      ],
    },
    {
      title: "AI & LLM",
      icon: Bot,
      color: "secondary",
      skills: [
        "Generative AI",
        "Large Language Models",
        "RAG",
        "NLP",
        "Prompt Engineering",
        "Agentic AI",
      ],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      color: "accent",
      skills: [
        "Tableau",
        "Power BI",
        "A/B Testing",
        "Predictive Modeling",
        "Statistics",
        "Probability",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "primary",
      skills: [
        "AWS",
        "Data Pipelines",
        "ETL",
        "Docker",
        "Streamlit",
      ],
    },
    {
      title: "MLOps & DevOps",
      icon: TrendingUp,
      color: "secondary",
      skills: [
        "MLflow",
        "MLOps",
        "CI/CD",
        "REST APIs",
        "FastAPI",
      ],
    },
    {
      title: "Deep Learning",
      icon: Brain,
      color: "accent",
      skills: [
        "Deep Learning",
        "CNNs",
        "Computer Vision",
        "OpenCV",
        "Model Evaluation",
      ],
    },
  ];

  const certifications = [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      icon: "📊",
    },
    {
      name: "IBM RAG and Agentic AI Professional Certificate",
      issuer: "IBM",
      icon: "🤖",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-full mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Technical Arsenal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-50 -z-10" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the data science and ML engineering stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-[1.03] hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${category.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 group-hover:from-${category.color}/30 group-hover:to-${category.color}/20 transition-all border border-${category.color}/20 shadow-lg`}>
                      <Icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-muted/50 backdrop-blur-sm text-sm font-medium border border-border hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default hover:scale-105 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Proficiency Levels */}
        <div className="mt-16 relative p-10 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border animate-fade-in overflow-hidden">
          <div className="absolute top-4 right-4">
            <Sparkles className="h-6 w-6 text-primary/30 animate-pulse" />
          </div>
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Key Proficiencies</h2>
              <p className="text-muted-foreground">Expert-level mastery in core technologies</p>
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { name: "Python & ML Libraries", level: 95, color: "primary" },
                { name: "SQL & Data Warehousing", level: 92, color: "secondary" },
                { name: "AWS & Azure Cloud", level: 88, color: "accent" },
                { name: "LLM & RAG Workflows", level: 90, color: "primary" },
                { name: "Data Visualization (Tableau/Power BI)", level: 92, color: "secondary" },
              ].map((skill, index) => (
                <div key={index} className="group space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.name}</span>
                    <span className={`text-${skill.color} font-bold text-xl px-3 py-1 rounded-lg bg-${skill.color}/10 border border-${skill.color}/20`}>{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div
                      className={`h-full bg-gradient-to-r from-${skill.color} via-${skill.color} to-${skill.color}/70 rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:shadow-lg`}
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-float" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mt-16 relative p-10 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border animate-fade-in overflow-hidden">
          <div className="absolute top-4 right-4">
            <Award className="h-6 w-6 text-accent/30 animate-pulse" />
          </div>
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Professional Certifications</h2>
              <p className="text-muted-foreground">Industry-recognized credentials</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border hover:border-primary/40 transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
