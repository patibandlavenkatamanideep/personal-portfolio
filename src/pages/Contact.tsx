import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, Sparkles, Rocket } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [launchingPlatform, setLaunchingPlatform] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_itzhl3o',
        'template_jizzgsj',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '85NRWdlE7_D7ePTf9'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pvmanideep.analytics@gmail.com",
      href: "mailto:pvmanideep.analytics@gmail.com",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manideep-analytics",
      href: "https://www.linkedin.com/in/manideep-analytics/",
      color: "secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/patibandlavenkatamanideep",
      href: "https://github.com/patibandlavenkatamanideep",
      color: "accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Irvine, CA, USA (Willing to Relocate)",
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-50 -z-10" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on your next data science or ML project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className="animate-fade-in">
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 group-focus-within:text-primary transition-colors">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary transition-colors h-12"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary transition-colors h-12"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 group-focus-within:text-primary transition-colors">Tell About the Project</label>
                    <Textarea
                      placeholder="I'd like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary transition-colors min-h-[160px] resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:-rotate-45 transition-transform" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-6 animate-fade-in-delay">
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
                
                <div className="space-y-5">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const isLaunching = info.href && (
                      (info.label === 'LinkedIn' && launchingPlatform === 'LinkedIn') ||
                      (info.label === 'GitHub' && launchingPlatform === 'GitHub')
                    );
                    
                    return (
                      <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all relative overflow-hidden">
                        {isLaunching && (
                          <div className="absolute inset-0 animate-ping bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl" />
                        )}
                        <div className={`relative p-3 rounded-xl bg-gradient-to-br from-${info.color}/20 to-${info.color}/10 group-hover:from-${info.color}/30 group-hover:to-${info.color}/20 transition-all flex-shrink-0 border border-${info.color}/20`}>
                          <Icon className={`h-5 w-5 text-${info.color} transition-transform ${isLaunching ? 'scale-0' : 'scale-100'}`} />
                          {isLaunching && (
                            <Rocket className="absolute inset-0 m-auto h-5 w-5 text-primary animate-bounce" />
                          )}
                        </div>
                        <div className="flex-1 relative">
                          <p className="text-sm text-muted-foreground font-medium mb-1">{info.label}</p>
                          {info.href ? (
                            <button
                              onClick={() => handleSocialClick(info.label, info.href!)}
                              className="font-semibold hover:text-primary transition-colors text-base text-left"
                            >
                              {info.value}
                            </button>
                          ) : (
                            <p className="font-semibold text-base">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold">Open for Opportunities</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently seeking full-time opportunities in Data Science, Machine Learning Engineering, and MLOps roles.
                </p>
                <Button 
                  asChild
                  className="group bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                <a 
                    href="/Venkata_Manideep_Resume.pdf" 
                    download="Venkata_Manideep_Resume.pdf"
                    className="flex items-center"
                  >
                    Download Resume
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
