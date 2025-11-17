import { Code, Database, Cloud, Wrench, Brain, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Competencies",
      icon: Brain,
      color: "primary",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Statistical Analysis",
        "Data Science",
        "Business Analytics",
        "MLOps",
        "Cloud Deployment",
        "Big Data (PySpark, Spark)",
      ],
    },
    {
      title: "Programming & Data",
      icon: Code,
      color: "secondary",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Statsmodels",
        "TensorFlow",
      ],
    },
    {
      title: "Databases & Analytics",
      icon: Database,
      color: "accent",
      skills: [
        "SQL (MySQL, PostgreSQL)",
        "BigQuery",
        "Snowflake",
        "Tableau",
        "Excel",
        "Data Warehousing",
        "ETL Pipelines",
      ],
    },
    {
      title: "Cloud & Deployment",
      icon: Cloud,
      color: "primary",
      skills: [
        "AWS (Lambda, S3, SageMaker)",
        "Docker",
        "Flask",
        "Streamlit",
        "FastAPI",
        "CI/CD",
        "Git/GitHub",
      ],
    },
    {
      title: "ML Tools & Frameworks",
      icon: TrendingUp,
      color: "secondary",
      skills: [
        "MLflow",
        "OpenCV",
        "YOLO",
        "ResNet",
        "Grad-CAM",
        "Model Monitoring",
        "Feature Engineering",
      ],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "accent",
      skills: [
        "Jupyter Notebook",
        "Google Colab",
        "VS Code",
        "Postman",
        "Linux/Unix",
        "Agile/Scrum",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills
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
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-[1.02] group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}>
                    <Icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Proficiencies</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { name: "Python & ML Libraries", level: 95, color: "primary" },
              { name: "SQL & Data Warehousing", level: 90, color: "secondary" },
              { name: "AWS Cloud Services", level: 85, color: "accent" },
              { name: "MLOps & Model Deployment", level: 88, color: "primary" },
              { name: "Data Visualization", level: 92, color: "secondary" },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`text-${skill.color} font-bold`}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/60 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
