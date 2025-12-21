import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Shield, Battery, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Pylontech() {
  const { t, isRTL } = useLanguage();
  
  const features = [
    { key: 'pylontech.features.lifespan', icon: '🔄' },
    { key: 'pylontech.features.warranty', icon: '✅' },
    { key: 'pylontech.features.safety', icon: '🛡️' },
    { key: 'pylontech.features.efficiency', icon: '⚡' },
  ];

  return (
    <Layout>
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />{t('pylontech.authorized')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pylontech.title')}</h1>
            <p className="text-lg opacity-90 mb-8">{t('pylontech.subtitle')}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.key} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="font-medium text-sm text-center">{t(feature.key)}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">{t('contact.whatsapp')}</a>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-surface">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t('pylontech.whyTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: isRTL ? 'عمر افتراضي طويل' : 'Long Lifespan', desc: isRTL ? 'أكثر من 6000 دورة شحن' : 'Over 6000 charge cycles' },
              { title: isRTL ? 'أمان عالي' : 'High Safety', desc: isRTL ? 'تقنية LiFePO4 الأكثر أماناً' : 'Safest LiFePO4 technology' },
              { title: isRTL ? 'ضمان شامل' : 'Full Warranty', desc: isRTL ? '10 سنوات ضمان المصنع' : '10 years factory warranty' },
            ].map((item, i) => (
              <div key={i} className="card-industrial p-6 text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
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
