import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Zap, 
  CheckCircle2, 
  ArrowLeft,
  ChevronRight,
  Thermometer,
  PlugZap,
  Gauge,
  Wind,
  Phone,
  Wrench,
  ShieldAlert
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from '@/components/SEO';

const InverterCommonFaults = () => {
  const { lang, isRTL } = useLanguage();
  const language = lang;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ar: {
      title: "أعطال الانفرتر الشائعة وحلولها | دليل التشخيص والصيانة",
      metaDescription: "تعرف على أعطال الانفرتر الشائعة وكيفية تشخيصها بأمان. دليل عملي لحل مشاكل الانفرتر في اليمن مع نصائح الصيانة الوقائية.",
      breadcrumb: "أعطال الانفرتر",
      backToHub: "مركز المعرفة",
      heroTitle: "أعطال الانفرتر الشائعة وحلولها",
      heroSubtitle: "دليل التشخيص الآمن والصيانة الوقائية",
      
      intro: {
        title: "لماذا يتعطل الانفرتر؟",
        content: "الانفرتر جهاز إلكتروني حساس يعمل في ظروف صعبة، خاصة في اليمن حيث تقلبات الشبكة والحرارة العالية. معرفة الأعطال الشائعة وأسبابها يساعدك على التشخيص السريع وتجنب تفاقم المشكلة."
      },

      safetyWarning: {
        title: "⚠️ تحذير أمان مهم",
        content: "الانفرتر يتعامل مع جهد كهربائي عالٍ. لا تفتح الانفرتر أو تلمس الأجزاء الداخلية. التشخيص المذكور هنا للملاحظات الخارجية فقط. في حالة الشك، تواصل مع فني متخصص."
      },

      categories: {
        title: "تصنيف الأعطال الشائعة",
        items: [
          {
            icon: "code",
            title: "أخطاء وأكواد التنبيه",
            description: "رسائل خطأ تظهر على شاشة الانفرتر"
          },
          {
            icon: "electrical",
            title: "أعطال كهربائية وتوصيلات",
            description: "مشاكل الأسلاك والتوصيلات"
          },
          {
            icon: "overload",
            title: "أحمال زائدة ومشاكل التشغيل",
            description: "الانفرتر يفصل أو لا يشغّل الأجهزة"
          },
          {
            icon: "environment",
            title: "حرارة وغبار ورطوبة",
            description: "مشاكل بيئية شائعة في اليمن"
          }
        ]
      },

      faults: [
        {
          category: "أخطاء وأكواد التنبيه",
          categoryIcon: "code",
          items: [
            {
              title: "الشاشة تعرض رسالة خطأ أو كود",
              symptoms: [
                "ظهور حروف أو أرقام غير مفهومة على الشاشة",
                "إضاءة مصباح الخطأ (أحمر عادةً)",
                "صوت تنبيه متكرر"
              ],
              causes: [
                "حمل زائد مؤقت",
                "ارتفاع أو انخفاض الجهد",
                "ارتفاع درجة الحرارة الداخلية",
                "مشكلة في البطارية"
              ],
              diagnosis: [
                "سجّل كود الخطأ الظاهر بالضبط",
                "راجع دليل المستخدم لمعرفة معنى الكود",
                "أعد تشغيل الانفرتر بعد دقيقة",
                "إذا تكرر الخطأ، تواصل مع الدعم الفني"
              ]
            },
            {
              title: "الانفرتر لا يعمل نهائياً (شاشة مطفأة)",
              symptoms: [
                "لا توجد إضاءة على الشاشة",
                "لا يستجيب لزر التشغيل",
                "صمت تام"
              ],
              causes: [
                "انقطاع التيار من المصدر (شبكة/بطارية)",
                "فيوز داخلي محترق",
                "عطل في لوحة التحكم"
              ],
              diagnosis: [
                "تأكد من وصول الكهرباء للانفرتر",
                "افحص توصيلات البطارية",
                "تحقق من القواطع الكهربائية",
                "إذا لم يعمل، يحتاج فحص فني"
              ]
            }
          ]
        },
        {
          category: "أعطال كهربائية وتوصيلات",
          categoryIcon: "electrical",
          items: [
            {
              title: "صوت طنين أو أزيز غير طبيعي",
              symptoms: [
                "صوت طنين مستمر من الانفرتر",
                "صوت أزيز عند تشغيل أجهزة معينة",
                "اهتزاز ملحوظ في الجهاز"
              ],
              causes: [
                "حمل غير متوازن",
                "مروحة التبريد متعبة أو متسخة",
                "توصيلات مفكوكة داخلياً",
                "تداخل من أجهزة قريبة"
              ],
              diagnosis: [
                "حدد مصدر الصوت (مروحة أم دائرة)",
                "تأكد من ربط جميع التوصيلات الخارجية",
                "نظّف فتحات التهوية",
                "إذا استمر، يحتاج فحص داخلي"
              ]
            },
            {
              title: "التوصيلات ساخنة أو متغيرة اللون",
              symptoms: [
                "حرارة عالية في أطراف الأسلاك",
                "تغير لون الأسلاك أو الأطراف",
                "رائحة احتراق خفيفة"
              ],
              causes: [
                "توصيل مفكوك أو ضعيف",
                "سلك بمقطع أصغر من المطلوب",
                "حمل أعلى من تصنيف التوصيلة"
              ],
              diagnosis: [
                "أوقف الانفرتر فوراً",
                "افحص جميع التوصيلات الخارجية",
                "استبدل أي سلك تالف",
                "تأكد من استخدام مقطع سلك مناسب"
              ]
            }
          ]
        },
        {
          category: "أحمال زائدة ومشاكل التشغيل",
          categoryIcon: "overload",
          items: [
            {
              title: "الانفرتر يفصل عند تشغيل جهاز معين",
              symptoms: [
                "الانفرتر يغلق فور تشغيل المكيف/المضخة/الغسالة",
                "يعمل بشكل طبيعي بدون هذا الجهاز",
                "رسالة \"Overload\" أو ما يشابهها"
              ],
              causes: [
                "تيار بدء الجهاز أعلى من قدرة الانفرتر",
                "الجهاز يحتاج طاقة أكبر مما هو مكتوب عليه",
                "انفرتر بحجم غير مناسب"
              ],
              diagnosis: [
                "تأكد من استهلاك الجهاز الفعلي",
                "جرّب تشغيل الجهاز وحده",
                "قد تحتاج انفرتر أكبر للأحمال الحثية",
                "استشر متخصصاً لتحديد الحجم المناسب"
              ]
            },
            {
              title: "الانفرتر يفصل بشكل متكرر بدون سبب واضح",
              symptoms: [
                "فصل عشوائي خلال اليوم",
                "لا يوجد حمل زائد واضح",
                "يعود للعمل بعد إعادة التشغيل"
              ],
              causes: [
                "تقلبات في جهد الشبكة",
                "ارتفاع حرارة داخلي",
                "بطارية ضعيفة أو تالفة",
                "مشكلة في حساسات الحماية"
              ],
              diagnosis: [
                "راقب توقيت الفصل (هل مرتبط بالحرارة؟)",
                "افحص حالة البطاريات",
                "تأكد من جودة التهوية",
                "قد يحتاج فحص فني للحساسات"
              ]
            }
          ]
        },
        {
          category: "حرارة وغبار ورطوبة",
          categoryIcon: "environment",
          items: [
            {
              title: "ارتفاع حرارة الانفرتر بشكل غير طبيعي",
              symptoms: [
                "الجسم الخارجي ساخن جداً للمس",
                "مروحة التبريد تعمل باستمرار",
                "رسالة \"Over Temperature\" أو مشابه"
              ],
              causes: [
                "تركيب في مكان سيء التهوية",
                "تراكم الغبار على فتحات التهوية",
                "حمل عالٍ لفترات طويلة",
                "درجة حرارة الغرفة مرتفعة جداً"
              ],
              diagnosis: [
                "تأكد من وجود مسافة كافية حول الانفرتر",
                "نظّف فتحات التهوية بالهواء المضغوط",
                "قلل الحمل مؤقتاً",
                "فكّر في نقله لمكان أفضل تهوية"
              ]
            },
            {
              title: "تأثير الغبار والرطوبة (شائع في اليمن)",
              symptoms: [
                "أعطال متكررة في موسم الغبار",
                "مشاكل بعد الأمطار أو الرطوبة العالية",
                "تآكل أو صدأ على الأطراف"
              ],
              causes: [
                "تراكم الغبار داخل الانفرتر",
                "تكثف الرطوبة على الدوائر",
                "بيئة تركيب غير مناسبة"
              ],
              diagnosis: [
                "تركيب الانفرتر في مكان محمي",
                "استخدام غطاء واقي إن أمكن",
                "صيانة دورية كل 6 أشهر",
                "في المناطق الساحلية: اهتمام خاص بالرطوبة"
              ]
            }
          ]
        }
      ],

      keyTakeaways: {
        title: "الخلاصة",
        points: [
          "لا تفتح الانفرتر أو تلمس أجزاءه الداخلية - السلامة أولاً",
          "سجّل أكواد الخطأ وراجع دليل المستخدم قبل أي إجراء",
          "معظم الأعطال سببها: حمل زائد، حرارة، أو توصيلات ضعيفة",
          "الصيانة الوقائية (تنظيف، فحص توصيلات) تمنع معظم المشاكل",
          "في حالة الشك، تواصل مع فني متخصص"
        ]
      },

      preventiveMaintenance: {
        title: "نصائح الصيانة الوقائية",
        tips: [
          "نظّف فتحات التهوية شهرياً",
          "افحص التوصيلات كل 3 أشهر",
          "تأكد من شحن البطاريات بانتظام",
          "ركّب الانفرتر في مكان جيد التهوية",
          "استخدم مثبت جهد إذا كانت الشبكة غير مستقرة"
        ]
      },

      relatedLinks: {
        title: "مواضيع ذات صلة",
        pillar: "دليل اختيار الانفرتر الشامل",
        sizing: "كيف تحسب حجم الانفرتر",
        services: "خدمات الصيانة والتركيب",
        products: "تصفح الانفرترات"
      },

      faqs: [
        {
          q: "كم مرة يجب صيانة الانفرتر؟",
          a: "يُنصح بصيانة وقائية كل 6 أشهر تشمل تنظيف فتحات التهوية وفحص التوصيلات. في البيئات الصعبة (غبار، رطوبة عالية) قد تحتاج صيانة أكثر تكراراً."
        },
        {
          q: "هل يمكنني إصلاح الانفرتر بنفسي؟",
          a: "التشخيص الخارجي والصيانة البسيطة (تنظيف، فحص توصيلات) يمكنك فعلها. لكن أي إصلاح داخلي يجب أن يقوم به فني متخصص لأسباب السلامة والضمان."
        },
        {
          q: "الانفرتر يصدر صوت طنين خفيف، هل هذا طبيعي؟",
          a: "صوت طنين خفيف جداً طبيعي في بعض الانفرترات. لكن إذا كان الصوت عالياً أو متغيراً أو مصحوباً باهتزاز، قد يشير لمشكلة تحتاج فحص."
        },
        {
          q: "لماذا الانفرتر لا يشغّل المكيف رغم أن القدرة كافية؟",
          a: "المكيفات والأجهزة ذات المحركات تحتاج تيار بدء عالٍ (قد يصل 3 أضعاف الاستهلاك العادي). تأكد أن الانفرتر يتحمل هذه الطاقة اللحظية."
        },
        {
          q: "هل الحرارة العالية في اليمن تؤثر على الانفرتر؟",
          a: "نعم، الحرارة العالية تقلل كفاءة الانفرتر وقد تسبب فصلاً حرارياً. تأكد من تركيبه في مكان مظلل وجيد التهوية، وتجنب الأحمال العالية في ذروة الحرارة."
        }
      ],

      cta: {
        title: "هل تواجه مشكلة في الانفرتر؟",
        subtitle: "فريقنا الفني جاهز لمساعدتك في التشخيص والصيانة",
        button: "تواصل معنا الآن",
        phone: "أو اتصل مباشرة"
      }
    },
    en: {
      title: "Common Inverter Faults and Solutions | Diagnosis & Maintenance Guide",
      metaDescription: "Learn about common inverter faults and how to diagnose them safely. Practical guide for solving inverter problems in Yemen with preventive maintenance tips.",
      breadcrumb: "Inverter Faults",
      backToHub: "Knowledge Hub",
      heroTitle: "Common Inverter Faults and Solutions",
      heroSubtitle: "Safe Diagnosis and Preventive Maintenance Guide",
      
      intro: {
        title: "Why Do Inverters Fail?",
        content: "An inverter is a sensitive electronic device operating in harsh conditions, especially in Yemen where grid fluctuations and high temperatures are common. Knowing common faults and their causes helps you diagnose quickly and prevent problems from escalating."
      },

      safetyWarning: {
        title: "⚠️ Important Safety Warning",
        content: "Inverters handle high voltage electricity. Do not open the inverter or touch internal parts. The diagnosis mentioned here is for external observations only. When in doubt, contact a qualified technician."
      },

      categories: {
        title: "Common Fault Categories",
        items: [
          {
            icon: "code",
            title: "Error Codes and Alerts",
            description: "Error messages on the inverter display"
          },
          {
            icon: "electrical",
            title: "Electrical and Connection Faults",
            description: "Wiring and connection problems"
          },
          {
            icon: "overload",
            title: "Overload and Startup Issues",
            description: "Inverter trips or won't run devices"
          },
          {
            icon: "environment",
            title: "Heat, Dust, and Humidity",
            description: "Environmental issues common in Yemen"
          }
        ]
      },

      faults: [
        {
          category: "Error Codes and Alerts",
          categoryIcon: "code",
          items: [
            {
              title: "Display shows error message or code",
              symptoms: [
                "Unknown letters or numbers on display",
                "Error light illuminated (usually red)",
                "Repeated alarm sound"
              ],
              causes: [
                "Temporary overload",
                "Voltage too high or too low",
                "Internal temperature rise",
                "Battery issue"
              ],
              diagnosis: [
                "Record the exact error code shown",
                "Check user manual for code meaning",
                "Restart inverter after one minute",
                "If error repeats, contact technical support"
              ]
            },
            {
              title: "Inverter won't turn on at all (display off)",
              symptoms: [
                "No lights on the display",
                "Doesn't respond to power button",
                "Complete silence"
              ],
              causes: [
                "No power from source (grid/battery)",
                "Internal fuse blown",
                "Control board fault"
              ],
              diagnosis: [
                "Verify power is reaching the inverter",
                "Check battery connections",
                "Verify circuit breakers",
                "If still not working, needs technical inspection"
              ]
            }
          ]
        },
        {
          category: "Electrical and Connection Faults",
          categoryIcon: "electrical",
          items: [
            {
              title: "Abnormal buzzing or humming sound",
              symptoms: [
                "Constant humming from inverter",
                "Buzzing when running certain devices",
                "Noticeable vibration in the unit"
              ],
              causes: [
                "Unbalanced load",
                "Cooling fan worn or dirty",
                "Loose internal connections",
                "Interference from nearby devices"
              ],
              diagnosis: [
                "Identify sound source (fan or circuit)",
                "Ensure all external connections are tight",
                "Clean ventilation openings",
                "If persists, needs internal inspection"
              ]
            },
            {
              title: "Connections are hot or discolored",
              symptoms: [
                "High heat at wire terminals",
                "Wire or terminal discoloration",
                "Slight burning smell"
              ],
              causes: [
                "Loose or weak connection",
                "Wire gauge too small",
                "Load exceeds connection rating"
              ],
              diagnosis: [
                "Stop the inverter immediately",
                "Inspect all external connections",
                "Replace any damaged wires",
                "Ensure proper wire gauge is used"
              ]
            }
          ]
        },
        {
          category: "Overload and Startup Issues",
          categoryIcon: "overload",
          items: [
            {
              title: "Inverter trips when running specific device",
              symptoms: [
                "Inverter shuts off when AC/pump/washer starts",
                "Works normally without that device",
                "\"Overload\" message or similar"
              ],
              causes: [
                "Device startup current exceeds inverter capacity",
                "Device needs more power than labeled",
                "Inverter undersized for the load"
              ],
              diagnosis: [
                "Verify actual device consumption",
                "Try running the device alone",
                "May need larger inverter for inductive loads",
                "Consult specialist to determine proper size"
              ]
            },
            {
              title: "Inverter trips repeatedly without clear cause",
              symptoms: [
                "Random shutdowns during the day",
                "No obvious overload",
                "Works again after restart"
              ],
              causes: [
                "Grid voltage fluctuations",
                "Internal temperature rise",
                "Weak or damaged battery",
                "Protection sensor issue"
              ],
              diagnosis: [
                "Monitor timing of trips (heat related?)",
                "Check battery condition",
                "Ensure good ventilation",
                "May need technical sensor inspection"
              ]
            }
          ]
        },
        {
          category: "Heat, Dust, and Humidity",
          categoryIcon: "environment",
          items: [
            {
              title: "Inverter overheating abnormally",
              symptoms: [
                "Outer body too hot to touch",
                "Cooling fan running constantly",
                "\"Over Temperature\" message or similar"
              ],
              causes: [
                "Installed in poorly ventilated area",
                "Dust buildup on vents",
                "High load for extended periods",
                "Room temperature too high"
              ],
              diagnosis: [
                "Ensure adequate clearance around inverter",
                "Clean vents with compressed air",
                "Reduce load temporarily",
                "Consider relocating to better ventilated area"
              ]
            },
            {
              title: "Dust and humidity effects (common in Yemen)",
              symptoms: [
                "Repeated faults during dust season",
                "Problems after rain or high humidity",
                "Corrosion or rust on terminals"
              ],
              causes: [
                "Dust accumulation inside inverter",
                "Moisture condensation on circuits",
                "Unsuitable installation environment"
              ],
              diagnosis: [
                "Install inverter in protected location",
                "Use protective cover if possible",
                "Regular maintenance every 6 months",
                "Coastal areas: extra attention to humidity"
              ]
            }
          ]
        }
      ],

      keyTakeaways: {
        title: "Key Takeaways",
        points: [
          "Don't open the inverter or touch internal parts - safety first",
          "Record error codes and check user manual before any action",
          "Most faults are caused by: overload, heat, or weak connections",
          "Preventive maintenance (cleaning, checking connections) prevents most problems",
          "When in doubt, contact a qualified technician"
        ]
      },

      preventiveMaintenance: {
        title: "Preventive Maintenance Tips",
        tips: [
          "Clean ventilation openings monthly",
          "Inspect connections every 3 months",
          "Ensure batteries are charged regularly",
          "Install inverter in well-ventilated area",
          "Use voltage stabilizer if grid is unstable"
        ]
      },

      relatedLinks: {
        title: "Related Topics",
        pillar: "Complete Inverter Selection Guide",
        sizing: "How to Calculate Inverter Size",
        services: "Maintenance & Installation Services",
        products: "Browse Inverters"
      },

      faqs: [
        {
          q: "How often should the inverter be serviced?",
          a: "Preventive maintenance is recommended every 6 months including cleaning vents and checking connections. In harsh environments (dust, high humidity) you may need more frequent maintenance."
        },
        {
          q: "Can I repair the inverter myself?",
          a: "External diagnosis and simple maintenance (cleaning, checking connections) you can do yourself. But any internal repair should be done by a qualified technician for safety and warranty reasons."
        },
        {
          q: "The inverter makes a slight humming sound, is this normal?",
          a: "A very slight humming sound is normal in some inverters. But if the sound is loud, variable, or accompanied by vibration, it may indicate a problem that needs inspection."
        },
        {
          q: "Why won't the inverter run my AC even though capacity seems sufficient?",
          a: "ACs and motor-driven devices need high startup current (can reach 3x normal consumption). Make sure the inverter can handle this momentary surge power."
        },
        {
          q: "Does Yemen's high temperature affect the inverter?",
          a: "Yes, high temperature reduces inverter efficiency and may cause thermal shutdown. Ensure installation in a shaded, well-ventilated area, and avoid high loads during peak heat."
        }
      ],

      cta: {
        title: "Having Inverter Problems?",
        subtitle: "Our technical team is ready to help with diagnosis and maintenance",
        button: "Contact Us Now",
        phone: "Or call directly"
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
      "@id": "https://alqatta.com/knowledge/inverter-common-faults"
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
        "item": "https://alqatta.com/knowledge/inverter-common-faults"
      }
    ]
  };

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'code': return <ShieldAlert className="h-6 w-6" />;
      case 'electrical': return <PlugZap className="h-6 w-6" />;
      case 'overload': return <Gauge className="h-6 w-6" />;
      case 'environment': return <Thermometer className="h-6 w-6" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <Layout>
      <SEO
        title={t.title}
        description={t.metaDescription}
        canonical="/knowledge/inverter-common-faults"
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
                  <Wrench className="h-8 w-8 text-primary" />
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
                      <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">{t.safetyWarning.title}</h3>
                        <p className="text-red-700 dark:text-red-300">{t.safetyWarning.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Categories Overview */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.categories.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.categories.items.map((cat, index) => (
                    <Card key={index} className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {getCategoryIcon(cat.icon)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{cat.title}</h3>
                            <p className="text-sm text-muted-foreground">{cat.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Fault Categories Detail */}
              {t.faults.map((category, catIndex) => (
                <section key={catIndex} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {getCategoryIcon(category.categoryIcon)}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                  </div>

                  <div className="space-y-6">
                    {category.items.map((fault, faultIndex) => (
                      <Card key={faultIndex} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="bg-muted/50 p-4 border-b">
                            <h3 className="text-lg font-semibold text-foreground">{fault.title}</h3>
                          </div>
                          <div className="p-4 space-y-4">
                            {/* Symptoms */}
                            <div>
                              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-amber-500" />
                                {language === 'ar' ? 'الأعراض' : 'Symptoms'}
                              </h4>
                              <ul className="space-y-1">
                                {fault.symptoms.map((symptom, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-amber-500 mt-1">•</span>
                                    {symptom}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Causes */}
                            <div>
                              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                <Zap className="h-4 w-4 text-red-500" />
                                {language === 'ar' ? 'الأسباب المحتملة' : 'Possible Causes'}
                              </h4>
                              <ul className="space-y-1">
                                {fault.causes.map((cause, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    {cause}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Diagnosis */}
                            <div>
                              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                {language === 'ar' ? 'خطوات التشخيص الآمن' : 'Safe Diagnosis Steps'}
                              </h4>
                              <ul className="space-y-1">
                                {fault.diagnosis.map((step, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-green-500 font-medium">{i + 1}.</span>
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}

              {/* Preventive Maintenance */}
              <section className="mb-12">
                <Card className="bg-green-500/5 border-green-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Wind className="h-6 w-6 text-green-600" />
                      <h2 className="text-2xl font-bold text-foreground">{t.preventiveMaintenance.title}</h2>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {t.preventiveMaintenance.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          {tip}
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link to="/knowledge/inverter-guide">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.pillar}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/knowledge/inverter-sizing">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <Gauge className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.sizing}</p>
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
                  <Link to="/products/inverters">
                    <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <PlugZap className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{t.relatedLinks.products}</p>
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
                    <Phone className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
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

export default InverterCommonFaults;
