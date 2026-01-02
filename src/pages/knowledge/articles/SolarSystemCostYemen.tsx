import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO, { createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/components/SEO';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Zap, 
  CheckCircle2, 
  ArrowLeft,
  ChevronRight,
  Battery,
  Sun,
  Home,
  Building2,
  TrendingUp,
  Scale,
  HelpCircle,
  FileText
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SolarSystemCostYemen = () => {
  const { lang, isRTL } = useLanguage();
  const language = lang;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    ar: {
      title: "تكلفة نظام طاقة شمسية في اليمن: ما الذي يحدد السعر؟",
      metaDescription: "تعرف على العوامل التي تحدد تكلفة نظام الطاقة الشمسية في اليمن. دليل توعوي لفهم الأسعار واتخاذ قرار مدروس دون مفاجآت.",
      breadcrumb: "تكلفة النظام الشمسي",
      backToHub: "مركز المعرفة",
      heroTitle: "تكلفة نظام الطاقة الشمسية في اليمن",
      heroSubtitle: "ما الذي يحدد السعر؟ وكيف تفهم العرض قبل الموافقة؟",
      
      intro: {
        title: "لماذا تختلف الأسعار كثيرًا؟",
        content: "عندما تسأل \"كم يكلف نظام طاقة شمسية؟\"، الإجابة دائمًا: \"يعتمد\". ليس تهربًا، بل لأن كل منزل ونمط استخدام مختلف. فهم العوامل التي تحدد السعر يساعدك على مقارنة العروض بذكاء، وتجنب دفع أكثر مما تحتاج أو أقل مما يلزم."
      },

      note: {
        title: "ملاحظة مهمة",
        content: "هذا الدليل لا يذكر أسعارًا محددة لأنها تتغير حسب السوق والموردين والوقت. الهدف هو تمكينك من فهم ما الذي تدفع مقابله."
      },

      factors: {
        title: "العوامل الأساسية التي تحدد التكلفة",
        items: [
          {
            icon: "load",
            title: "حجم الأحمال الكهربائية",
            description: "كلما زادت الأجهزة التي تريد تشغيلها، زاد حجم النظام المطلوب.",
            details: [
              "منزل بإضاءة ومراوح فقط ← نظام صغير",
              "منزل بثلاجة وتلفزيون وغسالة ← نظام متوسط",
              "منزل بمكيفات ومضخات ← نظام كبير",
              "كل قفزة في الأحمال تعني قفزة في التكلفة"
            ],
            impact: "تأثير كبير جدًا"
          },
          {
            icon: "system",
            title: "نوع النظام",
            description: "هل تريد استقلالًا تامًا أم دعمًا للشبكة؟",
            details: [
              "Off-Grid (مستقل): يحتاج بطاريات أكبر = تكلفة أعلى",
              "On-Grid (متصل): أرخص لكن لا يعمل عند انقطاع الكهرباء",
              "Hybrid (هجين): مرونة أكثر بتكلفة وسط"
            ],
            impact: "تأثير كبير"
          },
          {
            icon: "battery",
            title: "نوع البطاريات",
            description: "أكبر عامل مؤثر في فرق السعر بين العروض.",
            details: [
              "بطاريات الرصاص: تكلفة أولية أقل، عمر أقصر",
              "بطاريات الليثيوم: تكلفة أولية أعلى، عمر أطول بكثير",
              "على المدى الطويل: الليثيوم غالبًا أوفر"
            ],
            impact: "تأثير كبير جدًا"
          },
          {
            icon: "inverter",
            title: "جودة الانفرتر",
            description: "الانفرتر قلب النظام، وجودته تحدد الأداء والعمر.",
            details: [
              "انفرترات اقتصادية: أرخص لكن أقل كفاءة وعمرًا",
              "انفرترات ممتازة: أغلى لكن أداء أفضل وضمان أطول",
              "الفرق يظهر في الكفاءة واستهلاك الطاقة الذاتي"
            ],
            impact: "تأثير متوسط إلى كبير"
          },
          {
            icon: "panels",
            title: "الألواح الشمسية",
            description: "الجودة والقدرة تؤثر على السعر والأداء.",
            details: [
              "ألواح بقدرة أعلى = عدد أقل لنفس الإنتاج",
              "الجودة تحدد العمر الافتراضي ومقاومة الظروف",
              "ألواح Tier 1 أغلى لكن موثوقة أكثر"
            ],
            impact: "تأثير متوسط"
          },
          {
            icon: "installation",
            title: "بيئة وظروف التركيب",
            description: "موقعك ومنزلك يؤثران على تكلفة التركيب.",
            details: [
              "سطح مسطح وسهل الوصول = أسهل وأرخص",
              "مبنى مرتفع أو سطح معقد = أصعب وأغلى",
              "المسافة من الألواح للانفرتر = طول الكابلات",
              "البيئة الساحلية قد تحتاج حماية إضافية"
            ],
            impact: "تأثير متفاوت"
          }
        ]
      },

      yemenContext: {
        title: "لماذا يختلف السعر من منزل لآخر في اليمن؟",
        scenarios: [
          {
            title: "الموقع الجغرافي",
            description: "المدن الكبرى قد تكون أرخص بسبب توفر الموردين. المناطق النائية تحتاج تكاليف نقل وتركيب إضافية."
          },
          {
            title: "أنماط الاستخدام",
            description: "منزل يستخدم الكهرباء نهارًا فقط يختلف عن منزل يحتاجها ليلًا. هذا يؤثر على حجم البطاريات المطلوبة."
          },
          {
            title: "مدة الانقطاعات",
            description: "في مناطق الانقطاع الطويل، تحتاج سعة بطاريات أكبر للتغطية. هذا يرفع التكلفة مقارنة بمناطق الانقطاع القصير."
          },
          {
            title: "توقعات التوسع",
            description: "هل ستضيف مكيفًا مستقبلاً؟ التخطيط للتوسع يعني تحجيم أكبر الآن، مما يرفع التكلفة الأولية لكن يوفر لاحقًا."
          },
          {
            title: "جودة البنية التحتية",
            description: "منزل بتوصيلات كهربائية جيدة يختلف عن منزل يحتاج تحديث التوصيلات أولاً."
          }
        ]
      },

      comparison: {
        title: "مقارنة سيناريوهات نموذجية",
        note: "هذه السيناريوهات توضيحية للمقارنة النسبية فقط، وليست أسعارًا فعلية.",
        headers: ["السيناريو", "مستوى التكلفة", "ملاحظات"],
        rows: [
          {
            scenario: "منزل صغير، إضاءة ومراوح، بطاريات رصاص",
            cost: "الأقل تكلفة",
            notes: "مناسب للميزانية المحدودة، يحتاج استبدال بطاريات أبكر"
          },
          {
            scenario: "منزل متوسط، بدون مكيف، بطاريات ليثيوم",
            cost: "متوسط",
            notes: "توازن جيد بين التكلفة والجودة والعمر"
          },
          {
            scenario: "منزل كبير أو فيلا، مكيف واحد، ليثيوم",
            cost: "أعلى من المتوسط",
            notes: "يحتاج انفرتر وبطاريات بحجم أكبر"
          },
          {
            scenario: "منزل كامل بعدة مكيفات، نظام متكامل",
            cost: "الأعلى تكلفة",
            notes: "استثمار كبير، لكن استقلالية تامة"
          }
        ]
      },

      smartQuestions: {
        title: "أسئلة ذكية تسألها قبل الموافقة على عرض السعر",
        questions: [
          "ما نوع البطاريات وما عمرها المتوقع؟",
          "ما ضمان الانفرتر والألواح؟",
          "هل السعر يشمل التركيب والتوصيل؟",
          "هل يشمل الحماية (فيوزات، قواطع)؟",
          "ماذا يحدث لو احتجت توسعة لاحقًا؟",
          "هل هناك دعم فني بعد التركيب؟"
        ]
      },

      keyTakeaways: {
        title: "الخلاصة",
        points: [
          "لا يوجد سعر واحد للجميع - كل نظام مصمم حسب الاحتياج",
          "البطاريات ونوع النظام هما أكبر عاملين مؤثرين في السعر",
          "الأرخص ليس الأفضل دائمًا - فكّر بالتكلفة على المدى الطويل",
          "اسأل عن التفاصيل قبل المقارنة بين العروض",
          "العرض الجيد يوضح كل شيء ولا يخفي شيئًا"
        ]
      },

      relatedLinks: {
        title: "مواضيع ذات صلة",
        pillar: "الدليل الشامل للطاقة الشمسية في اليمن",
        panels: "الألواح الشمسية",
        inverters: "الانفرترات",
        batteries: "البطاريات",
        quote: "اطلب عرض سعر"
      },

      faqs: [
        {
          q: "هل يمكنني معرفة السعر دون زيارة ميدانية؟",
          a: "يمكن إعطاء تقدير مبدئي بناءً على وصفك للأحمال. لكن التقدير الدقيق يحتاج معاينة الموقع وفهم نمط استخدامك الفعلي."
        },
        {
          q: "لماذا عرض شركة أغلى بكثير من أخرى؟",
          a: "قد يكون الفرق في جودة المكونات، نوع البطاريات، مدة الضمان، أو خدمات ما بعد البيع. قارن التفاصيل وليس السعر فقط."
        },
        {
          q: "هل الأفضل شراء نظام كبير من البداية؟",
          a: "إذا كنت تخطط للتوسع قريبًا، نعم. لكن إذا احتياجاتك ثابتة، اشترِ ما تحتاجه الآن وتجنب الدفع الزائد."
        },
        {
          q: "هل يمكنني تركيب النظام على مراحل لتوزيع التكلفة؟",
          a: "ممكن في بعض الحالات (إضافة بطاريات أو ألواح لاحقًا). لكن يجب التخطيط لذلك من البداية لضمان التوافق."
        },
        {
          q: "ما الذي يجعل النظام يستحق سعره؟",
          a: "الجودة العالية، الضمان الطويل، الأداء الموثوق، والدعم الفني. النظام الجيد يوفر عليك تكاليف الإصلاح والاستبدال المتكرر."
        }
      ],

      cta: {
        title: "جاهز لمعرفة تكلفة نظامك؟",
        subtitle: "أخبرنا عن احتياجاتك ونعطيك تقديرًا مخصصًا بناءً على وضعك الفعلي",
        button: "اطلب عرض سعر مخصص",
        note: "بدون التزام - مجرد تقدير يساعدك على اتخاذ قرار مدروس"
      }
    },
    en: {
      title: "Solar System Cost in Yemen: What Determines the Price?",
      metaDescription: "Learn about the factors that determine solar system cost in Yemen. An educational guide to understand pricing and make informed decisions without surprises.",
      breadcrumb: "Solar System Cost",
      backToHub: "Knowledge Hub",
      heroTitle: "Solar System Cost in Yemen",
      heroSubtitle: "What determines the price? How to understand quotes before agreeing?",
      
      intro: {
        title: "Why Do Prices Vary So Much?",
        content: "When you ask \"How much does a solar system cost?\", the answer is always: \"It depends\". Not evasion, but because every home and usage pattern is different. Understanding the factors that determine price helps you compare quotes smartly and avoid paying more than you need or less than necessary."
      },

      note: {
        title: "Important Note",
        content: "This guide doesn't mention specific prices because they change based on market, suppliers, and time. The goal is to help you understand what you're paying for."
      },

      factors: {
        title: "Key Factors That Determine Cost",
        items: [
          {
            icon: "load",
            title: "Electrical Load Size",
            description: "The more devices you want to run, the larger the system needed.",
            details: [
              "Home with lights and fans only ← small system",
              "Home with fridge, TV, and washer ← medium system",
              "Home with ACs and pumps ← large system",
              "Every jump in load means a jump in cost"
            ],
            impact: "Very high impact"
          },
          {
            icon: "system",
            title: "System Type",
            description: "Do you want complete independence or grid backup?",
            details: [
              "Off-Grid: Needs larger batteries = higher cost",
              "On-Grid: Cheaper but doesn't work during outages",
              "Hybrid: More flexibility at moderate cost"
            ],
            impact: "High impact"
          },
          {
            icon: "battery",
            title: "Battery Type",
            description: "The biggest factor in price differences between quotes.",
            details: [
              "Lead-acid: Lower upfront cost, shorter lifespan",
              "Lithium: Higher upfront cost, much longer lifespan",
              "Long-term: Lithium is often more economical"
            ],
            impact: "Very high impact"
          },
          {
            icon: "inverter",
            title: "Inverter Quality",
            description: "The inverter is the system's heart; its quality determines performance and lifespan.",
            details: [
              "Budget inverters: Cheaper but less efficient and shorter-lived",
              "Premium inverters: More expensive but better performance and longer warranty",
              "Difference shows in efficiency and self-consumption"
            ],
            impact: "Medium to high impact"
          },
          {
            icon: "panels",
            title: "Solar Panels",
            description: "Quality and capacity affect price and performance.",
            details: [
              "Higher capacity panels = fewer needed for same output",
              "Quality determines lifespan and weather resistance",
              "Tier 1 panels cost more but are more reliable"
            ],
            impact: "Medium impact"
          },
          {
            icon: "installation",
            title: "Installation Environment",
            description: "Your location and home affect installation cost.",
            details: [
              "Flat, accessible roof = easier and cheaper",
              "Tall building or complex roof = harder and more expensive",
              "Distance from panels to inverter = cable length",
              "Coastal environment may need extra protection"
            ],
            impact: "Variable impact"
          }
        ]
      },

      yemenContext: {
        title: "Why Do Prices Differ Between Homes in Yemen?",
        scenarios: [
          {
            title: "Geographic Location",
            description: "Major cities may be cheaper due to supplier availability. Remote areas need additional transport and installation costs."
          },
          {
            title: "Usage Patterns",
            description: "A home using electricity only during the day differs from one needing it at night. This affects required battery size."
          },
          {
            title: "Outage Duration",
            description: "In areas with long outages, you need larger battery capacity for coverage. This raises cost compared to areas with short outages."
          },
          {
            title: "Expansion Expectations",
            description: "Will you add an AC later? Planning for expansion means larger sizing now, raising initial cost but saving later."
          },
          {
            title: "Infrastructure Quality",
            description: "A home with good electrical wiring differs from one needing wiring updates first."
          }
        ]
      },

      comparison: {
        title: "Typical Scenario Comparison",
        note: "These scenarios are illustrative for relative comparison only, not actual prices.",
        headers: ["Scenario", "Cost Level", "Notes"],
        rows: [
          {
            scenario: "Small home, lights and fans, lead-acid batteries",
            cost: "Lowest cost",
            notes: "Suitable for limited budget, needs earlier battery replacement"
          },
          {
            scenario: "Medium home, no AC, lithium batteries",
            cost: "Medium",
            notes: "Good balance of cost, quality, and lifespan"
          },
          {
            scenario: "Large home or villa, one AC, lithium",
            cost: "Above medium",
            notes: "Needs larger inverter and batteries"
          },
          {
            scenario: "Full home with multiple ACs, complete system",
            cost: "Highest cost",
            notes: "Major investment, but complete independence"
          }
        ]
      },

      smartQuestions: {
        title: "Smart Questions to Ask Before Accepting a Quote",
        questions: [
          "What type of batteries and what's their expected lifespan?",
          "What's the warranty on inverter and panels?",
          "Does the price include installation and wiring?",
          "Does it include protection (fuses, breakers)?",
          "What happens if I need expansion later?",
          "Is there technical support after installation?"
        ]
      },

      keyTakeaways: {
        title: "Key Takeaways",
        points: [
          "There's no one price for everyone - each system is designed per need",
          "Batteries and system type are the biggest price factors",
          "Cheapest isn't always best - think long-term cost",
          "Ask about details before comparing quotes",
          "A good quote explains everything and hides nothing"
        ]
      },

      relatedLinks: {
        title: "Related Topics",
        pillar: "Complete Solar Guide for Yemen",
        panels: "Solar Panels",
        inverters: "Inverters",
        batteries: "Batteries",
        quote: "Request a Quote"
      },

      faqs: [
        {
          q: "Can I get a price without a site visit?",
          a: "An initial estimate can be given based on your load description. But accurate estimate needs site inspection and understanding your actual usage pattern."
        },
        {
          q: "Why is one company's quote much higher than another?",
          a: "The difference may be in component quality, battery type, warranty period, or after-sales services. Compare details, not just price."
        },
        {
          q: "Is it better to buy a large system from the start?",
          a: "If you plan to expand soon, yes. But if your needs are stable, buy what you need now and avoid overpaying."
        },
        {
          q: "Can I install the system in phases to spread the cost?",
          a: "Possible in some cases (adding batteries or panels later). But this must be planned from the start to ensure compatibility."
        },
        {
          q: "What makes a system worth its price?",
          a: "High quality, long warranty, reliable performance, and technical support. A good system saves you repair and frequent replacement costs."
        }
      ],

      cta: {
        title: "Ready to Know Your System Cost?",
        subtitle: "Tell us about your needs and we'll give you a custom estimate based on your actual situation",
        button: "Request Custom Quote",
        note: "No obligation - just an estimate to help you make an informed decision"
      }
    }
  };

  const t = content[language];

  const getFactorIcon = (icon: string) => {
    switch (icon) {
      case 'load': return <Zap className="h-6 w-6" />;
      case 'system': return <Home className="h-6 w-6" />;
      case 'battery': return <Battery className="h-6 w-6" />;
      case 'inverter': return <Zap className="h-6 w-6" />;
      case 'panels': return <Sun className="h-6 w-6" />;
      case 'installation': return <Building2 className="h-6 w-6" />;
      default: return <Calculator className="h-6 w-6" />;
    }
  };

  // Schema markup using centralized SEO helpers
  const articleSchema = createArticleSchema({
    headline: content.en.title,
    headlineAr: content.ar.title,
    description: content.en.metaDescription,
    datePublished: '2024-12-21',
    url: '/knowledge/solar-system-cost-yemen',
  });

  const faqSchema = createFAQSchema(
    t.faqs.map((faq) => ({
      question: faq.q,
      answer: faq.a,
    }))
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: language === 'ar' ? 'الرئيسية' : 'Home', url: '/' },
    { name: language === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub', url: '/knowledge' },
    { name: t.breadcrumb, url: '/knowledge/solar-system-cost-yemen' },
  ]);

  return (
    <Layout>
      <SEO
        title={content.en.title}
        titleAr={content.ar.title}
        description={content.en.metaDescription}
        descriptionAr={content.ar.metaDescription}
        canonical="/knowledge/solar-system-cost-yemen"
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
              <Link to="/knowledge" className="hover:text-primary transition-colors">{t.backToHub}</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{t.breadcrumb}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-amber-500/5 to-background">
          <div className="container mx-auto px-4">
            <Link to="/knowledge" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              {t.backToHub}
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10">
                  <Calculator className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t.heroTitle}</h1>
              <p className="text-xl text-muted-foreground">{t.heroSubtitle}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Intro */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t.intro.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.intro.content}</p>
              </section>

              {/* Note */}
              <section className="mb-10">
                <Card className="bg-blue-500/10 border-blue-500/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">{t.note.title}</h3>
                        <p className="text-blue-700 dark:text-blue-300">{t.note.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Factors */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.factors.title}</h2>
                <div className="space-y-4">
                  {t.factors.items.map((factor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-muted/50 p-4 border-b flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {getFactorIcon(factor.icon)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <h3 className="text-lg font-semibold text-foreground">{factor.title}</h3>
                              <span className="text-xs bg-amber-500/20 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full">
                                {factor.impact}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{factor.description}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-2">
                            {factor.details.map((detail, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Yemen Context */}
              <section className="mb-12">
                <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Scale className="h-6 w-6 text-amber-600" />
                      <h2 className="text-2xl font-bold text-foreground">{t.yemenContext.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {t.yemenContext.scenarios.map((scenario, index) => (
                        <div key={index} className="bg-background rounded-lg p-4 border">
                          <h4 className="font-semibold text-foreground mb-2">{scenario.title}</h4>
                          <p className="text-sm text-muted-foreground">{scenario.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                        {t.comparison.headers.map((header, i) => (
                          <th key={i} className="border border-border p-3 text-start font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {t.comparison.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                          <td className="border border-border p-3">{row.scenario}</td>
                          <td className="border border-border p-3 font-medium text-primary">{row.cost}</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Smart Questions */}
              <section className="mb-12">
                <Card className="bg-green-500/5 border-green-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="h-6 w-6 text-green-600" />
                      <h2 className="text-xl font-bold text-foreground">{t.smartQuestions.title}</h2>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {t.smartQuestions.questions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                          {q}
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
                      {t.keyTakeaways.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</div>
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
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                  <Link to="/knowledge/solar-yemen-guide">
                    <Card className="h-full hover:border-primary transition-colors">
                      <CardContent className="p-3 text-center">
                        <Sun className="h-6 w-6 text-primary mx-auto mb-1" />
                        <p className="font-medium text-xs">{t.relatedLinks.pillar}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/products/panels">
                    <Card className="h-full hover:border-primary transition-colors">
                      <CardContent className="p-3 text-center">
                        <Sun className="h-6 w-6 text-amber-500 mx-auto mb-1" />
                        <p className="font-medium text-xs">{t.relatedLinks.panels}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/products/inverters">
                    <Card className="h-full hover:border-primary transition-colors">
                      <CardContent className="p-3 text-center">
                        <Zap className="h-6 w-6 text-primary mx-auto mb-1" />
                        <p className="font-medium text-xs">{t.relatedLinks.inverters}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/products/batteries">
                    <Card className="h-full hover:border-primary transition-colors">
                      <CardContent className="p-3 text-center">
                        <Battery className="h-6 w-6 text-green-600 mx-auto mb-1" />
                        <p className="font-medium text-xs">{t.relatedLinks.batteries}</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/contact">
                    <Card className="h-full hover:border-amber-500 transition-colors bg-amber-500/5">
                      <CardContent className="p-3 text-center">
                        <TrendingUp className="h-6 w-6 text-amber-600 mx-auto mb-1" />
                        <p className="font-medium text-xs">{t.relatedLinks.quote}</p>
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
                  {t.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-start hover:no-underline">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* CTA */}
              <section className="text-center">
                <Card className="bg-gradient-to-r from-amber-600 to-orange-500">
                  <CardContent className="p-8">
                    <Calculator className="h-12 w-12 text-white mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">{t.cta.title}</h2>
                    <p className="text-white/80 mb-4">{t.cta.subtitle}</p>
                    <Button asChild size="lg" variant="secondary">
                      <Link to="/contact">{t.cta.button}</Link>
                    </Button>
                    <p className="text-white/60 text-sm mt-4">{t.cta.note}</p>
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

export default SolarSystemCostYemen;
