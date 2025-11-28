import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Sparkles, Code2, Database, CloudCog, Brain, TrendingUp, Rocket } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";

const Home = () => {
  const { toast } = useToast();
  const [launchingPlatform, setLaunchingPlatform] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degrees
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
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
                    Data Scientist & ML Engineer
                  </h2>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Transforming data into <span className="text-foreground font-semibold">actionable insights</span> with 3+ years of experience in ML, MLOps, and cloud deployment. Specialized in building <span className="text-foreground font-semibold">production-ready AI systems</span>.
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
                  href="/Venkata_Manideep_Patibandla_Resume.pdf" 
                  download="Venkata_Manideep_Patibandla_Resume.pdf"
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

          {/* Right Content - Enhanced Profile Image with Organic Blob Shape */}
          <div className="relative animate-fade-in-delay lg:ml-auto">
            <div 
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md mx-auto"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Enhanced glow effect with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-3xl rounded-full animate-glow" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent via-primary to-secondary opacity-20 blur-2xl rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
              
              {/* Decorative floating orbs */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
              
              {/* Image container with organic blob shape */}
              <div 
                className="relative group"
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* SVG Blob clip-path */}
                <svg className="absolute w-0 h-0">
                  <defs>
                    <clipPath id="blobShape" clipPathUnits="objectBoundingBox">
                      <path d="M0.45,0.05 C0.65,0.02,0.85,0.15,0.92,0.35 C0.98,0.52,0.95,0.72,0.85,0.85 C0.72,0.98,0.52,1.02,0.35,0.95 C0.18,0.88,0.05,0.72,0.05,0.55 C0.05,0.35,0.22,0.08,0.45,0.05 Z">
                        <animate
                          attributeName="d"
                          dur="8s"
                          repeatCount="indefinite"
                          values="
                            M0.45,0.05 C0.65,0.02,0.85,0.15,0.92,0.35 C0.98,0.52,0.95,0.72,0.85,0.85 C0.72,0.98,0.52,1.02,0.35,0.95 C0.18,0.88,0.05,0.72,0.05,0.55 C0.05,0.35,0.22,0.08,0.45,0.05 Z;
                            M0.55,0.08 C0.72,0.05,0.92,0.18,0.95,0.38 C0.98,0.58,0.88,0.78,0.72,0.88 C0.58,0.95,0.38,0.98,0.22,0.92 C0.08,0.85,0.02,0.68,0.05,0.48 C0.08,0.28,0.35,0.12,0.55,0.08 Z;
                            M0.42,0.08 C0.62,0.05,0.88,0.12,0.95,0.32 C1.02,0.52,0.98,0.75,0.82,0.88 C0.68,0.98,0.45,1.02,0.28,0.95 C0.12,0.88,0.02,0.68,0.05,0.48 C0.08,0.25,0.22,0.12,0.42,0.08 Z;
                            M0.45,0.05 C0.65,0.02,0.85,0.15,0.92,0.35 C0.98,0.52,0.95,0.72,0.85,0.85 C0.72,0.98,0.52,1.02,0.35,0.95 C0.18,0.88,0.05,0.72,0.05,0.55 C0.05,0.35,0.22,0.08,0.45,0.05 Z
                          "
                        />
                      </path>
                    </clipPath>
                  </defs>
                </svg>
                
                {/* Outer border blob */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent p-1" style={{ clipPath: 'url(#blobShape)' }}>
                  <div className="w-full h-full bg-background" style={{ clipPath: 'url(#blobShape)' }} />
                </div>
                
                {/* Main image with blob shape */}
                <div className="relative overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow duration-500" style={{ clipPath: 'url(#blobShape)' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={profileImage}
                    alt="Venkata Manideep Patibandla"
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Enhanced floating labels with icons */}
              <div className="absolute -top-6 -right-6 group hover:scale-110 transition-transform">
                <div className="relative px-6 py-3 bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-md rounded-2xl border border-primary/30 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <span className="relative z-10 text-white font-bold text-sm flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    ML Engineer
                  </span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 group hover:scale-110 transition-transform">
                <div className="relative px-6 py-3 bg-gradient-to-r from-secondary/90 to-secondary/80 backdrop-blur-md rounded-2xl border border-secondary/30 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <span className="relative z-10 text-white font-bold text-sm flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Data Scientist
                  </span>
                </div>
              </div>
              
              {/* Additional accent badge */}
              <div className="absolute top-1/2 -right-8 group hover:scale-110 transition-transform">
                <div className="relative px-4 py-2 bg-accent/90 backdrop-blur-md rounded-xl border border-accent/30 shadow-lg">
                  <span className="text-white font-semibold text-xs flex items-center gap-1">
                    <CloudCog className="h-3 w-3" />
                    AWS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 animate-fade-in-delay">
          {[
            { value: "3+", label: "Years Experience", icon: TrendingUp, color: "primary" },
            { value: "15+", label: "ML Projects", icon: Brain, color: "secondary" },
            { value: "AWS", label: "Cloud Certified", icon: CloudCog, color: "accent" },
            { value: "Python", label: "Primary Stack", icon: Code2, color: "primary" },
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
