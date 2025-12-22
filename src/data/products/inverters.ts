// Inverter Products Data
// Real products from alqatta.com
// Specs marked as placeholders where unconfirmed

import { Product } from './types';

export const inverterProducts: Product[] = [
  // OPTI-Solar SP1000
  {
    id: 'opti-sp1000',
    slug: 'sp1000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP1000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP1000 Handy Ultra',
    nameEn: 'OPTI-Solar SP1000 Handy Ultra Inverter',
    
    shortDescAr: 'انفرتر 1000 واط بموجة صافية - الخيار الأول للكرفانات والمشاريع الصغيرة',
    shortDescEn: '1000W pure sine wave inverter - First choice for caravans and small projects',
    
    fullDescAr: `انفرتر OPTI-Solar SP1000 هو بداية رحلتك في عالم الطاقة الشمسية. بقدرة 1000 واط وموجة صافية، يوفر طاقة نظيفة للأجهزة الحساسة.

**المميزات:**
- موجة صافية لجميع الأجهزة
- شاحن شمسي MPPT مدمج
- نظام 12 فولت سهل التركيب
- شاشة عرض واضحة

**مثالي لـ:**
- الكرفانات والرحلات
- الإضاءة الأساسية
- الأجهزة الصغيرة

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP1000 is the start of your solar energy journey. With 1000W power and pure sine wave, it provides clean power for sensitive devices.

**Features:**
- Pure sine wave for all devices
- Built-in MPPT solar charger
- Easy 12V system setup
- Clear display screen

**Ideal for:**
- Caravans and trips
- Basic lighting
- Small appliances

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'موجة صافية - آمن لجميع الأجهزة الإلكترونية', en: 'Pure sine wave - safe for all electronic devices' },
      { ar: 'نظام 12 فولت - بطارية واحدة تكفي', en: '12V system - one battery is enough' },
      { ar: 'MPPT مدمج - أقصى استفادة من الألواح', en: 'Built-in MPPT - maximum panel utilization' },
      { ar: 'خفيف وصغير - سهل التركيب والنقل', en: 'Light and compact - easy to install and move' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '1000', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '2000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '12', unit: 'V' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT مدمج / Built-in MPPT' },
      { keyAr: 'كفاءة التحويل', keyEn: 'Conversion Efficiency', value: '93+', unit: '%' },
      { keyAr: 'أقصى تيار شحن', keyEn: 'Max Charge Current', value: '30', unit: 'A' },
      { keyAr: 'الحماية', keyEn: 'Protection', value: 'شحن زائد، تفريغ عميق، قصر دائرة' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 3,
        dustResistance: 4,
      },
      explanationAr: 'انفرتر مثالي للبداية في اليمن. سهل الفهم والتركيب، مع حماية مدمجة.',
      explanationEn: 'Ideal starter inverter for Yemen. Easy to understand and install, with built-in protection.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'يعمل بكفاءة في جميع مناخات اليمن',
      climateNotesEn: 'Works efficiently in all Yemen climates',
    },

    useCases: [
      {
        titleAr: 'الكرفانات والرحلات',
        titleEn: 'Caravans & Trips',
        descAr: 'الخيار الأول للرحلات البرية والتخييم',
        descEn: 'First choice for road trips and camping',
        icon: 'Caravan',
      },
      {
        titleAr: 'الغرف والاستراحات',
        titleEn: 'Rooms & Cabins',
        descAr: 'إضاءة ومراوح وشحن أجهزة',
        descEn: 'Lighting, fans, and device charging',
        icon: 'Lamp',
      },
      {
        titleAr: 'المزارع الصغيرة',
        titleEn: 'Small Farms',
        descAr: 'تشغيل أجهزة الري البسيطة والإنارة',
        descEn: 'Run simple irrigation devices and lighting',
        icon: 'Leaf',
      },
      {
        titleAr: 'نقاط البيع المتنقلة',
        titleEn: 'Mobile POS',
        descAr: 'تشغيل أجهزة الكاشير والإنترنت في المواقع المؤقتة',
        descEn: 'Run POS and internet in temporary locations',
        icon: 'Store',
      },
    ],

    recommendedForAr: [
      'المبتدئين في الطاقة الشمسية',
      'الكرفانات والمركبات الترفيهية',
      'الميزانيات المحدودة',
      'الأحمال الخفيفة (أقل من 800 واط)',
    ],
    recommendedForEn: [
      'Solar energy beginners',
      'Caravans and RVs',
      'Limited budgets',
      'Light loads (under 800W)',
    ],
    notRecommendedForAr: [
      'المنازل الكاملة',
      'الأجهزة عالية الاستهلاك',
      'التوسع المستقبلي الكبير',
    ],
    notRecommendedForEn: [
      'Full homes',
      'High-consumption appliances',
      'Major future expansion',
    ],

    faqs: [
      {
        questionAr: 'هل يشغل الثلاجة؟',
        questionEn: 'Can it run a refrigerator?',
        answerAr: 'ثلاجة صغيرة (أقل من 150 لتر) نعم. الثلاجات الكبيرة تحتاج قدرة أعلى.',
        answerEn: 'Small refrigerator (under 150L) yes. Large refrigerators need higher capacity.',
      },
      {
        questionAr: 'كم بطارية أحتاج؟',
        questionEn: 'How many batteries do I need?',
        answerAr: 'بطارية واحدة 12 فولت (100-200 أمبير) تكفي للاستخدام الأساسي.',
        answerEn: 'One 12V battery (100-200Ah) is enough for basic use.',
      },
      {
        questionAr: 'كم لوح شمسي يحتاج؟',
        questionEn: 'How many solar panels does it need?',
        answerAr: 'لوح واحد 400W أو اثنين 200W كافية لشحن البطارية يومياً.',
        answerEn: 'One 400W panel or two 200W panels are enough to charge the battery daily.',
      },
      {
        questionAr: 'هل مناسب للاستخدام الدائم في المنزل؟',
        questionEn: 'Is it suitable for permanent home use?',
        answerAr: 'للأحمال الخفيفة فقط. للمنزل الكامل، ننصح بـ SP5000 أو أعلى.',
        answerEn: 'For light loads only. For full home, we recommend SP5000 or higher.',
      },
      {
        questionAr: 'ما الفرق بين SP1000 و SP1200؟',
        questionEn: 'What is the difference between SP1000 and SP1200?',
        answerAr: 'SP1200 يدعم ألواح أكبر وقدرة إخراج أعلى (1200W مقابل 1000W).',
        answerEn: 'SP1200 supports larger panels and higher output (1200W vs 1000W).',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp1200',
        pros: { ar: ['أرخص', 'أخف'], en: ['Cheaper', 'Lighter'] },
        cons: { ar: ['قدرة أقل', 'لا يدعم ألواح كبيرة'], en: ['Lower power', 'No large panel support'] },
      },
    ],

    relatedProductSlugs: ['sp1200', 'sp3000', '12v-100ah-lithium', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر OPTI-Solar SP1000 - انفرتر كرفانات وطاقة متنقلة في اليمن',
    seoTitleEn: 'OPTI-Solar SP1000 - Caravan and Portable Power Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP1000 Handy Ultra بقدرة 1000 واط. موجة صافية، MPPT مدمج، نظام 12 فولت. مثالي للكرفانات والرحلات.',
    seoDescriptionEn: 'OPTI-Solar SP1000 Handy Ultra with 1000W power. Pure sine wave, built-in MPPT, 12V system. Ideal for caravans and trips.',
    seoKeywordsAr: ['انفرتر 1000 واط', 'OPTI-Solar SP1000', 'انفرتر كرفان', 'طاقة متنقلة'],
    seoKeywordsEn: ['1000W inverter', 'OPTI-Solar SP1000', 'caravan inverter', 'portable power'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // OPTI-Solar SP1200
  {
    id: 'opti-sp1200',
    slug: 'sp1200',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP1200 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP1200 Handy Ultra',
    nameEn: 'OPTI-Solar SP1200 Handy Ultra Inverter',
    
    shortDescAr: 'أول انفرتر 12 فولت يدعم الألواح التجارية الكبيرة - 1200 واط صافي',
    shortDescEn: 'First 12V inverter supporting large commercial panels - 1200W pure',
    
    fullDescAr: `انفرتر OPTI-Solar SP1200 هو الوحيد في فئة 12 فولت الذي يدعم الألواح الشمسية الكبيرة (حتى 580 واط). مثالي لمن يريد نظام بطارية واحدة مع ألواح عالية الكفاءة.

**ميزة فريدة:**
- يقبل ألواح تجارية كبيرة (حتى 580W)
- أقصى استفادة من الألواح الحديثة
- نظام 12V بسيط

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP1200 is the only 12V inverter that supports large solar panels (up to 580W). Ideal for those wanting a single-battery system with high-efficiency panels.

**Unique Feature:**
- Accepts large commercial panels (up to 580W)
- Maximum utilization of modern panels
- Simple 12V system

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'يدعم ألواح حتى 580 واط - الوحيد في فئة 12 فولت', en: 'Supports panels up to 580W - only one in 12V class' },
      { ar: 'نظام بطارية واحدة - بساطة في التركيب والتكلفة', en: 'Single battery system - simplicity in installation and cost' },
      { ar: '1200 واط صافي - أقوى من SP1000', en: '1200W pure - stronger than SP1000' },
      { ar: 'MPPT عالي الجهد - كفاءة أعلى', en: 'High voltage MPPT - higher efficiency' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '1200', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '2400', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '12', unit: 'V' },
      { keyAr: 'أقصى جهد PV', keyEn: 'Max PV Voltage', value: '150+', unit: 'V' },
      { keyAr: 'أقصى قدرة PV', keyEn: 'Max PV Power', value: '580', unit: 'W' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT مدمج / Built-in MPPT' },
      { keyAr: 'كفاءة التحويل', keyEn: 'Conversion Efficiency', value: '93+', unit: '%' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 3,
        dustResistance: 4,
      },
      explanationAr: 'مثالي لمن يريد الجمع بين بساطة نظام 12V وكفاءة الألواح الحديثة الكبيرة.',
      explanationEn: 'Ideal for those wanting to combine 12V system simplicity with modern large panel efficiency.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'مناسب لجميع مناخات اليمن',
      climateNotesEn: 'Suitable for all Yemen climates',
    },

    useCases: [
      {
        titleAr: 'المنازل الصغيرة',
        titleEn: 'Small Homes',
        descAr: 'إضاءة ومراوح وتلفزيون مع ألواح حديثة كبيرة',
        descEn: 'Lighting, fans, and TV with modern large panels',
        icon: 'Home',
      },
      {
        titleAr: 'المحلات التجارية الصغيرة',
        titleEn: 'Small Shops',
        descAr: 'إضاءة وأجهزة كاشير ونقاط بيع',
        descEn: 'Lighting, POS devices, and sales points',
        icon: 'Store',
      },
      {
        titleAr: 'الاستراحات والمخيمات',
        titleEn: 'Cabins & Camps',
        descAr: 'طاقة شمسية للمواقع البعيدة عن الشبكة',
        descEn: 'Solar power for off-grid locations',
        icon: 'Tent',
      },
      {
        titleAr: 'المزارع الصغيرة',
        titleEn: 'Small Farms',
        descAr: 'تشغيل مضخات صغيرة وإنارة',
        descEn: 'Run small pumps and lighting',
        icon: 'Leaf',
      },
    ],

    recommendedForAr: [
      'من يريد استخدام ألواح كبيرة مع نظام 12V',
      'المنازل ذات الأحمال الخفيفة',
      'الميزانية المتوسطة',
    ],
    recommendedForEn: [
      'Those wanting large panels with 12V system',
      'Homes with light loads',
      'Medium budget',
    ],
    notRecommendedForAr: [
      'الأحمال عالية الاستهلاك',
      'التوسع الكبير مستقبلاً',
    ],
    notRecommendedForEn: [
      'High-consumption loads',
      'Major future expansion',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين SP1200 و SP1000؟',
        questionEn: 'What is the difference between SP1200 and SP1000?',
        answerAr: 'SP1200 يدعم ألواح أكبر (حتى 580W) وقدرة إخراج أعلى (1200W). SP1000 أرخص وأخف.',
        answerEn: 'SP1200 supports larger panels (up to 580W) and higher output (1200W). SP1000 is cheaper and lighter.',
      },
      {
        questionAr: 'لماذا أختار SP1200 بدلاً من SP3000؟',
        questionEn: 'Why choose SP1200 over SP3000?',
        answerAr: 'SP1200 يعمل ببطارية واحدة 12V فقط (أرخص)، بينما SP3000 يحتاج بطاريتين 24V.',
        answerEn: 'SP1200 works with just one 12V battery (cheaper), while SP3000 needs two 24V batteries.',
      },
      {
        questionAr: 'هل يشغل ثلاجة متوسطة؟',
        questionEn: 'Can it run a medium fridge?',
        answerAr: 'ثلاجة 10 قدم يمكن تشغيلها، لكن مع أحمال أخرى قليلة فقط.',
        answerEn: "10ft fridge can run, but with only few other loads.",
      },
      {
        questionAr: 'كم لوح Vertex يمكن توصيله؟',
        questionEn: 'How many Vertex panels can be connected?',
        answerAr: 'لوح واحد Vertex 580W كافي. الجهد العالي يسمح باستخدام ألواح حديثة مباشرة.',
        answerEn: 'One Vertex 580W panel is enough. High voltage allows using modern panels directly.',
      },
      {
        questionAr: 'هل يحتاج صيانة؟',
        questionEn: 'Does it need maintenance?',
        answerAr: 'لا، فقط تأكد من التهوية الجيدة وتنظيف فلتر الغبار كل 6 أشهر.',
        answerEn: 'No, just ensure good ventilation and clean dust filter every 6 months.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp1000',
        pros: { ar: ['يدعم ألواح كبيرة', 'قدرة أعلى'], en: ['Supports large panels', 'Higher power'] },
        cons: { ar: ['سعر أعلى'], en: ['Higher price'] },
      },
      {
        productSlug: 'sp3000',
        pros: { ar: ['بطارية واحدة تكفي', 'أرخص'], en: ['One battery enough', 'Cheaper'] },
        cons: { ar: ['قدرة أقل', 'توسعة محدودة'], en: ['Lower power', 'Limited expansion'] },
      },
    ],

    relatedProductSlugs: ['sp1000', 'sp3000', '12v-100ah-lithium'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'انفرتر OPTI-Solar SP1200 - انفرتر 12 فولت يدعم ألواح 580W',
    seoTitleEn: 'OPTI-Solar SP1200 - 12V Inverter Supporting 580W Panels',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP1200 Handy Ultra. الوحيد في فئة 12V الذي يدعم الألواح الكبيرة. 1200 واط صافي.',
    seoDescriptionEn: 'OPTI-Solar SP1200 Handy Ultra. Only 12V inverter supporting large panels. 1200W pure sine.',
    seoKeywordsAr: ['انفرتر SP1200', 'OPTI-Solar', 'انفرتر 12 فولت'],
    seoKeywordsEn: ['SP1200 inverter', 'OPTI-Solar', '12V inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // OPTI-Solar SP3000
  {
    id: 'opti-sp3000',
    slug: 'sp3000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP3000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP3000 Handy Ultra',
    nameEn: 'OPTI-Solar SP3000 Handy Ultra Inverter',
    
    shortDescAr: 'الحل الاقتصادي المتطور - انفرتر 24 فولت بتقنية الجهد العالي',
    shortDescEn: 'Advanced economic solution - 24V inverter with high voltage technology',
    
    fullDescAr: `انفرتر OPTI-Solar SP3000 يوفر توازن مثالي بين القدرة والتكلفة. بنظام 24 فولت، يقلل من تكاليف الكابلات مع توفير 3000 واط من الطاقة النظيفة.

**توفير حقيقي في التمديدات:**
- جهد أعلى = تيار أقل = كابلات أرفع
- تكلفة تأسيسية أقل
- كفاءة أعلى

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP3000 provides ideal balance between power and cost. With 24V system, it reduces cable costs while providing 3000W of clean power.

**Real savings in wiring:**
- Higher voltage = lower current = thinner cables
- Lower installation cost
- Higher efficiency

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '3000 واط صافي - يغطي معظم احتياجات المنزل الصغير', en: '3000W pure - covers most small home needs' },
      { ar: 'نظام 24V - توفير في كابلات التوصيل', en: '24V system - savings on connection cables' },
      { ar: 'سعر اقتصادي - أفضل قيمة في فئته', en: 'Economic price - best value in its class' },
      { ar: 'MPPT عالي الكفاءة - استفادة قصوى من الشمس', en: 'High efficiency MPPT - maximum sun utilization' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '3000', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '6000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '24', unit: 'V' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT مدمج / Built-in MPPT' },
      { keyAr: 'كفاءة MPPT', keyEn: 'MPPT Efficiency', value: '98+', unit: '%' },
      { keyAr: 'أقصى تيار شحن', keyEn: 'Max Charge Current', value: '50', unit: 'A' },
      { keyAr: 'الحماية', keyEn: 'Protection', value: 'شحن زائد، تفريغ عميق، قصر دائرة، حرارة زائدة' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 4,
        dustResistance: 4,
      },
      explanationAr: 'خيار ممتاز للمنازل الصغيرة والمتوسطة في اليمن. نظام 24V يوفر في كابلات التوصيل مقارنة بـ 12V، ويعمل بكفاءة في الحرارة العالية.',
      explanationEn: 'Excellent choice for small and medium homes in Yemen. 24V system saves on connection cables compared to 12V, and works efficiently in high heat.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'إب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Ibb'],
      climateNotesAr: 'يعمل بكفاءة في جميع مناخات اليمن. التبريد الطبيعي كافٍ في معظم الحالات.',
      climateNotesEn: 'Works efficiently in all Yemen climates. Natural cooling is sufficient in most cases.',
    },

    useCases: [
      {
        titleAr: 'المنازل الصغيرة',
        titleEn: 'Small Homes',
        descAr: 'إضاءة كاملة، مراوح، تلفزيون، ثلاجة صغيرة - الحل الاقتصادي للعائلات',
        descEn: 'Full lighting, fans, TV, small fridge - economic solution for families',
        icon: 'Home',
      },
      {
        titleAr: 'المكاتب والعيادات الصغيرة',
        titleEn: 'Small Offices & Clinics',
        descAr: 'أجهزة كمبيوتر، إضاءة، طابعات - طاقة موثوقة للأعمال',
        descEn: 'Computers, lighting, printers - reliable power for business',
        icon: 'Building',
      },
      {
        titleAr: 'المحلات التجارية',
        titleEn: 'Commercial Shops',
        descAr: 'إضاءة المحل، أجهزة كاشير، ثلاجة عرض صغيرة',
        descEn: 'Shop lighting, POS devices, small display fridge',
        icon: 'Store',
      },
      {
        titleAr: 'المزارع والاستراحات',
        titleEn: 'Farms & Cabins',
        descAr: 'طاقة شمسية للمواقع البعيدة - مضخات صغيرة وإنارة',
        descEn: 'Solar power for remote locations - small pumps and lighting',
        icon: 'Leaf',
      },
    ],

    recommendedForAr: [
      'المنازل الصغيرة (2-3 غرف)',
      'الميزانية المتوسطة المحدودة',
      'الأحمال حتى 2500 واط',
      'من يريد التوفير في كابلات التوصيل',
    ],
    recommendedForEn: [
      'Small homes (2-3 rooms)',
      'Medium-limited budget',
      'Loads up to 2500W',
      'Those wanting to save on connection cables',
    ],
    notRecommendedForAr: [
      'المنازل الكبيرة (4+ غرف)',
      'تشغيل المكيفات',
      'الأحمال الثقيلة (غسالات كبيرة، مضخات)',
      'التوسع الكبير مستقبلاً',
    ],
    notRecommendedForEn: [
      'Large homes (4+ rooms)',
      'Running AC units',
      'Heavy loads (large washers, pumps)',
      'Major future expansion',
    ],

    faqs: [
      {
        questionAr: 'هل يشغل مكيف؟',
        questionEn: 'Can it run an AC?',
        answerAr: 'لا، 3000 واط لا تكفي لتشغيل مكيف. تحتاج SP5000 أو أعلى. SP3000 مصمم للإضاءة والأجهزة الأساسية.',
        answerEn: 'No, 3000W is not enough to run an AC. You need SP5000 or higher. SP3000 is designed for lighting and basic appliances.',
      },
      {
        questionAr: 'كم بطارية أحتاج؟',
        questionEn: 'How many batteries do I need?',
        answerAr: 'بطاريتين 12 فولت على التوالي (للحصول على 24V)، أو بطارية ليثيوم 24 فولت واحدة مثل Pelio-L.',
        answerEn: 'Two 12V batteries in series (to get 24V), or one 24V lithium battery like Pelio-L.',
      },
      {
        questionAr: 'ما الفرق بين SP3000 و SP5000؟',
        questionEn: 'What is the difference between SP3000 and SP5000?',
        answerAr: 'SP5000 يعمل على 48V (أكثر كفاءة)، قدرة 5000W (يشغل مكيف)، وسعر أعلى. SP3000 اقتصادي للأحمال الخفيفة.',
        answerEn: 'SP5000 runs on 48V (more efficient), 5000W power (runs AC), and higher price. SP3000 is economic for light loads.',
      },
      {
        questionAr: 'كم لوح شمسي يحتاج SP3000؟',
        questionEn: 'How many solar panels does SP3000 need?',
        answerAr: '3-4 ألواح Vertex S+ (حوالي 1.5-2 كيلوواط) كافية للاستخدام اليومي المعتدل.',
        answerEn: '3-4 Vertex S+ panels (about 1.5-2kW) are enough for moderate daily use.',
      },
      {
        questionAr: 'هل SP3000 مناسب للمناطق الساحلية؟',
        questionEn: 'Is SP3000 suitable for coastal areas?',
        answerAr: 'نعم، لكن يُنصح بتركيبه في مكان محمي من الرطوبة المباشرة. الصيانة الدورية مهمة في المناطق الساحلية.',
        answerEn: 'Yes, but it is recommended to install it in a place protected from direct humidity. Regular maintenance is important in coastal areas.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp5000',
        pros: { ar: ['أرخص بكثير', 'بطاريتين تكفي', 'بساطة التركيب'], en: ['Much cheaper', 'Two batteries enough', 'Simple installation'] },
        cons: { ar: ['قدرة أقل', 'لا يشغل مكيف', 'كفاءة أقل'], en: ['Lower power', 'Cannot run AC', 'Lower efficiency'] },
      },
      {
        productSlug: 'sp1200',
        pros: { ar: ['قدرة أعلى', 'يشغل ثلاجة متوسطة'], en: ['Higher power', 'Runs medium fridge'] },
        cons: { ar: ['سعر أعلى', 'بطاريتين بدل واحدة'], en: ['Higher price', 'Two batteries instead of one'] },
      },
    ],

    relatedProductSlugs: ['sp5000', 'sp1200', 'us5000', 'pelio-l', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah', 'ibb'],

    seoTitleAr: 'انفرتر OPTI-Solar SP3000 - الحل الاقتصادي للمنازل الصغيرة في اليمن',
    seoTitleEn: 'OPTI-Solar SP3000 - Economic Solution for Small Homes in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP3000 بقدرة 3000 واط ونظام 24 فولت. الخيار الاقتصادي للمنازل الصغيرة والمحلات التجارية في اليمن.',
    seoDescriptionEn: 'OPTI-Solar SP3000 with 3000W power and 24V system. Economic choice for small homes and shops in Yemen.',
    seoKeywordsAr: ['انفرتر 3000 واط', 'SP3000', 'انفرتر منزلي', 'انفرتر اقتصادي اليمن'],
    seoKeywordsEn: ['3000W inverter', 'SP3000', 'home inverter', 'economic inverter Yemen'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // OPTI-Solar SP5000
  {
    id: 'opti-sp5000',
    slug: 'sp5000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP5000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP5000 Handy Ultra',
    nameEn: 'OPTI-Solar SP5000 Handy Ultra Inverter',
    
    shortDescAr: 'الأكثر طلباً للمنازل - العمود الفقري لأنظمة الطاقة المنزلية في اليمن',
    shortDescEn: 'Most requested for homes - Backbone of home energy systems in Yemen',
    
    fullDescAr: `انفرتر OPTI-Solar SP5000 هو الخيار الأول للمنازل اليمنية. بقدرة 5000 واط ونظام MPPT عالي الجهد، يوفر طاقة كافية لتشغيل منزل كامل بما في ذلك المكيف.

**لماذا SP5000 هو الأكثر مبيعاً؟**
- 5000 واط تكفي لمعظم المنازل
- يشغل مكيف 1 طن + أحمال أخرى
- MPPT عالي الجهد = كفاءة أعلى
- موثوقية مثبتة في آلاف المنازل اليمنية

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP5000 is the first choice for Yemeni homes. With 5000W power and high-voltage MPPT, it provides enough power to run a complete home including AC.

**Why is SP5000 the best-seller?**
- 5000W is enough for most homes
- Runs 1-ton AC + other loads
- High-voltage MPPT = higher efficiency
- Proven reliability in thousands of Yemeni homes

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '5000 واط صافي - يشغل منزل كامل بما فيه المكيف', en: '5000W pure - runs complete home including AC' },
      { ar: 'الأكثر مبيعاً في اليمن - موثوقية مثبتة', en: 'Best-seller in Yemen - proven reliability' },
      { ar: 'MPPT عالي الجهد - كفاءة 98%', en: 'High-voltage MPPT - 98% efficiency' },
      { ar: 'نظام 48V - الأكثر كفاءة للمنازل', en: '48V system - most efficient for homes' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '5000', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '10000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '48', unit: 'V' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT عالي الجهد / High Voltage MPPT' },
      { keyAr: 'كفاءة MPPT', keyEn: 'MPPT Efficiency', value: '98+', unit: '%' },
      { keyAr: 'أقصى تيار شحن', keyEn: 'Max Charge Current', value: '80', unit: 'A' },
      { keyAr: 'الحماية', keyEn: 'Protection', value: 'شحن زائد، تفريغ عميق، قصر دائرة، حرارة زائدة' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'SP5000 هو المعيار الذهبي للمنازل اليمنية. قدرته تكفي لجميع الاحتياجات المنزلية مع هامش أمان.',
      explanationEn: 'SP5000 is the gold standard for Yemeni homes. Its capacity covers all home needs with safety margin.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Marib'],
      climateNotesAr: 'مثالي لجميع مناطق اليمن. يعمل بكفاءة حتى في أشد الحرارة.',
      climateNotesEn: 'Ideal for all Yemen regions. Works efficiently even in extreme heat.',
    },

    useCases: [
      {
        titleAr: 'المنازل والفلل',
        titleEn: 'Homes & Villas',
        descAr: 'تشغيل كامل المنزل بما فيه المكيف',
        descEn: 'Run entire home including AC',
        icon: 'Home',
      },
      {
        titleAr: 'المكاتب والعيادات',
        titleEn: 'Offices & Clinics',
        descAr: 'طاقة موثوقة للأعمال',
        descEn: 'Reliable power for business',
        icon: 'Building',
      },
      {
        titleAr: 'المحلات التجارية',
        titleEn: 'Commercial Shops',
        descAr: 'تشغيل الثلاجات والإضاءة والتكييف',
        descEn: 'Run fridges, lighting, and AC',
        icon: 'Store',
      },
      {
        titleAr: 'المنازل متعددة الغرف',
        titleEn: 'Multi-Room Homes',
        descAr: 'تغطية كاملة للمنازل متوسطة الحجم',
        descEn: 'Complete coverage for medium-sized homes',
        icon: 'Building2',
      },
    ],

    recommendedForAr: [
      'المنازل المتوسطة (3-5 غرف)',
      'من يريد تشغيل مكيف 1-1.5 طن',
      'الأعمال الصغيرة والمتوسطة',
      'الباحثين عن التوازن بين السعر والأداء',
    ],
    recommendedForEn: [
      'Medium homes (3-5 rooms)',
      'Those wanting to run 1-1.5 ton AC',
      'Small and medium businesses',
      'Those seeking balance between price and performance',
    ],
    notRecommendedForAr: [
      'الفلل الكبيرة (أكثر من مكيف)',
      'المصانع والمنشآت الكبيرة',
    ],
    notRecommendedForEn: [
      'Large villas (more than one AC)',
      'Factories and large facilities',
    ],

    faqs: [
      {
        questionAr: 'هل يشغل مكيفين؟',
        questionEn: 'Can it run two ACs?',
        answerAr: 'لا يُنصح. لمكيفين تحتاج SP8000 أو أعلى.',
        answerEn: 'Not recommended. For two ACs you need SP8000 or higher.',
      },
      {
        questionAr: 'كم بطارية Pylontech أحتاج؟',
        questionEn: 'How many Pylontech batteries do I need?',
        answerAr: 'بطاريتين US5000 كحد أدنى (9.6 كيلوواط ساعة) لتشغيل مريح.',
        answerEn: 'Minimum two US5000 batteries (9.6kWh) for comfortable operation.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج؟',
        questionEn: 'How many solar panels do I need?',
        answerAr: '8-10 ألواح Vertex S+ (حوالي 4 كيلوواط) للتغطية الجيدة.',
        answerEn: '8-10 Vertex S+ panels (about 4kW) for good coverage.',
      },
      {
        questionAr: 'هل يعمل بدون كهرباء حكومية؟',
        questionEn: 'Does it work without government electricity?',
        answerAr: 'نعم، يعمل بالكامل على الطاقة الشمسية والبطاريات (نظام Off-Grid).',
        answerEn: 'Yes, works completely on solar and batteries (Off-Grid system).',
      },
      {
        questionAr: 'ما حجم المكيف الذي يشغله؟',
        questionEn: 'What AC size can it run?',
        answerAr: 'مكيف 1-1.5 طن بسهولة. للمكيفات الأكبر أو أكثر من مكيف، استخدم SP8000.',
        answerEn: '1-1.5 ton AC easily. For larger ACs or more than one, use SP8000.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp8000',
        pros: { ar: ['أرخص', 'كافي لمعظم المنازل'], en: ['Cheaper', 'Enough for most homes'] },
        cons: { ar: ['قدرة أقل', 'مكيف واحد فقط'], en: ['Lower power', 'Only one AC'] },
      },
      {
        productSlug: 'sp3000',
        pros: { ar: ['يشغل مكيف', 'أكثر مرونة'], en: ['Runs AC', 'More flexible'] },
        cons: { ar: ['سعر أعلى'], en: ['Higher price'] },
      },
    ],

    relatedProductSlugs: ['sp8000', 'sp3000', 'us5000', 'pelio-l', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'انفرتر OPTI-Solar SP5000 - الأكثر مبيعاً للمنازل في اليمن',
    seoTitleEn: 'OPTI-Solar SP5000 - Best-Selling Home Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP5000 Handy Ultra بقدرة 5000 واط. الخيار الأول للمنازل اليمنية. يشغل منزل كامل + مكيف.',
    seoDescriptionEn: 'OPTI-Solar SP5000 Handy Ultra with 5000W power. First choice for Yemeni homes. Runs complete home + AC.',
    seoKeywordsAr: ['انفرتر 5000 واط', 'SP5000', 'انفرتر منزلي اليمن', 'OPTI-Solar'],
    seoKeywordsEn: ['5000W inverter', 'SP5000', 'home inverter Yemen', 'OPTI-Solar'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // OPTI-Solar SP8000
  {
    id: 'opti-sp8000',
    slug: 'sp8000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP8000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP8000 Handy Ultra',
    nameEn: 'OPTI-Solar SP8000 Handy Ultra Inverter',
    
    shortDescAr: 'الحل المتكامل للمنازل الكبيرة - 8000 واط صافي مع شاحن مزدوج',
    shortDescEn: 'Complete solution for large homes - 8000W pure with dual charger',
    
    fullDescAr: `انفرتر OPTI-Solar SP8000 للفلل والمنازل الكبيرة التي تحتاج طاقة إضافية. مع تقنية Dual MPPT، يستفيد من اتجاهين مختلفين للألواح.

**مميزات فريدة:**
- 8000 واط صافي - يشغل مكيفين + أحمال
- Dual MPPT - اتجاهين للألواح
- شاحن مزدوج - شحن أسرع للبطاريات
- توافق كامل مع بطاريات Pylontech

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP8000 for villas and large homes needing extra power. With Dual MPPT technology, it utilizes two different panel orientations.

**Unique Features:**
- 8000W pure - runs two ACs + loads
- Dual MPPT - two panel orientations
- Dual charger - faster battery charging
- Full compatibility with Pylontech batteries

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '8000 واط صافي - قوة كافية لفيلا كاملة', en: '8000W pure - enough power for complete villa' },
      { ar: 'Dual MPPT - يقبل اتجاهين للألواح', en: 'Dual MPPT - accepts two panel orientations' },
      { ar: 'يشغل مكيفين - راحة مضمونة', en: 'Runs two ACs - guaranteed comfort' },
      { ar: 'شاحن مزدوج - شحن أسرع للبطاريات', en: 'Dual charger - faster battery charging' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '8000', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '16000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '48', unit: 'V' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '2 (Dual MPPT)' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'أقصى قدرة شمسية', keyEn: 'Max Solar Power', value: '6500', unit: 'W' },
      { keyAr: 'كفاءة MPPT', keyEn: 'MPPT Efficiency', value: '98+', unit: '%' },
      { keyAr: 'أقصى تيار شحن', keyEn: 'Max Charge Current', value: '120', unit: 'A' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'الخيار الأمثل للفلل الكبيرة في اليمن. Dual MPPT يسمح بتركيب ألواح على جهتين مختلفتين من السطح، مما يزيد الإنتاجية في المناطق ذات الظل الجزئي.',
      explanationEn: 'Optimal choice for large villas in Yemen. Dual MPPT allows installing panels on two different roof sides, increasing productivity in partially shaded areas.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Marib'],
      climateNotesAr: 'أداء ممتاز في جميع المناطق. التبريد الفعال يضمن عمر طويل حتى في حرارة الحديدة وعدن.',
      climateNotesEn: 'Excellent performance in all areas. Effective cooling ensures long life even in Hudaydah and Aden heat.',
    },

    useCases: [
      {
        titleAr: 'الفلل الكبيرة',
        titleEn: 'Large Villas',
        descAr: 'تشغيل 2 مكيف + ثلاجة كبيرة + غسالة + جميع الأحمال المنزلية',
        descEn: 'Run 2 ACs + large fridge + washer + all home loads',
        icon: 'Castle',
      },
      {
        titleAr: 'المنشآت التجارية',
        titleEn: 'Commercial Facilities',
        descAr: 'محلات ومكاتب كبيرة، مطاعم، مقاهي - طاقة موثوقة للأعمال',
        descEn: 'Large shops and offices, restaurants, cafes - reliable power for business',
        icon: 'Building2',
      },
      {
        titleAr: 'العيادات والصيدليات',
        titleEn: 'Clinics & Pharmacies',
        descAr: 'طاقة موثوقة للأجهزة الطبية والتبريد - لا انقطاع للخدمة',
        descEn: 'Reliable power for medical equipment and cooling - no service interruption',
        icon: 'Heart',
      },
      {
        titleAr: 'المنازل متعددة الطوابق',
        titleEn: 'Multi-Story Homes',
        descAr: 'تغطية كاملة لمنزل من 2-3 طوابق مع مكيفين',
        descEn: 'Complete coverage for 2-3 story home with two ACs',
        icon: 'Building',
      },
    ],

    recommendedForAr: [
      'الفلل والمنازل الكبيرة (5+ غرف)',
      'من يحتاج تشغيل مكيفين في وقت واحد',
      'المنشآت التجارية المتوسطة',
      'الأسطح غير المنتظمة (اتجاهين للألواح)',
      'العيادات والصيدليات',
    ],
    recommendedForEn: [
      'Large villas and homes (5+ rooms)',
      'Those needing to run two ACs simultaneously',
      'Medium commercial facilities',
      'Irregular roofs (two panel orientations)',
      'Clinics and pharmacies',
    ],
    notRecommendedForAr: [
      'المنازل الصغيرة (مبالغة في القدرة)',
      'الميزانيات المحدودة',
      'من يحتاج 3+ مكيفات',
    ],
    notRecommendedForEn: [
      'Small homes (overkill)',
      'Limited budgets',
      'Those needing 3+ ACs',
    ],

    faqs: [
      {
        questionAr: 'هل يشغل 3 مكيفات؟',
        questionEn: 'Can it run 3 ACs?',
        answerAr: 'لا يُنصح. لثلاثة مكيفات تحتاج SP11000. SP8000 مثالي لمكيفين + أحمال منزلية كاملة.',
        answerEn: 'Not recommended. For three ACs you need SP11000. SP8000 is ideal for two ACs + full home loads.',
      },
      {
        questionAr: 'كم بطارية Pylontech أحتاج؟',
        questionEn: 'How many Pylontech batteries do I need?',
        answerAr: '3-4 بطاريات US5000 (14.4-19.2 كيلوواط ساعة) للتشغيل المريح مع مكيفين.',
        answerEn: '3-4 US5000 batteries (14.4-19.2kWh) for comfortable operation with two ACs.',
      },
      {
        questionAr: 'ما ميزة Dual MPPT؟',
        questionEn: 'What is the advantage of Dual MPPT?',
        answerAr: 'يسمح بتركيب ألواح على جهتين مختلفتين من السطح (شرق/غرب مثلاً)، مما يزيد ساعات الإنتاج ويحل مشكلة الظل الجزئي.',
        answerEn: 'Allows installing panels on two different roof sides (east/west for example), increasing production hours and solving partial shading issues.',
      },
      {
        questionAr: 'هل SP8000 أفضل من SP5000 للمنزل العادي؟',
        questionEn: 'Is SP8000 better than SP5000 for regular homes?',
        answerAr: 'SP5000 كافي لمعظم المنازل (مكيف واحد). SP8000 لمن يريد تشغيل مكيفين أو لديه فيلا كبيرة.',
        answerEn: 'SP5000 is enough for most homes (one AC). SP8000 is for those wanting to run two ACs or have a large villa.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج مع SP8000؟',
        questionEn: 'How many solar panels do I need with SP8000?',
        answerAr: '12-16 لوح Vertex S+ (حوالي 5-7 كيلوواط) للتغطية الجيدة. يمكن توزيعها على اتجاهين مختلفين.',
        answerEn: '12-16 Vertex S+ panels (about 5-7kW) for good coverage. Can be distributed on two different orientations.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp5000',
        pros: { ar: ['يشغل مكيفين', 'Dual MPPT', 'قدرة احتياطية أكبر'], en: ['Runs two ACs', 'Dual MPPT', 'More reserve power'] },
        cons: { ar: ['سعر أعلى', 'بطاريات أكثر مطلوبة'], en: ['Higher price', 'More batteries required'] },
      },
      {
        productSlug: 'sp11000',
        pros: { ar: ['أرخص', 'كافي لمعظم الفلل'], en: ['Cheaper', 'Enough for most villas'] },
        cons: { ar: ['مكيفين فقط', 'قدرة أقل'], en: ['Only two ACs', 'Lower power'] },
      },
    ],

    relatedProductSlugs: ['sp5000', 'sp11000', 'us5000', 'pelio-l', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah', 'marib'],

    seoTitleAr: 'انفرتر OPTI-Solar SP8000 - انفرتر فلل وعيادات 8 كيلوواط في اليمن',
    seoTitleEn: 'OPTI-Solar SP8000 - 8kW Villa and Clinic Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP8000 Handy Ultra بقدرة 8000 واط وتقنية Dual MPPT. الحل المتكامل للفلل الكبيرة والعيادات في اليمن.',
    seoDescriptionEn: 'OPTI-Solar SP8000 Handy Ultra with 8000W power and Dual MPPT technology. Complete solution for large villas and clinics in Yemen.',
    seoKeywordsAr: ['انفرتر 8000 واط', 'SP8000', 'انفرتر فلل اليمن', 'انفرتر عيادات'],
    seoKeywordsEn: ['8000W inverter', 'SP8000', 'villa inverter Yemen', 'clinic inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // OPTI-Solar SP11000
  {
    id: 'opti-sp11000',
    slug: 'sp11000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP11000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP11000 Handy Ultra',
    nameEn: 'OPTI-Solar SP11000 Handy Ultra Inverter',
    
    shortDescAr: 'وحش الطاقة المنزلية - 11 كيلوواط صافي لأكبر الفلل والمنشآت',
    shortDescEn: 'Home power beast - 11kW pure for largest villas and facilities',
    
    fullDescAr: `انفرتر OPTI-Solar SP11000 هو الأقوى في سلسلة Handy Ultra. بقدرة 11 كيلوواط صافي، يوفر طاقة كافية لتشغيل أكبر الفلل بما في ذلك 3 مكيفات.

**لماذا SP11000؟**
- 11 كيلوواط صافي - قوة لا تُضاهى
- يشغل 3 مكيفات + جميع الأحمال
- Dual MPPT للمرونة القصوى
- للفلل الفاخرة والمنشآت الكبيرة

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP11000 is the most powerful in the Handy Ultra series. With 11kW pure power, it provides enough energy to run the largest villas including 3 ACs.

**Why SP11000?**
- 11kW pure - unmatched power
- Runs 3 ACs + all loads
- Dual MPPT for maximum flexibility
- For luxury villas and large facilities

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '11 كيلوواط صافي - الأقوى في السلسلة', en: '11kW pure - most powerful in series' },
      { ar: 'يشغل 3 مكيفات + جميع الأحمال', en: 'Runs 3 ACs + all loads' },
      { ar: 'Dual MPPT - مرونة قصوى في تصميم النظام', en: 'Dual MPPT - maximum flexibility in system design' },
      { ar: 'للفلل الفاخرة والمنشآت الكبيرة', en: 'For luxury villas and large facilities' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '11000', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '22000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '48', unit: 'V' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '2 (Dual MPPT)' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'أقصى قدرة شمسية', keyEn: 'Max Solar Power', value: '9000', unit: 'W' },
      { keyAr: 'كفاءة MPPT', keyEn: 'MPPT Efficiency', value: '98+', unit: '%' },
      { keyAr: 'أقصى تيار شحن', keyEn: 'Max Charge Current', value: '150', unit: 'A' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 5,
        dustResistance: 5,
      },
      explanationAr: 'أقوى انفرتر منزلي في السلسلة. مثالي للفلل الفاخرة التي تحتاج تشغيل 3 مكيفات أو أكثر. يعمل بكفاءة عالية حتى في أقسى الظروف المناخية اليمنية.',
      explanationEn: 'Most powerful home inverter in the series. Ideal for luxury villas needing to run 3 or more ACs. Works with high efficiency even in the harshest Yemeni climate conditions.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب', 'حضرموت'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Marib', 'Hadramout'],
      climateNotesAr: 'أداء استثنائي حتى في أقسى الظروف. مناسب للمناطق الساحلية والصحراوية.',
      climateNotesEn: 'Exceptional performance even in harshest conditions. Suitable for coastal and desert areas.',
    },

    useCases: [
      {
        titleAr: 'الفلل الفاخرة',
        titleEn: 'Luxury Villas',
        descAr: 'تشغيل 3 مكيفات + مسبح + غسالة + جميع الأحمال المنزلية الثقيلة',
        descEn: 'Run 3 ACs + pool + washer + all heavy home loads',
        icon: 'Castle',
      },
      {
        titleAr: 'المنشآت التجارية الكبيرة',
        titleEn: 'Large Commercial Facilities',
        descAr: 'مطاعم كبيرة، مقاهي، محلات متعددة الطوابق - طاقة لا تنقطع',
        descEn: 'Large restaurants, cafes, multi-story shops - uninterrupted power',
        icon: 'Building2',
      },
      {
        titleAr: 'المستشفيات والمراكز الصحية',
        titleEn: 'Hospitals & Health Centers',
        descAr: 'طاقة موثوقة للأجهزة الطبية الحرجة والتبريد المستمر',
        descEn: 'Reliable power for critical medical equipment and continuous cooling',
        icon: 'Heart',
      },
      {
        titleAr: 'المباني متعددة الطوابق',
        titleEn: 'Multi-Story Buildings',
        descAr: 'تغطية كاملة لمبنى من 3-4 طوابق مع تكييف كامل',
        descEn: 'Complete coverage for 3-4 story building with full air conditioning',
        icon: 'Building',
      },
    ],

    recommendedForAr: [
      'الفلل الفاخرة (7+ غرف)',
      'من يريد تشغيل 3+ مكيفات في وقت واحد',
      'المنشآت التجارية الكبيرة',
      'المباني متعددة الطوابق',
      'المستشفيات والمراكز الصحية',
    ],
    recommendedForEn: [
      'Luxury villas (7+ rooms)',
      'Those wanting to run 3+ ACs simultaneously',
      'Large commercial facilities',
      'Multi-story buildings',
      'Hospitals and health centers',
    ],
    notRecommendedForAr: [
      'المنازل العادية (مبالغة كبيرة في القدرة)',
      'الميزانيات المحدودة (استثمار كبير)',
      'المساحات الصغيرة',
    ],
    notRecommendedForEn: [
      'Regular homes (major overkill)',
      'Limited budgets (large investment)',
      'Small spaces',
    ],

    faqs: [
      {
        questionAr: 'كم بطارية أحتاج مع SP11000؟',
        questionEn: 'How many batteries do I need with SP11000?',
        answerAr: '4-6 بطاريات Pylontech US5000 (19.2-28.8 كيلوواط ساعة) للتشغيل المريح مع 3 مكيفات.',
        answerEn: '4-6 Pylontech US5000 batteries (19.2-28.8kWh) for comfortable operation with 3 ACs.',
      },
      {
        questionAr: 'هل SP11000 يشغل مسبح؟',
        questionEn: 'Can SP11000 run a pool?',
        answerAr: 'نعم، يشغل مضخة مسبح + 3 مكيفات + جميع الأحمال المنزلية بسهولة.',
        answerEn: 'Yes, it easily runs pool pump + 3 ACs + all home loads.',
      },
      {
        questionAr: 'ما الفرق بين SP11000 و SP8000؟',
        questionEn: 'What is the difference between SP11000 and SP8000?',
        answerAr: 'SP11000 بقدرة 11 كيلوواط (يشغل 3 مكيفات) مقابل 8 كيلوواط (مكيفين). SP11000 للفلل الفاخرة والمنشآت الكبيرة.',
        answerEn: 'SP11000 has 11kW power (runs 3 ACs) vs 8kW (two ACs). SP11000 is for luxury villas and large facilities.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج مع SP11000؟',
        questionEn: 'How many solar panels do I need with SP11000?',
        answerAr: '18-22 لوح Vertex S+ (حوالي 8-9 كيلوواط) للتغطية المثالية. يمكن استخدام ألواح Vertex 580W لتقليل العدد.',
        answerEn: '18-22 Vertex S+ panels (about 8-9kW) for optimal coverage. Vertex 580W panels can be used to reduce the count.',
      },
      {
        questionAr: 'هل SP11000 مناسب للمناطق الساحلية؟',
        questionEn: 'Is SP11000 suitable for coastal areas?',
        answerAr: 'نعم، مقاومة عالية للرطوبة والملوحة. يُنصح بالصيانة الدورية كل 6 أشهر في المناطق الساحلية.',
        answerEn: 'Yes, high resistance to humidity and salinity. Regular maintenance every 6 months is recommended in coastal areas.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp8000',
        pros: { ar: ['قدرة أعلى بكثير', '3 مكيفات', 'مناسب للفلل الفاخرة'], en: ['Much higher power', '3 ACs', 'Suitable for luxury villas'] },
        cons: { ar: ['سعر أعلى بكثير', 'بطاريات أكثر مطلوبة'], en: ['Much higher price', 'More batteries required'] },
      },
      {
        productSlug: 'sun2000-20ktl',
        pros: { ar: ['Off-Grid كامل', 'موثوقية OPTI'], en: ['Full Off-Grid', 'OPTI reliability'] },
        cons: { ar: ['قدرة أقل من 20KTL', 'ليس On-Grid'], en: ['Lower power than 20KTL', 'Not On-Grid'] },
      },
    ],

    relatedProductSlugs: ['sp8000', 'sp5000', 'us5000', 'vertex', 'pelio-l'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah', 'marib'],

    seoTitleAr: 'انفرتر OPTI-Solar SP11000 - أقوى انفرتر منزلي 11 كيلوواط في اليمن',
    seoTitleEn: 'OPTI-Solar SP11000 - Most Powerful 11kW Home Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP11000 بقدرة 11 كيلوواط صافي. وحش الطاقة للفلل الفاخرة والمنشآت الكبيرة. يشغل 3 مكيفات + مسبح.',
    seoDescriptionEn: 'OPTI-Solar SP11000 with 11kW pure power. Power beast for luxury villas and large facilities. Runs 3 ACs + pool.',
    seoKeywordsAr: ['انفرتر 11 كيلوواط', 'SP11000', 'انفرتر فلل فاخرة', 'أقوى انفرتر منزلي'],
    seoKeywordsEn: ['11kW inverter', 'SP11000', 'luxury villa inverter', 'most powerful home inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // Huawei SUN2000-20KTL-M5
  {
    id: 'huawei-sun2000-20ktl',
    slug: 'sun2000-20ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-20KTL-M5',
    nameAr: 'انفرتر هواوي SUN2000-20KTL-M5',
    nameEn: 'Huawei SUN2000-20KTL-M5 Inverter',
    
    shortDescAr: 'الفئة الأكثر مبيعاً - الحل الهندسي الأمثل للفلل الكبيرة والمنشآت التجارية',
    shortDescEn: 'Best-selling class - Optimal engineering solution for large villas and commercial facilities',
    
    fullDescAr: `انفرتر هواوي SUN2000-20KTL هو معيار الصناعة للمشاريع المتوسطة والكبيرة. بقدرة 20 كيلوواط وكفاءة 98.4%، يوفر أقصى استفادة من الطاقة الشمسية.

**تقنيات هواوي المتقدمة:**
- AI-powered MPPT
- String-level monitoring
- كفاءة 98.4% (الأعلى في السوق)
- مقاومة IP66

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-20KTL is the industry standard for medium and large projects. With 20kW power and 98.4% efficiency, it provides maximum solar energy utilization.

**Huawei Advanced Technologies:**
- AI-powered MPPT
- String-level monitoring
- 98.4% efficiency (highest in market)
- IP66 protection

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '20 كيلوواط - للفلل الكبيرة والمنشآت التجارية', en: '20kW - for large villas and commercial facilities' },
      { ar: 'كفاءة 98.4% - الأعلى في السوق', en: '98.4% efficiency - highest in market' },
      { ar: 'تقنية AI-MPPT - تتبع ذكي للطاقة', en: 'AI-MPPT technology - intelligent power tracking' },
      { ar: 'مقاومة IP66 - للتركيب الخارجي', en: 'IP66 protection - for outdoor installation' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '20', unit: 'kW' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.4', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '2' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
      { keyAr: 'النوع', keyEn: 'Type', value: 'On-Grid / هجين' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
      { keyAr: 'أقصى جهد DC', keyEn: 'Max DC Voltage', value: '1100', unit: 'V' },
      { keyAr: 'نطاق MPPT', keyEn: 'MPPT Range', value: '200-1000', unit: 'V' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'انفرتر هواوي مثالي للمشاريع الكبيرة في اليمن. حماية IP66 تجعله مقاوم للغبار والماء. مناسب للتركيب الخارجي في جميع المناطق.',
      explanationEn: 'Huawei inverter is ideal for large projects in Yemen. IP66 protection makes it dust and water resistant. Suitable for outdoor installation in all areas.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Marib'],
      climateNotesAr: 'تصميم مقاوم للبيئات القاسية. مناسب للتركيب الخارجي في جميع مناطق اليمن.',
      climateNotesEn: 'Design resistant to harsh environments. Suitable for outdoor installation in all Yemen regions.',
    },

    useCases: [
      {
        titleAr: 'الفلل الكبيرة',
        titleEn: 'Large Villas',
        descAr: 'تقليل فواتير الكهرباء للفلل الفاخرة مع الاتصال بالشبكة',
        descEn: 'Reduce electricity bills for luxury villas with grid connection',
        icon: 'Castle',
      },
      {
        titleAr: 'المنشآت التجارية',
        titleEn: 'Commercial Facilities',
        descAr: 'فنادق، مطاعم، مراكز تسوق - عائد استثمار سريع',
        descEn: 'Hotels, restaurants, shopping centers - fast ROI',
        icon: 'Building2',
      },
      {
        titleAr: 'المصانع الصغيرة',
        titleEn: 'Small Factories',
        descAr: 'خفض تكاليف التشغيل بشكل ملحوظ',
        descEn: 'Significantly reduce operating costs',
        icon: 'Factory',
      },
      {
        titleAr: 'المدارس والجامعات',
        titleEn: 'Schools & Universities',
        descAr: 'طاقة نظيفة ومستدامة للمؤسسات التعليمية',
        descEn: 'Clean and sustainable energy for educational institutions',
        icon: 'GraduationCap',
      },
    ],

    recommendedForAr: [
      'الفلل الكبيرة (10+ غرف) المتصلة بالشبكة',
      'المنشآت التجارية المتوسطة',
      'المشاريع المتصلة بالشبكة (On-Grid)',
      'من يريد أعلى كفاءة ممكنة',
      'المشاريع التي تحتاج ضمان طويل',
    ],
    recommendedForEn: [
      'Large villas (10+ rooms) connected to grid',
      'Medium commercial facilities',
      'Grid-connected projects (On-Grid)',
      'Those wanting highest possible efficiency',
      'Projects needing long warranty',
    ],
    notRecommendedForAr: [
      'المنازل الصغيرة',
      'الأنظمة المنفصلة عن الشبكة (Off-Grid)',
      'المواقع بدون كهرباء حكومية',
    ],
    notRecommendedForEn: [
      'Small homes',
      'Off-grid systems',
      'Locations without government electricity',
    ],

    faqs: [
      {
        questionAr: 'هل يعمل بدون كهرباء حكومية؟',
        questionEn: 'Does it work without government electricity?',
        answerAr: 'النسخة الأساسية تحتاج الشبكة. للعمل بدون شبكة تحتاج إضافة نظام بطاريات هجين.',
        answerEn: 'Basic version needs grid. For off-grid operation, you need to add a hybrid battery system.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج؟',
        questionEn: 'How many solar panels do I need?',
        answerAr: 'حوالي 35-40 لوح Vertex بقدرة 580W لتغطية 20 كيلوواط.',
        answerEn: 'About 35-40 Vertex panels at 580W to cover 20kW.',
      },
      {
        questionAr: 'ما الفرق بين 20KTL و SP11000؟',
        questionEn: 'What is the difference between 20KTL and SP11000?',
        answerAr: '20KTL للأنظمة المتصلة بالشبكة (On-Grid) بقدرة أعلى وكفاءة أعلى. SP11000 للأنظمة المنفصلة (Off-Grid) مع بطاريات.',
        answerEn: '20KTL is for grid-connected systems (On-Grid) with higher power and efficiency. SP11000 is for off-grid systems with batteries.',
      },
      {
        questionAr: 'ما هو الضمان؟',
        questionEn: 'What is the warranty?',
        answerAr: '10 سنوات ضمان من هواوي. يمكن تمديده إلى 25 سنة مع عقد صيانة.',
        answerEn: '10 years warranty from Huawei. Can be extended to 25 years with maintenance contract.',
      },
      {
        questionAr: 'هل يناسب المناطق الساحلية؟',
        questionEn: 'Is it suitable for coastal areas?',
        answerAr: 'نعم، حماية IP66 تجعله مقاوم للرطوبة والملوحة. مثالي للمناطق الساحلية.',
        answerEn: 'Yes, IP66 protection makes it resistant to humidity and salinity. Ideal for coastal areas.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-30ktl',
        pros: { ar: ['أرخص', 'كافي للفلل الكبيرة', 'سهولة التركيب'], en: ['Cheaper', 'Enough for large villas', 'Easy installation'] },
        cons: { ar: ['قدرة أقل', 'MPPT أقل'], en: ['Lower power', 'Fewer MPPTs'] },
      },
      {
        productSlug: 'sp11000',
        pros: { ar: ['On-Grid', 'كفاءة أعلى', 'قدرة أكبر'], en: ['On-Grid', 'Higher efficiency', 'More power'] },
        cons: { ar: ['يحتاج شبكة', 'سعر أعلى'], en: ['Needs grid', 'Higher price'] },
      },
    ],

    relatedProductSlugs: ['sun2000-30ktl', 'sun2000-50ktl', 'vertex', 'us5000'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'انفرتر هواوي SUN2000-20KTL - انفرتر تجاري 20 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-20KTL - 20kW Commercial Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-20KTL-M5 بقدرة 20 كيلوواط وكفاءة 98.4%. الحل الأمثل للفلل الكبيرة والمنشآت التجارية.',
    seoDescriptionEn: 'Huawei SUN2000-20KTL-M5 with 20kW power and 98.4% efficiency. Optimal solution for large villas and commercial facilities.',
    seoKeywordsAr: ['انفرتر هواوي', 'SUN2000-20KTL', 'انفرتر 20 كيلوواط', 'انفرتر تجاري'],
    seoKeywordsEn: ['Huawei inverter', 'SUN2000-20KTL', '20kW inverter', 'commercial inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // Huawei SUN2000-30KTL-M5
  {
    id: 'huawei-sun2000-30ktl',
    slug: 'sun2000-30ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-30KTL-M5',
    nameAr: 'انفرتر هواوي SUN2000-30KTL-M5',
    nameEn: 'Huawei SUN2000-30KTL-M5 Inverter',
    
    shortDescAr: 'الانفرتر الأذكى للمنشآت التجارية والمنازل الكبيرة - 30 كيلوواط',
    shortDescEn: 'Smartest inverter for commercial facilities and large homes - 30kW',
    
    fullDescAr: `انفرتر هواوي SUN2000-30KTL من الجيل الأحدث M5. بقدرة 30 كيلوواط وكفاءة 98.4%، يوفر الحل الأمثل للمنشآت التجارية الكبيرة.

**مميزات الجيل M5:**
- 3 MPPT للمرونة القصوى
- تقنية AI-Boost لزيادة الإنتاج
- مراقبة على مستوى السلسلة
- تشخيص أعطال ذكي

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-30KTL from the latest M5 generation. With 30kW power and 98.4% efficiency, it provides the optimal solution for large commercial facilities.

**M5 Generation Features:**
- 3 MPPTs for maximum flexibility
- AI-Boost technology for increased production
- String-level monitoring
- Smart fault diagnosis

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '30 كيلوواط - للمنشآت التجارية الكبيرة', en: '30kW - for large commercial facilities' },
      { ar: 'كفاءة 98.4% - توفير حقيقي في الفواتير', en: '98.4% efficiency - real savings on bills' },
      { ar: 'الجيل الأحدث M5 - تقنيات متقدمة', en: 'Latest M5 generation - advanced technologies' },
      { ar: '3 MPPT - مرونة أكبر في تصميم النظام', en: '3 MPPTs - more flexibility in system design' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '30', unit: 'kW' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.4', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '3' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
      { keyAr: 'النوع', keyEn: 'Type', value: 'On-Grid / هجين' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
      { keyAr: 'أقصى جهد DC', keyEn: 'Max DC Voltage', value: '1100', unit: 'V' },
      { keyAr: 'عدد مداخل السلاسل', keyEn: 'String Inputs', value: '6' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'مثالي للمشاريع التجارية الكبيرة في اليمن. 3 MPPT لمرونة أكبر في تصميم النظام، خاصة للأسطح غير المنتظمة.',
      explanationEn: 'Ideal for large commercial projects in Yemen. 3 MPPTs for greater flexibility in system design, especially for irregular roofs.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'مأرب', 'حضرموت'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Marib', 'Hadramout'],
      climateNotesAr: 'مقاومة ممتازة للبيئات القاسية. يعمل بكفاءة حتى في أعلى درجات الحرارة.',
      climateNotesEn: 'Excellent resistance to harsh environments. Works efficiently even at highest temperatures.',
    },

    useCases: [
      {
        titleAr: 'المنشآت التجارية الكبيرة',
        titleEn: 'Large Commercial Facilities',
        descAr: 'فنادق، مجمعات تجارية، مستشفيات - عائد استثمار ممتاز',
        descEn: 'Hotels, shopping complexes, hospitals - excellent ROI',
        icon: 'Building2',
      },
      {
        titleAr: 'المصانع المتوسطة',
        titleEn: 'Medium Factories',
        descAr: 'خفض تكاليف الطاقة بشكل كبير وزيادة الربحية',
        descEn: 'Significantly reduce energy costs and increase profitability',
        icon: 'Factory',
      },
      {
        titleAr: 'المستشفيات',
        titleEn: 'Hospitals',
        descAr: 'طاقة موثوقة ومستمرة للمرافق الصحية الكبيرة',
        descEn: 'Reliable and continuous power for large health facilities',
        icon: 'Heart',
      },
      {
        titleAr: 'المزارع الكبيرة',
        titleEn: 'Large Farms',
        descAr: 'تشغيل أنظمة الري واسعة النطاق بتكلفة منخفضة',
        descEn: 'Run large-scale irrigation systems at low cost',
        icon: 'Leaf',
      },
    ],

    recommendedForAr: [
      'المنشآت التجارية الكبيرة',
      'المصانع الصغيرة والمتوسطة',
      'المشاريع المتصلة بالشبكة',
      'الأسطح الكبيرة غير المنتظمة',
    ],
    recommendedForEn: [
      'Large commercial facilities',
      'Small and medium factories',
      'Grid-connected projects',
      'Large irregular roofs',
    ],
    notRecommendedForAr: [
      'المنازل والفلل (قدرة زائدة)',
      'الأنظمة المنفصلة عن الشبكة',
      'المشاريع الصغيرة',
    ],
    notRecommendedForEn: [
      'Homes and villas (excess capacity)',
      'Off-grid systems',
      'Small projects',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين 20KTL و 30KTL؟',
        questionEn: 'What is the difference between 20KTL and 30KTL?',
        answerAr: '30KTL بقدرة أعلى (30 كيلوواط) و 3 MPPT بدلاً من 2، مما يوفر مرونة أكبر للأسطح الكبيرة.',
        answerEn: '30KTL has higher power (30kW) and 3 MPPTs instead of 2, providing more flexibility for large roofs.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج؟',
        questionEn: 'How many solar panels do I need?',
        answerAr: 'حوالي 52-55 لوح Vertex بقدرة 580W لتغطية 30 كيلوواط.',
        answerEn: 'About 52-55 Vertex panels at 580W to cover 30kW.',
      },
      {
        questionAr: 'هل يدعم البطاريات؟',
        questionEn: 'Does it support batteries?',
        answerAr: 'النسخة الهجينة تدعم البطاريات. النسخة الأساسية On-Grid فقط.',
        answerEn: 'Hybrid version supports batteries. Basic version is On-Grid only.',
      },
      {
        questionAr: 'ما هي فترة الاسترداد؟',
        questionEn: 'What is the payback period?',
        answerAr: 'عادة 3-5 سنوات حسب استهلاك الكهرباء وتعرفة الشبكة.',
        answerEn: 'Usually 3-5 years depending on electricity consumption and grid tariff.',
      },
      {
        questionAr: 'هل يحتاج صيانة دورية؟',
        questionEn: 'Does it need regular maintenance?',
        answerAr: 'صيانة بسيطة كل 6-12 شهر: تنظيف، فحص الاتصالات، مراجعة الأداء.',
        answerEn: 'Simple maintenance every 6-12 months: cleaning, connection check, performance review.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-20ktl',
        pros: { ar: ['قدرة أعلى', '3 MPPT', 'مرونة أكبر'], en: ['Higher power', '3 MPPTs', 'More flexibility'] },
        cons: { ar: ['سعر أعلى', 'يحتاج ألواح أكثر'], en: ['Higher price', 'Needs more panels'] },
      },
      {
        productSlug: 'sun2000-50ktl',
        pros: { ar: ['أرخص لكل كيلوواط', 'كافي لمعظم المنشآت'], en: ['Cheaper per kW', 'Enough for most facilities'] },
        cons: { ar: ['قدرة أقل'], en: ['Lower power'] },
      },
    ],

    relatedProductSlugs: ['sun2000-20ktl', 'sun2000-50ktl', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر هواوي SUN2000-30KTL - انفرتر تجاري 30 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-30KTL - 30kW Commercial Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-30KTL-M5 بقدرة 30 كيلوواط. الحل الأذكى للمنشآت التجارية الكبيرة في اليمن.',
    seoDescriptionEn: 'Huawei SUN2000-30KTL-M5 with 30kW power. Smartest solution for large commercial facilities in Yemen.',
    seoKeywordsAr: ['انفرتر هواوي 30 كيلوواط', 'SUN2000-30KTL', 'انفرتر مصانع'],
    seoKeywordsEn: ['Huawei 30kW inverter', 'SUN2000-30KTL', 'factory inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // Huawei SUN2000-50KTL-M3
  {
    id: 'huawei-sun2000-50ktl',
    slug: 'sun2000-50ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-50KTL-M3',
    nameAr: 'انفرتر هواوي SUN2000-50KTL-M3',
    nameEn: 'Huawei SUN2000-50KTL-M3 Inverter',
    
    shortDescAr: 'انفرتر ثلاثي الطور بقدرة 50 كيلوواط - الذكاء الاصطناعي المدمج',
    shortDescEn: 'Three-phase inverter with 50kW power - Built-in artificial intelligence',
    
    fullDescAr: `انفرتر هواوي SUN2000-50KTL هو الحل الذكي للمشاريع الكبيرة. بقدرة 50 كيلوواط ونظام ثلاثي الطور، يغطي احتياجات المصانع والمنشآت الكبيرة.

**تقنية الذكاء الاصطناعي:**
- Smart PV Controller
- تحسين الأداء التلقائي
- تشخيص الأعطال الذكي
- مراقبة عن بعد

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-50KTL is the smart solution for large projects. With 50kW power and three-phase system, it covers the needs of factories and large facilities.

**AI Technology:**
- Smart PV Controller
- Automatic performance optimization
- Smart fault diagnosis
- Remote monitoring

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '50 كيلوواط - للمصانع والمنشآت الكبيرة', en: '50kW - for factories and large facilities' },
      { ar: 'نظام ثلاثي الطور - للأحمال الصناعية', en: 'Three-phase system - for industrial loads' },
      { ar: 'ذكاء اصطناعي مدمج - تحسين تلقائي للأداء', en: 'Built-in AI - automatic performance optimization' },
      { ar: 'Smart PV Controller - مراقبة متقدمة', en: 'Smart PV Controller - advanced monitoring' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '50', unit: 'kW' },
      { keyAr: 'النظام', keyEn: 'System', value: 'ثلاثي الطور / 3-Phase' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.6', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '4' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
      { keyAr: 'أقصى جهد DC', keyEn: 'Max DC Voltage', value: '1100', unit: 'V' },
      { keyAr: 'عدد مداخل السلاسل', keyEn: 'String Inputs', value: '8' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'الخيار الأمثل للمصانع في اليمن. نظام ثلاثي الطور يتوافق مع الأحمال الصناعية. 4 MPPT لمرونة قصوى.',
      explanationEn: 'Optimal choice for factories in Yemen. Three-phase system compatible with industrial loads. 4 MPPTs for maximum flexibility.',
      bestRegionsAr: ['صنعاء', 'عدن', 'مأرب', 'حضرموت'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Marib', 'Hadramout'],
      climateNotesAr: 'مصمم للبيئات الصناعية القاسية. يعمل بكفاءة في جميع الظروف.',
      climateNotesEn: 'Designed for harsh industrial environments. Works efficiently in all conditions.',
    },

    useCases: [
      {
        titleAr: 'المصانع',
        titleEn: 'Factories',
        descAr: 'خفض فواتير الكهرباء الصناعية بشكل كبير - عائد استثمار سريع',
        descEn: 'Significantly reduce industrial electricity bills - fast ROI',
        icon: 'Factory',
      },
      {
        titleAr: 'الآبار الارتوازية',
        titleEn: 'Artesian Wells',
        descAr: 'تشغيل مضخات المياه الكبيرة بالطاقة الشمسية',
        descEn: 'Solar-powered large water pumps',
        icon: 'Droplets',
      },
      {
        titleAr: 'المزارع الكبيرة',
        titleEn: 'Large Farms',
        descAr: 'أنظمة الري واسعة النطاق بتكلفة تشغيل منخفضة',
        descEn: 'Large-scale irrigation systems with low operating cost',
        icon: 'Leaf',
      },
      {
        titleAr: 'المجمعات التجارية',
        titleEn: 'Shopping Malls',
        descAr: 'طاقة مستدامة للمراكز التجارية الكبيرة',
        descEn: 'Sustainable energy for large shopping centers',
        icon: 'Building2',
      },
    ],

    recommendedForAr: [
      'المصانع والمنشآت الصناعية',
      'الآبار الارتوازية الكبيرة',
      'المزارع الكبيرة',
      'المشاريع التجارية الضخمة',
    ],
    recommendedForEn: [
      'Factories and industrial facilities',
      'Large artesian wells',
      'Large farms',
      'Mega commercial projects',
    ],
    notRecommendedForAr: [
      'المنازل والفلل (قدرة زائدة كبيرة)',
      'الأنظمة أحادية الطور',
      'المشاريع الصغيرة والمتوسطة',
    ],
    notRecommendedForEn: [
      'Homes and villas (major overkill)',
      'Single-phase systems',
      'Small and medium projects',
    ],

    faqs: [
      {
        questionAr: 'ما معنى ثلاثي الطور؟',
        questionEn: 'What does three-phase mean?',
        answerAr: 'نظام كهربائي صناعي بثلاثة خطوط، يوفر قدرة أعلى للأحمال الثقيلة مثل المحركات الكبيرة.',
        answerEn: 'Industrial electrical system with three lines, providing higher capacity for heavy loads like large motors.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج؟',
        questionEn: 'How many solar panels do I need?',
        answerAr: 'حوالي 86-90 لوح Vertex بقدرة 580W لتغطية 50 كيلوواط.',
        answerEn: 'About 86-90 Vertex panels at 580W to cover 50kW.',
      },
      {
        questionAr: 'هل يناسب الآبار الارتوازية؟',
        questionEn: 'Is it suitable for artesian wells?',
        answerAr: 'نعم، مثالي لتشغيل مضخات حتى 40 حصان. للمضخات الأكبر استخدم 100KTL.',
        answerEn: 'Yes, ideal for running pumps up to 40 HP. For larger pumps use 100KTL.',
      },
      {
        questionAr: 'ما هي فترة الاسترداد للمصانع؟',
        questionEn: 'What is the payback period for factories?',
        answerAr: 'عادة 2-4 سنوات حسب استهلاك الكهرباء وساعات العمل.',
        answerEn: 'Usually 2-4 years depending on electricity consumption and working hours.',
      },
      {
        questionAr: 'هل يمكن المراقبة عن بعد؟',
        questionEn: 'Can it be monitored remotely?',
        answerAr: 'نعم، تطبيق FusionSolar يوفر مراقبة كاملة للنظام من أي مكان.',
        answerEn: 'Yes, FusionSolar app provides complete system monitoring from anywhere.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-100ktl',
        pros: { ar: ['أرخص', 'كافي لمعظم المصانع الصغيرة'], en: ['Cheaper', 'Enough for most small factories'] },
        cons: { ar: ['قدرة أقل', 'MPPT أقل'], en: ['Lower power', 'Fewer MPPTs'] },
      },
      {
        productSlug: 'sun2000-30ktl',
        pros: { ar: ['قدرة أعلى', '4 MPPT', 'للمصانع'], en: ['Higher power', '4 MPPTs', 'For factories'] },
        cons: { ar: ['سعر أعلى', 'يحتاج كهرباء ثلاثية'], en: ['Higher price', 'Needs 3-phase power'] },
      },
    ],

    relatedProductSlugs: ['sun2000-30ktl', 'sun2000-100ktl', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر هواوي SUN2000-50KTL - انفرتر مصانع 50 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-50KTL - 50kW Factory Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-50KTL-M3 بقدرة 50 كيلوواط ثلاثي الطور. الحل الذكي للمصانع والمنشآت الكبيرة في اليمن.',
    seoDescriptionEn: 'Huawei SUN2000-50KTL-M3 with 50kW three-phase power. Smart solution for factories and large facilities in Yemen.',
    seoKeywordsAr: ['انفرتر هواوي 50 كيلوواط', 'SUN2000-50KTL', 'انفرتر ثلاثي الطور', 'انفرتر مصانع'],
    seoKeywordsEn: ['Huawei 50kW inverter', 'SUN2000-50KTL', 'three-phase inverter', 'factory inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // Huawei SUN2000-100KTL-M2
  {
    id: 'huawei-sun2000-100ktl',
    slug: 'sun2000-100ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-100KTL-M2',
    nameAr: 'انفرتر هواوي SUN2000-100KTL-M2',
    nameEn: 'Huawei SUN2000-100KTL-M2 Inverter',
    
    shortDescAr: 'الحل الأمثل للمصانع والآبار الارتوازية - قدرة 100 كيلوواط',
    shortDescEn: 'Optimal solution for factories and artesian wells - 100kW power',
    
    fullDescAr: `انفرتر هواوي SUN2000-100KTL هو الأقوى في سلسلة هواوي التجارية. بقدرة 100 كيلوواط، يوفر الحل الأمثل للمصانع الكبيرة والآبار الارتوازية في اليمن.

**لماذا 100KTL للمشاريع الكبيرة؟**
- قدرة 100 كيلوواط في وحدة واحدة
- تقليل عدد الانفرترات المطلوبة
- تكلفة تأسيسية أقل لكل كيلوواط
- صيانة أسهل وأقل تكلفة

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-100KTL is the most powerful in Huawei's commercial series. With 100kW power, it provides the optimal solution for large factories and artesian wells in Yemen.

**Why 100KTL for large projects?**
- 100kW power in one unit
- Reduce number of required inverters
- Lower installation cost per kilowatt
- Easier and cheaper maintenance

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '100 كيلوواط - أقوى انفرتر تجاري', en: '100kW - most powerful commercial inverter' },
      { ar: 'وحدة واحدة بدلاً من عدة انفرترات', en: 'One unit instead of multiple inverters' },
      { ar: 'الحل الأمثل للآبار الارتوازية الكبيرة', en: 'Optimal solution for large artesian wells' },
      { ar: 'تكلفة أقل لكل كيلوواط', en: 'Lower cost per kilowatt' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '100', unit: 'kW' },
      { keyAr: 'النظام', keyEn: 'System', value: 'ثلاثي الطور / 3-Phase' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.8', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '6' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
      { keyAr: 'أقصى جهد DC', keyEn: 'Max DC Voltage', value: '1100', unit: 'V' },
      { keyAr: 'عدد مداخل السلاسل', keyEn: 'String Inputs', value: '12' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'الحل الأمثل للمشاريع الضخمة في اليمن. مثالي للآبار الارتوازية ومحطات الضخ الكبيرة. 6 MPPT لأقصى مرونة.',
      explanationEn: 'Optimal solution for mega projects in Yemen. Ideal for artesian wells and large pumping stations. 6 MPPTs for maximum flexibility.',
      bestRegionsAr: ['مأرب', 'حضرموت', 'صنعاء', 'عدن', 'الحديدة'],
      bestRegionsEn: ['Marib', 'Hadramout', 'Sanaa', 'Aden', 'Hudaydah'],
      climateNotesAr: 'مصمم للعمل المتواصل في البيئات القاسية. مثالي للمناطق الصحراوية والساحلية.',
      climateNotesEn: 'Designed for continuous operation in harsh environments. Ideal for desert and coastal areas.',
    },

    useCases: [
      {
        titleAr: 'الآبار الارتوازية',
        titleEn: 'Artesian Wells',
        descAr: 'تشغيل مضخات المياه العميقة بالطاقة الشمسية - حتى 75 حصان',
        descEn: 'Solar-powered deep water pumps - up to 75 HP',
        icon: 'Droplets',
      },
      {
        titleAr: 'المصانع الكبيرة',
        titleEn: 'Large Factories',
        descAr: 'خفض تكاليف الطاقة الصناعية بشكل جذري - عائد استثمار سريع',
        descEn: 'Drastically reduce industrial energy costs - fast ROI',
        icon: 'Factory',
      },
      {
        titleAr: 'المزارع الشمسية',
        titleEn: 'Solar Farms',
        descAr: 'مشاريع توليد الطاقة الشمسية الكبيرة',
        descEn: 'Large-scale solar power generation projects',
        icon: 'Sun',
      },
      {
        titleAr: 'محطات الضخ',
        titleEn: 'Pumping Stations',
        descAr: 'تشغيل محطات ضخ المياه والصرف الصحي',
        descEn: 'Run water and sewage pumping stations',
        icon: 'Droplets',
      },
    ],

    recommendedForAr: [
      'الآبار الارتوازية الكبيرة (50+ حصان)',
      'المصانع الكبيرة',
      'المزارع الشمسية',
      'محطات الضخ',
      'المشاريع الضخمة',
    ],
    recommendedForEn: [
      'Large artesian wells (50+ HP)',
      'Large factories',
      'Solar farms',
      'Pumping stations',
      'Mega projects',
    ],
    notRecommendedForAr: [
      'المشاريع أقل من 50 كيلوواط',
      'الأنظمة أحادية الطور',
      'المنازل والفلل',
    ],
    notRecommendedForEn: [
      'Projects under 50kW',
      'Single-phase systems',
      'Homes and villas',
    ],

    faqs: [
      {
        questionAr: 'كم لوح شمسي يحتاج؟',
        questionEn: 'How many solar panels does it need?',
        answerAr: 'حوالي 170-180 لوح Vertex 580W لتغطية 100 كيلوواط.',
        answerEn: 'About 170-180 Vertex 580W panels to cover 100kW.',
      },
      {
        questionAr: 'هل يناسب الآبار الارتوازية؟',
        questionEn: 'Is it suitable for artesian wells?',
        answerAr: 'نعم، هذا هو الاستخدام الأمثل له في اليمن. يشغل مضخات حتى 75 حصان بسهولة.',
        answerEn: 'Yes, this is its optimal use in Yemen. Easily runs pumps up to 75 HP.',
      },
      {
        questionAr: 'ما هي فترة الاسترداد؟',
        questionEn: 'What is the payback period?',
        answerAr: 'عادة 2-3 سنوات للمصانع والآبار مع استهلاك عالي.',
        answerEn: 'Usually 2-3 years for factories and wells with high consumption.',
      },
      {
        questionAr: 'كم المساحة المطلوبة للألواح؟',
        questionEn: 'How much space is needed for panels?',
        answerAr: 'حوالي 500-600 متر مربع للألواح الشمسية فقط.',
        answerEn: 'About 500-600 square meters for solar panels only.',
      },
      {
        questionAr: 'هل يمكن تشغيل مصنع كامل؟',
        questionEn: 'Can it run a complete factory?',
        answerAr: 'يعتمد على حجم المصنع. 100 كيلوواط تكفي للمصانع الصغيرة والمتوسطة. المصانع الكبيرة تحتاج وحدات متعددة.',
        answerEn: 'Depends on factory size. 100kW is enough for small and medium factories. Large factories need multiple units.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-50ktl',
        pros: { ar: ['قدرة مضاعفة', 'تكلفة أقل لكل كيلوواط', '6 MPPT'], en: ['Double power', 'Lower cost per kW', '6 MPPTs'] },
        cons: { ar: ['استثمار أولي أكبر', 'يحتاج مساحة أكبر'], en: ['Larger initial investment', 'Needs more space'] },
      },
    ],

    relatedProductSlugs: ['sun2000-50ktl', 'sun2000-30ktl', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah', 'marib'],

    seoTitleAr: 'انفرتر هواوي SUN2000-100KTL - انفرتر آبار ومصانع 100 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-100KTL - 100kW Wells and Factory Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-100KTL-M2 بقدرة 100 كيلوواط. الحل الأمثل للآبار الارتوازية والمصانع الكبيرة في اليمن.',
    seoDescriptionEn: 'Huawei SUN2000-100KTL-M2 with 100kW power. Optimal solution for artesian wells and large factories in Yemen.',
    seoKeywordsAr: ['انفرتر هواوي 100 كيلوواط', 'SUN2000-100KTL', 'انفرتر آبار', 'انفرتر مصانع اليمن'],
    seoKeywordsEn: ['Huawei 100kW inverter', 'SUN2000-100KTL', 'well inverter', 'factory inverter Yemen'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },
];
