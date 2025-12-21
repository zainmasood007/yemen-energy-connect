// Product Data Hub
// Central export for all product data
// Designed for easy migration to DB later

import { Product, ProductCategory, Category, ProductFilters } from './types';
import { categories, getCategoryBySlug, getCategoryName } from './categories';
import { pylontechProducts } from './pylontech';

// Combine all products
export const allProducts: Product[] = [
  ...pylontechProducts,
  // Add other categories here as they're created:
  // ...panelProducts,
  // ...inverterProducts,
  // ...controllerProducts,
];

// Get all products
export const getProducts = (): Product[] => allProducts;

// Get products by category
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return allProducts.filter(product => product.category === category);
};

// Get product by slug (within a category)
export const getProductBySlug = (categorySlug: string, productSlug: string): Product | undefined => {
  return allProducts.find(
    product => product.category === categorySlug && product.slug === productSlug
  );
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

// Get featured products
export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.isFeatured);
};

// Get available products
export const getAvailableProducts = (): Product[] => {
  return allProducts.filter(product => product.isAvailable);
};

// Get related products
export const getRelatedProducts = (product: Product): Product[] => {
  return product.relatedProductSlugs
    .map(slug => allProducts.find(p => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
};

// Filter products
export const filterProducts = (filters: ProductFilters): Product[] => {
  return allProducts.filter(product => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.isAvailable !== undefined && product.isAvailable !== filters.isAvailable) return false;
    if (filters.isFeatured !== undefined && product.isFeatured !== filters.isFeatured) return false;
    return true;
  });
};

// Get unique brands
export const getBrands = (): string[] => {
  return [...new Set(allProducts.map(p => p.brand))];
};

// Get products count by category
export const getProductsCountByCategory = (): Record<ProductCategory, number> => {
  const counts: Record<ProductCategory, number> = {
    pylontech: 0,
    panels: 0,
    inverters: 0,
    controllers: 0,
  };
  
  allProducts.forEach(product => {
    counts[product.category]++;
  });
  
  return counts;
};

// Export types and helpers
export type { Product, ProductCategory, Category, ProductFilters, ProductSpec } from './types';
export { categories, getCategoryBySlug, getCategoryName };
