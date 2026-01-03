import { Shield, CheckCircle2, Wrench, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function FeaturesSection() {
  const { t } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const features = [
    { icon: Shield, titleKey: 'features.authorized.title', descKey: 'features.authorized.desc', color: 'bg-primary/10 text-primary' },
    { icon: CheckCircle2, titleKey: 'features.warranty.title', descKey: 'features.warranty.desc', color: 'bg-secondary/10 text-secondary' },
    { icon: Wrench, titleKey: 'features.expertise.title', descKey: 'features.expertise.desc', color: 'bg-accent/10 text-accent' },
    { icon: MapPin, titleKey: 'features.coverage.title', descKey: 'features.coverage.desc', color: 'bg-success/10 text-success' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-secondary/4 rounded-full blur-[80px]" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/4 rounded-full blur-[80px]" />
      </div>
      
      <div className="container relative">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>{t('features.badge')}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">{t('features.title')}</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              {t('features.subtitle')}
            </p>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" ref={ref}>
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className={cn(
                "group bg-card border border-border rounded-xl p-6 text-center",
                "shadow-soft hover:shadow-card-lift hover:-translate-y-2 hover:border-secondary/30",
                "transition-all duration-500 will-change-transform"
              )}
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transitionDelay: `${index * 100}ms`,
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <div className={cn(
                "inline-flex items-center justify-center h-14 w-14 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-secondary",
                feature.color
              )}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
