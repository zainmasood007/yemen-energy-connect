import { Phone, Sparkles, ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/use-parallax';

export function CTASection() {
  const { t, isRTL } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container relative">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
          
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          {/* Content */}
          <div className="relative p-8 md:p-14 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-sm font-medium mb-5 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>{isRTL ? 'استشارة مجانية' : 'Free Consultation'}</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground mb-4 animate-slide-up tracking-tight">
                {isRTL ? 'هل أنت جاهز للتحول إلى الطاقة الشمسية؟' : 'Ready to Switch to Solar Energy?'}
              </h2>
              
              <p className="text-secondary-foreground/75 mb-8 text-base leading-relaxed animate-slide-up delay-100">
                {isRTL 
                  ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك'
                  : 'Contact us today for a free consultation and a customized quote for your needs'
                }
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up delay-200">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/95 px-7 py-6 text-base font-semibold shadow-lg transition-all duration-300"
                >
                  <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                    <Zap className="h-5 w-5 me-2" />
                    {t('hero.cta')}
                    <Arrow className="h-5 w-5 ms-2" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-secondary-foreground/25 text-secondary-foreground hover:bg-secondary-foreground/10 px-7 py-6 text-base font-medium transition-all duration-300"
                >
                  <a href="tel:+967777777777">
                    <Phone className="h-5 w-5 me-2" />
                    {t('contact.phone')}
                  </a>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-5 mt-8 animate-fade-in delay-300">
                <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  {isRTL ? 'متاح الآن' : 'Available Now'}
                </div>
                <div className="w-px h-4 bg-secondary-foreground/25" />
                <div className="text-secondary-foreground/60 text-sm">
                  {isRTL ? 'رد خلال 24 ساعة' : 'Response within 24h'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
