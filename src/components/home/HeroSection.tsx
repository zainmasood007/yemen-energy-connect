import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sun, Shield, Clock, MapPin, Battery, Award, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-soft delay-300" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.03]" />

      <div className="container relative z-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={cn("text-center lg:text-start", isRTL && "lg:order-2")}>
            {/* Badge with glow */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary mb-8 animate-fade-in backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-wide">{t('hero.badge')}</span>
            </div>

            {/* Title with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[1.1] animate-slide-up">
              <span className="block">{isRTL ? 'طاقة نظيفة' : 'Clean Energy'}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-solar animate-gradient bg-[length:200%_auto]">
                {isRTL ? 'لمستقبل أفضل' : 'For a Better Future'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-100">
              {t('hero.subtitle')}
            </p>

            {/* CTAs with modern styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up delay-200">
              <Button 
                asChild 
                size="lg"
                className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-7 text-base font-bold shadow-glow hover:shadow-[0_0_60px_hsl(32_95%_55%/0.4)] transition-all duration-500 rounded-xl"
              >
                <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                  <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-8 py-7 text-base font-semibold backdrop-blur-sm rounded-xl transition-all duration-300"
              >
                <Link to="/products">
                  {t('hero.ctaSecondary')}
                </Link>
              </Button>
            </div>

            {/* Trust indicators with modern styling */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 animate-slide-up delay-300">
              {[
                { icon: Shield, label: isRTL ? 'ضمان 10 سنوات' : '10 Years Warranty' },
                { icon: Clock, label: isRTL ? 'دعم 24/7' : '24/7 Support' },
                { icon: MapPin, label: isRTL ? 'تغطية شاملة' : 'Full Coverage' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-primary-foreground/80 text-sm font-medium">
                  <div className="h-8 w-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual - Modern 3D-like cards */}
          <div className={cn("relative hidden lg:flex items-center justify-center", isRTL && "lg:order-1")}>
            <div className="relative w-full max-w-lg">
              {/* Main visual container with glass effect */}
              <div className="relative aspect-square rounded-3xl bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 flex items-center justify-center p-10 animate-scale-in overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
                
                <div className="relative text-center">
                  <div className="relative inline-flex items-center justify-center h-24 w-24 rounded-2xl bg-secondary/20 mb-6 animate-float">
                    <Sun className="h-12 w-12 text-secondary" />
                    <div className="absolute inset-0 rounded-2xl animate-pulse-glow" />
                  </div>
                  <div className="text-6xl font-black text-primary-foreground mb-2">500+</div>
                  <div className="text-base text-primary-foreground/70 font-medium">{isRTL ? 'مشروع منجز' : 'Projects Completed'}</div>
                </div>
              </div>

              {/* Floating badges with glass effect */}
              <div className="absolute -top-6 -end-6 bg-card/95 backdrop-blur-xl rounded-2xl p-4 shadow-elevated border border-border/50 animate-slide-in-right delay-200">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-solar flex items-center justify-center shadow-glow">
                    <Battery className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-base">Pylontech</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? 'وكيل معتمد' : 'Authorized'}</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -start-6 bg-card/95 backdrop-blur-xl rounded-2xl p-4 shadow-elevated border border-border/50 animate-slide-in-left delay-300">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-base">10+</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? 'سنوات خبرة' : 'Years Experience'}</div>
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div className="absolute top-1/2 -end-10 bg-secondary/90 backdrop-blur-sm rounded-xl p-3 shadow-glow animate-float delay-500">
                <Zap className="h-6 w-6 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20 fill-background" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}