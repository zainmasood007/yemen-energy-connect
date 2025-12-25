// Battery Products Data
// Real products from alqatta.com
// Specs marked as placeholders where unconfirmed

import { Product } from './types';

export const batteryProducts: Product[] = [
  // Pylontech US5000
  {
    id: 'pylontech-us5000',
    slug: 'us5000',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'US5000',
    nameAr: 'بطارية ليثيوم Pylontech US5000 (4.8kWh)',
    nameEn: 'Pylontech US5000 Lithium Battery (4.8kWh)',
    
    shortDescAr: 'الجيل الجديد من بطاريات تخزين الطاقة الشمسية - 48 فولت بسعة 4.8 كيلوواط ساعة',
    shortDescEn: 'Next-generation solar energy storage battery - 48V with 4.8kWh capacity',
    
    fullDescAr: `بطارية Pylontech US5000 هي الحل الأقوى لتخزين الطاقة الشمسية في اليمن. تتميز بتقنية ليثيوم فوسفات الحديد (LiFePO4) الآمنة والموثوقة، مع عمر افتراضي يتجاوز 6000 دورة شحن وتفريغ.

مصممة خصيصاً للعمل في البيئات الحارة، تعتبر US5000 الخيار الأمثل للمنازل والشركات في اليمن التي تعاني من انقطاعات الكهرباء المتكررة.

**المنتج الأصلي بضمان الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Pylontech US5000 is the ultimate solution for solar energy storage in Yemen. It features safe and reliable Lithium Iron Phosphate (LiFePO4) technology, with a lifespan exceeding 6000 charge/discharge cycles.

Specifically designed for hot environments, the US5000 is the optimal choice for homes and businesses in Yemen suffering from frequent power outages.

**Original product with authorized dealer warranty: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'سعة 4.8 كيلوواط ساعة - تكفي لتشغيل منزل صغير ليلة كاملة', en: '4.8kWh capacity - enough to power a small home overnight' },
      { ar: 'عمر افتراضي +6000 دورة - استثمار يدوم أكثر من 15 سنة', en: '6000+ cycle lifespan - investment lasting over 15 years' },
      { ar: 'تقنية LiFePO4 الآمنة - لا خطر حريق أو انفجار', en: 'Safe LiFePO4 technology - no fire or explosion risk' },
      { ar: 'قابلة للتوسيع حتى 16 بطارية متوازية', en: 'Expandable up to 16 batteries in parallel' },
    ],

    specifications: [
      { keyAr: 'السعة الكلية', keyEn: 'Total Capacity', value: '4.8', unit: 'kWh' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '48', unit: 'V' },
      { keyAr: 'التيار الاسمي', keyEn: 'Nominal Current', value: '100', unit: 'Ah' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '6000+', unit: 'cycles' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '95', unit: '%' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temperature', value: '0~50', unit: '°C' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '~52', unit: 'kg' },
      { keyAr: 'التوصيل المتوازي', keyEn: 'Parallel Connection', value: 'حتى 16 وحدة / Up to 16 units' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'LiFePO4' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'بطارية US5000 مصممة للعمل في درجات حرارة تصل إلى 50 درجة مئوية، مما يجعلها مثالية لمناخ اليمن الحار. تقنية LiFePO4 أكثر استقراراً من بطاريات الليثيوم العادية في الحرارة العالية.',
      explanationEn: 'The US5000 is designed to operate at temperatures up to 50°C, making it ideal for Yemen\'s hot climate. LiFePO4 technology is more stable than regular lithium batteries in high heat.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Marib'],
      climateNotesAr: 'تعمل بكفاءة في جميع مناطق اليمن، مع أداء ممتاز في المناطق الساحلية الحارة مثل عدن والحديدة',
      climateNotesEn: 'Works efficiently in all regions of Yemen, with excellent performance in hot coastal areas like Aden and Hudaydah',
    },

    useCases: [
      {
        titleAr: 'المنازل السكنية',
        titleEn: 'Residential Homes',
        descAr: 'تخزين الطاقة الشمسية لتشغيل المنزل ليلاً أو أثناء انقطاع الكهرباء',
        descEn: 'Store solar energy to power home at night or during outages',
        icon: 'Home',
      },
      {
        titleAr: 'الشركات الصغيرة',
        titleEn: 'Small Businesses',
        descAr: 'ضمان استمرارية العمل مع طاقة احتياطية موثوقة',
        descEn: 'Ensure business continuity with reliable backup power',
        icon: 'Building2',
      },
      {
        titleAr: 'العيادات الطبية',
        titleEn: 'Medical Clinics',
        descAr: 'طاقة مستمرة للأجهزة الطبية والتبريد',
        descEn: 'Continuous power for medical equipment and refrigeration',
        icon: 'Heart',
      },
      {
        titleAr: 'أنظمة الاتصالات',
        titleEn: 'Telecom Systems',
        descAr: 'تشغيل أبراج الاتصالات ومعدات الشبكات',
        descEn: 'Power cell towers and network equipment',
        icon: 'Radio',
      },
    ],

    recommendedForAr: [
      'المنازل التي تحتاج طاقة احتياطية 4-8 ساعات',
      'الأنظمة الشمسية بقدرة 3-5 كيلوواط',
      'من يبحث عن استثمار طويل الأمد (+15 سنة)',
      'المناطق ذات انقطاعات الكهرباء المتكررة',
    ],
    recommendedForEn: [
      'Homes needing 4-8 hours backup power',
      'Solar systems with 3-5kW capacity',
      'Those seeking long-term investment (15+ years)',
      'Areas with frequent power outages',
    ],
    notRecommendedForAr: [
      'الأنظمة الصغيرة جداً (أقل من 2 كيلوواط)',
      'التطبيقات المتنقلة (الوزن ثقيل)',
      'الميزانيات المحدودة جداً (بطاريات الجل أرخص مبدئياً)',
    ],
    notRecommendedForEn: [
      'Very small systems (less than 2kW)',
      'Mobile applications (heavy weight)',
      'Very limited budgets (gel batteries are initially cheaper)',
    ],

    faqs: [
      {
        questionAr: 'كم تدوم بطارية US5000؟',
        questionEn: 'How long does the US5000 battery last?',
        answerAr: 'بطارية US5000 مصممة لأكثر من 6000 دورة شحن وتفريغ. بمعدل دورة واحدة يومياً، تعني عمر افتراضي يتجاوز 16 سنة.',
        answerEn: 'The US5000 is designed for over 6000 charge/discharge cycles. At one cycle per day, this means a lifespan exceeding 16 years.',
      },
      {
        questionAr: 'هل يمكن ربط أكثر من بطارية معاً؟',
        questionEn: 'Can multiple batteries be connected together?',
        answerAr: 'نعم، يمكن ربط حتى 16 بطارية US5000 بالتوازي للحصول على سعة تصل إلى 76.8 كيلوواط ساعة.',
        answerEn: 'Yes, up to 16 US5000 batteries can be connected in parallel for a capacity of up to 76.8kWh.',
      },
      {
        questionAr: 'هل البطارية آمنة في الحرارة العالية؟',
        questionEn: 'Is the battery safe in high temperatures?',
        answerAr: 'نعم، تقنية LiFePO4 هي الأكثر أماناً واستقراراً في درجات الحرارة العالية، ولا خطر حريق أو انفجار حتى في أسوأ الظروف.',
        answerEn: 'Yes, LiFePO4 technology is the safest and most stable at high temperatures, with no risk of fire or explosion even in worst conditions.',
      },
      {
        questionAr: 'ما الفرق بين US5000 و US3000C؟',
        questionEn: 'What is the difference between US5000 and US3000C?',
        answerAr: 'US5000 أحدث وأكبر سعة (4.8 كيلوواط ساعة مقابل 3.5 كيلوواط ساعة)، مع تحسينات في نظام BMS وكفاءة الشحن.',
        answerEn: 'US5000 is newer and larger capacity (4.8kWh vs 3.5kWh), with improvements in BMS system and charging efficiency.',
      },
      {
        questionAr: 'كم المدة لشحن البطارية بالكامل؟',
        questionEn: 'How long to fully charge the battery?',
        answerAr: 'يعتمد على قدرة الألواح الشمسية والانفرتر. عادةً 4-6 ساعات في يوم مشمس مع نظام مناسب.',
        answerEn: 'Depends on solar panel and inverter capacity. Typically 4-6 hours on a sunny day with a suitable system.',
      },
    ],

    comparisons: [
      {
        productSlug: 'pelio-l',
        pros: { ar: ['سعة أكبر', 'أكثر انتشاراً', 'توافق أوسع'], en: ['Larger capacity', 'More widespread', 'Wider compatibility'] },
        cons: { ar: ['تصميم تقليدي', 'يحتاج حامل'], en: ['Traditional design', 'Needs rack'] },
      },
      {
        productSlug: '12v-100ah-lithium',
        pros: { ar: ['نظام 48V أكثر كفاءة', 'سعة أكبر', 'BMS متقدم'], en: ['48V system more efficient', 'Larger capacity', 'Advanced BMS'] },
        cons: { ar: ['سعر أعلى', 'يحتاج انفرتر 48V'], en: ['Higher price', 'Requires 48V inverter'] },
      },
    ],

    relatedProductSlugs: ['pelio-l', 'sp5000', 'sp8000', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'بطارية Pylontech US5000 (4.8kWh) - أفضل بطارية ليثيوم في اليمن',
    seoTitleEn: 'Pylontech US5000 (4.8kWh) - Best Lithium Battery in Yemen',
    seoDescriptionAr: 'بطارية ليثيوم Pylontech US5000 بسعة 4.8 كيلوواط ساعة. الحل الأمثل لتخزين الطاقة الشمسية في اليمن. ضمان 10 سنوات من الوكيل المعتمد مؤسسة القطاع.',
    seoDescriptionEn: 'Pylontech US5000 lithium battery with 4.8kWh capacity. The optimal solution for solar energy storage in Yemen. 10-year warranty from authorized dealer Al-Qatta.',
    seoKeywordsAr: ['بطارية ليثيوم', 'Pylontech US5000', 'تخزين الطاقة الشمسية', 'بطارية 48 فولت', 'بطارية شمسية اليمن'],
    seoKeywordsEn: ['lithium battery', 'Pylontech US5000', 'solar energy storage', '48V battery', 'solar battery Yemen'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-us-series.pdf',
    
    isAvailable: true,
    isFeatured: true,
  },

  // Pylontech Pelio L-5.12kWh
  {
    id: 'pylontech-pelio-l',
    slug: 'pelio-l',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'Pelio L-5.12kWh',
    nameAr: 'بطارية Pylontech Pelio (L-5.12kWh)',
    nameEn: 'Pylontech Pelio (L-5.12kWh)',
    
    shortDescAr: 'بطارية الحائط الذكية - تصميم عصري مع قوة الليثيوم',
    shortDescEn: 'Smart wall battery - Modern design with lithium power',
    
    fullDescAr: `بطارية Pylontech Pelio هي الجيل الجديد من بطاريات الحائط السكنية. تجمع بين التصميم العصري الأنيق وتقنية LiFePO4 الموثوقة، مما يجعلها الخيار الأمثل للمنازل الحديثة في اليمن.

**المميزات الرئيسية:**
- تصميم أنيق للتركيب على الحائط
- سعة 5.12 كيلوواط ساعة
- نظام BMS مدمج ذكي
- شاشة عرض LED لحالة البطارية

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Pylontech Pelio is the new generation of residential wall batteries. It combines elegant modern design with reliable LiFePO4 technology, making it the optimal choice for modern homes in Yemen.

**Key Features:**
- Elegant wall-mount design
- 5.12kWh capacity
- Integrated smart BMS system
- LED display for battery status

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'تصميم جداري أنيق - يتناسب مع ديكور المنزل العصري', en: 'Elegant wall design - matches modern home décor' },
      { ar: 'سعة 5.12 كيلوواط ساعة - أكبر من US5000', en: '5.12kWh capacity - larger than US5000' },
      { ar: 'شاشة LED مدمجة - مراقبة حالة البطارية بسهولة', en: 'Built-in LED display - easy battery status monitoring' },
      { ar: 'تركيب سهل على الحائط - توفير المساحة', en: 'Easy wall installation - saves space' },
    ],

    specifications: [
      { keyAr: 'السعة الكلية', keyEn: 'Total Capacity', value: '5.12', unit: 'kWh' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '51.2', unit: 'V' },
      { keyAr: 'التيار الاسمي', keyEn: 'Nominal Current', value: '100', unit: 'Ah' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '6000+', unit: 'cycles' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '90', unit: '%' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temperature', value: '0~45', unit: '°C' },
      { keyAr: 'نوع التركيب', keyEn: 'Mount Type', value: 'جداري / Wall Mount' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'LiFePO4' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '~600 × 400 × 150', unit: 'mm' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 5,
      },
      explanationAr: 'تصميم Pelio المغلق يوفر حماية ممتازة من الغبار والرطوبة. مثالية للتركيب داخل المنازل في جميع مناطق اليمن.',
      explanationEn: 'Pelio\'s enclosed design provides excellent protection from dust and humidity. Ideal for indoor installation in all regions of Yemen.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah'],
      climateNotesAr: 'يُفضل التركيب في مكان جيد التهوية. مناسبة للمناطق الساحلية بفضل التصميم المغلق.',
      climateNotesEn: 'Preferably installed in a well-ventilated area. Suitable for coastal areas thanks to enclosed design.',
    },

    useCases: [
      {
        titleAr: 'الفلل الحديثة',
        titleEn: 'Modern Villas',
        descAr: 'تصميم أنيق يتناسب مع الديكور الداخلي الفاخر',
        descEn: 'Elegant design matching luxury interior décor',
        icon: 'Home',
      },
      {
        titleAr: 'الشقق السكنية',
        titleEn: 'Apartments',
        descAr: 'توفير المساحة مع التركيب الجداري - لا تحتاج مساحة أرضية',
        descEn: 'Space saving with wall mount installation - no floor space needed',
        icon: 'Building',
      },
      {
        titleAr: 'المكاتب والعيادات',
        titleEn: 'Offices & Clinics',
        descAr: 'طاقة احتياطية موثوقة لأجهزة الكمبيوتر والأجهزة الطبية',
        descEn: 'Reliable backup power for computers and medical equipment',
        icon: 'Briefcase',
      },
      {
        titleAr: 'المناطق الساحلية',
        titleEn: 'Coastal Areas',
        descAr: 'التصميم المغلق يحمي من الرطوبة والملوحة في عدن والحديدة',
        descEn: 'Enclosed design protects from humidity and salinity in Aden and Hudaydah',
        icon: 'Waves',
      },
    ],

    recommendedForAr: [
      'المنازل الحديثة التي تهتم بالتصميم',
      'المساحات المحدودة التي تحتاج تركيب جداري',
      'من يريد نظام متكامل مع شاشة عرض',
      'الأنظمة الشمسية 3-6 كيلوواط',
    ],
    recommendedForEn: [
      'Modern homes that care about design',
      'Limited spaces needing wall mount',
      'Those wanting integrated system with display',
      'Solar systems 3-6kW',
    ],
    notRecommendedForAr: [
      'الأنظمة الكبيرة التي تحتاج توسعة كبيرة',
      'التركيب الخارجي المعرض للشمس المباشرة',
      'البيئات شديدة الحرارة (أكثر من 45 درجة)',
    ],
    notRecommendedForEn: [
      'Large systems needing major expansion',
      'Outdoor installation exposed to direct sun',
      'Extremely hot environments (over 45°C)',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين Pelio و US5000؟',
        questionEn: 'What is the difference between Pelio and US5000?',
        answerAr: 'Pelio مصممة للتركيب الجداري بتصميم عصري، بينما US5000 تحتاج حامل ولكنها أسهل في التوسعة. Pelio أكبر قليلاً في السعة (5.12 مقابل 4.8 كيلوواط ساعة).',
        answerEn: 'Pelio is designed for wall mounting with modern design, while US5000 needs a rack but is easier to expand. Pelio is slightly larger in capacity (5.12 vs 4.8kWh).',
      },
      {
        questionAr: 'هل يمكن ربط أكثر من بطارية Pelio؟',
        questionEn: 'Can multiple Pelio batteries be connected?',
        answerAr: 'نعم، يمكن ربط عدة وحدات Pelio لزيادة السعة، لكن التوسعة أقل مرونة من سلسلة US.',
        answerEn: 'Yes, multiple Pelio units can be connected to increase capacity, but expansion is less flexible than US series.',
      },
      {
        questionAr: 'هل Pelio مناسبة للمناطق الساحلية؟',
        questionEn: 'Is Pelio suitable for coastal areas?',
        answerAr: 'نعم، التصميم المغلق يوفر حماية جيدة من الرطوبة والملوحة، لكن يُفضل التركيب داخل المنزل.',
        answerEn: 'Yes, the enclosed design provides good protection from humidity and salinity, but indoor installation is preferred.',
      },
      {
        questionAr: 'كم تكفي بطارية Pelio من ساعات التشغيل؟',
        questionEn: 'How many hours can Pelio battery run?',
        answerAr: 'بسعة 5.12 كيلوواط ساعة، تكفي لتشغيل منزل صغير 6-8 ساعات أو إضاءة ومراوح لأكثر من 12 ساعة.',
        answerEn: 'With 5.12kWh capacity, it runs a small home for 6-8 hours or lights and fans for over 12 hours.',
      },
      {
        questionAr: 'هل تحتاج صيانة دورية؟',
        questionEn: 'Does it need regular maintenance?',
        answerAr: 'لا، بطاريات LiFePO4 لا تحتاج صيانة. فقط تأكد من التهوية الجيدة وتجنب الحرارة المباشرة.',
        answerEn: 'No, LiFePO4 batteries need no maintenance. Just ensure good ventilation and avoid direct heat.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us5000',
        pros: { ar: ['تصميم أنيق', 'شاشة عرض مدمجة', 'سعة أكبر قليلاً'], en: ['Elegant design', 'Built-in display', 'Slightly larger capacity'] },
        cons: { ar: ['أقل مرونة في التوسعة', 'سعر أعلى'], en: ['Less flexible expansion', 'Higher price'] },
      },
    ],

    relatedProductSlugs: ['us5000', 'sp5000', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'بطارية Pylontech Pelio (5.12kWh) - بطارية الحائط الذكية في اليمن',
    seoTitleEn: 'Pylontech Pelio (5.12kWh) - Smart Wall Battery in Yemen',
    seoDescriptionAr: 'بطارية Pylontech Pelio الجدارية بسعة 5.12 كيلوواط ساعة. تصميم عصري مع تقنية LiFePO4 الآمنة. الوكيل المعتمد مؤسسة القطاع.',
    seoDescriptionEn: 'Pylontech Pelio wall battery with 5.12kWh capacity. Modern design with safe LiFePO4 technology. Authorized dealer Al-Qatta.',
    seoKeywordsAr: ['بطارية Pelio', 'بطارية جدارية', 'Pylontech اليمن', 'بطارية ليثيوم'],
    seoKeywordsEn: ['Pelio battery', 'wall battery', 'Pylontech Yemen', 'lithium battery'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-us-series.pdf',
    
    isAvailable: true,
    isFeatured: true,
  },

  // 12V 100Ah Lithium Battery
  {
    id: '12v-100ah-lithium',
    slug: '12v-100ah-lithium',
    category: 'pylontech',
    brand: 'Al-Qatta',
    model: '12V 100Ah All-Purpose',
    nameAr: 'بطارية ليثيوم 12V 100Ah متعددة الاستخدامات',
    nameEn: '12V 100Ah All-Purpose Lithium Battery',
    
    shortDescAr: 'الجيل الجديد من بطاريات 12 فولت - خفيفة وقوية وتعيش طويلاً',
    shortDescEn: 'New generation 12V batteries - Light, powerful, and long-lasting',
    
    fullDescAr: `وداعاً لبطاريات الجل والأسيد الثقيلة! بطارية ليثيوم 12V 100Ah هي البديل العصري والأكثر كفاءة.

**لماذا تختار بطارية ليثيوم 12V؟**
- أخف وزناً بنسبة 60% من بطاريات الرصاص
- عمر افتراضي أطول 5 مرات
- لا تحتاج صيانة
- شحن أسرع
- أداء ثابت حتى في الحرارة العالية

مثالية للسيارات، القوارب، الكرفانات، وأنظمة الطاقة الشمسية الصغيرة.`,
    
    fullDescEn: `Goodbye to heavy gel and acid batteries! The 12V 100Ah lithium battery is the modern and most efficient alternative.

**Why choose 12V lithium battery?**
- 60% lighter than lead batteries
- 5x longer lifespan
- Maintenance-free
- Faster charging
- Consistent performance even in high heat

Ideal for cars, boats, caravans, and small solar systems.`,

    keyTakeaways: [
      { ar: 'أخف 60% من بطاريات الرصاص - سهولة في النقل والتركيب', en: '60% lighter than lead batteries - easy to transport and install' },
      { ar: 'متعددة الاستخدامات - سيارات، قوارب، كرفانات، طاقة شمسية', en: 'Multi-purpose - cars, boats, caravans, solar' },
      { ar: 'لا تحتاج صيانة - اشتري وانسى', en: 'Maintenance-free - buy and forget' },
      { ar: 'BMS مدمج - حماية من الشحن الزائد والتفريغ العميق', en: 'Built-in BMS - protection from overcharge and deep discharge' },
    ],

    specifications: [
      { keyAr: 'الجهد', keyEn: 'Voltage', value: '12', unit: 'V' },
      { keyAr: 'السعة', keyEn: 'Capacity', value: '100', unit: 'Ah' },
      { keyAr: 'الطاقة', keyEn: 'Energy', value: '1.28', unit: 'kWh' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'LiFePO4' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '3000+', unit: 'cycles' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '~12', unit: 'kg' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temp', value: '-10~50', unit: '°C' },
      { keyAr: 'BMS مدمج', keyEn: 'Built-in BMS', value: 'نعم / Yes' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '95', unit: '%' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '3 سنوات / 3 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 3,
        dustResistance: 4,
      },
      explanationAr: 'بطارية مثالية للتطبيقات المتنقلة والأنظمة الصغيرة في اليمن. خفيفة الوزن وتعمل بكفاءة في الحرارة.',
      explanationEn: 'Ideal battery for mobile applications and small systems in Yemen. Lightweight and efficient in heat.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'مناسبة لجميع مناطق اليمن بفضل تقنية LiFePO4 المستقرة',
      climateNotesEn: 'Suitable for all Yemen regions thanks to stable LiFePO4 technology',
    },

    useCases: [
      {
        titleAr: 'الكرفانات والرحلات',
        titleEn: 'Caravans & Trips',
        descAr: 'طاقة محمولة للرحلات البرية والتخييم',
        descEn: 'Portable power for road trips and camping',
        icon: 'Caravan',
      },
      {
        titleAr: 'القوارب واليخوت',
        titleEn: 'Boats & Yachts',
        descAr: 'بديل خفيف وموثوق لبطاريات القوارب التقليدية',
        descEn: 'Light and reliable alternative to traditional marine batteries',
        icon: 'Ship',
      },
      {
        titleAr: 'أنظمة شمسية صغيرة',
        titleEn: 'Small Solar Systems',
        descAr: 'مثالية للأنظمة المحمولة وإنارة الحدائق',
        descEn: 'Ideal for portable systems and garden lighting',
        icon: 'Sun',
      },
      {
        titleAr: 'UPS والطوارئ',
        titleEn: 'UPS & Emergency',
        descAr: 'طاقة احتياطية سريعة للأجهزة المهمة',
        descEn: 'Quick backup power for important devices',
        icon: 'Zap',
      },
    ],

    recommendedForAr: [
      'أصحاب الكرفانات والمركبات الترفيهية',
      'أنظمة الطاقة الشمسية الصغيرة (أقل من 1 كيلوواط)',
      'من يبحث عن بديل خفيف لبطاريات الرصاص',
      'تطبيقات UPS المنزلية',
    ],
    recommendedForEn: [
      'Caravan and RV owners',
      'Small solar systems (under 1kW)',
      'Those seeking light alternative to lead batteries',
      'Home UPS applications',
    ],
    notRecommendedForAr: [
      'أنظمة الطاقة الشمسية الكبيرة (استخدم 48V)',
      'التشغيل المتواصل لساعات طويلة',
      'الأحمال العالية (أكثر من 1000 واط)',
    ],
    notRecommendedForEn: [
      'Large solar systems (use 48V)',
      'Continuous operation for long hours',
      'High loads (over 1000W)',
    ],

    faqs: [
      {
        questionAr: 'هل يمكن استخدامها بدلاً من بطارية السيارة؟',
        questionEn: 'Can it replace a car battery?',
        answerAr: 'نعم، لكنها مصممة أكثر للتطبيقات المساعدة. لبطارية بدء التشغيل، يُفضل استخدام بطارية ليثيوم مخصصة للسيارات.',
        answerEn: "Yes, but it's designed more for auxiliary applications. For starter battery, prefer using lithium battery designed for cars.",
      },
      {
        questionAr: 'كم تدوم مقارنة ببطارية الجل؟',
        questionEn: 'How long does it last compared to gel battery?',
        answerAr: 'تدوم 3-5 أضعاف عمر بطارية الجل، مما يجعلها أوفر على المدى الطويل رغم سعرها الأعلى مبدئياً.',
        answerEn: 'Lasts 3-5 times longer than gel battery, making it more economical long-term despite higher initial price.',
      },
      {
        questionAr: 'هل تتحمل حرارة اليمن الشديدة؟',
        questionEn: 'Can it withstand Yemen extreme heat?',
        answerAr: 'نعم، تعمل حتى 50 درجة مئوية. تقنية LiFePO4 أكثر استقراراً في الحرارة من بطاريات الليثيوم العادية.',
        answerEn: 'Yes, works up to 50°C. LiFePO4 technology is more stable in heat than regular lithium batteries.',
      },
      {
        questionAr: 'هل يمكن ربطها مع بطاريات رصاص؟',
        questionEn: 'Can it be connected with lead batteries?',
        answerAr: 'لا يُنصح. خصائص الشحن مختلفة وقد تتلف إحدى البطاريات.',
        answerEn: 'Not recommended. Charging characteristics are different and may damage one of the batteries.',
      },
      {
        questionAr: 'كيف أعرف حالة شحن البطارية؟',
        questionEn: 'How do I know the battery charge state?',
        answerAr: 'BMS المدمج يوفر مؤشر LED لحالة الشحن، أو يمكن قياس الجهد مباشرة.',
        answerEn: 'Built-in BMS provides LED indicator for charge state, or you can measure voltage directly.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us5000',
        pros: { ar: ['أخف وزناً', 'أرخص', 'متعددة الاستخدامات'], en: ['Lighter', 'Cheaper', 'Multi-purpose'] },
        cons: { ar: ['سعة أقل', 'نظام 12V أقل كفاءة للمنازل'], en: ['Lower capacity', '12V system less efficient for homes'] },
      },
    ],

    relatedProductSlugs: ['us5000', 'amber-rock', 'sp1000', 'sp1200'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'بطارية ليثيوم 12V 100Ah - بديل بطاريات الجل في اليمن',
    seoTitleEn: '12V 100Ah Lithium Battery - Gel Battery Alternative in Yemen',
    seoDescriptionAr: 'بطارية ليثيوم 12 فولت 100 أمبير متعددة الاستخدامات. أخف 60% من بطاريات الرصاص، عمر أطول 5 مرات. للكرفانات والقوارب والطاقة الشمسية.',
    seoDescriptionEn: '12V 100Ah multi-purpose lithium battery. 60% lighter than lead batteries, 5x longer life. For caravans, boats, and solar systems.',
    seoKeywordsAr: ['بطارية 12 فولت', 'بطارية ليثيوم', 'بطارية كرفان', 'بديل بطارية الجل'],
    seoKeywordsEn: ['12V battery', 'lithium battery', 'caravan battery', 'gel battery alternative'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-rv12100.pdf',
    
    isAvailable: true,
    isFeatured: false,
  },

  // Amber Rock Portable Power Station
  {
    id: 'amber-rock',
    slug: 'amber-rock',
    category: 'pylontech',
    brand: 'Amber Rock',
    model: 'Portable Power Station 473Wh',
    nameAr: 'محطة طاقة متنقلة Amber Rock (473Wh)',
    nameEn: 'Amber Rock Portable Power Station (473Wh)',
    
    shortDescAr: 'كهرباء أينما كنت - محطة طاقة متنقلة بتقنية LiFePO4 الآمنة',
    shortDescEn: 'Power wherever you are - Portable power station with safe LiFePO4 technology',
    
    fullDescAr: `محطة Amber Rock المتنقلة هي رفيقك المثالي للرحلات والطوارئ. بسعة 473 واط ساعة وتقنية LiFePO4 الآمنة، توفر طاقة موثوقة في أي مكان.

**مخارج متعددة:**
- مخارج AC للأجهزة المنزلية
- مخارج USB للهواتف والأجهزة الذكية
- مخرج DC للأجهزة المتخصصة

**شحن مرن:**
- الشحن من الكهرباء المنزلية
- الشحن من السيارة
- الشحن من الألواح الشمسية

خفيفة وقوية - مثالية للتخييم، الرحلات البرية، وانقطاعات الكهرباء.`,
    
    fullDescEn: `Amber Rock portable station is your ideal companion for trips and emergencies. With 473Wh capacity and safe LiFePO4 technology, it provides reliable power anywhere.

**Multiple outputs:**
- AC outlets for home appliances
- USB ports for phones and smart devices
- DC output for specialized devices

**Flexible charging:**
- Home electricity charging
- Car charging
- Solar panel charging

Light and powerful - ideal for camping, road trips, and power outages.`,

    keyTakeaways: [
      { ar: 'محمولة وخفيفة - اصطحبها أينما ذهبت', en: 'Portable and light - take it anywhere' },
      { ar: 'تقنية LiFePO4 - أكثر أماناً من بطاريات الليثيوم العادية', en: 'LiFePO4 technology - safer than regular lithium batteries' },
      { ar: 'شحن من 3 مصادر - كهرباء، سيارة، شمسي', en: 'Charge from 3 sources - electricity, car, solar' },
      { ar: 'مخارج متعددة - AC, USB, DC', en: 'Multiple outputs - AC, USB, DC' },
    ],

    specifications: [
      { keyAr: 'السعة', keyEn: 'Capacity', value: '473', unit: 'Wh' },
      { keyAr: 'نوع البطارية', keyEn: 'Battery Type', value: 'LiFePO4' },
      { keyAr: 'مخارج AC', keyEn: 'AC Outputs', value: '2' },
      { keyAr: 'مخارج USB', keyEn: 'USB Outputs', value: '4+' },
      { keyAr: 'قدرة الإخراج القصوى', keyEn: 'Max Output Power', value: '~500', unit: 'W' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '2000+', unit: 'cycles' },
      { keyAr: 'مدخل شمسي', keyEn: 'Solar Input', value: 'نعم / Yes' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '~5', unit: 'kg' },
      { keyAr: 'وقت الشحن الكامل', keyEn: 'Full Charge Time', value: '4-6', unit: 'hours' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Operating Temp', value: '0~40', unit: '°C' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 4,
        dustResistance: 4,
      },
      explanationAr: 'حل مثالي لانقطاعات الكهرباء في اليمن. سهلة الحمل والاستخدام، وتعمل بكفاءة في الحرارة.',
      explanationEn: 'Ideal solution for power outages in Yemen. Easy to carry and use, works efficiently in heat.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'تجنب التعرض المباشر للشمس لفترات طويلة',
      climateNotesEn: 'Avoid prolonged direct sun exposure',
    },

    useCases: [
      {
        titleAr: 'الرحلات والتخييم',
        titleEn: 'Trips & Camping',
        descAr: 'شحن الأجهزة وإنارة الخيمة',
        descEn: 'Charge devices and light up the tent',
        icon: 'Tent',
      },
      {
        titleAr: 'الطوارئ المنزلية',
        titleEn: 'Home Emergencies',
        descAr: 'تشغيل الإضاءة والهواتف عند انقطاع الكهرباء',
        descEn: 'Power lights and phones during outages',
        icon: 'Home',
      },
      {
        titleAr: 'العمل الميداني',
        titleEn: 'Field Work',
        descAr: 'تشغيل اللابتوب والأجهزة المحمولة',
        descEn: 'Power laptops and portable devices',
        icon: 'Briefcase',
      },
      {
        titleAr: 'الفعاليات الخارجية',
        titleEn: 'Outdoor Events',
        descAr: 'تشغيل السماعات والإضاءة',
        descEn: 'Power speakers and lighting',
        icon: 'Music',
      },
    ],

    recommendedForAr: [
      'محبي الرحلات والتخييم',
      'من يحتاج طاقة احتياطية للهواتف واللابتوب',
      'العمل الميداني بعيداً عن الكهرباء',
      'حالات الطوارئ قصيرة المدى',
    ],
    recommendedForEn: [
      'Travel and camping enthusiasts',
      'Those needing backup power for phones and laptops',
      'Field work away from electricity',
      'Short-term emergencies',
    ],
    notRecommendedForAr: [
      'تشغيل الأجهزة عالية الاستهلاك (مكيفات، غسالات)',
      'الطاقة الاحتياطية طويلة المدى للمنازل',
      'الأحمال الصناعية',
    ],
    notRecommendedForEn: [
      'High-consumption appliances (AC, washing machines)',
      'Long-term home backup power',
      'Industrial loads',
    ],

    faqs: [
      {
        questionAr: 'كم جهاز يمكن شحنه؟',
        questionEn: 'How many devices can be charged?',
        answerAr: 'يمكن شحن هاتف ذكي حوالي 40 مرة، أو لابتوب 4-5 مرات، أو تشغيل إنارة LED لأكثر من 20 ساعة.',
        answerEn: 'Can charge a smartphone about 40 times, laptop 4-5 times, or run LED lighting for over 20 hours.',
      },
      {
        questionAr: 'هل يمكن شحنها من الألواح الشمسية؟',
        questionEn: 'Can it be charged from solar panels?',
        answerAr: 'نعم، تدعم الشحن من الألواح الشمسية المحمولة، مما يجعلها مثالية للرحلات الطويلة.',
        answerEn: 'Yes, supports charging from portable solar panels, making it ideal for long trips.',
      },
      {
        questionAr: 'هل هي آمنة للاستخدام داخل الخيمة؟',
        questionEn: 'Is it safe to use inside a tent?',
        answerAr: 'نعم، تقنية LiFePO4 لا تنتج حرارة أو غازات خطرة، وهي أكثر أماناً من المولدات.',
        answerEn: 'Yes, LiFePO4 technology produces no dangerous heat or gases, safer than generators.',
      },
      {
        questionAr: 'هل تشغل ثلاجة صغيرة؟',
        questionEn: 'Can it run a small fridge?',
        answerAr: 'ثلاجة صغيرة جداً (مثل ثلاجة السيارة) لبضع ساعات فقط. للثلاجات العادية تحتاج سعة أكبر.',
        answerEn: 'Very small fridge (like car fridge) for just a few hours. Regular fridges need larger capacity.',
      },
      {
        questionAr: 'كم تستغرق لشحنها بالكامل؟',
        questionEn: 'How long to fully charge?',
        answerAr: '4-6 ساعات من الكهرباء المنزلية، أو 8-12 ساعة من لوح شمسي محمول حسب قدرته.',
        answerEn: '4-6 hours from home electricity, or 8-12 hours from portable solar panel depending on its capacity.',
      },
    ],

    comparisons: [
      {
        productSlug: '12v-100ah-lithium',
        pros: { ar: ['محمولة ومتكاملة', 'مخارج جاهزة', 'أسهل استخداماً'], en: ['Portable and integrated', 'Ready outputs', 'Easier to use'] },
        cons: { ar: ['سعة أقل', 'سعر أعلى نسبياً لكل واط ساعة'], en: ['Lower capacity', 'Higher price per Wh'] },
      },
    ],

    relatedProductSlugs: ['12v-100ah-lithium', 'vertex-s-plus'],
    relatedServiceKeys: ['consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'محطة طاقة متنقلة Amber Rock (473Wh) - الطاقة أينما كنت في اليمن',
    seoTitleEn: 'Amber Rock Portable Power Station (473Wh) - Power Anywhere in Yemen',
    seoDescriptionAr: 'محطة طاقة متنقلة Amber Rock بسعة 473 واط ساعة. تقنية LiFePO4 الآمنة، شحن شمسي، مخارج متعددة. للرحلات والطوارئ.',
    seoDescriptionEn: 'Amber Rock portable power station with 473Wh capacity. Safe LiFePO4 technology, solar charging, multiple outputs. For trips and emergencies.',
    seoKeywordsAr: ['محطة طاقة متنقلة', 'بطارية محمولة', 'Amber Rock', 'طاقة للتخييم'],
    seoKeywordsEn: ['portable power station', 'portable battery', 'Amber Rock', 'camping power'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-up5000-manual.pdf',
    
    isAvailable: true,
    isFeatured: false,
  },

  // Pylontech US3000C
  {
    id: 'pylontech-us3000c',
    slug: 'us3000c',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'US3000C',
    nameAr: 'بطارية ليثيوم Pylontech US3000C (3.55kWh)',
    nameEn: 'Pylontech US3000C Lithium Battery (3.55kWh)',
    
    shortDescAr: 'بطارية تخزين الطاقة الشمسية المتوسطة - 48 فولت بسعة 3.55 كيلوواط ساعة',
    shortDescEn: 'Medium solar energy storage battery - 48V with 3.55kWh capacity',
    
    fullDescAr: `بطارية Pylontech US3000C هي الخيار الأمثل للأنظمة المتوسطة. تتميز بتقنية ليثيوم فوسفات الحديد (LiFePO4) الآمنة مع عمر افتراضي يتجاوز 8000 دورة.

**المميزات:**
- سعة 3.55 كيلوواط ساعة
- متوافقة مع 19 بوصة Rack
- قابلة للتوسيع حتى 16 بطارية
- BMS مدمج ذكي

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Pylontech US3000C is the optimal choice for medium systems. It features safe Lithium Iron Phosphate (LiFePO4) technology with a lifespan exceeding 8000 cycles.

**Features:**
- 3.55kWh capacity
- 19-inch rack compatible
- Expandable up to 16 batteries
- Integrated smart BMS

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'سعة 3.55 كيلوواط ساعة - مثالية للمنازل الصغيرة', en: '3.55kWh capacity - ideal for small homes' },
      { ar: 'عمر افتراضي +8000 دورة - استثمار طويل الأمد', en: '8000+ cycle lifespan - long-term investment' },
      { ar: 'تقنية LiFePO4 الآمنة - لا خطر حريق', en: 'Safe LiFePO4 technology - no fire risk' },
      { ar: 'متوافقة مع Rack 19 بوصة', en: '19-inch rack compatible' },
    ],

    specifications: [
      { keyAr: 'السعة الكلية', keyEn: 'Total Capacity', value: '3.55', unit: 'kWh' },
      { keyAr: 'السعة القابلة للاستخدام', keyEn: 'Usable Capacity', value: '3.37', unit: 'kWh' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '48', unit: 'V' },
      { keyAr: 'التيار الاسمي', keyEn: 'Nominal Current', value: '74', unit: 'Ah' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '8000+', unit: 'cycles' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '95', unit: '%' },
      { keyAr: 'تيار الشحن/التفريغ', keyEn: 'Charge/Discharge Current', value: '37', unit: 'A' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '442×410×132', unit: 'mm' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '32', unit: 'kg' },
      { keyAr: 'العمر التصميمي', keyEn: 'Design Life', value: '15+', unit: 'سنة / Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 4,
        dustResistance: 4,
      },
      explanationAr: 'مثالية للمنازل الصغيرة والمتوسطة في اليمن. تعمل بكفاءة في درجات حرارة تصل إلى 55 درجة.',
      explanationEn: 'Ideal for small and medium homes in Yemen. Works efficiently at temperatures up to 55°C.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah'],
      climateNotesAr: 'مصممة للعمل في البيئات الحارة',
      climateNotesEn: 'Designed for hot environments',
    },

    useCases: [
      {
        titleAr: 'المنازل الصغيرة',
        titleEn: 'Small Homes',
        descAr: 'تخزين الطاقة للإضاءة والأجهزة الأساسية',
        descEn: 'Energy storage for lighting and basic appliances',
        icon: 'Home',
      },
      {
        titleAr: 'الشقق السكنية',
        titleEn: 'Apartments',
        descAr: 'حل مثالي للمساحات المحدودة',
        descEn: 'Ideal solution for limited spaces',
        icon: 'Building',
      },
    ],

    recommendedForAr: [
      'المنازل الصغيرة',
      'الأنظمة الشمسية 2-3 كيلوواط',
      'الميزانيات المتوسطة',
    ],
    recommendedForEn: [
      'Small homes',
      'Solar systems 2-3kW',
      'Medium budgets',
    ],
    notRecommendedForAr: [
      'المنازل الكبيرة (استخدم US5000)',
      'الأحمال العالية',
    ],
    notRecommendedForEn: [
      'Large homes (use US5000)',
      'High loads',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين US3000C و US5000؟',
        questionEn: 'What is the difference between US3000C and US5000?',
        answerAr: 'US5000 أكبر سعة (4.8 مقابل 3.55 كيلوواط) وأحدث. US3000C أخف وأرخص.',
        answerEn: 'US5000 has larger capacity (4.8 vs 3.55kWh) and is newer. US3000C is lighter and cheaper.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us5000',
        pros: { ar: ['أخف وزناً', 'أرخص'], en: ['Lighter', 'Cheaper'] },
        cons: { ar: ['سعة أقل'], en: ['Lower capacity'] },
      },
    ],

    relatedProductSlugs: ['us5000', 'us2000c', 'pelio-l'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'بطارية Pylontech US3000C (3.55kWh) - بطارية ليثيوم متوسطة في اليمن',
    seoTitleEn: 'Pylontech US3000C (3.55kWh) - Medium Lithium Battery in Yemen',
    seoDescriptionAr: 'بطارية Pylontech US3000C بسعة 3.55 كيلوواط ساعة. 8000+ دورة، متوافقة مع Rack 19 بوصة. الوكيل المعتمد مؤسسة القطاع.',
    seoDescriptionEn: 'Pylontech US3000C with 3.55kWh capacity. 8000+ cycles, 19-inch rack compatible. Authorized dealer Al-Qatta.',
    seoKeywordsAr: ['Pylontech US3000C', 'بطارية ليثيوم', 'بطارية 48 فولت'],
    seoKeywordsEn: ['Pylontech US3000C', 'lithium battery', '48V battery'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-us-series.pdf',
    
    isAvailable: true,
    isFeatured: false,
  },

  // Pylontech US2000C
  {
    id: 'pylontech-us2000c',
    slug: 'us2000c',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'US2000C',
    nameAr: 'بطارية ليثيوم Pylontech US2000C (2.4kWh)',
    nameEn: 'Pylontech US2000C Lithium Battery (2.4kWh)',
    
    shortDescAr: 'بطارية تخزين اقتصادية - 48 فولت بسعة 2.4 كيلوواط ساعة',
    shortDescEn: 'Economical storage battery - 48V with 2.4kWh capacity',
    
    fullDescAr: `بطارية Pylontech US2000C هي الخيار الاقتصادي لتخزين الطاقة. بسعة 2.4 كيلوواط ساعة، مثالية للأنظمة الصغيرة والمبتدئين.

**المميزات:**
- سعة 2.4 كيلوواط ساعة
- أخف بطارية في سلسلة US
- سعر اقتصادي
- قابلة للتوسيع

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Pylontech US2000C is the economical choice for energy storage. With 2.4kWh capacity, it's ideal for small systems and beginners.

**Features:**
- 2.4kWh capacity
- Lightest battery in US series
- Economical price
- Expandable

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'سعة 2.4 كيلوواط ساعة - للأنظمة الصغيرة', en: '2.4kWh capacity - for small systems' },
      { ar: 'أخف وزناً (22.5 كجم) - سهلة التركيب', en: 'Lightest (22.5kg) - easy to install' },
      { ar: 'سعر اقتصادي - بداية ممتازة', en: 'Economical price - excellent start' },
      { ar: 'قابلة للتوسيع حتى 16 بطارية', en: 'Expandable up to 16 batteries' },
    ],

    specifications: [
      { keyAr: 'السعة الكلية', keyEn: 'Total Capacity', value: '2.4', unit: 'kWh' },
      { keyAr: 'السعة القابلة للاستخدام', keyEn: 'Usable Capacity', value: '2.28', unit: 'kWh' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '48', unit: 'V' },
      { keyAr: 'التيار الاسمي', keyEn: 'Nominal Current', value: '50', unit: 'Ah' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '8000+', unit: 'cycles' },
      { keyAr: 'عمق التفريغ', keyEn: 'Depth of Discharge', value: '95', unit: '%' },
      { keyAr: 'تيار الشحن/التفريغ', keyEn: 'Charge/Discharge Current', value: '25', unit: 'A' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '442×410×89', unit: 'mm' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '22.5', unit: 'kg' },
      { keyAr: 'العمر التصميمي', keyEn: 'Design Life', value: '15+', unit: 'سنة / Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 3,
        dustResistance: 4,
      },
      explanationAr: 'مثالية للبدء في الطاقة الشمسية. خفيفة وسهلة التركيب.',
      explanationEn: 'Ideal for starting with solar energy. Light and easy to install.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'تعمل بكفاءة في درجات حرارة تصل إلى 55 درجة',
      climateNotesEn: 'Works efficiently at temperatures up to 55°C',
    },

    useCases: [
      {
        titleAr: 'الإضاءة الأساسية',
        titleEn: 'Basic Lighting',
        descAr: 'تشغيل الإضاءة والمراوح لساعات',
        descEn: 'Run lighting and fans for hours',
        icon: 'Lamp',
      },
      {
        titleAr: 'الأنظمة المبتدئة',
        titleEn: 'Starter Systems',
        descAr: 'بداية ممتازة في عالم الطاقة الشمسية',
        descEn: 'Excellent start in solar energy world',
        icon: 'Zap',
      },
    ],

    recommendedForAr: [
      'المبتدئين في الطاقة الشمسية',
      'الميزانيات المحدودة',
      'الأحمال الخفيفة',
    ],
    recommendedForEn: [
      'Solar energy beginners',
      'Limited budgets',
      'Light loads',
    ],
    notRecommendedForAr: [
      'المنازل المتوسطة والكبيرة',
      'الثلاجات والمكيفات',
    ],
    notRecommendedForEn: [
      'Medium and large homes',
      'Refrigerators and ACs',
    ],

    faqs: [
      {
        questionAr: 'كم ساعة تشغل الإضاءة؟',
        questionEn: 'How many hours can it run lighting?',
        answerAr: 'تشغل 10 لمبات LED (10 واط لكل واحدة) لمدة 20+ ساعة.',
        answerEn: 'Runs 10 LED bulbs (10W each) for 20+ hours.',
      },
    ],

    comparisons: [
      {
        productSlug: 'us3000c',
        pros: { ar: ['أخف', 'أرخص'], en: ['Lighter', 'Cheaper'] },
        cons: { ar: ['سعة أقل'], en: ['Lower capacity'] },
      },
    ],

    relatedProductSlugs: ['us3000c', 'us5000'],
    relatedServiceKeys: ['installation'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'بطارية Pylontech US2000C (2.4kWh) - بطارية ليثيوم اقتصادية في اليمن',
    seoTitleEn: 'Pylontech US2000C (2.4kWh) - Economical Lithium Battery in Yemen',
    seoDescriptionAr: 'بطارية Pylontech US2000C بسعة 2.4 كيلوواط ساعة. سعر اقتصادي، خفيفة الوزن، 8000+ دورة.',
    seoDescriptionEn: 'Pylontech US2000C with 2.4kWh capacity. Economical price, lightweight, 8000+ cycles.',
    seoKeywordsAr: ['Pylontech US2000C', 'بطارية ليثيوم اقتصادية'],
    seoKeywordsEn: ['Pylontech US2000C', 'economical lithium battery'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-us-series.pdf',
    
    isAvailable: true,
    isFeatured: false,
  },

  // Pylontech RV12100
  {
    id: 'pylontech-rv12100',
    slug: 'rv12100',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'RV12100',
    nameAr: 'بطارية Pylontech RV12100 (12V 100Ah)',
    nameEn: 'Pylontech RV12100 Battery (12V 100Ah)',
    
    shortDescAr: 'بطارية ليثيوم 12 فولت للكرفانات والسيارات - بديل مثالي لبطاريات الرصاص',
    shortDescEn: '12V lithium battery for RVs and vehicles - ideal replacement for lead batteries',
    
    fullDescAr: `بطارية Pylontech RV12100 مصممة خصيصاً للكرفانات والمركبات الترفيهية والقوارب. تقنية LiFePO4 توفر أماناً عالياً وعمراً افتراضياً طويلاً.

**المميزات:**
- سعة 100 أمبير ساعة
- جهد 12.8 فولت
- خفيفة الوزن (≤15 كجم)
- 4000 دورة شحن
- تدعم التوصيل المتوازي

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Pylontech RV12100 is specifically designed for RVs, recreational vehicles, and boats. LiFePO4 technology provides high safety and long lifespan.

**Features:**
- 100Ah capacity
- 12.8V voltage
- Lightweight (≤15kg)
- 4000 charge cycles
- Parallel connection support

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'سعة 100 أمبير ساعة - طاقة كافية للرحلات', en: '100Ah capacity - enough power for trips' },
      { ar: 'خفيفة الوزن (≤15 كجم) - أخف 60% من الرصاص', en: 'Lightweight (≤15kg) - 60% lighter than lead' },
      { ar: '4000 دورة شحن - عمر طويل', en: '4000 charge cycles - long lifespan' },
      { ar: 'شاشة LED لحالة الشحن', en: 'LED display for charge status' },
    ],

    specifications: [
      { keyAr: 'السعة الاسمية', keyEn: 'Nominal Capacity', value: '100', unit: 'Ah' },
      { keyAr: 'الجهد الاسمي', keyEn: 'Nominal Voltage', value: '12.8', unit: 'V' },
      { keyAr: 'مدى الجهد', keyEn: 'Voltage Range', value: '10~14.8', unit: 'V' },
      { keyAr: 'تيار الشحن المستمر', keyEn: 'Continuous Charge Current', value: '50', unit: 'A' },
      { keyAr: 'تيار التفريغ المستمر', keyEn: 'Continuous Discharge Current', value: '100', unit: 'A' },
      { keyAr: 'درجة حرارة التشغيل', keyEn: 'Working Temperature', value: '-20~50', unit: '°C' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '300×173×220', unit: 'mm' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '≤15', unit: 'kg' },
      { keyAr: 'دورات الشحن', keyEn: 'Cycle Life', value: '4000', unit: 'cycles' },
      { keyAr: 'الاتصال', keyEn: 'Communication', value: 'اختياري / Optional' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 4,
      },
      explanationAr: 'مثالية للكرفانات والسيارات في اليمن. تعمل في درجات حرارة من -20 إلى 50 درجة.',
      explanationEn: 'Ideal for RVs and vehicles in Yemen. Works at temperatures from -20 to 50°C.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'مقاومة للحرارة والبرودة الشديدة',
      climateNotesEn: 'Resistant to extreme heat and cold',
    },

    useCases: [
      {
        titleAr: 'الكرفانات',
        titleEn: 'RVs/Caravans',
        descAr: 'طاقة للرحلات الطويلة',
        descEn: 'Power for long trips',
        icon: 'Car',
      },
      {
        titleAr: 'القوارب',
        titleEn: 'Boats',
        descAr: 'بطارية بحرية موثوقة',
        descEn: 'Reliable marine battery',
        icon: 'Anchor',
      },
      {
        titleAr: 'السيارات',
        titleEn: 'Vehicles',
        descAr: 'بديل لبطارية السيارة المساعدة',
        descEn: 'Replacement for auxiliary car battery',
        icon: 'Car',
      },
    ],

    recommendedForAr: [
      'الكرفانات والمركبات الترفيهية',
      'القوارب واليخوت',
      'أنظمة 12 فولت',
    ],
    recommendedForEn: [
      'RVs and recreational vehicles',
      'Boats and yachts',
      '12V systems',
    ],
    notRecommendedForAr: [
      'الأنظمة المنزلية الكبيرة',
      'الاستخدام الثابت (استخدم US Series)',
    ],
    notRecommendedForEn: [
      'Large home systems',
      'Stationary use (use US Series)',
    ],

    faqs: [
      {
        questionAr: 'هل تصلح كبطارية سيارة رئيسية؟',
        questionEn: 'Is it suitable as main car battery?',
        answerAr: 'مصممة للاستخدام المساعد. لبطارية البدء الرئيسية يُنصح ببطارية ليثيوم مخصصة.',
        answerEn: 'Designed for auxiliary use. For main starter battery, dedicated lithium battery is recommended.',
      },
    ],

    comparisons: [],

    relatedProductSlugs: ['12v-100ah-lithium', 'amber-rock'],
    relatedServiceKeys: ['installation'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'بطارية Pylontech RV12100 (12V 100Ah) - بطارية كرفانات في اليمن',
    seoTitleEn: 'Pylontech RV12100 (12V 100Ah) - RV Battery in Yemen',
    seoDescriptionAr: 'بطارية Pylontech RV12100 للكرفانات والقوارب. 100 أمبير، خفيفة الوزن، 4000 دورة شحن.',
    seoDescriptionEn: 'Pylontech RV12100 for RVs and boats. 100Ah, lightweight, 4000 charge cycles.',
    seoKeywordsAr: ['بطارية كرفان', 'Pylontech RV12100', 'بطارية 12 فولت'],
    seoKeywordsEn: ['RV battery', 'Pylontech RV12100', '12V battery'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-rv12100.pdf',
    
    isAvailable: true,
    isFeatured: false,
  },

  // Pylontech UP2500
  {
    id: 'pylontech-up2500',
    slug: 'up2500',
    category: 'pylontech',
    brand: 'Pylontech',
    model: 'UP2500',
    nameAr: 'بطارية Pylontech UP2500 (2.5kWh)',
    nameEn: 'Pylontech UP2500 Battery (2.5kWh)',
    
    shortDescAr: 'بطارية ليثيوم عالية الجهد للأنظمة التجارية والصناعية',
    shortDescEn: 'High-voltage lithium battery for commercial and industrial systems',
    
    fullDescAr: `بطارية Pylontech UP2500 مصممة للتطبيقات التجارية والصناعية. جزء من سلسلة UP عالية الجهد.

**المميزات:**
- تصميم معياري
- جهد عالي للأنظمة الكبيرة
- BMS متقدم
- ملائمة للتطبيقات التجارية

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Pylontech UP2500 is designed for commercial and industrial applications. Part of the high-voltage UP series.

**Features:**
- Modular design
- High voltage for large systems
- Advanced BMS
- Suitable for commercial applications

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'سعة 2.5 كيلوواط ساعة - وحدة معيارية', en: '2.5kWh capacity - modular unit' },
      { ar: 'تصميم معياري - قابل للتوسيع', en: 'Modular design - expandable' },
      { ar: 'للتطبيقات التجارية', en: 'For commercial applications' },
      { ar: 'BMS متقدم', en: 'Advanced BMS' },
    ],

    specifications: [
      { keyAr: 'السعة الكلية', keyEn: 'Total Capacity', value: '2.5', unit: 'kWh' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'LiFePO4' },
      { keyAr: 'التصميم', keyEn: 'Design', value: 'معياري / Modular' },
      { keyAr: 'التطبيق', keyEn: 'Application', value: 'تجاري / Commercial' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'مثالية للمشاريع التجارية الكبيرة في اليمن.',
      explanationEn: 'Ideal for large commercial projects in Yemen.',
      bestRegionsAr: ['صنعاء', 'عدن'],
      bestRegionsEn: ['Sanaa', 'Aden'],
      climateNotesAr: 'مصممة للتطبيقات الصناعية',
      climateNotesEn: 'Designed for industrial applications',
    },

    useCases: [
      {
        titleAr: 'المشاريع التجارية',
        titleEn: 'Commercial Projects',
        descAr: 'تخزين طاقة للمباني التجارية',
        descEn: 'Energy storage for commercial buildings',
        icon: 'Building2',
      },
    ],

    recommendedForAr: [
      'المشاريع التجارية',
      'الأنظمة الصناعية',
    ],
    recommendedForEn: [
      'Commercial projects',
      'Industrial systems',
    ],
    notRecommendedForAr: [
      'المنازل السكنية',
    ],
    notRecommendedForEn: [
      'Residential homes',
    ],

    faqs: [],
    comparisons: [],

    relatedProductSlugs: ['us5000'],
    relatedServiceKeys: ['installation', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'بطارية Pylontech UP2500 - بطارية تجارية في اليمن',
    seoTitleEn: 'Pylontech UP2500 - Commercial Battery in Yemen',
    seoDescriptionAr: 'بطارية Pylontech UP2500 للتطبيقات التجارية والصناعية. تصميم معياري، جهد عالي.',
    seoDescriptionEn: 'Pylontech UP2500 for commercial and industrial applications. Modular design, high voltage.',
    seoKeywordsAr: ['Pylontech UP2500', 'بطارية تجارية'],
    seoKeywordsEn: ['Pylontech UP2500', 'commercial battery'],

    image: '/placeholder.svg',
    gallery: [],
    datasheetUrl: '/datasheets/pylontech-up2500.pdf',
    
    isAvailable: true,
    isFeatured: false,
  },
];
