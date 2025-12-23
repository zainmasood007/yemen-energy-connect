import { Shield, CheckCircle2, Wrench, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';

export function FeaturesSection() {
  const { t } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-5 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>{t('features.title')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 animate-slide-up tracking-tight">{t('features.title')}</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className={cn(
                "group bg-card border border-border rounded-xl p-6 text-center",
                "hover:border-primary/20 hover:shadow-lg hover:-translate-y-1",
                "transition-all duration-300 animate-slide-up"
              )}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={cn(
                "inline-flex items-center justify-center h-14 w-14 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-105",
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
