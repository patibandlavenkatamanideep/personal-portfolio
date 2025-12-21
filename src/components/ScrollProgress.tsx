import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.h-screen.overflow-y-auto');
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setProgress(scrollProgress);
      }
    };

    const scrollContainer = document.querySelector('.h-screen.overflow-y-auto');
    scrollContainer?.addEventListener('scroll', handleScroll);
    
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-muted/30 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
