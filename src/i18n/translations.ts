export type Language = 'ar' | 'en';

export const translations = {
  // Navigation
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About Us' },
    services: { ar: 'خدماتنا', en: 'Services' },
    products: { ar: 'منتجاتنا', en: 'Products' },
    pylontech: { ar: 'بايلونتيك', en: 'Pylontech' },
    projects: { ar: 'مشاريعنا', en: 'Projects' },
    contact: { ar: 'اتصل بنا', en: 'Contact' },
    getQuote: { ar: 'طلب عرض سعر', en: 'Get Quote' },
  },

  // Hero Section
  hero: {
    badge: { ar: 'الوكيل المعتمد الوحيد لـ Pylontech في اليمن', en: 'The Only Authorized Pylontech Agent in Yemen' },
    title: { ar: 'حلول الطاقة الشمسية وتخزين الطاقة', en: 'Solar & Energy Storage Solutions' },
    subtitle: { ar: 'نقدم أنظمة طاقة شمسية متكاملة وحلول تخزين طاقة احترافية للمنازل والشركات في اليمن', en: 'Complete solar systems and professional energy storage solutions for homes and businesses in Yemen' },
    cta: { ar: 'تواصل عبر واتساب', en: 'Chat on WhatsApp' },
    ctaSecondary: { ar: 'استكشف منتجاتنا', en: 'Explore Products' },
  },

  // Features
  features: {
    title: { ar: 'لماذا تختار القطع؟', en: 'Why Choose Al-Qatta?' },
    authorized: {
      title: { ar: 'وكيل معتمد', en: 'Authorized Agent' },
      desc: { ar: 'الوكيل الرسمي والوحيد لبطاريات Pylontech في اليمن', en: 'The official and only Pylontech battery agent in Yemen' },
    },
    warranty: {
      title: { ar: 'ضمان حقيقي', en: 'Real Warranty' },
      desc: { ar: 'ضمان المصنع الأصلي على جميع منتجات Pylontech', en: 'Original factory warranty on all Pylontech products' },
    },
    expertise: {
      title: { ar: 'خبرة هندسية', en: 'Engineering Expertise' },
      desc: { ar: 'فريق متخصص في تصميم وتركيب أنظمة الطاقة الشمسية', en: 'Specialized team in solar system design and installation' },
    },
    coverage: {
      title: { ar: 'تغطية شاملة', en: 'Full Coverage' },
      desc: { ar: 'خدماتنا تغطي جميع المحافظات اليمنية', en: 'Our services cover all Yemeni governorates' },
    },
  },

  // Products Section
  products: {
    title: { ar: 'منتجاتنا', en: 'Our Products' },
    subtitle: { ar: 'أفضل منتجات الطاقة الشمسية وتخزين الطاقة', en: 'Best solar and energy storage products' },
    viewAll: { ar: 'عرض الكل', en: 'View All' },
    categories: {
      pylontech: { ar: 'بطاريات Pylontech', en: 'Pylontech Batteries' },
      lithium: { ar: 'بطاريات ليثيوم', en: 'Lithium Batteries' },
      panels: { ar: 'ألواح شمسية', en: 'Solar Panels' },
      inverters: { ar: 'انفرترات', en: 'Inverters' },
      controllers: { ar: 'منظمات شحن', en: 'Charge Controllers' },
      accessories: { ar: 'ملحقات', en: 'Accessories' },
    },
  },

  // Services Section
  services: {
    title: { ar: 'خدماتنا', en: 'Our Services' },
    subtitle: { ar: 'حلول متكاملة من التصميم إلى التركيب والصيانة', en: 'Complete solutions from design to installation and maintenance' },
    items: {
      design: {
        title: { ar: 'تصميم الأنظمة الشمسية', en: 'Solar System Design' },
        desc: { ar: 'تصميم هندسي احترافي يناسب احتياجاتك', en: 'Professional engineering design for your needs' },
      },
      installation: {
        title: { ar: 'التركيب والتنفيذ', en: 'Installation' },
        desc: { ar: 'تركيب احترافي بأيدي مهندسين متخصصين', en: 'Professional installation by specialized engineers' },
      },
      storage: {
        title: { ar: 'أنظمة تخزين الطاقة', en: 'Energy Storage Systems' },
        desc: { ar: 'حلول تخزين متقدمة لضمان استمرارية الطاقة', en: 'Advanced storage solutions for energy continuity' },
      },
      consultation: {
        title: { ar: 'الاستشارات الفنية', en: 'Technical Consultation' },
        desc: { ar: 'استشارات متخصصة في تحديد الحجم والمواصفات', en: 'Specialized consultation for sizing and specifications' },
      },
      maintenance: {
        title: { ar: 'الصيانة والدعم', en: 'Maintenance & Support' },
        desc: { ar: 'صيانة دورية ودعم فني على مدار الساعة', en: 'Regular maintenance and 24/7 technical support' },
      },
      assessment: {
        title: { ar: 'دراسة الجدوى', en: 'Feasibility Study' },
        desc: { ar: 'تقييم الموقع ودراسة الجدوى الاقتصادية', en: 'Site assessment and economic feasibility study' },
      },
    },
  },

  // Pylontech Section
  pylontech: {
    title: { ar: 'Pylontech - الشريك الرسمي', en: 'Pylontech - Official Partner' },
    subtitle: { ar: 'بطاريات ليثيوم فوسفات الحديد الأكثر موثوقية في العالم', en: "World's most reliable LiFePO4 batteries" },
    authorized: { ar: 'وكيل معتمد ومعتمد', en: 'Authorized & Certified Agent' },
    whyTitle: { ar: 'لماذا Pylontech؟', en: 'Why Pylontech?' },
    features: {
      lifespan: { ar: '+6000 دورة شحن', en: '6000+ Charge Cycles' },
      warranty: { ar: '10 سنوات ضمان', en: '10 Years Warranty' },
      safety: { ar: 'أعلى معايير الأمان', en: 'Highest Safety Standards' },
      efficiency: { ar: 'كفاءة 95%+', en: '95%+ Efficiency' },
    },
  },

  // Contact Section
  contact: {
    title: { ar: 'تواصل معنا', en: 'Contact Us' },
    subtitle: { ar: 'نحن هنا لمساعدتك في جميع احتياجات الطاقة الشمسية', en: 'We are here to help with all your solar energy needs' },
    whatsapp: { ar: 'تواصل عبر واتساب', en: 'Chat on WhatsApp' },
    phone: { ar: 'اتصل بنا', en: 'Call Us' },
    email: { ar: 'راسلنا', en: 'Email Us' },
    address: { ar: 'العنوان', en: 'Address' },
    form: {
      name: { ar: 'الاسم', en: 'Name' },
      phone: { ar: 'رقم الهاتف', en: 'Phone Number' },
      email: { ar: 'البريد الإلكتروني', en: 'Email' },
      message: { ar: 'رسالتك', en: 'Your Message' },
      submit: { ar: 'إرسال', en: 'Submit' },
      service: { ar: 'الخدمة المطلوبة', en: 'Required Service' },
    },
  },

  // Footer
  footer: {
    description: { ar: 'الوكيل المعتمد الوحيد لـ Pylontech في اليمن. نقدم أفضل حلول الطاقة الشمسية وتخزين الطاقة.', en: 'The only authorized Pylontech agent in Yemen. We provide the best solar and energy storage solutions.' },
    quickLinks: { ar: 'روابط سريعة', en: 'Quick Links' },
    ourServices: { ar: 'خدماتنا', en: 'Our Services' },
    contactInfo: { ar: 'معلومات التواصل', en: 'Contact Info' },
    rights: { ar: 'جميع الحقوق محفوظة', en: 'All Rights Reserved' },
  },

  // Common
  common: {
    learnMore: { ar: 'اعرف المزيد', en: 'Learn More' },
    viewDetails: { ar: 'عرض التفاصيل', en: 'View Details' },
    requestQuote: { ar: 'طلب عرض سعر', en: 'Request Quote' },
    downloadDatasheet: { ar: 'تحميل المواصفات', en: 'Download Datasheet' },
    specifications: { ar: 'المواصفات', en: 'Specifications' },
    features: { ar: 'المميزات', en: 'Features' },
    applications: { ar: 'التطبيقات', en: 'Applications' },
    readMore: { ar: 'اقرأ المزيد', en: 'Read More' },
    backToHome: { ar: 'العودة للرئيسية', en: 'Back to Home' },
    loading: { ar: 'جاري التحميل...', en: 'Loading...' },
    error: { ar: 'حدث خطأ', en: 'An error occurred' },
  },

  // SEO & Meta
  meta: {
    home: {
      title: { ar: 'القطع للطاقة الشمسية | الوكيل المعتمد لـ Pylontech في اليمن', en: 'Al-Qatta Solar Energy | Authorized Pylontech Agent in Yemen' },
      description: { ar: 'الوكيل المعتمد الوحيد لبطاريات Pylontech في اليمن. نقدم حلول الطاقة الشمسية وأنظمة تخزين الطاقة للمنازل والشركات.', en: 'The only authorized Pylontech battery agent in Yemen. We provide solar energy solutions and energy storage systems for homes and businesses.' },
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  if (value && typeof value === 'object' && lang in value) {
    return value[lang];
  }
  
  return key;
}
