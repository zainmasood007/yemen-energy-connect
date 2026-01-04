import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  ArrowLeft, ArrowRight, Battery, Sun, Zap, Gauge, Phone, CheckCircle, XCircle,
  Thermometer, Droplets, Wind, Shield, Home, Building2, Store, HelpCircle,
  ChevronDown, Star, MapPin, Wrench, FileText, Share2, AlertCircle, Calendar, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO, { createBreadcrumbSchema, createAdvancedProductSchema, createFAQSchema } from '@/components/SEO';
import { getProductBySlug, getRelatedProducts, getCategoryBySlug, Product } from '@/data/products';
import { cn } from '@/lib/utils';
import { useAdmin } from '@/admin/context/AdminContext';
// Last updated date for products
const LAST_UPDATED = '2024-12-21';

// Icon mapping for use cases
const useCaseIcons: Record<string, typeof Home> = {
  Home: Home,
  Building2: Building2,
  Store: Store,
  Shield: Shield,
  Castle: Home,
  Building: Building2,
  Landmark: Building2,
};

// Rating component
const RatingBar = ({ value, label }: { value: number; label: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm text-muted-foreground w-32 flex-shrink-0">{label}</span>
    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
      <div
        className={cn(
          'h-full rounded-full transition-all',
          value >= 4 ? 'bg-success' : value >= 3 ? 'bg-warning' : 'bg-destructive'
        )}
        style={{ width: `${(value / 5) * 100}%` }}
      />
    </div>
    <span className="text-sm font-medium w-8">{value}/5</span>
  </div>
);

// Mini FAQ helper – generic questions per product category focused on Yemen context

// Mini FAQ helper – generic questions per product category focused on Yemen context
const getMiniProductFaqs = (
  categorySlug: string,
  lang: 'ar' | 'en'
): { question: string; answer: string }[] => {
  const isAr = lang === 'ar';

  switch (categorySlug) {
    case 'panels':
      return isAr
        ? [
            {
              question: 'ما هي قدرة الألواح الشمسية المناسبة لمنزل في اليمن؟',
              answer:
                'لمنزل يمني متوسط مع انقطاع كهرباء متكرر، يبدأ معظم العملاء من 2–4 كيلوواط من الألواح الشمسية، مع إمكانية التوسع حسب عدد المكيفات والأجهزة. الأفضل أن نراجع معك الأحمال قبل القرار النهائي.'
            },
            {
              question: 'كل كم يجب تنظيف الألواح الشمسية بسبب الغبار في اليمن؟',
              answer:
                'في أغلب مناطق اليمن، ننصح بتنظيف الألواح الشمسية كل 2–4 أسابيع على الأقل بسبب الغبار والرياح، لأن تراكم الأتربة قد يقلل إنتاج الطاقة بنسبة 10–30٪ خاصة في الصيف.'
            },
            {
              question: 'هل تتحمل الألواح الشمسية حرارة الصيف العالية في اليمن؟',
              answer:
                'الألواح ذات الجودة العالية المصنفة لحرارة تشغيل مرتفعة تعمل بكفاءة في حرارة الصيف في اليمن، لكن قدرتها الفعلية تنخفض قليلًا مع ارتفاع درجة الحرارة، لذلك نراعي هامش أمان في تصميم النظام.'
            },
          ]
        : [
            {
              question: 'What solar panel size suits a typical home in Yemen?',
              answer:
                'For a typical Yemeni home with frequent grid outages, most systems start from 2–4 kW of solar panels and scale up depending on AC units and appliances. We always review your loads before giving a final recommendation.'
            },
            {
              question: 'How often should I clean solar panels in dusty Yemeni areas?',
              answer:
                'In most parts of Yemen, we recommend cleaning panels every 2–4 weeks due to dust and wind. Heavy dust can reduce solar production by 10–30% if panels are not cleaned regularly.'
            },
            {
              question: 'Do solar panels handle Yemen’s high summer temperatures?',
              answer:
                'Quality solar panels rated for high operating temperatures work reliably in Yemeni summers, but their real output drops slightly as temperature rises, so we include a safety margin when designing your solar system.'
            },
          ];

    case 'inverters':
      return isAr
        ? [
            {
              question: 'ما هو حجم الانفرتر المناسب لأحمال منزلي في اليمن؟',
              answer:
                'يتم اختيار حجم الانفرتر حسب مجموع الأحمال التي تعمل في نفس الوقت، خاصة المكيفات والغسالات والثلاجات. في معظم المنازل في اليمن نبدأ من 3–5 كيلوواط، مع مراجعة دقيقة لقائمة الأحمال قبل الشراء.'
            },
            {
              question: 'هل يعمل هذا الانفرتر مع بطاريات ليثيوم وبطاريات رصاص معًا؟',
              answer:
                'أغلب الانفرترات الحديثة تدعم بطاريات ليثيوم وبطاريات رصاص، لكن إعدادات الشحن والتفريغ تختلف. نحن نضبط برمجة الانفرتر بما يناسب نوع البطارية وعمرها لضمان أفضل أداء في بيئة اليمن.'
            },
            {
              question: 'كيف يتعامل الانفرتر مع انقطاع الكهرباء الطويل في اليمن؟',
              answer:
                'في أنظمة الطاقة الشمسية في اليمن، يعمل الانفرتر كمصدر رئيسي أثناء الانقطاع الطويل، ويحوّل بين الشبكة والبطاريات تلقائيًا حسب توفر الكهرباء ومستوى شحن البطاريات.'
            },
          ]
        : [
            {
              question: 'How do I size the inverter for my home loads in Yemen?',
              answer:
                'Inverter size depends on the peak loads running at the same time, especially AC units, fridges and washing machines. For many Yemeni homes we start from 3–5 kW but always confirm the exact load list before choosing.'
            },
            {
              question: 'Can this inverter work with both lithium and lead-acid batteries?',
              answer:
                'Most modern inverters support both lithium and lead-acid batteries, but charge and discharge settings must be adjusted. We configure the inverter based on your battery type and usage pattern in Yemeni conditions.'
            },
            {
              question: 'How does the inverter behave during long grid outages in Yemen?',
              answer:
                'During long outages, the solar inverter becomes the main power source, switching between solar, batteries and grid automatically depending on availability and battery charge to keep essential loads running.'
            },
          ];

    case 'batteries':
    case 'pylontech':
      return isAr
        ? [
            {
              question: 'كم العمر الافتراضي التقريبي لبطارية ليثيوم في أنظمة الطاقة الشمسية في اليمن؟',
              answer:
                'بطاريات الليثيوم المصنفة لـ 6000 دورة أو أكثر يمكن أن تخدم من 8 إلى 12 سنة في اليمن عند الاستخدام الصحيح وعدم التفريغ العميق اليومي، مع مراعاة حرارة الغرفة وتهويتها.'
            },
            {
              question: 'هل تحتاج بطاريات الطاقة الشمسية لغرفة خاصة أو تهوية في اليمن؟',
              answer:
                'يفضل تركيب البطاريات في غرفة داخلية بعيدة عن الشمس المباشرة مع تهوية جيدة، خاصة في المدن الحارة في اليمن، لأن الحرارة العالية تسرّع تقادم البطارية وتقلل عمرها.'
            },
            {
              question: 'ما الفرق بين بطاريات ليثيوم وبطاريات رصاص لمنازل اليمن؟',
              answer:
                'بطاريات الليثيوم أغلى في البداية لكنها تعطي عمر أطول، عمق تفريغ أكبر، وكفاءة أعلى مع انقطاعات الكهرباء المتكررة في اليمن. بطاريات الرصاص أرخص لكن تحتاج مساحة أكبر وصيانة أكثر.'
            },
          ]
        : [
            {
              question: 'What is the expected lifetime of a lithium solar battery in Yemen?',
              answer:
                'Lithium batteries rated for 6000+ cycles can typically last 8–12 years in Yemen when used correctly, avoiding daily deep discharge and keeping them in a well-ventilated, moderate-temperature room.'
            },
            {
              question: 'Do solar batteries need a special room or ventilation in Yemeni homes?',
              answer:
                'We recommend installing batteries indoors away from direct sun, with good ventilation, especially in hotter Yemeni cities, because high temperatures accelerate battery aging and reduce lifetime.'
            },
            {
              question: 'What is the main difference between lithium and lead-acid batteries for Yemeni homes?',
              answer:
                'Lithium batteries cost more upfront but offer longer lifetime, deeper usable capacity and higher efficiency for frequent outages in Yemen, while lead-acid batteries are cheaper but bulkier and need more maintenance.'
            },
          ];

    default:
      return [];
  }
};

// Category-specific related knowledge articles for internal linking on product pages
const getRelatedArticlesForProduct = (
  categorySlug: string,
  lang: 'ar' | 'en'
): { to: string; title: string; desc: string }[] => {
  const isAr = lang === 'ar';

  switch (categorySlug) {
    case 'panels':
      return [
        {
          to: isAr ? '/knowledge/solar-yemen-guide' : '/en/knowledge/solar-yemen-guide',
          title: isAr ? 'دليل الأنظمة الشمسية في اليمن' : 'Solar Systems Guide for Yemen',
          desc: isAr
            ? 'افهم أساسيات تصميم الأنظمة الشمسية، اختيار عدد الألواح، وسعات البطاريات المناسبة للمنازل في اليمن.'
            : 'Understand the basics of solar system design, how many panels you need and matching battery capacity for Yemeni homes.',
        },
        {
          to: isAr ? '/knowledge/solar-system-cost-yemen' : '/en/knowledge/solar-system-cost-yemen',
          title: isAr ? 'تكلفة النظام الشمسي في اليمن' : 'Solar System Cost in Yemen',
          desc: isAr
            ? 'تعرف كيف يؤثر اختيار نوع وقدرة الألواح على التكلفة الإجمالية للنظام والعائد على الاستثمار.'
            : 'See how panel technology and size impact total system cost and long-term savings in Yemen.',
        },
        {
          to: isAr ? '/knowledge/solar-yemen-faq' : '/en/knowledge/solar-yemen-faq',
          title: isAr ? 'أسئلة شائعة عن الطاقة الشمسية في اليمن' : 'Solar Yemen FAQ',
          desc: isAr
            ? 'إجابات عن أكثر الأسئلة شيوعًا حول الألواح، التركيب والصيانة في مختلف محافظات اليمن.'
            : 'Answers to the most common questions about panels, installation and maintenance across Yemeni cities.',
        },
      ];

    case 'inverters':
      return [
        {
          to: isAr ? '/knowledge/inverter-guide' : '/en/knowledge/inverter-guide',
          title: isAr ? 'دليل اختيار الانفرتر المناسب' : 'Inverter Buying Guide',
          desc: isAr
            ? 'تعرف على أنواع الانفرترات، الفرق بين الهجين والشبكي، وكيف تختار القدرة المناسبة لأحمالك.'
            : 'Learn about inverter types, hybrid vs on-grid, and how to size the inverter correctly for your loads.',
        },
        {
          to: isAr ? '/knowledge/articles/inverter-sizing-guide' : '/en/knowledge/articles/inverter-sizing-guide',
          title: isAr ? 'طريقة حساب حجم الانفرتر' : 'Inverter Sizing Guide',
          desc: isAr
            ? 'شرح عملي لحساب قدرة الانفرتر المطلوبة بناءً على عدد المكيفات والأجهزة في منزلك.'
            : 'A practical walkthrough for calculating the inverter size you need based on AC units and appliances.',
        },
        {
          to: isAr ? '/knowledge/articles/inverter-common-faults' : '/en/knowledge/articles/inverter-common-faults',
          title: isAr ? 'أعطال الانفرترات الشائعة وحلولها' : 'Common Inverter Faults & Fixes',
          desc: isAr
            ? 'تعرف على أشهر رسائل الأعطال وكيفية التعامل معها قبل طلب الدعم الفني.'
            : 'Discover the most common inverter error codes and how to respond before calling support.',
        },
      ];

    case 'batteries':
    case 'pylontech':
      return [
        {
          to: isAr ? '/knowledge/lithium-vs-lead-acid' : '/en/knowledge/lithium-vs-lead-acid',
          title: isAr ? 'ليثيوم أم رصاص لمنزلك في اليمن؟' : 'Lithium vs Lead-Acid for Yemeni Homes',
          desc: isAr
            ? 'افهم الفرق في العمر، الكفاءة والتكلفة بين بطاريات الليثيوم وبطاريات الرصاص التقليدية.'
            : 'Understand lifespan, efficiency and cost differences between lithium and traditional lead-acid batteries.',
        },
        {
          to: isAr ? '/knowledge/lithium-battery-lifespan' : '/en/knowledge/lithium-battery-lifespan',
          title: isAr ? 'كم تدوم بطارية الليثيوم؟' : 'Lithium Battery Lifespan',
          desc: isAr
            ? 'تعرف على العوامل التي تؤثر على عمر بطارية الليثيوم وكيف تطيل عمر البطاريات في اليمن.'
            : 'Learn which factors affect lithium battery life and how to extend your batteries’ lifespan in Yemen.',
        },
        {
          to: isAr ? '/knowledge/series-vs-parallel-batteries' : '/en/knowledge/series-vs-parallel-batteries',
          title: isAr ? 'توصيل البطاريات: توالي أم توازي؟' : 'Series vs Parallel Batteries',
          desc: isAr
            ? 'افهم طريقة توصيل أكثر من بطارية معاً بطريقة صحيحة وآمنة قبل اختيار السعة النهائية.'
            : 'Understand how to wire multiple batteries in series or parallel safely before deciding on your final capacity.',
        },
      ];

    default:
      return [];
  }
};

export default function ProductPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { isRTL } = useLanguage();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { products: adminProducts } = useAdmin();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const productStatic = getProductBySlug(category || '', slug || '');
  const categoryData = getCategoryBySlug(category || '');

  const isPreview = import.meta.env.DEV && searchParams.get('preview') === '1';

  let product: Product | undefined = productStatic || undefined;

  if (isPreview && slug) {
    const adminProduct = adminProducts.find((p) => p.slug === slug);
    if (adminProduct) {
      product = {
        ...(productStatic as Product),
        ...(adminProduct as any),
      } as Product;
    }
  }

  if (!product || !categoryData) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{isRTL ? 'المنتج غير موجود' : 'Product Not Found'}</h1>
          <Link to="/products" className="text-primary hover:underline">
            {isRTL ? 'العودة للمنتجات' : 'Back to Products'}
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  const canonicalPath = isEnPath
    ? `/en/products/${category}/${slug}`
    : `/products/${category}/${slug}`;

  const homePath = isEnPath ? '/en' : '/';
  const productsPath = isEnPath ? '/en/products' : '/products';
  const categoryPath = isEnPath ? `/en/products/${category}` : `/products/${category}`;

  // SEO Schemas
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: pageLang === 'ar' ? 'الرئيسية' : 'Home', url: homePath },
    { name: pageLang === 'ar' ? 'منتجاتنا' : 'Products', url: productsPath },
    { name: pageLang === 'ar' ? categoryData.nameAr : categoryData.nameEn, url: categoryPath },
    { name: pageLang === 'ar' ? product.nameAr : product.nameEn, url: canonicalPath },
  ]);

  // Advanced Product Schema - Google Compliant (NO fake reviews)
  const productSchema = createAdvancedProductSchema({
    name: product.nameEn,
    nameAr: product.nameAr,
    description: product.seoDescriptionEn,
    descriptionAr: product.seoDescriptionAr,
    image: product.image,
    brand: product.brand,
    model: product.model,
    category: categoryData.nameEn,
    sku: product.id,
    url: canonicalPath,
    isAvailable: product.isAvailable,
    // Yemen Suitability as additionalProperty (Google compliant)
    yemenSuitability: product.yemenSuitability.ratings,
    // Key specifications as additionalProperty
    specifications: product.specifications.slice(0, 6).map(spec => ({
      name: pageLang === 'ar' ? spec.keyAr : spec.keyEn,
      value: spec.value,
      unit: spec.unit,
    })),
    inLanguage: pageLang === 'ar' ? 'ar-YE' : 'en',
  });

  // FAQ Schema - current page language only (to avoid mixing languages)
  const faqSchema = createFAQSchema(
    product.faqs.map(faq => ({
      question: pageLang === 'ar' ? faq.questionAr : faq.questionEn,
      answer: pageLang === 'ar' ? faq.answerAr : faq.answerEn,
    }))
  );

  const miniFaqs = getMiniProductFaqs(category || '', pageLang);

  const miniFaqSchema = miniFaqs.length
    ? createFAQSchema(
        miniFaqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))
      )
    : undefined;

  return (
    <Layout>
      <SEO
        title={product.seoTitleEn}
        titleAr={product.seoTitleAr}
        description={product.seoDescriptionEn}
        descriptionAr={product.seoDescriptionAr}
        keywords={product.seoKeywordsEn.join(', ')}
        keywordsAr={product.seoKeywordsAr.join('، ')}
        canonical={canonicalPath}
        lang={pageLang}
        jsonLd={[
          breadcrumbSchema,
          productSchema,
          faqSchema,
          ...(miniFaqSchema ? [miniFaqSchema] : []),
        ]}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-surface border-b border-border">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
            <Link to="/" className="hover:text-primary whitespace-nowrap">{isRTL ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary whitespace-nowrap">{isRTL ? 'المنتجات' : 'Products'}</Link>
            <span>/</span>
            <Link to={`/products/${category}`} className="hover:text-primary whitespace-nowrap">
              {isRTL ? categoryData.nameAr : categoryData.nameEn}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium whitespace-nowrap">{product.model}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={isRTL ? product.nameAr : product.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.isFeatured && (
                <Badge className="absolute top-4 end-4 bg-secondary text-secondary-foreground text-sm px-3 py-1">
                  <Star className="h-4 w-4 me-1" />
                  {isRTL ? 'منتج مميز' : 'Featured'}
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm text-muted-foreground mb-2">{product.brand} • {product.model}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {isRTL ? product.nameAr : product.nameEn}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {isRTL ? product.shortDescAr : product.shortDescEn}
              </p>

              {/* Key Takeaways */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-success mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {isRTL ? 'ملخص سريع' : 'Key Takeaways'}
                </h3>
                <ul className="space-y-2">
                  {product.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{isRTL ? takeaway.ar : takeaway.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild size="lg" className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4" />
                    {isRTL ? 'طلب عرض سعر' : 'Request Quote'}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <a href={`tel:+967777800063`}>
                    <Phone className="h-4 w-4" />
                    {isRTL ? 'اتصل بنا' : 'Call Us'}
                  </a>
                </Button>
              </div>

              {/* Download Datasheet */}
              {product.datasheetUrl && (
                <div className="mb-6">
                  <Button asChild size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer" download>
                      <FileText className="h-4 w-4" />
                      {isRTL ? 'تحميل الداتا شيت (PDF)' : 'Download Datasheet (PDF)'}
                    </a>
                  </Button>
                </div>
              )}

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-3">
                {product.specifications.slice(0, 4).map((spec, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-primary">{spec.value} {spec.unit}</div>
                    <div className="text-xs text-muted-foreground">{isRTL ? spec.keyAr : spec.keyEn}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isRTL ? 'وصف المنتج' : 'Product Description'}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
              {isRTL ? product.fullDescAr : product.fullDescEn}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {isRTL ? 'المواصفات التقنية' : 'Technical Specifications'}
            </h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "bg-muted/30" : "")}>
                      <td className="px-4 py-3 font-medium">{isRTL ? spec.keyAr : spec.keyEn}</td>
                      <td className="px-4 py-3 text-end">{spec.value} {spec.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Placeholder Disclaimer */}
            <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground bg-warning/5 border border-warning/20 rounded-lg p-3">
              <AlertCircle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
              <p>
                {isRTL 
                  ? 'المواصفات والأسعار مؤقتة (Placeholders) وسيتم تحديثها من الكتالوج الرسمي.'
                  : 'Specifications and prices are temporary (Placeholders) and will be updated from the official catalog.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yemen Suitability */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              {isRTL ? 'لماذا هذا المنتج مناسب لليمن؟' : 'Why is This Product Suitable for Yemen?'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Ratings */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4">{isRTL ? 'تقييم الملاءمة' : 'Suitability Ratings'}</h3>
                <div className="space-y-4">
                  <RatingBar 
                    value={product.yemenSuitability.ratings.heatResistance} 
                    label={isRTL ? 'مقاومة الحرارة' : 'Heat Resistance'} 
                  />
                  <RatingBar 
                    value={product.yemenSuitability.ratings.coastalSuitability} 
                    label={isRTL ? 'المناطق الساحلية' : 'Coastal Areas'} 
                  />
                  <RatingBar 
                    value={product.yemenSuitability.ratings.powerOutageSupport} 
                    label={isRTL ? 'دعم الانقطاعات' : 'Outage Support'} 
                  />
                  <RatingBar 
                    value={product.yemenSuitability.ratings.dustResistance} 
                    label={isRTL ? 'مقاومة الغبار' : 'Dust Resistance'} 
                  />
                </div>
              </div>

              {/* Best Regions */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4">{isRTL ? 'أفضل المناطق' : 'Best Regions'}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(isRTL ? product.yemenSuitability.bestRegionsAr : product.yemenSuitability.bestRegionsEn).map((region, i) => (
                    <Link 
                      key={i}
                      to={`/locations/${region.toLowerCase().replace("'", '').replace(' ', '')}`}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {region}
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? product.yemenSuitability.climateNotesAr : product.yemenSuitability.climateNotesEn}
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-muted-foreground">
                {isRTL ? product.yemenSuitability.explanationAr : product.yemenSuitability.explanationEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isRTL ? 'حالات الاستخدام' : 'Use Cases'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.useCases.map((useCase, i) => {
                const UseCaseIcon = useCaseIcons[useCase.icon] || Home;
                return (
                  <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4">
                      <UseCaseIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">{isRTL ? useCase.titleAr : useCase.titleEn}</h3>
                    <p className="text-sm text-muted-foreground">{isRTL ? useCase.descAr : useCase.descEn}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isRTL ? 'متى يُنصح بهذا المنتج؟' : 'When is This Product Recommended?'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recommended */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-6">
                <h3 className="font-bold text-success mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {isRTL ? 'يُنصح به لـ' : 'Recommended For'}
                </h3>
                <ul className="space-y-2">
                  {(isRTL ? product.recommendedForAr : product.recommendedForEn).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Recommended */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                <h3 className="font-bold text-destructive mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  {isRTL ? 'لا يُنصح به لـ' : 'Not Recommended For'}
                </h3>
                <ul className="space-y-2">
                  {(isRTL ? product.notRecommendedForAr : product.notRecommendedForEn).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Enhanced */}
      {product.comparisons.length > 0 && (
        <section className="py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{isRTL ? 'مقارنة مع منتجات أخرى' : 'Comparison with Other Products'}</h2>
              
              {/* Comparison Table */}
              <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-4 py-3 text-start font-bold">{isRTL ? 'المواصفة' : 'Specification'}</th>
                        <th className="px-4 py-3 text-center font-bold bg-primary/5 border-x border-border">
                          {product.model}
                          <Badge className="ms-2 bg-primary text-primary-foreground text-[10px]">
                            {isRTL ? 'المحدد' : 'Current'}
                          </Badge>
                        </th>
                        {product.comparisons.map((comp, i) => {
                          const compProd = getProductBySlug(category || '', comp.productSlug);
                          return compProd ? (
                            <th key={i} className="px-4 py-3 text-center font-bold">
                              <Link to={`/products/${category}/${comp.productSlug}`} className="hover:text-primary">
                                {compProd.model}
                              </Link>
                            </th>
                          ) : null;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.slice(0, 6).map((spec, i) => (
                        <tr key={i} className={cn("border-t border-border", i % 2 === 0 ? "bg-muted/20" : "")}>
                          <td className="px-4 py-2.5 text-sm font-medium">{isRTL ? spec.keyAr : spec.keyEn}</td>
                          <td className="px-4 py-2.5 text-sm text-center bg-primary/5 border-x border-border font-medium">
                            {spec.value} {spec.unit}
                          </td>
                          {product.comparisons.map((comp, j) => {
                            const compProd = getProductBySlug(category || '', comp.productSlug);
                            const compSpec = compProd?.specifications.find(s => s.keyEn === spec.keyEn);
                            return (
                              <td key={j} className="px-4 py-2.5 text-sm text-center text-muted-foreground">
                                {compSpec ? `${compSpec.value} ${compSpec.unit || ''}` : '-'}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                      {/* Yemen Suitability Row */}
                      <tr className="border-t border-border bg-success/5">
                        <td className="px-4 py-2.5 text-sm font-medium">{isRTL ? 'ملاءمة ظروف اليمن' : 'Yemen Suitability'}</td>
                        <td className="px-4 py-2.5 text-center border-x border-border">
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, idx) => (
                              <div 
                                key={idx} 
                                className={cn(
                                  "h-2 w-2 rounded-full",
                                  idx < Math.round((product.yemenSuitability.ratings.heatResistance + product.yemenSuitability.ratings.coastalSuitability + product.yemenSuitability.ratings.powerOutageSupport + product.yemenSuitability.ratings.dustResistance) / 4)
                                    ? "bg-success"
                                    : "bg-muted"
                                )}
                              />
                            ))}
                          </div>
                        </td>
                        {product.comparisons.map((comp, j) => {
                          const compProd = getProductBySlug(category || '', comp.productSlug);
                          if (!compProd) return <td key={j} className="px-4 py-2.5">-</td>;
                          const avgRating = Math.round((compProd.yemenSuitability.ratings.heatResistance + compProd.yemenSuitability.ratings.coastalSuitability + compProd.yemenSuitability.ratings.powerOutageSupport + compProd.yemenSuitability.ratings.dustResistance) / 4);
                          return (
                            <td key={j} className="px-4 py-2.5 text-center">
                              <div className="flex items-center justify-center gap-1">
                                {[...Array(5)].map((_, idx) => (
                                  <div 
                                    key={idx} 
                                    className={cn("h-2 w-2 rounded-full", idx < avgRating ? "bg-success" : "bg-muted")}
                                  />
                                ))}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* When to Choose */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    {isRTL ? `متى تختار ${product.model}؟` : `When to Choose ${product.model}?`}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {product.comparisons[0] && (isRTL ? product.comparisons[0].pros.ar : product.comparisons[0].pros.en).slice(0, 3).map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {product.comparisons.slice(0, 2).map((comp, i) => {
                  const compProd = getProductBySlug(category || '', comp.productSlug);
                  if (!compProd) return null;
                  return (
                    <div key={i} className="bg-muted/50 border border-border rounded-xl p-5">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        {isRTL ? `متى تختار ${compProd.model}؟` : `When to Choose ${compProd.model}?`}
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {(isRTL ? comp.cons.ar : comp.cons.en).slice(0, 3).map((con, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span>{isRTL ? `عندما تحتاج: ${con}` : `When you need: ${con}`}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to={`/products/${category}/${comp.productSlug}`}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
                      >
                        {isRTL ? 'عرض التفاصيل' : 'View Details'}
                        <ArrowLeft className={cn("h-3 w-3", !isRTL && "rotate-180")} />
                      </Link>
                    </div>
                  );
                })}
              </div>
              
              {/* Placeholder Note */}
              <p className="text-xs text-muted-foreground mt-4 text-center">
                {isRTL 
                  ? '* قيم المقارنة مؤقتة وسيتم تحديثها من الكتالوج الرسمي'
                  : '* Comparison values are temporary and will be updated from the official catalog'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Related Knowledge Articles for this product */}
      {getRelatedArticlesForProduct(category || '', pageLang).length > 0 && (
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-3">
                  {isRTL ? 'مقالات تساعدك على اتخاذ القرار' : 'Articles to help you decide'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {category === 'batteries' || category === 'pylontech'
                    ? (isRTL
                        ? 'اقرأ أكثر عن البطاريات قبل اختيار السعة والنوع'
                        : 'Learn more about batteries before choosing size and chemistry')
                    : category === 'panels'
                    ? (isRTL
                        ? 'فهم تصميم النظام قبل اختيار عدد الألواح'
                        : 'Understand system design before choosing your panel count')
                    : category === 'inverters'
                    ? (isRTL
                        ? 'تعرف على الانفرترات قبل اختيار القدرة المناسبة'
                        : 'Understand inverters before choosing the right power rating')
                    : isRTL
                    ? 'مقالات مرتبطة بالمنتج'
                    : 'Guides related to this product'}
                </h2>
                <p className="text-muted-foreground">
                  {isRTL
                    ? 'اختر من المقالات التالية للحصول على صورة أوضح عن التصميم الصحيح، اختيار القدرة، وتجنب الأخطاء الشائعة في اليمن.'
                    : 'Use these guides to better understand proper design, sizing and common mistakes in Yemen before buying.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getRelatedArticlesForProduct(category || '', pageLang).slice(0, 3).map((article) => (
                  <Link
                    key={article.to}
                    to={article.to}
                    className="group bg-card border border-border rounded-2xl p-5 hover:border-secondary/60 hover:shadow-lg transition-all"
                  >
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary/10 text-secondary mb-4">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {article.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                {isRTL ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {product.faqs.map((faq, i) => (
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

            <div className="mt-2 rounded-xl border border-border bg-card/80 px-4 py-3 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p>
                {isRTL
                  ? 'تريد إجابات أوسع عن تصميم الأنظمة وتكاليفها في اليمن؟'
                  : 'Want broader answers about system design and solar costs in Yemen?'}
              </p>
              <Link
                to={isEnPath ? '/en/knowledge/solar-faq-yemen' : '/knowledge/solar-faq-yemen'}
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                {isRTL ? 'اقرأ صفحة الأسئلة الشائعة في اليمن' : 'Read the Yemen solar FAQ page'}
                <Arrow className={cn('h-3 w-3', !isRTL && 'rotate-180')} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Product Type FAQ – AEO-focused */}
      {miniFaqs.length > 0 && (
        <section className="py-10 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto border border-border rounded-xl p-6 bg-card/90">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                {isRTL
                  ? 'أسئلة سريعة عن هذا النوع من المنتجات في اليمن'
                  : 'Quick FAQs about this product type in Yemen'}
              </h3>
              <div className="space-y-4">
                {miniFaqs.map((faq, i) => (
                  <div key={i}>
                    <p className="font-medium">{faq.question}</p>
                    <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{isRTL ? 'منتجات ذات صلة' : 'Related Products'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/products/${related.category}/${related.slug}`}
                    className="bg-card border border-border rounded-xl p-4 hover:shadow-md hover:border-primary/30 transition-all group"
                  >
                    <div className="aspect-video bg-muted rounded-lg mb-3 overflow-hidden">
                      <img
                        src={related.image}
                        alt={isRTL ? related.nameAr : related.nameEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">{related.brand} • {related.model}</div>
                    <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {isRTL ? related.nameAr : related.nameEn}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services & Locations */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Related Services */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  {isRTL ? 'خدمات ذات صلة' : 'Related Services'}
                </h3>
                <div className="space-y-2">
                  {product.relatedServiceKeys.slice(0, 3).map((serviceKey, i) => (
                    <Link
                      key={i}
                      to="/services"
                      className="flex items-center gap-2 text-sm p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{serviceKey === 'installation' ? (isRTL ? 'تركيب الأنظمة' : 'System Installation') :
                             serviceKey === 'storage' ? (isRTL ? 'تخزين الطاقة' : 'Energy Storage') :
                             serviceKey === 'maintenance' ? (isRTL ? 'الصيانة والدعم' : 'Maintenance & Support') :
                             serviceKey === 'consultation' ? (isRTL ? 'الاستشارات' : 'Consultation') :
                             (isRTL ? 'دراسة الجدوى' : 'Feasibility Study')}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Locations */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {isRTL ? 'متوفر في' : 'Available In'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.relatedLocationSlugs.map((locationSlug, i) => (
                    <Link
                      key={i}
                      to={`/locations/${locationSlug}`}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {locationSlug === 'sanaa' ? (isRTL ? 'صنعاء' : "Sana'a") :
                       locationSlug === 'aden' ? (isRTL ? 'عدن' : 'Aden') :
                       locationSlug === 'taiz' ? (isRTL ? 'تعز' : 'Taiz') :
                       locationSlug === 'hudaydah' ? (isRTL ? 'الحديدة' : 'Hudaydah') :
                       locationSlug === 'marib' ? (isRTL ? 'مأرب' : 'Marib') :
                       locationSlug}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-4 bg-muted/30 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {isRTL ? `آخر تحديث: ${LAST_UPDATED}` : `Last updated: ${LAST_UPDATED}`}
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? `هل ${product.model} مناسب لاحتياجاتك؟` : `Is ${product.model} Right for Your Needs?`}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص'
                : 'Contact us for a free consultation and customized quote'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="tel:+967777800063">
                  <Phone className="h-4 w-4" />
                  {isRTL ? 'اتصل بنا' : 'Call Us'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
