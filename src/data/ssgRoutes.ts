// Auto-generated static route helper for SSG builds
// Collects all important app routes from data modules

import { categories } from './products/categories';
import { allProducts } from './products';
import { pillarPages, supportingArticles } from './articles';

const legacyKnowledgeRoutes: string[] = [
  '/knowledge/inverter-guide',
  '/knowledge/lithium-vs-lead-acid',
  '/knowledge/solar-yemen-guide',
  '/knowledge/solar-faq-yemen',
  '/knowledge/inverter-sizing',
  '/knowledge/solar-system-cost-yemen',
  '/knowledge/lithium-battery-lifespan',
  '/knowledge/series-vs-parallel-batteries',
  '/knowledge/inverter-common-faults',
];

// Returns list of routes that should be pre-rendered as static HTML
export function getStaticRoutes(): string[] {
  const routes = new Set<string>();

  // Core static pages
  [
    '/',
    '/about',
    '/services',
    '/products',
    '/pylontech',
    '/contact',
    '/projects',
    '/locations',
    '/knowledge',
    '/pricing',
    '/calculator',
    '/privacy-policy',
    '/terms',
  ].forEach((path) => routes.add(path));

  // Product category listing pages
  categories.forEach((category) => {
    if (category.slug) {
      routes.add(`/products/${category.slug}`);
    }
  });
 
  // Individual product pages
  allProducts.forEach((product) => {
    if (product.category && product.slug) {
      routes.add(`/products/${product.category}/${product.slug}`);
    }
  });
 
  // Knowledge pillar pages (only published)
  pillarPages
    .filter((page) => page.status === 'published' && page.slug)
    .forEach((page) => {
      routes.add(`/knowledge/${page.slug}`);
    });
 
  // Supporting knowledge articles
  supportingArticles.forEach((article) => {
    if (article.slug) {
      routes.add(`/knowledge/${article.slug}`);
    }
  });

  // Legacy knowledge static pages (SEO aliases)
  legacyKnowledgeRoutes.forEach((path) => routes.add(path));
 
  const arabicRoutes = Array.from(routes).sort();

  const englishRoutes = arabicRoutes
    .filter((path) => !path.startsWith('/admin-local'))
    .map((path) => {
      if (path === '/') return '/en';
      return `/en${path}`;
    });

  const allRoutes = new Set<string>([...arabicRoutes, ...englishRoutes]);

  return Array.from(allRoutes).sort();
}

// Alias used by Vite SSG config to get all static routes
export function getAllStaticRoutes(): string[] {
  return getStaticRoutes();
}
