import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Sparkles, Code2, Database, CloudCog, Brain, TrendingUp, Rocket } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import TypeWriter from "@/components/TypeWriter";

const Home = () => {
  const { toast } = useToast();
  const [launchingPlatform, setLaunchingPlatform] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSocialClick = (platform: string, url: string) => {
    setLaunchingPlatform(platform);
    
    toast({
      title: (
        <div className="flex items-center gap-2">
          <Rocket className="h-4 w-4 animate-bounce" />
          <span>Launching {platform}...</span>
        </div>
      ) as any,
      description: "Opening in new tab",
    });

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setLaunchingPlatform(null);
    }, 800);
  };


  const floatingSkills = [
    { icon: Brain, label: "Machine Learning", color: "primary", position: "top-20 right-[15%]", delay: "0s" },
    { icon: Code2, label: "Python", color: "secondary", position: "top-40 right-[8%]", delay: "0.5s" },
    { icon: Database, label: "SQL", color: "accent", position: "bottom-32 right-[12%]", delay: "1s" },
    { icon: CloudCog, label: "AWS", color: "primary", position: "bottom-20 right-[20%]", delay: "1.5s" },
    { icon: TrendingUp, label: "MLOps", color: "secondary", position: "top-32 left-[15%]", delay: "2s" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float opacity-30" />
      <div className="absolute bottom-20 left-20 w-[700px] h-[700px] bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Geometric decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Floating skill badges */}
      {floatingSkills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            className={`hidden lg:block absolute ${skill.position} animate-float`}
            style={{ animationDelay: skill.delay }}
          >
            <div className={`group relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-${skill.color}/30 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default`}>
              <div className={`absolute inset-0 bg-gradient-to-r from-${skill.color}/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <Icon className={`h-6 w-6 text-${skill.color} relative z-10`} />
              <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-${skill.color} opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                {skill.label}
              </span>
            </div>
          </div>
        );
      })}

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-full backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow group">
                <Sparkles className="h-4 w-4 text-primary group-hover:animate-pulse" />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold text-sm">
                  Master's in Computer Science
                </span>
              </div>
              
              {/* Enhanced typography */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  Venkata Manideep{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                      Patibandla
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl opacity-50 -z-10" />
                  </span>
                </h1>
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
                    <TypeWriter 
                      words={["Data Scientist", "ML Engineer", "MLOps Specialist", "Cloud Architect"]} 
                      className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    />
                  </h2>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Transforming data into <span className="text-foreground font-semibold">actionable insights</span> by building production ML systems and scalable data pipelines. Specialized in <span className="text-foreground font-semibold">Python, SQL, and AWS</span>.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                size="lg" 
                className="group relative bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105 shadow-lg"
              >
                <a 
                  href="/Venkata_Manideep_Resume.pdf" 
                  download="Venkata_Manideep_Resume.pdf"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Resume
                </a>
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg" 
                variant="outline" 
                className="group border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50 transition-all hover:scale-105 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>

            {/* Enhanced Social Links with Launch Effect */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground font-medium">Connect:</span>
              <button
                onClick={() => handleSocialClick('GitHub', 'https://github.com/patibandlavenkatamanideep')}
                className="group relative p-3 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-all border border-border hover:border-primary/50 hover:scale-110 shadow-lg overflow-hidden"
              >
                {launchingPlatform === 'GitHub' && (
                  <div className="absolute inset-0 animate-ping bg-primary/30 rounded-xl" />
                )}
                <Github className={`h-5 w-5 relative z-10 transition-transform ${launchingPlatform === 'GitHub' ? 'scale-0' : 'scale-100'}`} />
                {launchingPlatform === 'GitHub' && (
                  <Rocket className="absolute inset-0 m-auto h-5 w-5 text-primary animate-bounce z-20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => handleSocialClick('LinkedIn', 'https://www.linkedin.com/in/manideep-analytics/')}
                className="group relative p-3 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-secondary/10 transition-all border border-border hover:border-secondary/50 hover:scale-110 shadow-lg overflow-hidden"
              >
                {launchingPlatform === 'LinkedIn' && (
                  <div className="absolute inset-0 animate-ping bg-secondary/30 rounded-xl" />
                )}
                <Linkedin className={`h-5 w-5 relative z-10 transition-transform ${launchingPlatform === 'LinkedIn' ? 'scale-0' : 'scale-100'}`} />
                {launchingPlatform === 'LinkedIn' && (
                  <Rocket className="absolute inset-0 m-auto h-5 w-5 text-secondary animate-bounce z-20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image with Labels */}
          <div className="relative animate-fade-in-delay lg:ml-auto">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main profile container */}
              <div className="relative">
                {/* Gradient border wrapper */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl">
                  <div className="rounded-xl overflow-hidden bg-background">
                    <img
                      src={profileImage}
                      alt="Venkata Manideep Patibandla"
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Floating Labels */}
                <div className="absolute -top-3 -left-3 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl shadow-lg font-semibold text-sm flex items-center gap-2 animate-float">
                  <Brain className="h-4 w-4" />
                  Machine Learning
                </div>
                
                <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-xl shadow-lg font-semibold text-sm flex items-center gap-2 animate-float" style={{ animationDelay: "0.5s" }}>
                  <Database className="h-4 w-4" />
                  Data Science
                </div>
                
                <div className="absolute -bottom-3 -left-3 px-4 py-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-xl shadow-lg font-semibold text-sm flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
                  <TrendingUp className="h-4 w-4" />
                  MLOps
                </div>
                
                <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground rounded-xl shadow-lg font-semibold text-sm flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
                  <CloudCog className="h-4 w-4" />
                  AWS Cloud
                </div>
                
                {/* Soft glow behind */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-r from-primary via-secondary to-accent scale-110 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 animate-fade-in-delay">
          {[
            { value: "15+", label: "ML Projects", icon: Brain, color: "primary" },
            { value: "AWS", label: "Cloud Certified", icon: CloudCog, color: "secondary" },
            { value: "Python", label: "Primary Stack", icon: Code2, color: "accent" },
            { value: "SQL", label: "Data Expert", icon: TrendingUp, color: "primary" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative flex items-start justify-between mb-3">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <Icon className={`h-6 w-6 text-${stat.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
