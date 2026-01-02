import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import SEO from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';
import { pillarPages, supportingArticles } from '@/data/articles';

export default function KnowledgeHub() {
  const { lang: language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const pageTitle = language === 'ar' 
    ? 'مركز المعرفة | القطاع للطاقة الشمسية'
    : 'Knowledge Hub | Al-Qatta Solar Energy';
  
  const pageDescription = language === 'ar'
    ? 'أدلة ومقالات تعليمية شاملة عن الطاقة الشمسية وتخزين الطاقة في اليمن. معلومات موثوقة من الخبراء.'
    : 'Comprehensive educational guides and articles about solar energy and energy storage in Yemen. Reliable information from experts.';

  return (
    <Layout>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/knowledge"
        ogType="article"
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">
                {language === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub'}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <BookOpen className="h-3 w-3 me-1" />
                {language === 'ar' ? 'تعلّم من الخبراء' : 'Learn from Experts'}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {language === 'ar' 
                  ? 'مركز المعرفة'
                  : 'Knowledge Hub'}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {language === 'ar'
                  ? 'أدلة ومقالات تعليمية شاملة عن الطاقة الشمسية وتخزين الطاقة في اليمن. معلومات موثوقة تساعدك على اتخاذ القرار الصحيح.'
                  : 'Comprehensive educational guides and articles about solar energy and energy storage in Yemen. Reliable information to help you make the right decision.'}
              </p>
            </div>
          </div>
        </section>

        {/* Pillar Pages */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">
                  {language === 'ar' ? 'الأدلة الشاملة' : 'Comprehensive Guides'}
                </h2>
              </div>
              
              <div className="grid gap-6">
                {pillarPages.map((page) => {
                  const Icon = page.icon;
                  const isPublished = page.status === 'published';
                  
                  return (
                    <Card 
                      key={page.slug} 
                      className={`transition-all ${isPublished ? 'hover:border-primary/50 hover:shadow-md' : 'opacity-70'}`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">
                                {language === 'ar' ? page.titleAr : page.titleEn}
                              </CardTitle>
                              {!isPublished && (
                                <Badge variant="secondary" className="mt-1">
                                  {language === 'ar' ? 'قريباً' : 'Coming Soon'}
                                </Badge>
                              )}
                            </div>
                          </div>
                          {isPublished && (
                            <ArrowIcon className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <CardDescription className="mt-3 text-base">
                          {language === 'ar' ? page.descAr : page.descEn}
                        </CardDescription>
                      </CardHeader>
                      {isPublished && (
                        <CardContent>
                          <Link 
                            to={`/knowledge/${page.slug}`}
                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                          >
                            {language === 'ar' ? 'اقرأ الدليل' : 'Read Guide'}
                            <ArrowIcon className="h-4 w-4" />
                          </Link>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Articles */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">
                  {language === 'ar' ? 'مقالات داعمة' : 'Supporting Articles'}
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportingArticles.map((article) => {
                  const Icon = article.icon;
                  return (
                    <Link 
                      key={article.slug}
                      to={`/knowledge/${article.slug}`}
                      className="group"
                    >
                      <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {language === 'ar' ? article.titleAr : article.titleEn}
                              </h3>
                              <Badge variant="secondary" className="mt-2 text-xs">
                                {language === 'ar' ? article.pillarAr : article.pillarEn}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
