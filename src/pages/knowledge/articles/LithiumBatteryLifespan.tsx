import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Battery, 
  Zap, 
  CheckCircle2, 
  ArrowLeft,
  ChevronRight,
  Thermometer,
  RefreshCw,
  TrendingDown,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  Sun
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from '@/components/SEO';

const LithiumBatteryLifespan = () => {
  const { lang, isRTL } = useLanguage();
  const language = lang;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ar: {
      title: "كم تدوم بطارية الليثيوم؟ عوامل العمر الافتراضي | دليل شامل",
      metaDescription: "تعرف على العوامل التي تحدد عمر بطارية الليثيوم وكيف تطيل عمرها في ظروف اليمن. دورات الشحن، عمق التفريغ، وتأثير الحرارة.",
      breadcrumb: "عمر بطارية الليثيوم",
      backToHub: "مركز المعرفة",
      heroTitle: "كم تدوم بطارية الليثيوم؟",
      heroSubtitle: "فهم العوامل التي تحدد العمر الافتراضي وكيف تطيله",
      
      intro: {
        title: "لماذا السؤال عن العمر مهم؟",
        content: "عند الاستثمار في بطارية ليثيوم، السؤال الأول دائمًا: \"كم ستدوم؟\". الإجابة ليست رقمًا ثابتًا، بل تعتمد على عدة عوامل يمكنك التحكم في معظمها. فهم هذه العوامل يساعدك على اتخاذ قرار شراء صحيح وإطالة عمر استثمارك."
      },

      note: {
        title: "ملاحظة مهمة",
        content: "العمر الافتراضي يختلف حسب الماركة والموديل وظروف الاستخدام. الأرقام المذكورة في مواصفات الشركات المصنعة تكون عادةً في ظروف مثالية. الأداء الفعلي يعتمد على طريقة استخدامك."
      },

      concepts: {
        title: "المفاهيم الأساسية لفهم عمر البطارية",
        items: [
          {
            icon: "cycle",
            title: "دورات الشحن (Charge Cycles)",
            description: "الدورة الواحدة = تفريغ البطارية ثم شحنها بالكامل. بطاريات الليثيوم مصممة لعدد معين من الدورات.",
            example: "مثال: إذا استخدمت 50% من البطارية اليوم و50% غدًا ثم شحنتها، هذه دورة واحدة وليس اثنتين."
          },
          {
            icon: "dod",
            title: "عمق التفريغ (Depth of Discharge - DoD)",
            description: "كم تفرّغ البطارية قبل إعادة شحنها. التفريغ العميق المتكرر يقصّر العمر.",
            example: "نصيحة: حاول ألا تفرّغ البطارية أقل من 20% بشكل متكرر. الاستخدام في نطاق 20-80% يطيل العمر."
          },
          {
            icon: "temp",
            title: "درجة الحرارة",
            description: "الحرارة العالية هي العدو الأول لبطاريات الليثيوم. تسرّع التدهور الكيميائي وتقلل السعة.",
            example: "في اليمن: الحرارة الصيفية تتطلب اهتمامًا خاصًا بموقع تركيب البطارية والتهوية."
          }
        ]
      },

      comparison: {
        title: "ليثيوم vs رصاص: مقارنة العمر الافتراضي",
        note: "المقارنة التالية توضيحية وتعتمد على الاستخدام النموذجي. راجع مواصفات المنتج الفعلي.",
        headers: ["العامل", "بطاريات الليثيوم", "بطاريات الرصاص"],
        rows: [
          {
            factor: "عدد الدورات",
            lithium: "عدد دورات أعلى بكثير",
            lead: "عدد دورات أقل"
          },
          {
            factor: "عمق التفريغ الآمن",
            lithium: "يمكن تفريغها لنسبة أعلى بأمان",
            lead: "التفريغ العميق يضر بها بشدة"
          },
          {
            factor: "تأثير الحرارة",
            lithium: "حساسة للحرارة العالية",
            lead: "حساسة أيضًا لكن بدرجة مختلفة"
          },
          {
            factor: "الصيانة",
            lithium: "لا تحتاج صيانة دورية",
            lead: "بعض الأنواع تحتاج صيانة"
          },
          {
            factor: "التكلفة مقابل العمر",
            lithium: "تكلفة أولية أعلى، تكلفة الدورة أقل",
            lead: "تكلفة أولية أقل، استبدال أكثر تكرارًا"
          }
        ],
        conclusion: "على المدى الطويل، بطاريات الليثيوم عادةً أكثر اقتصادية رغم سعرها الأولي الأعلى."
      },

      yemenFactors: {
        title: "ما الذي يقصّر عمر البطارية في اليمن؟",
        factors: [
          {
            title: "الحرارة الشديدة صيفًا",
            description: "درجات الحرارة المرتفعة تسرّع تدهور البطارية. المناطق الساحلية والمنخفضة الأكثر تأثرًا.",
            solution: "الحل: تركيب البطارية في مكان مظلل وجيد التهوية، بعيدًا عن أشعة الشمس المباشرة."
          },
          {
            title: "انقطاعات الكهرباء الطويلة",
            description: "الانقطاعات المتكررة تعني دورات شحن/تفريغ أكثر، واستخدام أعمق للبطارية.",
            solution: "الحل: تحجيم البطارية بشكل مناسب لتجنب التفريغ العميق المتكرر."
          },
          {
            title: "تقلبات الجهد الكهربائي",
            description: "عدم استقرار الشبكة قد يؤثر على دورة الشحن ويضر البطارية.",
            solution: "الحل: استخدام انفرتر/شاحن عالي الجودة مع حماية الجهد."
          },
          {
            title: "الغبار في بعض المناطق",
            description: "تراكم الغبار يؤثر على التهوية ويرفع الحرارة.",
            solution: "الحل: تنظيف دوري وتركيب في مكان محمي."
          }
        ]
      },

      extendLife: {
        title: "كيف تطيل عمر البطارية عمليًا؟",
        tips: [
          {
            title: "اختر مكان التركيب بعناية",
            description: "مكان مظلل، جيد التهوية، بعيد عن مصادر الحرارة. درجة الحرارة المعتدلة تطيل العمر بشكل ملحوظ."
          },
          {
            title: "تجنب التفريغ العميق المتكرر",
            description: "حاول إبقاء البطارية فوق 20% معظم الوقت. إذا كانت الانقطاعات طويلة، فكّر في سعة أكبر."
          },
          {
            title: "استخدم شاحن/انفرتر متوافق",
            description: "الشاحن يجب أن يكون مصممًا لبطاريات الليثيوم ويدعم بروتوكول الشحن الصحيح."
          },
          {
            title: "لا تترك البطارية مفرغة طويلاً",
            description: "إذا لم تستخدم النظام لفترة، اشحن البطارية لـ 50-60% وافصلها."
          },
          {
            title: "راقب درجة الحرارة",
            description: "إذا كانت البطارية ساخنة جدًا للمس، هناك مشكلة تحتاج معالجة."
          },
          {
            title: "اتبع توصيات الشركة المصنعة",
            description: "كل بطارية لها مواصفات ومتطلبات. راجع الدليل واتبع التعليمات."
          }
        ]
      },

      keyTakeaways: {
        title: "الخلاصة",
        points: [
          "عمر البطارية يعتمد على: دورات الشحن، عمق التفريغ، ودرجة الحرارة",
          "بطاريات الليثيوم تدوم أطول من الرصاص في معظم الاستخدامات",
          "الحرارة العالية في اليمن تتطلب اهتمامًا خاصًا بموقع التركيب",
          "تجنب التفريغ العميق المتكرر يطيل العمر بشكل كبير",
          "الاستثمار في بطارية جيدة وتركيب صحيح يوفر على المدى الطويل"
        ]
      },

      relatedLinks: {
        title: "مواضيع ذات صلة",
        pillar: "ليثيوم vs رصاص: المقارنة الشاملة",
        pylontech: "بطاريات Pylontech",
        batteries: "تصفح البطاريات",
        services: "خدمات التركيب والصيانة"
      },

      faqs: [
        {
          q: "هل يمكنني معرفة عمر البطارية المتبقي؟",
          a: "بعض البطاريات الذكية (مثل Pylontech) تعرض حالة البطارية ونسبة السعة المتبقية عبر تطبيق أو شاشة. هذا يساعدك على معرفة متى تحتاج استبدال."
        },
        {
          q: "هل الشحن الليلي يضر البطارية؟",
          a: "إذا كان الشاحن/الانفرتر مصممًا لبطاريات الليثيوم، فلا مشكلة. الأنظمة الحديثة تتوقف تلقائيًا عند اكتمال الشحن."
        },
        {
          q: "هل أستطيع استخدام البطارية حتى تفرغ تمامًا؟",
          a: "معظم بطاريات الليثيوم لديها حماية تمنع التفريغ الكامل. لكن التفريغ العميق المتكرر (حتى لو لم يصل للصفر) يقصر العمر."
        },
        {
          q: "هل تحتاج بطاريات الليثيوم صيانة؟",
          a: "لا تحتاج صيانة كيميائية مثل بطاريات الرصاص. لكن تحتاج: مراقبة الحرارة، تنظيف الغبار، وفحص التوصيلات."
        },
        {
          q: "متى يجب استبدال البطارية؟",
          a: "عندما تلاحظ انخفاضًا واضحًا في مدة التشغيل (السعة الفعلية)، أو إذا أظهر النظام تحذيرات. بعض البطاريات تُستبدل عند وصول السعة لـ 70-80% من الأصلية."
        }
      ],

      cta: {
        title: "تحتاج مساعدة في اختيار البطارية المناسبة؟",
        subtitle: "فريقنا يساعدك في اختيار السعة والنوع المناسب لاحتياجاتك وظروفك",
        button: "تواصل معنا"
      }
    },
    en: {
      title: "How Long Do Lithium Batteries Last? Lifespan Factors | Complete Guide",
      metaDescription: "Learn about the factors that determine lithium battery lifespan and how to extend it in Yemen's conditions. Charge cycles, depth of discharge, and temperature effects.",
      breadcrumb: "Lithium Battery Lifespan",
      backToHub: "Knowledge Hub",
      heroTitle: "How Long Do Lithium Batteries Last?",
      heroSubtitle: "Understanding the factors that determine lifespan and how to extend it",
      
      intro: {
        title: "Why the Lifespan Question Matters?",
        content: "When investing in a lithium battery, the first question is always: \"How long will it last?\". The answer isn't a fixed number, but depends on several factors you can control. Understanding these factors helps you make the right purchase decision and extend your investment's life."
      },

      note: {
        title: "Important Note",
        content: "Lifespan varies by brand, model, and usage conditions. Numbers in manufacturer specifications are typically under ideal conditions. Actual performance depends on how you use it."
      },

      concepts: {
        title: "Key Concepts for Understanding Battery Lifespan",
        items: [
          {
            icon: "cycle",
            title: "Charge Cycles",
            description: "One cycle = discharging then fully charging the battery. Lithium batteries are designed for a specific number of cycles.",
            example: "Example: If you use 50% of the battery today and 50% tomorrow then charge it, that's one cycle, not two."
          },
          {
            icon: "dod",
            title: "Depth of Discharge (DoD)",
            description: "How much you discharge the battery before recharging. Repeated deep discharge shortens lifespan.",
            example: "Tip: Try not to discharge below 20% frequently. Using in the 20-80% range extends life."
          },
          {
            icon: "temp",
            title: "Temperature",
            description: "High temperature is the number one enemy of lithium batteries. It accelerates chemical degradation and reduces capacity.",
            example: "In Yemen: Summer heat requires special attention to battery installation location and ventilation."
          }
        ]
      },

      comparison: {
        title: "Lithium vs Lead-Acid: Lifespan Comparison",
        note: "The following comparison is illustrative and depends on typical usage. Check actual product specifications.",
        headers: ["Factor", "Lithium Batteries", "Lead-Acid Batteries"],
        rows: [
          {
            factor: "Cycle Count",
            lithium: "Much higher cycle count",
            lead: "Lower cycle count"
          },
          {
            factor: "Safe Discharge Depth",
            lithium: "Can be safely discharged deeper",
            lead: "Deep discharge damages them severely"
          },
          {
            factor: "Temperature Effect",
            lithium: "Sensitive to high heat",
            lead: "Also sensitive but differently"
          },
          {
            factor: "Maintenance",
            lithium: "No regular maintenance needed",
            lead: "Some types need maintenance"
          },
          {
            factor: "Cost vs Lifespan",
            lithium: "Higher upfront cost, lower cost per cycle",
            lead: "Lower upfront cost, more frequent replacement"
          }
        ],
        conclusion: "Long-term, lithium batteries are usually more economical despite higher initial price."
      },

      yemenFactors: {
        title: "What Shortens Battery Life in Yemen?",
        factors: [
          {
            title: "Extreme Summer Heat",
            description: "High temperatures accelerate battery degradation. Coastal and low-lying areas are most affected.",
            solution: "Solution: Install the battery in a shaded, well-ventilated location, away from direct sunlight."
          },
          {
            title: "Long Power Outages",
            description: "Frequent outages mean more charge/discharge cycles and deeper battery usage.",
            solution: "Solution: Size the battery appropriately to avoid frequent deep discharge."
          },
          {
            title: "Voltage Fluctuations",
            description: "Unstable grid can affect the charging cycle and harm the battery.",
            solution: "Solution: Use a high-quality inverter/charger with voltage protection."
          },
          {
            title: "Dust in Some Areas",
            description: "Dust accumulation affects ventilation and raises temperature.",
            solution: "Solution: Regular cleaning and installation in protected location."
          }
        ]
      },

      extendLife: {
        title: "How to Extend Battery Life Practically?",
        tips: [
          {
            title: "Choose Installation Location Carefully",
            description: "Shaded area, well-ventilated, away from heat sources. Moderate temperature significantly extends life."
          },
          {
            title: "Avoid Frequent Deep Discharge",
            description: "Try to keep battery above 20% most of the time. If outages are long, consider larger capacity."
          },
          {
            title: "Use Compatible Charger/Inverter",
            description: "Charger must be designed for lithium batteries and support the correct charging protocol."
          },
          {
            title: "Don't Leave Battery Discharged Long",
            description: "If not using the system for a while, charge battery to 50-60% and disconnect."
          },
          {
            title: "Monitor Temperature",
            description: "If the battery is too hot to touch, there's a problem that needs addressing."
          },
          {
            title: "Follow Manufacturer Recommendations",
            description: "Each battery has specifications and requirements. Review the manual and follow instructions."
          }
        ]
      },

      keyTakeaways: {
        title: "Key Takeaways",
        points: [
          "Battery life depends on: charge cycles, depth of discharge, and temperature",
          "Lithium batteries last longer than lead-acid in most applications",
          "Yemen's high heat requires special attention to installation location",
          "Avoiding frequent deep discharge significantly extends life",
          "Investing in good battery and proper installation saves money long-term"
        ]
      },

      relatedLinks: {
        title: "Related Topics",
        pillar: "Lithium vs Lead-Acid: Complete Comparison",
        pylontech: "Pylontech Batteries",
        batteries: "Browse Batteries",
        services: "Installation & Maintenance Services"
      },

      faqs: [
        {
          q: "Can I know the remaining battery life?",
          a: "Some smart batteries (like Pylontech) show battery health and remaining capacity via app or display. This helps you know when replacement is needed."
        },
        {
          q: "Does overnight charging harm the battery?",
          a: "If the charger/inverter is designed for lithium batteries, there's no problem. Modern systems automatically stop when charging completes."
        },
        {
          q: "Can I use the battery until it's completely empty?",
          a: "Most lithium batteries have protection that prevents complete discharge. But frequent deep discharge (even if not reaching zero) shortens life."
        },
        {
          q: "Do lithium batteries need maintenance?",
          a: "They don't need chemical maintenance like lead-acid batteries. But they need: temperature monitoring, dust cleaning, and connection checks."
        },
        {
          q: "When should the battery be replaced?",
          a: "When you notice significant decrease in runtime (actual capacity), or if the system shows warnings. Some batteries are replaced when capacity reaches 70-80% of original."
        }
      ],

      cta: {
        title: "Need Help Choosing the Right Battery?",
        subtitle: "Our team helps you choose the right capacity and type for your needs and conditions",
        button: "Contact Us"
      }
    }
  };

  const t = content[language];

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": t.title,
    "description": t.metaDescription,
    "image": "https://alqatta.com/og-image.jpg",
    "datePublished": "2024-12-21",
    "dateModified": "2024-12-21",
    "author": {
      "@type": "Organization",
      "name": "Al-Qatta Solar Energy",
      "url": "https://alqatta.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Al-Qatta Solar Energy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alqatta.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://alqatta.com/knowledge/lithium-battery-lifespan"
    },
    "articleSection": "Solar Energy Guides",
    "inLanguage": language === 'ar' ? 'ar-YE' : 'en'
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
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
        "name": language === 'ar' ? "الرئيسية" : "Home",
        "item": "https://alqatta.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'ar' ? "مركز المعرفة" : "Knowledge Hub",
        "item": "https://alqatta.com/knowledge"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.breadcrumb,
        "item": "https://alqatta.com/knowledge/lithium-battery-lifespan"
      }
    ]
  };

  const getConceptIcon = (icon: string) => {
    switch (icon) {
      case 'cycle': return <RefreshCw className="h-6 w-6" />;
      case 'dod': return <TrendingDown className="h-6 w-6" />;
      case 'temp': return <Thermometer className="h-6 w-6" />;
      default: return <Battery className="h-6 w-6" />;
    }
  };

  return (
    <Layout>
      <SEO
        title={t.title}
        description={t.metaDescription}
        canonical="/knowledge/lithium-battery-lifespan"
        ogType="article"
        jsonLd={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/knowledge" className="hover:text-primary transition-colors">
                {t.backToHub}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{t.breadcrumb}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-green-500/5 to-background">
          <div className="container mx-auto px-4">
            <Link 
              to="/knowledge" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backToHub}
            </Link>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-green-500/10">
                  <Battery className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t.heroTitle}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t.intro.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.intro.content}
                </p>
              </section>

              {/* Important Note */}
              <section className="mb-10">
                <Card className="bg-blue-500/10 border-blue-500/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">{t.note.title}</h3>
                        <p className="text-blue-700 dark:text-blue-300">{t.note.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Key Concepts */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.concepts.title}</h2>
                <div className="space-y-4">
                  {t.concepts.items.map((concept, index) => (
                    <Card key={index}>
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-green-500/10 text-green-600">
                            {getConceptIcon(concept.icon)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">{concept.title}</h3>
                            <p className="text-muted-foreground mb-3">{concept.description}</p>
                            <div className="bg-muted/50 rounded-lg p-3">
                              <p className="text-sm text-foreground italic">{concept.example}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Comparison Table */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t.comparison.title}</h2>
                <Card className="bg-amber-500/5 border-amber-500/20 mb-4">
                  <CardContent className="p-3">
                    <p className="text-sm text-amber-700 dark:text-amber-400">{t.comparison.note}</p>
                  </CardContent>
                </Card>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        {t.comparison.headers.map((header, index) => (
                          <th key={index} className="border border-border p-3 text-start font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {t.comparison.rows.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="border border-border p-3 font-medium">{row.factor}</td>
                          <td className="border border-border p-3 text-green-600 dark:text-green-400">{row.lithium}</td>
                          <td className="border border-border p-3 text-muted-foreground">{row.lead}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">{t.comparison.conclusion}</p>
              </section>

              {/* Yemen Factors */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Sun className="h-6 w-6 text-amber-500" />
                  <h2 className="text-2xl font-bold text-foreground">{t.yemenFactors.title}</h2>
                </div>
                <div className="space-y-4">
                  {t.yemenFactors.factors.map((factor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-red-500/5 p-4 border-b border-red-500/10">
                          <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            {factor.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{factor.description}</p>
                        </div>
                        <div className="bg-green-500/5 p-4">
                          <p className="text-sm text-green-700 dark:text-green-400 flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            {factor.solution}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Extend Life Tips */}
              <section className="mb-12">
                <Card className="bg-green-500/5 border-green-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <ShieldCheck className="h-6 w-6 text-green-600" />
                      <h2 className="text-2xl font-bold text-foreground">{t.extendLife.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {t.extendLife.tips.map((tip, index) => (
                        <div key={index} className="bg-background rounded-lg p-4 border">
                          <h4 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                            <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm flex-shrink-0">
                              {index + 1}
                            </span>
                            {tip.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Key Takeaways */}
              <section className="mb-12">
                <Card className="bg-muted/50 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{t.keyTakeaways.title}</h2>
                    <ul className="space-y-3">
                      {t.keyTakeaways.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Related Links */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t.relatedLinks.title}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link to="/knowledge/lithium-vs-lead-acid">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.pillar}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/products/pylontech">
                    <Card className="h-full hover:border-green-500 transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Battery className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.pylontech}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/products/batteries">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Battery className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.batteries}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/services">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.services}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {t.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-start hover:no-underline">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-4 rounded-xl border border-border bg-card/80 px-4 py-3 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p>
                    {language === 'ar'
                      ? 'لأسئلة أوسع حول الأنظمة والطاقة الشمسية في اليمن، راجع صفحة الأسئلة الشائعة.'
                      : 'For broader questions about solar systems in Yemen, see the dedicated FAQ page.'}
                  </p>
                  <Link
                    to="/knowledge/solar-faq-yemen"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    {language === 'ar' ? 'فتح صفحة FAQ اليمن' : 'Open Yemen solar FAQ page'}
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center">
                <Card className="bg-gradient-to-r from-green-600 to-green-500">
                  <CardContent className="p-8">
                    <Battery className="h-12 w-12 text-white mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">{t.cta.title}</h2>
                    <p className="text-white/80 mb-6">{t.cta.subtitle}</p>
                    <Button asChild size="lg" variant="secondary">
                      <Link to="/contact">{t.cta.button}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>

            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default LithiumBatteryLifespan;
