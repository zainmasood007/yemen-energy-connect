import { Suspense, useEffect, lazy } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEO, { homeGraphSchema, createFAQSchema } from '@/components/SEO';
import { HeroSection } from '@/components/home';
import CalculatorTeaser from '@/components/home/CalculatorTeaser';
import { logPerformanceMetric } from '@/lib/performanceMetrics';

const StatsSection = lazy(() => import('@/components/home/StatsSection').then(m => ({ default: m.StatsSection })));
const FeaturesSection = lazy(() => import('@/components/home/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const ProductsPreviewSection = lazy(() => import('@/components/home/ProductsPreviewSection').then(m => ({ default: m.ProductsPreviewSection })));
const PylontechSection = lazy(() => import('@/components/home/PylontechSection').then(m => ({ default: m.PylontechSection })));
const ServicesSection = lazy(() => import('@/components/home/ServicesSection').then(m => ({ default: m.ServicesSection })));
const ApplicationsSection = lazy(() => import('@/components/home/ApplicationsSection').then(m => ({ default: m.ApplicationsSection })));
const TestimonialsSection = lazy(() => import('@/components/home/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import('@/components/home/FAQSection').then(m => ({ default: m.FAQSection })));
const CTASection = lazy(() => import('@/components/home/CTASection').then(m => ({ default: m.CTASection })));

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
        ? 'تختلف تكلفة النظام حسب الأحمال وساعات التشغيل ونوع البطاريات. بعد مراجعة الاستهلاك نحدد القدرة المناسبة ونقدم تسعيرة تقديرية دقيقة.'
        : 'The system cost depends on your loads, backup hours and battery type. After reviewing your consumption, we size the system properly and provide an accurate estimated quotation.'
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
  
  const homeJsonLd = homeGraphSchema;

  const homeFaqSchema = {
    "@id": "https://alqatta.com/#home-faq",
    "url": "https://alqatta.com/",
    "about": { "@id": "https://alqatta.com/#organization" },
    "isPartOf": { "@id": "https://alqatta.com/#website" },
    ...createFAQSchema(
      [
        {
          question: 'كم تكلفة نظام الطاقة الشمسية للمنزل في اليمن؟',
          answer:
            'تختلف تكلفة النظام حسب الأحمال وساعات التشغيل ونوع البطاريات. بعد مراجعة الاستهلاك نحدد القدرة المناسبة ونقدم تسعيرة تقديرية دقيقة.',
        },
        {
          question: 'كم سنة يدوم النظام الشمسي وبطاريات Pylontech؟',
          answer:
            'الألواح الشمسية تدوم عادة 25–30 سنة مع انخفاض بسيط في الإنتاجية، بينما بطاريات Pylontech LiFePO4 يمكن أن تتجاوز 15 سنة مع استخدام صحيح وضمان مصنعي يصل إلى 10 سنوات.',
        },
        {
          question: 'لماذا أختار بطاريات Pylontech بدلاً من بطاريات الرصاص؟',
          answer:
            'بطاريات Pylontech الليثيوم تتحمل التفريغ العميق والانقطاعات الطويلة في اليمن، عمرها الافتراضي 3–4 أضعاف بطاريات الرصاص، كفاءتها أعلى ولا تحتاج صيانة أو تعبئة ماء.',
        },
        {
          question: 'هل تقدمون ضماناً وخدمة ما بعد البيع داخل اليمن؟',
          answer:
            'نعم، نحن الوكيل المعتمد لـ Pylontech في اليمن ونوفر ضماناً رسمياً حتى 10 سنوات مع مركز خدمة داخل صنعاء وفِرق دعم تغطي المدن الرئيسية.',
        },
        {
          question: 'هل الطاقة الشمسية مناسبة للمناطق الساحلية والحارة مثل عدن والحديدة؟',
          answer:
            'نعم، نستخدم ألواحاً وبطاريات مصنّفة لتحمل الحرارة العالية والرطوبة والضباب الملحي، مع تصميم تركيب يحسّن التهوية ويقلل تراكم الحرارة والغبار.',
        },
      ]
    ),
  };
 
  return (
    <Layout>
      <SEO
        title="Al-Qatta Solar | Pylontech Batteries Yemen"
        titleAr="القطاع للطاقة الشمسية | بطاريات Pylontech وأنظمة شمسية في اليمن"
        description="Design and install reliable solar systems with original Pylontech lithium batteries in Yemen. Get a tailored system and free consultation from our expert team."
        descriptionAr="صمّم ونفّذ نظام طاقة شمسية موثوق مع بطاريات Pylontech الأصلية في اليمن. نظام مصمم خصيصاً لاحتياجك مع استشارة مجانية من فريق متخصص."
        keywords="solar energy yemen, pylontech batteries yemen, home solar systems, solar installation yemen, lithium batteries yemen"
        keywordsAr="طاقة شمسية اليمن، بطاريات بايلونتيك اليمن، أنظمة شمسية للمنازل، تركيب طاقة شمسية اليمن، بطاريات ليثيوم اليمن"
        canonical="/"
        jsonLd={[homeJsonLd, homeFaqSchema]}
      />
      <HeroSection />
      <Suspense fallback={null}>
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
      </Suspense>
    </Layout>
  );
}
