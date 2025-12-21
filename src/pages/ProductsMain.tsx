import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight, Battery, Sun, Zap, Gauge, Sparkles, Shield, Award, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { categories, getFeaturedProducts, getProductsCountByCategory } from '@/data/products';

const categoryIcons: Record<string, typeof Battery> = {
  pylontech: Battery,
  panels: Sun,
  inverters: Zap,
  controllers: Gauge,
};

export default function ProductsMain() {
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const featuredProducts = getFeaturedProducts();
  const productCounts = getProductsCountByCategory();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'منتجاتنا' : 'Our Products', url: '/products' },
  ]);

  return (
    <Layout>
      <SEO
        title="Solar Products in Yemen | Pylontech Batteries, Solar Panels, Inverters"
        titleAr="منتجات الطاقة الشمسية في اليمن | بطاريات Pylontech، ألواح شمسية، انفرترات"
        description="Complete solar energy products catalog in Yemen. Original Pylontech batteries with 10-year warranty, high-efficiency solar panels, hybrid inverters, and charge controllers."
        descriptionAr="كتالوج منتجات الطاقة الشمسية الشامل في اليمن. بطاريات Pylontech الأصلية بضمان 10 سنوات، ألواح شمسية عالية الكفاءة، انفرترات هجينة، ومنظمات شحن."
        keywords="solar products yemen, pylontech batteries, solar panels yemen, inverters, charge controllers, energy storage"
        keywordsAr="منتجات طاقة شمسية اليمن، بطاريات بايلونتيك، ألواح شمسية، انفرترات، منظمات شحن، تخزين طاقة"
        canonical="/products"
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>{isRTL ? 'منتجات أصلية مع ضمان' : 'Original Products with Warranty'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              {isRTL ? 'منتجاتنا' : 'Our Products'}
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              {isRTL 
                ? 'أفضل منتجات الطاقة الشمسية وتخزين الطاقة من علامات تجارية عالمية موثوقة'
                : 'Best solar and energy storage products from trusted global brands'}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { icon: Shield, textAr: 'منتجات أصلية 100%', textEn: '100% Original Products' },
              { icon: Award, textAr: 'ضمان حقيقي', textEn: 'Real Warranty' },
              { icon: Phone, textAr: 'دعم فني 24/7', textEn: '24/7 Technical Support' },
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <benefit.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{isRTL ? benefit.textAr : benefit.textEn}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isRTL ? 'تصفح حسب الفئة' : 'Browse by Category'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'اختر الفئة التي تناسب احتياجاتك للاطلاع على المنتجات المتاحة'
                : 'Select the category that suits your needs to view available products'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category.slug] || Battery;
              const count = productCounts[category.slug] || 0;
              const isPylontech = category.slug === 'pylontech';
              
              return (
                <Link
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  className={`group relative bg-card border rounded-2xl p-6 hover:shadow-xl transition-all ${
                    isPylontech ? 'border-primary/50 ring-2 ring-primary/20' : 'border-border hover:border-primary/30'
                  }`}
                >
                  {isPylontech && (
                    <Badge className="absolute -top-2 end-4 bg-primary text-primary-foreground">
                      {isRTL ? 'الوكيل المعتمد' : 'Authorized Agent'}
                    </Badge>
                  )}
                  
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl mb-4 ${
                    isPylontech ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <CategoryIcon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {isRTL ? category.nameAr : category.nameEn}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {isRTL ? category.descriptionAr : category.descriptionEn}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {count} {isRTL ? 'منتج' : 'products'}
                    </span>
                    <span className="text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      <Arrow className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {isRTL ? 'المنتجات المميزة' : 'Featured Products'}
              </h2>
              <p className="text-muted-foreground">
                {isRTL ? 'أكثر المنتجات طلباً ومبيعاً' : 'Most requested and best-selling products'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.category}/${product.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                    <img
                      src={product.image}
                      alt={isRTL ? product.nameAr : product.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 end-2 bg-secondary text-secondary-foreground text-xs">
                      {isRTL ? 'مميز' : 'Featured'}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {isRTL ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {isRTL ? product.shortDescAr : product.shortDescEn}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Buy From Us */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {isRTL ? 'لماذا تشتري منا؟' : 'Why Buy From Us?'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  titleAr: 'الوكيل المعتمد الوحيد لـ Pylontech',
                  titleEn: 'Only Authorized Pylontech Agent',
                  descAr: 'ضمان المصنع الأصلي مباشرة من الشركة الأم',
                  descEn: 'Original factory warranty directly from the manufacturer',
                },
                {
                  titleAr: 'منتجات أصلية 100%',
                  titleEn: '100% Original Products',
                  descAr: 'جميع منتجاتنا أصلية ومستوردة مباشرة من المصانع',
                  descEn: 'All our products are original and imported directly from factories',
                },
                {
                  titleAr: 'دعم فني متخصص',
                  titleEn: 'Specialized Technical Support',
                  descAr: 'فريق مهندسين متخصص في تصميم وتركيب الأنظمة',
                  descEn: 'Engineering team specialized in system design and installation',
                },
                {
                  titleAr: 'تغطية شاملة',
                  titleEn: 'Comprehensive Coverage',
                  descAr: 'فروع في جميع المحافظات الرئيسية مع خدمة توصيل',
                  descEn: 'Branches in all major governorates with delivery service',
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold mb-2">{isRTL ? item.titleAr : item.titleEn}</h3>
                  <p className="text-sm text-muted-foreground">{isRTL ? item.descAr : item.descEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? 'لم تجد ما تبحث عنه؟' : "Can't Find What You're Looking For?"}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'تواصل معنا وسنساعدك في إيجاد المنتج المناسب أو طلب منتج خاص'
                : "Contact us and we'll help you find the right product or order a special one"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                  {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/contact">
                  {isRTL ? 'صفحة التواصل' : 'Contact Page'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
