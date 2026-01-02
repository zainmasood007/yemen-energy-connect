import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';
import { 
  Battery, Zap, Clock, Thermometer, Scale, Recycle,
  CheckCircle2, XCircle, ArrowLeft, ArrowRight,
  Home, Building2, Car, Sun, AlertTriangle, Leaf
} from 'lucide-react';

// Comparison data
const comparisonCategories = [
  {
    category: { ar: 'العمر الافتراضي', en: 'Lifespan' },
    icon: Clock,
    lithium: { ar: '6,000+ دورة (10-15 سنة)', en: '6,000+ cycles (10-15 years)' },
    leadAcid: { ar: '300-500 دورة (2-4 سنوات)', en: '300-500 cycles (2-4 years)' },
    winner: 'lithium',
  },
  {
    category: { ar: 'عمق التفريغ (DoD)', en: 'Depth of Discharge (DoD)' },
    icon: Battery,
    lithium: { ar: '80-95% آمن', en: '80-95% safe' },
    leadAcid: { ar: '50% فقط للحفاظ على العمر', en: '50% only to preserve lifespan' },
    winner: 'lithium',
  },
  {
    category: { ar: 'الكفاءة', en: 'Efficiency' },
    icon: Zap,
    lithium: { ar: '95-98%', en: '95-98%' },
    leadAcid: { ar: '80-85%', en: '80-85%' },
    winner: 'lithium',
  },
  {
    category: { ar: 'الوزن', en: 'Weight' },
    icon: Scale,
    lithium: { ar: 'خفيفة (1/3 الوزن)', en: 'Light (1/3 the weight)' },
    leadAcid: { ar: 'ثقيلة جداً', en: 'Very heavy' },
    winner: 'lithium',
  },
  {
    category: { ar: 'تحمل الحرارة', en: 'Heat Tolerance' },
    icon: Thermometer,
    lithium: { ar: 'جيد (حتى 50°C)', en: 'Good (up to 50°C)' },
    leadAcid: { ar: 'ضعيف (تتدهور بسرعة)', en: 'Poor (degrades quickly)' },
    winner: 'lithium',
  },
  {
    category: { ar: 'الصيانة', en: 'Maintenance' },
    icon: Recycle,
    lithium: { ar: 'لا تحتاج صيانة', en: 'Maintenance-free' },
    leadAcid: { ar: 'تحتاج فحص دوري للماء', en: 'Needs periodic water checks' },
    winner: 'lithium',
  },
  {
    category: { ar: 'السعر الأولي', en: 'Initial Price' },
    icon: Scale,
    lithium: { ar: 'أعلى (2-3x)', en: 'Higher (2-3x)' },
    leadAcid: { ar: 'أرخص', en: 'Cheaper' },
    winner: 'leadAcid',
  },
  {
    category: { ar: 'الأمان', en: 'Safety' },
    icon: AlertTriangle,
    lithium: { ar: 'آمنة جداً (LiFePO4)', en: 'Very safe (LiFePO4)' },
    leadAcid: { ar: 'تنتج غازات سامة', en: 'Produces toxic gases' },
    winner: 'lithium',
  },
];

// Use case recommendations
const useCaseRecommendations = [
  {
    useCase: { ar: 'منزل سكني (استخدام يومي)', en: 'Residential home (daily use)' },
    icon: Home,
    recommendation: 'lithium',
    reason: { ar: 'الاستخدام اليومي يستهلك دورات كثيرة، الليثيوم يدوم أطول', en: 'Daily use consumes many cycles, lithium lasts longer' },
    products: ['us5000', 'pelio-l'],
  },
  {
    useCase: { ar: 'منشأة تجارية', en: 'Commercial facility' },
    icon: Building2,
    recommendation: 'lithium',
    reason: { ar: 'الكفاءة العالية توفر الكهرباء والمساحة', en: 'High efficiency saves electricity and space' },
    products: ['us5000'],
  },
  {
    useCase: { ar: 'نظام طوارئ (استخدام نادر)', en: 'Emergency system (rare use)' },
    icon: AlertTriangle,
    recommendation: 'leadAcid',
    reason: { ar: 'الاستخدام النادر لا يستفيد من عمر الليثيوم الطويل', en: 'Rare use does not benefit from lithium long lifespan' },
    products: [],
  },
  {
    useCase: { ar: 'كرفان / رحلات', en: 'Caravan / Trips' },
    icon: Car,
    recommendation: 'lithium',
    reason: { ar: 'الوزن الخفيف والحجم الصغير أساسيان', en: 'Light weight and small size are essential' },
    products: ['12v-100ah-lithium', 'amber-rock'],
  },
  {
    useCase: { ar: 'نظام شمسي كبير (Off-Grid)', en: 'Large solar system (Off-Grid)' },
    icon: Sun,
    recommendation: 'lithium',
    reason: { ar: 'التكلفة الإجمالية أقل على المدى الطويل', en: 'Total cost is lower in the long run' },
    products: ['us5000', 'pelio-l'],
  },
  {
    useCase: { ar: 'ميزانية محدودة جداً', en: 'Very limited budget' },
    icon: Scale,
    recommendation: 'leadAcid',
    reason: { ar: 'السعر الأولي أقل، لكن التكلفة الإجمالية أعلى', en: 'Lower initial price, but higher total cost' },
    products: [],
  },
];

// FAQs
const faqs = [
  {
    q: { ar: 'هل بطاريات الليثيوم آمنة؟', en: 'Are lithium batteries safe?' },
    a: { ar: 'بطاريات LiFePO4 (ليثيوم فوسفات الحديد) مثل Pylontech آمنة جداً. لا تحترق ولا تنفجر حتى في حالة التلف، على عكس بطاريات الليثيوم أيون العادية. هذا هو السبب في اختيارنا لتقنية LiFePO4 حصرياً.', en: 'LiFePO4 (Lithium Iron Phosphate) batteries like Pylontech are very safe. They do not burn or explode even if damaged, unlike regular lithium-ion batteries. This is why we exclusively choose LiFePO4 technology.' },
  },
  {
    q: { ar: 'كم تدوم بطارية الليثيوم مقارنة بالرصاص؟', en: 'How long does a lithium battery last compared to lead-acid?' },
    a: { ar: 'بطاريات الليثيوم تدوم 10-15 سنة بمعدل استخدام يومي، بينما بطاريات الرصاص تحتاج استبدال كل 2-4 سنوات. هذا يعني أنك قد تحتاج 3-5 بطاريات رصاص لتعادل عمر بطارية ليثيوم واحدة.', en: 'Lithium batteries last 10-15 years with daily use, while lead-acid batteries need replacement every 2-4 years. This means you may need 3-5 lead-acid batteries to equal the lifespan of one lithium battery.' },
  },
  {
    q: { ar: 'لماذا بطاريات الليثيوم أغلى؟', en: 'Why are lithium batteries more expensive?' },
    a: { ar: 'السعر الأولي أعلى بسبب تقنية التصنيع المتقدمة ونظام إدارة البطارية (BMS) المدمج. لكن عند حساب التكلفة لكل دورة شحن، الليثيوم أرخص بكثير على المدى الطويل.', en: 'Initial price is higher due to advanced manufacturing technology and built-in Battery Management System (BMS). But when calculating cost per charge cycle, lithium is much cheaper in the long run.' },
  },
  {
    q: { ar: 'هل يمكنني استخدام بطارية ليثيوم مع أي انفرتر؟', en: 'Can I use a lithium battery with any inverter?' },
    a: { ar: 'ليس دائماً. بطاريات الليثيوم تحتاج انفرتر متوافق مع بروتوكول الاتصال (مثل CAN أو RS485). انفرترات OPTI-Solar و Huawei التي نوفرها متوافقة تماماً مع بطاريات Pylontech.', en: 'Not always. Lithium batteries need an inverter compatible with the communication protocol (like CAN or RS485). OPTI-Solar and Huawei inverters we provide are fully compatible with Pylontech batteries.' },
  },
  {
    q: { ar: 'ما هو عمق التفريغ (DoD) ولماذا هو مهم؟', en: 'What is Depth of Discharge (DoD) and why is it important?' },
    a: { ar: 'DoD هو نسبة السعة التي يمكنك استخدامها. بطاريات الليثيوم تسمح باستخدام 80-95%، بينما الرصاص 50% فقط. هذا يعني أن بطارية ليثيوم 5kWh توفر طاقة فعلية أكثر من بطارية رصاص 5kWh.', en: 'DoD is the percentage of capacity you can use. Lithium batteries allow 80-95% use, while lead-acid only 50%. This means a 5kWh lithium battery provides more usable energy than a 5kWh lead-acid battery.' },
  },
  {
    q: { ar: 'هل بطاريات الليثيوم تتأثر بالحرارة العالية في اليمن؟', en: 'Are lithium batteries affected by high heat in Yemen?' },
    a: { ar: 'تقنية LiFePO4 مصممة للعمل في درجات حرارة عالية (حتى 50°C). بطاريات Pylontech مختبرة في بيئات مشابهة لليمن وتعمل بكفاءة عالية. بطاريات الرصاص تتدهور أسرع في الحرارة.', en: 'LiFePO4 technology is designed to work in high temperatures (up to 50°C). Pylontech batteries are tested in environments similar to Yemen and work efficiently. Lead-acid batteries degrade faster in heat.' },
  },
  {
    q: { ar: 'متى أختار بطارية رصاص بدلاً من ليثيوم؟', en: 'When should I choose lead-acid instead of lithium?' },
    a: { ar: 'فقط في حالتين: (1) ميزانية محدودة جداً ولا يمكن الانتظار للتوفير، (2) نظام طوارئ نادر الاستخدام. في جميع الحالات الأخرى، الليثيوم هو الخيار الأفضل اقتصادياً وعملياً.', en: 'Only in two cases: (1) Very limited budget and cannot wait to save, (2) Rarely used emergency system. In all other cases, lithium is the better choice economically and practically.' },
  },
];

// Product slugs to names mapping
const productNames: Record<string, { ar: string; en: string; category: string }> = {
  'us5000': { ar: 'Pylontech US5000', en: 'Pylontech US5000', category: 'pylontech' },
  'pelio-l': { ar: 'Pylontech Pelio-L', en: 'Pylontech Pelio-L', category: 'pylontech' },
  '12v-100ah-lithium': { ar: 'بطارية 12V 100Ah', en: '12V 100Ah Battery', category: 'pylontech' },
  'amber-rock': { ar: 'Amber Rock', en: 'Amber Rock', category: 'pylontech' },
};

export default function LithiumVsLeadAcid() {
  const { lang: language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const pageTitle = language === 'ar' 
    ? 'بطاريات الليثيوم vs الرصاص - مقارنة شاملة | القطاع للطاقة الشمسية'
    : 'Lithium vs Lead-Acid Batteries - Complete Comparison | Al-Qatta Solar';
  
  const pageDescription = language === 'ar'
    ? 'مقارنة تعليمية شاملة بين بطاريات الليثيوم وبطاريات الرصاص. أيهما يناسب احتياجاتك في اليمن؟ العمر، الكفاءة، التكلفة، والأمان.'
    : 'Comprehensive educational comparison between lithium and lead-acid batteries. Which suits your needs in Yemen? Lifespan, efficiency, cost, and safety.';

  // JSON-LD Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": language === 'ar' ? 'بطاريات الليثيوم vs الرصاص - دليل المقارنة الشامل' : 'Lithium vs Lead-Acid Batteries - Complete Comparison Guide',
    "description": pageDescription,
    "author": {
      "@type": "Organization",
      "name": language === 'ar' ? 'مؤسسة القطاع للطاقة الشمسية' : 'Al-Qatta Solar Energy'
    },
    "publisher": {
      "@type": "Organization",
      "name": language === 'ar' ? 'مؤسسة القطاع' : 'Al-Qatta',
      "logo": { "@type": "ImageObject", "url": "https://alqatta.com/logo.png" }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://alqatta.com/knowledge/lithium-vs-lead-acid" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q[language],
      "acceptedAnswer": { "@type": "Answer", "text": faq.a[language] }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": language === 'ar' ? 'الرئيسية' : 'Home', "item": language === 'ar' ? 'https://alqatta.com' : 'https://alqatta.com/en' },
      { "@type": "ListItem", "position": 2, "name": language === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub', "item": language === 'ar' ? 'https://alqatta.com/knowledge' : 'https://alqatta.com/en/knowledge' },
      { "@type": "ListItem", "position": 3, "name": language === 'ar' ? 'ليثيوم vs رصاص' : 'Lithium vs Lead-Acid', "item": language === 'ar' ? 'https://alqatta.com/knowledge/lithium-vs-lead-acid' : 'https://alqatta.com/en/knowledge/lithium-vs-lead-acid' },
    ],
  };

  return (
    <Layout>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/knowledge/lithium-vs-lead-acid"
        ogType="article"
        jsonLd={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-primary transition-colors">
                {language === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub'}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">
                {language === 'ar' ? 'ليثيوم vs رصاص' : 'Lithium vs Lead-Acid'}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {language === 'ar' ? 'مقارنة تعليمية' : 'Educational Comparison'}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {language === 'ar' 
                  ? 'بطاريات الليثيوم vs بطاريات الرصاص'
                  : 'Lithium vs Lead-Acid Batteries'}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'دليل شامل لفهم الفرق بين تقنيات البطاريات. اتخذ قرارك بناءً على احتياجاتك الفعلية، وليس فقط السعر.'
                  : 'Comprehensive guide to understanding battery technology differences. Make your decision based on actual needs, not just price.'}
              </p>

              {/* Key Takeaways */}
              <Card className="bg-secondary/5 border-secondary/20 text-start">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    {language === 'ar' ? 'الخلاصة السريعة' : 'Quick Summary'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'الليثيوم يدوم 5x أطول من الرصاص (أرخص على المدى الطويل)' : 'Lithium lasts 5x longer than lead-acid (cheaper long-term)'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'يمكنك استخدام 95% من سعة الليثيوم مقابل 50% فقط للرصاص' : 'You can use 95% of lithium capacity vs only 50% for lead-acid'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'الليثيوم أخف 3 مرات وأكثر أماناً (لا غازات سامة)' : 'Lithium is 3x lighter and safer (no toxic gases)'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'الرصاص فقط للميزانيات المحدودة جداً أو الاستخدام النادر' : 'Lead-acid only for very limited budgets or rare use'}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'جدول المقارنة التفصيلي' : 'Detailed Comparison Table'}
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-start">{language === 'ar' ? 'المعيار' : 'Criteria'}</th>
                      <th className="border border-border p-3 text-center bg-green-50 dark:bg-green-900/20">
                        <div className="flex items-center justify-center gap-2">
                          <Battery className="h-5 w-5 text-green-600" />
                          <span>{language === 'ar' ? 'ليثيوم (LiFePO4)' : 'Lithium (LiFePO4)'}</span>
                        </div>
                      </th>
                      <th className="border border-border p-3 text-center bg-amber-50 dark:bg-amber-900/20">
                        <div className="flex items-center justify-center gap-2">
                          <Battery className="h-5 w-5 text-amber-600" />
                          <span>{language === 'ar' ? 'رصاص حمضي' : 'Lead-Acid'}</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonCategories.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <tr key={idx} className="hover:bg-muted/50">
                          <td className="border border-border p-3">
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{item.category[language]}</span>
                            </div>
                          </td>
                          <td className={`border border-border p-3 text-center ${item.winner === 'lithium' ? 'bg-green-50 dark:bg-green-900/10' : ''}`}>
                            <div className="flex items-center justify-center gap-2">
                              {item.winner === 'lithium' && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                              <span>{item.lithium[language]}</span>
                            </div>
                          </td>
                          <td className={`border border-border p-3 text-center ${item.winner === 'leadAcid' ? 'bg-amber-50 dark:bg-amber-900/10' : ''}`}>
                            <div className="flex items-center justify-center gap-2">
                              {item.winner === 'leadAcid' && <CheckCircle2 className="h-4 w-4 text-amber-600" />}
                              <span>{item.leadAcid[language]}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <Leaf className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>
                    {language === 'ar' 
                      ? 'النتيجة: الليثيوم يفوز في 7 من 8 معايير. الرصاص يفوز فقط في السعر الأولي.'
                      : 'Result: Lithium wins in 7 out of 8 criteria. Lead-acid wins only in initial price.'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Total Cost Analysis */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {language === 'ar' ? 'تحليل التكلفة الإجمالية' : 'Total Cost Analysis'}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader className="bg-green-50 dark:bg-green-900/20">
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                      <Battery className="h-5 w-5" />
                      {language === 'ar' ? 'بطارية ليثيوم 5kWh' : '5kWh Lithium Battery'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'السعة الفعلية (95% DoD)' : 'Usable capacity (95% DoD)'}</span>
                      <span className="font-medium">4.75 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'عدد الدورات' : 'Cycle count'}</span>
                      <span className="font-medium">6,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'الطاقة الإجمالية المتاحة' : 'Total available energy'}</span>
                      <span className="font-medium text-green-600">28,500 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'العمر المتوقع' : 'Expected lifespan'}</span>
                      <span className="font-medium">10-15 {language === 'ar' ? 'سنة' : 'years'}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader className="bg-amber-50 dark:bg-amber-900/20">
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                      <Battery className="h-5 w-5" />
                      {language === 'ar' ? 'بطارية رصاص 5kWh' : '5kWh Lead-Acid Battery'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'السعة الفعلية (50% DoD)' : 'Usable capacity (50% DoD)'}</span>
                      <span className="font-medium">2.5 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'عدد الدورات' : 'Cycle count'}</span>
                      <span className="font-medium">400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'الطاقة الإجمالية المتاحة' : 'Total available energy'}</span>
                      <span className="font-medium text-amber-600">1,000 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'ar' ? 'العمر المتوقع' : 'Expected lifespan'}</span>
                      <span className="font-medium">2-4 {language === 'ar' ? 'سنوات' : 'years'}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  {language === 'ar' ? 'الخلاصة: الليثيوم يوفر 28x طاقة أكثر' : 'Conclusion: Lithium provides 28x more energy'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'حتى لو كان سعر الليثيوم ضعف سعر الرصاص، فإنه يوفر 28 ضعف الطاقة على مدى عمره. هذا يجعل تكلفة كل كيلوواط ساعة أقل بكثير في الليثيوم.'
                    : 'Even if lithium costs twice as much as lead-acid, it provides 28 times the energy over its lifetime. This makes the cost per kWh much lower with lithium.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Recommendations */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'أي بطارية تناسب استخدامك؟' : 'Which Battery Suits Your Use?'}
              </h2>
              
              <div className="grid gap-4">
                {useCaseRecommendations.map((item, idx) => {
                  const Icon = item.icon;
                  const isLithium = item.recommendation === 'lithium';
                  
                  return (
                    <Card key={idx} className={`transition-all ${isLithium ? 'border-green-200 dark:border-green-800' : 'border-amber-200 dark:border-amber-800'}`}>
                      <CardContent className="py-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex items-center gap-3 md:w-1/3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isLithium ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'}`}>
                              <Icon className={`h-5 w-5 ${isLithium ? 'text-green-600' : 'text-amber-600'}`} />
                            </div>
                            <span className="font-medium">{item.useCase[language]}</span>
                          </div>
                          
                          <div className="md:w-1/6 flex items-center">
                            <Badge variant={isLithium ? 'default' : 'secondary'} className={isLithium ? 'bg-green-600' : 'bg-amber-600'}>
                              {isLithium 
                                ? (language === 'ar' ? 'ليثيوم' : 'Lithium')
                                : (language === 'ar' ? 'رصاص' : 'Lead-Acid')
                              }
                            </Badge>
                          </div>
                          
                          <div className="md:w-1/3 text-sm text-muted-foreground">
                            {item.reason[language]}
                          </div>
                          
                          <div className="md:w-1/6 flex flex-wrap gap-1">
                            {item.products.map(slug => (
                              <Link 
                                key={slug}
                                to={`/products/${productNames[slug]?.category}/${slug}`}
                                className="text-xs text-primary hover:underline"
                              >
                                {productNames[slug]?.[language === 'ar' ? 'ar' : 'en']}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Yemen-Specific */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {language === 'ar' ? 'لماذا الليثيوم هو الأفضل في اليمن؟' : 'Why is Lithium Best for Yemen?'}
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                        <Thermometer className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{language === 'ar' ? 'الحرارة العالية' : 'High Heat'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar'
                            ? 'بطاريات الرصاص تفقد 50% من عمرها في الحرارة العالية. الليثيوم مصمم للعمل حتى 50°C.'
                            : 'Lead-acid batteries lose 50% of their life in high heat. Lithium is designed to work up to 50°C.'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{language === 'ar' ? 'الانقطاعات المتكررة' : 'Frequent Outages'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar'
                            ? 'الاستخدام اليومي المكثف يستهلك دورات الرصاص بسرعة. الليثيوم يتحمل آلاف الدورات.'
                            : 'Intensive daily use quickly consumes lead-acid cycles. Lithium handles thousands of cycles.'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{language === 'ar' ? 'عدم توفر الصيانة' : 'Lack of Maintenance'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar'
                            ? 'بطاريات الرصاص تحتاج صيانة دورية قد لا تتوفر. الليثيوم لا يحتاج صيانة.'
                            : 'Lead-acid needs periodic maintenance that may not be available. Lithium is maintenance-free.'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                        <Scale className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{language === 'ar' ? 'صعوبة الاستيراد' : 'Import Difficulty'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar'
                            ? 'استبدال البطاريات كل 2-3 سنوات مكلف ومعقد. الليثيوم يدوم 10-15 سنة.'
                            : 'Replacing batteries every 2-3 years is costly and complex. Lithium lasts 10-15 years.'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'بطاريات الليثيوم المتوفرة لدينا' : 'Our Available Lithium Batteries'}
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Pylontech US5000</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'ar' 
                        ? '4.8 كيلوواط ساعة - الأكثر مبيعاً للمنازل والشركات الصغيرة'
                        : '4.8kWh - Best seller for homes and small businesses'}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products/pylontech/us5000" className="inline-flex items-center gap-2">
                        {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                        <ArrowIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Pylontech Pelio-L</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'ar' 
                        ? '5.0 كيلوواط ساعة - التصميم الأنيق مع شاشة عرض مدمجة'
                        : '5.0kWh - Elegant design with built-in display'}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products/pylontech/pelio-l" className="inline-flex items-center gap-2">
                        {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                        <ArrowIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{language === 'ar' ? 'بطارية 12V 100Ah' : '12V 100Ah Battery'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'ar' 
                        ? '1.2 كيلوواط ساعة - مثالية للكرفانات والأنظمة الصغيرة'
                        : '1.2kWh - Ideal for caravans and small systems'}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products/pylontech/12v-100ah-lithium" className="inline-flex items-center gap-2">
                        {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                        <ArrowIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Amber Rock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'ar' 
                        ? 'محطة طاقة متنقلة - للرحلات والطوارئ'
                        : 'Portable power station - For trips and emergencies'}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products/pylontech/amber-rock" className="inline-flex items-center gap-2">
                        {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                        <ArrowIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-start">
                      {faq.q[language]}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'هل تحتاج مساعدة في الاختيار؟' : 'Need Help Choosing?'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'ar'
                  ? 'فريقنا الفني جاهز لمساعدتك في اختيار البطارية المناسبة لاحتياجاتك.'
                  : 'Our technical team is ready to help you choose the right battery for your needs.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                    {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products/pylontech">
                    {language === 'ar' ? 'تصفح جميع البطاريات' : 'Browse All Batteries'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-8 border-t">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-semibold mb-4">{language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/knowledge/inverter-guide" className="text-primary hover:underline inline-flex items-center gap-1">
                  {language === 'ar' ? 'دليل اختيار الانفرتر المناسب' : 'Inverter Selection Guide'}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link to="/pylontech" className="text-primary hover:underline inline-flex items-center gap-1">
                  {language === 'ar' ? 'لماذا Pylontech؟' : 'Why Pylontech?'}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
