import { Zap, Award, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function StatsSection() {
  const { isRTL } = useLanguage();
  
  const stats = [
    { value: '500+', label: isRTL ? 'مشروع منجز' : 'Projects Completed', icon: Zap },
    { value: '10+', label: isRTL ? 'سنوات خبرة' : 'Years Experience', icon: Award },
    { value: '18', label: isRTL ? 'محافظة نخدمها' : 'Governorates Served', icon: MapPin },
    { value: '24/7', label: isRTL ? 'دعم فني' : 'Technical Support', icon: Clock },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary/95 to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.03]" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
                <stat.icon className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-primary-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}