import { useMemo } from 'react';
import { useParams, useSearchParams, useLocation, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { useLanguage } from '@/i18n/LanguageContext';
import { projects, getProjectBySlug, typeIcons, typeLabels } from '@/data/projects';
import { allProducts } from '@/data/products';
import { useAdmin } from '@/admin/context/AdminContext';
import type { AdminProject } from '@/admin/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Sun, Battery, Calendar, ArrowLeft, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCategoryName } from '@/data/products/categories';

interface ViewProject {
  slug: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  type: AdminProject['type'];
  location: { ar: string; en: string };
  systemSize: string;
  batteryCapacity: string;
  panels: number;
  date: string;
  clientAr?: string;
  clientEn?: string;
  images: string[];
  features: { ar: string[]; en: string[] };
  productsUsedSlugs?: string[];
}

function mapAdminProjectToView(project: AdminProject): ViewProject {
  return {
    slug: project.slug,
    titleAr: project.titleAr,
    titleEn: project.titleEn,
    descAr: project.descAr,
    descEn: project.descEn,
    type: project.type,
    location: project.location,
    systemSize: project.systemSize,
    batteryCapacity: project.batteryCapacity,
    panels: project.panels,
    date: project.date,
    clientAr: project.clientAr,
    clientEn: project.clientEn,
    images: project.images,
    features: project.features,
    productsUsedSlugs: project.productsUsed,
  };
}

function mapStaticProjectToView(project: import('@/data/projects').Project): ViewProject {
  return {
    slug: project.slug || String(project.id),
    titleAr: project.titleAr,
    titleEn: project.titleEn,
    descAr: project.descAr,
    descEn: project.descEn,
    type: project.type,
    location: project.location,
    systemSize: project.systemSize,
    batteryCapacity: project.batteryCapacity,
    panels: project.panels,
    date: project.date,
    clientAr: project.clientAr,
    clientEn: project.clientEn,
    images: project.images,
    features: project.features,
    productsUsedSlugs: [],
  };
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { isRTL } = useLanguage();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { projects: adminProjects } = useAdmin();

  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const isPreview = import.meta.env.DEV && searchParams.get('preview') === '1';

  const project: ViewProject | undefined = useMemo(() => {
    if (!slug) return undefined;

    const staticProject = getProjectBySlug(slug);
    const staticView = staticProject ? mapStaticProjectToView(staticProject) : undefined;

    if (!isPreview) return staticView;

    const adminProject = adminProjects.find((p) => p.slug === slug);
    if (adminProject) return mapAdminProjectToView(adminProject);

    return staticView;
  }, [slug, isPreview, adminProjects]);

  if (!slug || !project) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <p className="text-lg font-semibold mb-2">{isRTL ? 'المشروع غير موجود' : 'Project not found'}</p>
          <p className="text-muted-foreground mb-6">
            {isRTL ? 'تحقق من الرابط أو اختر مشروعاً آخر من قائمة المشاريع.' : 'Please check the URL or choose another project from the projects list.'}
          </p>
          <Button asChild>
            <Link to={isEnPath ? '/en/projects' : '/projects'}>
              {isRTL ? 'العودة إلى جميع المشاريع' : 'Back to all projects'}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const TypeIcon = typeIcons[project.type];
  const typeLabel = typeLabels[project.type];
  const homePath = isEnPath ? '/en' : '/';
  const projectsPath = isEnPath ? '/en/projects' : '/projects';
  const currentPath = `${projectsPath}/${project.slug}`;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: pageLang === 'ar' ? 'الرئيسية' : 'Home', url: homePath },
    { name: pageLang === 'ar' ? 'مشاريعنا' : 'Our Projects', url: projectsPath },
    { name: isRTL ? project.titleAr : project.titleEn, url: currentPath },
  ]);

  const relatedProducts = (project.productsUsedSlugs || [])
    .map((slug) => allProducts.find((p) => p.slug === slug))
    .filter(Boolean);

  const panelProducts = relatedProducts.filter((product) => product!.category === 'panels');
  const inverterProducts = relatedProducts.filter((product) => product!.category === 'inverters');
  const batteryProducts = relatedProducts.filter((product) => product!.category === 'pylontech');

  return (
    <Layout>
      <SEO
        title={project.titleEn}
        titleAr={project.titleAr}
        description={project.descEn}
        descriptionAr={project.descAr}
        canonical={currentPath}
        lang={pageLang}
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="py-10 md:py-14 bg-primary text-primary-foreground">
        <div className="container grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 text-sm mb-4">
              <TypeIcon className="h-4 w-4" />
              <span>{isRTL ? typeLabel.ar : typeLabel.en}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3">
              {isRTL ? project.titleAr : project.titleEn}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mb-4">
              {isRTL ? project.descAr : project.descEn}
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {isRTL ? project.location.ar : project.location.en}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {project.date}
              </span>
              {project.clientAr && (
                <span className="inline-flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  {isRTL ? project.clientAr : project.clientEn}
                </span>
              )}
            </div>
          </div>

          {project.images[0] && (
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-background">
              <img
                src={project.images[0]}
                alt={isRTL ? project.titleAr : project.titleEn}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {project.images.length > 1 && (
                <div className="absolute bottom-3 end-3 flex gap-1">
                  {project.images.slice(0, 4).map((_, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        'h-1.5 w-1.5 rounded-full',
                        idx === 0 ? 'bg-primary-foreground' : 'bg-primary-foreground/50',
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Details */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/60">
              <div className="text-center">
                <Sun className="h-5 w-5 mx-auto text-secondary mb-1" />
                <div className="text-lg font-bold">{project.systemSize}</div>
                <div className="text-xs text-muted-foreground">{isRTL ? 'القدرة الكلية' : 'System Size'}</div>
              </div>
              <div className="text-center border-x border-border">
                <Battery className="h-5 w-5 mx-auto text-primary mb-1" />
                <div className="text-lg font-bold">{project.batteryCapacity}</div>
                <div className="text-xs text-muted-foreground">{isRTL ? 'سعة البطاريات' : 'Battery Capacity'}</div>
              </div>
              <div className="text-center">
                <div className="h-5 w-5 mx-auto flex items-center justify-center text-base font-black text-accent mb-1">
                  {project.panels}
                </div>
                <div className="text-xs text-muted-foreground">{isRTL ? 'عدد الألواح الشمسية' : 'Number of Panels'}</div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">
                {isRTL ? 'مميزات النظام' : 'System Highlights'}
              </h2>
              <div className="space-y-2">
                {(isRTL ? project.features.ar : project.features.en).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.images.length > 1 && (
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  {isRTL ? 'صور إضافية للمشروع' : 'Project Gallery'}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.images.slice(1).map((img, idx) => (
                    <div key={idx} className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            {(panelProducts.length > 0 || inverterProducts.length > 0 || batteryProducts.length > 0) && (
              <div className="p-5 rounded-xl border border-border bg-card">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Battery className="h-4 w-4" />
                  {isRTL ? 'المنتجات المستخدمة في هذا المشروع' : 'Products Used in This Project'}
                </h2>

                <div className="space-y-4">
                  {panelProducts.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-muted-foreground">
                        <Sun className="h-4 w-4 text-secondary" />
                        <span>{getCategoryName('panels', isRTL)}</span>
                      </div>
                      <div className="space-y-3">
                        {panelProducts.map((product) => (
                          <div key={product!.slug} className="flex items-center gap-3">
                            {product!.image && (
                              <img
                                src={product!.image}
                                alt={isRTL ? product!.nameAr : product!.nameEn}
                                className="h-12 w-12 rounded-md object-cover bg-muted"
                                loading="lazy"
                              />
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-semibold line-clamp-1">
                                {isRTL ? product!.nameAr : product!.nameEn}
                              </p>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {product!.brand} • {product!.model}
                              </p>
                              <Link
                                to={`${isEnPath ? '/en' : ''}/products/${product!.category}/${product!.slug}`}
                                className="text-xs text-primary hover:underline"
                              >
                                {isRTL ? 'عرض تفاصيل المنتج' : 'View product details'}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {inverterProducts.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-muted-foreground">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>{getCategoryName('inverters', isRTL)}</span>
                      </div>
                      <div className="space-y-3">
                        {inverterProducts.map((product) => (
                          <div key={product!.slug} className="flex items-center gap-3">
                            {product!.image && (
                              <img
                                src={product!.image}
                                alt={isRTL ? product!.nameAr : product!.nameEn}
                                className="h-12 w-12 rounded-md object-cover bg-muted"
                                loading="lazy"
                              />
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-semibold line-clamp-1">
                                {isRTL ? product!.nameAr : product!.nameEn}
                              </p>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {product!.brand} • {product!.model}
                              </p>
                              <Link
                                to={`${isEnPath ? '/en' : ''}/products/${product!.category}/${product!.slug}`}
                                className="text-xs text-primary hover:underline"
                              >
                                {isRTL ? 'عرض تفاصيل المنتج' : 'View product details'}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {batteryProducts.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-muted-foreground">
                        <Battery className="h-4 w-4 text-accent" />
                        <span>{getCategoryName('pylontech', isRTL)}</span>
                      </div>
                      <div className="space-y-3">
                        {batteryProducts.map((product) => (
                          <div key={product!.slug} className="flex items-center gap-3">
                            {product!.image && (
                              <img
                                src={product!.image}
                                alt={isRTL ? product!.nameAr : product!.nameEn}
                                className="h-12 w-12 rounded-md object-cover bg-muted"
                                loading="lazy"
                              />
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-semibold line-clamp-1">
                                {isRTL ? product!.nameAr : product!.nameEn}
                              </p>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {product!.brand} • {product!.model}
                              </p>
                              <Link
                                to={`${isEnPath ? '/en' : ''}/products/${product!.category}/${product!.slug}`}
                                className="text-xs text-primary hover:underline"
                              >
                                {isRTL ? 'عرض تفاصيل المنتج' : 'View product details'}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="p-5 rounded-xl bg-secondary text-secondary-foreground space-y-3">
              <h2 className="text-lg font-semibold">
                {isRTL ? 'هل تريد مشروعًا مشابهاً؟' : 'Want a Similar Project?'}
              </h2>
              <p className="text-sm text-secondary-foreground/80">
                {isRTL
                  ? 'تواصل معنا للحصول على استشارة مجانية وتصميم نظام يناسب احتياجاتك وحمل أحمالك الكهربائية.'
                  : 'Contact us for a free consultation and a system design tailored to your loads and requirements.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                  <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                    {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-secondary-foreground/40 text-secondary-foreground">
                  <Link to={isEnPath ? '/en/contact' : '/contact'}>
                    {isRTL ? 'طلب استشارة' : 'Request a consultation'}
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
