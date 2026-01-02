import Layout from '@/components/layout/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { useLanguage } from '@/i18n/LanguageContext';
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom';
import { getPillarBySlug, getSupportingBySlug } from '@/data/articles';
import { useAdmin } from '@/admin/context/AdminContext';

function buildFaqSchemaFromMarkdown(content?: string) {
  if (!content) return undefined;

  const lines = content.split('\n');
  let inFaq = false;
  let currentQuestion: string | null = null;
  let currentAnswerLines: string[] = [];
  const qaPairs: { question: string; answer: string }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect start of FAQ section
    if (trimmed.startsWith('##') && (trimmed.includes('أسئلة شائعة') || trimmed.toLowerCase().includes('faq'))) {
      inFaq = true;
      currentQuestion = null;
      currentAnswerLines = [];
      continue;
    }

    // If we left FAQ section when another H2 starts
    if (inFaq && trimmed.startsWith('##') && !trimmed.includes('أسئلة شائعة') && !trimmed.toLowerCase().includes('faq')) {
      break;
    }

    if (!inFaq) continue;

    // Question line
    if (trimmed.startsWith('### ')) {
      if (currentQuestion) {
        qaPairs.push({
          question: currentQuestion,
          answer: currentAnswerLines.join('\n').trim(),
        });
      }
      currentQuestion = trimmed.replace(/^###\s*/, '').trim();
      currentAnswerLines = [];
      continue;
    }

    if (currentQuestion) {
      currentAnswerLines.push(line);
    }
  }

  if (inFaq && currentQuestion) {
    qaPairs.push({
      question: currentQuestion,
      answer: currentAnswerLines.join('\n').trim(),
    });
  }

  if (!qaPairs.length) return undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaPairs.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

export default function KnowledgeArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { isRTL } = useLanguage();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { articles: adminArticles } = useAdmin();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const isArabicPage = pageLang === 'ar';

  const pillar = slug ? getPillarBySlug(slug) : undefined;
  const supporting = !pillar && slug ? getSupportingBySlug(slug) : undefined;
  let article: any = pillar || supporting;

  const isPreview = import.meta.env.DEV && searchParams.get('preview') === '1';

  if (isPreview && slug) {
    const adminArticle = adminArticles.find((a) => a.slug === slug);
    if (adminArticle) {
      article = {
        ...adminArticle,
        contentMarkdownAr: (adminArticle as any).contentMarkdownAr ?? adminArticle.contentAr,
        contentMarkdownEn: (adminArticle as any).contentMarkdownEn ?? adminArticle.contentEn,
      };
    }
  }

  if (!slug || !article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {pageLang === 'ar' ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <Link to={pageLang === 'ar' ? '/knowledge' : '/en/knowledge'} className="text-primary hover:underline">
            {pageLang === 'ar' ? 'العودة لمركز المعرفة' : 'Back to Knowledge Hub'}
          </Link>
        </div>
      </Layout>
    );
  }

  const title = isArabicPage ? article.titleAr : article.titleEn;

  const bodyMarkdown = isArabicPage
    ? article.contentMarkdownAr ?? ''
    : article.contentMarkdownEn ?? '';

  const descriptionEnMeta =
    pillar?.descEn ?? pillar?.contentMarkdownEn ?? supporting?.contentMarkdownEn ?? '';
  const descriptionArMeta =
    pillar?.descAr ?? pillar?.contentMarkdownAr ?? supporting?.contentMarkdownAr ?? '';

  const baseUrl = 'https://alqatta.com';
  const basePath = `/knowledge/${slug}`;
  const articlePath = isEnPath ? `/en${basePath}` : basePath;
  const articleUrl = `${baseUrl}${articlePath}`;
  const primaryDescription = isArabicPage
    ? descriptionArMeta || descriptionEnMeta
    : descriptionEnMeta || descriptionArMeta;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isArabicPage ? article.titleAr : article.titleEn,
    inLanguage: isArabicPage ? 'ar-YE' : 'en',
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    description: primaryDescription,
    articleSection: isArabicPage
      ? supporting?.pillarAr || pillar?.titleAr
      : supporting?.pillarEn || pillar?.titleEn,
    author: {
      '@type': 'Organization',
      name: 'Al-Qatta Solar Energy',
      alternateName: 'القطع للطاقة الشمسية',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Al-Qatta Solar Energy',
      alternateName: 'القطع للطاقة الشمسية',
      url: baseUrl,
    },
  };

  const homePath = isArabicPage ? '/' : '/en';
  const knowledgePath = isArabicPage ? '/knowledge' : '/en/knowledge';

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: isArabicPage ? 'الرئيسية' : 'Home',
      url: homePath,
    },
    {
      name: isArabicPage ? 'مركز المعرفة' : 'Knowledge Hub',
      url: knowledgePath,
    },
    {
      name: title,
      url: articlePath,
    },
  ]);

  const faqSchema = buildFaqSchemaFromMarkdown(bodyMarkdown);

  const jsonLdSchemas = faqSchema
    ? [articleSchema, breadcrumbSchema, faqSchema]
    : [articleSchema, breadcrumbSchema];

  return (
    <Layout>
      <SEO
        title={article.titleEn}
        titleAr={article.titleAr}
        description={descriptionEnMeta}
        descriptionAr={descriptionArMeta}
        canonical={articlePath}
        lang={pageLang}
        ogType="article"
        jsonLd={jsonLdSchemas}
      />

      <main className="container py-16">
        <header className="max-w-3xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        </header>

        <section className="max-w-3xl mx-auto">
          {bodyMarkdown && (
            <MarkdownRenderer
              content={bodyMarkdown}
              className="prose prose-lg dark:prose-invert"
              dir={isArabicPage ? 'rtl' : 'ltr'}
            />
          )}
        </section>
      </main>
    </Layout>
  );
}
