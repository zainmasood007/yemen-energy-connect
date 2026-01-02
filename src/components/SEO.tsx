import { Head } from "vite-react-ssg";
import { useLanguage } from '@/i18n/LanguageContext';

interface SEOProps {
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  keywords?: string;
  keywordsAr?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noIndex?: boolean;
  jsonLd?: object | object[];
  hreflang?: { lang: string; href: string }[];
}

export default function SEO({
  title,
  titleAr,
  description,
  descriptionAr,
  keywords,
  keywordsAr,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  noIndex = false,
  jsonLd,
  hreflang,
}: SEOProps) {
  const { isRTL } = useLanguage();

  const currentTitle = isRTL && titleAr ? titleAr : title;
  const currentDescription = isRTL && descriptionAr ? descriptionAr : description;
  const currentKeywords = isRTL && keywordsAr ? keywordsAr : keywords;
  const baseUrl = 'https://alqatta.com';
  const currentUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  const fullOgImage = `${baseUrl}${ogImage}`;

  return (
    <Head>
      <html lang={isRTL ? 'ar' : 'en'} />

      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      {currentKeywords && <meta name="keywords" content={currentKeywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={isRTL ? 'القطع للطاقة الشمسية' : 'Al-Qatta Solar Energy'} />
      <meta property="og:locale" content={isRTL ? 'ar_YE' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Canonical & hreflang */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="ar" href={currentUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
      {hreflang?.map((h) => (
        <link key={h.lang} rel="alternate" hrefLang={h.lang} href={h.href} />
      ))}

      {/* JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}


// ============ JSON-LD Schema Helpers ============

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Al-Qatta Solar Energy",
  "alternateName": "القطع للطاقة الشمسية",
  "url": "https://alqatta.com",
  "logo": "https://alqatta.com/logo.png",
  "description": "The only authorized Pylontech agent in Yemen. Solar energy solutions and energy storage systems.",
  "foundingDate": "2014",
  "areaServed": {
    "@type": "Country",
    "name": "Yemen"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+967-777-800-063",
    "contactType": "sales",
    "availableLanguage": ["Arabic", "English"]
  },
  "sameAs": [
    "https://facebook.com/alqattasolar",
    "https://instagram.com/alqattasolar"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://alqatta.com/#business",
  "name": "Al-Qatta Solar Energy",
  "alternateName": "القطع للطاقة الشمسية",
  "image": "https://alqatta.com/logo.png",
  "url": "https://alqatta.com",
  "telephone": "+967-777-800-063",
  "email": "info@alqatta.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sho'ub, in front of Military Hospital",
    "addressLocality": "Sana'a",
    "addressCountry": "YE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 15.3694,
    "longitude": 44.191
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "paymentAccepted": "Cash",
  "currenciesAccepted": "YER, USD"
};

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://alqatta.com${item.url}`
  }))
});

// Helper to remove undefined/null values from objects (for clean JSON-LD)
const cleanObject = (obj: Record<string, any>): Record<string, any> => {
  const cleaned: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null && value !== '') {
      if (typeof value === 'object' && !Array.isArray(value)) {
        const cleanedNested = cleanObject(value);
        if (Object.keys(cleanedNested).length > 0) {
          cleaned[key] = cleanedNested;
        }
      } else if (Array.isArray(value)) {
        const cleanedArray = value.map(item => 
          typeof item === 'object' ? cleanObject(item) : item
        ).filter(item => item !== undefined && item !== null);
        if (cleanedArray.length > 0) {
          cleaned[key] = cleanedArray;
        }
      } else {
        cleaned[key] = value;
      }
    }
  }
  return cleaned;
};

// Yemen Suitability ratings as PropertyValue (Google compliant)
interface YemenSuitabilityRatings {
  heatResistance: number;
  coastalSuitability: number;
  dustResistance: number;
  powerOutageSupport: number;
}

const createYemenSuitabilityProperties = (ratings: YemenSuitabilityRatings) => [
  {
    "@type": "PropertyValue",
    "name": "Heat Resistance Rating",
    "value": `${ratings.heatResistance}/5`,
    "unitText": "out of 5"
  },
  {
    "@type": "PropertyValue",
    "name": "Coastal Suitability Rating",
    "value": `${ratings.coastalSuitability}/5`,
    "unitText": "out of 5"
  },
  {
    "@type": "PropertyValue",
    "name": "Dust Resistance Rating",
    "value": `${ratings.dustResistance}/5`,
    "unitText": "out of 5"
  },
  {
    "@type": "PropertyValue",
    "name": "Power Outage Support Rating",
    "value": `${ratings.powerOutageSupport}/5`,
    "unitText": "out of 5"
  }
];

// Advanced Product Schema - Google Compliant (NO fake reviews/ratings)
export const createAdvancedProductSchema = (product: {
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  image?: string;
  brand?: string;
  model?: string;
  category?: string;
  sku?: string;
  url?: string;
  isAvailable?: boolean;
  yemenSuitability?: YemenSuitabilityRatings;
  specifications?: Array<{ name: string; value: string; unit?: string }>;
}) => {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "alternateName": product.nameAr,
    "description": product.description,
    "image": product.image && product.image !== '/placeholder.svg' 
      ? (product.image.startsWith('http') ? product.image : `https://alqatta.com${product.image}`)
      : undefined,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "manufacturer": product.brand ? {
      "@type": "Organization",
      "name": product.brand
    } : undefined,
    "model": product.model,
    "sku": product.sku || product.model,
    "category": product.category || "Solar Energy Equipment",
    "url": product.url ? `https://alqatta.com${product.url}` : undefined,
    "offers": {
      "@type": "Offer",
      "availability": product.isAvailable !== false 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": product.url ? `https://alqatta.com${product.url}` : undefined,
      "seller": {
        "@type": "Organization",
        "name": "Al-Qatta Solar Energy",
        "url": "https://alqatta.com"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "YE"
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30
      }
    },
    // Yemen Suitability as additionalProperty (compliant way)
    "additionalProperty": product.yemenSuitability 
      ? createYemenSuitabilityProperties(product.yemenSuitability)
      : undefined
  };

  // Add specifications as additionalProperty if provided
  if (product.specifications && product.specifications.length > 0) {
    const specProperties = product.specifications.map(spec => ({
      "@type": "PropertyValue",
      "name": spec.name,
      "value": spec.unit ? `${spec.value} ${spec.unit}` : spec.value
    }));
    
    schema.additionalProperty = [
      ...(schema.additionalProperty || []),
      ...specProperties
    ];
  }

  return cleanObject(schema);
};

// Simple Product Schema (backward compatibility)
export const createProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  category?: string;
}) => createAdvancedProductSchema(product);

export const createServiceSchema = (service: {
  name: string;
  description: string;
  areaServed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Al-Qatta Solar Energy"
  },
  "areaServed": {
    "@type": "Country",
    "name": service.areaServed || "Yemen"
  },
  "serviceType": "Solar Energy Installation and Maintenance"
});

export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Article Schema for knowledge hub and blog posts
export const createArticleSchema = (article: {
  headline: string;
  headlineAr?: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": article.headline,
  "alternativeHeadline": article.headlineAr,
  "description": article.description,
  "image": article.image || "https://alqatta.com/og-image.jpg",
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": article.author || "Al-Qatta Solar Energy",
    "url": "https://alqatta.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Al-Qatta Solar Energy",
    "logo": {
      "@type": "ImageObject",
      "url": "https://alqatta.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url ? `https://alqatta.com${article.url}` : "https://alqatta.com"
  },
  "inLanguage": ["ar", "en"],
  "about": {
    "@type": "Thing",
    "name": "Solar Energy in Yemen"
  }
});

// HowTo Schema for guides
export const createHowToSchema = (howTo: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  "totalTime": howTo.totalTime || "PT30M",
  "step": howTo.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    ...(step.image && { "image": step.image })
  }))
});
