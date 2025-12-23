import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Shield, Zap, Battery, Award, Star } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function PylontechSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const features = [
    { value: '6000+', label: isRTL ? 'دورة شحن' : 'Charge Cycles', icon: Zap },
    { value: '10', label: isRTL ? 'سنوات ضمان' : 'Years Warranty', icon: Shield },
    { value: '95%+', label: isRTL ? 'كفاءة' : 'Efficiency', icon: Battery },
    { value: 'A+', label: isRTL ? 'تصنيف الأمان' : 'Safety Rating', icon: Award },
  ];

  return (
    <section className="py-14 md:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className={cn(isRTL && "lg:order-2")}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/15 text-secondary text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              {t('pylontech.authorized')}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight tracking-tight">
              {t('pylontech.title')}
            </h2>
            <p className="text-base text-primary-foreground/70 mb-7 leading-relaxed">
              {t('pylontech.subtitle')}
            </p>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-primary-foreground/6 border border-primary-foreground/8"
                >
                  <feature.icon className="h-5 w-5 text-secondary mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-secondary mb-0.5">
                    {feature.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">{feature.label}</div>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-5 text-base font-medium"
            >
              <Link to="/pylontech">
                {t('common.learnMore')}
                <Arrow className="h-4 w-4 ms-1" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className={cn("relative flex items-center justify-center", isRTL && "lg:order-1")}>
            <div className="relative w-full max-w-sm">
              <div className="aspect-square rounded-xl bg-primary-foreground/6 border border-primary-foreground/10 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-secondary/15 border border-secondary/25 mb-4">
                    <Battery className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">Pylontech</div>
                  <p className="text-sm text-primary-foreground/60 mb-3">
                    {isRTL ? 'بطاريات ليثيوم فوسفات الحديد' : 'LiFePO4 Batteries'}
                  </p>
                  <div className="flex items-center justify-center gap-0.5 text-secondary">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
