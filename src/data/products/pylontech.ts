import { Product } from './types';

// PLACEHOLDER DATA - Replace with actual catalog data later
export const pylontechProducts: Product[] = [
  {
    id: 'pylontech-us2000c',
    slug: 'us2000c',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'US2000C',
    nameAr: 'بطارية Pylontech US2000C',
    nameEn: 'Pylontech US2000C Battery',
    
    shortDescAr: 'بطارية ليثيوم 2.4 كيلووات ساعة مثالية للأنظمة الصغيرة والمتوسطة',
    shortDescEn: '2.4kWh lithium battery ideal for small to medium systems',
    
    fullDescAr: `بطارية Pylontech US2000C هي الخيار الأمثل للمنازل الصغيرة والمتوسطة في اليمن. تتميز بسعة 2.4 كيلووات ساعة وتقنية ليثيوم فوسفات الحديد (LiFePO4) التي توفر أماناً عالياً وعمراً افتراضياً طويلاً يصل إلى 6000 دورة شحن.

تم تصميم هذه البطارية لتحمل ظروف المناخ الصعبة وانقطاعات الكهرباء المتكررة، مما يجعلها مناسبة تماماً للاستخدام في اليمن. يمكن توصيل حتى 16 وحدة معاً للحصول على سعة تخزين أكبر تصل إلى 38.4 كيلووات ساعة.`,
    
    fullDescEn: `The Pylontech US2000C is the optimal choice for small to medium homes in Yemen. It features a 2.4kWh capacity and LiFePO4 (Lithium Iron Phosphate) technology that provides high safety and a long lifespan of up to 6000 charge cycles.

This battery is designed to withstand harsh climate conditions and frequent power outages, making it perfectly suitable for use in Yemen. Up to 16 units can be connected together for a larger storage capacity of up to 38.4kWh.`,

    keyTakeaways: [
      { ar: 'سعة 2.4 كيلووات ساعة مثالية للمنازل الصغيرة', en: '2.4kWh capacity ideal for small homes' },
      { ar: '6000+ دورة شحن مع ضمان 10 سنوات', en: '6000+ charge cycles with 10-year warranty' },
      { ar: 'قابلة للتوسع حتى 16 وحدة (38.4 كيلووات ساعة)', en: 'Expandable up to 16 units (38.4kWh)' },
      { ar: 'تقنية LiFePO4 آمنة ومستقرة', en: 'Safe and stable LiFePO4 technology' },
    ],

    specifications: [
      { keyAr: 'السعة الاسمية', keyEn: 'Nominal Capacity', value: '2.4', unit: 'kWh' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '48', unit: 'V' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '90', unit: '%' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '6000+', unit: 'cycles' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '95', unit: '%' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temperature', value: '0~50', unit: '°C' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '24', unit: 'kg' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '442×420×132', unit: 'mm' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10', unit: 'years' },
      { keyAr: 'أقصى عدد وحدات متصلة', keyEn: 'Max Parallel Units', value: '16', unit: 'units' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'بطارية US2000C مصممة لتحمل درجات حرارة تصل إلى 50 درجة مئوية، مما يجعلها مناسبة لمعظم المناطق اليمنية. نظام إدارة البطارية (BMS) المدمج يحميها من الشحن الزائد والحرارة العالية.',
      explanationEn: 'The US2000C battery is designed to withstand temperatures up to 50°C, making it suitable for most Yemeni regions. The built-in Battery Management System (BMS) protects it from overcharging and high temperatures.',
      bestRegionsAr: ['صنعاء', 'تعز', 'إب', 'ذمار'],
      bestRegionsEn: ["Sana'a", 'Taiz', 'Ibb', 'Dhamar'],
      climateNotesAr: 'للمناطق الساحلية مثل عدن والحديدة، يُنصح بتركيب البطارية في مكان جيد التهوية لتجنب الرطوبة العالية.',
      climateNotesEn: 'For coastal areas like Aden and Hudaydah, it is recommended to install the battery in a well-ventilated area to avoid high humidity.',
    },

    useCases: [
      {
        titleAr: 'المنازل الصغيرة',
        titleEn: 'Small Homes',
        descAr: 'مثالية لتشغيل الإنارة، التلفزيون، الثلاجة الصغيرة، وشحن الأجهزة لمدة 8-12 ساعة',
        descEn: 'Ideal for running lights, TV, small refrigerator, and charging devices for 8-12 hours',
        icon: 'Home',
      },
      {
        titleAr: 'المكاتب الصغيرة',
        titleEn: 'Small Offices',
        descAr: 'تشغيل 2-3 أجهزة كمبيوتر مع إنارة وإنترنت لساعات العمل',
        descEn: 'Running 2-3 computers with lighting and internet during work hours',
        icon: 'Building2',
      },
      {
        titleAr: 'نظام احتياطي',
        titleEn: 'Backup System',
        descAr: 'توفير طاقة احتياطية أثناء انقطاع الكهرباء للأجهزة الأساسية',
        descEn: 'Providing backup power during outages for essential devices',
        icon: 'Shield',
      },
    ],

    recommendedForAr: [
      'المنازل الصغيرة (2-3 غرف)',
      'الشقق السكنية',
      'المكاتب الصغيرة',
      'المتاجر الصغيرة',
      'أنظمة الإنارة الاحتياطية',
    ],
    recommendedForEn: [
      'Small homes (2-3 rooms)',
      'Residential apartments',
      'Small offices',
      'Small shops',
      'Backup lighting systems',
    ],
    
    notRecommendedForAr: [
      'الفلل الكبيرة (يُنصح بـ US3000C أو أكبر)',
      'المصانع والمنشآت الصناعية',
      'تشغيل المكيفات لفترات طويلة',
      'الأحمال التي تتجاوز 2 كيلووات مستمرة',
    ],
    notRecommendedForEn: [
      'Large villas (US3000C or larger recommended)',
      'Factories and industrial facilities',
      'Running AC for long periods',
      'Loads exceeding 2kW continuous',
    ],

    faqs: [
      {
        questionAr: 'كم تدوم بطارية US2000C؟',
        questionEn: 'How long does the US2000C battery last?',
        answerAr: 'تدوم البطارية حتى 6000 دورة شحن كاملة، أي حوالي 15-20 سنة مع الاستخدام اليومي العادي. الضمان الرسمي 10 سنوات.',
        answerEn: 'The battery lasts up to 6000 full charge cycles, approximately 15-20 years with normal daily use. Official warranty is 10 years.',
      },
      {
        questionAr: 'هل يمكن توصيل أكثر من بطارية معاً؟',
        questionEn: 'Can multiple batteries be connected together?',
        answerAr: 'نعم، يمكن توصيل حتى 16 وحدة US2000C معاً للحصول على سعة تصل إلى 38.4 كيلووات ساعة.',
        answerEn: 'Yes, up to 16 US2000C units can be connected together for a capacity of up to 38.4kWh.',
      },
      {
        questionAr: 'هل تعمل مع جميع الانفرترات؟',
        questionEn: 'Does it work with all inverters?',
        answerAr: 'تعمل مع معظم الانفرترات الهجينة الشائعة مثل Growatt، Deye، Victron وغيرها. نوفر قائمة التوافق الكاملة.',
        answerEn: 'It works with most common hybrid inverters like Growatt, Deye, Victron and others. We provide a complete compatibility list.',
      },
      {
        questionAr: 'هل تحتاج صيانة دورية؟',
        questionEn: 'Does it require regular maintenance?',
        answerAr: 'لا تحتاج صيانة دورية. فقط تأكد من التهوية الجيدة ونظافة التوصيلات. نظام BMS يدير كل شيء تلقائياً.',
        answerEn: 'No regular maintenance required. Just ensure good ventilation and clean connections. The BMS system manages everything automatically.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us3000c',
        pros: {
          ar: ['سعر أقل', 'أخف وزناً', 'مناسب للمساحات الضيقة'],
          en: ['Lower price', 'Lighter weight', 'Suitable for tight spaces'],
        },
        cons: {
          ar: ['سعة أقل (2.4 مقابل 3.5 كيلووات ساعة)', 'تحتاج وحدات أكثر للسعة الكبيرة'],
          en: ['Lower capacity (2.4 vs 3.5kWh)', 'More units needed for larger capacity'],
        },
      },
      {
        productSlug: 'us5000',
        pros: {
          ar: ['سعر أقل', 'أخف وزناً', 'مناسب للأنظمة الصغيرة'],
          en: ['Lower price', 'Lighter weight', 'Suitable for small systems'],
        },
        cons: {
          ar: ['سعة أقل (2.4 مقابل 4.8 كيلووات ساعة)', 'كفاءة مساحة أقل'],
          en: ['Lower capacity (2.4 vs 4.8kWh)', 'Less space efficient'],
        },
      },
    ],

    relatedProductSlugs: ['us3000c', 'us5000', 'force-h1'],
    relatedServiceKeys: ['installation', 'storage', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'بطارية Pylontech US2000C في اليمن | 2.4 كيلووات ساعة | القطاع للطاقة الشمسية',
    seoTitleEn: 'Pylontech US2000C Battery in Yemen | 2.4kWh | Al-Qatta Solar Energy',
    seoDescriptionAr: 'بطارية Pylontech US2000C الأصلية في اليمن بسعة 2.4 كيلووات ساعة. ضمان 10 سنوات، 6000 دورة شحن. مثالية للمنازل الصغيرة. الوكيل المعتمد الوحيد.',
    seoDescriptionEn: 'Original Pylontech US2000C battery in Yemen with 2.4kWh capacity. 10-year warranty, 6000 charge cycles. Ideal for small homes. The only authorized agent.',
    seoKeywordsAr: ['بطارية Pylontech', 'US2000C اليمن', 'بطارية ليثيوم', 'تخزين طاقة شمسية', 'بطارية صنعاء'],
    seoKeywordsEn: ['Pylontech battery', 'US2000C Yemen', 'lithium battery', 'solar energy storage', 'battery Sanaa'],

    image: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    datasheetUrl: undefined,

    isAvailable: true,
    isFeatured: true,
  },
  
  {
    id: 'pylontech-us3000c',
    slug: 'us3000c',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'US3000C',
    nameAr: 'بطارية Pylontech US3000C',
    nameEn: 'Pylontech US3000C Battery',
    
    shortDescAr: 'بطارية ليثيوم 3.5 كيلووات ساعة الأكثر مبيعاً للمنازل المتوسطة',
    shortDescEn: '3.5kWh lithium battery - best seller for medium homes',
    
    fullDescAr: `بطارية Pylontech US3000C هي الخيار الأكثر شعبية للمنازل المتوسطة في اليمن. بسعة 3.5 كيلووات ساعة، توفر توازناً مثالياً بين السعة والسعر.

تتميز بنفس تقنية LiFePO4 الموثوقة مع عمر افتراضي يصل إلى 6000 دورة شحن وضمان 10 سنوات. التصميم المدمج يسمح بتوصيل حتى 16 وحدة للحصول على 56 كيلووات ساعة.`,
    
    fullDescEn: `The Pylontech US3000C is the most popular choice for medium homes in Yemen. With 3.5kWh capacity, it provides the perfect balance between capacity and price.

It features the same reliable LiFePO4 technology with a lifespan of up to 6000 charge cycles and a 10-year warranty. The compact design allows connecting up to 16 units for 56kWh.`,

    keyTakeaways: [
      { ar: 'سعة 3.5 كيلووات ساعة - الأكثر مبيعاً', en: '3.5kWh capacity - best seller' },
      { ar: 'توازن مثالي بين السعة والسعر', en: 'Perfect balance between capacity and price' },
      { ar: 'قابلة للتوسع حتى 16 وحدة (56 كيلووات ساعة)', en: 'Expandable up to 16 units (56kWh)' },
      { ar: 'متوافقة مع معظم الانفرترات', en: 'Compatible with most inverters' },
    ],

    specifications: [
      { keyAr: 'السعة الاسمية', keyEn: 'Nominal Capacity', value: '3.5', unit: 'kWh' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '48', unit: 'V' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '90', unit: '%' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '6000+', unit: 'cycles' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '95', unit: '%' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temperature', value: '0~50', unit: '°C' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '32', unit: 'kg' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '442×420×154', unit: 'mm' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10', unit: 'years' },
      { keyAr: 'أقصى عدد وحدات متصلة', keyEn: 'Max Parallel Units', value: '16', unit: 'units' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'US3000C مناسبة لجميع المناطق اليمنية بفضل تحملها لدرجات الحرارة العالية ونظام BMS المتقدم. السعة الإضافية تجعلها مثالية للتعامل مع انقطاعات الكهرباء الطويلة.',
      explanationEn: 'US3000C is suitable for all Yemeni regions thanks to its high temperature tolerance and advanced BMS system. The extra capacity makes it ideal for dealing with long power outages.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب'],
      bestRegionsEn: ["Sana'a", 'Aden', 'Taiz', 'Hudaydah', 'Marib'],
      climateNotesAr: 'الخيار الأمثل لمعظم المناطق اليمنية. للمناطق شديدة الحرارة، تأكد من توفير تهوية جيدة.',
      climateNotesEn: 'The optimal choice for most Yemeni regions. For extremely hot areas, ensure good ventilation is provided.',
    },

    useCases: [
      {
        titleAr: 'المنازل المتوسطة',
        titleEn: 'Medium Homes',
        descAr: 'تشغيل كامل المنزل المتوسط (4-5 غرف) مع إنارة وأجهزة أساسية لمدة 12-16 ساعة',
        descEn: 'Running a complete medium home (4-5 rooms) with lighting and basic appliances for 12-16 hours',
        icon: 'Home',
      },
      {
        titleAr: 'المكاتب والعيادات',
        titleEn: 'Offices & Clinics',
        descAr: 'تشغيل مكتب متوسط أو عيادة طبية مع أجهزة كمبيوتر ومعدات طبية خفيفة',
        descEn: 'Running a medium office or medical clinic with computers and light medical equipment',
        icon: 'Building2',
      },
      {
        titleAr: 'المتاجر',
        titleEn: 'Retail Shops',
        descAr: 'تشغيل متجر متوسط مع إنارة وثلاجات عرض وكاشير',
        descEn: 'Running a medium shop with lighting, display refrigerators and cashier',
        icon: 'Store',
      },
    ],

    recommendedForAr: [
      'المنازل المتوسطة (4-5 غرف)',
      'الشقق الكبيرة',
      'المكاتب المتوسطة',
      'العيادات الطبية',
      'المتاجر المتوسطة',
    ],
    recommendedForEn: [
      'Medium homes (4-5 rooms)',
      'Large apartments',
      'Medium offices',
      'Medical clinics',
      'Medium retail shops',
    ],
    
    notRecommendedForAr: [
      'الفلل الكبيرة جداً (يُنصح بـ US5000 أو Force H1)',
      'المصانع والمنشآت الكبيرة',
      'تشغيل مكيفات متعددة',
    ],
    notRecommendedForEn: [
      'Very large villas (US5000 or Force H1 recommended)',
      'Large factories and facilities',
      'Running multiple AC units',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين US3000C و US2000C؟',
        questionEn: 'What is the difference between US3000C and US2000C?',
        answerAr: 'US3000C بسعة 3.5 كيلووات ساعة مقابل 2.4 كيلووات ساعة في US2000C. السعة الإضافية تعني ساعات تشغيل أطول وقدرة على تشغيل أحمال أكبر.',
        answerEn: 'US3000C has 3.5kWh capacity vs 2.4kWh in US2000C. The extra capacity means longer runtime and ability to run larger loads.',
      },
      {
        questionAr: 'كم ساعة تشغّل المنزل؟',
        questionEn: 'How many hours can it run a home?',
        answerAr: 'تعتمد على الاستهلاك. منزل متوسط (إنارة + ثلاجة + تلفزيون + شحن) يمكن تشغيله 12-16 ساعة. وحدتان معاً توفران 24+ ساعة.',
        answerEn: 'Depends on consumption. A medium home (lighting + fridge + TV + charging) can run for 12-16 hours. Two units together provide 24+ hours.',
      },
      {
        questionAr: 'هل تناسب المناطق الحارة؟',
        questionEn: 'Is it suitable for hot areas?',
        answerAr: 'نعم، مصممة للعمل حتى 50 درجة مئوية. للمناطق شديدة الحرارة مثل عدن، يُنصح بتركيبها في مكان ظليل وجيد التهوية.',
        answerEn: 'Yes, designed to work up to 50°C. For very hot areas like Aden, it is recommended to install in a shaded and well-ventilated place.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us2000c',
        pros: {
          ar: ['سعة أكبر بـ 45%', 'تكلفة أقل لكل كيلووات ساعة', 'أفضل للمنازل المتوسطة'],
          en: ['45% more capacity', 'Lower cost per kWh', 'Better for medium homes'],
        },
        cons: {
          ar: ['سعر أعلى', 'أثقل وزناً'],
          en: ['Higher price', 'Heavier weight'],
        },
      },
      {
        productSlug: 'us5000',
        pros: {
          ar: ['سعر أقل', 'مناسب للمساحات الأصغر'],
          en: ['Lower price', 'Suitable for smaller spaces'],
        },
        cons: {
          ar: ['سعة أقل', 'تحتاج وحدات أكثر للسعة الكبيرة'],
          en: ['Lower capacity', 'More units needed for larger capacity'],
        },
      },
    ],

    relatedProductSlugs: ['us2000c', 'us5000', 'force-h1'],
    relatedServiceKeys: ['installation', 'storage', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'بطارية Pylontech US3000C في اليمن | 3.5 كيلووات ساعة | الأكثر مبيعاً',
    seoTitleEn: 'Pylontech US3000C Battery in Yemen | 3.5kWh | Best Seller',
    seoDescriptionAr: 'بطارية Pylontech US3000C الأكثر مبيعاً في اليمن بسعة 3.5 كيلووات ساعة. ضمان 10 سنوات. مثالية للمنازل المتوسطة. الوكيل المعتمد الوحيد.',
    seoDescriptionEn: 'Best-selling Pylontech US3000C battery in Yemen with 3.5kWh capacity. 10-year warranty. Ideal for medium homes. The only authorized agent.',
    seoKeywordsAr: ['بطارية Pylontech US3000C', 'بطارية ليثيوم اليمن', 'تخزين طاقة', 'بطارية منزلية'],
    seoKeywordsEn: ['Pylontech US3000C battery', 'lithium battery Yemen', 'energy storage', 'home battery'],

    image: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],

    isAvailable: true,
    isFeatured: true,
  },

  {
    id: 'pylontech-us5000',
    slug: 'us5000',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'US5000',
    nameAr: 'بطارية Pylontech US5000',
    nameEn: 'Pylontech US5000 Battery',
    
    shortDescAr: 'بطارية ليثيوم 4.8 كيلووات ساعة للمنازل الكبيرة والتطبيقات التجارية',
    shortDescEn: '4.8kWh lithium battery for large homes and commercial applications',
    
    fullDescAr: `بطارية Pylontech US5000 هي الحل الأمثل للمنازل الكبيرة والتطبيقات التجارية في اليمن. بسعة 4.8 كيلووات ساعة في وحدة واحدة، توفر أعلى كثافة طاقة في سلسلة US.

مثالية للفلل والمكاتب الكبيرة والمتاجر التي تحتاج طاقة تخزين عالية. يمكن توصيل حتى 16 وحدة للحصول على 76.8 كيلووات ساعة.`,
    
    fullDescEn: `The Pylontech US5000 is the optimal solution for large homes and commercial applications in Yemen. With 4.8kWh capacity in a single unit, it offers the highest energy density in the US series.

Ideal for villas, large offices, and shops that need high storage capacity. Up to 16 units can be connected for 76.8kWh.`,

    keyTakeaways: [
      { ar: 'أعلى سعة في سلسلة US (4.8 كيلووات ساعة)', en: 'Highest capacity in US series (4.8kWh)' },
      { ar: 'أفضل قيمة مقابل السعة', en: 'Best value for capacity' },
      { ar: 'مثالي للفلل والتطبيقات التجارية', en: 'Ideal for villas and commercial applications' },
      { ar: 'قابل للتوسع حتى 76.8 كيلووات ساعة', en: 'Expandable up to 76.8kWh' },
    ],

    specifications: [
      { keyAr: 'السعة الاسمية', keyEn: 'Nominal Capacity', value: '4.8', unit: 'kWh' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '48', unit: 'V' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '90', unit: '%' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '6000+', unit: 'cycles' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '95', unit: '%' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temperature', value: '0~50', unit: '°C' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '40', unit: 'kg' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '442×420×200', unit: 'mm' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10', unit: 'years' },
      { keyAr: 'أقصى عدد وحدات متصلة', keyEn: 'Max Parallel Units', value: '16', unit: 'units' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'US5000 مثالية للاستخدامات الكبيرة في اليمن. السعة العالية تضمن تشغيل المنازل والمتاجر لفترات طويلة أثناء انقطاع الكهرباء. مناسبة لجميع المناطق مع توفير تهوية جيدة.',
      explanationEn: 'US5000 is ideal for large uses in Yemen. High capacity ensures homes and shops run for long periods during power outages. Suitable for all regions with good ventilation.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب', 'إب'],
      bestRegionsEn: ["Sana'a", 'Aden', 'Taiz', 'Hudaydah', 'Marib', 'Ibb'],
      climateNotesAr: 'مناسبة لجميع المناطق اليمنية. للمناطق الساحلية، يُفضل التركيب في مكان مغلق وجيد التهوية.',
      climateNotesEn: 'Suitable for all Yemeni regions. For coastal areas, indoor installation with good ventilation is preferred.',
    },

    useCases: [
      {
        titleAr: 'الفلل والمنازل الكبيرة',
        titleEn: 'Villas & Large Homes',
        descAr: 'تشغيل فيلا كاملة (6+ غرف) مع جميع الأجهزة الأساسية لمدة 16-24 ساعة',
        descEn: 'Running a complete villa (6+ rooms) with all essential appliances for 16-24 hours',
        icon: 'Castle',
      },
      {
        titleAr: 'المتاجر والمعارض',
        titleEn: 'Shops & Showrooms',
        descAr: 'تشغيل متجر كبير أو معرض مع إنارة كاملة وثلاجات ومكيف صغير',
        descEn: 'Running a large shop or showroom with full lighting, refrigerators and small AC',
        icon: 'Store',
      },
      {
        titleAr: 'المكاتب الكبيرة',
        titleEn: 'Large Offices',
        descAr: 'تشغيل مكتب كبير (10+ أجهزة كمبيوتر) مع إنارة وتكييف خفيف',
        descEn: 'Running a large office (10+ computers) with lighting and light cooling',
        icon: 'Building',
      },
    ],

    recommendedForAr: [
      'الفلل الكبيرة',
      'المكاتب والشركات',
      'المتاجر والمعارض الكبيرة',
      'العيادات والمراكز الطبية',
      'المطاعم والكافيهات',
    ],
    recommendedForEn: [
      'Large villas',
      'Offices and companies',
      'Large shops and showrooms',
      'Clinics and medical centers',
      'Restaurants and cafes',
    ],
    
    notRecommendedForAr: [
      'المنازل الصغيرة (US2000C أو US3000C أفضل اقتصادياً)',
      'المصانع الكبيرة (يُنصح بـ Force H1 أو حلول صناعية)',
    ],
    notRecommendedForEn: [
      'Small homes (US2000C or US3000C more economical)',
      'Large factories (Force H1 or industrial solutions recommended)',
    ],

    faqs: [
      {
        questionAr: 'هل US5000 أفضل من وحدتين US3000C؟',
        questionEn: 'Is US5000 better than two US3000C units?',
        answerAr: 'من ناحية المساحة والتكلفة، وحدة US5000 واحدة (4.8 كيلووات ساعة) أفضل من وحدتين US2000C (4.8 كيلووات ساعة) لأنها أقل توصيلات وأسهل في التركيب.',
        answerEn: 'In terms of space and cost, one US5000 unit (4.8kWh) is better than two US2000C units (4.8kWh) because it has fewer connections and is easier to install.',
      },
      {
        questionAr: 'كم تكفي لتشغيل مكيف؟',
        questionEn: 'How long can it run an AC?',
        answerAr: 'مكيف 1.5 طن يستهلك حوالي 1.5 كيلووات. وحدة US5000 واحدة تشغله حوالي 3 ساعات. لتشغيل أطول، يُنصح بوحدتين أو أكثر.',
        answerEn: 'A 1.5-ton AC consumes about 1.5kW. One US5000 unit can run it for about 3 hours. For longer runtime, two or more units are recommended.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us3000c',
        pros: {
          ar: ['سعة أكبر بـ 37%', 'توصيلات أقل لنفس السعة', 'أفضل اقتصادياً للسعات الكبيرة'],
          en: ['37% more capacity', 'Fewer connections for same capacity', 'More economical for large capacities'],
        },
        cons: {
          ar: ['أثقل وزناً', 'سعر الوحدة أعلى'],
          en: ['Heavier weight', 'Higher unit price'],
        },
      },
      {
        productSlug: 'force-h1',
        pros: {
          ar: ['سعر أقل للوحدة', 'أخف وزناً', 'مناسب للتطبيقات المتوسطة'],
          en: ['Lower unit price', 'Lighter weight', 'Suitable for medium applications'],
        },
        cons: {
          ar: ['سعة أقل لكل وحدة', 'غير مناسب للجهد العالي'],
          en: ['Lower capacity per unit', 'Not suitable for high voltage'],
        },
      },
    ],

    relatedProductSlugs: ['us3000c', 'us2000c', 'force-h1'],
    relatedServiceKeys: ['installation', 'storage', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'marib'],

    seoTitleAr: 'بطارية Pylontech US5000 في اليمن | 4.8 كيلووات ساعة | للفلل والشركات',
    seoTitleEn: 'Pylontech US5000 Battery in Yemen | 4.8kWh | For Villas & Businesses',
    seoDescriptionAr: 'بطارية Pylontech US5000 بسعة 4.8 كيلووات ساعة للفلل والمكاتب في اليمن. ضمان 10 سنوات. أعلى سعة في سلسلة US. الوكيل المعتمد الوحيد.',
    seoDescriptionEn: 'Pylontech US5000 battery with 4.8kWh capacity for villas and offices in Yemen. 10-year warranty. Highest capacity in US series. The only authorized agent.',
    seoKeywordsAr: ['بطارية Pylontech US5000', 'بطارية للفلل', 'تخزين طاقة تجاري', 'بطارية ليثيوم كبيرة'],
    seoKeywordsEn: ['Pylontech US5000 battery', 'villa battery', 'commercial energy storage', 'large lithium battery'],

    image: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],

    isAvailable: true,
    isFeatured: true,
  },

  {
    id: 'pylontech-force-h1',
    slug: 'force-h1',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'Force H1',
    nameAr: 'بطارية Pylontech Force H1',
    nameEn: 'Pylontech Force H1 Battery',
    
    shortDescAr: 'نظام بطاريات عالي الجهد للتطبيقات السكنية والتجارية الكبيرة',
    shortDescEn: 'High-voltage battery system for large residential and commercial applications',
    
    fullDescAr: `نظام Pylontech Force H1 هو الحل المتقدم للتطبيقات الكبيرة التي تتطلب جهداً عالياً وكفاءة قصوى. يعمل بجهد 48-400V ويوفر مرونة عالية في التصميم.

مثالي للفلل الكبيرة، المنشآت التجارية، والمشاريع التي تتطلب أنظمة تخزين طاقة متقدمة. التصميم المعياري يسمح بالتوسع حسب الحاجة.`,
    
    fullDescEn: `The Pylontech Force H1 system is the advanced solution for large applications requiring high voltage and maximum efficiency. It operates at 48-400V and offers high design flexibility.

Ideal for large villas, commercial facilities, and projects requiring advanced energy storage systems. Modular design allows expansion as needed.`,

    keyTakeaways: [
      { ar: 'نظام عالي الجهد (48-400V)', en: 'High-voltage system (48-400V)' },
      { ar: 'كفاءة عالية تصل إلى 97%', en: 'High efficiency up to 97%' },
      { ar: 'تصميم معياري قابل للتوسع', en: 'Modular expandable design' },
      { ar: 'مثالي للمنشآت الكبيرة والتجارية', en: 'Ideal for large and commercial facilities' },
    ],

    specifications: [
      { keyAr: 'سعة الوحدة', keyEn: 'Module Capacity', value: '3.55', unit: 'kWh' },
      { keyAr: 'نطاق الجهد', keyEn: 'Voltage Range', value: '48-400', unit: 'V' },
      { keyAr: 'السعة القصوى للنظام', keyEn: 'Max System Capacity', value: '192', unit: 'kWh' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '95', unit: '%' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '8000+', unit: 'cycles' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '97', unit: '%' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temperature', value: '-10~50', unit: '°C' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10', unit: 'years' },
      { keyAr: 'حماية IP', keyEn: 'IP Rating', value: 'IP55', unit: '' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 5,
        dustResistance: 5,
      },
      explanationAr: 'Force H1 مصمم للظروف القاسية مع حماية IP55 ضد الغبار والماء. الكفاءة العالية والتبريد المتقدم يجعله مثالياً لجميع المناطق اليمنية بما فيها الساحلية.',
      explanationEn: 'Force H1 is designed for harsh conditions with IP55 protection against dust and water. High efficiency and advanced cooling make it ideal for all Yemeni regions including coastal areas.',
      bestRegionsAr: ['جميع المناطق اليمنية'],
      bestRegionsEn: ['All Yemeni regions'],
      climateNotesAr: 'مناسب لجميع الظروف المناخية في اليمن بما فيها المناطق الساحلية والصحراوية.',
      climateNotesEn: 'Suitable for all climate conditions in Yemen including coastal and desert areas.',
    },

    useCases: [
      {
        titleAr: 'الفلل والقصور',
        titleEn: 'Villas & Mansions',
        descAr: 'تشغيل فيلا كاملة مع مكيفات ومسبح وجميع الأجهزة لأيام',
        descEn: 'Running a complete villa with AC, pool, and all appliances for days',
        icon: 'Castle',
      },
      {
        titleAr: 'المنشآت التجارية',
        titleEn: 'Commercial Facilities',
        descAr: 'مولات، فنادق، مستشفيات، ومصانع صغيرة',
        descEn: 'Malls, hotels, hospitals, and small factories',
        icon: 'Building2',
      },
      {
        titleAr: 'المشاريع الحكومية',
        titleEn: 'Government Projects',
        descAr: 'مباني حكومية، مدارس، مستوصفات، وأبراج اتصالات',
        descEn: 'Government buildings, schools, clinics, and telecom towers',
        icon: 'Landmark',
      },
    ],

    recommendedForAr: [
      'الفلل والقصور الكبيرة',
      'الفنادق والمنتجعات',
      'المستشفيات والمراكز الطبية',
      'المباني التجارية والمكاتب الكبيرة',
      'أبراج الاتصالات والمحطات',
    ],
    recommendedForEn: [
      'Large villas and mansions',
      'Hotels and resorts',
      'Hospitals and medical centers',
      'Commercial buildings and large offices',
      'Telecom towers and stations',
    ],
    
    notRecommendedForAr: [
      'المنازل الصغيرة والمتوسطة (سلسلة US أكثر ملاءمة)',
      'الميزانيات المحدودة',
    ],
    notRecommendedForEn: [
      'Small and medium homes (US series more suitable)',
      'Limited budgets',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين Force H1 وسلسلة US؟',
        questionEn: 'What is the difference between Force H1 and US series?',
        answerAr: 'Force H1 نظام عالي الجهد (حتى 400V) بكفاءة 97% وحماية IP55، مصمم للتطبيقات الكبيرة. سلسلة US تعمل بجهد 48V وتناسب التطبيقات السكنية الصغيرة والمتوسطة.',
        answerEn: 'Force H1 is a high-voltage system (up to 400V) with 97% efficiency and IP55 protection, designed for large applications. US series operates at 48V and suits small to medium residential applications.',
      },
      {
        questionAr: 'هل يحتاج انفرتر خاص؟',
        questionEn: 'Does it require a special inverter?',
        answerAr: 'نعم، يتطلب انفرتر متوافق مع الجهد العالي. نوفر حلولاً متكاملة مع انفرترات متوافقة.',
        answerEn: 'Yes, it requires a high-voltage compatible inverter. We provide complete solutions with compatible inverters.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us5000',
        pros: {
          ar: ['كفاءة أعلى (97% مقابل 95%)', 'حماية IP55', 'مناسب للجهد العالي', 'عمر أطول (8000 دورة)'],
          en: ['Higher efficiency (97% vs 95%)', 'IP55 protection', 'Suitable for high voltage', 'Longer life (8000 cycles)'],
        },
        cons: {
          ar: ['سعر أعلى', 'يتطلب انفرتر خاص', 'أكثر تعقيداً في التركيب'],
          en: ['Higher price', 'Requires special inverter', 'More complex installation'],
        },
      },
    ],

    relatedProductSlugs: ['us5000', 'us3000c'],
    relatedServiceKeys: ['installation', 'storage', 'consultation', 'assessment'],
    relatedLocationSlugs: ['sanaa', 'aden', 'marib'],

    seoTitleAr: 'Pylontech Force H1 في اليمن | نظام عالي الجهد | للمنشآت الكبيرة',
    seoTitleEn: 'Pylontech Force H1 in Yemen | High Voltage System | For Large Facilities',
    seoDescriptionAr: 'نظام Pylontech Force H1 عالي الجهد في اليمن. كفاءة 97%، حماية IP55. للفلل الكبيرة والمنشآت التجارية. ضمان 10 سنوات. الوكيل المعتمد.',
    seoDescriptionEn: 'Pylontech Force H1 high-voltage system in Yemen. 97% efficiency, IP55 protection. For large villas and commercial facilities. 10-year warranty. Authorized agent.',
    seoKeywordsAr: ['Pylontech Force H1', 'بطارية عالية الجهد', 'تخزين طاقة تجاري', 'بطارية للفنادق', 'بطارية للمستشفيات'],
    seoKeywordsEn: ['Pylontech Force H1', 'high voltage battery', 'commercial energy storage', 'hotel battery', 'hospital battery'],

    image: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],

    isAvailable: true,
    isFeatured: true,
  },
];
