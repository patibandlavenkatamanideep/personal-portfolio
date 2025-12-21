import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.h-screen.overflow-y-auto');
      if (scrollContainer) {
        setIsVisible(scrollContainer.scrollTop > 500);
      }
    };

    const scrollContainer = document.querySelector('.h-screen.overflow-y-auto');
    scrollContainer?.addEventListener('scroll', handleScroll);
    
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.h-screen.overflow-y-auto');
    scrollContainer?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-primary to-secondary shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default BackToTop;
