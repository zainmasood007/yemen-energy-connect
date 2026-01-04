import { Head } from "vite-react-ssg";
import { useLocation } from 'react-router-dom';

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
  lang?: 'ar' | 'en';
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
  lang,
}: SEOProps) {
  const baseUrl = 'https://alqatta.com';
  const location = typeof window === 'undefined' ? undefined : window.location;
  const pathnameFromLocation = location?.pathname;

  let path = canonical || pathnameFromLocation || '/';
  if (!path.startsWith('/')) {
    try {
      const url = new URL(path, baseUrl);
      path = url.pathname || '/';
    } catch {
      path = '/';
    }
  }

  const pageLang: 'ar' | 'en' = lang ?? (path.startsWith('/en') ? 'en' : 'ar');
  const isArabic = pageLang === 'ar';

  const currentTitle = isArabic && titleAr ? titleAr : title;
  const currentDescription = isArabic && descriptionAr ? descriptionAr : description;
  const currentKeywords = isArabic && keywordsAr ? keywordsAr : keywords;

  const currentUrl = `${baseUrl}${path}`;

  const arabicPath = path.startsWith('/en') ? path.replace(/^\/en/, '') || '/' : path || '/';
  const englishPath = path.startsWith('/en') ? path : (path === '/' ? '/en' : `/en${path}`);

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  const fullOgImage = `${baseUrl}${ogImage}`;

  return (
    <Head>
      <html lang={isArabic ? 'ar' : 'en'} />

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
      <meta property="og:site_name" content={isArabic ? 'القطاع للطاقة الشمسية' : 'Al-Qatta Solar Energy'} />
      <meta property="og:locale" content={isArabic ? 'ar_YE' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Canonical & hreflang */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="ar-YE" href={`${baseUrl}${arabicPath}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${englishPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${arabicPath}`} />
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
  "alternateName": "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء",
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
    "telephone": [
      "+967-1-237-379",
      "+967-777-800-063",
      "+967-777-500-062"
    ],
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
  "alternateName": "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء",
  "image": "https://alqatta.com/logo.png",
  "url": "https://alqatta.com",
  "telephone": [
    "+967-1-237-379",
    "+967-777-800-063",
    "+967-777-500-062"
  ],
  "email": "info@alqatta.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Yemen - Sana'a - Sho'ub District - Next to the Military Hospital",
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

export const homeGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://alqatta.com/#organization",
      "name": "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء",
      "alternateName": [
        "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء",
        "القطاع لأنظمة الطاقة الشمسية والكهرباء",
        "القطاع للطاقة الشمسية",
        "Al-Qatta Solar Energy",
        "Al-Qatta Solar",
        "Alqatta Solar Yemen",
        "Al-Qatta for Solar & Electrical Systems"
      ],
      "url": "https://alqatta.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alqatta.com/images/logo.png"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://alqatta.com/og-image.jpg"
      },
      "description": "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء – الوكيل المعتمد لبطاريات Pylontech في اليمن. نقدم حلول الطاقة الشمسية: بطاريات، ألواح شمسية، وإنفرترات للمنازل والمشاريع التجارية مع ضمان ودعم فني داخل اليمن.",
      "sameAs": [
        "https://www.facebook.com/alqattasq",
        "https://www.instagram.com/alqatta"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+967-777800063",
        "contactType": "customer service",
        "areaServed": "YE",
        "availableLanguage": ["ar", "en"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "اليمن - صنعاء - شعوب - جوار المستشفى العسكري",
        "addressLocality": "صنعاء",
        "addressRegion": "اليمن",
        "addressCountry": "YE"
      },
      "foundingDate": "2014",
      "foundingLocation": {
        "@type": "Place",
        "name": "Sana'a, Yemen"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Yemen"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alqatta.com/"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alqatta.com/#localbusiness",
      "name": "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء",
      "alternateName": [
        "القطاع للطاقة الشمسية",
        "أفضل شركة طاقة شمسية في صنعاء",
        "Solar Energy Company in Sana'a",
        "Pylontech Authorized Distributor Yemen"
      ],
      "url": "https://alqatta.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://alqatta.com/og-image.jpg"
      },
      "priceRange": "$$",
      "currenciesAccepted": "USD, YER",
      "paymentAccepted": "Cash, BankTransfer",
      "telephone": "+967-777800063",
      "email": "info@alqatta.com",
      "description": "شركة متخصصة في تصميم وتركيب أنظمة الطاقة الشمسية وبطاريات Pylontech في اليمن للمنازل والشركات، مع حلول متقدمة لتخزين الطاقة وضمان حتى 10 سنوات وخدمة ما بعد البيع في صنعاء وباقي المحافظات.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "اليمن - صنعاء - شعوب - جوار المستشفى العسكري",
        "addressLocality": "صنعاء",
        "addressRegion": "اليمن",
        "addressCountry": "YE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 15.361,
        "longitude": 44.211806
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sana'a"
        },
        {
          "@type": "Country",
          "name": "Yemen"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "knowsAbout": [
        "أنظمة الطاقة الشمسية للمنازل في اليمن",
        "أنظمة الطاقة الشمسية للشركات في اليمن",
        "بطاريات Pylontech",
        "حلول تخزين الطاقة",
        "الطاقة الشمسية في صنعاء",
        "حلول انقطاع الكهرباء في اليمن"
      ],
      "sameAs": [
        "https://maps.app.goo.gl/dsS76sbqh2UCFfem6",
        "https://www.facebook.com/alqattasq",
        "https://www.instagram.com/alqatta"
      ],
      "parentOrganization": {
        "@id": "https://alqatta.com/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alqatta.com/"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://alqatta.com/#website",
      "url": "https://alqatta.com",
      "name": "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء – الوكيل المعتمد لبطاريات Pylontech في اليمن",
      "alternateName": [
        "القطاع للطاقة الشمسية",
        "Al-Qatta Solar Energy",
        "Pylontech Batteries Yemen",
        "Yemen Solar Energy Solutions"
      ],
      "publisher": {
        "@id": "https://alqatta.com/#organization"
      },
      "inLanguage": "ar-YE",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://alqatta.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://alqatta.com/#faqpage",
      "url": "https://alqatta.com/",
      "name": "الأسئلة الشائعة حول الطاقة الشمسية وبطاريات Pylontech في اليمن",
      "inLanguage": "ar-YE",
      "isPartOf": {
        "@id": "https://alqatta.com/#website"
      },
      "about": {
        "@id": "https://alqatta.com/#organization"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ما هي أفضل بطاريات طاقة شمسية في اليمن للمنازل والشركات؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تُعتبر بطاريات Pylontech من أفضل بطاريات الطاقة الشمسية في اليمن بفضل اعتمادها على خلايا LiFePO4 الآمنة، وعمرها الطويل الذي يتجاوز 6000 دورة، وضمان يصل حتى 10 سنوات عند التركيب من قبل جهة معتمدة مثل مؤسسة القطاع."
          }
        },
        {
          "@type": "Question",
          "name": "ما هو أفضل نظام طاقة شمسية للمنازل في اليمن لمواجهة انقطاع الكهرباء؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "أفضل نظام طاقة شمسية للمنازل في اليمن هو النظام المصمم حسب أحمال المنزل، ويجمع بين ألواح شمسية عالية الجودة، إنفرتر موثوق، وبطاريات ليثيوم مثل Pylontech، مع ضمان ودعم فني محلي من جهة متخصصة في السوق اليمني."
          }
        },
        {
          "@type": "Question",
          "name": "هل أنتم الوكيل المعتمد لبطاريات Pylontech في اليمن؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء تعمل كجهة معتمدة لتوريد وتركيب بطاريات Pylontech في اليمن، وتوفر حلول تخزين طاقة متكاملة مع التزام بشروط الضمان وخدمة ما بعد البيع داخل اليمن."
          }
        },
        {
          "@type": "Question",
          "name": "ما هي أفضل حلول تخزين الطاقة في اليمن لمشكلة انقطاع الكهرباء؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "أفضل حلول تخزين الطاقة في اليمن تعتمد على بطاريات ليثيوم احترافية مثل Pylontech الموصولة بأنظمة طاقة شمسية مُصمّمة بشكل صحيح، بحيث تغطي أحمال المنزل أو المشروع لفترات انقطاع الكهرباء الطويلة بكفاءة وأمان."
          }
        },
        {
          "@type": "Question",
          "name": "كم تبلغ أسعار أنظمة الطاقة الشمسية في صنعاء للمنازل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تختلف أسعار أنظمة الطاقة الشمسية في صنعاء حسب سعة النظام وجودة المكونات وطبيعة أحمال المنزل. عادةً يتم تقديم عرض سعر مخصص بعد دراسة الاستهلاك وتحديد عدد الألواح والبطاريات المناسبة، لذلك يُنصح بالتواصل معنا للحصول على تسعيرة تقديرية دقيقة لنظامك."
          }
        },
        {
          "@type": "Question",
          "name": "كيف أختار أفضل شركة طاقة شمسية في صنعاء واليمن؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "لاختيار أفضل شركة طاقة شمسية في صنعاء واليمن، ابحث عن جهة معتمدة بخبرة عملية، تستخدم مكونات أصلية مثل بطاريات Pylontech وإنفرترات موثوقة، وتقدّم تصميماً هندسياً واضحاً، وضماناً مكتوباً، ودعم فني داخل اليمن."
          }
        },
        {
          "@type": "Question",
          "name": "هل أنظمة الطاقة الشمسية حل فعّال ونهائي لمشكلة انقطاع الكهرباء في اليمن؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، أنظمة الطاقة الشمسية المصممة بشكل صحيح مع بطاريات تخزين مناسبة أصبحت الحل الأكثر استدامة لمشكلة انقطاع الكهرباء في اليمن، بشرط اختيار شركة متخصصة ومكونات أصلية وتركيب وفقاً للمعايير الفنية."
          }
        }
      ]
    }
  ]
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
  inLanguage?: string;
}) => {
  const productUrl = product.url ? `https://alqatta.com${product.url}` : undefined;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "alternateName": product.nameAr,
    "description": product.description,
    "image": product.image && product.image !== '/placeholder.svg'
      ? (product.image.startsWith('http') ? product.image : `https://alqatta.com${product.image}`)
      : undefined,
    "brand": product.brand
      ? {
          "@type": "Brand",
          "name": product.brand,
        }
      : undefined,
    "manufacturer": product.brand
      ? {
          "@type": "Organization",
          "name": product.brand,
        }
      : undefined,
    "sku": product.sku || product.model,
    "model": product.model,
    "category": product.category || "Solar Energy Equipment",
    "url": productUrl,
    "inLanguage": product.inLanguage,
    // ربط المنتج بالكيان الرئيسي (Organization) كـ about + mainEntityOfPage
    "about": {
      "@id": "https://alqatta.com/#organization",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": productUrl || "https://alqatta.com",
    },
    "offers": {
      "@type": "Offer",
      "availability": product.isAvailable !== false
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": productUrl,
      // seller = مؤسسة القطاع (نفس الـ Organization في homeGraphSchema) لربط أقوى بالكيان
      "seller": {
        "@type": "Organization",
        "@id": "https://alqatta.com/#organization",
        "name": "مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء",
        "url": "https://alqatta.com",
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "YE",
        },
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
      },
    },
    // Yemen Suitability as additionalProperty (compliant way)
    "additionalProperty": product.yemenSuitability
      ? createYemenSuitabilityProperties(product.yemenSuitability)
      : undefined,
  };

  // Add specifications as additionalProperty if provided
  if (product.specifications && product.specifications.length > 0) {
    const specProperties = product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      "name": spec.name,
      "value": spec.unit ? `${spec.value} ${spec.unit}` : spec.value,
    }));

    schema.additionalProperty = [
      ...(schema.additionalProperty || []),
      ...specProperties,
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
