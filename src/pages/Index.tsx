import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Sun, Shield, Wrench, MapPin, 
  Battery, Zap, CheckCircle2, Phone, Users, Star, 
  Building2, Home, Factory, Truck, ChevronDown, HelpCircle
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,8%)] via-[hsl(215,80%,15%)] to-[hsl(220,30%,8%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-8 animate-fade-in">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              asChild 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all glow-solar"
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
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Link to="/products">
                {t('hero.ctaSecondary')}
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>{isRTL ? 'ضمان 10 سنوات' : '10 Years Warranty'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>{isRTL ? 'دعم فني 24/7' : '24/7 Support'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>{isRTL ? 'تغطية جميع المحافظات' : 'All Governorates'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

// ============ Stats Section ============
function StatsSection() {
  const { isRTL } = useLanguage();
  
  const stats = [
    { value: '500+', label: isRTL ? 'مشروع منجز' : 'Projects Completed' },
    { value: '10+', label: isRTL ? 'سنوات خبرة' : 'Years Experience' },
    { value: '18', label: isRTL ? 'محافظة نخدمها' : 'Governorates Served' },
    { value: '24/7', label: isRTL ? 'دعم فني' : 'Technical Support' },
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
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
    { icon: Shield, titleKey: 'features.authorized.title', descKey: 'features.authorized.desc', color: 'text-secondary' },
    { icon: CheckCircle2, titleKey: 'features.warranty.title', descKey: 'features.warranty.desc', color: 'text-accent' },
    { icon: Wrench, titleKey: 'features.expertise.title', descKey: 'features.expertise.desc', color: 'text-primary' },
    { icon: MapPin, titleKey: 'features.coverage.title', descKey: 'features.coverage.desc', color: 'text-success' },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className={cn(
                "inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary/5 mb-5 group-hover:scale-110 transition-transform",
                feature.color
              )}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t(feature.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
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
      desc: isRTL ? 'بطاريات ليثيوم فوسفات الحديد الأصلية' : 'Original LiFePO4 Batteries'
    },
    { 
      key: 'products.categories.lithium', 
      icon: Battery,
      desc: isRTL ? 'بطاريات عالية الأداء' : 'High-performance batteries'
    },
    { 
      key: 'products.categories.panels', 
      icon: Sun,
      desc: isRTL ? 'ألواح أحادية ومتعددة البلورات' : 'Mono & Poly crystalline panels'
    },
    { 
      key: 'products.categories.inverters', 
      icon: Zap,
      desc: isRTL ? 'انفرترات هجينة وخارج الشبكة' : 'Hybrid & Off-grid inverters'
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('products.title')}</h2>
            <p className="text-muted-foreground">{t('products.subtitle')}</p>
          </div>
          <Button asChild variant="outline" className="group">
            <Link to="/products">
              {t('products.viewAll')}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.key}
              to="/products"
              className={cn(
                "group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:shadow-xl",
                category.highlight 
                  ? "bg-primary text-primary-foreground hover:-translate-y-1" 
                  : "bg-card border border-border hover:border-primary/50 hover:-translate-y-1"
              )}
            >
              <div className={cn(
                "inline-flex items-center justify-center h-14 w-14 rounded-xl mb-4 transition-transform group-hover:scale-110",
                category.highlight 
                  ? "bg-secondary text-secondary-foreground" 
                  : "bg-primary/10 text-primary"
              )}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t(category.key)}</h3>
              <p className={cn(
                "text-sm mb-4",
                category.highlight ? "opacity-80" : "text-muted-foreground"
              )}>
                {category.desc}
              </p>
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium",
                category.highlight ? "text-secondary" : "text-primary"
              )}>
                {t('common.viewDetails')}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </div>
              {category.highlight && (
                <div className="absolute top-3 end-3 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">
                  {isRTL ? 'وكيل معتمد' : 'Authorized'}
                </div>
              )}
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
    { value: '6000+', label: isRTL ? 'دورة شحن' : 'Charge Cycles' },
    { value: '10', label: isRTL ? 'سنوات ضمان' : 'Years Warranty' },
    { value: '95%+', label: isRTL ? 'كفاءة' : 'Efficiency' },
    { value: 'A+', label: isRTL ? 'تصنيف الأمان' : 'Safety Rating' },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Blueprint pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              {t('pylontech.authorized')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {t('pylontech.title')}
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              {t('pylontech.subtitle')}
            </p>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10"
                >
                  <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">
                    {feature.value}
                  </div>
                  <div className="text-sm opacity-80">{feature.label}</div>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link to="/pylontech">
                {t('common.learnMore')}
                <Arrow className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
              
              {/* Main card */}
              <div className="relative h-full rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-24 w-24 rounded-2xl bg-secondary/20 mb-6">
                    <Battery className="h-12 w-12 text-secondary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-3">Pylontech</div>
                  <p className="text-sm opacity-80 mb-4">
                    {isRTL ? 'بطاريات ليثيوم فوسفات الحديد' : 'LiFePO4 Batteries'}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-secondary">
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

// ============ Services Section ============
function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    { key: 'services.items.design', icon: '📐', color: 'bg-blue-500/10 text-blue-600' },
    { key: 'services.items.installation', icon: '🔧', color: 'bg-orange-500/10 text-orange-600' },
    { key: 'services.items.storage', icon: '🔋', color: 'bg-green-500/10 text-green-600' },
    { key: 'services.items.consultation', icon: '💡', color: 'bg-yellow-500/10 text-yellow-600' },
    { key: 'services.items.maintenance', icon: '🛠️', color: 'bg-purple-500/10 text-purple-600' },
    { key: 'services.items.assessment', icon: '📊', color: 'bg-cyan-500/10 text-cyan-600' },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.subtitle')}</p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.key}
              to="/services"
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t(`${service.key}.desc`)}
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-primary">
                {t('common.learnMore')}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
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
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'حلول لكل القطاعات' : 'Solutions for Every Sector'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isRTL ? 'نقدم حلول طاقة شمسية مخصصة لجميع أنواع المباني والمشاريع' : 'We provide customized solar solutions for all types of buildings and projects'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <app.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-1">{app.title}</h3>
              <p className="text-sm text-muted-foreground">{app.desc}</p>
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
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-secondary to-warning p-8 md:p-16 text-center">
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-grid opacity-10" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground mb-4">
              {isRTL ? 'هل أنت جاهز للتحول إلى الطاقة الشمسية؟' : 'Ready to Switch to Solar Energy?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
              {isRTL 
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك'
                : 'Contact us today for a free consultation and a customized quote for your needs'
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8"
              >
                <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                </a>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                <a href="tel:+967777777777">
                  <Phone className="h-4 w-4" />
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
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-4">
            <HelpCircle className="h-7 w-7" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'إجابات على أكثر الأسئلة شيوعاً حول الطاقة الشمسية وأنظمة تخزين الطاقة'
              : 'Answers to the most common questions about solar energy and energy storage systems'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-start hover:no-underline py-4">
                  <span className="font-medium">
                    {isRTL ? faq.questionAr : faq.questionEn}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {isRTL ? faq.answerAr : faq.answerEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            {isRTL ? 'لديك سؤال آخر؟' : 'Have another question?'}
          </p>
          <Button asChild variant="outline">
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
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
