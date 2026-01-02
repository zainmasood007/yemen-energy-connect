import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight, Battery, Sun, Zap, Gauge, Filter, Star, CheckCircle, MapPin, HelpCircle, Thermometer, Droplets, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO, { createBreadcrumbSchema, createFAQSchema } from '@/components/SEO';
import { categories, getProductsByCategory, getCategoryBySlug, ProductCategory as CategoryType } from '@/data/products';
import { useLocation } from 'react-router-dom';

const categoryIcons: Record<string, typeof Battery> = {
  pylontech: Battery,
  panels: Sun,
  inverters: Zap,
  controllers: Gauge,
};

// Category-specific FAQs for SEO
const categoryFAQs: Record<string, { questionAr: string; questionEn: string; answerAr: string; answerEn: string }[]> = {
  pylontech: [
    {
      questionAr: 'ما هي بطاريات Pylontech وما مميزاتها؟',
      questionEn: 'What are Pylontech batteries and what are their advantages?',
      answerAr: 'بطاريات Pylontech هي بطاريات ليثيوم فوسفات الحديد (LiFePO4) عالية الجودة تتميز بعمر افتراضي طويل يصل إلى 6000 دورة شحن، وكفاءة تصل إلى 95%، مع ضمان 10 سنوات.',
      answerEn: 'Pylontech batteries are high-quality Lithium Iron Phosphate (LiFePO4) batteries featuring a long lifespan of up to 6000 charge cycles, 95% efficiency, and a 10-year warranty.',
    },
    {
      questionAr: 'هل بطاريات Pylontech مناسبة لمناخ اليمن الحار؟',
      questionEn: 'Are Pylontech batteries suitable for Yemen\'s hot climate?',
      answerAr: 'نعم، بطاريات Pylontech مصممة للعمل في درجات حرارة تصل إلى 55 درجة مئوية، مما يجعلها مثالية لظروف اليمن المناخية.',
      answerEn: 'Yes, Pylontech batteries are designed to operate at temperatures up to 55°C, making them ideal for Yemen\'s climate conditions.',
    },
    {
      questionAr: 'كم تدوم بطاريات Pylontech؟',
      questionEn: 'How long do Pylontech batteries last?',
      answerAr: 'تدوم بطاريات Pylontech حتى 15 عامًا مع الاستخدام العادي، وتحتفظ بـ 80% من سعتها بعد 6000 دورة شحن كاملة.',
      answerEn: 'Pylontech batteries last up to 15 years with normal use, retaining 80% capacity after 6000 full charge cycles.',
    },
    {
      questionAr: 'هل يمكن توسيع نظام بطاريات Pylontech؟',
      questionEn: 'Can I expand a Pylontech battery system?',
      answerAr: 'نعم، بطاريات Pylontech قابلة للتوسع بسهولة. يمكن ربط حتى 8 وحدات معًا لزيادة سعة التخزين حسب احتياجاتك.',
      answerEn: 'Yes, Pylontech batteries are easily expandable. You can connect up to 8 units together to increase storage capacity according to your needs.',
    },
    {
      questionAr: 'ما الفرق بين US2000C و US3000C؟',
      questionEn: 'What\'s the difference between US2000C and US3000C?',
      answerAr: 'الفرق الرئيسي في السعة: US2000C بسعة 2.4 كيلوواط ساعة مناسبة للمنازل الصغيرة، بينما US3000C بسعة 3.5 كيلوواط ساعة للمنازل المتوسطة والكبيرة.',
      answerEn: 'The main difference is capacity: US2000C at 2.4kWh suits small homes, while US3000C at 3.5kWh is for medium to large homes.',
    },
    {
      questionAr: 'هل بطاريات Pylontech آمنة للاستخدام المنزلي؟',
      questionEn: 'Are Pylontech batteries safe for home use?',
      answerAr: 'نعم، بطاريات Pylontech من أكثر البطاريات أمانًا بفضل تقنية LiFePO4 التي لا تشتعل ولا تنفجر، مع نظام BMS متقدم للحماية.',
      answerEn: 'Yes, Pylontech batteries are among the safest due to LiFePO4 technology that doesn\'t catch fire or explode, with an advanced BMS protection system.',
    },
    {
      questionAr: 'هل القطاع وكيل معتمد لـ Pylontech في اليمن؟',
      questionEn: 'Is Al-Qatta an authorized Pylontech dealer in Yemen?',
      answerAr: 'نعم، القطاع للطاقة الشمسية هو الوكيل المعتمد الوحيد لبطاريات Pylontech في اليمن، مع ضمان رسمي وخدمة ما بعد البيع.',
      answerEn: 'Yes, Al-Qatta Solar Energy is the only authorized Pylontech dealer in Yemen, with official warranty and after-sales service.',
    },
    {
      questionAr: 'ما هي متطلبات تركيب بطاريات Pylontech؟',
      questionEn: 'What are the installation requirements for Pylontech batteries?',
      answerAr: 'تحتاج إلى مكان جاف ومهوى، انفرتر متوافق (مثل Victron أو Growatt)، وكابلات مناسبة. فريقنا يوفر خدمة التركيب الاحترافي.',
      answerEn: 'You need a dry, ventilated location, a compatible inverter (like Victron or Growatt), and appropriate cables. Our team provides professional installation service.',
    },
  ],
  panels: [
    {
      questionAr: 'ما هي أفضل الألواح الشمسية لليمن؟',
      questionEn: 'What are the best solar panels for Yemen?',
      answerAr: 'الألواح الأحادية البلورية (Monocrystalline) بكفاءة 20%+ هي الأفضل لليمن بسبب كفاءتها العالية في الحرارة الشديدة.',
      answerEn: 'Monocrystalline panels with 20%+ efficiency are best for Yemen due to their high efficiency in extreme heat.',
    },
    {
      questionAr: 'كم تنتج الألواح الشمسية في اليمن؟',
      questionEn: 'How much do solar panels produce in Yemen?',
      answerAr: 'تنتج الألواح الشمسية في اليمن 5-7 ساعات ذروة يوميًا في المتوسط، مما يعني أن لوح 500 واط ينتج 2.5-3.5 كيلوواط ساعة يوميًا.',
      answerEn: 'Solar panels in Yemen produce 5-7 peak hours daily on average, meaning a 500W panel produces 2.5-3.5kWh daily.',
    },
    {
      questionAr: 'هل الألواح الشمسية تتأثر بالغبار؟',
      questionEn: 'Are solar panels affected by dust?',
      answerAr: 'نعم، الغبار يقلل الإنتاجية حتى 25%. ننصح بالتنظيف الأسبوعي أو تركيب أنظمة التنظيف التلقائي.',
      answerEn: 'Yes, dust can reduce output by up to 25%. We recommend weekly cleaning or installing automatic cleaning systems.',
    },
    {
      questionAr: 'كم سنة تدوم الألواح الشمسية؟',
      questionEn: 'How long do solar panels last?',
      answerAr: 'تدوم الألواح الشمسية 25-30 سنة مع ضمان 80% من الإنتاجية بعد 25 سنة.',
      answerEn: 'Solar panels last 25-30 years with 80% output warranty after 25 years.',
    },
    {
      questionAr: 'هل الألواح مناسبة للمناطق الساحلية؟',
      questionEn: 'Are panels suitable for coastal areas?',
      answerAr: 'نعم، نوفر ألواح بإطار ألومنيوم مقاوم للتآكل ومعالجة خاصة للملوحة مناسبة لعدن والحديدة.',
      answerEn: 'Yes, we provide panels with corrosion-resistant aluminum frames and special salt treatment suitable for Aden and Hudaydah.',
    },
    {
      questionAr: 'ما حجم النظام الذي أحتاجه لمنزلي؟',
      questionEn: 'What system size do I need for my home?',
      answerAr: 'يعتمد على استهلاكك. منزل متوسط يحتاج 3-5 كيلوواط (6-10 ألواح 500 واط). تواصل معنا لدراسة مجانية.',
      answerEn: 'It depends on your consumption. A typical home needs 3-5kW (6-10 panels at 500W). Contact us for a free assessment.',
    },
  ],
  inverters: [
    {
      questionAr: 'ما الفرق بين الانفرتر الهجين والشبكي؟',
      questionEn: 'What\'s the difference between hybrid and on-grid inverters?',
      answerAr: 'الانفرتر الهجين يعمل مع البطاريات والشبكة معًا ومثالي لليمن. الشبكي يحتاج كهرباء مستقرة فقط.',
      answerEn: 'Hybrid inverters work with both batteries and grid, ideal for Yemen. On-grid requires stable electricity only.',
    },
    {
      questionAr: 'ما أفضل انفرتر للاستخدام مع Pylontech؟',
      questionEn: 'What\'s the best inverter for Pylontech batteries?',
      answerAr: 'انفرترات Victron و Growatt و Deye متوافقة 100% مع بطاريات Pylontech ونوفرها جميعًا.',
      answerEn: 'Victron, Growatt, and Deye inverters are 100% compatible with Pylontech batteries and we provide all of them.',
    },
    {
      questionAr: 'كم قدرة الانفرتر التي أحتاجها؟',
      questionEn: 'What inverter capacity do I need?',
      answerAr: 'يجب أن تكون قدرة الانفرتر 1.5 ضعف أعلى حمل متزامن. منزل متوسط يحتاج 5-8 كيلوواط.',
      answerEn: 'Inverter capacity should be 1.5x your peak simultaneous load. A typical home needs 5-8kW.',
    },
    {
      questionAr: 'هل الانفرترات تحتاج صيانة؟',
      questionEn: 'Do inverters need maintenance?',
      answerAr: 'نعم، صيانة سنوية للتهوية والتنظيف. نوفر عقود صيانة دورية.',
      answerEn: 'Yes, annual maintenance for ventilation and cleaning. We provide periodic maintenance contracts.',
    },
    {
      questionAr: 'كم سنة ضمان الانفرتر؟',
      questionEn: 'How long is the inverter warranty?',
      answerAr: '5-10 سنوات حسب العلامة التجارية، مع إمكانية تمديد الضمان.',
      answerEn: '5-10 years depending on brand, with warranty extension options.',
    },
    {
      questionAr: 'هل الانفرتر يعمل أثناء انقطاع الكهرباء؟',
      questionEn: 'Does the inverter work during power outages?',
      answerAr: 'الانفرتر الهجين نعم، ينتقل للبطاريات تلقائيًا خلال 20 مللي ثانية. الشبكي يتوقف للسلامة.',
      answerEn: 'Hybrid inverters yes, they switch to batteries automatically within 20ms. On-grid stops for safety.',
    },
  ],
  controllers: [
    {
      questionAr: 'ما الفرق بين MPPT و PWM؟',
      questionEn: 'What\'s the difference between MPPT and PWM?',
      answerAr: 'MPPT أكفأ بنسبة 20-30% ومناسب للأنظمة الكبيرة. PWM أرخص ومناسب للأنظمة الصغيرة.',
      answerEn: 'MPPT is 20-30% more efficient and suitable for large systems. PWM is cheaper and suitable for small systems.',
    },
    {
      questionAr: 'كيف أختار حجم منظم الشحن؟',
      questionEn: 'How do I choose controller size?',
      answerAr: 'قسم إجمالي قدرة الألواح على جهد البطارية. مثال: 2000 واط ÷ 48 فولت = 42 أمبير، اختر 50 أمبير.',
      answerEn: 'Divide total panel wattage by battery voltage. Example: 2000W ÷ 48V = 42A, choose 50A.',
    },
    {
      questionAr: 'هل منظم الشحن ضروري؟',
      questionEn: 'Is a charge controller necessary?',
      answerAr: 'ضروري لحماية البطاريات من الشحن الزائد. بدونه ستتلف البطاريات خلال أشهر.',
      answerEn: 'Essential to protect batteries from overcharging. Without it, batteries will be damaged within months.',
    },
    {
      questionAr: 'هل منظم MPPT يستحق السعر الإضافي؟',
      questionEn: 'Is MPPT worth the extra cost?',
      answerAr: 'نعم للأنظمة فوق 500 واط. الفرق في الكفاءة يعوض السعر خلال 1-2 سنة.',
      answerEn: 'Yes for systems over 500W. The efficiency difference pays for itself in 1-2 years.',
    },
    {
      questionAr: 'كم سنة يدوم منظم الشحن؟',
      questionEn: 'How long does a charge controller last?',
      answerAr: '10-15 سنة للمنظمات عالية الجودة مع الاستخدام الصحيح.',
      answerEn: '10-15 years for quality controllers with proper use.',
    },
    {
      questionAr: 'ما أفضل علامات منظمات الشحن؟',
      questionEn: 'What are the best charge controller brands?',
      answerAr: 'Victron, Epever, و SRNE من أفضل العلامات ونوفرها جميعًا.',
      answerEn: 'Victron, Epever, and SRNE are among the best brands and we provide all of them.',
    },
  ],
};

// Category intro content for SEO
const categoryIntros: Record<string, { ar: string; en: string }> = {
  pylontech: {
    ar: 'بطاريات Pylontech هي الحل الأمثل لتخزين الطاقة في اليمن، حيث تتميز بمقاومتها العالية للحرارة الشديدة التي تصل إلى 55 درجة مئوية، وقدرتها على دعم انقطاعات الكهرباء المتكررة بتحويل سريع خلال 20 مللي ثانية. كوكيل معتمد وحيد في اليمن، نضمن لك منتجات أصلية مع ضمان 10 سنوات ودعم فني محلي.',
    en: 'Pylontech batteries are the optimal energy storage solution for Yemen, featuring high heat resistance up to 55°C and the ability to support frequent power outages with rapid switching within 20ms. As the sole authorized dealer in Yemen, we guarantee genuine products with a 10-year warranty and local technical support.',
  },
  panels: {
    ar: 'نوفر ألواح شمسية عالية الكفاءة مصممة خصيصًا لتحمل ظروف اليمن المناخية القاسية - من حرارة الهضبة الوسطى إلى رطوبة المناطق الساحلية. ألواحنا مختارة بعناية لتوفير أعلى إنتاجية مع أطول عمر افتراضي، مع مقاومة للغبار والملوحة.',
    en: 'We provide high-efficiency solar panels specifically designed to withstand Yemen\'s harsh climate conditions - from the central highland heat to coastal humidity. Our panels are carefully selected to deliver maximum output with the longest lifespan, with dust and salt resistance.',
  },
  inverters: {
    ar: 'انفرتراتنا الهجينة مصممة لواقع اليمن: انقطاعات متكررة تحتاج تحويل سريع، حرارة عالية تحتاج تبريد فعال، وشبكة غير مستقرة تحتاج حماية ذكية. نوفر أفضل العلامات العالمية مع توافق كامل مع بطاريات Pylontech.',
    en: 'Our hybrid inverters are designed for Yemen\'s reality: frequent outages requiring fast switching, high temperatures requiring efficient cooling, and unstable grid requiring smart protection. We provide top global brands with full Pylontech battery compatibility.',
  },
  controllers: {
    ar: 'منظمات الشحن هي صمام الأمان لنظامك الشمسي. نوفر منظمات MPPT عالية الكفاءة تزيد إنتاجية الألواح حتى 30%، مع حماية متقدمة للبطاريات من الشحن الزائد والتفريغ العميق، مثالية لظروف اليمن.',
    en: 'Charge controllers are the safety valve of your solar system. We provide high-efficiency MPPT controllers that increase panel output by up to 30%, with advanced battery protection from overcharging and deep discharge, ideal for Yemen\'s conditions.',
  },
};

// Related cities for internal linking
const relatedCities = [
  { slug: 'sanaa', nameAr: 'صنعاء', nameEn: "Sana'a" },
  { slug: 'aden', nameAr: 'عدن', nameEn: 'Aden' },
  { slug: 'taiz', nameAr: 'تعز', nameEn: 'Taiz' },
  { slug: 'hudaydah', nameAr: 'الحديدة', nameEn: 'Hudaydah' },
];

export default function ProductCategory() {
  const { category } = useParams<{ category: string }>();
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const categoryData = getCategoryBySlug(category || '');
  const products = getProductsByCategory(category as CategoryType);
  const faqs = categoryFAQs[category || ''] || [];
  const intro = categoryIntros[category || ''] || { ar: '', en: '' };

  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';

  if (!categoryData) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{isRTL ? 'الفئة غير موجودة' : 'Category Not Found'}</h1>
          <Link to="/products" className="text-primary hover:underline">
            {isRTL ? 'العودة للمنتجات' : 'Back to Products'}
          </Link>
        </div>
      </Layout>
    );
  }

  const CategoryIcon = categoryIcons[category || ''] || Battery;

  const homePath = isEnPath ? '/en' : '/';
  const productsPath = isEnPath ? '/en/products' : '/products';
  const categoryPath = isEnPath ? `/en/products/${category}` : `/products/${category}`;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: homePath },
    { name: isRTL ? 'منتجاتنا' : 'Products', url: productsPath },
    { name: isRTL ? categoryData.nameAr : categoryData.nameEn, url: categoryPath },
  ]);

  const faqSchema = createFAQSchema(
    faqs.map(faq => ({
      question: isRTL ? faq.questionAr : faq.questionEn,
      answer: isRTL ? faq.answerAr : faq.answerEn,
    }))
  );

  return (
    <Layout>
      <SEO
        title={`${categoryData.nameEn} in Yemen | Al-Qatta Solar Energy`}
        titleAr={`${categoryData.nameAr} في اليمن | القطاع للطاقة الشمسية`}
        description={categoryData.descriptionEn}
        descriptionAr={categoryData.descriptionAr}
        canonical={categoryPath}
        lang={pageLang}
        jsonLd={[breadcrumbSchema, faqSchema]}
        hreflang={[
          { lang: 'ar', href: `/products/${category}` },
          { lang: 'en', href: `/en/products/${category}` },
        ]}
      />

      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary/20 text-secondary mb-6">
              <CategoryIcon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isRTL ? categoryData.nameAr : categoryData.nameEn}
            </h1>
            <p className="text-lg opacity-90">
              {isRTL ? categoryData.descriptionAr : categoryData.descriptionEn}
            </p>
          </div>
        </div>
      </section>

      {/* Category Introduction + Yemen Context */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>{isRTL ? intro.ar : intro.en}</p>
            </div>
            
            {/* Yemen Climate Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm">
                <Thermometer className="h-4 w-4" />
                {isRTL ? 'مقاوم للحرارة حتى 55°م' : 'Heat resistant up to 55°C'}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-info/10 text-info rounded-full text-sm">
                <Droplets className="h-4 w-4" />
                {isRTL ? 'مناسب للمناطق الساحلية' : 'Suitable for coastal areas'}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning rounded-full text-sm">
                <AlertTriangle className="h-4 w-4" />
                {isRTL ? 'يدعم انقطاعات الكهرباء' : 'Supports power outages'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cities - Internal Linking */}
      <section className="py-6 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {isRTL ? 'متوفر في:' : 'Available in:'}
            </span>
            {relatedCities.map((city) => (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}`}
                className="px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                {isRTL ? city.nameAr : city.nameEn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Count */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>
                {products.length} {isRTL ? 'منتج' : 'products'}
              </span>
            </div>
            <Link to="/products" className="text-sm text-primary hover:underline flex items-center gap-1">
              {isRTL ? <ArrowRight className="h-4 w-4" /> : null}
              {isRTL ? 'جميع الفئات' : 'All Categories'}
              {!isRTL ? <ArrowLeft className="h-4 w-4" /> : null}
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${category}/${product.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  {/* Product Image */}
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={isRTL ? product.nameAr : product.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isFeatured && (
                      <Badge className="absolute top-3 end-3 bg-secondary text-secondary-foreground">
                        <Star className="h-3 w-3 me-1" />
                        {isRTL ? 'مميز' : 'Featured'}
                      </Badge>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <div className="text-xs text-muted-foreground mb-1">{product.brand} • {product.model}</div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {isRTL ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {isRTL ? product.shortDescAr : product.shortDescEn}
                    </p>

                    {/* Key Specs */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {spec.value} {spec.unit}
                        </span>
                      ))}
                    </div>

                    {/* Yemen Suitability Preview */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-3">
                      <CheckCircle className="h-3.5 w-3.5 text-success" />
                      <span>{isRTL ? 'مناسب لظروف اليمن' : 'Suitable for Yemen conditions'}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      {isRTL ? 'عرض التفاصيل' : 'View Details'}
                      <Arrow className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-4">
                <CategoryIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-bold mb-2">
                {isRTL ? 'لا توجد منتجات حالياً' : 'No Products Available'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {isRTL ? 'سيتم إضافة المنتجات قريباً' : 'Products will be added soon'}
              </p>
              <Button asChild>
                <Link to="/contact">
                  {isRTL ? 'تواصل معنا للاستفسار' : 'Contact Us for Inquiries'}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Category Benefits */}
      {category === 'pylontech' && (
        <section className="py-16 bg-surface">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">
                {isRTL ? 'لماذا بطاريات Pylontech؟' : 'Why Pylontech Batteries?'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { valueAr: '10', valueEn: '10', labelAr: 'سنوات ضمان', labelEn: 'Years Warranty' },
                  { valueAr: '6000+', valueEn: '6000+', labelAr: 'دورة شحن', labelEn: 'Charge Cycles' },
                  { valueAr: '95%', valueEn: '95%', labelAr: 'كفاءة', labelEn: 'Efficiency' },
                  { valueAr: '#1', valueEn: '#1', labelAr: 'عالمياً', labelEn: 'Worldwide' },
                ].map((stat, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {isRTL ? stat.valueAr : stat.valueEn}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isRTL ? stat.labelAr : stat.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section with Schema */}
      {faqs.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                {isRTL ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="text-start font-medium">{isRTL ? faq.questionAr : faq.questionEn}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {isRTL ? faq.answerAr : faq.answerEn}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? 'هل تحتاج مساعدة في اختيار المنتج المناسب؟' : 'Need Help Choosing the Right Product?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'خبراؤنا جاهزون لمساعدتك في اختيار الحل الأمثل لاحتياجاتك'
                : 'Our experts are ready to help you choose the optimal solution for your needs'}
            </p>
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                {isRTL ? 'تواصل مع خبير' : 'Talk to an Expert'}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}