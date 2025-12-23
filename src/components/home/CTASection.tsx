import { Phone, Sparkles, ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/use-parallax';

export function CTASection() {
  const { t, isRTL } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Enhanced parallax background */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-morph" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-morph" style={{ animationDelay: '-4s' }} />
      </div>
      
      <div className="container relative">
        <div className="relative rounded-3xl overflow-hidden group">
          {/* Animated gradient background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-secondary via-orange-500 to-secondary animate-aurora opacity-95"
            style={{ backgroundSize: '200% 200%' }}
          />
          
          {/* Glass texture with enhanced pattern */}
          <div className="absolute inset-0 bg-grid-modern opacity-[0.04]" />
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
          
          {/* Enhanced decorative blobs with morphing */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-morph" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }} />
          
          {/* Radial spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_0%/0.1)_100%)]" />
          
          {/* Content */}
          <div className="relative p-10 md:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              {/* Enhanced badge with pulse animation */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-foreground/15 backdrop-blur-sm border border-secondary-foreground/20 text-secondary-foreground text-sm font-semibold mb-6 animate-fade-in animate-glow-pulse">
                <Sparkles className="h-4 w-4 animate-pulse-soft" />
                <span>{isRTL ? 'استشارة مجانية' : 'Free Consultation'}</span>
              </div>
              
              {/* Title with enhanced animation */}
              <h2 className="text-3xl md:text-5xl font-black text-secondary-foreground mb-5 drop-shadow-lg animate-slide-up">
                {isRTL ? 'هل أنت جاهز للتحول إلى الطاقة الشمسية؟' : 'Ready to Switch to Solar Energy?'}
              </h2>
              
              {/* Description */}
              <p className="text-secondary-foreground/85 mb-10 text-lg leading-relaxed animate-slide-up delay-100">
                {isRTL 
                  ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك'
                  : 'Contact us today for a free consultation and a customized quote for your needs'
                }
              </p>
              
              {/* Enhanced CTAs with ripple effects */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
                <Button 
                  asChild 
                  size="lg"
                  className="group/btn relative bg-secondary-foreground text-secondary hover:bg-secondary-foreground/95 px-8 py-7 text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl overflow-hidden"
                >
                  <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                    {/* Ripple effect */}
                    <span className="absolute inset-0 bg-secondary/20 scale-0 group-hover/btn:scale-150 transition-transform duration-700 rounded-full opacity-0 group-hover/btn:opacity-100" />
                    
                    <span className="relative flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      {t('hero.cta')}
                      <Arrow className="h-5 w-5 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                    </span>
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="group/btn relative border-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-secondary-foreground/50 backdrop-blur-sm px-8 py-7 text-base font-semibold rounded-xl transition-all duration-300 overflow-hidden"
                >
                  <a href="tel:+967777777777">
                    <Phone className="h-5 w-5 group-hover/btn:animate-pulse-soft" />
                    {t('contact.phone')}
                  </a>
                </Button>
              </div>
              
              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mt-10 animate-fade-in delay-300">
                <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                  {isRTL ? 'متاح الآن' : 'Available Now'}
                </div>
                <div className="w-px h-4 bg-secondary-foreground/30" />
                <div className="text-secondary-foreground/70 text-sm">
                  {isRTL ? 'رد خلال 24 ساعة' : 'Response within 24h'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-foreground/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
