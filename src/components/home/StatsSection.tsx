import { Zap, Award, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useParallax } from '@/hooks/use-parallax';
import { useEffect, useState, useRef } from 'react';

// Animated counter hook with intersection observer
function useAnimatedCounter(end: number, suffix: string = '', duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [hasStarted]);
  
  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);
  
  return { count, ref, suffix };
}

export function StatsSection() {
  const { isRTL } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.15, direction: 'up' });
  
  const stats = [
    { value: 500, suffix: '+', label: isRTL ? 'مشروع منجز' : 'Projects Completed', icon: Zap, color: 'from-secondary to-orange-600' },
    { value: 10, suffix: '+', label: isRTL ? 'سنوات خبرة' : 'Years Experience', icon: Award, color: 'from-accent to-teal-600' },
    { value: 18, suffix: '', label: isRTL ? 'محافظة نخدمها' : 'Governorates Served', icon: MapPin, color: 'from-success to-emerald-600' },
    { value: 24, suffix: '/7', label: isRTL ? 'دعم فني' : 'Technical Support', icon: Clock, color: 'from-primary to-blue-600' },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary" />
      
      {/* Animated aurora effect */}
      <div 
        className="absolute inset-0 animate-aurora opacity-50"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, hsl(222 47% 20%) 0%, hsl(32 95% 55% / 0.1) 25%, hsl(222 47% 18%) 50%, hsl(185 85% 45% / 0.1) 75%, hsl(222 47% 20%) 100%)',
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Parallax decorative elements with morphing animation */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[80px] animate-morph" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[60px] animate-morph" style={{ animationDelay: '-4s' }} />
      </div>
      
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.03]" />
      
      {/* Top glass edge with enhanced effect */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/15 to-transparent backdrop-blur-[1px]" />
      
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const { count, ref } = useAnimatedCounter(stat.value, stat.suffix, 2000 + index * 200);
            
            return (
              <div 
                key={index} 
                ref={ref}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Enhanced glass icon container with glow */}
                <div className={`relative inline-flex items-center justify-center h-16 w-16 rounded-2xl glass-dark mb-5 group-hover:scale-110 transition-all duration-500 overflow-hidden`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-full h-full rounded-2xl border border-secondary/30 animate-ripple" />
                  </div>
                  
                  <stat.icon className="h-8 w-8 text-secondary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Animated counter with bounce effect */}
                <div className="text-4xl md:text-6xl font-black text-primary-foreground mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                  <span className="animate-counter-bounce inline-block">{count}</span>
                  <span className="text-secondary">{stat.suffix}</span>
                </div>
                
                {/* Label with underline animation */}
                <div className="relative text-sm md:text-base text-primary-foreground/70 font-medium">
                  <span>{stat.label}</span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom glass edge with enhanced effect */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/15 to-transparent backdrop-blur-[1px]" />
    </section>
  );
}
