import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Wrench, Lightbulb, Cpu, Battery, Settings, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const parallaxOffset = useParallax({ speed: 0.08, direction: 'up' });
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    { key: 'services.items.design', icon: Lightbulb, color: 'bg-secondary/10 text-secondary' },
    { key: 'services.items.installation', icon: Settings, color: 'bg-primary/10 text-primary' },
    { key: 'services.items.storage', icon: Battery, color: 'bg-success/10 text-success' },
    { key: 'services.items.consultation', icon: Cpu, color: 'bg-accent/10 text-accent' },
    { key: 'services.items.maintenance', icon: Wrench, color: 'bg-warning/10 text-warning' },
    { key: 'services.items.assessment', icon: BarChart3, color: 'bg-destructive/10 text-destructive' },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/4 rounded-full blur-[80px]" />
      </div>
      
      <div className="container relative">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-5">
              <Wrench className="h-4 w-4" />
              <span>{isRTL ? 'خدماتنا' : 'Our Services'}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">{t('services.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.subtitle')}</p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-5" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" ref={ref}>
          {services.map((service, index) => (
            <Link
              key={service.key}
              to="/services"
              className={cn(
                "group bg-card border border-border rounded-xl p-6",
                "shadow-soft hover:shadow-card-lift hover:-translate-y-2 hover:border-secondary/30",
                "transition-all duration-500 will-change-transform"
              )}
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${index * 80}ms`,
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <div className={cn(
                "inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-secondary",
                service.color
              )}>
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {t(`${service.key}.desc`)}
              </p>
              
              <div className="flex items-center gap-1 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                {t('common.learnMore')}
                <Arrow className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
