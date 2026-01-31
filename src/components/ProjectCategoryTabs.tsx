import { useState } from "react";
import { Stethoscope, Wrench, Eye, TrendingUp, BarChart3, Bot, Layers } from "lucide-react";

interface Category {
  id: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const categories: Category[] = [
  { id: "all", name: "All Projects", shortName: "All", icon: Layers, description: "View all projects" },
  { id: "healthcare", name: "Healthcare & Medical AI", shortName: "Healthcare", icon: Stethoscope, description: "Medical imaging & healthcare AI" },
  { id: "mlops", name: "MLOps & Production", shortName: "MLOps", icon: Wrench, description: "Production ML systems" },
  { id: "cv", name: "Computer Vision", shortName: "CV", icon: Eye, description: "Image & video analysis" },
  { id: "forecasting", name: "Forecasting & Analytics", shortName: "Analytics", icon: TrendingUp, description: "Predictive modeling" },
  { id: "bi", name: "Business Intelligence", shortName: "BI", icon: BarChart3, description: "Data analytics & dashboards" },
  { id: "nlp", name: "NLP & Automation", shortName: "NLP", icon: Bot, description: "Language models & automation" },
];

interface ProjectCategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const ProjectCategoryTabs = ({ activeCategory, onCategoryChange }: ProjectCategoryTabsProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 justify-center p-2 rounded-2xl bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md border border-border">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
                ${isActive 
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg scale-105" 
                  : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                }
              `}
            >
              <Icon className={`h-4 w-4 ${isActive ? "" : "opacity-70"}`} />
              <span className="hidden sm:inline">{category.shortName}</span>
              <span className="sm:hidden">{category.shortName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { ProjectCategoryTabs, categories };
export type { Category };
