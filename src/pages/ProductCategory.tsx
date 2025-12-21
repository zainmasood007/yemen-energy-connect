import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight, Battery, Sun, Zap, Gauge, Filter, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { categories, getProductsByCategory, getCategoryBySlug, ProductCategory as CategoryType } from '@/data/products';

const categoryIcons: Record<string, typeof Battery> = {
  pylontech: Battery,
  panels: Sun,
  inverters: Zap,
  controllers: Gauge,
};

export default function ProductCategory() {
  const { category } = useParams<{ category: string }>();
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const categoryData = getCategoryBySlug(category || '');
  const products = getProductsByCategory(category as CategoryType);

  if (!categoryData) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{isRTL ? 'الفئة غير موجودة' : 'Category Not Found'}</h1>
          <Link to="/products" className="text-primary hover:underline">
            {isRTL ? 'العودة للمنتجات' : 'Back to Products'}
          </Link>
        </div>
      </Layout>
    );
  }

  const CategoryIcon = categoryIcons[category || ''] || Battery;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'منتجاتنا' : 'Products', url: '/products' },
    { name: isRTL ? categoryData.nameAr : categoryData.nameEn, url: `/products/${category}` },
  ]);

  return (
    <Layout>
      <SEO
        title={`${categoryData.nameEn} in Yemen | Al-Qatta Solar Energy`}
        titleAr={`${categoryData.nameAr} في اليمن | القطاع للطاقة الشمسية`}
        description={categoryData.descriptionEn}
        descriptionAr={categoryData.descriptionAr}
        canonical={`/products/${category}`}
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary/20 text-secondary mb-6">
              <CategoryIcon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isRTL ? categoryData.nameAr : categoryData.nameEn}
            </h1>
            <p className="text-lg opacity-90">
              {isRTL ? categoryData.descriptionAr : categoryData.descriptionEn}
            </p>
          </div>
        </div>
      </section>

      {/* Products Count */}
      <section className="py-6 bg-surface border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>
                {products.length} {isRTL ? 'منتج' : 'products'}
              </span>
            </div>
            <Link to="/products" className="text-sm text-primary hover:underline flex items-center gap-1">
              {isRTL ? <ArrowRight className="h-4 w-4" /> : null}
              {isRTL ? 'جميع الفئات' : 'All Categories'}
              {!isRTL ? <ArrowLeft className="h-4 w-4" /> : null}
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${category}/${product.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  {/* Product Image */}
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={isRTL ? product.nameAr : product.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isFeatured && (
                      <Badge className="absolute top-3 end-3 bg-secondary text-secondary-foreground">
                        <Star className="h-3 w-3 me-1" />
                        {isRTL ? 'مميز' : 'Featured'}
                      </Badge>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <div className="text-xs text-muted-foreground mb-1">{product.brand} • {product.model}</div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {isRTL ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {isRTL ? product.shortDescAr : product.shortDescEn}
                    </p>

                    {/* Key Specs */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {spec.value} {spec.unit}
                        </span>
                      ))}
                    </div>

                    {/* Yemen Suitability Preview */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-3">
                      <CheckCircle className="h-3.5 w-3.5 text-success" />
                      <span>{isRTL ? 'مناسب لظروف اليمن' : 'Suitable for Yemen conditions'}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      {isRTL ? 'عرض التفاصيل' : 'View Details'}
                      <Arrow className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-4">
                <CategoryIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-bold mb-2">
                {isRTL ? 'لا توجد منتجات حالياً' : 'No Products Available'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {isRTL ? 'سيتم إضافة المنتجات قريباً' : 'Products will be added soon'}
              </p>
              <Button asChild>
                <Link to="/contact">
                  {isRTL ? 'تواصل معنا للاستفسار' : 'Contact Us for Inquiries'}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Category Benefits */}
      {category === 'pylontech' && (
        <section className="py-16 bg-surface">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">
                {isRTL ? 'لماذا بطاريات Pylontech؟' : 'Why Pylontech Batteries?'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { valueAr: '10', valueEn: '10', labelAr: 'سنوات ضمان', labelEn: 'Years Warranty' },
                  { valueAr: '6000+', valueEn: '6000+', labelAr: 'دورة شحن', labelEn: 'Charge Cycles' },
                  { valueAr: '95%', valueEn: '95%', labelAr: 'كفاءة', labelEn: 'Efficiency' },
                  { valueAr: '#1', valueEn: '#1', labelAr: 'عالمياً', labelEn: 'Worldwide' },
                ].map((stat, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {isRTL ? stat.valueAr : stat.valueEn}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isRTL ? stat.labelAr : stat.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? 'هل تحتاج مساعدة في اختيار المنتج المناسب؟' : 'Need Help Choosing the Right Product?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'خبراؤنا جاهزون لمساعدتك في اختيار الحل الأمثل لاحتياجاتك'
                : 'Our experts are ready to help you choose the optimal solution for your needs'}
            </p>
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                {isRTL ? 'تواصل مع خبير' : 'Talk to an Expert'}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
