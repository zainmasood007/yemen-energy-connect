import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEO, { organizationSchema, localBusinessSchema, createFAQSchema } from '@/components/SEO';
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  ProductsPreviewSection,
  PylontechSection,
  ServicesSection,
  ApplicationsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '@/components/home';
import CalculatorTeaser from '@/components/home/CalculatorTeaser';
import { logPerformanceMetric } from '@/lib/performanceMetrics';

export default function Index() {
  const { isRTL } = useLanguage();

  useEffect(() => {
    try {
      const durationMs = performance.now() - performance.timeOrigin;
      logPerformanceMetric({ type: 'home_load', durationMs });
    } catch {
      // Ignore environments without Performance API
    }
  }, []);

  const homeFaqs = [
    {
      question: isRTL ? 'كم تكلفة نظام الطاقة الشمسية للمنزل في اليمن؟' : 'How much does a home solar system cost in Yemen?',
      answer: isRTL
        ? 'تعتمد التكلفة على حجم الأحمال وساعات التشغيل. معظم أنظمة المنازل في اليمن (3–10 كيلوواط مع بطاريات ليثيوم) تتراوح تقريباً بين 2,000 و 8,000 دولار حسب التصميم.'
        : 'Cost depends on your loads and backup hours. Most Yemeni home systems (3–10 kW with lithium batteries) typically range between $2,000 and $8,000 depending on design.'
    },
    {
      question: isRTL ? 'كم سنة يدوم النظام الشمسي وبطاريات Pylontech؟' : 'How long do solar systems and Pylontech batteries last?',
      answer: isRTL
        ? 'الألواح الشمسية تدوم عادة 25–30 سنة مع انخفاض بسيط في الإنتاجية، بينما بطاريات Pylontech LiFePO4 يمكن أن تتجاوز 15 سنة مع استخدام صحيح وضمان مصنعي يصل إلى 10 سنوات.'
        : 'Solar panels typically last 25–30 years with a small efficiency drop, while Pylontech LiFePO4 batteries can exceed 15 years with proper use and come with up to 10 years manufacturer warranty.'
    },
    {
      question: isRTL ? 'لماذا أختار بطاريات Pylontech بدلاً من بطاريات الرصاص؟' : 'Why choose Pylontech lithium batteries instead of lead-acid?',
      answer: isRTL
        ? 'بطاريات Pylontech الليثيوم تتحمل التفريغ العميق والانقطاعات الطويلة في اليمن، عمرها الافتراضي 3–4 أضعاف بطاريات الرصاص، كفاءتها أعلى ولا تحتاج صيانة أو تعبئة ماء.'
        : 'Pylontech lithium batteries handle deep discharge and long outages in Yemen, last 3–4 times longer than lead-acid, are more efficient and require no maintenance or water refilling.'
    },
    {
      question: isRTL ? 'هل تقدمون ضماناً وخدمة ما بعد البيع داخل اليمن؟' : 'Do you provide warranty and after-sales service inside Yemen?',
      answer: isRTL
        ? 'نعم، نحن الوكيل المعتمد لـ Pylontech في اليمن ونوفر ضماناً رسمياً حتى 10 سنوات مع مركز خدمة داخل صنعاء وفِرق دعم تغطي المدن الرئيسية.'
        : 'Yes, as the authorized Pylontech agent in Yemen we provide official warranty up to 10 years with a local service center in Sana’a and support teams covering major cities.'
    },
    {
      question: isRTL ? 'هل الطاقة الشمسية مناسبة للمناطق الساحلية والحارة مثل عدن والحديدة؟' : 'Is solar suitable for hot coastal areas like Aden and Hudaydah?',
      answer: isRTL
        ? 'نعم، نستخدم ألواحاً وبطاريات مصنّفة لتحمل الحرارة العالية والرطوبة والضباب الملحي، مع تصميم تركيب يحسّن التهوية ويقلل تراكم الحرارة والغبار.'
        : 'Yes. We use panels and batteries rated for high temperatures, humidity and salty fog, with mounting designs that improve airflow and reduce heat and dust buildup in coastal cities.'
    },
  ];
  
  const homeJsonLd = [
    organizationSchema,
    localBusinessSchema,
    createFAQSchema(homeFaqs),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": isRTL ? "القطاع للطاقة الشمسية" : "Al-Qatta Solar Energy",
      "url": "https://alqatta.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://alqatta.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <Layout>
      <SEO
        title="Al-Qatta Solar Energy | Authorized Pylontech Agent in Yemen"
        titleAr="القطاع للطاقة الشمسية | الوكيل المعتمد لـ Pylontech في اليمن"
        description="The only authorized Pylontech battery agent in Yemen. We provide solar energy solutions, energy storage systems, and professional installation services."
        descriptionAr="الوكيل المعتمد الوحيد لبطاريات Pylontech في اليمن. نقدم حلول الطاقة الشمسية وأنظمة تخزين الطاقة وخدمات التركيب الاحترافية."
        keywords="solar energy yemen, pylontech yemen, solar panels yemen, energy storage yemen, lithium batteries yemen"
        keywordsAr="طاقة شمسية اليمن، بايلونتيك اليمن، ألواح شمسية اليمن، تخزين الطاقة اليمن، بطاريات ليثيوم اليمن"
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductsPreviewSection />
      <PylontechSection />
      <CalculatorTeaser />
      <ServicesSection />
      <ApplicationsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
