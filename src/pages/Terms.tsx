import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/i18n/LanguageContext';
import { useLocation } from 'react-router-dom';

export default function Terms() {
  const { isRTL } = useLanguage();
  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';

  const title = isRTL
    ? 'شروط الاستخدام - القطاع لأنظمة الطاقة الشمسية والكهرباء'
    : 'Terms of Use - Al-Qatta Solar Energy Systems';

  const description = isRTL
    ? 'تعرف على شروط وضوابط استخدام موقع القطاع لأنظمة الطاقة الشمسية والكهرباء ومحتوياته.'
    : 'Learn about the terms and conditions for using the Al-Qatta Solar Energy Systems website and its content.';

  const canonical = isEnPath ? '/en/terms' : '/terms';

  const termsJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `https://alqatta.com${canonical}`,
      url: `https://alqatta.com${canonical}`,
      name: title,
      description,
      inLanguage: pageLang,
      isPartOf: {
        '@id': 'https://alqatta.com/#website',
      },
      about: {
        '@id': 'https://alqatta.com/#organization',
      },
    },
  ];

  return (
    <Layout>
      <SEO
        title={title}
        titleAr={title}
        description={description}
        descriptionAr={description}
        canonical={canonical}
        lang={pageLang}
        jsonLd={termsJsonLd}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black mb-6">
            {isRTL ? 'شروط الاستخدام' : 'Terms of Use'}
          </h1>
          <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
            {isRTL
              ? 'باستخدامك لموقع القطاع لأنظمة الطاقة الشمسية والكهرباء، فإنك توافق على الشروط والأحكام الموضحة في هذه الصفحة. يرجى قراءتها بعناية قبل استخدام الموقع أو الاعتماد على المحتوى المنشور.'
              : 'By using the Al-Qatta Solar Energy Systems website, you agree to the terms and conditions described on this page. Please read them carefully before using the site or relying on its content.'}
          </p>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '١. طبيعة المحتوى' : '1. Nature of Content'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'المحتوى الموجود في الموقع لأغراض معلوماتية وتعليمية حول أنظمة الطاقة الشمسية في اليمن، ولا يُعد استشارة هندسية أو قانونية ملزمة. قد تختلف النتائج الفعلية للأنظمة بحسب ظروف كل مشروع.'
                  : 'The content on this website is for informational and educational purposes about solar energy systems in Yemen and does not constitute binding engineering or legal advice. Actual system performance may vary depending on each project.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '٢. المسؤولية' : '2. Responsibility'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'نبذل قصارى جهدنا لتقديم معلومات دقيقة ومحدّثة، ولكننا لا نتحمل المسؤولية عن أي خسائر مباشرة أو غير مباشرة ناتجة عن الاعتماد على المعلومات المنشورة دون استشارة فنية مباشرة من فريقنا.'
                  : 'We strive to provide accurate and up-to-date information, but we are not liable for any direct or indirect losses resulting from relying solely on the published information without direct technical consultation with our team.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '٣. حقوق الملكية الفكرية' : '3. Intellectual Property'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'جميع المحتوى النصي والرسومات والتصاميم في هذا الموقع مملوكة للقطاع لأنظمة الطاقة الشمسية والكهرباء أو مرخصة له، ولا يجوز نسخها أو إعادة استخدامها لأغراض تجارية بدون موافقة خطية مسبقة.'
                  : 'All text content, graphics, and designs on this site are owned by or licensed to Al-Qatta Solar Energy Systems and may not be copied or reused for commercial purposes without prior written permission.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '٤. التعديلات على الشروط' : '4. Changes to Terms'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'قد نقوم بتحديث هذه الشروط من وقت لآخر بما يتناسب مع تطور خدماتنا أو المتطلبات القانونية. استمرارك في استخدام الموقع بعد أي تحديث يُعد موافقة ضمنية على الشروط المعدلة.'
                  : 'We may update these terms from time to time to reflect changes in our services or legal requirements. Your continued use of the website after any update constitutes your acceptance of the revised terms.'}
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
