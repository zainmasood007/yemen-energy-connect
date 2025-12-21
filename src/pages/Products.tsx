import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Battery, Sun, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Products() {
  const { t, isRTL } = useLanguage();
  
  const categories = [
    { key: 'products.categories.pylontech', icon: Battery, highlight: true },
    { key: 'products.categories.lithium', icon: Battery },
    { key: 'products.categories.panels', icon: Sun },
    { key: 'products.categories.inverters', icon: Zap },
    { key: 'products.categories.controllers', icon: Zap },
    { key: 'products.categories.accessories', icon: Zap },
  ];

  return (
    <Layout>
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('products.title')}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('products.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.key} className={cn("group relative overflow-hidden rounded-lg p-8 transition-all hover:shadow-lg cursor-pointer", category.highlight ? "bg-primary text-primary-foreground" : "card-industrial hover:border-primary/50")}>
                <div className={cn("inline-flex items-center justify-center h-14 w-14 rounded-lg mb-4", category.highlight ? "bg-secondary text-secondary-foreground" : "bg-primary/10 text-primary")}><category.icon className="h-7 w-7" /></div>
                <h3 className="text-xl font-bold mb-2">{t(category.key)}</h3>
                <p className="text-sm opacity-80">{isRTL ? 'استكشف المنتجات' : 'Explore products'}</p>
                {category.highlight && <div className="absolute top-3 end-3 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">{isRTL ? 'وكيل معتمد' : 'Authorized'}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
