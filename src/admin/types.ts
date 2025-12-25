// Admin Panel Types
// Local content management types

export interface AdminProduct {
  id: string;
  slug: string;
  category: 'pylontech' | 'panels' | 'inverters' | 'controllers';
  brand: string;
  model: string;
  nameAr: string;
  nameEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  
  keyTakeaways: Array<{ ar: string; en: string }>;
  
  specifications: Array<{
    keyAr: string;
    keyEn: string;
    value: string;
    unit?: string;
  }>;
  
  yemenSuitability: {
    ratings: {
      heatResistance: 1 | 2 | 3 | 4 | 5;
      coastalSuitability: 1 | 2 | 3 | 4 | 5;
      powerOutageSupport: 1 | 2 | 3 | 4 | 5;
      dustResistance: 1 | 2 | 3 | 4 | 5;
    };
    explanationAr: string;
    explanationEn: string;
    bestRegionsAr: string[];
    bestRegionsEn: string[];
    climateNotesAr: string;
    climateNotesEn: string;
  };
  
  useCases: Array<{
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
    icon: string;
  }>;
  
  recommendedForAr: string[];
  recommendedForEn: string[];
  notRecommendedForAr: string[];
  notRecommendedForEn: string[];
  
  faqs: Array<{
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
  }>;
  
  relatedProductSlugs: string[];
  
  seoTitleAr: string;
  seoTitleEn: string;
  seoDescriptionAr: string;
  seoDescriptionEn: string;
  seoKeywordsAr: string[];
  seoKeywordsEn: string[];
  
  image: string;
  gallery: string[];
  datasheetUrl?: string;
  
  isAvailable: boolean;
  isFeatured: boolean;
}

export interface AdminArticle {
  id: string;
  slug: string;
  type: 'pillar' | 'supporting';
  icon: string;
  
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  
  contentAr: string;
  contentEn: string;
  contentMarkdownAr?: string;
  contentMarkdownEn?: string;
  
  keyTakeaways: Array<{ ar: string; en: string }>;
  
  faqs: Array<{
    questionAr: string;
    questionEn: string;
    answerAr: string;
    answerEn: string;
  }>;
  
  relatedProductSlugs: string[];
  relatedArticleSlugs: string[];
  
  pillarSlug?: string; // For supporting articles
  
  seoTitleAr: string;
  seoTitleEn: string;
  seoDescriptionAr: string;
  seoDescriptionEn: string;
  
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface AdminProject {
  id: string;
  slug: string;
  
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  
  type: 'residential' | 'commercial' | 'institutional' | 'agricultural';
  
  location: {
    ar: string;
    en: string;
    governorate?: string;
  };
  
  systemSize: string;
  batteryCapacity: string;
  panels: number;
  
  date: string;
  
  clientAr?: string;
  clientEn?: string;
  
  images: string[];
  
  features: {
    ar: string[];
    en: string[];
  };
  
  productsUsed: string[]; // Product slugs
  
  testimonial?: {
    textAr: string;
    textEn: string;
    authorAr: string;
    authorEn: string;
  };
  
  isFeatured: boolean;
}

export interface AdminState {
  products: AdminProduct[];
  articles: AdminArticle[];
  projects: AdminProject[];
}
