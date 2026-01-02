import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { useLanguage } from '@/i18n/LanguageContext';
import { useParams, Link } from 'react-router-dom';
import { getPillarBySlug, getSupportingBySlug } from '@/data/articles';

export default function KnowledgeArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { isRTL } = useLanguage();

  const pillar = slug ? getPillarBySlug(slug) : undefined;
  const supporting = !pillar && slug ? getSupportingBySlug(slug) : undefined;
  const article = pillar || supporting;

  if (!slug || !article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {isRTL ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <Link to="/knowledge" className="text-primary hover:underline">
            {isRTL ? 'العودة لمركز المعرفة' : 'Back to Knowledge Hub'}
          </Link>
        </div>
      </Layout>
    );
  }

  const title = isRTL ? article.titleAr : article.titleEn;

  const bodyMarkdown = isRTL
    ? article.contentMarkdownAr ?? ''
    : article.contentMarkdownEn ?? '';

  const descriptionEnMeta =
    pillar?.descEn ?? pillar?.contentMarkdownEn ?? supporting?.contentMarkdownEn ?? '';
  const descriptionArMeta =
    pillar?.descAr ?? pillar?.contentMarkdownAr ?? supporting?.contentMarkdownAr ?? '';

  return (
    <Layout>
      <SEO
        title={article.titleEn}
        titleAr={article.titleAr}
        description={descriptionEnMeta}
        descriptionAr={descriptionArMeta}
        canonical={`/knowledge/${slug}`}
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
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          )}
        </section>
      </main>
    </Layout>
  );
}
