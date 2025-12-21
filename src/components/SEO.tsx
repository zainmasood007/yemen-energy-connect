import { useEffect } from 'react';
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
  const { lang, isRTL } = useLanguage();
  
  const currentTitle = isRTL && titleAr ? titleAr : title;
  const currentDescription = isRTL && descriptionAr ? descriptionAr : description;
  const currentKeywords = isRTL && keywordsAr ? keywordsAr : keywords;
  const baseUrl = 'https://alqatta.com';
  const currentUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  useEffect(() => {
    // Update document title
    document.title = currentTitle;

    // Helper to update or create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    setMeta('description', currentDescription);
    if (currentKeywords) setMeta('keywords', currentKeywords);
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph
    setMeta('og:title', currentTitle, true);
    setMeta('og:description', currentDescription, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', currentUrl, true);
    setMeta('og:image', `${baseUrl}${ogImage}`, true);
    setMeta('og:site_name', isRTL ? 'القطع للطاقة الشمسية' : 'Al-Qatta Solar Energy', true);
    setMeta('og:locale', isRTL ? 'ar_YE' : 'en_US', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', currentTitle);
    setMeta('twitter:description', currentDescription);
    setMeta('twitter:image', `${baseUrl}${ogImage}`);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // Update hreflang links
    const updateHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = href;
    };
    
    updateHreflang('ar', currentUrl);
    updateHreflang('en', currentUrl);
    updateHreflang('x-default', currentUrl);

    // Update JSON-LD
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      // Cleanup is handled by next SEO component mounting
    };
  }, [currentTitle, currentDescription, currentKeywords, currentUrl, ogImage, ogType, noIndex, jsonLd, isRTL]);

  return null;
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
    "telephone": "+967-777-777-777",
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
  "telephone": "+967-777-777-777",
  "email": "info@alqatta.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sana'a",
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

export const createProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image || "https://alqatta.com/placeholder.svg",
  "brand": {
    "@type": "Brand",
    "name": product.brand || "Al-Qatta"
  },
  "category": product.category || "Solar Energy Equipment",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": "Al-Qatta Solar Energy"
    }
  }
});

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
