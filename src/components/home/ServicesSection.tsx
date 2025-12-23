import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Wrench, Lightbulb, Cpu, Battery, Settings, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const parallaxOffset = useParallax({ speed: 0.08, direction: 'up' });

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-5 animate-fade-in">
            <Wrench className="h-4 w-4" />
            <span>{isRTL ? 'خدماتنا' : 'Our Services'}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 animate-slide-up tracking-tight">{t('services.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">{t('services.subtitle')}</p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={service.key}
              to="/services"
              className={cn(
                "group bg-card border border-border rounded-xl p-6",
                "hover:border-primary/20 hover:shadow-md hover:-translate-y-1",
                "transition-all duration-300 animate-slide-up"
              )}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className={cn(
                "inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-105",
                service.color
              )}>
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {t(`${service.key}.desc`)}
              </p>
              
              <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
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
