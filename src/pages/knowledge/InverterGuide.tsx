import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';
import { 
  Home, Building2, Factory, Zap, Battery, Sun, 
  CheckCircle2, XCircle, ArrowLeft, ArrowRight,
  Thermometer, Droplets, Wind, Clock
} from 'lucide-react';

// Inverter data for recommendations
const inverterRecommendations = {
  residential: [
    {
      scenario: { ar: 'منزل صغير (2-3 غرف)', en: 'Small home (2-3 rooms)' },
      loads: { ar: 'إضاءة، مراوح، تلفزيون، ثلاجة صغيرة', en: 'Lighting, fans, TV, small fridge' },
      recommended: 'SP3000',
      slug: 'sp3000',
      power: '3000W',
      voltage: '24V',
    },
    {
      scenario: { ar: 'منزل متوسط (3-5 غرف) + مكيف', en: 'Medium home (3-5 rooms) + AC' },
      loads: { ar: 'كل ما سبق + مكيف 1 طن', en: 'All above + 1-ton AC' },
      recommended: 'SP5000',
      slug: 'sp5000',
      power: '5000W',
      voltage: '48V',
    },
    {
      scenario: { ar: 'فيلا كبيرة (5+ غرف) + مكيفين', en: 'Large villa (5+ rooms) + 2 ACs' },
      loads: { ar: 'منزل كامل + مكيفين', en: 'Full home + 2 ACs' },
      recommended: 'SP8000',
      slug: 'sp8000',
      power: '8000W',
      voltage: '48V',
    },
    {
      scenario: { ar: 'فيلا فاخرة (7+ غرف) + 3 مكيفات', en: 'Luxury villa (7+ rooms) + 3 ACs' },
      loads: { ar: 'فيلا كاملة + مسبح', en: 'Full villa + pool' },
      recommended: 'SP11000',
      slug: 'sp11000',
      power: '11000W',
      voltage: '48V',
    },
  ],
  commercial: [
    {
      scenario: { ar: 'محل تجاري صغير', en: 'Small commercial shop' },
      loads: { ar: 'إضاءة، كاشير، ثلاجة عرض', en: 'Lighting, POS, display fridge' },
      recommended: 'SP3000',
      slug: 'sp3000',
      power: '3000W',
      voltage: '24V',
    },
    {
      scenario: { ar: 'عيادة / صيدلية', en: 'Clinic / Pharmacy' },
      loads: { ar: 'أجهزة طبية، تبريد، إضاءة', en: 'Medical equipment, cooling, lighting' },
      recommended: 'SP8000',
      slug: 'sp8000',
      power: '8000W',
      voltage: '48V',
    },
    {
      scenario: { ar: 'منشأة تجارية كبيرة', en: 'Large commercial facility' },
      loads: { ar: 'فندق، مطعم، مركز تسوق', en: 'Hotel, restaurant, shopping center' },
      recommended: 'SUN2000-20KTL',
      slug: 'sun2000-20ktl',
      power: '20kW',
      voltage: 'On-Grid',
    },
  ],
  industrial: [
    {
      scenario: { ar: 'مصنع صغير / متوسط', en: 'Small / medium factory' },
      loads: { ar: 'خطوط إنتاج، إضاءة صناعية', en: 'Production lines, industrial lighting' },
      recommended: 'SUN2000-50KTL',
      slug: 'sun2000-50ktl',
      power: '50kW',
      voltage: '3-Phase',
    },
    {
      scenario: { ar: 'بئر ارتوازي / مزرعة كبيرة', en: 'Artesian well / large farm' },
      loads: { ar: 'مضخات حتى 75 حصان', en: 'Pumps up to 75 HP' },
      recommended: 'SUN2000-100KTL',
      slug: 'sun2000-100ktl',
      power: '100kW',
      voltage: '3-Phase',
    },
  ],
};

// FAQs for schema
const faqs = [
  {
    q: { ar: 'كيف أحسب حجم الانفرتر المناسب؟', en: 'How do I calculate the right inverter size?' },
    a: { ar: 'اجمع استهلاك جميع الأجهزة التي تريد تشغيلها في وقت واحد (بالواط)، ثم أضف 20-30% كهامش أمان. مثلاً: إذا كان مجموع أحمالك 3500 واط، اختر انفرتر 5000 واط.', en: 'Add up the consumption of all devices you want to run simultaneously (in watts), then add 20-30% safety margin. Example: if your total load is 3500W, choose a 5000W inverter.' },
  },
  {
    q: { ar: 'ما الفرق بين انفرتر 24V و 48V؟', en: 'What is the difference between 24V and 48V inverter?' },
    a: { ar: 'انفرتر 48V أكثر كفاءة ويحتاج كابلات أرفع (أرخص). 24V أبسط ويحتاج بطاريتين فقط. للأحمال فوق 3000 واط، يُفضل 48V.', en: '48V inverter is more efficient and needs thinner cables (cheaper). 24V is simpler and needs only two batteries. For loads above 3000W, 48V is preferred.' },
  },
  {
    q: { ar: 'هل يمكن تشغيل مكيف على انفرتر 3000 واط؟', en: 'Can I run an AC on a 3000W inverter?' },
    a: { ar: 'لا يُنصح. المكيفات تحتاج قدرة بدء عالية (surge). الحد الأدنى لتشغيل مكيف 1 طن هو انفرتر 5000 واط.', en: 'Not recommended. ACs need high surge power. Minimum for running 1-ton AC is 5000W inverter.' },
  },
  {
    q: { ar: 'ما الفرق بين On-Grid و Off-Grid؟', en: 'What is the difference between On-Grid and Off-Grid?' },
    a: { ar: 'Off-Grid: يعمل مستقلاً بالبطاريات، مثالي عند انقطاع الكهرباء المتكرر (OPTI-Solar). On-Grid: متصل بالشبكة الحكومية، يقلل الفاتورة (Huawei).', en: 'Off-Grid: Works independently with batteries, ideal for frequent outages (OPTI-Solar). On-Grid: Connected to government grid, reduces bills (Huawei).' },
  },
  {
    q: { ar: 'كم بطارية أحتاج مع الانفرتر؟', en: 'How many batteries do I need with the inverter?' },
    a: { ar: 'يعتمد على ساعات التشغيل المطلوبة. كقاعدة: كل 1000 واط تحتاج حوالي 2 كيلوواط ساعة من البطاريات لتشغيل 2 ساعة. بطارية Pylontech US5000 (4.8kWh) تكفي لتشغيل 2400 واط لمدة ساعتين.', en: 'Depends on required operating hours. Rule: every 1000W needs about 2kWh of batteries for 2 hours operation. Pylontech US5000 (4.8kWh) is enough for 2400W for 2 hours.' },
  },
  {
    q: { ar: 'هل انفرترات OPTI-Solar مناسبة للمناخ اليمني؟', en: 'Are OPTI-Solar inverters suitable for Yemeni climate?' },
    a: { ar: 'نعم، سلسلة Handy Ultra مصممة للعمل في درجات حرارة عالية (حتى 50°C) وتتحمل الغبار والرطوبة. آلاف الوحدات تعمل بنجاح في جميع مناطق اليمن.', en: 'Yes, Handy Ultra series is designed for high temperatures (up to 50°C) and tolerates dust and humidity. Thousands of units work successfully in all Yemen regions.' },
  },
  {
    q: { ar: 'متى أختار Huawei بدلاً من OPTI-Solar؟', en: 'When should I choose Huawei instead of OPTI-Solar?' },
    a: { ar: 'اختر Huawei إذا: لديك كهرباء حكومية مستقرة، تريد تقليل الفاتورة، مشروع تجاري/صناعي كبير. اختر OPTI-Solar إذا: انقطاعات متكررة، تريد استقلالية كاملة، منزل أو منشأة صغيرة/متوسطة.', en: 'Choose Huawei if: you have stable government electricity, want to reduce bills, large commercial/industrial project. Choose OPTI-Solar if: frequent outages, want complete independence, home or small/medium facility.' },
  },
];

export default function InverterGuide() {
  const { lang: language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const pageTitle = language === 'ar' 
    ? 'دليل اختيار الانفرتر المناسب | القطاع للطاقة الشمسية'
    : 'Inverter Selection Guide | Al-Qatta Solar Energy';
  
  const pageDescription = language === 'ar'
    ? 'دليل شامل لاختيار الانفرتر المناسب لمنزلك أو مشروعك في اليمن. مقارنة بين OPTI-Solar و Huawei، جداول توصيات، وأسئلة شائعة.'
    : 'Comprehensive guide for choosing the right inverter for your home or project in Yemen. Comparison between OPTI-Solar and Huawei, recommendation tables, and FAQs.';

  // JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": language === 'ar' ? 'دليل اختيار الانفرتر المناسب في اليمن' : 'Inverter Selection Guide in Yemen',
    "description": pageDescription,
    "author": {
      "@type": "Organization",
      "name": language === 'ar' ? 'مؤسسة القطاع للطاقة الشمسية' : 'Al-Qatta Solar Energy'
    },
    "publisher": {
      "@type": "Organization",
      "name": language === 'ar' ? 'مؤسسة القطاع' : 'Al-Qatta',
      "logo": {
        "@type": "ImageObject",
        "url": "https://alqatta.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://alqatta.com/knowledge/inverter-guide"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q[language],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a[language]
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'ar' ? 'الرئيسية' : 'Home',
        "item": language === 'ar' ? 'https://alqatta.com' : 'https://alqatta.com/en',
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub',
        "item": language === 'ar' ? 'https://alqatta.com/knowledge' : 'https://alqatta.com/en/knowledge',
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": language === 'ar' ? 'دليل اختيار الانفرتر' : 'Inverter Selection Guide',
        "item": language === 'ar'
          ? 'https://alqatta.com/knowledge/inverter-guide'
          : 'https://alqatta.com/en/knowledge/inverter-guide',
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/knowledge/inverter-guide"
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
                {language === 'ar' ? 'دليل اختيار الانفرتر' : 'Inverter Guide'}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {language === 'ar' ? 'دليل مرجعي شامل' : 'Comprehensive Reference Guide'}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {language === 'ar' 
                  ? 'دليل اختيار الانفرتر المناسب في اليمن'
                  : 'Inverter Selection Guide in Yemen'}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'كيف تختار الانفرتر الأنسب لمنزلك أو مشروعك؟ هذا الدليل يساعدك في اتخاذ القرار الصحيح بناءً على احتياجاتك الفعلية وظروف اليمن.'
                  : 'How to choose the best inverter for your home or project? This guide helps you make the right decision based on your actual needs and Yemen conditions.'}
              </p>

              {/* Key Takeaways */}
              <Card className="bg-secondary/5 border-secondary/20 text-start">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    {language === 'ar' ? 'ملخص سريع' : 'Quick Summary'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'للمنازل الصغيرة (بدون مكيف): SP3000 كافي' : 'For small homes (no AC): SP3000 is enough'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'للمنازل + مكيف واحد: SP5000 هو الخيار الأول' : 'For homes + one AC: SP5000 is the first choice'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'للفلل الكبيرة + مكيفين: SP8000 مع Dual MPPT' : 'For large villas + 2 ACs: SP8000 with Dual MPPT'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'للمشاريع التجارية الكبيرة: Huawei SUN2000 Series' : 'For large commercial projects: Huawei SUN2000 Series'}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is an Inverter */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {language === 'ar' ? 'ما هو الانفرتر؟' : 'What is an Inverter?'}
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'ar'
                    ? 'الانفرتر (أو العاكس) هو قلب نظام الطاقة الشمسية. وظيفته الأساسية تحويل التيار المستمر (DC) القادم من الألواح الشمسية أو البطاريات إلى تيار متردد (AC) الذي تستخدمه الأجهزة المنزلية.'
                    : 'The inverter is the heart of the solar energy system. Its main function is to convert direct current (DC) from solar panels or batteries to alternating current (AC) used by home appliances.'}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Battery className="h-5 w-5 text-primary" />
                        {language === 'ar' ? 'انفرترات Off-Grid' : 'Off-Grid Inverters'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {language === 'ar'
                          ? 'تعمل مستقلة بالكامل عن شبكة الكهرباء الحكومية، تعتمد على البطاريات لتخزين الطاقة.'
                          : 'Work completely independent of government grid, rely on batteries for energy storage.'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">OPTI-Solar</Badge>
                        <Badge variant="outline">SP1000-SP11000</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Zap className="h-5 w-5 text-secondary" />
                        {language === 'ar' ? 'انفرترات On-Grid' : 'On-Grid Inverters'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {language === 'ar'
                          ? 'متصلة بشبكة الكهرباء الحكومية، تقلل الفاتورة عن طريق استخدام الطاقة الشمسية أولاً.'
                          : 'Connected to government grid, reduce bills by using solar energy first.'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Huawei</Badge>
                        <Badge variant="outline">SUN2000 Series</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yemen-Specific Considerations */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {language === 'ar' ? 'اعتبارات خاصة باليمن' : 'Yemen-Specific Considerations'}
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
                      <Thermometer className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {language === 'ar' ? 'الحرارة العالية' : 'High Heat'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar'
                        ? 'درجات حرارة تصل 45°C+ في الصيف. اختر انفرتر مع تبريد فعال.'
                        : 'Temperatures reach 45°C+ in summer. Choose inverter with effective cooling.'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                      <Droplets className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {language === 'ar' ? 'الرطوبة الساحلية' : 'Coastal Humidity'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar'
                        ? 'عدن والحديدة تحتاج انفرترات مقاومة للرطوبة والملوحة.'
                        : 'Aden and Hudaydah need inverters resistant to humidity and salinity.'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                      <Wind className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {language === 'ar' ? 'الغبار' : 'Dust'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar'
                        ? 'فلاتر غبار وتنظيف دوري ضروري لإطالة عمر الانفرتر.'
                        : 'Dust filters and regular cleaning necessary to extend inverter life.'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {language === 'ar' ? 'انقطاعات الكهرباء' : 'Power Outages'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar'
                        ? 'انقطاعات متكررة تجعل Off-Grid الخيار الأفضل لمعظم المستخدمين.'
                        : 'Frequent outages make Off-Grid the best choice for most users.'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation Tables */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'جدول التوصيات حسب الاستخدام' : 'Recommendation Table by Usage'}
              </h2>

              {/* Residential */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'ar' ? 'للمنازل والفلل' : 'For Homes & Villas'}
                  </h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-start">{language === 'ar' ? 'السيناريو' : 'Scenario'}</th>
                        <th className="border border-border p-3 text-start">{language === 'ar' ? 'الأحمال' : 'Loads'}</th>
                        <th className="border border-border p-3 text-center">{language === 'ar' ? 'الانفرتر' : 'Inverter'}</th>
                        <th className="border border-border p-3 text-center">{language === 'ar' ? 'القدرة' : 'Power'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inverterRecommendations.residential.map((item, idx) => (
                        <tr key={idx} className="hover:bg-muted/50">
                          <td className="border border-border p-3">{item.scenario[language]}</td>
                          <td className="border border-border p-3 text-muted-foreground text-sm">{item.loads[language]}</td>
                          <td className="border border-border p-3 text-center">
                            <Link 
                              to={`/products/inverters/${item.slug}`}
                              className="text-primary hover:underline font-medium"
                            >
                              {item.recommended}
                            </Link>
                          </td>
                          <td className="border border-border p-3 text-center">
                            <Badge variant="secondary">{item.power}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Commercial */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'ar' ? 'للمنشآت التجارية' : 'For Commercial Facilities'}
                  </h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-start">{language === 'ar' ? 'السيناريو' : 'Scenario'}</th>
                        <th className="border border-border p-3 text-start">{language === 'ar' ? 'الأحمال' : 'Loads'}</th>
                        <th className="border border-border p-3 text-center">{language === 'ar' ? 'الانفرتر' : 'Inverter'}</th>
                        <th className="border border-border p-3 text-center">{language === 'ar' ? 'القدرة' : 'Power'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inverterRecommendations.commercial.map((item, idx) => (
                        <tr key={idx} className="hover:bg-muted/50">
                          <td className="border border-border p-3">{item.scenario[language]}</td>
                          <td className="border border-border p-3 text-muted-foreground text-sm">{item.loads[language]}</td>
                          <td className="border border-border p-3 text-center">
                            <Link 
                              to={`/products/inverters/${item.slug}`}
                              className="text-primary hover:underline font-medium"
                            >
                              {item.recommended}
                            </Link>
                          </td>
                          <td className="border border-border p-3 text-center">
                            <Badge variant="secondary">{item.power}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Industrial */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <Factory className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'ar' ? 'للمصانع والمشاريع الكبيرة' : 'For Factories & Large Projects'}
                  </h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-start">{language === 'ar' ? 'السيناريو' : 'Scenario'}</th>
                        <th className="border border-border p-3 text-start">{language === 'ar' ? 'الأحمال' : 'Loads'}</th>
                        <th className="border border-border p-3 text-center">{language === 'ar' ? 'الانفرتر' : 'Inverter'}</th>
                        <th className="border border-border p-3 text-center">{language === 'ar' ? 'القدرة' : 'Power'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inverterRecommendations.industrial.map((item, idx) => (
                        <tr key={idx} className="hover:bg-muted/50">
                          <td className="border border-border p-3">{item.scenario[language]}</td>
                          <td className="border border-border p-3 text-muted-foreground text-sm">{item.loads[language]}</td>
                          <td className="border border-border p-3 text-center">
                            <Link 
                              to={`/products/inverters/${item.slug}`}
                              className="text-primary hover:underline font-medium"
                            >
                              {item.recommended}
                            </Link>
                          </td>
                          <td className="border border-border p-3 text-center">
                            <Badge variant="secondary">{item.power}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Comparison */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'مقارنة بين OPTI-Solar و Huawei' : 'OPTI-Solar vs Huawei Comparison'}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/30">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2">
                      <Battery className="h-5 w-5" />
                      OPTI-Solar Handy Ultra
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'مثالي للانقطاعات المتكررة (Off-Grid)' : 'Ideal for frequent outages (Off-Grid)'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'استقلالية كاملة عن الشبكة' : 'Complete independence from grid'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'سعر مناسب للمنازل' : 'Affordable for homes'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'تشكيلة من 1000W إلى 11000W' : 'Range from 1000W to 11000W'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{language === 'ar' ? 'لا يصدر للشبكة الحكومية' : 'Cannot export to government grid'}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t">
                      <p className="text-sm font-medium mb-2">{language === 'ar' ? 'الأنسب لـ:' : 'Best for:'}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{language === 'ar' ? 'المنازل' : 'Homes'}</Badge>
                        <Badge variant="outline">{language === 'ar' ? 'الفلل' : 'Villas'}</Badge>
                        <Badge variant="outline">{language === 'ar' ? 'المحلات الصغيرة' : 'Small Shops'}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-secondary/30">
                  <CardHeader className="bg-secondary/5">
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Huawei SUN2000 Series
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'كفاءة عالية جداً' : 'Very high efficiency'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'تقليل فاتورة الكهرباء' : 'Reduce electricity bill'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'ضمان 10 سنوات (قابل للتمديد)' : '10 years warranty (extendable)'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{language === 'ar' ? 'مراقبة ذكية عن بعد' : 'Smart remote monitoring'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{language === 'ar' ? 'يحتاج كهرباء حكومية مستقرة' : 'Needs stable government electricity'}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t">
                      <p className="text-sm font-medium mb-2">{language === 'ar' ? 'الأنسب لـ:' : 'Best for:'}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{language === 'ar' ? 'المنشآت التجارية' : 'Commercial'}</Badge>
                        <Badge variant="outline">{language === 'ar' ? 'المصانع' : 'Factories'}</Badge>
                        <Badge variant="outline">{language === 'ar' ? 'الآبار' : 'Wells'}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* All Inverters Links */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'تصفح جميع الانفرترات' : 'Browse All Inverters'}
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">{language === 'ar' ? 'OPTI-Solar Handy Ultra' : 'OPTI-Solar Handy Ultra'}</h3>
                    <div className="space-y-2">
                      {['SP1000', 'SP1200', 'SP3000', 'SP5000', 'SP8000', 'SP11000'].map(model => (
                        <Link 
                          key={model}
                          to={`/products/inverters/${model.toLowerCase()}`}
                          className="flex items-center justify-between p-2 rounded hover:bg-muted transition-colors group"
                        >
                          <span>{model}</span>
                          <ArrowIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-secondary/50 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">{language === 'ar' ? 'Huawei SUN2000 Series' : 'Huawei SUN2000 Series'}</h3>
                    <div className="space-y-2">
                      {['SUN2000-20KTL', 'SUN2000-30KTL', 'SUN2000-50KTL', 'SUN2000-100KTL'].map(model => (
                        <Link 
                          key={model}
                          to={`/products/inverters/${model.toLowerCase().replace('sun2000-', '').replace('ktl', 'ktl')}`}
                          className="flex items-center justify-between p-2 rounded hover:bg-muted transition-colors group"
                        >
                          <span>{model}</span>
                          <ArrowIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="bg-background rounded-lg border">
                    <AccordionTrigger className="px-4 hover:no-underline">
                      <span className="text-start">{faq.q[language]}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground">
                      {faq.a[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {language === 'ar' ? 'هل تحتاج مساعدة في الاختيار؟' : 'Need Help Choosing?'}
              </h2>
              <p className="text-muted-foreground mb-8">
                {language === 'ar'
                  ? 'فريقنا الفني جاهز لمساعدتك في اختيار الانفرتر الأنسب لاحتياجاتك. تواصل معنا للحصول على استشارة مجانية.'
                  : 'Our technical team is ready to help you choose the best inverter for your needs. Contact us for a free consultation.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                  <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                    {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                  </Link>
                </Button>
              </div>
              
              {/* Last Updated */}
              <p className="mt-8 text-sm text-muted-foreground">
                {language === 'ar' ? 'آخر تحديث: ' : 'Last Updated: '}
                {new Date().toLocaleDateString(language === 'ar' ? 'ar-YE' : 'en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
