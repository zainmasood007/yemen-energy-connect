import { Shield, CheckCircle2, Wrench, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, titleKey: 'features.authorized.title', descKey: 'features.authorized.desc', color: 'from-primary to-primary/80' },
    { icon: CheckCircle2, titleKey: 'features.warranty.title', descKey: 'features.warranty.desc', color: 'from-secondary to-secondary/80' },
    { icon: Wrench, titleKey: 'features.expertise.title', descKey: 'features.expertise.desc', color: 'from-accent to-accent/80' },
    { icon: MapPin, titleKey: 'features.coverage.title', descKey: 'features.coverage.desc', color: 'from-success to-success/80' },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>{t('features.title')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 animate-slide-up">{t('features.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-solar mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className={cn(
                "group relative bg-card border border-border/50 rounded-2xl p-8 text-center",
                "hover:shadow-elevated hover:border-primary/20 hover:-translate-y-2 transition-all duration-500",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={cn(
                "relative inline-flex items-center justify-center h-16 w-16 rounded-2xl mb-6 transition-all duration-500",
                "bg-gradient-to-br",
                feature.color,
                "group-hover:scale-110 group-hover:shadow-glow"
              )}>
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="relative text-xl font-bold mb-3">{t(feature.titleKey)}</h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}