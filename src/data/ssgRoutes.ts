// Auto-generated static route helper for SSG builds
// Collects all important app routes from data modules

import { categories } from './products/categories';
import { allProducts } from './products';
import { pillarPages, supportingArticles } from './articles';

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
  ].forEach((path) => routes.add(path));

  // Product category listing pages
  categories.forEach((category) => {
    routes.add(`/products/${category.slug}`);
  });

  // Individual product pages
  allProducts.forEach((product) => {
    if (product.category && product.slug) {
      routes.add(`/products/${product.category}/${product.slug}`);
    }
  });

  // Knowledge pillar pages (only published)
  pillarPages
    .filter((page) => page.status === 'published')
    .forEach((page) => {
      routes.add(`/knowledge/${page.slug}`);
    });

  // Supporting knowledge articles
  supportingArticles.forEach((article) => {
    routes.add(`/knowledge/${article.slug}`);
  });

  return Array.from(routes).sort();
}
