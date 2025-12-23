import { Shield, CheckCircle2, Wrench, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';

export function FeaturesSection() {
  const { t } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });

  const features = [
    { icon: Shield, titleKey: 'features.authorized.title', descKey: 'features.authorized.desc', gradient: 'from-primary to-primary/80', hoverGlow: 'group-hover:shadow-[0_0_40px_hsl(222_47%_20%/0.3)]' },
    { icon: CheckCircle2, titleKey: 'features.warranty.title', descKey: 'features.warranty.desc', gradient: 'from-secondary to-orange-600', hoverGlow: 'group-hover:shadow-glow' },
    { icon: Wrench, titleKey: 'features.expertise.title', descKey: 'features.expertise.desc', gradient: 'from-accent to-teal-600', hoverGlow: 'group-hover:shadow-[0_0_40px_hsl(185_85%_45%/0.3)]' },
    { icon: MapPin, titleKey: 'features.coverage.title', descKey: 'features.coverage.desc', gradient: 'from-success to-emerald-600', hoverGlow: 'group-hover:shadow-[0_0_40px_hsl(160_70%_40%/0.3)]' },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Enhanced parallax background decorations */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[100px] animate-morph" style={{ animationDelay: '-4s' }} />
      </div>
      
      {/* Enhanced glass texture */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(32_95%_55%/0.05)_0%,_transparent_50%)]" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          {/* Enhanced badge with glow */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-primary text-sm font-semibold mb-6 animate-fade-in hover:shadow-soft transition-shadow duration-300">
            <Sparkles className="h-4 w-4 animate-pulse-soft" />
            <span>{t('features.title')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 animate-slide-up">{t('features.title')}</h2>
          {/* Enhanced gradient bar */}
          <div className="w-24 h-1.5 bg-gradient-solar mx-auto rounded-full animate-glow-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className={cn(
                "group relative card-glass p-8 text-center card-interactive",
                "animate-slide-up",
                feature.hoverGlow
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated shimmer effect on hover */}
              <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border-animated" />
              
              {/* Icon container with enhanced animations */}
              <div className={cn(
                "relative inline-flex items-center justify-center h-16 w-16 rounded-2xl mb-6 transition-all duration-500",
                "bg-gradient-to-br shadow-lg",
                feature.gradient,
                "group-hover:scale-110 group-hover:rotate-3"
              )}>
                {/* Orbiting dot effect */}
                <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/50 rounded-full" />
                </div>
                
                <feature.icon className="h-8 w-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Title with hover effect */}
              <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{t(feature.titleKey)}</h3>
              
              {/* Description */}
              <p className="relative text-muted-foreground text-sm leading-relaxed">{t(feature.descKey)}</p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-solar group-hover:w-1/2 transition-all duration-500 rounded-t-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
