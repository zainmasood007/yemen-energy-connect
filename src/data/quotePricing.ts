// Quote Pricing Data
// هذه الأسعار تظهر فقط في عروض الأسعار ولا تظهر في الموقع

export interface QuoteProductPrice {
  productId: string;
  productSlug: string;
  category: 'pylontech' | 'panels' | 'inverters' | 'controllers';
  nameAr: string;
  nameEn: string;
  unitPrice: number; // سعر الوحدة بالدولار
  unit: string; // الوحدة (قطعة، لوح، إلخ)
}

export interface QuoteServicePrice {
  id: string;
  nameAr: string;
  nameEn: string;
  pricePerKw: number; // سعر لكل كيلوواط
  fixedPrice?: number; // سعر ثابت (اختياري)
}

// أسعار المنتجات لعروض الأسعار
export const quoteProductPrices: QuoteProductPrice[] = [
  // البطاريات - Pylontech
  {
    productId: 'pylontech-us5000',
    productSlug: 'us5000',
    category: 'pylontech',
    nameAr: 'بطارية بايلونتيك US5000',
    nameEn: 'Pylontech US5000 Battery',
    unitPrice: 1200,
    unit: 'قطعة'
  },
  {
    productId: 'pylontech-us3000c',
    productSlug: 'us3000c',
    category: 'pylontech',
    nameAr: 'بطارية بايلونتيك US3000C',
    nameEn: 'Pylontech US3000C Battery',
    unitPrice: 850,
    unit: 'قطعة'
  },
  {
    productId: 'pylontech-up5000',
    productSlug: 'up5000',
    category: 'pylontech',
    nameAr: 'بطارية بايلونتيك UP5000',
    nameEn: 'Pylontech UP5000 Battery',
    unitPrice: 1100,
    unit: 'قطعة'
  },
  // الألواح الشمسية
  {
    productId: 'trina-580w',
    productSlug: 'trina-vertex-580w',
    category: 'panels',
    nameAr: 'لوح ترينا 580 واط',
    nameEn: 'Trina Vertex 580W Panel',
    unitPrice: 120,
    unit: 'لوح'
  },
  {
    productId: 'trina-670w',
    productSlug: 'trina-vertex-670w',
    category: 'panels',
    nameAr: 'لوح ترينا 670 واط',
    nameEn: 'Trina Vertex 670W Panel',
    unitPrice: 145,
    unit: 'لوح'
  },
  {
    productId: 'trina-685w',
    productSlug: 'trina-vertex-n-685w',
    category: 'panels',
    nameAr: 'لوح ترينا N-Type 685 واط',
    nameEn: 'Trina Vertex N-Type 685W Panel',
    unitPrice: 165,
    unit: 'لوح'
  },
  // الانفرترات
  {
    productId: 'huawei-5kw',
    productSlug: 'huawei-sun2000-5ktl',
    category: 'inverters',
    nameAr: 'انفرتر هواوي 5 كيلوواط',
    nameEn: 'Huawei SUN2000 5KTL Inverter',
    unitPrice: 650,
    unit: 'قطعة'
  },
  {
    productId: 'huawei-10kw',
    productSlug: 'huawei-sun2000-10ktl',
    category: 'inverters',
    nameAr: 'انفرتر هواوي 10 كيلوواط',
    nameEn: 'Huawei SUN2000 10KTL Inverter',
    unitPrice: 1100,
    unit: 'قطعة'
  },
  {
    productId: 'voltronic-3kw',
    productSlug: 'voltronic-axpert-3kw',
    category: 'inverters',
    nameAr: 'انفرتر فولترونيك 3 كيلوواط',
    nameEn: 'Voltronic Axpert 3KW Inverter',
    unitPrice: 450,
    unit: 'قطعة'
  },
  {
    productId: 'voltronic-5kw',
    productSlug: 'voltronic-axpert-5kw',
    category: 'inverters',
    nameAr: 'انفرتر فولترونيك 5 كيلوواط',
    nameEn: 'Voltronic Axpert 5KW Inverter',
    unitPrice: 580,
    unit: 'قطعة'
  },
];

// أسعار الخدمات
export const quoteServicePrices: QuoteServicePrice[] = [
  {
    id: 'installation',
    nameAr: 'التركيب والتوصيل',
    nameEn: 'Installation & Wiring',
    pricePerKw: 50,
  },
  {
    id: 'structure',
    nameAr: 'هيكل التركيب',
    nameEn: 'Mounting Structure',
    pricePerKw: 30,
  },
  {
    id: 'cables',
    nameAr: 'الكابلات والتوصيلات',
    nameEn: 'Cables & Connectors',
    pricePerKw: 20,
  },
  {
    id: 'protection',
    nameAr: 'أجهزة الحماية',
    nameEn: 'Protection Devices',
    pricePerKw: 15,
    fixedPrice: 100,
  },
];

// دوال مساعدة
export const getProductPrice = (productSlug: string): QuoteProductPrice | undefined => {
  return quoteProductPrices.find(p => p.productSlug === productSlug);
};

export const getProductsByCategory = (category: QuoteProductPrice['category']): QuoteProductPrice[] => {
  return quoteProductPrices.filter(p => p.category === category);
};

export const getServicePrice = (serviceId: string): QuoteServicePrice | undefined => {
  return quoteServicePrices.find(s => s.id === serviceId);
};
