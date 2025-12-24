// Solar Panel Products Data
// Real products from alqatta.com
// Specs marked as placeholders where unconfirmed

import { Product } from './types';

export const panelProducts: Product[] = [
  // Trina Solar Vertex S+
  {
    id: 'trina-vertex-s-plus',
    slug: 'vertex-s-plus',
    category: 'panels',
    brand: 'Trina Solar',
    model: 'TSM-NEG9R.28 (Vertex S+)',
    nameAr: 'لوح ترينا Vertex S+ (420-440W) زجاج مزدوج',
    nameEn: 'Trina Vertex S+ (420-440W) Dual Glass',
    
    shortDescAr: 'اللوح المزدوج الزجاجي الأحدث للأسطح السكنية - ضمان 30 عاماً',
    shortDescEn: 'Latest dual glass panel for residential rooftops - 30-year warranty',
    
    fullDescAr: `لوح Trina Vertex S+ هو أحدث ما توصلت إليه ترينا سولار في تقنية الألواح الشمسية السكنية. مصمم خصيصاً للأسطح السكنية، يجمع بين الكفاءة العالية والمتانة الاستثنائية.

**مميزات التصميم الزجاجي المزدوج (Dual Glass):**
- حماية مزدوجة من الجهتين
- مقاومة أعلى للرطوبة والملوحة
- عمر أطول (+30 سنة)
- مظهر أنيق ومتناسق

**تقنية N-Type:**
- كفاءة أعلى في الحرارة العالية
- تدهور أقل مع الوقت
- أداء أفضل في الإضاءة المنخفضة

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Trina Vertex S+ is Trina Solar's latest advancement in residential solar panel technology. Specifically designed for residential rooftops, it combines high efficiency with exceptional durability.

**Dual Glass Design Features:**
- Double-sided protection
- Higher resistance to humidity and salinity
- Longer lifespan (30+ years)
- Elegant and uniform appearance

**N-Type Technology:**
- Higher efficiency in high temperatures
- Less degradation over time
- Better performance in low light

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'زجاج مزدوج - حماية فائقة ومقاومة للملوحة والرطوبة', en: 'Dual glass - superior protection, salt and humidity resistant' },
      { ar: 'ضمان 30 عاماً - استثمار يدوم عقوداً', en: '30-year warranty - investment lasting decades' },
      { ar: 'تقنية N-Type - أداء أفضل في حرارة اليمن', en: 'N-Type technology - better performance in Yemen heat' },
      { ar: 'قدرة 420-440 واط - أعلى إنتاجية من نفس المساحة', en: '420-440W power - highest output from same area' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '420-440', unit: 'W' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '21.5+', unit: '%' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'N-Type Mono PERC' },
      { keyAr: 'التصميم', keyEn: 'Design', value: 'زجاج مزدوج / Dual Glass' },
      { keyAr: 'أبعاد الخلية', keyEn: 'Cell Size', value: '182', unit: 'mm' },
      { keyAr: 'معامل الحرارة', keyEn: 'Temp Coefficient', value: '-0.30 ~ -0.34', unit: '%/°C' },
      { keyAr: 'ضمان الأداء', keyEn: 'Performance Warranty', value: '30 سنة / 30 Years' },
      { keyAr: 'ضمان المنتج', keyEn: 'Product Warranty', value: '15 سنة / 15 Years' },
      { keyAr: 'مقاومة الرياح', keyEn: 'Wind Load', value: '2400', unit: 'Pa' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'لوح Vertex S+ مثالي لليمن بفضل تقنية N-Type التي تعمل بكفاءة أعلى في الحرارة، والزجاج المزدوج الذي يقاوم الملوحة والرطوبة الساحلية.',
      explanationEn: 'Vertex S+ is ideal for Yemen thanks to N-Type technology that works more efficiently in heat, and dual glass that resists coastal salinity and humidity.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'حضرموت'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Hadramout'],
      climateNotesAr: 'أداء ممتاز في المناطق الساحلية الحارة والرطبة. الزجاج المزدوج يوفر حماية إضافية من البيئة القاسية.',
      climateNotesEn: 'Excellent performance in hot and humid coastal areas. Dual glass provides extra protection from harsh environment.',
    },

    useCases: [
      {
        titleAr: 'المنازل والفلل',
        titleEn: 'Homes & Villas',
        descAr: 'الخيار الأمثل للأسطح السكنية بفضل الحجم المناسب والكفاءة العالية',
        descEn: 'Optimal choice for residential roofs due to suitable size and high efficiency',
        icon: 'Home',
      },
      {
        titleAr: 'المباني التجارية الصغيرة',
        titleEn: 'Small Commercial Buildings',
        descAr: 'مثالي للمحلات والمكاتب والعيادات',
        descEn: 'Ideal for shops, offices, and clinics',
        icon: 'Building',
      },
      {
        titleAr: 'المناطق الساحلية',
        titleEn: 'Coastal Areas',
        descAr: 'مقاومة فائقة للملوحة والرطوبة',
        descEn: 'Superior resistance to salinity and humidity',
        icon: 'Waves',
      },
      {
        titleAr: 'المشاريع المستدامة',
        titleEn: 'Sustainable Projects',
        descAr: 'ضمان 30 سنة يجعله استثمار طويل الأمد',
        descEn: '30-year warranty makes it a long-term investment',
        icon: 'Leaf',
      },
    ],

    recommendedForAr: [
      'المنازل في المناطق الساحلية (عدن، الحديدة، حضرموت)',
      'من يبحث عن ضمان طويل الأمد',
      'المساحات المحدودة التي تحتاج أقصى إنتاجية',
      'المشاريع التي تتطلب جودة عالية',
    ],
    recommendedForEn: [
      'Homes in coastal areas (Aden, Hudaydah, Hadramout)',
      'Those seeking long-term warranty',
      'Limited spaces needing maximum output',
      'Projects requiring high quality',
    ],
    notRecommendedForAr: [
      'المشاريع ذات الميزانية المحدودة جداً',
      'التركيبات المؤقتة قصيرة الأمد',
    ],
    notRecommendedForEn: [
      'Projects with very limited budget',
      'Short-term temporary installations',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين الزجاج المزدوج والزجاج العادي؟',
        questionEn: 'What is the difference between dual glass and regular glass?',
        answerAr: 'اللوح العادي له زجاج من الأمام وبلاستيك من الخلف. الزجاج المزدوج محمي من الجهتين، مما يزيد العمر ومقاومة الرطوبة والملوحة.',
        answerEn: 'Regular panel has glass front and plastic back. Dual glass is protected on both sides, increasing lifespan and resistance to humidity and salinity.',
      },
      {
        questionAr: 'هل يعمل بكفاءة في حرارة اليمن؟',
        questionEn: 'Does it work efficiently in Yemen heat?',
        answerAr: 'نعم، تقنية N-Type لها معامل حرارة أفضل من P-Type التقليدي، مما يعني فقدان أقل في الكفاءة عند ارتفاع درجة الحرارة.',
        answerEn: 'Yes, N-Type technology has a better temperature coefficient than traditional P-Type, meaning less efficiency loss at high temperatures.',
      },
      {
        questionAr: 'كم لوح أحتاج لمنزلي؟',
        questionEn: 'How many panels do I need for my home?',
        answerAr: 'يعتمد على استهلاكك. كمتوسط، 8-10 ألواح (حوالي 4 كيلوواط) تغطي احتياجات منزل متوسط في اليمن.',
        answerEn: "Depends on your consumption. On average, 8-10 panels (about 4kW) cover a typical home's needs in Yemen.",
      },
      {
        questionAr: 'ما معنى ضمان 30 سنة؟',
        questionEn: 'What does 30-year warranty mean?',
        answerAr: 'ضمان الأداء 30 سنة يعني أن اللوح سيحتفظ بأكثر من 87% من كفاءته الأصلية بعد 30 سنة. ضمان المنتج 15 سنة ضد عيوب التصنيع.',
        answerEn: 'Performance warranty of 30 years means the panel will retain over 87% of original efficiency after 30 years. Product warranty is 15 years against manufacturing defects.',
      },
      {
        questionAr: 'هل اللوح مقاوم للملوحة في المناطق الساحلية؟',
        questionEn: 'Is the panel salt-resistant for coastal areas?',
        answerAr: 'نعم، الزجاج المزدوج يوفر حماية ممتازة من الملوحة والرطوبة، مما يجعله الخيار الأمثل لعدن والحديدة وحضرموت.',
        answerEn: 'Yes, dual glass provides excellent protection from salinity and humidity, making it optimal for Aden, Hudaydah, and Hadramout.',
      },
    ],

    comparisons: [
      {
        productSlug: 'vertex',
        pros: { ar: ['زجاج مزدوج', 'مقاومة أعلى للملوحة', 'ضمان أطول'], en: ['Dual glass', 'Higher salt resistance', 'Longer warranty'] },
        cons: { ar: ['سعر أعلى قليلاً', 'قدرة أقل (420-440W مقابل 580W)'], en: ['Slightly higher price', 'Lower power (420-440W vs 580W)'] },
      },
    ],

    relatedProductSlugs: ['vertex', 'us5000', 'sp5000', 'sun2000-20ktl'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'لوح ترينا Vertex S+ (420-440W) - أفضل لوح شمسي للمنازل في اليمن',
    seoTitleEn: 'Trina Vertex S+ (420-440W) - Best Residential Solar Panel in Yemen',
    seoDescriptionAr: 'لوح ترينا سولار Vertex S+ بتقنية الزجاج المزدوج وخلايا N-Type. قدرة 420-440 واط، ضمان 30 سنة. مثالي للمناطق الساحلية في اليمن.',
    seoDescriptionEn: 'Trina Solar Vertex S+ with dual glass technology and N-Type cells. 420-440W power, 30-year warranty. Ideal for coastal areas in Yemen.',
    seoKeywordsAr: ['لوح شمسي ترينا', 'Vertex S+', 'لوح زجاج مزدوج', 'ألواح شمسية اليمن'],
    seoKeywordsEn: ['Trina solar panel', 'Vertex S+', 'dual glass panel', 'solar panels Yemen'],

    image: '/assets/products/trina-panels.jpg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // Trina Solar Vertex 580W
  {
    id: 'trina-vertex-580w',
    slug: 'vertex-580w',
    category: 'panels',
    brand: 'Trina Solar',
    model: 'TSM-DE21 Vertex 580W',
    nameAr: 'لوح ترينا Vertex 580W',
    nameEn: 'Trina Vertex 580W Panel',
    
    shortDescAr: 'لوح عالي الكفاءة بقدرة 580 واط - خلايا أحادية البلورة',
    shortDescEn: 'High-efficiency 580W panel - Monocrystalline cells',
    
    fullDescAr: `لوح ترينا سولار Vertex بقدرة 580 واط يمثل الجيل الأحدث من الألواح الشمسية عالية الكفاءة. مصمم للمشاريع المتوسطة والكبيرة.

**المميزات الرئيسية:**
- قدرة 580 واط
- كفاءة تحويل عالية
- تقنية الخلايا المنقسمة
- مقاومة ممتازة للظروف الجوية

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Trina Solar Vertex 580W panel represents the latest generation of high-efficiency solar panels. Designed for medium and large projects.

**Key Features:**
- 580W power output
- High conversion efficiency
- Half-cell technology
- Excellent weather resistance

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'قدرة 580 واط - إنتاجية عالية', en: '580W power - high productivity' },
      { ar: 'كفاءة تصل إلى 21%', en: 'Up to 21% efficiency' },
      { ar: 'ضمان أداء 25 سنة', en: '25-year performance warranty' },
      { ar: 'مناسب لجميع التطبيقات', en: 'Suitable for all applications' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '580', unit: 'W' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '21.0', unit: '%' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'Mono PERC' },
      { keyAr: 'أبعاد الخلية', keyEn: 'Cell Size', value: '210', unit: 'mm' },
      { keyAr: 'ضمان الأداء', keyEn: 'Performance Warranty', value: '25 سنة / 25 Years' },
      { keyAr: 'ضمان المنتج', keyEn: 'Product Warranty', value: '12 سنة / 12 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 3,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'لوح ممتاز للمشاريع في اليمن بفضل كفاءته العالية ومتانته.',
      explanationEn: 'Excellent panel for Yemen projects due to high efficiency and durability.',
      bestRegionsAr: ['صنعاء', 'مأرب', 'تعز'],
      bestRegionsEn: ['Sanaa', 'Marib', 'Taiz'],
      climateNotesAr: 'أداء جيد في المناخ الحار والجاف',
      climateNotesEn: 'Good performance in hot and dry climate',
    },

    useCases: [
      {
        titleAr: 'المنازل الكبيرة',
        titleEn: 'Large Homes',
        descAr: 'توفير طاقة كافية للمنازل',
        descEn: 'Sufficient power for homes',
        icon: 'Home',
      },
      {
        titleAr: 'المشاريع التجارية',
        titleEn: 'Commercial Projects',
        descAr: 'مثالي للمحلات والمكاتب',
        descEn: 'Ideal for shops and offices',
        icon: 'Building',
      },
    ],

    recommendedForAr: ['المنازل الكبيرة', 'المشاريع التجارية', 'المزارع'],
    recommendedForEn: ['Large homes', 'Commercial projects', 'Farms'],
    notRecommendedForAr: ['المساحات الصغيرة جداً'],
    notRecommendedForEn: ['Very small spaces'],

    faqs: [
      {
        questionAr: 'كم لوح أحتاج لنظام 5 كيلوواط؟',
        questionEn: 'How many panels for a 5kW system?',
        answerAr: 'تحتاج حوالي 9 ألواح لنظام 5 كيلوواط.',
        answerEn: 'You need about 9 panels for a 5kW system.',
      },
    ],

    comparisons: [],
    relatedProductSlugs: ['vertex-s-plus', 'vertex-670w', 'vertex-685w-ntype'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'لوح ترينا Vertex 580W - لوح شمسي عالي الكفاءة',
    seoTitleEn: 'Trina Vertex 580W - High Efficiency Solar Panel',
    seoDescriptionAr: 'لوح ترينا سولار Vertex بقدرة 580 واط، كفاءة 21%، ضمان 25 سنة.',
    seoDescriptionEn: 'Trina Solar Vertex 580W panel, 21% efficiency, 25-year warranty.',
    seoKeywordsAr: ['لوح ترينا 580', 'Vertex 580W', 'ألواح شمسية'],
    seoKeywordsEn: ['Trina 580W', 'Vertex panel', 'solar panels'],

    image: '/assets/products/trina-580w.jpg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // Trina Solar Vertex 670W
  {
    id: 'trina-vertex-670w',
    slug: 'vertex-670w',
    category: 'panels',
    brand: 'Trina Solar',
    model: 'TSM-DE21 Vertex 670W',
    nameAr: 'لوح ترينا Vertex 670W',
    nameEn: 'Trina Vertex 670W Panel',
    
    shortDescAr: 'لوح عملاق بقدرة 670 واط - للمشاريع الكبيرة',
    shortDescEn: 'Giant 670W panel - for large projects',
    
    fullDescAr: `لوح ترينا Vertex بقدرة 670 واط هو أحد أقوى الألواح في السوق. مصمم للمشاريع الصناعية والتجارية الكبيرة.

**المميزات:**
- قدرة استثنائية 670 واط
- كفاءة تحويل فائقة
- تقنية خلايا متطورة
- مثالي للمساحات الكبيرة

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Trina Vertex 670W panel is one of the most powerful panels in the market. Designed for large industrial and commercial projects.

**Features:**
- Exceptional 670W power
- Superior conversion efficiency
- Advanced cell technology
- Ideal for large spaces

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'قدرة 670 واط - من أقوى الألواح', en: '670W power - among the most powerful' },
      { ar: 'كفاءة عالية جداً', en: 'Very high efficiency' },
      { ar: 'توفير في التركيب والمساحة', en: 'Savings in installation and space' },
      { ar: 'ضمان طويل الأمد', en: 'Long-term warranty' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '670', unit: 'W' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '21.5', unit: '%' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'Mono PERC' },
      { keyAr: 'ضمان الأداء', keyEn: 'Performance Warranty', value: '25 سنة / 25 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 3,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'مثالي للمشاريع الكبيرة في اليمن.',
      explanationEn: 'Ideal for large projects in Yemen.',
      bestRegionsAr: ['صنعاء', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Marib'],
      climateNotesAr: 'مناسب للمناخ الجاف',
      climateNotesEn: 'Suitable for dry climate',
    },

    useCases: [
      {
        titleAr: 'المصانع',
        titleEn: 'Factories',
        descAr: 'إنتاج ضخم للمصانع',
        descEn: 'Massive production for factories',
        icon: 'Factory',
      },
      {
        titleAr: 'المزارع الشمسية',
        titleEn: 'Solar Farms',
        descAr: 'مشاريع الطاقة الكبيرة',
        descEn: 'Large energy projects',
        icon: 'Grid3x3',
      },
    ],

    recommendedForAr: ['المصانع', 'المزارع الشمسية', 'المستودعات الكبيرة'],
    recommendedForEn: ['Factories', 'Solar farms', 'Large warehouses'],
    notRecommendedForAr: ['المنازل الصغيرة'],
    notRecommendedForEn: ['Small homes'],

    faqs: [],
    comparisons: [],
    relatedProductSlugs: ['vertex-580w', 'vertex-685w-ntype'],
    relatedServiceKeys: ['installation'],
    relatedLocationSlugs: ['sanaa'],

    seoTitleAr: 'لوح ترينا Vertex 670W - لوح شمسي للمشاريع الكبيرة',
    seoTitleEn: 'Trina Vertex 670W - Solar Panel for Large Projects',
    seoDescriptionAr: 'لوح ترينا 670 واط للمشاريع الصناعية والتجارية الكبيرة.',
    seoDescriptionEn: 'Trina 670W panel for large industrial and commercial projects.',
    seoKeywordsAr: ['لوح 670 واط', 'ترينا'],
    seoKeywordsEn: ['670W panel', 'Trina'],

    image: '/assets/products/trina-670w.jpg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // Trina Solar Vertex 685W N-Type
  {
    id: 'trina-vertex-685w-ntype',
    slug: 'vertex-685w-ntype',
    category: 'panels',
    brand: 'Trina Solar',
    model: 'TSM-NEG21C Vertex N-Type 685W',
    nameAr: 'لوح ترينا Vertex N-Type 685W',
    nameEn: 'Trina Vertex N-Type 685W Panel',
    
    shortDescAr: 'أحدث تقنية N-Type بقدرة 685 واط - الأعلى كفاءة',
    shortDescEn: 'Latest N-Type technology at 685W - Highest efficiency',
    
    fullDescAr: `لوح ترينا Vertex N-Type بقدرة 685 واط يمثل قمة التقنية في صناعة الألواح الشمسية. تقنية N-Type توفر أداء أفضل في درجات الحرارة العالية.

**مميزات تقنية N-Type:**
- تدهور أقل بمرور الوقت
- أداء أفضل في الحرارة
- كفاءة أعلى من P-Type
- عمر أطول للوح

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Trina Vertex N-Type 685W panel represents the pinnacle of solar panel technology. N-Type technology provides better performance at high temperatures.

**N-Type Technology Features:**
- Less degradation over time
- Better performance in heat
- Higher efficiency than P-Type
- Longer panel lifespan

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'تقنية N-Type - الأحدث والأكثر كفاءة', en: 'N-Type technology - latest and most efficient' },
      { ar: 'قدرة 685 واط - الأقوى في الفئة', en: '685W power - strongest in class' },
      { ar: 'أداء متفوق في الحرارة', en: 'Superior performance in heat' },
      { ar: 'عمر افتراضي أطول', en: 'Longer lifespan' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '685', unit: 'W' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '22.0+', unit: '%' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'N-Type TOPCon' },
      { keyAr: 'معامل الحرارة', keyEn: 'Temp Coefficient', value: '-0.29', unit: '%/°C' },
      { keyAr: 'ضمان الأداء', keyEn: 'Performance Warranty', value: '30 سنة / 30 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'الخيار الأمثل لليمن بفضل أداء N-Type الممتاز في الحرارة.',
      explanationEn: 'Optimal choice for Yemen due to excellent N-Type performance in heat.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'أداء ممتاز في جميع المناخات',
      climateNotesEn: 'Excellent performance in all climates',
    },

    useCases: [
      {
        titleAr: 'المشاريع الكبرى',
        titleEn: 'Major Projects',
        descAr: 'أقصى إنتاجية للمشاريع الكبيرة',
        descEn: 'Maximum output for large projects',
        icon: 'Building',
      },
      {
        titleAr: 'المناطق الحارة',
        titleEn: 'Hot Areas',
        descAr: 'أداء متفوق في الحرارة العالية',
        descEn: 'Superior performance in high heat',
        icon: 'Sun',
      },
    ],

    recommendedForAr: ['المشاريع الكبرى', 'المناطق الحارة', 'من يبحث عن أعلى جودة'],
    recommendedForEn: ['Major projects', 'Hot areas', 'Those seeking highest quality'],
    notRecommendedForAr: ['الميزانيات المحدودة'],
    notRecommendedForEn: ['Limited budgets'],

    faqs: [],
    comparisons: [],
    relatedProductSlugs: ['vertex-580w', 'vertex-670w'],
    relatedServiceKeys: ['installation'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'لوح ترينا Vertex N-Type 685W - أحدث تقنية شمسية',
    seoTitleEn: 'Trina Vertex N-Type 685W - Latest Solar Technology',
    seoDescriptionAr: 'لوح ترينا N-Type بقدرة 685 واط، كفاءة 22%، أداء متفوق في الحرارة.',
    seoDescriptionEn: 'Trina N-Type 685W panel, 22% efficiency, superior heat performance.',
    seoKeywordsAr: ['لوح N-Type', 'ترينا 685', 'ألواح شمسية'],
    seoKeywordsEn: ['N-Type panel', 'Trina 685W', 'solar panels'],

    image: '/assets/products/trina-685w-ntype.jpg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // Trina Solar Vertex
  {
    id: 'trina-vertex',
    slug: 'vertex',
    category: 'panels',
    brand: 'Trina Solar',
    model: 'TSM-DE19R (Vertex)',
    nameAr: 'لوح ترينا Vertex 580W (TSM-DE19R)',
    nameEn: 'Trina Vertex 580W (TSM-DE19R)',
    
    shortDescAr: 'سلسلة Vertex الأسطورية - الأكثر مبيعاً عالمياً بخلايا 210mm العملاقة',
    shortDescEn: 'Legendary Vertex series - World\'s best-selling with 210mm giant cells',
    
    fullDescAr: `لوح Trina Vertex هو الأكثر مبيعاً عالمياً في فئة الألواح التجارية والصناعية. بقدرة تصل إلى 580 واط وكفاءة 21.5%، يوفر أقصى إنتاجية من أقل مساحة.

**تقنية الخلايا العملاقة 210mm:**
- أكبر خلايا شمسية في السوق
- تيار أعلى = طاقة أكثر
- كفاءة استثنائية

**مثالي للمشاريع الكبيرة:**
- المصانع والمستودعات
- المزارع الشمسية
- المنشآت التجارية الكبيرة
- محطات الضخ والآبار

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Trina Vertex is the world's best-selling panel in the commercial and industrial category. With power up to 580W and 21.5% efficiency, it provides maximum output from minimum space.

**210mm Giant Cell Technology:**
- Largest solar cells in the market
- Higher current = more power
- Exceptional efficiency

**Ideal for Large Projects:**
- Factories and warehouses
- Solar farms
- Large commercial facilities
- Pumping stations and wells

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'قدرة 580 واط - أقوى لوح سكني/تجاري متاح', en: '580W power - most powerful residential/commercial panel available' },
      { ar: 'كفاءة 21.5% - أقصى إنتاج من أقل مساحة', en: '21.5% efficiency - maximum output from minimum space' },
      { ar: 'خلايا 210mm العملاقة - أحدث تقنية في السوق', en: '210mm giant cells - latest technology in market' },
      { ar: 'الأكثر مبيعاً عالمياً - موثوقية مثبتة', en: 'World\'s best-selling - proven reliability' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '570-590', unit: 'W' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '21.5', unit: '%' },
      { keyAr: 'أبعاد الخلية', keyEn: 'Cell Size', value: '210', unit: 'mm' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'Mono PERC' },
      { keyAr: 'عدد الخلايا', keyEn: 'Cell Count', value: '156 (2×78)' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '2384 × 1096 × 35', unit: 'mm' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '~32', unit: 'kg' },
      { keyAr: 'ضمان الأداء', keyEn: 'Performance Warranty', value: '25 سنة / 25 Years' },
      { keyAr: 'ضمان المنتج', keyEn: 'Product Warranty', value: '12 سنة / 12 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 3,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'لوح Vertex مثالي للمشاريع الكبيرة في اليمن. حجمه الكبير يعني ألواح أقل = تركيب أسرع = تكلفة أقل.',
      explanationEn: 'Vertex panel is ideal for large projects in Yemen. Its large size means fewer panels = faster installation = lower cost.',
      bestRegionsAr: ['صنعاء', 'مأرب', 'حضرموت', 'تعز'],
      bestRegionsEn: ['Sanaa', 'Marib', 'Hadramout', 'Taiz'],
      climateNotesAr: 'للمناطق الساحلية الرطبة، يُفضل Vertex S+ بالزجاج المزدوج. Vertex مناسب أكثر للمناطق الجافة.',
      climateNotesEn: 'For humid coastal areas, Vertex S+ with dual glass is preferred. Vertex is more suitable for dry areas.',
    },

    useCases: [
      {
        titleAr: 'المصانع والمستودعات',
        titleEn: 'Factories & Warehouses',
        descAr: 'أقصى إنتاج من أسطح المباني الصناعية',
        descEn: 'Maximum output from industrial building roofs',
        icon: 'Factory',
      },
      {
        titleAr: 'المزارع الشمسية',
        titleEn: 'Solar Farms',
        descAr: 'مشاريع الطاقة الشمسية الكبيرة',
        descEn: 'Large-scale solar energy projects',
        icon: 'Grid3x3',
      },
      {
        titleAr: 'الآبار ومحطات الضخ',
        titleEn: 'Wells & Pump Stations',
        descAr: 'تشغيل مضخات المياه بالطاقة الشمسية',
        descEn: 'Solar-powered water pumps',
        icon: 'Droplets',
      },
      {
        titleAr: 'الفنادق والمنتجعات',
        titleEn: 'Hotels & Resorts',
        descAr: 'خفض فواتير الكهرباء للمنشآت السياحية',
        descEn: 'Reduce electricity bills for tourism facilities',
        icon: 'Hotel',
      },
    ],

    recommendedForAr: [
      'المشاريع التجارية والصناعية الكبيرة',
      'المزارع ومشاريع الري',
      'المباني ذات الأسطح الواسعة',
      'من يريد أقل عدد ألواح بأعلى إنتاج',
    ],
    recommendedForEn: [
      'Large commercial and industrial projects',
      'Farms and irrigation projects',
      'Buildings with large roofs',
      'Those wanting fewest panels with highest output',
    ],
    notRecommendedForAr: [
      'الأسطح السكنية الصغيرة (اللوح كبير جداً)',
      'المناطق الساحلية شديدة الرطوبة (استخدم Vertex S+)',
      'المشاريع الصغيرة (أقل من 5 كيلوواط)',
    ],
    notRecommendedForEn: [
      'Small residential roofs (panel is too large)',
      'Very humid coastal areas (use Vertex S+)',
      'Small projects (under 5kW)',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين Vertex و Vertex S+؟',
        questionEn: 'What is the difference between Vertex and Vertex S+?',
        answerAr: 'Vertex أكبر حجماً وأعلى قدرة (580W) مناسب للمشاريع الكبيرة. Vertex S+ أصغر (420-440W) مع زجاج مزدوج، مناسب للمنازل والمناطق الساحلية.',
        answerEn: 'Vertex is larger and higher power (580W) suitable for large projects. Vertex S+ is smaller (420-440W) with dual glass, suitable for homes and coastal areas.',
      },
      {
        questionAr: 'هل يناسب المنازل العادية؟',
        questionEn: 'Is it suitable for regular homes?',
        answerAr: 'يمكن، لكن حجمه الكبير قد لا يناسب جميع الأسطح. للمنازل، ننصح بـ Vertex S+ الأصغر والأنسب.',
        answerEn: 'It can, but its large size may not fit all roofs. For homes, we recommend the smaller and more suitable Vertex S+.',
      },
      {
        questionAr: 'كم ينتج في اليمن يومياً؟',
        questionEn: 'How much does it produce daily in Yemen?',
        answerAr: 'في المتوسط، حوالي 2.5-3 كيلوواط ساعة يومياً للوح الواحد، حسب الموقع والموسم.',
        answerEn: 'On average, about 2.5-3kWh daily per panel, depending on location and season.',
      },
      {
        questionAr: 'كم لوح أحتاج لتشغيل مضخة مياه؟',
        questionEn: 'How many panels do I need to run a water pump?',
        answerAr: 'يعتمد على قدرة المضخة. مضخة 3 حصان تحتاج حوالي 6-8 ألواح Vertex 580W.',
        answerEn: 'Depends on pump capacity. 3HP pump needs about 6-8 Vertex 580W panels.',
      },
      {
        questionAr: 'هل يتحمل الغبار والأتربة؟',
        questionEn: 'Does it withstand dust and sand?',
        answerAr: 'نعم، الزجاج المقوى مقاوم للخدش. ينصح بتنظيف الألواح كل 2-3 أشهر لأداء أمثل.',
        answerEn: 'Yes, tempered glass is scratch resistant. Recommended to clean panels every 2-3 months for optimal performance.',
      },
    ],

    comparisons: [
      {
        productSlug: 'vertex-s-plus',
        pros: { ar: ['قدرة أعلى', 'تكلفة أقل لكل واط', 'أقل عدد ألواح'], en: ['Higher power', 'Lower cost per watt', 'Fewer panels needed'] },
        cons: { ar: ['حجم كبير جداً', 'بدون زجاج مزدوج', 'ثقيل'], en: ['Very large size', 'No dual glass', 'Heavy'] },
      },
    ],

    relatedProductSlugs: ['vertex-s-plus', 'sun2000-30ktl', 'sun2000-50ktl', 'sp8000'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'لوح ترينا Vertex 580W - أقوى لوح شمسي للمشاريع الكبيرة في اليمن',
    seoTitleEn: 'Trina Vertex 580W - Most Powerful Solar Panel for Large Projects in Yemen',
    seoDescriptionAr: 'لوح ترينا سولار Vertex بقدرة 580 واط وخلايا 210mm العملاقة. الأكثر مبيعاً عالمياً للمصانع والمزارع الشمسية. ضمان 25 سنة.',
    seoDescriptionEn: 'Trina Solar Vertex with 580W power and 210mm giant cells. World\'s best-selling for factories and solar farms. 25-year warranty.',
    seoKeywordsAr: ['لوح ترينا 580 واط', 'Vertex', 'ألواح مصانع', 'مزارع شمسية اليمن'],
    seoKeywordsEn: ['Trina 580W panel', 'Vertex', 'factory panels', 'solar farms Yemen'],

    image: '/assets/products/trina-580w.jpg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },
];
