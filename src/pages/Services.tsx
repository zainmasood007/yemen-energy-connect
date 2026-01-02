import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Phone, Wrench, Sparkles,
  PenTool, Settings, Battery, Lightbulb, ClipboardCheck, Gauge,
  Clock, Shield, MapPin, Users, Zap, Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SEO, { createBreadcrumbSchema, createServiceSchema } from '@/components/SEO';
import { Link } from 'react-router-dom';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';

interface ServiceFeature {
  textEn: string;
  textAr: string;
}

interface Service {
  id: string;
  key: string;
  icon: typeof PenTool;
  features: ServiceFeature[];
  benefitsEn: string[];
  benefitsAr: string[];
}

const services: Service[] = [
  { 
    id: 'design',
    key: 'services.items.design', 
    icon: PenTool,
    features: [
      { textEn: 'Energy consumption analysis', textAr: 'تحليل استهلاك الطاقة' },
      { textEn: 'Professional engineering design', textAr: 'تصميم هندسي احترافي' },
      { textEn: 'Equipment selection', textAr: 'اختيار المعدات المناسبة' },
      { textEn: 'Implementation drawings', textAr: 'رسومات تنفيذية' },
    ],
    benefitsEn: ['Optimal system sizing', 'Cost efficiency', 'Maximum energy output'],
    benefitsAr: ['حجم نظام مثالي', 'كفاءة التكلفة', 'أقصى إنتاج للطاقة']
  },
  { 
    id: 'installation',
    key: 'services.items.installation', 
    icon: Settings,
    features: [
      { textEn: 'Professional installation', textAr: 'تركيب احترافي' },
      { textEn: 'Specialized engineering team', textAr: 'فريق مهندسين متخصص' },
      { textEn: 'Comprehensive testing', textAr: 'اختبار شامل' },
      { textEn: 'Turnkey delivery', textAr: 'تسليم مفتاح' },
    ],
    benefitsEn: ['Quick installation', 'Safety compliance', 'System optimization'],
    benefitsAr: ['تركيب سريع', 'معايير السلامة', 'تحسين النظام']
  },
  { 
    id: 'storage',
    key: 'services.items.storage', 
    icon: Battery,
    features: [
      { textEn: 'Original Pylontech batteries', textAr: 'بطاريات Pylontech الأصلية' },
      { textEn: 'Hybrid systems', textAr: 'أنظمة هجينة' },
      { textEn: 'Off-grid solutions', textAr: 'حلول خارج الشبكة' },
      { textEn: 'Smart energy storage', textAr: 'تخزين طاقة ذكي' },
    ],
    benefitsEn: ['24/7 power availability', 'Energy independence', 'Long battery life'],
    benefitsAr: ['طاقة متاحة 24/7', 'استقلالية الطاقة', 'عمر بطارية طويل']
  },
  { 
    id: 'consultation',
    key: 'services.items.consultation', 
    icon: Lightbulb,
    features: [
      { textEn: 'Free consultation', textAr: 'استشارة مجانية' },
      { textEn: 'Proper sizing', textAr: 'تحديد الحجم المناسب' },
      { textEn: 'Feasibility study', textAr: 'دراسة الجدوى' },
      { textEn: 'Customized recommendations', textAr: 'توصيات مخصصة' },
    ],
    benefitsEn: ['Informed decisions', 'Budget planning', 'ROI calculation'],
    benefitsAr: ['قرارات مدروسة', 'تخطيط الميزانية', 'حساب العائد']
  },
  { 
    id: 'maintenance',
    key: 'services.items.maintenance', 
    icon: Wrench,
    features: [
      { textEn: 'Regular maintenance', textAr: 'صيانة دورية' },
      { textEn: '24/7 technical support', textAr: 'دعم فني 24/7' },
      { textEn: 'Original spare parts', textAr: 'قطع غيار أصلية' },
      { textEn: 'Fast response', textAr: 'استجابة سريعة' },
    ],
    benefitsEn: ['System longevity', 'Peak performance', 'Peace of mind'],
    benefitsAr: ['عمر نظام أطول', 'أداء مثالي', 'راحة البال']
  },
  { 
    id: 'assessment',
    key: 'services.items.assessment', 
    icon: ClipboardCheck,
    features: [
      { textEn: 'Site evaluation', textAr: 'تقييم الموقع' },
      { textEn: 'Solar radiation measurement', textAr: 'قياس الإشعاع الشمسي' },
      { textEn: 'Shade analysis', textAr: 'تحليل الظل' },
      { textEn: 'Comprehensive report', textAr: 'تقرير شامل' },
    ],
    benefitsEn: ['Accurate planning', 'Risk assessment', 'Optimal placement'],
    benefitsAr: ['تخطيط دقيق', 'تقييم المخاطر', 'موقع مثالي']
  },
];

const processSteps = [
  {
    stepEn: 'Consultation',
    stepAr: 'الاستشارة',
    descEn: 'Free consultation to understand your needs',
    descAr: 'استشارة مجانية لفهم احتياجاتك',
    icon: Lightbulb
  },
  {
    stepEn: 'Site Assessment',
    stepAr: 'تقييم الموقع',
    descEn: 'Technical evaluation of your location',
    descAr: 'تقييم فني لموقعك',
    icon: ClipboardCheck
  },
  {
    stepEn: 'Design & Quote',
    stepAr: 'التصميم والعرض',
    descEn: 'Custom system design and pricing',
    descAr: 'تصميم نظام مخصص وتسعير',
    icon: PenTool
  },
  {
    stepEn: 'Installation',
    stepAr: 'التركيب',
    descEn: 'Professional installation by our team',
    descAr: 'تركيب احترافي من فريقنا',
    icon: Settings
  },
  {
    stepEn: 'Support',
    stepAr: 'الدعم',
    descEn: 'Ongoing maintenance and support',
    descAr: 'صيانة ودعم مستمر',
    icon: Wrench
  },
];

export default function Services() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'خدماتنا' : 'Our Services', url: '/services' },
  ]);

  const servicesSchemas = services.map(service => createServiceSchema({
    name: t(`${service.key}.title`),
    description: t(`${service.key}.desc`),
    areaServed: 'Yemen'
  }));

  return (
    <Layout>
      <SEO
        title="Solar Energy Services in Yemen | Al-Qatta Solar Energy"
        titleAr="خدمات الطاقة الشمسية في اليمن | القطاع للطاقة الشمسية"
        description="Complete solar energy services in Yemen: system design, professional installation, energy storage solutions, technical consultation, maintenance, and site assessment."
        descriptionAr="خدمات طاقة شمسية متكاملة في اليمن: تصميم الأنظمة، التركيب الاحترافي، حلول تخزين الطاقة، الاستشارات الفنية، الصيانة، ودراسة الجدوى."
        keywords="solar installation yemen, solar system design yemen, energy storage installation, solar maintenance yemen, solar consultation yemen"
        keywordsAr="تركيب طاقة شمسية اليمن، تصميم أنظمة شمسية اليمن، تركيب تخزين الطاقة، صيانة طاقة شمسية اليمن، استشارات طاقة شمسية اليمن"
        canonical="/services"
        jsonLd={[breadcrumbSchema, ...servicesSchemas]}
      />

      {/* Hero */}
      <PageHero
        badge={isRTL ? 'خدمات متكاملة' : 'Complete Services'}
        badgeIcon={Sparkles}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      {/* Quick Stats */}
      <section className="py-10 bg-gradient-to-r from-secondary via-secondary/95 to-secondary relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 start-1/4 w-40 h-40 bg-secondary-foreground/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 end-1/3 w-32 h-32 bg-secondary-foreground/5 rounded-full blur-2xl animate-blob delay-500" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, valueEn: '24/7', valueAr: '24/7', labelEn: 'Support', labelAr: 'دعم' },
              { icon: Shield, valueEn: '10', valueAr: '10', labelEn: 'Years Warranty', labelAr: 'سنوات ضمان' },
              { icon: MapPin, valueEn: '18', valueAr: '18', labelEn: 'Governorates', labelAr: 'محافظة' },
              { icon: Users, valueEn: '500+', valueAr: '+500', labelEn: 'Projects', labelAr: 'مشروع' },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="group text-center p-4 rounded-xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary-foreground/10 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-5 w-5 text-secondary-foreground icon-bounce" />
                </div>
                <div className="text-xl md:text-2xl font-black text-secondary-foreground">{isRTL ? stat.valueAr : stat.valueEn}</div>
                <div className="text-xs text-secondary-foreground/75">{isRTL ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 end-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-blob delay-500" />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              {isRTL ? 'خدماتنا الشاملة' : 'Our Complete Services'}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {isRTL 
                ? 'نقدم حلولاً متكاملة من التصميم إلى الصيانة'
                : 'We provide end-to-end solutions from design to maintenance'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <GlassCard 
                key={service.id} 
                variant="frosted"
                padding="none"
                className={cn(
                  "group overflow-hidden border-animated",
                  `animate-slide-up`,
                  idx === 0 && 'delay-75',
                  idx === 1 && 'delay-150',
                  idx === 2 && 'delay-200',
                  idx === 3 && 'delay-300',
                  idx === 4 && 'delay-400',
                  idx === 5 && 'delay-500',
                )}
              >
                {/* Header */}
                <div className="p-6 border-b border-border/50 bg-gradient-to-br from-muted/50 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-soft">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-1">{t(`${service.key}.title`)}</h2>
                      <p className="text-muted-foreground text-sm">{t(`${service.key}.desc`)}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {isRTL ? 'ما نقدمه' : 'What We Offer'}
                  </div>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm group/item">
                        <CheckCircle className="h-4 w-4 text-success shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>{isRTL ? feature.textAr : feature.textEn}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Benefits */}
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {isRTL ? 'الفوائد' : 'Benefits'}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {(isRTL ? service.benefitsAr : service.benefitsEn).map((benefit, i) => (
                      <span key={i} className="text-xs bg-secondary/15 text-secondary px-2.5 py-1 rounded-full border border-secondary/20">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" />
                      {t('common.requestQuote')}
                    </a>
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-surface relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-dots opacity-30" />
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              {isRTL ? 'كيف نعمل' : 'How We Work'}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {isRTL 
                ? 'خطوات بسيطة للحصول على نظام طاقة شمسية متكامل'
                : 'Simple steps to get your complete solar energy system'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative text-center group">
                  {/* Connector line */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-7 start-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-3 mx-auto shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-6 w-6 icon-bounce" />
                    </div>
                    <div className="text-xs font-bold text-secondary mb-1">
                      {isRTL ? `الخطوة ${idx + 1}` : `Step ${idx + 1}`}
                    </div>
                    <h3 className="font-bold text-sm mb-1">{isRTL ? step.stepAr : step.stepEn}</h3>
                    <p className="text-muted-foreground text-xs">{isRTL ? step.descAr : step.descEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 start-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-0 end-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[80px] animate-pulse-soft delay-300" />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              {isRTL ? 'لماذا تختار خدماتنا؟' : 'Why Choose Our Services?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Shield, titleEn: 'Warranty', titleAr: 'ضمان', descEn: 'Up to 10 years warranty on all installations', descAr: 'ضمان حتى 10 سنوات على جميع التركيبات' },
              { icon: Zap, titleEn: 'Fast Response', titleAr: 'استجابة سريعة', descEn: 'Same-day response for support requests', descAr: 'استجابة في نفس اليوم لطلبات الدعم' },
              { icon: Star, titleEn: 'Quality', titleAr: 'جودة', descEn: 'Only original products and certified work', descAr: 'منتجات أصلية فقط وعمل معتمد' },
              { icon: Gauge, titleEn: 'Experience', titleAr: 'خبرة', descEn: '10+ years in solar energy industry', descAr: '+10 سنوات في مجال الطاقة الشمسية' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group text-center p-6 rounded-2xl glass-dark hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary/30 text-secondary mb-4 group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <item.icon className="h-6 w-6 icon-pulse" />
                </div>
                <h3 className="font-bold text-base mb-1">{isRTL ? item.titleAr : item.titleEn}</h3>
                <p className="text-primary-foreground/70 text-xs">{isRTL ? item.descAr : item.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container">
          <div className="bg-secondary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-3">
              {isRTL ? 'هل تحتاج إلى استشارة مجانية؟' : 'Need a Free Consultation?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-lg mx-auto text-sm">
              {isRTL 
                ? 'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك'
                : 'Contact us now for a free consultation and a customized quote for your project'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  {t('contact.whatsapp')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/contact">
                  {t('nav.contact')}
                  <Arrow className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
