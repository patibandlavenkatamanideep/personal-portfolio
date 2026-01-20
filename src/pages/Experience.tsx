import { Briefcase, Calendar, MapPin, TrendingUp, CheckCircle2, Zap, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Infosoft Solutions",
      location: "Windsor, New Jersey",
      role: "Data Analyst",
      period: "Aug 2025 – Present",
      type: "Full-time",
      responsibilities: [
        "Designed and optimized SQL-based data warehouse architectures processing 10k+ records/day, improving query performance by 45% through efficient schema design and data modeling",
        "Applied Python (Pandas, NumPy, SciPy) and statistical analysis to large datasets (5K+ records), enabling predictive and diagnostic analytics with 92% model accuracy",
        "Developed Tableau dashboards and analytical reports across 8+ business units, delivering actionable insights to stakeholders through interactive visualizations",
      ],
      highlights: ["92% Accuracy", "45% Query Perf ↑", "8+ Business Units"],
      color: "primary",
    },
    {
      company: "Ion Technology Solutions",
      location: "Vijayawada, India",
      role: "Data Analyst Intern",
      period: "Nov 2022 – Feb 2023",
      type: "Internship",
      responsibilities: [
        "Designed SQL-based data pipelines using Python (Pandas, NumPy), processing 50K+ records with data preparation, transformation, cleaning, and validation techniques ensuring data quality",
        "Conducted data mining and exploratory data analysis using statistical packages; analyzed datasets paying attention to trends and patterns",
        "Extracted insights supporting business recommendations and diagnostic analytics efforts",
      ],
      highlights: ["50K+ Records", "Data Pipelines", "EDA & Analytics"],
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-full mb-6 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium">Career Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Experience
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-50 -z-10" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building production ML systems and scalable data pipelines
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line with gradient animation */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block rounded-full opacity-40" />
          <div className="absolute left-8 top-0 h-24 w-1 bg-gradient-to-b from-primary to-transparent hidden md:block rounded-full animate-pulse" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Timeline dot with pulse */}
                <div className="absolute left-6 hidden md:block z-10">
                  <div className={`w-7 h-7 rounded-full bg-${exp.color} border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300`} />
                  <div className={`absolute inset-0 w-7 h-7 rounded-full bg-${exp.color} animate-ping opacity-20`} />
                </div>

                <div className="md:ml-24 relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${exp.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${exp.color}/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        {/* Role title with icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br from-${exp.color}/20 to-${exp.color}/10 border border-${exp.color}/30 shadow-lg`}>
                            <Briefcase className={`h-5 w-5 text-${exp.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Building2 className="h-4 w-4 text-secondary" />
                              <span className="text-secondary font-semibold">{exp.company}</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${exp.color}/20 text-${exp.color} border border-${exp.color}/30`}>
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>

                        {/* Key Highlights Pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-${exp.color}/20 to-${exp.color}/10 border border-${exp.color}/30 text-sm font-semibold shadow-sm`}
                            >
                              <Zap className={`h-3.5 w-3.5 text-${exp.color}`} />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-${exp.color}/20 to-${exp.color}/10 border border-${exp.color}/30 text-sm font-semibold whitespace-nowrap backdrop-blur-sm shadow-lg`}>
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-4 group/item">
                          <div className={`mt-1 p-1.5 rounded-lg bg-${exp.color}/20 border border-${exp.color}/30 flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle2 className={`h-4 w-4 text-${exp.color}`} />
                          </div>
                          <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { label: "Model Accuracy", value: "92%", icon: TrendingUp },
            { label: "Query Perf Gain", value: "45%", icon: Zap },
            { label: "Companies", value: "2", icon: Building2 },
            { label: "Records Processed", value: "50K+", icon: Calendar },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-105 text-center group">
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;