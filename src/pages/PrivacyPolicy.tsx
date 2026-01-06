import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/i18n/LanguageContext';
import { useLocation } from 'react-router-dom';

export default function PrivacyPolicy() {
  const { isRTL } = useLanguage();
  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';

  const title = isRTL
    ? 'سياسة الخصوصية - القطاع لأنظمة الطاقة الشمسية والكهرباء'
    : 'Privacy Policy - Al-Qatta Solar Energy Systems';

  const description = isRTL
    ? 'تعرف على كيفية تعامل القطاع لأنظمة الطاقة الشمسية والكهرباء مع بياناتك الشخصية واستخدامها وحمايتها.'
    : 'Learn how Al-Qatta Solar Energy Systems collects, uses, and protects your personal data.';

  const canonical = isEnPath ? '/en/privacy-policy' : '/privacy-policy';

  const privacyJsonLd = [
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
        jsonLd={privacyJsonLd}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black mb-6">
            {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
            {isRTL
              ? 'في القطاع لأنظمة الطاقة الشمسية والكهرباء نهتم بخصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه الصفحة كيف نجمع بياناتك ونستخدمها ونحميها عندما تتواصل معنا أو تستخدم موقعنا.'
              : 'At Al-Qatta Solar Energy Systems, we care about your privacy and are committed to protecting your personal data. This page explains how we collect, use, and protect your data when you contact us or use our website.'}
          </p>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '١. البيانات التي نقوم بجمعها' : '1. Data We Collect'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'نقوم بجمع البيانات التي تزودنا بها طوعًا عند التواصل معنا عبر نموذج الاتصال أو الواتساب أو الهاتف، مثل الاسم، رقم الهاتف، البريد الإلكتروني، وبيانات مشروع الطاقة الشمسية الخاص بك.'
                  : 'We collect the information you voluntarily provide when you contact us via the contact form, WhatsApp, or phone, such as your name, phone number, email address, and information about your solar energy project.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '٢. كيفية استخدامنا لبياناتك' : '2. How We Use Your Data'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'نستخدم بياناتك فقط للرد على استفساراتك، إعداد عروض الأسعار، تقديم الاستشارات الفنية، وتحسين خدماتنا. لا نقوم ببيع بياناتك أو مشاركتها مع جهات تسويقية.'
                  : 'We use your data only to respond to your inquiries, prepare quotations, provide technical advice, and improve our services. We do not sell your data or share it with marketing agencies.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '٣. حماية البيانات' : '3. Data Protection'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'نحرص على حماية بياناتك من الوصول غير المصرح به أو الاستخدام أو التعديل أو الإفصاح عنها، ضمن حدود الإمكانيات التقنية المعقولة.'
                  : 'We take reasonable technical and organizational measures to protect your data from unauthorized access, use, modification, or disclosure.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '٤. مدة الاحتفاظ بالبيانات' : '4. Data Retention'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'نحتفظ ببيانات التواصل الخاصة بك للمدة اللازمة للرد عليك ومتابعة مشروعك، أو حسب ما يتطلبه القانون المحلي.'
                  : 'We keep your contact details for as long as necessary to respond to you and follow up on your project, or as required by local regulations.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                {isRTL ? '٥. حقوقك' : '5. Your Rights'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL
                  ? 'يمكنك التواصل معنا في أي وقت لطلب تحديث بياناتك أو حذفها من سجلاتنا، وسنبذل جهدنا للاستجابة في أسرع وقت ممكن.'
                  : 'You can contact us at any time to request an update or deletion of your data from our records, and we will do our best to respond as quickly as possible.'}
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
