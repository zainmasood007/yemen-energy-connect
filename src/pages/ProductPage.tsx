import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  ArrowLeft, ArrowRight, Battery, Sun, Zap, Gauge, Phone, CheckCircle, XCircle,
  Thermometer, Droplets, Wind, Shield, Home, Building2, Store, HelpCircle,
  ChevronDown, Star, MapPin, Wrench, FileText, Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO, { createBreadcrumbSchema, createProductSchema, createFAQSchema } from '@/components/SEO';
import { getProductBySlug, getRelatedProducts, getCategoryBySlug, Product } from '@/data/products';
import { cn } from '@/lib/utils';

// Icon mapping for use cases
const useCaseIcons: Record<string, typeof Home> = {
  Home: Home,
  Building2: Building2,
  Store: Store,
  Shield: Shield,
  Castle: Home,
  Building: Building2,
  Landmark: Building2,
};

// Rating component
const RatingBar = ({ value, label }: { value: number; label: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm text-muted-foreground w-32 flex-shrink-0">{label}</span>
    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
      <div 
        className={cn(
          "h-full rounded-full transition-all",
          value >= 4 ? "bg-success" : value >= 3 ? "bg-warning" : "bg-destructive"
        )}
        style={{ width: `${(value / 5) * 100}%` }}
      />
    </div>
    <span className="text-sm font-medium w-8">{value}/5</span>
  </div>
);

export default function ProductPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const product = getProductBySlug(category || '', slug || '');
  const categoryData = getCategoryBySlug(category || '');

  if (!product || !categoryData) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{isRTL ? 'المنتج غير موجود' : 'Product Not Found'}</h1>
          <Link to="/products" className="text-primary hover:underline">
            {isRTL ? 'العودة للمنتجات' : 'Back to Products'}
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  // SEO Schemas
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'منتجاتنا' : 'Products', url: '/products' },
    { name: isRTL ? categoryData.nameAr : categoryData.nameEn, url: `/products/${category}` },
    { name: isRTL ? product.nameAr : product.nameEn, url: `/products/${category}/${slug}` },
  ]);

  const productSchema = createProductSchema({
    name: product.nameEn,
    description: product.shortDescEn,
    brand: product.brand,
    category: categoryData.nameEn,
  });

  const faqSchema = createFAQSchema(
    product.faqs.map(faq => ({
      question: isRTL ? faq.questionAr : faq.questionEn,
      answer: isRTL ? faq.answerAr : faq.answerEn,
    }))
  );

  return (
    <Layout>
      <SEO
        title={product.seoTitleEn}
        titleAr={product.seoTitleAr}
        description={product.seoDescriptionEn}
        descriptionAr={product.seoDescriptionAr}
        keywords={product.seoKeywordsEn.join(', ')}
        keywordsAr={product.seoKeywordsAr.join('، ')}
        canonical={`/products/${category}/${slug}`}
        jsonLd={[breadcrumbSchema, productSchema, faqSchema]}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-surface border-b border-border">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
            <Link to="/" className="hover:text-primary whitespace-nowrap">{isRTL ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary whitespace-nowrap">{isRTL ? 'المنتجات' : 'Products'}</Link>
            <span>/</span>
            <Link to={`/products/${category}`} className="hover:text-primary whitespace-nowrap">
              {isRTL ? categoryData.nameAr : categoryData.nameEn}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium whitespace-nowrap">{product.model}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={isRTL ? product.nameAr : product.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.isFeatured && (
                <Badge className="absolute top-4 end-4 bg-secondary text-secondary-foreground text-sm px-3 py-1">
                  <Star className="h-4 w-4 me-1" />
                  {isRTL ? 'منتج مميز' : 'Featured'}
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm text-muted-foreground mb-2">{product.brand} • {product.model}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {isRTL ? product.nameAr : product.nameEn}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {isRTL ? product.shortDescAr : product.shortDescEn}
              </p>

              {/* Key Takeaways */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-success mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {isRTL ? 'ملخص سريع' : 'Key Takeaways'}
                </h3>
                <ul className="space-y-2">
                  {product.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{isRTL ? takeaway.ar : takeaway.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild size="lg" className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4" />
                    {isRTL ? 'طلب عرض سعر' : 'Request Quote'}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <a href={`tel:+967777777777`}>
                    <Phone className="h-4 w-4" />
                    {isRTL ? 'اتصل بنا' : 'Call Us'}
                  </a>
                </Button>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-3">
                {product.specifications.slice(0, 4).map((spec, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-primary">{spec.value} {spec.unit}</div>
                    <div className="text-xs text-muted-foreground">{isRTL ? spec.keyAr : spec.keyEn}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isRTL ? 'وصف المنتج' : 'Product Description'}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
              {isRTL ? product.fullDescAr : product.fullDescEn}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {isRTL ? 'المواصفات التقنية' : 'Technical Specifications'}
            </h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "bg-muted/30" : "")}>
                      <td className="px-4 py-3 font-medium">{isRTL ? spec.keyAr : spec.keyEn}</td>
                      <td className="px-4 py-3 text-end">{spec.value} {spec.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Yemen Suitability */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              {isRTL ? 'لماذا هذا المنتج مناسب لليمن؟' : 'Why is This Product Suitable for Yemen?'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Ratings */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4">{isRTL ? 'تقييم الملاءمة' : 'Suitability Ratings'}</h3>
                <div className="space-y-4">
                  <RatingBar 
                    value={product.yemenSuitability.ratings.heatResistance} 
                    label={isRTL ? 'مقاومة الحرارة' : 'Heat Resistance'} 
                  />
                  <RatingBar 
                    value={product.yemenSuitability.ratings.coastalSuitability} 
                    label={isRTL ? 'المناطق الساحلية' : 'Coastal Areas'} 
                  />
                  <RatingBar 
                    value={product.yemenSuitability.ratings.powerOutageSupport} 
                    label={isRTL ? 'دعم الانقطاعات' : 'Outage Support'} 
                  />
                  <RatingBar 
                    value={product.yemenSuitability.ratings.dustResistance} 
                    label={isRTL ? 'مقاومة الغبار' : 'Dust Resistance'} 
                  />
                </div>
              </div>

              {/* Best Regions */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4">{isRTL ? 'أفضل المناطق' : 'Best Regions'}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(isRTL ? product.yemenSuitability.bestRegionsAr : product.yemenSuitability.bestRegionsEn).map((region, i) => (
                    <Link 
                      key={i}
                      to={`/locations/${region.toLowerCase().replace("'", '').replace(' ', '')}`}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {region}
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? product.yemenSuitability.climateNotesAr : product.yemenSuitability.climateNotesEn}
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-muted-foreground">
                {isRTL ? product.yemenSuitability.explanationAr : product.yemenSuitability.explanationEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isRTL ? 'حالات الاستخدام' : 'Use Cases'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.useCases.map((useCase, i) => {
                const UseCaseIcon = useCaseIcons[useCase.icon] || Home;
                return (
                  <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4">
                      <UseCaseIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">{isRTL ? useCase.titleAr : useCase.titleEn}</h3>
                    <p className="text-sm text-muted-foreground">{isRTL ? useCase.descAr : useCase.descEn}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isRTL ? 'متى يُنصح بهذا المنتج؟' : 'When is This Product Recommended?'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recommended */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-6">
                <h3 className="font-bold text-success mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {isRTL ? 'يُنصح به لـ' : 'Recommended For'}
                </h3>
                <ul className="space-y-2">
                  {(isRTL ? product.recommendedForAr : product.recommendedForEn).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Recommended */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                <h3 className="font-bold text-destructive mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  {isRTL ? 'لا يُنصح به لـ' : 'Not Recommended For'}
                </h3>
                <ul className="space-y-2">
                  {(isRTL ? product.notRecommendedForAr : product.notRecommendedForEn).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      {product.comparisons.length > 0 && (
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{isRTL ? 'مقارنة مع منتجات أخرى' : 'Comparison with Other Products'}</h2>
              <div className="space-y-4">
                {product.comparisons.map((comparison, i) => {
                  const comparedProduct = getProductBySlug(category || '', comparison.productSlug);
                  if (!comparedProduct) return null;
                  
                  return (
                    <div key={i} className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold">
                          {product.model} vs {comparedProduct.model}
                        </h3>
                        <Link 
                          to={`/products/${category}/${comparison.productSlug}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {isRTL ? 'عرض المنتج' : 'View Product'}
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-success mb-2">
                            {isRTL ? `مميزات ${product.model}` : `${product.model} Advantages`}
                          </div>
                          <ul className="space-y-1">
                            {(isRTL ? comparison.pros.ar : comparison.pros.en).map((pro, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3.5 w-3.5 text-success" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-destructive mb-2">
                            {isRTL ? `عيوب ${product.model}` : `${product.model} Disadvantages`}
                          </div>
                          <ul className="space-y-1">
                            {(isRTL ? comparison.cons.ar : comparison.cons.en).map((con, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm">
                                <XCircle className="h-3.5 w-3.5 text-destructive" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" />
              {isRTL ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {product.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-start font-medium">{isRTL ? faq.questionAr : faq.questionEn}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {isRTL ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{isRTL ? 'منتجات ذات صلة' : 'Related Products'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/products/${related.category}/${related.slug}`}
                    className="bg-card border border-border rounded-xl p-4 hover:shadow-md hover:border-primary/30 transition-all group"
                  >
                    <div className="aspect-video bg-muted rounded-lg mb-3 overflow-hidden">
                      <img
                        src={related.image}
                        alt={isRTL ? related.nameAr : related.nameEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">{related.brand} • {related.model}</div>
                    <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {isRTL ? related.nameAr : related.nameEn}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services & Locations */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Related Services */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  {isRTL ? 'خدمات ذات صلة' : 'Related Services'}
                </h3>
                <div className="space-y-2">
                  {product.relatedServiceKeys.slice(0, 3).map((serviceKey, i) => (
                    <Link
                      key={i}
                      to="/services"
                      className="flex items-center gap-2 text-sm p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{serviceKey === 'installation' ? (isRTL ? 'تركيب الأنظمة' : 'System Installation') :
                             serviceKey === 'storage' ? (isRTL ? 'تخزين الطاقة' : 'Energy Storage') :
                             serviceKey === 'maintenance' ? (isRTL ? 'الصيانة والدعم' : 'Maintenance & Support') :
                             serviceKey === 'consultation' ? (isRTL ? 'الاستشارات' : 'Consultation') :
                             (isRTL ? 'دراسة الجدوى' : 'Feasibility Study')}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Locations */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {isRTL ? 'متوفر في' : 'Available In'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.relatedLocationSlugs.map((locationSlug, i) => (
                    <Link
                      key={i}
                      to={`/locations/${locationSlug}`}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {locationSlug === 'sanaa' ? (isRTL ? 'صنعاء' : "Sana'a") :
                       locationSlug === 'aden' ? (isRTL ? 'عدن' : 'Aden') :
                       locationSlug === 'taiz' ? (isRTL ? 'تعز' : 'Taiz') :
                       locationSlug === 'hudaydah' ? (isRTL ? 'الحديدة' : 'Hudaydah') :
                       locationSlug === 'marib' ? (isRTL ? 'مأرب' : 'Marib') :
                       locationSlug}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? `هل ${product.model} مناسب لاحتياجاتك؟` : `Is ${product.model} Right for Your Needs?`}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص'
                : 'Contact us for a free consultation and customized quote'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                  {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="tel:+967777777777">
                  <Phone className="h-4 w-4" />
                  {isRTL ? 'اتصل بنا' : 'Call Us'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
