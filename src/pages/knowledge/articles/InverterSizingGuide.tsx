import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Lightbulb, 
  Zap, 
  CheckCircle2, 
  ArrowLeft,
  ChevronRight,
  AlertTriangle,
  Home,
  Building2
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InverterSizingGuide = () => {
  const { lang, isRTL } = useLanguage();
  const language = lang;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ar: {
      title: "كيف تحسب حجم الانفرتر المناسب لمنزلك | دليل عملي",
      metaDescription: "تعلم كيف تحسب حجم الانفرتر المناسب لمنزلك خطوة بخطوة. دليل عملي مبسط لحساب الأحمال الكهربائية واختيار الانفرتر الأمثل للطاقة الشمسية في اليمن.",
      breadcrumb: "حساب حجم الانفرتر",
      backToHub: "مركز المعرفة",
      heroTitle: "كيف تحسب حجم الانفرتر المناسب لمنزلك؟",
      heroSubtitle: "دليل عملي خطوة بخطوة لاختيار الحجم الصحيح",
      
      intro: {
        title: "لماذا حجم الانفرتر مهم؟",
        content: "اختيار حجم الانفرتر الخاطئ هو أحد أكثر الأخطاء شيوعًا عند تركيب أنظمة الطاقة الشمسية. انفرتر صغير جدًا لن يشغّل أجهزتك، وانفرتر كبير جدًا يعني تكلفة زائدة بلا فائدة. في هذا الدليل، ستتعلم كيف تحسب الحجم المناسب بطريقة بسيطة وعملية."
      },

      step1: {
        title: "الخطوة 1: حصر الأجهزة الكهربائية",
        content: "ابدأ بتسجيل كل الأجهزة التي تريد تشغيلها على الانفرتر. لا تنسَ الأجهزة التي قد تعمل في نفس الوقت.",
        tip: "نصيحة: ركّز على الأجهزة الأساسية أولاً (إضاءة، مراوح، ثلاجة، تلفزيون) ثم أضف الأجهزة الاختيارية."
      },

      step2: {
        title: "الخطوة 2: معرفة استهلاك كل جهاز",
        content: "ابحث عن قدرة كل جهاز بالواط (W). تجدها عادةً على ملصق الجهاز أو في دليل المستخدم.",
        tableWarning: "⚠️ تنبيه: الأرقام أدناه تقديرية وتختلف حسب الماركة، كفاءة الجهاز، وظروف التشغيل. راجع دائمًا ملصق جهازك الفعلي.",
        table: {
          device: "الجهاز",
          typicalWattage: "نطاق الاستهلاك التقريبي",
          items: [
            { device: "لمبة LED", wattage: "5-15 واط" },
            { device: "مروحة سقف", wattage: "50-75 واط" },
            { device: "تلفزيون LED", wattage: "50-150 واط" },
            { device: "ثلاجة متوسطة", wattage: "100-200 واط" },
            { device: "غسالة", wattage: "300-500 واط" },
            { device: "مكيف سبليت", wattage: "1000-2000 واط" }
          ]
        },
        note: "ملاحظة: هذه نطاقات تقريبية للاسترشاد فقط. الاستهلاك الفعلي يعتمد على موديل الجهاز وحالته."
      },

      step3: {
        title: "الخطوة 3: حساب الحمل الإجمالي",
        content: "اجمع استهلاك جميع الأجهزة التي قد تعمل في نفس الوقت. هذا هو \"الحمل المتزامن\" الذي يجب أن يتحمله الانفرتر.",
        example: {
          title: "مثال عملي:",
          assumptions: "افتراضات المثال: منزل صغير، أحمال مقاومة فقط (بدون مكيف أو مضخة)، جهد النظام 220V، بدون احتساب تيار الإقلاع للأحمال الحثّية.",
          items: [
            "10 لمبات LED × 10 واط = 100 واط",
            "3 مراوح × 60 واط = 180 واط",
            "ثلاجة = 150 واط (استهلاك التشغيل العادي)",
            "تلفزيون = 100 واط"
          ],
          total: "المجموع = 530 واط (استهلاك تشغيلي فقط)"
        }
      },

      step4: {
        title: "الخطوة 4: إضافة هامش الأمان",
        content: "أضف هامش أمان للانفرتر لعدة أسباب:",
        reasons: [
          "بعض الأجهزة تحتاج طاقة أعلى عند التشغيل (مثل الثلاجة والمكيف)",
          "قد تضيف أجهزة جديدة مستقبلاً",
          "الانفرتر يعمل بكفاءة أفضل عند عدم تحميله بالكامل"
        ],
        rule: "القاعدة العملية: اختر انفرتر بقدرة أعلى بنسبة 20-30% من حملك المحسوب."
      },

      step5: {
        title: "الخطوة 5: اختيار الحجم النهائي",
        content: "بناءً على المثال السابق:",
        calculation: [
          "الحمل المحسوب: 530 واط",
          "مع هامش 25%: 530 × 1.25 = 662 واط",
          "الاختيار المناسب: انفرتر 1000 واط (1 كيلو)"
        ],
        note: "اختر دائمًا الحجم القياسي الأعلى المتاح (1000، 1500، 2000، 3000 واط...)"
      },

      specialCases: {
        title: "حالات خاصة تتطلب انتباهًا",
        cases: [
          {
            icon: "ac",
            title: "المكيفات",
            content: "المكيفات تحتاج طاقة عالية جدًا عند التشغيل (تصل لضعف أو ثلاثة أضعاف الاستهلاك العادي). تأكد أن الانفرتر يتحمل هذه الطاقة اللحظية."
          },
          {
            icon: "pump",
            title: "المضخات والمحركات",
            content: "أي جهاز يحتوي محرك (مضخة ماء، غسالة) يحتاج طاقة أعلى عند البدء. احسب الطاقة القصوى وليس العادية."
          },
          {
            icon: "business",
            title: "الاستخدام التجاري",
            content: "للمحلات والمكاتب، قد تحتاج انفرتر ثلاثي الأطوار (3 Phase) للأحمال الكبيرة."
          }
        ]
      },

      yemenContext: {
        title: "اعتبارات خاصة لليمن",
        points: [
          "انقطاعات الكهرباء المتكررة تعني اعتمادًا أكبر على الانفرتر",
          "الحرارة العالية قد تقلل كفاءة الانفرتر - اختر حجمًا أكبر قليلاً",
          "جودة الانفرتر مهمة جدًا في ظروف الشبكة غير المستقرة"
        ]
      },

      keyTakeaways: {
        title: "الخلاصة",
        points: [
          "احسب الحمل المتزامن (الأجهزة التي تعمل معًا)",
          "أضف هامش أمان 20-30% على الأقل",
          "انتبه للأجهزة ذات تيار البدء العالي (مكيفات، مضخات)",
          "اختر انفرتر بجودة عالية خاصة في اليمن",
          "استشر متخصصًا عند الشك"
        ]
      },

      relatedLinks: {
        title: "مواضيع ذات صلة",
        pillar: "دليل اختيار الانفرتر الشامل",
        products: "تصفح الانفرترات",
        services: "خدمات التصميم والتركيب"
      },

      faqs: [
        {
          q: "هل يمكنني تشغيل مكيف على انفرتر صغير؟",
          a: "يعتمد على حجم المكيف وحجم الانفرتر. المكيفات تحتاج طاقة عالية خاصة عند التشغيل. استشر متخصصًا لتحديد الحجم المناسب لمكيفك."
        },
        {
          q: "ماذا يحدث إذا زاد الحمل عن قدرة الانفرتر؟",
          a: "الانفرترات الجيدة تحتوي حماية تلقائية وستغلق لحماية نفسها. لكن التحميل الزائد المتكرر قد يقصر عمر الانفرتر."
        },
        {
          q: "هل الانفرتر الأكبر أفضل دائمًا؟",
          a: "ليس بالضرورة. الانفرتر الأكبر بكثير من حاجتك يعني تكلفة أعلى واستهلاك ذاتي أكبر. الأفضل اختيار الحجم المناسب مع هامش معقول."
        },
        {
          q: "كيف أعرف استهلاك جهاز غير مكتوب عليه؟",
          a: "يمكنك استخدام جهاز قياس الاستهلاك (Power Meter) أو البحث عن موديل جهازك على الإنترنت."
        },
        {
          q: "هل أحتاج انفرتر مختلف للطاقة الشمسية؟",
          a: "نعم، أنظمة الطاقة الشمسية تحتاج انفرتر شمسي (Solar Inverter) أو انفرتر هجين يمكنه التعامل مع الألواح والبطاريات."
        }
      ],

      cta: {
        title: "هل تحتاج مساعدة في اختيار الانفرتر المناسب؟",
        subtitle: "فريقنا جاهز لمساعدتك في حساب احتياجاتك واختيار الحل الأمثل",
        button: "تواصل معنا"
      }
    },
    en: {
      title: "How to Calculate the Right Inverter Size for Your Home | Practical Guide",
      metaDescription: "Learn how to calculate the right inverter size for your home step by step. A simplified practical guide for calculating electrical loads and choosing the optimal inverter for solar energy in Yemen.",
      breadcrumb: "Inverter Sizing",
      backToHub: "Knowledge Hub",
      heroTitle: "How to Calculate the Right Inverter Size for Your Home?",
      heroSubtitle: "A practical step-by-step guide to choosing the right size",
      
      intro: {
        title: "Why Inverter Size Matters?",
        content: "Choosing the wrong inverter size is one of the most common mistakes when installing solar systems. An inverter that's too small won't run your appliances, and one that's too big means unnecessary extra cost. In this guide, you'll learn how to calculate the right size in a simple, practical way."
      },

      step1: {
        title: "Step 1: List Your Electrical Appliances",
        content: "Start by recording all the devices you want to run on the inverter. Don't forget appliances that might run simultaneously.",
        tip: "Tip: Focus on essential devices first (lighting, fans, refrigerator, TV) then add optional ones."
      },

      step2: {
        title: "Step 2: Know Each Device's Consumption",
        content: "Find each device's power rating in Watts (W). You'll usually find it on the device label or user manual.",
        tableWarning: "⚠️ Note: The figures below are estimates and vary by brand, device efficiency, and operating conditions. Always check your actual device label.",
        table: {
          device: "Device",
          typicalWattage: "Approximate Consumption Range",
          items: [
            { device: "LED Bulb", wattage: "5-15 W" },
            { device: "Ceiling Fan", wattage: "50-75 W" },
            { device: "LED TV", wattage: "50-150 W" },
            { device: "Medium Refrigerator", wattage: "100-200 W" },
            { device: "Washing Machine", wattage: "300-500 W" },
            { device: "Split AC", wattage: "1000-2000 W" }
          ]
        },
        note: "Note: These are approximate ranges for reference only. Actual consumption depends on device model and condition."
      },

      step3: {
        title: "Step 3: Calculate Total Load",
        content: "Add up the consumption of all devices that might run simultaneously. This is the \"concurrent load\" the inverter must handle.",
        example: {
          title: "Practical Example:",
          assumptions: "Example assumptions: Small home, resistive loads only (no AC or pump), 220V system voltage, startup surge for inductive loads not included.",
          items: [
            "10 LED bulbs × 10W = 100W",
            "3 fans × 60W = 180W",
            "Refrigerator = 150W (normal running consumption)",
            "TV = 100W"
          ],
          total: "Total = 530W (running consumption only)"
        }
      },

      step4: {
        title: "Step 4: Add Safety Margin",
        content: "Add a safety margin to the inverter for several reasons:",
        reasons: [
          "Some devices need higher power at startup (like refrigerators and ACs)",
          "You might add new devices in the future",
          "Inverters work more efficiently when not fully loaded"
        ],
        rule: "Practical Rule: Choose an inverter 20-30% larger than your calculated load."
      },

      step5: {
        title: "Step 5: Choose Final Size",
        content: "Based on the previous example:",
        calculation: [
          "Calculated load: 530W",
          "With 25% margin: 530 × 1.25 = 662W",
          "Suitable choice: 1000W (1 kW) inverter"
        ],
        note: "Always choose the next available standard size (1000, 1500, 2000, 3000W...)"
      },

      specialCases: {
        title: "Special Cases Requiring Attention",
        cases: [
          {
            icon: "ac",
            title: "Air Conditioners",
            content: "ACs need very high power at startup (up to 2-3 times normal consumption). Make sure the inverter can handle this momentary surge."
          },
          {
            icon: "pump",
            title: "Pumps and Motors",
            content: "Any device with a motor (water pump, washing machine) needs higher power at startup. Calculate peak power, not normal."
          },
          {
            icon: "business",
            title: "Commercial Use",
            content: "For shops and offices, you may need a three-phase inverter for large loads."
          }
        ]
      },

      yemenContext: {
        title: "Special Considerations for Yemen",
        points: [
          "Frequent power outages mean greater reliance on the inverter",
          "High temperatures may reduce inverter efficiency - choose slightly larger size",
          "Inverter quality is very important in unstable grid conditions"
        ]
      },

      keyTakeaways: {
        title: "Key Takeaways",
        points: [
          "Calculate concurrent load (devices running together)",
          "Add at least 20-30% safety margin",
          "Watch for high-startup devices (ACs, pumps)",
          "Choose high-quality inverter especially in Yemen",
          "Consult a specialist when in doubt"
        ]
      },

      relatedLinks: {
        title: "Related Topics",
        pillar: "Complete Inverter Selection Guide",
        products: "Browse Inverters",
        services: "Design & Installation Services"
      },

      faqs: [
        {
          q: "Can I run an AC on a small inverter?",
          a: "It depends on the AC size and inverter size. ACs need high power especially at startup. Consult a specialist to determine the right size for your AC."
        },
        {
          q: "What happens if load exceeds inverter capacity?",
          a: "Good inverters have automatic protection and will shut down to protect themselves. But frequent overloading may shorten the inverter's lifespan."
        },
        {
          q: "Is a bigger inverter always better?",
          a: "Not necessarily. An inverter much larger than your needs means higher cost and greater self-consumption. It's better to choose the right size with a reasonable margin."
        },
        {
          q: "How do I know consumption of an unlabeled device?",
          a: "You can use a Power Meter device or search for your device model online."
        },
        {
          q: "Do I need a different inverter for solar?",
          a: "Yes, solar systems need a Solar Inverter or Hybrid inverter that can handle panels and batteries."
        }
      ],

      cta: {
        title: "Need Help Choosing the Right Inverter?",
        subtitle: "Our team is ready to help you calculate your needs and choose the optimal solution",
        button: "Contact Us"
      }
    }
  };

  const t = content[language];

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Yemen Solar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yemen Solar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yemensolar.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://yemensolar.com/knowledge/inverter-sizing"
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
        "item": "https://yemensolar.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'ar' ? "مركز المعرفة" : "Knowledge Hub",
        "item": "https://yemensolar.com/knowledge"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.breadcrumb,
        "item": "https://yemensolar.com/knowledge/inverter-sizing"
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yemensolar.com/knowledge/inverter-sizing" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

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
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
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
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calculator className="h-8 w-8 text-primary" />
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
            <div className="max-w-3xl mx-auto">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t.intro.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.intro.content}
                </p>
              </section>

              {/* Step 1 */}
              <section className="mb-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t.step1.title}</h2>
                </div>
                <div className={`${isRTL ? 'pr-14' : 'pl-14'}`}>
                  <p className="text-muted-foreground mb-4">{t.step1.content}</p>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground">{t.step1.tip}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Step 2 */}
              <section className="mb-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t.step2.title}</h2>
                </div>
                <div className={`${isRTL ? 'pr-14' : 'pl-14'}`}>
                  <p className="text-muted-foreground mb-4">{t.step2.content}</p>
                  
                  {/* Table Warning */}
                  <Card className="bg-amber-500/10 border-amber-500/30 mb-4">
                    <CardContent className="p-3">
                      <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">{t.step2.tableWarning}</p>
                    </CardContent>
                  </Card>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-start font-semibold">{t.step2.table.device}</th>
                          <th className="border border-border p-3 text-start font-semibold">{t.step2.table.typicalWattage}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {t.step2.table.items.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                            <td className="border border-border p-3">{item.device}</td>
                            <td className="border border-border p-3">{item.wattage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <Card className="bg-amber-500/10 border-amber-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground">{t.step2.note}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Step 3 */}
              <section className="mb-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t.step3.title}</h2>
                </div>
                <div className={`${isRTL ? 'pr-14' : 'pl-14'}`}>
                  <p className="text-muted-foreground mb-4">{t.step3.content}</p>
                  
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{t.step3.example.title}</h4>
                      {/* Example Assumptions */}
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-md p-3 mb-4">
                        <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">{t.step3.example.assumptions}</p>
                      </div>
                      <ul className="space-y-2 mb-3">
                        {t.step3.example.items.map((item, index) => (
                          <li key={index} className="text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-border">
                        <p className="font-bold text-primary text-lg">{t.step3.example.total}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Step 4 */}
              <section className="mb-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t.step4.title}</h2>
                </div>
                <div className={`${isRTL ? 'pr-14' : 'pl-14'}`}>
                  <p className="text-muted-foreground mb-4">{t.step4.content}</p>
                  <ul className="space-y-2 mb-4">
                    {t.step4.reasons.map((reason, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                  <Card className="bg-primary/10 border-primary/30">
                    <CardContent className="p-4">
                      <p className="font-semibold text-foreground">{t.step4.rule}</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Step 5 */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t.step5.title}</h2>
                </div>
                <div className={`${isRTL ? 'pr-14' : 'pl-14'}`}>
                  <p className="text-muted-foreground mb-4">{t.step5.content}</p>
                  
                  <Card className="bg-green-500/10 border-green-500/30 mb-4">
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {t.step5.calculation.map((calc, index) => (
                          <li key={index} className={`text-foreground ${index === t.step5.calculation.length - 1 ? 'font-bold text-green-600 dark:text-green-400' : ''}`}>
                            {calc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <p className="text-sm text-muted-foreground italic">{t.step5.note}</p>
                </div>
              </section>

              {/* Special Cases */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.specialCases.title}</h2>
                <div className="grid gap-4">
                  {t.specialCases.cases.map((caseItem, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {caseItem.icon === 'ac' && <Zap className="h-5 w-5 text-primary" />}
                            {caseItem.icon === 'pump' && <Home className="h-5 w-5 text-primary" />}
                            {caseItem.icon === 'business' && <Building2 className="h-5 w-5 text-primary" />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{caseItem.title}</h3>
                            <p className="text-muted-foreground text-sm">{caseItem.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Yemen Context */}
              <section className="mb-12">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{t.yemenContext.title}</h2>
                    <ul className="space-y-3">
                      {t.yemenContext.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
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
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/knowledge/inverter-guide">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.pillar}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/products/inverters">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.products}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/services">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
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
                <Card className="bg-gradient-to-r from-primary to-primary/80">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary-foreground mb-2">{t.cta.title}</h2>
                    <p className="text-primary-foreground/80 mb-6">{t.cta.subtitle}</p>
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

export default InverterSizingGuide;
