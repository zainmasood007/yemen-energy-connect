import { Link, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import SEO, { createBreadcrumbSchema, createFAQSchema } from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';
import { pillarPages, supportingArticles } from '@/data/articles';

export default function KnowledgeHub() {
  const { lang: uiLang, isRTL } = useLanguage();
  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const pageTitle = pageLang === 'ar' 
    ? 'مركز المعرفة للطاقة الشمسية في اليمن | القطاع'
    : 'Solar Knowledge Hub Yemen | Al-Qatta Solar';
  
  const pageDescription = pageLang === 'ar'
    ? 'مركز المعرفة للطاقة الشمسية في اليمن: أدلة شاملة عن الأنظمة، البطاريات، الانفرترات والتكلفة، مكتوبة خصيصاً لظروف اليمن.'
    : 'Solar knowledge hub for Yemen: complete guides on systems, batteries, inverters and costs, written specifically for Yemeni conditions.';
  
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: pageLang === 'ar' ? 'الرئيسية' : 'Home', url: '/' },
    { name: pageLang === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub', url: pageLang === 'ar' ? '/knowledge' : '/en/knowledge' },
  ]);

  const knowledgeFaqs = pageLang === 'ar'
    ? [
        {
          question: 'من أين أبدأ إذا كنت جديداً على الطاقة الشمسية؟',
          answer:
            'ابدأ بقراءة دليل "مدخل إلى الطاقة الشمسية في اليمن" ثم انتقل إلى مقالات تصميم الأنظمة وتكلفة النظام لتكوين صورة واضحة قبل التواصل معنا للاستشارة.'
        },
        {
          question: 'هل المحتوى في مركز المعرفة مخصص لليمن فقط؟',
          answer:
            'نعم، جميع الأدلة والمقالات مكتوبة خصيصاً لظروف اليمن: انقطاع الكهرباء الطويل، الغبار، الحرارة العالية، والمناطق الساحلية.'
        },
        {
          question: 'هل هذه المقالات بديلة عن دراسة فنية للنظام؟',
          answer:
            'المقالات تعطيك فهماً عميقاً ومهماً، لكنها لا تغني عن دراسة حمل تفصيلية لنظامك. ننصح دائماً بالتواصل معنا بعد القراءة لتصميم نظام يناسب بيتك أو مشروعك.'
        },
      ]
    : [
        {
          question: 'Where should I start if I am new to solar?',
          answer:
            'Start with the introductory guide about solar energy in Yemen, then read the sizing and cost articles to get a clear picture before contacting us for a tailored design.'
        },
        {
          question: 'Is the Knowledge Hub content specific to Yemen?',
          answer:
            'Yes, all guides and articles are written for Yemeni conditions: long outages, dust, high temperatures and coastal climates.'
        },
        {
          question: 'Can these articles replace a technical system design?',
          answer:
            'The articles give you strong background knowledge but do not replace a detailed load assessment. We still recommend contacting us after reading to design a system tailored to your home or business.'
        },
      ];

  const faqSchema = createFAQSchema(knowledgeFaqs);


  return (
    <Layout>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={isEnPath ? '/en/knowledge' : '/knowledge'}
        lang={pageLang}
        ogType="article"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                {uiLang === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">
                {uiLang === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub'}
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
                {uiLang === 'ar' ? 'تعلّم من الخبراء' : 'Learn from Experts'}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {uiLang === 'ar' 
                  ? 'مركز المعرفة'
                  : 'Knowledge Hub'}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {uiLang === 'ar'
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
                  {uiLang === 'ar' ? 'الأدلة الشاملة' : 'Comprehensive Guides'}
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
                                {uiLang === 'ar' ? page.titleAr : page.titleEn}
                              </CardTitle>
                              {!isPublished && (
                                <Badge variant="secondary" className="mt-1">
                                  {uiLang === 'ar' ? 'قريباً' : 'Coming Soon'}
                                </Badge>
                              )}
                            </div>
                          </div>
                          {isPublished && (
                            <ArrowIcon className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <CardDescription className="mt-3 text-base">
                          {uiLang === 'ar' ? page.descAr : page.descEn}
                        </CardDescription>
                      </CardHeader>
                      {isPublished && (
                        <CardContent>
                          <Link 
                            to={`/knowledge/${page.slug}`}
                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                          >
                            {uiLang === 'ar' ? 'اقرأ الدليل' : 'Read Guide'}
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
                  {uiLang === 'ar' ? 'مقالات داعمة' : 'Supporting Articles'}
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
                                {uiLang === 'ar' ? article.titleAr : article.titleEn}
                              </h3>
                              <Badge variant="secondary" className="mt-2 text-xs">
                                {uiLang === 'ar' ? article.pillarAr : article.pillarEn}
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
