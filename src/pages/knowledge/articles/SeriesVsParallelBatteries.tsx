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
  AlertTriangle,
  ArrowUpDown,
  ArrowLeftRight,
  XCircle,
  Wrench,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from '@/components/SEO';

const SeriesVsParallelBatteries = () => {
  const { lang, isRTL } = useLanguage();
  const language = lang;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ar: {
      title: "طريقة توصيل البطاريات: توالي vs توازي | دليل الفهم الصحيح",
      metaDescription: "تعرف على الفرق بين توصيل البطاريات بالتوالي والتوازي. متى تستخدم كل طريقة وما الأخطاء الشائعة التي يجب تجنبها في اليمن.",
      breadcrumb: "توالي vs توازي",
      backToHub: "مركز المعرفة",
      heroTitle: "توصيل البطاريات: توالي أم توازي؟",
      heroSubtitle: "فهم الفرق واختيار الطريقة المناسبة لنظامك",
      
      intro: {
        title: "لماذا طريقة التوصيل مهمة؟",
        content: "عند استخدام أكثر من بطارية، طريقة التوصيل تحدد كيف يعمل النظام. التوصيل الخاطئ قد يتلف البطاريات أو يكون خطيرًا. في هذا الدليل، ستفهم الفرق الأساسي بين التوالي والتوازي لتتمكن من الحوار مع الفني بوعي."
      },

      safetyWarning: {
        title: "⚠️ تحذير أمان مهم",
        content: "توصيل البطاريات يتطلب معرفة فنية وأدوات مناسبة. هذا الدليل للفهم فقط وليس تعليمات تركيب. دائمًا استعن بفني متخصص لتركيب وتوصيل البطاريات."
      },

      series: {
        title: "التوصيل على التوالي (Series)",
        description: "توصيل القطب الموجب للبطارية الأولى بالقطب السالب للثانية، وهكذا.",
        whatChanges: {
          title: "ماذا يتغير؟",
          items: [
            { label: "الجهد (Voltage)", value: "يتضاعف / يجمع", description: "بطاريتان 12V = نظام 24V" },
            { label: "السعة (Ah)", value: "تبقى كما هي", description: "بطاريتان 100Ah = نظام 100Ah" },
            { label: "التيار", value: "يبقى كما هو", description: "نفس تيار البطارية الواحدة" }
          ]
        },
        whenToUse: {
          title: "متى تستخدم التوالي؟",
          points: [
            "عندما يحتاج النظام (الانفرتر) جهدًا أعلى",
            "مثال: انفرتر 24V يحتاج بطاريتين 12V على التوالي",
            "مثال: انفرتر 48V يحتاج 4 بطاريات 12V على التوالي"
          ]
        }
      },

      parallel: {
        title: "التوصيل على التوازي (Parallel)",
        description: "توصيل جميع الأقطاب الموجبة معًا، وجميع الأقطاب السالبة معًا.",
        whatChanges: {
          title: "ماذا يتغير؟",
          items: [
            { label: "الجهد (Voltage)", value: "يبقى كما هو", description: "بطاريتان 12V = نظام 12V" },
            { label: "السعة (Ah)", value: "تتضاعف / تجمع", description: "بطاريتان 100Ah = نظام 200Ah" },
            { label: "التيار", value: "يتوزع", description: "كل بطارية تتحمل جزءًا من الحمل" }
          ]
        },
        whenToUse: {
          title: "متى تستخدم التوازي؟",
          points: [
            "عندما تحتاج سعة أكبر (وقت تشغيل أطول)",
            "عندما يكون جهد النظام ثابتًا ولا يحتاج رفع",
            "مثال: بطاريتان 12V/200Ah على التوازي = 12V/400Ah"
          ]
        }
      },

      combination: {
        title: "التوصيل المختلط (Series-Parallel)",
        description: "دمج التوالي والتوازي للحصول على جهد أعلى وسعة أكبر معًا.",
        warning: "⚠️ هذا النوع أكثر تعقيدًا ويتطلب حسابات دقيقة وتطابق تام بين البطاريات. لا تحاول تنفيذه بدون فني متخصص.",
        example: "مثال: 4 بطاريات 12V/200Ah يمكن توصيلها للحصول على نظام 24V/400Ah"
      },

      comparisonTable: {
        title: "مقارنة سريعة",
        headers: ["العامل", "التوالي (Series)", "التوازي (Parallel)"],
        rows: [
          { factor: "الجهد", series: "يزيد (يُجمع)", parallel: "يبقى ثابتًا" },
          { factor: "السعة (Ah)", series: "تبقى ثابتة", parallel: "تزيد (تُجمع)" },
          { factor: "الاستخدام النموذجي", series: "رفع الجهد للانفرتر", parallel: "زيادة وقت التشغيل" },
          { factor: "التعقيد", series: "متوسط", parallel: "أبسط نسبيًا" },
          { factor: "الخطورة عند الخطأ", series: "عالية", parallel: "عالية أيضًا" }
        ]
      },

      yemenMistakes: {
        title: "أخطاء شائعة في اليمن",
        mistakes: [
          {
            title: "خلط بطاريات مختلفة",
            description: "استخدام بطاريات بأعمار أو سعات أو أنواع مختلفة في نفس التوصيل.",
            consequence: "يؤدي لتلف سريع للبطاريات وأداء سيء.",
            solution: "استخدم بطاريات متطابقة تمامًا (نفس الماركة، الموديل، العمر)."
          },
          {
            title: "كابلات غير مناسبة",
            description: "استخدام كابلات رفيعة أو بأطوال مختلفة بين البطاريات.",
            consequence: "سخونة، فقدان طاقة، وخطر حريق.",
            solution: "استخدم كابلات بمقطع مناسب وأطوال متساوية."
          },
          {
            title: "إهمال الفيوزات والحماية",
            description: "توصيل البطاريات بدون فيوزات أو قواطع حماية.",
            consequence: "خطر كبير في حالة القصر أو الخطأ.",
            solution: "دائمًا ركّب حماية مناسبة بين البطاريات والنظام."
          },
          {
            title: "عدم فهم متطلبات الانفرتر",
            description: "توصيل البطاريات بجهد لا يتوافق مع الانفرتر.",
            consequence: "تلف الانفرتر أو عدم عمله.",
            solution: "راجع مواصفات الانفرتر قبل تصميم بنك البطاريات."
          },
          {
            title: "التركيب الذاتي بدون خبرة",
            description: "محاولة التوصيل بدون معرفة كافية.",
            consequence: "أخطاء خطيرة قد تؤدي لإصابات أو تلف المعدات.",
            solution: "استعن بفني متخصص دائمًا."
          }
        ]
      },

      keyTakeaways: {
        title: "الخلاصة",
        points: [
          "التوالي يرفع الجهد، التوازي يرفع السعة",
          "اختيار الطريقة يعتمد على متطلبات الانفرتر وحاجتك للسعة",
          "استخدم دائمًا بطاريات متطابقة تمامًا",
          "لا تحاول التوصيل بنفسك - استعن بفني متخصص",
          "الحماية (فيوزات، قواطع) ضرورية وليست اختيارية"
        ]
      },

      relatedLinks: {
        title: "مواضيع ذات صلة",
        pillar: "ليثيوم vs رصاص: المقارنة الشاملة",
        lifespan: "كم تدوم بطارية الليثيوم؟",
        batteries: "تصفح البطاريات",
        services: "خدمات التركيب والصيانة"
      },

      faqs: [
        {
          q: "هل يمكنني خلط بطاريات قديمة وجديدة؟",
          a: "لا يُنصح بذلك أبدًا. البطارية القديمة ستسحب الجديدة وتقلل أداء النظام كله. استخدم بطاريات بنفس العمر والحالة."
        },
        {
          q: "هل يمكنني خلط ليثيوم مع رصاص؟",
          a: "لا، مطلقًا. البطاريات المختلفة لها خصائص شحن وتفريغ مختلفة تمامًا. خلطها خطير ويتلف البطاريات."
        },
        {
          q: "كم عدد البطاريات التي يمكن توصيلها على التوازي؟",
          a: "يعتمد على نوع البطارية ومواصفات الشركة المصنعة. بعض بطاريات الليثيوم (مثل Pylontech) مصممة للتوصيل حتى عدد معين. راجع دليل المنتج."
        },
        {
          q: "لماذا يجب أن تكون الكابلات بنفس الطول؟",
          a: "لضمان توزيع التيار بالتساوي. كابل أطول = مقاومة أعلى = تيار أقل، مما يخلق عدم توازن يضر البطاريات."
        },
        {
          q: "هل التوصيل الخاطئ يتلف البطاريات فورًا؟",
          a: "قد يتلفها فورًا (قصر كهربائي) أو يسبب تدهورًا تدريجيًا. في كلتا الحالتين، الضرر يكون كبيرًا ومكلفًا."
        }
      ],

      cta: {
        title: "تحتاج مساعدة في تصميم بنك البطاريات؟",
        subtitle: "فريقنا المتخصص يصمم ويركب نظام البطاريات المناسب لاحتياجاتك",
        button: "تواصل معنا"
      }
    },
    en: {
      title: "Battery Wiring: Series vs Parallel | Understanding Guide",
      metaDescription: "Learn the difference between series and parallel battery connections. When to use each method and common mistakes to avoid in Yemen.",
      breadcrumb: "Series vs Parallel",
      backToHub: "Knowledge Hub",
      heroTitle: "Battery Wiring: Series or Parallel?",
      heroSubtitle: "Understanding the difference and choosing the right method for your system",
      
      intro: {
        title: "Why Does Wiring Method Matter?",
        content: "When using multiple batteries, the wiring method determines how the system works. Wrong wiring can damage batteries or be dangerous. In this guide, you'll understand the basic difference between series and parallel to communicate knowledgeably with technicians."
      },

      safetyWarning: {
        title: "⚠️ Important Safety Warning",
        content: "Battery wiring requires technical knowledge and proper tools. This guide is for understanding only, not installation instructions. Always use a qualified technician for battery installation and wiring."
      },

      series: {
        title: "Series Connection",
        description: "Connecting the positive terminal of the first battery to the negative terminal of the second, and so on.",
        whatChanges: {
          title: "What Changes?",
          items: [
            { label: "Voltage", value: "Doubles / Adds up", description: "Two 12V batteries = 24V system" },
            { label: "Capacity (Ah)", value: "Stays the same", description: "Two 100Ah batteries = 100Ah system" },
            { label: "Current", value: "Stays the same", description: "Same as single battery current" }
          ]
        },
        whenToUse: {
          title: "When to Use Series?",
          points: [
            "When the system (inverter) needs higher voltage",
            "Example: 24V inverter needs two 12V batteries in series",
            "Example: 48V inverter needs 4x 12V batteries in series"
          ]
        }
      },

      parallel: {
        title: "Parallel Connection",
        description: "Connecting all positive terminals together, and all negative terminals together.",
        whatChanges: {
          title: "What Changes?",
          items: [
            { label: "Voltage", value: "Stays the same", description: "Two 12V batteries = 12V system" },
            { label: "Capacity (Ah)", value: "Doubles / Adds up", description: "Two 100Ah batteries = 200Ah system" },
            { label: "Current", value: "Distributes", description: "Each battery handles part of the load" }
          ]
        },
        whenToUse: {
          title: "When to Use Parallel?",
          points: [
            "When you need more capacity (longer runtime)",
            "When system voltage is fixed and doesn't need increasing",
            "Example: Two 12V/200Ah batteries in parallel = 12V/400Ah"
          ]
        }
      },

      combination: {
        title: "Series-Parallel Connection",
        description: "Combining series and parallel to achieve both higher voltage and more capacity.",
        warning: "⚠️ This type is more complex and requires precise calculations and perfect matching between batteries. Do not attempt without a qualified technician.",
        example: "Example: 4x 12V/200Ah batteries can be wired for a 24V/400Ah system"
      },

      comparisonTable: {
        title: "Quick Comparison",
        headers: ["Factor", "Series", "Parallel"],
        rows: [
          { factor: "Voltage", series: "Increases (adds up)", parallel: "Stays constant" },
          { factor: "Capacity (Ah)", series: "Stays constant", parallel: "Increases (adds up)" },
          { factor: "Typical Use", series: "Raise voltage for inverter", parallel: "Increase runtime" },
          { factor: "Complexity", series: "Medium", parallel: "Relatively simpler" },
          { factor: "Risk if Wrong", series: "High", parallel: "Also high" }
        ]
      },

      yemenMistakes: {
        title: "Common Mistakes in Yemen",
        mistakes: [
          {
            title: "Mixing Different Batteries",
            description: "Using batteries of different ages, capacities, or types in the same connection.",
            consequence: "Leads to rapid battery damage and poor performance.",
            solution: "Use perfectly matched batteries (same brand, model, age)."
          },
          {
            title: "Inadequate Cables",
            description: "Using thin cables or cables of different lengths between batteries.",
            consequence: "Heating, energy loss, and fire risk.",
            solution: "Use cables with proper gauge and equal lengths."
          },
          {
            title: "Neglecting Fuses and Protection",
            description: "Connecting batteries without fuses or circuit breakers.",
            consequence: "High risk in case of short circuit or error.",
            solution: "Always install proper protection between batteries and system."
          },
          {
            title: "Not Understanding Inverter Requirements",
            description: "Connecting batteries at voltage incompatible with inverter.",
            consequence: "Inverter damage or failure to operate.",
            solution: "Check inverter specifications before designing battery bank."
          },
          {
            title: "DIY Installation Without Experience",
            description: "Attempting wiring without sufficient knowledge.",
            consequence: "Dangerous errors that can cause injuries or equipment damage.",
            solution: "Always use a qualified technician."
          }
        ]
      },

      keyTakeaways: {
        title: "Key Takeaways",
        points: [
          "Series increases voltage, Parallel increases capacity",
          "Choice depends on inverter requirements and your capacity needs",
          "Always use perfectly matched batteries",
          "Don't attempt wiring yourself - use a qualified technician",
          "Protection (fuses, breakers) is essential, not optional"
        ]
      },

      relatedLinks: {
        title: "Related Topics",
        pillar: "Lithium vs Lead-Acid: Complete Comparison",
        lifespan: "How Long Do Lithium Batteries Last?",
        batteries: "Browse Batteries",
        services: "Installation & Maintenance Services"
      },

      faqs: [
        {
          q: "Can I mix old and new batteries?",
          a: "Not recommended at all. The old battery will drag down the new one and reduce overall system performance. Use batteries of the same age and condition."
        },
        {
          q: "Can I mix lithium with lead-acid?",
          a: "No, absolutely not. Different batteries have completely different charging and discharging characteristics. Mixing them is dangerous and damages batteries."
        },
        {
          q: "How many batteries can be connected in parallel?",
          a: "Depends on battery type and manufacturer specifications. Some lithium batteries (like Pylontech) are designed for parallel connection up to a certain number. Check the product manual."
        },
        {
          q: "Why must cables be the same length?",
          a: "To ensure even current distribution. Longer cable = higher resistance = less current, creating imbalance that damages batteries."
        },
        {
          q: "Does wrong wiring damage batteries immediately?",
          a: "It may damage them immediately (short circuit) or cause gradual deterioration. Either way, the damage is significant and costly."
        }
      ],

      cta: {
        title: "Need Help Designing Your Battery Bank?",
        subtitle: "Our specialized team designs and installs the right battery system for your needs",
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
      "@id": "https://alqatta.com/knowledge/series-vs-parallel-batteries"
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
        "item": "https://alqatta.com/knowledge/series-vs-parallel-batteries"
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title={t.title}
        description={t.metaDescription}
        canonical="/knowledge/series-vs-parallel-batteries"
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
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-500/5 to-background">
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
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Battery className="h-8 w-8 text-blue-600" />
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

              {/* Safety Warning */}
              <section className="mb-10">
                <Card className="bg-red-500/10 border-red-500/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <ShieldAlert className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">{t.safetyWarning.title}</h3>
                        <p className="text-red-700 dark:text-red-300">{t.safetyWarning.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Series Section */}
              <section className="mb-10">
                <Card className="overflow-hidden">
                  <div className="bg-orange-500/10 p-4 border-b border-orange-500/20">
                    <div className="flex items-center gap-3">
                      <ArrowUpDown className="h-6 w-6 text-orange-600" />
                      <h2 className="text-2xl font-bold text-foreground">{t.series.title}</h2>
                    </div>
                    <p className="text-muted-foreground mt-2">{t.series.description}</p>
                  </div>
                  <CardContent className="p-5 space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t.series.whatChanges.title}</h3>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {t.series.whatChanges.items.map((item, index) => (
                          <div key={index} className="bg-muted/50 rounded-lg p-3 text-center">
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <p className="font-bold text-orange-600 text-lg">{item.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t.series.whenToUse.title}</h3>
                      <ul className="space-y-1">
                        {t.series.whenToUse.points.map((point, index) => (
                          <li key={index} className="text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Parallel Section */}
              <section className="mb-10">
                <Card className="overflow-hidden">
                  <div className="bg-blue-500/10 p-4 border-b border-blue-500/20">
                    <div className="flex items-center gap-3">
                      <ArrowLeftRight className="h-6 w-6 text-blue-600" />
                      <h2 className="text-2xl font-bold text-foreground">{t.parallel.title}</h2>
                    </div>
                    <p className="text-muted-foreground mt-2">{t.parallel.description}</p>
                  </div>
                  <CardContent className="p-5 space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t.parallel.whatChanges.title}</h3>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {t.parallel.whatChanges.items.map((item, index) => (
                          <div key={index} className="bg-muted/50 rounded-lg p-3 text-center">
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <p className="font-bold text-blue-600 text-lg">{item.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t.parallel.whenToUse.title}</h3>
                      <ul className="space-y-1">
                        {t.parallel.whenToUse.points.map((point, index) => (
                          <li key={index} className="text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Combination Section */}
              <section className="mb-10">
                <Card className="bg-purple-500/5 border-purple-500/30">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <HelpCircle className="h-6 w-6 text-purple-600" />
                      <h2 className="text-xl font-bold text-foreground">{t.combination.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-3">{t.combination.description}</p>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mb-3">
                      <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">{t.combination.warning}</p>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{t.combination.example}</p>
                  </CardContent>
                </Card>
              </section>

              {/* Comparison Table */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t.comparisonTable.title}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        {t.comparisonTable.headers.map((header, index) => (
                          <th key={index} className="border border-border p-3 text-start font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {t.comparisonTable.rows.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="border border-border p-3 font-medium">{row.factor}</td>
                          <td className="border border-border p-3 text-orange-600 dark:text-orange-400">{row.series}</td>
                          <td className="border border-border p-3 text-blue-600 dark:text-blue-400">{row.parallel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Yemen Mistakes */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-bold text-foreground">{t.yemenMistakes.title}</h2>
                </div>
                <div className="space-y-4">
                  {t.yemenMistakes.mistakes.map((mistake, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-red-500/5 p-4 border-b border-red-500/10">
                          <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            {mistake.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{mistake.description}</p>
                        </div>
                        <div className="p-4 grid sm:grid-cols-2 gap-3">
                          <div className="bg-red-500/5 rounded-lg p-3">
                            <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">
                              {language === 'ar' ? 'النتيجة:' : 'Consequence:'}
                            </p>
                            <p className="text-sm text-muted-foreground">{mistake.consequence}</p>
                          </div>
                          <div className="bg-green-500/5 rounded-lg p-3">
                            <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">
                              {language === 'ar' ? 'الحل:' : 'Solution:'}
                            </p>
                            <p className="text-sm text-muted-foreground">{mistake.solution}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                  <Link to="/knowledge/lithium-battery-lifespan">
                    <Card className="h-full hover:border-green-500 transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Battery className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.lifespan}</p>
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
              </section>

              {/* CTA */}
              <section className="text-center">
                <Card className="bg-gradient-to-r from-blue-600 to-blue-500">
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

export default SeriesVsParallelBatteries;
