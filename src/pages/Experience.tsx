import { Briefcase, Calendar, MapPin, TrendingUp, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "One Community Global",
      location: "New Haven, CT",
      role: "Data Analyst Intern",
      period: "July 2025 – September 2025",
      responsibilities: [
        "Built SQL pipelines in Snowflake for ML-ready datasets",
        "Automated Tableau dashboards for ML insights",
        "Integrated feature engineering & production workflow data prep",
      ],
      color: "primary",
    },
    {
      company: "Happiest Minds Technology",
      location: "Bengaluru, India",
      role: "Data Analyst",
      period: "July 2021 – December 2023",
      responsibilities: [
        "Automated CI/CD-driven data pipelines",
        "Built executive dashboards (25% engagement increase)",
        "Conducted A/B testing & statistical analysis for operational optimization",
      ],
      color: "secondary",
    },
    {
      company: "ION Technology Solutions",
      location: "Vijayawada, India",
      role: "Data Analyst Intern",
      period: "January 2021 – June 2021",
      responsibilities: [
        "Developed SQL queries with CTEs and window functions",
        "Performed exploratory analysis using Python",
        "Improved workflow efficiency by 20%",
      ],
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
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
            3+ years of building data-driven solutions and ML systems
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block rounded-full opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Timeline dot with pulse */}
                <div className="absolute left-6 hidden md:block">
                  <div className={`w-7 h-7 rounded-full bg-${exp.color} border-4 border-background shadow-lg group-hover:scale-125 transition-transform`} />
                  <div className={`absolute inset-0 w-7 h-7 rounded-full bg-${exp.color} animate-ping opacity-20`} />
                </div>

                <div className="md:ml-24 group relative p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-[1.01] hover:shadow-2xl">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${exp.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <div className="flex items-center gap-2 text-secondary font-semibold">
                            <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                              <Briefcase className="h-4 w-4" />
                            </div>
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
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
                          <div className={`mt-1 p-1.5 rounded-lg bg-${exp.color}/20 border border-${exp.color}/30 flex-shrink-0`}>
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
      </div>
    </div>
  );
};

export default Experience;
