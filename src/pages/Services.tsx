import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Services() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const services = [
    { key: 'services.items.design', icon: '📐' },
    { key: 'services.items.installation', icon: '🔧' },
    { key: 'services.items.storage', icon: '🔋' },
    { key: 'services.items.consultation', icon: '💡' },
    { key: 'services.items.maintenance', icon: '🛠️' },
    { key: 'services.items.assessment', icon: '📊' },
  ];

  return (
    <Layout>
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.key} className="group card-industrial p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{t(`${service.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(`${service.key}.desc`)}</p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary">
                  {t('common.learnMore')}<Arrow className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
