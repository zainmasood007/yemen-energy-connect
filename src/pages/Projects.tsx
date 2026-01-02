import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  MapPin, Battery, Sun, Calendar, CheckCircle,
  Filter, X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Phone,
  ArrowLeft, ArrowRight, Eye, Award, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO, { createBreadcrumbSchema, createFAQSchema } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { projects, typeIcons, typeLabels, typeColors, Project } from '@/data/projects';
import { useLocation } from 'react-router-dom';

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const homePath = isEnPath ? '/en' : '/';
  const projectsPath = isEnPath ? '/en/projects' : '/projects';

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: pageLang === 'ar' ? 'الرئيسية' : 'Home', url: homePath },
    { name: pageLang === 'ar' ? 'مشاريعنا' : 'Our Projects', url: projectsPath },
  ]);

  const projectsFaqSchema = createFAQSchema([
    {
      question: pageLang === 'ar' ? 'ما أنواع المشاريع التي تنفذونها؟' : 'What types of projects do you implement?',
      answer: pageLang === 'ar'
        ? 'ننّفذ مشاريع طاقة شمسية سكنية وتجارية وصناعية، من الأنظمة الصغيرة للمنازل إلى الأنظمة المتكاملة للمصانع والمنشآت.'
        : 'We implement residential, commercial, and industrial solar projects, from small home systems to large-scale integrated systems.',
    },
    {
      question: pageLang === 'ar' ? 'هل تعملون في جميع محافظات اليمن؟' : 'Do you work in all Yemeni governorates?',
      answer: pageLang === 'ar'
        ? 'نعم، لدينا مشاريع في أغلب محافظات اليمن، ويمكننا تنفيذ المشاريع في المدن الرئيسية والمناطق البعيدة مع ترتيب اللوجستيات المناسبة.'
        : 'Yes, we have projects in most Yemeni governorates and can work in major cities and remote areas with appropriate logistics.',
    },
    {
      question: pageLang === 'ar' ? 'هل يمكن زيارة أحد مشاريعكم؟' : 'Can I visit one of your projects?',
      answer: pageLang === 'ar'
        ? 'يمكن ترتيب زيارة لبعض المشاريع المناسبة بالتنسيق المسبق، حتى تتعرّف على جودة التنفيذ على أرض الواقع.'
        : 'We can arrange visits to selected reference projects upon prior coordination so you can see the quality of our work in reality.',
    },
  ]);
  const openGallery = (project: Project, imageIndex: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <Layout>
      <SEO
        title="Solar Projects Portfolio Yemen | Al-Qatta Solar Energy"
        titleAr="معرض مشاريع الطاقة الشمسية في اليمن | القطاع للطاقة الشمسية"
        description="View our completed solar energy projects in Yemen. Residential, commercial, and industrial solar installations with Pylontech batteries."
        descriptionAr="شاهد مشاريع الطاقة الشمسية المنجزة في اليمن. تركيبات طاقة شمسية سكنية وتجارية وصناعية مع بطاريات Pylontech."
        keywords="solar projects yemen, solar installation portfolio, pylontech projects yemen"
        keywordsAr="مشاريع طاقة شمسية اليمن، معرض تركيبات شمسية، مشاريع بايلونتيك اليمن"
        canonical={isEnPath ? '/en/projects' : '/projects'}
        lang={pageLang}
        jsonLd={[breadcrumbSchema, projectsFaqSchema]}
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              <span>{isRTL ? '+500 مشروع ناجح' : '500+ Successful Projects'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              {isRTL ? 'مشاريعنا المنجزة' : 'Our Completed Projects'}
            </h1>
            <p className="text-primary-foreground/80">
              {isRTL 
                ? 'نفخر بتقديم مشاريع عالية الجودة في جميع أنحاء اليمن'
                : 'We are proud to deliver high-quality projects across Yemen'}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '500+', labelEn: 'Projects', labelAr: 'مشروع منجز', icon: Award },
              { value: '2 MW+', labelEn: 'Installed', labelAr: 'قدرة مركبة', icon: Zap },
              { value: '18', labelEn: 'Governorates', labelAr: 'محافظة', icon: MapPin },
              { value: '98%', labelEn: 'Satisfaction', labelAr: 'رضا العملاء', icon: CheckCircle },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon className="h-5 w-5 text-secondary-foreground/70 mb-1" />
                <div className="text-xl md:text-2xl font-black text-secondary-foreground">{stat.value}</div>
                <div className="text-xs text-secondary-foreground/75">{isRTL ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-surface border-b border-border sticky top-16 z-40">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('all')}
              className="shrink-0"
            >
              <Filter className="h-4 w-4" />
              {isRTL ? 'الكل' : 'All'}
            </Button>
            {Object.entries(typeLabels).map(([key, label]) => {
              const Icon = typeIcons[key as keyof typeof typeIcons];
              return (
                <Button
                  key={key}
                  variant={activeFilter === key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(key)}
                  className="shrink-0"
                >
                  <Icon className="h-4 w-4" />
                  {isRTL ? label.ar : label.en}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const TypeIcon = typeIcons[project.type];
              const typeLabel = typeLabels[project.type];
              const typeColor = typeColors[project.type];
              
              return (
                <article 
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Image Gallery */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={isRTL ? project.titleAr : project.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => openGallery(project)}
                      >
                        <ZoomIn className="h-4 w-4" />
                        {isRTL ? 'عرض الصور' : 'View Gallery'}
                        {project.images.length > 1 && ` (${project.images.length})`}
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 start-3">
                      <Badge className={cn("text-white", typeColor)}>
                        <TypeIcon className="h-3 w-3" />
                        {isRTL ? typeLabel.ar : typeLabel.en}
                      </Badge>
                    </div>
                    <div className="absolute top-3 end-3">
                      <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                        <Calendar className="h-3 w-3" />
                        {project.date}
                      </Badge>
                    </div>

                    {/* Image count indicator */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 end-3 flex gap-1">
                        {project.images.slice(0, 4).map((_, idx) => (
                          <div 
                            key={idx}
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              idx === 0 ? "bg-white" : "bg-white/50"
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Location & Client */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{isRTL ? project.location.ar : project.location.en}</span>
                      </div>
                      {project.clientAr && (
                        <span className="text-xs">{isRTL ? project.clientAr : project.clientEn}</span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {isRTL ? project.titleAr : project.titleEn}
                    </h3>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Sun className="h-4 w-4 mx-auto text-secondary mb-0.5" />
                        <div className="text-sm font-bold">{project.systemSize}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'القدرة' : 'Power'}</div>
                      </div>
                      <div className="text-center border-x border-border">
                        <Battery className="h-4 w-4 mx-auto text-primary mb-0.5" />
                        <div className="text-sm font-bold">{project.batteryCapacity}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'التخزين' : 'Storage'}</div>
                      </div>
                      <div className="text-center">
                        <div className="h-4 w-4 mx-auto text-accent mb-0.5 flex items-center justify-center text-sm font-bold">{project.panels}</div>
                        <div className="text-sm font-bold">{isRTL ? 'لوح' : 'Panels'}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'شمسي' : 'Solar'}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 mb-4">
                      {(isRTL ? project.features.ar : project.features.en).slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-success shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Gallery Button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => openGallery(project)}
                    >
                      <Eye className="h-4 w-4" />
                      {isRTL ? 'عرض التفاصيل' : 'View Details'}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground">
                {isRTL ? 'لا توجد مشاريع في هذا التصنيف' : 'No projects in this category'}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container">
          <div className="bg-secondary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-3">
              {isRTL ? 'هل تريد مشروعاً مثل هذه المشاريع؟' : 'Want a Project Like These?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-lg mx-auto text-sm">
              {isRTL 
                ? 'تواصل معنا الآن للحصول على استشارة مجانية وتصميم نظام مخصص لاحتياجاتك'
                : 'Contact us now for a free consultation and a custom system design for your needs'}
            </p>
            <Button asChild size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Gallery Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <button 
            className="absolute top-4 end-4 text-background hover:text-secondary transition-colors"
            onClick={closeGallery}
          >
            <X className="h-8 w-8" />
          </button>

          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              <img 
                src={selectedProject.images[currentImageIndex]}
                alt={isRTL ? selectedProject.titleAr : selectedProject.titleEn}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    className="absolute start-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="absolute end-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 start-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {selectedProject.images.length > 1 && (
              <div className="flex justify-center gap-2">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={cn(
                      "h-16 w-24 rounded-md overflow-hidden border-2 transition-colors",
                      idx === currentImageIndex ? "border-secondary" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Project Info */}
            <div className="mt-4 text-center text-background">
              <h3 className="text-lg font-bold">
                {isRTL ? selectedProject.titleAr : selectedProject.titleEn}
              </h3>
              <div className="flex items-center justify-center gap-4 text-sm text-background/70 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {isRTL ? selectedProject.location.ar : selectedProject.location.en}
                </span>
                <span className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
                  {selectedProject.systemSize}
                </span>
                <span className="flex items-center gap-1">
                  <Battery className="h-4 w-4" />
                  {selectedProject.batteryCapacity}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
