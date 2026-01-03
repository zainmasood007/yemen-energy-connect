import Layout from '@/components/layout/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { useLanguage } from '@/i18n/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 'cost-yemen',
    questionAr: 'كم تكلفة نظام الطاقة الشمسية في اليمن تقريباً؟',
    questionEn: 'How much does a solar system cost in Yemen on average?',
    answerAr:
      'تعتمد التكلفة على حجم الأحمال وساعات التشغيل المطلوبة ومكان التركيب. كنطاق تقريبي، الأنظمة المنزلية الشائعة في اليمن (3–10 كيلوواط مع بطاريات ليثيوم) تتراوح غالباً بين 2,000 إلى 8,000 دولار، ويمكن تصميم أنظمة أصغر أو أكبر حسب الحاجة.',
    answerEn:
      'The cost depends on your loads, required backup hours, and location. As a rough range, common residential systems in Yemen (3–10 kW with lithium batteries) usually fall between $2,000 and $8,000, but can be smaller or larger depending on your needs.',
  },
  {
    id: 'works-with-grid',
    questionAr: 'هل يمكن ربط النظام الشمسي مع الكهرباء الحكومية أو المولد؟',
    questionEn: 'Can the solar system work with the public grid or generators in Yemen?',
    answerAr:
      'نعم، باستخدام انفرترات هجينة (Hybrid) يمكن ربط النظام الشمسي مع الشبكة الحكومية أو المولد الخاص، مع إعطاء أولوية للطاقة الشمسية والبطاريات وتقليل الاعتماد على الديزل قدر الإمكان.',
    answerEn:
      'Yes. With hybrid inverters, the solar system can work together with the public grid or private generators, prioritizing solar and batteries to reduce diesel consumption as much as possible.',
  },
  {
    id: 'cloudy-days',
    questionAr: 'هل الطاقة الشمسية مناسبة لمدن اليمن الساحلية مثل الحديدة وعدن؟',
    questionEn: 'Is solar energy suitable for Yemeni coastal cities like Hudaydah and Aden?',
    answerAr:
      'نعم، لكن يجب اختيار ألواح وبطاريات تتحمل الحرارة والرطوبة والضباب الملحي. نحن نعتمد منتجات بمقاومة عالية للحرارة والمناخ الساحلي، مع تصميم التركيب بحيث يحسّن التهوية ويقلل تراكم الحرارة.',
    answerEn:
      'Yes, but you must choose panels and batteries that tolerate high temperature, humidity, and salty fog. We use products with strong heat and coastal resistance and design mounting structures for better airflow and reduced heat buildup.',
  },
  {
    id: 'battery-type',
    questionAr: 'ما الأفضل لليمن: بطاريات ليثيوم أم بطاريات الرصاص؟',
    questionEn: 'Which is better for Yemen: lithium or lead-acid batteries?',
    answerAr:
      'في معظم الحالات بطاريات الليثيوم (LiFePO4) أفضل لليمن؛ فهي تتحمل التفريغ العميق والانقطاعات الطويلة، تدوم 3–4 مرات أكثر من الرصاص، كفاءتها أعلى ولا تحتاج صيانة دورية. بطاريات Pylontech مثال ممتاز على ذلك.',
    answerEn:
      'In most Yemeni scenarios, lithium (LiFePO4) batteries are better; they handle deep discharge and long outages, last 3–4 times longer than lead-acid, have higher efficiency, and require no regular maintenance. Pylontech batteries are a great example.',
  },
  {
    id: 'system-sizing',
    questionAr: 'كيف أحدد حجم النظام الشمسي المناسب لبيتي أو مشروعي؟',
    questionEn: 'How do I size the right solar system for my home or business in Yemen?',
    answerAr:
      'يتم حساب الحجم بناءً على الأجهزة التي تريد تشغيلها، عدد ساعات التشغيل في اليوم، ونمط انقطاع الكهرباء في منطقتك. فريقنا يقوم بدراسة حمل مجانية تقريباً، ويقترح لك نظاماً متوازنًا بين التكلفة والاعتمادية.',
    answerEn:
      'System size is based on the appliances you want to power, daily operating hours, and outage patterns in your area. Our team can perform a load assessment and propose a balanced system between cost and reliability.',
  },
  {
    id: 'maintenance',
    questionAr: 'ما نوع الصيانة المطلوبة لأنظمة الطاقة الشمسية في اليمن؟',
    questionEn: 'What maintenance do solar systems in Yemen typically need?',
    answerAr:
      'أهم شيء هو تنظيف الألواح من الغبار بين فترة وأخرى (خاصة في المناطق الصحراوية)، ومتابعة سلامة التوصيلات الكهربائية. أنظمة الليثيوم الحديثة لا تحتاج تعبة ماء أو صيانة كما في بطاريات الرصاص.',
    answerEn:
      'The most important task is cleaning panels from dust regularly (especially in desert regions) and checking electrical connections. Modern lithium systems do not require water filling or the same maintenance as lead-acid batteries.',
  },
  {
    id: 'lifespan',
    questionAr: 'كم العمر الافتراضي للألواح والانفرترات والبطاريات؟',
    questionEn: 'What is the typical lifetime of panels, inverters, and batteries?',
    answerAr:
      'الألواح الشمسية عادة 25–30 سنة مع انخفاض بسيط في الكفاءة سنوياً. الانفرترات الجيدة 8–12 سنة تقريباً حسب ظروف التشغيل. بطاريات الليثيوم (مثل Pylontech) يمكن أن تتجاوز 15 سنة مع استخدام صحيح.',
    answerEn:
      'Solar panels usually last 25–30 years with a small yearly efficiency drop. Quality inverters last around 8–12 years depending on usage. Lithium batteries like Pylontech can exceed 15 years with proper use.',
  },
  {
    id: 'warranty',
    questionAr: 'ما نوع الضمان المتوفر على الأنظمة والبطاريات؟',
    questionEn: 'What warranties are available on systems and batteries?',
    answerAr:
      'نوفّر ضماناً رسمياً من المصنع على بطاريات Pylontech يصل إلى 10 سنوات، وضمانات مختلفة على الانفرترات والألواح حسب العلامة التجارية، بالإضافة إلى خدمة ما بعد البيع داخل اليمن.',
    answerEn:
      'We provide official manufacturer warranties on Pylontech batteries up to 10 years, and different warranties on inverters and panels depending on the brand, plus local after-sales support inside Yemen.',
  },
];

function createFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.questionAr,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answerAr,
      },
    })),
  };
}

export default function SolarYemenFAQ() {
  const { isRTL } = useLanguage();

  const breadcrumb = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'مركز المعرفة' : 'Knowledge Hub', url: '/knowledge' },
    { name: isRTL ? 'الأسئلة الشائعة حول الطاقة الشمسية في اليمن' : 'Solar FAQ – Yemen', url: '/knowledge/solar-faq-yemen' },
  ]);

  const faqSchema = createFaqJsonLd();

  const title = 'Solar FAQ in Yemen – Costs, Batteries, and Design';
  const titleAr = 'الأسئلة الشائعة حول الطاقة الشمسية في اليمن – التكلفة والبطاريات والتصميم';

  const description =
    'Comprehensive FAQ about solar energy in Yemen: system cost ranges, lithium vs lead-acid batteries, coastal climate, design and maintenance.';
  const descriptionAr =
    'دليل أسئلة وأجوبة شامل حول الطاقة الشمسية في اليمن: تكاليف الأنظمة، مقارنة بطاريات الليثيوم والرصاص، ملاءمة المناخ الساحلي، التصميم والصيانة.';

  return (
    <Layout>
      <SEO
        title={title}
        titleAr={titleAr}
        description={description}
        descriptionAr={descriptionAr}
        keywords="solar Yemen, solar FAQ Yemen, lithium batteries Yemen, Pylontech Yemen"
        keywordsAr="الطاقة الشمسية في اليمن, أسئلة شائعة طاقة شمسية, بطاريات ليثيوم في اليمن, Pylontech اليمن"
        canonical="/knowledge/solar-faq-yemen"
        lang={isRTL ? 'ar' : 'en'}
        jsonLd={[breadcrumb, faqSchema]}
      />

      <main className="bg-background">
        <section className="py-10 md:py-14 border-b border-border bg-surface">
          <div className="container max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs mb-4">
              <HelpCircle className="h-4 w-4" />
              <span>{isRTL ? 'مرجع موثوق للطاقة الشمسية في اليمن' : 'Trusted solar FAQ for Yemen'}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              {isRTL
                ? 'الأسئلة الشائعة حول الطاقة الشمسية في اليمن'
                : 'Frequently Asked Questions about Solar Energy in Yemen'}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
              {isRTL
                ? 'هذه الصفحة موجهة خصيصاً للأسر والشركات في اليمن، وتجمع أهم الأسئلة التي نتلقاها يومياً حول تكلفة الأنظمة، اختيار البطاريات، ملاءمة المناخ، وعمر المعدات.'
                : 'This page is tailored for families and businesses in Yemen and collects the most common questions we receive about system cost, battery choices, climate suitability and equipment lifetime.'}
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-background">
          <div className="container max-w-4xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-primary/25 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-start hover:no-underline py-4">
                    <span className="font-medium text-sm">
                      {isRTL ? faq.questionAr : faq.questionEn}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed text-sm">
                    {isRTL ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 p-4 md:p-5 rounded-xl bg-secondary text-secondary-foreground text-sm md:text-base">
              <p className="mb-2 font-semibold">
                {isRTL
                  ? 'لم تجد سؤالك هنا؟'
                  : "Didn't find your exact question?"}
              </p>
              <p className="mb-3 text-secondary-foreground/80">
                {isRTL
                  ? 'تواصل معنا عبر واتساب للحصول على استشارة سريعة ومجانية حول تصميم نظام يناسب أحمالك وظروف منطقتك في اليمن.'
                  : 'Contact us on WhatsApp for a quick free consultation about designing a system that fits your loads and local conditions in Yemen.'}
              </p>
              <a
                href="https://wa.me/967777800063"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs md:text-sm font-medium underline-offset-4 hover:underline"
              >
                {isRTL ? 'التواصل عبر واتساب' : 'Chat with our solar team on WhatsApp'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
