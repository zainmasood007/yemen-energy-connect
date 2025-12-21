import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Sun, Shield, Wrench, MapPin, 
  Battery, Zap, CheckCircle2, Phone, Users, Star, 
  Building2, Home, Factory, Truck, HelpCircle, Quote,
  Sparkles, Award, Clock
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEO, { organizationSchema, localBusinessSchema, createFAQSchema } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ============ Hero Section ============
function HeroSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-secondary/40 rounded-full animate-pulse-glow"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={cn("text-center lg:text-start", isRTL && "lg:order-2")}>
            {/* Badge with glow */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary mb-8 animate-fade-in backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">{t('hero.badge')}</span>
            </div>

            {/* Title with gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground mb-6 animate-slide-up leading-[1.1]">
              <span className="block">{isRTL ? 'طاقة نظيفة' : 'Clean Energy'}</span>
              <span className="block text-secondary drop-shadow-lg">{isRTL ? 'لمستقبل أفضل' : 'For a Better Future'}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                asChild 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-7 text-lg shadow-xl hover:shadow-2xl transition-all glow-solar hover:scale-105"
              >
                <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                  <Arrow className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-7 text-lg backdrop-blur-sm"
              >
                <Link to="/products">
                  {t('hero.ctaSecondary')}
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: Shield, label: isRTL ? 'ضمان 10 سنوات' : '10 Years Warranty' },
                { icon: Clock, label: isRTL ? 'دعم 24/7' : '24/7 Support' },
                { icon: MapPin, label: isRTL ? 'تغطية شاملة' : 'Full Coverage' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-primary-foreground/80 text-sm bg-primary-foreground/5 px-3 py-2 rounded-full backdrop-blur-sm">
                  <item.icon className="h-4 w-4 text-secondary" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className={cn("relative hidden lg:flex items-center justify-center", isRTL && "lg:order-1")}>
            <div className="relative w-full max-w-lg aspect-square">
              {/* Glowing rings */}
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-full animate-pulse-glow" />
              <div className="absolute inset-8 border-2 border-secondary/20 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-16 border-2 border-secondary/10 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
              
              {/* Center content */}
              <div className="absolute inset-24 bg-primary-foreground/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-foreground/20">
                <div className="text-center">
                  <Sun className="h-20 w-20 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary-foreground">500+</div>
                  <div className="text-sm text-primary-foreground/70">{isRTL ? 'مشروع منجز' : 'Projects Done'}</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 right-0 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Battery className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Pylontech</div>
                    <div className="text-xs text-muted-foreground">{isRTL ? 'وكيل معتمد' : 'Authorized'}</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">10+</div>
                    <div className="text-xs text-muted-foreground">{isRTL ? 'سنوات خبرة' : 'Years Exp'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}

// ============ Stats Section ============
function StatsSection() {
  const { isRTL } = useLanguage();
  
  const stats = [
    { value: '500+', label: isRTL ? 'مشروع منجز' : 'Projects Completed', icon: Zap },
    { value: '10+', label: isRTL ? 'سنوات خبرة' : 'Years Experience', icon: Award },
    { value: '18', label: isRTL ? 'محافظة نخدمها' : 'Governorates Served', icon: MapPin },
    { value: '24/7', label: isRTL ? 'دعم فني' : 'Technical Support', icon: Clock },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-secondary via-secondary/95 to-secondary relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-secondary-foreground/10 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-secondary-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-secondary-foreground/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Features Section ============
function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, titleKey: 'features.authorized.title', descKey: 'features.authorized.desc', gradient: 'from-secondary/20 to-secondary/5' },
    { icon: CheckCircle2, titleKey: 'features.warranty.title', descKey: 'features.warranty.desc', gradient: 'from-accent/20 to-accent/5' },
    { icon: Wrench, titleKey: 'features.expertise.title', descKey: 'features.expertise.desc', gradient: 'from-primary/20 to-primary/5' },
    { icon: MapPin, titleKey: 'features.coverage.title', descKey: 'features.coverage.desc', gradient: 'from-success/20 to-success/5' },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>{t('features.title')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">{t('features.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className={cn(
                "group relative overflow-hidden bg-card border border-border rounded-2xl p-8 text-center",
                "hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={cn("absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity", feature.gradient)} />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Products Preview Section ============
function ProductsPreviewSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const categories = [
    { 
      key: 'products.categories.pylontech', 
      icon: Battery, 
      highlight: true,
      desc: isRTL ? 'بطاريات ليثيوم فوسفات الحديد الأصلية' : 'Original LiFePO4 Batteries',
      image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=300&fit=crop'
    },
    { 
      key: 'products.categories.lithium', 
      icon: Battery,
      desc: isRTL ? 'بطاريات عالية الأداء' : 'High-performance batteries',
      image: 'https://images.unsplash.com/photo-1619641805634-98e5c7d52d81?w=400&h=300&fit=crop'
    },
    { 
      key: 'products.categories.panels', 
      icon: Sun,
      desc: isRTL ? 'ألواح أحادية ومتعددة البلورات' : 'Mono & Poly crystalline panels',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop'
    },
    { 
      key: 'products.categories.inverters', 
      icon: Zap,
      desc: isRTL ? 'انفرترات هجينة وخارج الشبكة' : 'Hybrid & Off-grid inverters',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Battery className="h-4 w-4" />
              <span>{isRTL ? 'منتجاتنا' : 'Our Products'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-3">{t('products.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('products.subtitle')}</p>
          </div>
          <Button asChild variant="outline" size="lg" className="group border-2">
            <Link to="/products">
              {t('products.viewAll')}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.key}
              to="/products"
              className={cn(
                "group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2",
                category.highlight 
                  ? "row-span-2 lg:row-span-1" 
                  : ""
              )}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={t(category.key)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={cn(
                  "absolute inset-0 transition-opacity",
                  category.highlight 
                    ? "bg-gradient-to-t from-primary via-primary/80 to-primary/40" 
                    : "bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/30"
                )} />
              </div>
              
              <div className="relative z-10 p-6 h-full min-h-[280px] flex flex-col justify-end">
                <div className={cn(
                  "inline-flex items-center justify-center h-14 w-14 rounded-xl mb-4 transition-transform group-hover:scale-110",
                  category.highlight 
                    ? "bg-secondary text-secondary-foreground" 
                    : "bg-card/20 backdrop-blur-sm text-card"
                )}>
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-foreground">{t(category.key)}</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">{category.desc}</p>
                <div className={cn(
                  "flex items-center gap-1 text-sm font-semibold",
                  category.highlight ? "text-secondary" : "text-secondary"
                )}>
                  {t('common.viewDetails')}
                  <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2" />
                </div>
                {category.highlight && (
                  <div className="absolute top-4 end-4 px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full shadow-lg">
                    {isRTL ? 'وكيل معتمد' : 'Authorized'}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Pylontech Section ============
function PylontechSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const features = [
    { value: '6000+', label: isRTL ? 'دورة شحن' : 'Charge Cycles', icon: Zap },
    { value: '10', label: isRTL ? 'سنوات ضمان' : 'Years Warranty', icon: Shield },
    { value: '95%+', label: isRTL ? 'كفاءة' : 'Efficiency', icon: Battery },
    { value: 'A+', label: isRTL ? 'تصنيف الأمان' : 'Safety Rating', icon: Award },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Blueprint pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={cn(isRTL && "lg:order-2")}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 border border-secondary/30">
              <Shield className="h-4 w-4" />
              {t('pylontech.authorized')}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              {t('pylontech.title')}
            </h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              {t('pylontech.subtitle')}
            </p>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors group"
                >
                  <feature.icon className="h-6 w-6 text-secondary mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-black text-secondary mb-1">
                    {feature.value}
                  </div>
                  <div className="text-sm opacity-80">{feature.label}</div>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-7 text-lg glow-solar hover:scale-105 transition-all"
            >
              <Link to="/pylontech">
                {t('common.learnMore')}
                <Arrow className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className={cn("relative flex items-center justify-center", isRTL && "lg:order-1")}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated glow rings */}
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[80px] animate-pulse-glow" />
              <div className="absolute inset-12 bg-secondary/10 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              
              {/* Main card */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-primary-foreground/15 to-primary-foreground/5 border border-primary-foreground/20 backdrop-blur-md flex items-center justify-center p-10 overflow-hidden">
                {/* Inner pattern */}
                <div className="absolute inset-0 bg-grid opacity-10" />
                
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center h-28 w-28 rounded-3xl bg-secondary/20 border border-secondary/30 mb-6 group">
                    <Battery className="h-14 w-14 text-secondary" />
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-secondary mb-4">Pylontech</div>
                  <p className="text-lg opacity-80 mb-6">
                    {isRTL ? 'بطاريات ليثيوم فوسفات الحديد' : 'LiFePO4 Batteries'}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-secondary">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
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

// ============ Services Section ============
function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    { key: 'services.items.design', icon: '📐', gradient: 'from-blue-500/10 via-blue-500/5 to-transparent' },
    { key: 'services.items.installation', icon: '🔧', gradient: 'from-orange-500/10 via-orange-500/5 to-transparent' },
    { key: 'services.items.storage', icon: '🔋', gradient: 'from-green-500/10 via-green-500/5 to-transparent' },
    { key: 'services.items.consultation', icon: '💡', gradient: 'from-yellow-500/10 via-yellow-500/5 to-transparent' },
    { key: 'services.items.maintenance', icon: '🛠️', gradient: 'from-purple-500/10 via-purple-500/5 to-transparent' },
    { key: 'services.items.assessment', icon: '📊', gradient: 'from-cyan-500/10 via-cyan-500/5 to-transparent' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Wrench className="h-4 w-4" />
            <span>{isRTL ? 'خدماتنا' : 'Our Services'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('services.subtitle')}</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.key}
              to="/services"
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", service.gradient)} />
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t(`${service.key}.desc`)}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('common.learnMore')}
                  <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Applications Section ============
function ApplicationsSection() {
  const { isRTL } = useLanguage();

  const applications = [
    { icon: Home, title: isRTL ? 'المنازل' : 'Homes', desc: isRTL ? 'أنظمة منزلية متكاملة' : 'Complete home systems' },
    { icon: Building2, title: isRTL ? 'المكاتب' : 'Offices', desc: isRTL ? 'حلول للشركات' : 'Business solutions' },
    { icon: Factory, title: isRTL ? 'المصانع' : 'Factories', desc: isRTL ? 'أنظمة صناعية' : 'Industrial systems' },
    { icon: Truck, title: isRTL ? 'المشاريع' : 'Projects', desc: isRTL ? 'مشاريع كبيرة' : 'Large-scale projects' },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            {isRTL ? 'حلول لكل القطاعات' : 'Solutions for Every Sector'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {isRTL ? 'نقدم حلول طاقة شمسية مخصصة لجميع أنواع المباني والمشاريع' : 'We provide customized solar solutions for all types of buildings and projects'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                <app.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">{app.title}</h3>
              <p className="text-muted-foreground">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Testimonials Section ============
function TestimonialsSection() {
  const { isRTL } = useLanguage();

  const testimonials = [
    {
      nameAr: 'محمد أحمد العامري',
      nameEn: 'Mohammed Ahmed Al-Ameri',
      roleAr: 'صاحب منزل - صنعاء',
      roleEn: 'Homeowner - Sana\'a',
      textAr: 'أفضل استثمار قمت به! النظام يعمل بشكل ممتاز منذ سنتين بدون أي مشاكل. الفريق الفني محترف جداً والدعم متوفر دائماً.',
      textEn: 'Best investment I made! The system has been working perfectly for 2 years without any issues. Very professional technical team and support is always available.',
      rating: 5
    },
    {
      nameAr: 'شركة النور للتجارة',
      nameEn: 'Al-Nour Trading Company',
      roleAr: 'مكتب تجاري - عدن',
      roleEn: 'Commercial Office - Aden',
      textAr: 'وفرنا أكثر من 70% من تكاليف الكهرباء. بطاريات Pylontech ممتازة ولم تخذلنا حتى في أصعب الظروف.',
      textEn: 'We saved over 70% on electricity costs. Pylontech batteries are excellent and never let us down even in the toughest conditions.',
      rating: 5
    },
    {
      nameAr: 'علي حسن المقطري',
      nameEn: 'Ali Hassan Al-Maqtari',
      roleAr: 'مزارع - تعز',
      roleEn: 'Farmer - Taiz',
      textAr: 'حلّوا لي مشكلة ضخ المياه للمزرعة. النظام قوي ويعمل بكفاءة عالية. شكراً لفريق القطاع على الخدمة الممتازة.',
      textEn: 'They solved my farm water pumping problem. The system is powerful and works with high efficiency. Thanks to Al-Qatta team for excellent service.',
      rating: 5
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>{isRTL ? 'آراء عملائنا' : 'Customer Reviews'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            {isRTL ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {isRTL ? 'نفتخر بثقة عملائنا وشهاداتهم عن خدماتنا' : 'We are proud of our clients\' trust and testimonials about our services'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-secondary/30 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 end-6 text-secondary/20 group-hover:text-secondary/40 transition-colors">
                <Quote className="h-10 w-10" />
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{isRTL ? testimonial.textAr : testimonial.textEn}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {(isRTL ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{isRTL ? testimonial.nameAr : testimonial.nameEn}</div>
                  <div className="text-sm text-muted-foreground">{isRTL ? testimonial.roleAr : testimonial.roleEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA Section ============
function CTASection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-secondary/95 to-warning p-12 md:p-20 text-center">
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-grid opacity-10" />
          
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>{isRTL ? 'استشارة مجانية' : 'Free Consultation'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-secondary-foreground mb-6">
              {isRTL ? 'هل أنت جاهز للتحول إلى الطاقة الشمسية؟' : 'Ready to Switch to Solar Energy?'}
            </h2>
            <p className="text-secondary-foreground/85 mb-10 text-xl leading-relaxed">
              {isRTL 
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك'
                : 'Contact us today for a free consultation and a customized quote for your needs'
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 px-10 py-7 text-lg hover:scale-105 transition-all"
              >
                <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                </a>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-2 border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 px-10 py-7 text-lg"
              >
                <a href="tel:+967777777777">
                  <Phone className="h-5 w-5" />
                  {t('contact.phone')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FAQ Section ============
function FAQSection() {
  const { isRTL } = useLanguage();

  const faqs = [
    {
      questionAr: 'كم تكلفة نظام الطاقة الشمسية للمنزل؟',
      questionEn: 'How much does a home solar system cost?',
      answerAr: 'تختلف التكلفة حسب حجم النظام واحتياجاتك. نظام منزلي متوسط (5-10 كيلووات) يتراوح بين 3,000-8,000 دولار شاملاً التركيب والبطاريات. نقدم استشارة مجانية لتحديد النظام الأمثل لميزانيتك.',
      answerEn: 'Cost varies based on system size and your needs. An average home system (5-10 kW) ranges from $3,000-$8,000 including installation and batteries. We offer free consultation to determine the optimal system for your budget.'
    },
    {
      questionAr: 'كم سنة يدوم النظام الشمسي؟',
      questionEn: 'How long does a solar system last?',
      answerAr: 'الألواح الشمسية تدوم 25-30 سنة مع انخفاض طفيف في الكفاءة. بطاريات Pylontech تدوم أكثر من 15 سنة (6000+ دورة شحن) مع ضمان 10 سنوات. الانفرترات عادة 10-15 سنة.',
      answerEn: 'Solar panels last 25-30 years with slight efficiency decrease. Pylontech batteries last over 15 years (6000+ charge cycles) with 10-year warranty. Inverters typically 10-15 years.'
    },
    {
      questionAr: 'هل الطاقة الشمسية تعمل في الأيام الغائمة؟',
      questionEn: 'Does solar energy work on cloudy days?',
      answerAr: 'نعم، الألواح الشمسية تعمل في الأيام الغائمة لكن بكفاءة أقل (10-25% من الطاقة العادية). لهذا نصمم أنظمة مع بطاريات تخزين كافية لتغطية أيام الطقس السيء.',
      answerEn: 'Yes, solar panels work on cloudy days but at lower efficiency (10-25% of normal output). That\'s why we design systems with sufficient battery storage to cover bad weather days.'
    },
    {
      questionAr: 'ما الفرق بين بطاريات الليثيوم وبطاريات الرصاص؟',
      questionEn: 'What\'s the difference between lithium and lead-acid batteries?',
      answerAr: 'بطاريات الليثيوم (مثل Pylontech) أخف وزناً، تدوم 3-4 مرات أطول، كفاءة 95%+، لا تحتاج صيانة، وآمنة أكثر. بطاريات الرصاص أرخص مبدئياً لكن تحتاج استبدال كل 2-3 سنوات وصيانة دورية.',
      answerEn: 'Lithium batteries (like Pylontech) are lighter, last 3-4x longer, 95%+ efficiency, maintenance-free, and safer. Lead-acid batteries are cheaper initially but need replacement every 2-3 years and regular maintenance.'
    },
    {
      questionAr: 'كم يستغرق تركيب النظام الشمسي؟',
      questionEn: 'How long does solar system installation take?',
      answerAr: 'التركيب المنزلي يستغرق 1-3 أيام. الأنظمة التجارية الكبيرة 1-2 أسبوع. نقوم بزيارة الموقع أولاً لتقييم المتطلبات وتحديد الجدول الزمني الدقيق.',
      answerEn: 'Home installation takes 1-3 days. Large commercial systems 1-2 weeks. We visit the site first to assess requirements and determine the exact timeline.'
    },
    {
      questionAr: 'هل تقدمون خدمة الصيانة بعد التركيب؟',
      questionEn: 'Do you provide maintenance service after installation?',
      answerAr: 'نعم، نقدم خدمة صيانة دورية وضمان شامل. فريقنا متاح 24/7 للدعم الفني عبر واتساب. كما نوفر قطع غيار أصلية وخدمة استجابة سريعة في جميع المحافظات.',
      answerEn: 'Yes, we provide regular maintenance service and comprehensive warranty. Our team is available 24/7 for technical support via WhatsApp. We also provide original spare parts and fast response service in all governorates.'
    },
    {
      questionAr: 'لماذا أختار Pylontech؟',
      questionEn: 'Why choose Pylontech?',
      answerAr: 'Pylontech هي العلامة الأولى عالمياً في بطاريات تخزين الطاقة. تتميز بتقنية LiFePO4 الأكثر أماناً، عمر افتراضي 6000+ دورة، كفاءة 95%+، وضمان 10 سنوات. ونحن الوكيل المعتمد الوحيد في اليمن.',
      answerEn: 'Pylontech is the world\'s #1 brand in energy storage batteries. Features the safest LiFePO4 technology, 6000+ cycle lifespan, 95%+ efficiency, and 10-year warranty. And we are the only authorized agent in Yemen.'
    },
    {
      questionAr: 'هل يمكن توسيع النظام لاحقاً؟',
      questionEn: 'Can I expand the system later?',
      answerAr: 'نعم، نصمم جميع أنظمتنا لتكون قابلة للتوسيع. يمكنك إضافة ألواح شمسية أو بطاريات إضافية حسب احتياجاتك المستقبلية. بطاريات Pylontech تدعم التوصيل المتوازي حتى 16 وحدة.',
      answerEn: 'Yes, we design all our systems to be expandable. You can add solar panels or additional batteries according to your future needs. Pylontech batteries support parallel connection up to 16 units.'
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {isRTL 
              ? 'إجابات على أكثر الأسئلة شيوعاً حول الطاقة الشمسية وأنظمة تخزين الطاقة'
              : 'Answers to the most common questions about solar energy and energy storage systems'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-start hover:no-underline py-5">
                  <span className="font-semibold text-lg">
                    {isRTL ? faq.questionAr : faq.questionEn}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-base">
                  {isRTL ? faq.answerAr : faq.answerEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 text-lg">
            {isRTL ? 'لديك سؤال آخر؟' : 'Have another question?'}
          </p>
          <Button asChild size="lg" variant="outline" className="border-2">
            <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
              {isRTL ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ============ Main Page ============
export default function Index() {
  const { isRTL } = useLanguage();

  const homeFaqs = [
    {
      question: isRTL ? 'كم تكلفة نظام الطاقة الشمسية للمنزل؟' : 'How much does a home solar system cost?',
      answer: isRTL ? 'تختلف التكلفة حسب حجم النظام واحتياجاتك. نظام منزلي متوسط (5-10 كيلووات) يتراوح بين 3,000-8,000 دولار.' : 'Cost varies based on system size and your needs. An average home system (5-10 kW) ranges from $3,000-$8,000.'
    },
    {
      question: isRTL ? 'كم سنة يدوم النظام الشمسي؟' : 'How long does a solar system last?',
      answer: isRTL ? 'الألواح الشمسية تدوم 25-30 سنة. بطاريات Pylontech تدوم أكثر من 15 سنة مع ضمان 10 سنوات.' : 'Solar panels last 25-30 years. Pylontech batteries last over 15 years with 10-year warranty.'
    },
    {
      question: isRTL ? 'لماذا أختار Pylontech؟' : 'Why choose Pylontech?',
      answer: isRTL ? 'Pylontech هي العلامة الأولى عالمياً في بطاريات تخزين الطاقة مع تقنية LiFePO4 الأكثر أماناً وعمر افتراضي 6000+ دورة.' : "Pylontech is the world's #1 brand in energy storage with the safest LiFePO4 technology and 6000+ cycle lifespan."
    },
  ];
  
  const homeJsonLd = [
    organizationSchema,
    localBusinessSchema,
    createFAQSchema(homeFaqs),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": isRTL ? "القطاع للطاقة الشمسية" : "Al-Qatta Solar Energy",
      "url": "https://alqatta.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://alqatta.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <Layout>
      <SEO
        title="Al-Qatta Solar Energy | Authorized Pylontech Agent in Yemen"
        titleAr="القطاع للطاقة الشمسية | الوكيل المعتمد لـ Pylontech في اليمن"
        description="The only authorized Pylontech battery agent in Yemen. We provide solar energy solutions, energy storage systems, and professional installation services for homes and businesses."
        descriptionAr="الوكيل المعتمد الوحيد لبطاريات Pylontech في اليمن. نقدم حلول الطاقة الشمسية وأنظمة تخزين الطاقة وخدمات التركيب الاحترافية للمنازل والشركات."
        keywords="solar energy yemen, pylontech yemen, solar panels yemen, energy storage yemen, lithium batteries yemen, solar installation sana'a, off-grid solar yemen"
        keywordsAr="طاقة شمسية اليمن، بايلونتيك اليمن، ألواح شمسية اليمن، تخزين الطاقة اليمن، بطاريات ليثيوم اليمن، تركيب طاقة شمسية صنعاء"
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductsPreviewSection />
      <PylontechSection />
      <ServicesSection />
      <ApplicationsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
