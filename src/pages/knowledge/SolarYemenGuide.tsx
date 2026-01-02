import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Sun, MapPin, Thermometer, Droplets, Wind, Zap, Battery,
  CheckCircle2, ArrowLeft, ArrowRight, Building2, Home,
  Factory, AlertTriangle, Clock, Wrench, Phone
} from 'lucide-react';

// Yemen regions data
const yemenRegions = [
  {
    name: { ar: 'صنعاء والمرتفعات', en: "Sana'a & Highlands" },
    icon: MapPin,
    climate: { ar: 'معتدل صيفاً، بارد شتاءً', en: 'Moderate summer, cold winter' },
    challenges: [
      { ar: 'انقطاعات كهرباء متكررة', en: 'Frequent power outages' },
      { ar: 'غبار موسمي', en: 'Seasonal dust' },
    ],
    recommendations: [
      { ar: 'Off-Grid هو الخيار الأفضل', en: 'Off-Grid is the best choice' },
      { ar: 'ألواح Bifacial تستفيد من الانعكاس', en: 'Bifacial panels benefit from reflection' },
    ],
    bestProducts: ['sp5000', 'us5000', 'vertex-s-plus'],
  },
  {
    name: { ar: 'عدن والساحل الجنوبي', en: 'Aden & Southern Coast' },
    icon: Droplets,
    climate: { ar: 'حار ورطب جداً طوال السنة', en: 'Very hot and humid year-round' },
    challenges: [
      { ar: 'رطوبة عالية وملوحة', en: 'High humidity and salinity' },
      { ar: 'درجات حرارة مرتفعة', en: 'High temperatures' },
    ],
    recommendations: [
      { ar: 'ألواح زجاج مزدوج ضرورية', en: 'Dual glass panels essential' },
      { ar: 'انفرترات بتبريد فعال', en: 'Inverters with effective cooling' },
    ],
    bestProducts: ['sp8000', 'us5000', 'vertex-s-plus'],
  },
  {
    name: { ar: 'الحديدة وتهامة', en: 'Hudaydah & Tihama' },
    icon: Thermometer,
    climate: { ar: 'حار جداً ورطب', en: 'Very hot and humid' },
    challenges: [
      { ar: 'أعلى درجات حرارة في اليمن', en: 'Highest temperatures in Yemen' },
      { ar: 'رطوبة ساحلية مرتفعة', en: 'High coastal humidity' },
    ],
    recommendations: [
      { ar: 'تهوية ممتازة للانفرترات', en: 'Excellent ventilation for inverters' },
      { ar: 'بطاريات LiFePO4 ضرورية', en: 'LiFePO4 batteries essential' },
    ],
    bestProducts: ['sp8000', 'us5000', 'vertex-s-plus'],
  },
  {
    name: { ar: 'تعز وإب', en: 'Taiz & Ibb' },
    icon: Wind,
    climate: { ar: 'معتدل مع أمطار موسمية', en: 'Moderate with seasonal rain' },
    challenges: [
      { ar: 'أمطار غزيرة موسمياً', en: 'Heavy seasonal rains' },
      { ar: 'ضباب متكرر', en: 'Frequent fog' },
    ],
    recommendations: [
      { ar: 'ألواح مقاومة للماء', en: 'Water-resistant panels' },
      { ar: 'حماية من الصواعق', en: 'Lightning protection' },
    ],
    bestProducts: ['sp5000', 'us5000', 'vertex-s-plus'],
  },
  {
    name: { ar: 'مأرب والمناطق الشرقية', en: 'Marib & Eastern Regions' },
    icon: Sun,
    climate: { ar: 'صحراوي حار وجاف', en: 'Hot and dry desert' },
    challenges: [
      { ar: 'غبار كثيف', en: 'Heavy dust' },
      { ar: 'درجات حرارة قصوى', en: 'Extreme temperatures' },
    ],
    recommendations: [
      { ar: 'تنظيف دوري للألواح', en: 'Regular panel cleaning' },
      { ar: 'فلاتر غبار للانفرترات', en: 'Dust filters for inverters' },
    ],
    bestProducts: ['sp8000', 'us5000', 'vertex'],
  },
];

// System types comparison
const systemTypes = [
  {
    type: { ar: 'Off-Grid (مستقل)', en: 'Off-Grid (Independent)' },
    icon: Battery,
    description: { ar: 'يعمل مستقلاً عن الشبكة الحكومية بالكامل', en: 'Works completely independent of government grid' },
    pros: [
      { ar: 'استقلالية تامة', en: 'Complete independence' },
      { ar: 'لا تتأثر بالانقطاعات', en: 'Unaffected by outages' },
      { ar: 'مثالي لليمن', en: 'Ideal for Yemen' },
    ],
    cons: [
      { ar: 'يحتاج بطاريات', en: 'Needs batteries' },
      { ar: 'تكلفة أولية أعلى', en: 'Higher initial cost' },
    ],
    bestFor: { ar: 'المنازل والمنشآت في مناطق الانقطاعات المتكررة', en: 'Homes and facilities in frequent outage areas' },
    products: ['sp5000', 'sp8000', 'us5000'],
  },
  {
    type: { ar: 'On-Grid (متصل بالشبكة)', en: 'On-Grid (Grid-connected)' },
    icon: Zap,
    description: { ar: 'متصل بالشبكة الحكومية لتقليل الفاتورة', en: 'Connected to government grid to reduce bills' },
    pros: [
      { ar: 'لا يحتاج بطاريات', en: 'No batteries needed' },
      { ar: 'تكلفة أقل', en: 'Lower cost' },
      { ar: 'يقلل الفاتورة', en: 'Reduces bills' },
    ],
    cons: [
      { ar: 'يتوقف عند انقطاع الكهرباء', en: 'Stops during outages' },
      { ar: 'يحتاج كهرباء مستقرة', en: 'Needs stable electricity' },
    ],
    bestFor: { ar: 'المشاريع التجارية الكبيرة مع كهرباء مستقرة', en: 'Large commercial projects with stable electricity' },
    products: ['sun2000-20ktl', 'sun2000-50ktl'],
  },
  {
    type: { ar: 'Hybrid (هجين)', en: 'Hybrid' },
    icon: Sun,
    description: { ar: 'يجمع بين المميزات: بطاريات + اتصال بالشبكة', en: 'Combines benefits: batteries + grid connection' },
    pros: [
      { ar: 'مرونة كاملة', en: 'Complete flexibility' },
      { ar: 'يعمل مع/بدون الشبكة', en: 'Works with/without grid' },
      { ar: 'أقصى استفادة', en: 'Maximum benefit' },
    ],
    cons: [
      { ar: 'أعلى تكلفة', en: 'Highest cost' },
      { ar: 'تعقيد أكبر', en: 'More complexity' },
    ],
    bestFor: { ar: 'المنشآت التي تريد أقصى موثوقية', en: 'Facilities wanting maximum reliability' },
    products: ['sp5000', 'sp8000', 'us5000'],
  },
];

// Services
const services = [
  {
    title: { ar: 'تصميم الأنظمة', en: 'System Design' },
    icon: Wrench,
    description: { ar: 'تصميم هندسي مخصص يناسب احتياجاتك ومنطقتك', en: 'Custom engineering design for your needs and region' },
  },
  {
    title: { ar: 'التركيب الاحترافي', en: 'Professional Installation' },
    icon: Building2,
    description: { ar: 'فريق متخصص مع ضمان جودة التنفيذ', en: 'Specialized team with installation quality guarantee' },
  },
  {
    title: { ar: 'الصيانة والدعم', en: 'Maintenance & Support' },
    icon: Phone,
    description: { ar: 'صيانة دورية ودعم فني على مدار الساعة', en: 'Regular maintenance and 24/7 technical support' },
  },
];

// FAQs
const faqs = [
  {
    q: { ar: 'هل الطاقة الشمسية مناسبة لليمن؟', en: 'Is solar energy suitable for Yemen?' },
    a: { ar: 'اليمن من أفضل البلدان للطاقة الشمسية بسبب سطوع الشمس العالي معظم أيام السنة. الانقطاعات المتكررة للكهرباء الحكومية تجعل الطاقة الشمسية ضرورة وليست رفاهية للمنازل والمنشآت.', en: 'Yemen is one of the best countries for solar energy due to high sun exposure most days of the year. Frequent government electricity outages make solar energy a necessity, not a luxury, for homes and facilities.' },
  },
  {
    q: { ar: 'كم تكلفة نظام شمسي للمنزل في اليمن؟', en: 'How much does a home solar system cost in Yemen?' },
    a: { ar: 'التكلفة تعتمد على حجم النظام واحتياجاتك. للحصول على تقدير دقيق، تواصل معنا عبر واتساب وسنقدم لك عرض سعر مجاني بناءً على استهلاكك الفعلي ومنطقتك.', en: 'Cost depends on system size and your needs. For an accurate estimate, contact us via WhatsApp and we will provide a free quote based on your actual consumption and region.' },
  },
  {
    q: { ar: 'ما الفرق بين Off-Grid و On-Grid في اليمن؟', en: 'What is the difference between Off-Grid and On-Grid in Yemen?' },
    a: { ar: 'Off-Grid يعمل مستقلاً بالبطاريات ولا يتأثر بانقطاع الكهرباء - وهو الأنسب لمعظم مناطق اليمن. On-Grid متصل بالشبكة ويقلل الفاتورة لكنه يتوقف عند الانقطاع - مناسب فقط للمناطق ذات الكهرباء المستقرة.', en: 'Off-Grid works independently with batteries and is unaffected by outages - most suitable for most Yemen areas. On-Grid connects to grid and reduces bills but stops during outages - suitable only for areas with stable electricity.' },
  },
  {
    q: { ar: 'كم سنة يدوم النظام الشمسي؟', en: 'How many years does a solar system last?' },
    a: { ar: 'الألواح الشمسية تدوم أكثر من 25 سنة. بطاريات الليثيوم (مثل Pylontech) تدوم 10-15 سنة. الانفرترات تدوم 10-15 سنة. مع الصيانة الدورية، النظام يعمل بكفاءة لعقود.', en: 'Solar panels last over 25 years. Lithium batteries (like Pylontech) last 10-15 years. Inverters last 10-15 years. With regular maintenance, the system works efficiently for decades.' },
  },
  {
    q: { ar: 'هل تحتاج الألواح تنظيف دوري؟', en: 'Do panels need regular cleaning?' },
    a: { ar: 'نعم، خاصة في المناطق الغبارية. ننصح بالتنظيف كل 2-4 أسابيع في المناطق الصحراوية، وكل 1-2 شهر في المناطق الأقل غباراً. الغبار يقلل إنتاجية الألواح.', en: 'Yes, especially in dusty areas. We recommend cleaning every 2-4 weeks in desert areas, and every 1-2 months in less dusty areas. Dust reduces panel productivity.' },
  },
  {
    q: { ar: 'هل يمكنني تشغيل مكيف على الطاقة الشمسية؟', en: 'Can I run an AC on solar power?' },
    a: { ar: 'نعم، لكن المكيفات تحتاج طاقة كبيرة. مكيف 1 طن يحتاج انفرتر 5000 واط على الأقل مع بطاريات كافية. ننصح بمكيفات Inverter لأنها أكثر كفاءة. تواصل معنا للحصول على تصميم مناسب.', en: 'Yes, but ACs need significant power. A 1-ton AC needs at least a 5000W inverter with sufficient batteries. We recommend Inverter ACs as they are more efficient. Contact us for a suitable design.' },
  },
  {
    q: { ar: 'ما هي الضمانات المتوفرة؟', en: 'What warranties are available?' },
    a: { ar: 'نوفر ضمان الوكيل المعتمد على جميع المنتجات: ألواح Trina (ضمان أداء 25 سنة)، بطاريات Pylontech (10 سنوات)، انفرترات OPTI-Solar و Huawei (ضمان المصنع). نحن الوكيل الرسمي في اليمن.', en: 'We provide authorized dealer warranty on all products: Trina panels (25-year performance warranty), Pylontech batteries (10 years), OPTI-Solar and Huawei inverters (factory warranty). We are the official agent in Yemen.' },
  },
  {
    q: { ar: 'هل توفرون خدمة التركيب؟', en: 'Do you provide installation service?' },
    a: { ar: 'نعم، نوفر خدمة تركيب احترافية بأيدي مهندسين متخصصين في جميع المحافظات اليمنية. تشمل الخدمة التصميم والتركيب والتشغيل والتدريب على الاستخدام.', en: 'Yes, we provide professional installation service by specialized engineers in all Yemeni governorates. Service includes design, installation, commissioning, and usage training.' },
  },
];

// Product names mapping
const productNames: Record<string, { ar: string; en: string; category: string }> = {
  'sp5000': { ar: 'OPTI-Solar SP5000', en: 'OPTI-Solar SP5000', category: 'inverters' },
  'sp8000': { ar: 'OPTI-Solar SP8000', en: 'OPTI-Solar SP8000', category: 'inverters' },
  'sun2000-20ktl': { ar: 'Huawei SUN2000-20KTL', en: 'Huawei SUN2000-20KTL', category: 'inverters' },
  'sun2000-50ktl': { ar: 'Huawei SUN2000-50KTL', en: 'Huawei SUN2000-50KTL', category: 'inverters' },
  'us5000': { ar: 'Pylontech US5000', en: 'Pylontech US5000', category: 'pylontech' },
  'pelio-l': { ar: 'Pylontech Pelio-L', en: 'Pylontech Pelio-L', category: 'pylontech' },
  'vertex-s-plus': { ar: 'Trina Vertex S+', en: 'Trina Vertex S+', category: 'panels' },
  'vertex': { ar: 'Trina Vertex', en: 'Trina Vertex', category: 'panels' },
};

export default function SolarYemenGuide() {
  const { lang: language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const pageTitle = language === 'ar' 
    ? 'الطاقة الشمسية في اليمن - الدليل الشامل | القطاع للطاقة الشمسية'
    : 'Solar Energy in Yemen - Complete Guide | Al-Qatta Solar';
  
  const pageDescription = language === 'ar'
    ? 'دليل شامل عن الطاقة الشمسية في اليمن: المناخ، التحديات، الحلول، وأفضل المنتجات لكل منطقة. معلومات موثوقة من الوكيل المعتمد.'
    : 'Complete guide to solar energy in Yemen: climate, challenges, solutions, and best products for each region. Reliable information from the authorized dealer.';

  // JSON-LD Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": language === 'ar' ? 'الطاقة الشمسية في اليمن - الدليل الشامل' : 'Solar Energy in Yemen - Complete Guide',
    "description": pageDescription,
    "author": { "@type": "Organization", "name": language === 'ar' ? 'مؤسسة القطاع للطاقة الشمسية' : 'Al-Qatta Solar Energy' },
    "publisher": {
      "@type": "Organization",
      "name": language === 'ar' ? 'مؤسسة القطاع' : 'Al-Qatta',
      "logo": { "@type": "ImageObject", "url": "https://alqatta.com/logo.png" }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://alqatta.com/knowledge/solar-yemen-guide" }
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
      { "@type": "ListItem", "position": 3, "name": language === 'ar' ? 'الطاقة الشمسية في اليمن' : 'Solar in Yemen', "item": language === 'ar' ? 'https://alqatta.com/knowledge/solar-yemen-guide' : 'https://alqatta.com/en/knowledge/solar-yemen-guide' },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://alqatta.com/knowledge/solar-yemen-guide" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

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
                {language === 'ar' ? 'الطاقة الشمسية في اليمن' : 'Solar in Yemen'}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {language === 'ar' ? 'دليل GEO شامل' : 'Comprehensive GEO Guide'}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {language === 'ar' 
                  ? 'الطاقة الشمسية في اليمن'
                  : 'Solar Energy in Yemen'}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'كل ما تحتاج معرفته عن الطاقة الشمسية في اليمن: واقع الشبكة، التحديات المناخية، والحلول المثلى لكل منطقة.'
                  : 'Everything you need to know about solar energy in Yemen: grid reality, climate challenges, and optimal solutions for each region.'}
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
                      <span>{language === 'ar' ? 'اليمن من أفضل البلدان للطاقة الشمسية بسبب السطوع العالي' : 'Yemen is among the best countries for solar due to high sunlight'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'Off-Grid هو الخيار الأفضل لمعظم المناطق بسبب الانقطاعات' : 'Off-Grid is the best choice for most areas due to outages'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'المناطق الساحلية تحتاج معدات مقاومة للرطوبة والملوحة' : 'Coastal areas need humidity and salinity resistant equipment'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{language === 'ar' ? 'بطاريات LiFePO4 ضرورية للمناخ الحار' : 'LiFePO4 batteries are essential for hot climate'}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Yemen Grid Reality */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {language === 'ar' ? 'واقع الكهرباء في اليمن' : 'Electricity Reality in Yemen'}
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'ar'
                    ? 'يعاني اليمن من انقطاعات متكررة ومطولة في الكهرباء الحكومية. في معظم المناطق، الكهرباء متوفرة لساعات محدودة يومياً، وفي بعض المناطق قد لا تتوفر لأيام. هذا الواقع يجعل الطاقة الشمسية ضرورة حتمية للمنازل والمنشآت التي تحتاج طاقة موثوقة.'
                    : 'Yemen suffers from frequent and prolonged government electricity outages. In most areas, electricity is available for limited hours daily, and in some areas may not be available for days. This reality makes solar energy an absolute necessity for homes and facilities that need reliable power.'}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{language === 'ar' ? 'انقطاعات متكررة' : 'Frequent Outages'}</h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' ? 'ساعات محدودة يومياً في أفضل الأحوال' : 'Limited hours daily in best cases'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{language === 'ar' ? 'عدم الاستقرار' : 'Instability'}</h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' ? 'لا يمكن الاعتماد على الشبكة الحكومية' : 'Cannot rely on government grid'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <Sun className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{language === 'ar' ? 'الحل: الطاقة الشمسية' : 'Solution: Solar Energy'}</h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' ? 'استقلالية تامة عن الشبكة' : 'Complete independence from grid'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Guide */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'دليل المناطق اليمنية' : 'Yemen Regions Guide'}
              </h2>
              
              <div className="grid gap-6">
                {yemenRegions.map((region, idx) => {
                  const Icon = region.icon;
                  return (
                    <Card key={idx}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{region.name[language]}</CardTitle>
                            <p className="text-sm text-muted-foreground">{region.climate[language]}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-medium mb-2 text-sm text-muted-foreground">
                              {language === 'ar' ? 'التحديات' : 'Challenges'}
                            </h4>
                            <ul className="space-y-1">
                              {region.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <AlertTriangle className="h-3 w-3 text-amber-500" />
                                  {challenge[language]}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2 text-sm text-muted-foreground">
                              {language === 'ar' ? 'التوصيات' : 'Recommendations'}
                            </h4>
                            <ul className="space-y-1">
                              {region.recommendations.map((rec, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                                  {rec[language]}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2 text-sm text-muted-foreground">
                              {language === 'ar' ? 'المنتجات المناسبة' : 'Suitable Products'}
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {region.bestProducts.map(slug => (
                                <Link 
                                  key={slug}
                                  to={`/products/${productNames[slug]?.category}/${slug}`}
                                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20 transition-colors"
                                >
                                  {productNames[slug]?.[language === 'ar' ? 'ar' : 'en']}
                                </Link>
                              ))}
                            </div>
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

        {/* System Types */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'أنواع الأنظمة الشمسية' : 'Solar System Types'}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {systemTypes.map((system, idx) => {
                  const Icon = system.icon;
                  return (
                    <Card key={idx} className="flex flex-col">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{system.type[language]}</CardTitle>
                        <p className="text-sm text-muted-foreground">{system.description[language]}</p>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-green-600 mb-2">{language === 'ar' ? 'المميزات' : 'Pros'}</h4>
                          <ul className="space-y-1">
                            {system.pros.map((pro, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                {pro[language]}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-amber-600 mb-2">{language === 'ar' ? 'العيوب' : 'Cons'}</h4>
                          <ul className="space-y-1">
                            {system.cons.map((con, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <AlertTriangle className="h-3 w-3 text-amber-500" />
                                {con[language]}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto pt-4 border-t">
                          <p className="text-sm mb-2"><strong>{language === 'ar' ? 'الأنسب لـ:' : 'Best for:'}</strong></p>
                          <p className="text-sm text-muted-foreground mb-3">{system.bestFor[language]}</p>
                          <div className="flex flex-wrap gap-1">
                            {system.products.map(slug => (
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

        {/* Products Overview */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'منتجاتنا للسوق اليمني' : 'Our Products for Yemen Market'}
              </h2>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <Card className="text-center hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Sun className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{language === 'ar' ? 'ألواح شمسية' : 'Solar Panels'}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'ar' ? 'Trina Solar - ألواح عالية الكفاءة' : 'Trina Solar - High efficiency panels'}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products/panels">
                        {language === 'ar' ? 'تصفح الألواح' : 'Browse Panels'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">{language === 'ar' ? 'انفرترات' : 'Inverters'}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'ar' ? 'OPTI-Solar & Huawei' : 'OPTI-Solar & Huawei'}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products/inverters">
                        {language === 'ar' ? 'تصفح الانفرترات' : 'Browse Inverters'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Battery className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{language === 'ar' ? 'بطاريات' : 'Batteries'}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'ar' ? 'Pylontech - الوكيل المعتمد' : 'Pylontech - Authorized Dealer'}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products/pylontech">
                        {language === 'ar' ? 'تصفح البطاريات' : 'Browse Batteries'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {language === 'ar' ? 'خدماتنا في جميع المحافظات' : 'Our Services in All Governorates'}
              </h2>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <Card key={idx}>
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{service.title[language]}</h3>
                        <p className="text-sm text-muted-foreground">{service.description[language]}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center">
                <Button asChild size="lg">
                  <Link to="/services">
                    {language === 'ar' ? 'تعرف على خدماتنا' : 'Learn About Our Services'}
                    <ArrowIcon className="h-4 w-4 ms-2" />
                  </Link>
                </Button>
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
                {language === 'ar' ? 'جاهز للبدء؟' : 'Ready to Start?'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'ar'
                  ? 'تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لمنطقتك واحتياجاتك.'
                  : 'Contact us for a free consultation and custom quote for your region and needs.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                    {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    {language === 'ar' ? 'صفحة التواصل' : 'Contact Page'}
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
              <h3 className="font-semibold mb-4">{language === 'ar' ? 'أدلة ذات صلة' : 'Related Guides'}</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/knowledge/inverter-guide" className="text-primary hover:underline inline-flex items-center gap-1">
                  {language === 'ar' ? 'دليل اختيار الانفرتر' : 'Inverter Selection Guide'}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link to="/knowledge/lithium-vs-lead-acid" className="text-primary hover:underline inline-flex items-center gap-1">
                  {language === 'ar' ? 'ليثيوم vs رصاص' : 'Lithium vs Lead-Acid'}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link to="/locations" className="text-primary hover:underline inline-flex items-center gap-1">
                  {language === 'ar' ? 'مواقعنا في اليمن' : 'Our Locations in Yemen'}
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
