import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Shield, Clock, MapPin, Battery, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

// Animated counter hook
function useCounter(end: number, duration: number = 2000, startOnMount: boolean = true) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startOnMount) return;
    
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
  }, [end, duration, startOnMount]);
  
  return count;
}

export function HeroSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const projectCount = useCounter(500, 2500);
  
  const bgOffset = useParallax({ speed: 0.3, direction: 'down' });
  const contentOffset = useParallax({ speed: 0.1, direction: 'up' });
  const floatingOffset = useParallax({ speed: 0.2, direction: 'up' });

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Professional gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85"
        style={{ transform: `translateY(${bgOffset * 0.5}px)` }}
      />
      
      {/* Subtle mesh gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ transform: `translateY(${bgOffset * 0.3}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02]" />
      
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/5 to-transparent" />

      <div className="container relative z-10 py-16 lg:py-20">
        <div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ transform: `translateY(${contentOffset}px)` }}
        >
          {/* Content */}
          <div className={cn("text-center lg:text-start", isRTL && "lg:order-2")}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground/90">{t('hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-[1.15] animate-slide-up tracking-tight">
              <span className="block">{isRTL ? 'طاقة نظيفة' : 'Clean Energy'}</span>
              <span className="block text-secondary">
                {isRTL ? 'لمستقبل أفضل' : 'For a Better Future'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-100">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 animate-slide-up delay-200">
              <Button 
                asChild 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-7 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                  <Arrow className="h-5 w-5 ms-2" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-7 py-6 text-base font-medium rounded-lg transition-all duration-300"
              >
                <Link to="/products">
                  {t('hero.ctaSecondary')}
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-10 animate-slide-up delay-300">
              {[
                { icon: Shield, label: isRTL ? 'ضمان 10 سنوات' : '10 Years Warranty' },
                { icon: Clock, label: isRTL ? 'دعم 24/7' : '24/7 Support' },
                { icon: MapPin, label: isRTL ? 'تغطية شاملة' : 'Full Coverage' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-foreground/5 text-primary-foreground/80 text-sm font-medium"
                >
                  <item.icon className="h-4 w-4 text-secondary" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div 
            className={cn("relative hidden lg:flex items-center justify-center", isRTL && "lg:order-1")}
            style={{ transform: `translateY(${floatingOffset}px)` }}
          >
            <div className="relative w-full max-w-md">
              {/* Animated rotating ring */}
              <div className="absolute inset-0 -m-12 rounded-full border border-secondary/20 animate-spin-slow" />
              <div className="absolute inset-0 -m-6 rounded-full border border-primary-foreground/10" />
              
              {/* Main container */}
              <div className="relative aspect-square rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/3 rounded-2xl" />
                
                <div className="relative text-center h-full flex flex-col items-center justify-center">
                  {/* Logo with glow effect */}
                  <div className="relative mb-5 animate-float">
                    {/* Glow effect */}
                    <div className="absolute inset-0 -m-4 bg-secondary/25 rounded-full blur-xl animate-glow-pulse" />
                    {/* Logo */}
                    <img 
                      src={logo} 
                      alt="Yemen Energy Hub" 
                      className="relative h-24 w-24 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="text-5xl font-bold text-primary-foreground mb-2">
                    {projectCount}+
                  </div>
                  <div className="text-base text-primary-foreground/60 font-medium">{isRTL ? 'مشروع منجز' : 'Projects Completed'}</div>
                </div>
              </div>

              {/* Floating badges */}
              <div 
                className="absolute -top-4 -end-4 bg-card rounded-xl p-3 shadow-lg border border-border animate-slide-in-right delay-200"
                style={{ transform: `translateY(${floatingOffset * -0.5}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <Battery className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Pylontech</div>
                    <div className="text-xs text-muted-foreground">{isRTL ? 'وكيل معتمد' : 'Authorized'}</div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 -start-4 bg-card rounded-xl p-3 shadow-lg border border-border animate-slide-in-left delay-300"
                style={{ transform: `translateY(${floatingOffset * 0.5}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">10+</div>
                    <div className="text-xs text-muted-foreground">{isRTL ? 'سنوات خبرة' : 'Years Experience'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-12 md:h-16 fill-background" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,45 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
