import { Zap, Award, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useParallax } from '@/hooks/use-parallax';
import { useEffect, useState, useRef } from 'react';

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
    { value: 500, suffix: '+', label: isRTL ? 'مشروع منجز' : 'Projects Completed', icon: Zap },
    { value: 10, suffix: '+', label: isRTL ? 'سنوات خبرة' : 'Years Experience', icon: Award },
    { value: 18, suffix: '', label: isRTL ? 'محافظة نخدمها' : 'Governorates Served', icon: MapPin },
    { value: 24, suffix: '/7', label: isRTL ? 'دعم فني' : 'Technical Support', icon: Clock },
  ];

  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/98 to-primary" />
      
      {/* Subtle decorative elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-[60px]" />
      </div>
      
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => {
            const { count, ref } = useAnimatedCounter(stat.value, stat.suffix, 2000 + index * 200);
            
            return (
              <div 
                key={index} 
                ref={ref}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary-foreground/8 mb-4 group-hover:bg-primary-foreground/12 transition-colors duration-300">
                  <stat.icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl md:text-5xl font-bold text-primary-foreground mb-1.5 tracking-tight">
                  {count}<span className="text-secondary">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-primary-foreground/60 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
