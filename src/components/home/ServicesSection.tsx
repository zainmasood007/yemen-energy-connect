import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Wrench, Lightbulb, Cpu, Battery, Settings, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    { key: 'services.items.design', icon: Lightbulb, gradient: 'from-amber-500 to-orange-600' },
    { key: 'services.items.installation', icon: Settings, gradient: 'from-blue-500 to-indigo-600' },
    { key: 'services.items.storage', icon: Battery, gradient: 'from-green-500 to-emerald-600' },
    { key: 'services.items.consultation', icon: Cpu, gradient: 'from-purple-500 to-violet-600' },
    { key: 'services.items.maintenance', icon: Wrench, gradient: 'from-cyan-500 to-teal-600' },
    { key: 'services.items.assessment', icon: BarChart3, gradient: 'from-rose-500 to-pink-600' },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02]" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-fade-in">
            <Wrench className="h-4 w-4" />
            <span>{isRTL ? 'خدماتنا' : 'Our Services'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 animate-slide-up">{t('services.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg animate-slide-up delay-100">{t('services.subtitle')}</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.key}
              to="/services"
              className={cn(
                "group relative bg-card border border-border/50 rounded-2xl p-8 overflow-hidden",
                "hover:shadow-elevated hover:-translate-y-2 transition-all duration-500",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Hover gradient background */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                service.gradient
              )} />
              
              {/* Icon with gradient */}
              <div className={cn(
                "relative inline-flex items-center justify-center h-14 w-14 rounded-2xl mb-6 transition-all duration-500",
                "bg-gradient-to-br group-hover:scale-110 group-hover:shadow-lg",
                service.gradient
              )}>
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {t(`${service.key}.title`)}
              </h3>
              <p className="relative text-muted-foreground text-sm mb-6 leading-relaxed">
                {t(`${service.key}.desc`)}
              </p>
              
              {/* Arrow indicator */}
              <div className="relative flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-all duration-300">
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