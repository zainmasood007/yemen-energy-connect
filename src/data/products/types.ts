// Product Data Types
// Designed for easy migration to DB later

export type ProductCategory = 'pylontech' | 'panels' | 'inverters' | 'controllers';

export interface ProductSpec {
  keyAr: string;
  keyEn: string;
  value: string;
  unit?: string;
}

export interface YemenSuitabilityRating {
  heatResistance: 1 | 2 | 3 | 4 | 5;
  coastalSuitability: 1 | 2 | 3 | 4 | 5;
  powerOutageSupport: 1 | 2 | 3 | 4 | 5;
  dustResistance: 1 | 2 | 3 | 4 | 5;
}

export interface YemenSuitability {
  ratings: YemenSuitabilityRating;
  explanationAr: string;
  explanationEn: string;
  bestRegionsAr: string[];
  bestRegionsEn: string[];
  climateNotesAr: string;
  climateNotesEn: string;
}

export interface UseCase {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string; // Lucide icon name
}

export interface ProductFAQ {
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export interface ProductComparison {
  productSlug: string;
  pros: {
    ar: string[];
    en: string[];
  };
  cons: {
    ar: string[];
    en: string[];
  };
}

export interface KeyTakeaway {
  ar: string;
  en: string;
}

export interface Product {
  // Identifiers
  id: string;
  slug: string;
  category: ProductCategory;
  
  // Basic Info
  brand: string;
  model: string;
  nameAr: string;
  nameEn: string;
  
  // Descriptions
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  
  // Key Takeaways (for SEO snippets)
  keyTakeaways: KeyTakeaway[];
  
  // Technical Specifications
  specifications: ProductSpec[];
  
  // Yemen-Specific Analysis
  yemenSuitability: YemenSuitability;
  
  // Use Cases
  useCases: UseCase[];
  
  // Recommendations
  recommendedForAr: string[];
  recommendedForEn: string[];
  notRecommendedForAr: string[];
  notRecommendedForEn: string[];
  
  // FAQ
  faqs: ProductFAQ[];
  
  // Comparisons with other products
  comparisons: ProductComparison[];
  
  // Internal Linking
  relatedProductSlugs: string[];
  relatedServiceKeys: string[]; // Keys from services data
  relatedLocationSlugs: string[]; // City slugs
  
  // SEO
  seoTitleAr: string;
  seoTitleEn: string;
  seoDescriptionAr: string;
  seoDescriptionEn: string;
  seoKeywordsAr: string[];
  seoKeywordsEn: string[];
  
  // Media (placeholders for now)
  image: string;
  gallery: string[];
  datasheetUrl?: string;
  
  // Pricing (optional, can be added later)
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
  
  // Status
  isAvailable: boolean;
  isFeatured: boolean;
  
  // Timestamps (for future DB)
  createdAt?: string;
  updatedAt?: string;
}

// Category Definition
export interface Category {
  slug: ProductCategory;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  image: string;
  productCount?: number;
}

// Helper type for localized content
export type LocalizedString = {
  ar: string;
  en: string;
};

// Filter options for product listing
export interface ProductFilters {
  category?: ProductCategory;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  isFeatured?: boolean;
}

// Sort options
export type ProductSortOption = 
  | 'name-asc' 
  | 'name-desc' 
  | 'price-asc' 
  | 'price-desc'
  | 'featured'
  | 'newest';
