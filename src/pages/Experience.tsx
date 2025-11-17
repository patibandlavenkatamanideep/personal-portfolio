import { Briefcase, Calendar } from "lucide-react";

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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            3+ years of building data-driven solutions and ML systems
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-${exp.color} border-4 border-background hidden md:block`} />

                <div className="md:ml-20 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-[1.02] group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-secondary font-medium mb-1">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${exp.color}/10 border border-${exp.color}/20 text-sm font-medium whitespace-nowrap`}>
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${exp.color} flex-shrink-0`} />
                        <span className="text-muted-foreground leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
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
