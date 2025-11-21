import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.snap-y');
      if (scrollContainer) {
        setScrollY(scrollContainer.scrollTop);
      }
    };

    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const parallaxLayers = [
    { speed: 0.1, size: 400, color: 'hsl(var(--primary))', opacity: 0.03, top: '10%', left: '10%' },
    { speed: 0.15, size: 300, color: 'hsl(var(--secondary))', opacity: 0.04, top: '60%', right: '15%' },
    { speed: 0.08, size: 500, color: 'hsl(var(--accent))', opacity: 0.02, top: '120%', left: '60%' },
    { speed: 0.2, size: 250, color: 'hsl(var(--primary))', opacity: 0.05, top: '180%', right: '20%' },
    { speed: 0.12, size: 350, color: 'hsl(var(--secondary))', opacity: 0.03, top: '240%', left: '15%' },
    { speed: 0.18, size: 280, color: 'hsl(var(--accent))', opacity: 0.04, top: '300%', right: '25%' },
    { speed: 0.1, size: 450, color: 'hsl(var(--primary))', opacity: 0.02, top: '360%', left: '50%' },
    { speed: 0.14, size: 320, color: 'hsl(var(--secondary))', opacity: 0.05, top: '420%', right: '10%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {parallaxLayers.map((layer, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-3xl transition-transform duration-100 ease-linear"
          style={{
            width: `${layer.size}px`,
            height: `${layer.size}px`,
            backgroundColor: layer.color,
            opacity: layer.opacity,
            top: layer.top,
            left: layer.left,
            right: layer.right,
            transform: `translateY(${scrollY * layer.speed}px)`,
          }}
        />
      ))}
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          top: '5%',
          left: '5%',
          transform: `translateY(${scrollY * 0.05}px) scale(${1 + Math.sin(scrollY * 0.001) * 0.1})`,
        }}
      />
      
      <div 
        className="absolute w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
          bottom: '10%',
          right: '10%',
          transform: `translateY(${scrollY * -0.08}px) scale(${1 + Math.cos(scrollY * 0.001) * 0.1})`,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            top: `${(i * 30) % 100}%`,
            left: `${(i * 47) % 100}%`,
            transform: `translateY(${scrollY * (0.05 + (i * 0.01))}px)`,
            opacity: 0.3 + (i % 3) * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
