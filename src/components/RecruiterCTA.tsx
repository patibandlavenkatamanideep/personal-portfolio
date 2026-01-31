import { Button } from "@/components/ui/button";
import { Download, Mail, Sparkles, ArrowRight } from "lucide-react";

interface RecruiterCTAProps {
  variant?: "compact" | "full";
}

const RecruiterCTA = ({ variant = "full" }: RecruiterCTAProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          <span className="font-semibold">Looking to hire?</span>
        </div>
        <div className="flex gap-3">
          <Button 
            asChild
            size="sm" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            <a href="/Venkata_Manideep_Resume.pdf" download="Venkata_Manideep_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={scrollToContact}
            className="border-primary/30 hover:bg-primary/10"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-md overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
      
      <div className="relative text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold">Open for Opportunities</span>
        </div>
        
        <h3 className="text-3xl font-bold mb-4">
          Interested in Working Together?
        </h3>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Currently seeking full-time opportunities in <span className="text-foreground font-semibold">Data Science</span>, <span className="text-foreground font-semibold">Machine Learning Engineering</span>, and <span className="text-foreground font-semibold">MLOps</span> roles.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            asChild
            size="lg" 
            className="group bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <a href="/Venkata_Manideep_Resume.pdf" download="Venkata_Manideep_Resume.pdf">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToContact}
            className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-lg hover:scale-105 transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterCTA;
