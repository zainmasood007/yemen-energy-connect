// Export Generators
// Generate TypeScript files from admin data for manual copying
// These files match the existing src/data/* structure

import { AdminProduct, AdminArticle, AdminProject } from '../types';

// Helper to download a file
export function downloadFile(content: string, filename: string, type: string = 'text/typescript'): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Generate batteries.ts content
export function generateBatteriesTS(products: AdminProduct[]): string {
  const batteries = products.filter(p => p.category === 'pylontech');
  
  return `// Battery Products Data
// Real products from alqatta.com
// Auto-generated from Admin Panel

import { Product } from './types';

export const batteryProducts: Product[] = ${JSON.stringify(batteries.map(productToExport), null, 2)};
`;
}

// Generate panels.ts content
export function generatePanelsTS(products: AdminProduct[]): string {
  const panels = products.filter(p => p.category === 'panels');
  
  return `// Solar Panel Products Data
// Auto-generated from Admin Panel

import { Product } from './types';

export const panelProducts: Product[] = ${JSON.stringify(panels.map(productToExport), null, 2)};
`;
}

// Generate inverters.ts content
export function generateInvertersTS(products: AdminProduct[]): string {
  const inverters = products.filter(p => p.category === 'inverters');
  
  return `// Inverter Products Data
// Auto-generated from Admin Panel

import { Product } from './types';

export const inverterProducts: Product[] = ${JSON.stringify(inverters.map(productToExport), null, 2)};
`;
}

// Generate projects.ts content
export function generateProjectsTS(projects: AdminProject[]): string {
  const exportProjects = projects.map(p => ({
    id: parseInt(p.id) || Date.now(),
    slug: p.slug,
    titleAr: p.titleAr,
    titleEn: p.titleEn,
    descAr: p.descAr,
    descEn: p.descEn,
    type: p.type,
    location: p.location,
    systemSize: p.systemSize,
    batteryCapacity: p.batteryCapacity,
    panels: p.panels,
    date: p.date,
    clientAr: p.clientAr,
    clientEn: p.clientEn,
    images: p.images,
    features: p.features,
  }));
  
  return `// Projects Data
// Centralized project data for the site
// Auto-generated from Admin Panel

import { Home, Building2, Factory } from 'lucide-react';

export interface Project {
  id: number;
  slug?: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  type: 'residential' | 'commercial' | 'institutional' | 'agricultural';
  location: { ar: string; en: string };
  systemSize: string;
  batteryCapacity: string;
  panels: number;
  date: string;
  images: string[];
  features: { ar: string[]; en: string[] };
  clientAr?: string;
  clientEn?: string;
}

export const projects: Project[] = ${JSON.stringify(exportProjects, null, 2)};

export const typeIcons: Record<Project['type'], typeof Home> = {
  residential: Home,
  commercial: Building2,
  institutional: Building2,
  agricultural: Factory,
};

export const typeLabels: Record<Project['type'], { ar: string; en: string }> = {
  residential: { ar: 'سكني', en: 'Residential' },
  commercial: { ar: 'تجاري', en: 'Commercial' },
  institutional: { ar: 'مؤسسي', en: 'Institutional' },
  agricultural: { ar: 'زراعي', en: 'Agricultural' },
};

export const typeColors: Record<Project['type'], string> = {
  residential: 'bg-blue-500',
  commercial: 'bg-purple-500',
  institutional: 'bg-emerald-500',
  agricultural: 'bg-amber-500',
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByType = (type: Project['type']): Project[] => {
  return projects.filter(p => p.type === type);
};
`;
}

// Generate articles.ts content
export function generateArticlesTS(articles: AdminArticle[]): string {
  const pillars = articles.filter(a => a.type === 'pillar').map(a => ({
    slug: a.slug,
    icon: a.icon || 'FileText',
    titleAr: a.titleAr,
    titleEn: a.titleEn,
    descAr: a.descAr,
    descEn: a.descEn,
    status: a.status,
    contentMarkdownAr: a.contentMarkdownAr,
    contentMarkdownEn: a.contentMarkdownEn,
  }));
  
  const supporting = articles.filter(a => a.type === 'supporting').map(a => ({
    slug: a.slug,
    icon: a.icon || 'FileText',
    titleAr: a.titleAr,
    titleEn: a.titleEn,
    pillarAr: '', // Will need to be set manually
    pillarEn: '',
    pillarSlug: a.pillarSlug,
    contentMarkdownAr: a.contentMarkdownAr,
    contentMarkdownEn: a.contentMarkdownEn,
  }));
  
  // Generate icon imports based on used icons
  const usedIcons = new Set<string>();
  articles.forEach(a => {
    if (a.icon) usedIcons.add(a.icon);
  });
  
  const iconImports = Array.from(usedIcons).filter(i => 
    ['Zap', 'Battery', 'Sun', 'Calculator', 'Wrench', 'RefreshCw', 'ArrowUpDown', 'FileText'].includes(i)
  ).join(', ');
  
  return `// Articles Data
// Centralized knowledge hub articles data
// Auto-generated from Admin Panel

import { ${iconImports || 'FileText'} } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface PillarPage {
  slug: string;
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  status: 'published' | 'draft';
  contentMarkdownAr?: string;
  contentMarkdownEn?: string;
}

export interface SupportingArticle {
  slug: string;
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  pillarAr: string;
  pillarEn: string;
  pillarSlug?: string;
  contentMarkdownAr?: string;
  contentMarkdownEn?: string;
}

// NOTE: Icon references need to be manually updated after import
// Replace string icon names with actual icon components

export const pillarPages: PillarPage[] = ${JSON.stringify(pillars, null, 2).replace(/"icon": "(\w+)"/g, 'icon: $1')};

export const supportingArticles: SupportingArticle[] = ${JSON.stringify(supporting, null, 2).replace(/"icon": "(\w+)"/g, 'icon: $1')};

export const getPillarBySlug = (slug: string): PillarPage | undefined => {
  return pillarPages.find(p => p.slug === slug);
};

export const getSupportingBySlug = (slug: string): SupportingArticle | undefined => {
  return supportingArticles.find(a => a.slug === slug);
};

export const getSupportingByPillar = (pillarSlug: string): SupportingArticle[] => {
  return supportingArticles.filter(a => a.pillarSlug === pillarSlug);
};

export const getAllArticles = () => ({
  pillarPages,
  supportingArticles,
});
`;
}

// Convert AdminProduct to exportable format (matching Product interface)
function productToExport(product: AdminProduct) {
  return {
    id: product.id,
    slug: product.slug,
    category: product.category,
    brand: product.brand,
    model: product.model,
    nameAr: product.nameAr,
    nameEn: product.nameEn,
    shortDescAr: product.shortDescAr,
    shortDescEn: product.shortDescEn,
    fullDescAr: product.fullDescAr,
    fullDescEn: product.fullDescEn,
    keyTakeaways: product.keyTakeaways,
    specifications: product.specifications,
    yemenSuitability: product.yemenSuitability,
    useCases: product.useCases,
    recommendedForAr: product.recommendedForAr,
    recommendedForEn: product.recommendedForEn,
    notRecommendedForAr: product.notRecommendedForAr,
    notRecommendedForEn: product.notRecommendedForEn,
    faqs: product.faqs,
    comparisons: [],
    relatedProductSlugs: product.relatedProductSlugs,
    relatedServiceKeys: [],
    relatedLocationSlugs: [],
    seoTitleAr: product.seoTitleAr,
    seoTitleEn: product.seoTitleEn,
    seoDescriptionAr: product.seoDescriptionAr,
    seoDescriptionEn: product.seoDescriptionEn,
    seoKeywordsAr: product.seoKeywordsAr,
    seoKeywordsEn: product.seoKeywordsEn,
    image: product.image,
    gallery: product.gallery,
    datasheetUrl: product.datasheetUrl || undefined,
    isAvailable: product.isAvailable,
    isFeatured: product.isFeatured,
  };
}

// Download all TypeScript files
export function downloadAllTSFiles(
  products: AdminProduct[], 
  articles: AdminArticle[], 
  projectsList: AdminProject[]
): void {
  downloadFile(generateBatteriesTS(products), 'batteries.ts');
  downloadFile(generatePanelsTS(products), 'panels.ts');
  downloadFile(generateInvertersTS(products), 'inverters.ts');
  downloadFile(generateProjectsTS(projectsList), 'projects.ts');
  downloadFile(generateArticlesTS(articles), 'articles.ts');
}
