import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Home, Building2, Store, Landmark, Phone, Calculator, 
  Sun, Battery, Zap, ArrowRight, ArrowLeft, CheckCircle,
  HelpCircle, Lightbulb, TrendingUp, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO, { createBreadcrumbSchema, createFAQSchema, createArticleSchema } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

// System type configurations
const systemTypes = [
  {
    id: 'home-small',
    icon: Home,
    nameAr: 'منزل صغير',
    nameEn: 'Small Home',
    descAr: 'شقة أو منزل صغير (غرفتين-3 غرف)',
    descEn: 'Apartment or small home (2-3 rooms)',
    loadAr: '1-3 كيلوواط',
    loadEn: '1-3 kW',
    panelsAr: '4-8 ألواح',
    panelsEn: '4-8 panels',
    batteryAr: 'بطارية واحدة (5 كيلوواط ساعة)',
    batteryEn: '1 battery (5 kWh)',
    rangeAr: '$2,000 - $4,000',
    rangeEn: '$2,000 - $4,000',
    savingsAr: 'توفير شهري: $50-100',
    savingsEn: 'Monthly savings: $50-100',
    roiAr: 'استرداد التكلفة: 2-3 سنوات',
    roiEn: 'ROI: 2-3 years',
    featured: false,
  },
  {
    id: 'home-medium',
    icon: Home,
    nameAr: 'منزل متوسط',
    nameEn: 'Medium Home',
    descAr: 'فيلا أو منزل عائلي (4-6 غرف)',
    descEn: 'Villa or family home (4-6 rooms)',
    loadAr: '3-5 كيلوواط',
    loadEn: '3-5 kW',
    panelsAr: '8-14 لوح',
    panelsEn: '8-14 panels',
    batteryAr: '2-3 بطاريات (10-15 كيلوواط ساعة)',
    batteryEn: '2-3 batteries (10-15 kWh)',
    rangeAr: '$4,000 - $8,000',
    rangeEn: '$4,000 - $8,000',
    savingsAr: 'توفير شهري: $100-200',
    savingsEn: 'Monthly savings: $100-200',
    roiAr: 'استرداد التكلفة: 2-4 سنوات',
    roiEn: 'ROI: 2-4 years',
    featured: true,
  },
  {
    id: 'shop',
    icon: Store,
    nameAr: 'محل تجاري',
    nameEn: 'Commercial Shop',
    descAr: 'محل أو مكتب أو عيادة',
    descEn: 'Shop, office, or clinic',
    loadAr: '3-8 كيلوواط',
    loadEn: '3-8 kW',
    panelsAr: '8-20 لوح',
    panelsEn: '8-20 panels',
    batteryAr: '2-4 بطاريات',
    batteryEn: '2-4 batteries',
    rangeAr: '$5,000 - $12,000',
    rangeEn: '$5,000 - $12,000',
    savingsAr: 'توفير شهري: $150-400',
    savingsEn: 'Monthly savings: $150-400',
    roiAr: 'استرداد التكلفة: 2-3 سنوات',
    roiEn: 'ROI: 2-3 years',
    featured: false,
  },
  {
    id: 'farm',
    icon: Sun,
    nameAr: 'مزرعة',
    nameEn: 'Farm',
    descAr: 'مزرعة مع نظام ري بالطاقة الشمسية',
    descEn: 'Farm with solar irrigation system',
    loadAr: '5-20 كيلوواط',
    loadEn: '5-20 kW',
    panelsAr: '14-50 لوح',
    panelsEn: '14-50 panels',
    batteryAr: 'حسب الحاجة (اختياري)',
    batteryEn: 'As needed (optional)',
    rangeAr: '$8,000 - $30,000',
    rangeEn: '$8,000 - $30,000',
    savingsAr: 'توفير وقود الديزل: $200-800/شهر',
    savingsEn: 'Diesel savings: $200-800/mo',
    roiAr: 'استرداد التكلفة: 1-2 سنة',
    roiEn: 'ROI: 1-2 years',
    featured: false,
  },
  {
    id: 'enterprise',
    icon: Landmark,
    nameAr: 'مؤسسة / مصنع',
    nameEn: 'Enterprise / Factory',
    descAr: 'مشاريع صناعية وتجارية كبيرة',
    descEn: 'Large industrial and commercial projects',
    loadAr: '20+ كيلوواط',
    loadEn: '20+ kW',
    panelsAr: '50+ لوح',
    panelsEn: '50+ panels',
    batteryAr: 'أنظمة تخزين متقدمة',
    batteryEn: 'Advanced storage systems',
    rangeAr: '$30,000+',
    rangeEn: '$30,000+',
    savingsAr: 'دراسة جدوى مخصصة',
    savingsEn: 'Custom feasibility study',
    roiAr: 'استرداد التكلفة: 1-3 سنوات',
    roiEn: 'ROI: 1-3 years',
    featured: false,
  },
];

// Cost factors
const costFactors = [
  {
    icon: Sun,
    titleAr: 'الألواح الشمسية',
    titleEn: 'Solar Panels',
    percentAr: '30-40%',
    percentEn: '30-40%',
    descAr: 'تعتمد على القدرة والجودة (Trina، Jinko، Canadian Solar)',
    descEn: 'Depends on capacity and quality (Trina, Jinko, Canadian Solar)',
  },
  {
    icon: Battery,
    titleAr: 'البطاريات',
    titleEn: 'Batteries',
    percentAr: '25-40%',
    percentEn: '25-40%',
    descAr: 'أكبر استثمار - ليثيوم Pylontech أو جل',
    descEn: 'Largest investment - Pylontech lithium or gel',
  },
  {
    icon: Zap,
    titleAr: 'الانفرتر',
    titleEn: 'Inverter',
    percentAr: '15-25%',
    percentEn: '15-25%',
    descAr: 'قلب النظام - Huawei، Voltronic، LiPower',
    descEn: 'System heart - Huawei, Voltronic, LiPower',
  },
  {
    icon: Shield,
    titleAr: 'التركيب والملحقات',
    titleEn: 'Installation & Accessories',
    percentAr: '10-20%',
    percentEn: '10-20%',
    descAr: 'الكابلات، الهيكل، الحماية، أجرة التركيب',
    descEn: 'Cables, structure, protection, installation labor',
  },
];

// FAQs
const pricingFaqs = [
  {
    questionAr: 'لماذا لا تعرضون أسعار محددة على الموقع؟',
    questionEn: "Why don't you show specific prices on the website?",
    answerAr: 'لأن كل نظام يُصمم حسب احتياجاتك الفعلية. الأحمال الكهربائية، ساعات التشغيل، جودة المكونات، وموقع التركيب كلها تؤثر على السعر النهائي. نقدم عروض أسعار مجانية ودقيقة بعد دراسة احتياجاتك.',
    answerEn: 'Because each system is designed according to your actual needs. Electrical loads, operating hours, component quality, and installation location all affect the final price. We provide free and accurate quotes after studying your needs.',
  },
  {
    questionAr: 'كم يستغرق استرداد تكلفة النظام الشمسي؟',
    questionEn: 'How long does it take to recover the solar system cost?',
    answerAr: 'في اليمن، بسبب ارتفاع أسعار الوقود والكهرباء، يُسترد الاستثمار عادةً خلال 1-3 سنوات. بعدها يصبح كل ما توفره ربحاً صافياً لمدة 20+ سنة.',
    answerEn: "In Yemen, due to high fuel and electricity prices, investment is typically recovered within 1-3 years. After that, all savings become net profit for 20+ years.",
  },
  {
    questionAr: 'هل بطاريات الليثيوم تستحق فرق السعر؟',
    questionEn: 'Are lithium batteries worth the price difference?',
    answerAr: 'نعم، بطاريات الليثيوم (مثل Pylontech) تدوم 6000+ دورة مقابل 500-800 دورة لبطاريات الرصاص. على المدى الطويل (10-15 سنة)، الليثيوم أرخص وأكثر كفاءة.',
    answerEn: 'Yes, lithium batteries (like Pylontech) last 6000+ cycles vs 500-800 for lead-acid. In the long term (10-15 years), lithium is cheaper and more efficient.',
  },
  {
    questionAr: 'هل يمكن البدء بنظام صغير ثم التوسعة؟',
    questionEn: 'Can I start small and expand later?',
    answerAr: 'بالتأكيد! نصمم الأنظمة لتكون قابلة للتوسعة. يمكنك البدء ببطارية واحدة وإضافة المزيد لاحقاً، أو زيادة عدد الألواح حسب ميزانيتك.',
    answerEn: 'Absolutely! We design systems to be expandable. You can start with one battery and add more later, or increase panel count according to your budget.',
  },
  {
    questionAr: 'ما المكونات الأساسية لأي نظام شمسي؟',
    questionEn: 'What are the essential components of any solar system?',
    answerAr: 'كل نظام يحتاج: (1) ألواح شمسية لتوليد الكهرباء، (2) انفرتر لتحويل التيار، (3) بطاريات للتخزين (اختياري للأنظمة المتصلة بالشبكة)، (4) منظم شحن (مدمج عادةً)، (5) كابلات وحماية.',
    answerEn: 'Every system needs: (1) Solar panels to generate electricity, (2) Inverter to convert current, (3) Batteries for storage (optional for grid-tied systems), (4) Charge controller (usually integrated), (5) Cables and protection.',
  },
  {
    questionAr: 'هل تقدمون خدمة التقسيط أو التمويل؟',
    questionEn: 'Do you offer installment or financing?',
    answerAr: 'نعمل مع عملائنا على إيجاد حلول دفع مناسبة. تواصل معنا لمناقشة خيارات الدفع المتاحة حسب حجم المشروع.',
    answerEn: 'We work with our clients to find suitable payment solutions. Contact us to discuss available payment options based on project size.',
  },
];

export default function Pricing() {
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');

  const homePath = isEnPath ? '/en' : '/';
  const pricingPath = isEnPath ? '/en/pricing' : '/pricing';

  // SEO Schemas
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: homePath },
    { name: isRTL ? 'الأسعار والتكلفة' : 'Pricing & Cost', url: pricingPath },
  ]);

  const faqSchema = createFAQSchema(
    pricingFaqs.map(faq => ({
      question: isRTL ? faq.questionAr : faq.questionEn,
      answer: isRTL ? faq.answerAr : faq.answerEn,
    }))
  );

  const articleSchema = createArticleSchema({
    headline: 'Solar System Cost in Yemen - Complete Pricing Guide 2025',
    headlineAr: 'تكلفة نظام الطاقة الشمسية في اليمن - دليل الأسعار الشامل 2025',
    description: 'Comprehensive guide to solar system pricing in Yemen. Learn about costs for homes, farms, and businesses with estimated ROI.',
    datePublished: '2024-12-01',
    dateModified: '2024-12-25',
    url: '/pricing',
  });

  return (
    <Layout>
      <SEO
        title="Solar System Prices in Yemen 2025 | Cost Guide - Al-Qatta Solar"
        titleAr="أسعار أنظمة الطاقة الشمسية في اليمن 2025 | دليل التكلفة - القطع"
        description="Complete guide to solar system costs in Yemen. Compare prices for homes, farms, shops and enterprises. Get free quote from authorized Pylontech dealer."
        descriptionAr="دليل شامل لتكلفة أنظمة الطاقة الشمسية في اليمن. قارن أسعار المنازل والمزارع والمحلات والمؤسسات. احصل على عرض سعر مجاني من الوكيل المعتمد لبايلونتيك."
        keywords="solar system price Yemen, solar panel cost, Pylontech battery price, inverter price Yemen, solar energy cost"
        keywordsAr="سعر نظام شمسي اليمن، تكلفة الطاقة الشمسية، سعر بطارية بايلونتيك، سعر انفرتر اليمن، تكلفة الألواح الشمسية"
        canonical={pricingPath}
        jsonLd={[breadcrumbSchema, faqSchema, articleSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Calculator className="h-3 w-3 me-1" />
              {isRTL ? 'دليل الأسعار 2025' : 'Pricing Guide 2025'}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {isRTL 
                ? 'كم تكلفة نظام الطاقة الشمسية في اليمن؟' 
                : 'How Much Does a Solar System Cost in Yemen?'}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {isRTL
                ? 'دليل شامل لفهم تكاليف الطاقة الشمسية - بدون أرقام وهمية، فقط معلومات حقيقية تساعدك على اتخاذ القرار الصحيح.'
                : 'Comprehensive guide to understanding solar costs - no fake numbers, just real information to help you make the right decision.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  {isRTL ? 'احصل على عرض سعر مجاني' : 'Get Free Quote'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/products">
                  {isRTL ? 'تصفح المنتجات' : 'Browse Products'}
                  <Arrow className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isRTL ? 'تقديرات التكلفة حسب نوع الاستخدام' : 'Cost Estimates by Usage Type'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL
                ? 'هذه تقديرات عامة تعتمد على متوسط أسعار السوق. السعر الفعلي يعتمد على احتياجاتك المحددة.'
                : 'These are general estimates based on average market prices. Actual price depends on your specific needs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemTypes.map((system) => {
              const Icon = system.icon;
              return (
                <div 
                  key={system.id}
                  className={cn(
                    "relative bg-card border rounded-2xl p-6 transition-all hover:shadow-lg",
                    system.featured 
                      ? "border-primary shadow-md ring-2 ring-primary/20" 
                      : "border-border"
                  )}
                >
                  {system.featured && (
                    <Badge className="absolute -top-3 start-4 bg-primary text-primary-foreground">
                      {isRTL ? 'الأكثر شيوعاً' : 'Most Popular'}
                    </Badge>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{isRTL ? system.nameAr : system.nameEn}</h3>
                      <p className="text-sm text-muted-foreground">{isRTL ? system.descAr : system.descEn}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{isRTL ? 'حجم الأحمال' : 'Load Size'}</span>
                      <span className="font-medium">{isRTL ? system.loadAr : system.loadEn}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{isRTL ? 'الألواح' : 'Panels'}</span>
                      <span className="font-medium">{isRTL ? system.panelsAr : system.panelsEn}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{isRTL ? 'البطاريات' : 'Batteries'}</span>
                      <span className="font-medium">{isRTL ? system.batteryAr : system.batteryEn}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-primary">
                        {isRTL ? system.rangeAr : system.rangeEn}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {isRTL ? 'نطاق سعري تقديري' : 'Estimated price range'}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-center text-muted-foreground">
                      <span className="text-success">{isRTL ? system.savingsAr : system.savingsEn}</span>
                      <span>{isRTL ? system.roiAr : system.roiEn}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full" variant={system.featured ? "default" : "outline"}>
                    <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" />
                      {isRTL ? 'طلب عرض سعر' : 'Request Quote'}
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-warning/5 border border-warning/20 rounded-xl p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <Lightbulb className="inline h-4 w-4 text-warning me-2" />
              {isRTL
                ? 'الأسعار تقديرية وتعتمد على سعر الصرف، تكلفة الشحن، ونوعية المكونات المختارة. تواصل معنا للحصول على عرض سعر دقيق.'
                : 'Prices are estimates and depend on exchange rate, shipping costs, and component quality chosen. Contact us for an accurate quote.'}
            </p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {isRTL ? 'توزيع التكلفة - أين تذهب أموالك؟' : 'Cost Breakdown - Where Does Your Money Go?'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'فهم مكونات النظام يساعدك على اتخاذ قرارات أفضل'
                  : 'Understanding system components helps you make better decisions'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {costFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">{isRTL ? factor.titleAr : factor.titleEn}</h3>
                          <Badge variant="secondary" className="font-mono">
                            {isRTL ? factor.percentAr : factor.percentEn}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? factor.descAr : factor.descEn}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Prices Vary */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {isRTL ? 'لماذا تختلف الأسعار؟' : 'Why Do Prices Vary?'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="font-bold mb-2">{isRTL ? 'حجم الأحمال' : 'Load Size'}</h3>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? 'كلما زادت الأحمال الكهربائية، زاد حجم النظام المطلوب والتكلفة'
                    : 'The more electrical loads, the larger the system needed and higher the cost'}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="font-bold mb-2">{isRTL ? 'جودة المكونات' : 'Component Quality'}</h3>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? 'الماركات العالمية مثل Pylontech وHuawei تكلف أكثر لكنها تدوم أطول'
                    : 'Global brands like Pylontech and Huawei cost more but last longer'}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="font-bold mb-2">{isRTL ? 'ساعات التخزين' : 'Storage Hours'}</h3>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? 'كلما أردت ساعات تشغيل أكثر بدون شمس، زادت البطاريات المطلوبة'
                    : 'The more hours you need without sun, the more batteries required'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {isRTL ? 'أسئلة شائعة عن الأسعار' : 'Pricing FAQ'}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-start font-medium">
                      {isRTL ? faq.questionAr : faq.questionEn}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {isRTL ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isRTL ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {isRTL
                ? 'تواصل معنا الآن للحصول على دراسة مجانية وعرض سعر دقيق يناسب احتياجاتك'
                : 'Contact us now for a free study and accurate quote tailored to your needs'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                  {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  {isRTL ? 'صفحة التواصل' : 'Contact Page'}
                  <Arrow className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                {isRTL ? 'وكيل Pylontech المعتمد' : 'Authorized Pylontech Dealer'}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                {isRTL ? 'ضمان حقيقي' : 'Real Warranty'}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                {isRTL ? 'خبرة +10 سنوات' : '10+ Years Experience'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold mb-6 text-center">
              {isRTL ? 'مقالات ذات صلة' : 'Related Articles'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                to="/knowledge/solar-system-cost-yemen"
                className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all group"
              >
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {isRTL ? 'تكلفة نظام الطاقة الشمسية في اليمن' : 'Solar System Cost in Yemen'}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {isRTL ? 'تحليل تفصيلي للتكاليف' : 'Detailed cost analysis'}
                </p>
              </Link>
              <Link 
                to="/knowledge/inverter-sizing"
                className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all group"
              >
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {isRTL ? 'كيف تحسب حجم الانفرتر' : 'How to Calculate Inverter Size'}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {isRTL ? 'دليل اختيار الحجم المناسب' : 'Sizing selection guide'}
                </p>
              </Link>
              <Link 
                to="/knowledge/lithium-vs-lead-acid"
                className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all group"
              >
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {isRTL ? 'ليثيوم vs رصاص' : 'Lithium vs Lead-Acid'}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {isRTL ? 'مقارنة شاملة للبطاريات' : 'Comprehensive battery comparison'}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}