import Layout from '@/components/layout/Layout';
import SEO, { createBreadcrumbSchema, createFAQSchema, organizationSchema } from '@/components/SEO';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

export default function PylontechBatteries() {
  const { isRTL } = useLanguage();

  const faqs = [
    {
      question: 'هل مؤسسة القطاع هي الوكيل المعتمد لبطاريات بايلونتك في اليمن؟',
      answer:
        'نعم، نحن الوكيل المعتمد لبطاريات بايلونتك في اليمن ونوفر بطاريات أصلية مع دعم فني كامل.'
    },
    {
      question: 'ما هي مميزات بطاريات بايلونتك من مؤسسة القطاع؟',
      answer:
        'بطاريات LiFePO4 عالية الكفاءة، عمر طويل، نظام إدارة ذكي للطاقة (BMS)، ودعم فني متخصص من مؤسسة القطاع.'
    },
    {
      question: 'هل يمكن تركيب بطاريات بايلونتك مع ألواح شمسية وإنفرترات؟',
      answer:
        'نعم، يمكن دمجها بسهولة مع أنظمة الطاقة الشمسية لضمان تشغيل مستمر وموثوق.'
    }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: 'بطاريات بايلونتك', url: '/بطاريات-بايلونتك' }
  ]);

  const faqSchema = createFAQSchema(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <Layout>
      <SEO
        title="Pylontech Batteries – Authorized Agent in Yemen | Al-Qatta"
        titleAr="بطاريات بايلونتك الأصلية – الوكيل المعتمد في اليمن | مؤسسة القطاع"
        description="Get original Pylontech batteries in Yemen from Al-Qatta, the only authorized agent, with expert support for solar systems."
        descriptionAr="احصل على بطاريات بايلونتك الأصلية من مؤسسة القطاع – الوكيل المعتمد في اليمن – مع دعم فني متكامل لأنظمة الطاقة الشمسية."
        canonical="/بطاريات-بايلونتك"
        ogType="article"
        jsonLd={[organizationSchema, breadcrumbSchema, faqSchema]}
      />

      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-20 border-b bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container max-w-4xl">
            <header className="mb-10">
              <p className="text-sm font-semibold text-secondary mb-3">
                بطاريات بايلونتك الأصلية – الوكيل المعتمد في اليمن
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                بطاريات بايلونتك الأصلية – الوكيل المعتمد في اليمن
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                احصل على بطاريات بايلونتك الأصلية من
                <span className="font-semibold"> مؤسسة القطاع</span>
                ، الوكيل المعتمد في اليمن لضمان الجودة والأداء العالي.
              </p>
            </header>

            <section className="space-y-4 mb-10" id="why-choose">
              <h2 className="text-2xl font-semibold">لماذا تختار بطاريات بايلونتك من مؤسسة القطاع؟</h2>
              <ul className="list-disc ps-5 space-y-2 text-muted-foreground leading-relaxed">
                <li>
                  <span className="font-semibold">الوكيل المعتمد في اليمن:</span> ضمان الحصول على بطاريات
                  أصلية مع شهادة الاعتماد الرسمية.
                </li>
                <li>
                  <span className="font-semibold">أمان وكفاءة عالية:</span> بطاريات LiFePO4 متطورة لتشغيل مستمر
                  وآمن.
                </li>
                <li>
                  <span className="font-semibold">تخزين طويل الأمد:</span> عمر افتراضي طويل مع نظام إدارة
                  البطارية الذكي (BMS).
                </li>
                <li>
                  <span className="font-semibold">تكامل كامل مع الأنظمة الشمسية:</span> يمكن دمجها مع ألواح
                  شمسية وإنفرترات لضمان الطاقة المستمرة.
                </li>
                <li>
                  <span className="font-semibold">دعم فني متخصص:</span> فريقنا جاهز لتركيب وصيانة البطاريات
                  وضمان أفضل أداء.
                </li>
              </ul>
            </section>

            <section className="space-y-4 mb-10" id="applications">
              <h2 className="text-2xl font-semibold">استخدامات بطاريات بايلونتك</h2>
              <ul className="list-disc ps-5 space-y-2 text-muted-foreground leading-relaxed">
                <li>المنازل السكنية لتوفير الطاقة المستمرة.</li>
                <li>المصانع والشركات لتقليل تكاليف الكهرباء.</li>
                <li>المشاريع التجارية والتعليمية والطبية لضمان التشغيل المستمر.</li>
              </ul>
            </section>

            <section className="space-y-4 mb-10" id="cta">
              <h2 className="text-2xl font-semibold">اطلب بطاريات بايلونتك الأصلية الآن</h2>
              <p className="text-muted-foreground leading-relaxed">
                تواصل مع
                <span className="font-semibold"> مؤسسة القطاع</span>
                ، الوكيل المعتمد لبطاريات بايلونتك في اليمن، للحصول على استشارة مجانية واختيار
                البطاريات المناسبة لاحتياجاتك.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-2 px-6 py-3 text-base font-semibold"
              >
                <a
                  href="https://alqatta.com/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تواصل معنا الآن
                </a>
              </Button>
            </section>

            <section className="space-y-4 mb-10" id="projects">
              <h2 className="text-2xl font-semibold">مشاريعنا مع بطاريات بايلونتك</h2>
              <p className="text-muted-foreground leading-relaxed">
                نفخر بتنفيذ مشاريع ناجحة في اليمن باستخدام بطاريات بايلونتك الأصلية، لتوفير طاقة نظيفة
                وموثوقة للمنازل والمصانع والمشاريع التجارية.
              </p>
              {/* يمكن لاحقاً ربط هذه الفقرة بقسم المشاريع الحقيقي */}
            </section>

            <footer className="pt-6 mt-4 border-t text-sm text-muted-foreground">
              © 2025 مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء – الوكيل المعتمد لبطاريات بايلونتك في
              اليمن.
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
