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
      question: isRTL ? 'كم تكلفة نظام الطاقة الشمسية للمنزل؟' : 'How much does a home solar system cost?',
      answer: isRTL ? 'تختلف التكلفة حسب حجم النظام واحتياجاتك. نظام منزلي متوسط (5-10 كيلووات) يتراوح بين 3,000-8,000 دولار.' : 'Cost varies based on system size and your needs. An average home system (5-10 kW) ranges from $3,000-$8,000.'
    },
    {
      question: isRTL ? 'كم سنة يدوم النظام الشمسي؟' : 'How long does a solar system last?',
      answer: isRTL ? 'الألواح الشمسية تدوم 25-30 سنة. بطاريات Pylontech تدوم أكثر من 15 سنة مع ضمان 10 سنوات.' : 'Solar panels last 25-30 years. Pylontech batteries last over 15 years with 10-year warranty.'
    },
    {
      question: isRTL ? 'لماذا أختار Pylontech؟' : 'Why choose Pylontech?',
      answer: isRTL ? 'Pylontech هي العلامة الأولى عالمياً في بطاريات تخزين الطاقة مع تقنية LiFePO4 الأكثر أماناً وعمر افتراضي 6000+ دورة.' : "Pylontech is the world's #1 brand in energy storage with the safest LiFePO4 technology and 6000+ cycle lifespan."
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
