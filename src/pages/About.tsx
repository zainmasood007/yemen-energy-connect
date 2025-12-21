import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Shield, Users, Award, MapPin } from 'lucide-react';

export default function About() {
  const { t, isRTL } = useLanguage();
  
  return (
    <Layout>
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('nav.about')}</h1>
            <p className="text-lg text-muted-foreground">
              {isRTL ? 'الوكيل المعتمد الوحيد لـ Pylontech في اليمن منذ تأسيسنا' : 'The only authorized Pylontech agent in Yemen since our establishment'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: isRTL ? 'وكيل معتمد' : 'Authorized Agent', desc: isRTL ? 'الوكيل الرسمي لـ Pylontech' : 'Official Pylontech Agent' },
              { icon: Users, title: isRTL ? 'فريق متخصص' : 'Expert Team', desc: isRTL ? 'مهندسون ذوو خبرة' : 'Experienced Engineers' },
              { icon: Award, title: isRTL ? 'جودة مضمونة' : 'Quality Guaranteed', desc: isRTL ? 'منتجات أصلية 100%' : '100% Original Products' },
              { icon: MapPin, title: isRTL ? 'تغطية شاملة' : 'Full Coverage', desc: isRTL ? 'جميع المحافظات' : 'All Governorates' },
            ].map((item, i) => (
              <div key={i} className="card-industrial p-6 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 text-primary mb-4"><item.icon className="h-7 w-7" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
