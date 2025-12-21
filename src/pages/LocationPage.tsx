import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Sun, Battery, Wrench, Phone, CheckCircle, ArrowLeft, ArrowRight, Building2, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO, { createBreadcrumbSchema, localBusinessSchema } from '@/components/SEO';

// City data with enhanced information
const cities = {
  sanaa: {
    nameAr: 'صنعاء',
    nameEn: "Sana'a",
    descAr: 'العاصمة ومركز الأعمال الرئيسي',
    descEn: 'The capital and main business hub',
    longDescAr: 'صنعاء هي العاصمة اليمنية ومركز الأعمال الرئيسي في البلاد. تتميز بموقعها الجغرافي المرتفع وسمائها الصافية التي تجعلها مثالية للطاقة الشمسية.',
    longDescEn: "Sana'a is the Yemeni capital and the main business center in the country. It features a high geographical location and clear skies that make it ideal for solar energy.",
    solarPotentialAr: 'صنعاء تتميز بارتفاعها عن سطح البحر وسماء صافية معظم أيام السنة، مما يجعلها مثالية للطاقة الشمسية مع متوسط إشعاع شمسي يصل إلى 5.5 kWh/m²/day.',
    solarPotentialEn: "Sana'a is characterized by its high altitude and clear skies most of the year, making it ideal for solar energy with an average solar radiation of 5.5 kWh/m²/day.",
    challengesAr: ['انقطاع الكهرباء المتكرر', 'ارتفاع أسعار الوقود', 'الاعتماد على المولدات الباهظة'],
    challengesEn: ['Frequent power outages', 'High fuel prices', 'Reliance on expensive generators'],
    solutionsAr: ['أنظمة طاقة شمسية منزلية 3-10 كيلووات', 'أنظمة تجارية حتى 100 كيلووات', 'بطاريات Pylontech لتخزين الطاقة'],
    solutionsEn: ['Home solar systems 3-10 kW', 'Commercial systems up to 100 kW', 'Pylontech batteries for energy storage'],
    coordinates: { lat: 15.3694, lng: 44.191 },
    solarRadiation: '5.5 kWh/m²/day',
    projectsCount: 150,
    isMainBranch: true,
    addressAr: 'شارع الزبيري، أمام وزارة الاتصالات',
    addressEn: 'Al-Zubairi Street, in front of Ministry of Communications',
    phone: '+967 777 777 777',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
    teamSize: 15,
  },
  aden: {
    nameAr: 'عدن',
    nameEn: 'Aden',
    descAr: 'العاصمة الاقتصادية والميناء الرئيسي',
    descEn: 'The economic capital and main port',
    longDescAr: 'عدن هي العاصمة الاقتصادية لليمن وتضم أكبر ميناء على البحر العربي. مناخها الحار يجعلها مثالية للطاقة الشمسية مع إشعاع شمسي عالي جداً.',
    longDescEn: 'Aden is the economic capital of Yemen and houses the largest port on the Arabian Sea. Its hot climate makes it ideal for solar energy with very high solar radiation.',
    solarPotentialAr: 'عدن تتميز بمناخ حار وإشعاع شمسي عالي على مدار السنة، مع متوسط 6.2 kWh/m²/day، مما يجعلها من أفضل المواقع للطاقة الشمسية.',
    solarPotentialEn: 'Aden features a hot climate and high solar radiation year-round, with an average of 6.2 kWh/m²/day, making it one of the best locations for solar energy.',
    challengesAr: ['درجات حرارة مرتفعة تؤثر على كفاءة الألواح', 'الرطوبة العالية', 'الحاجة للتبريد المستمر'],
    challengesEn: ['High temperatures affecting panel efficiency', 'High humidity', 'Need for continuous cooling'],
    solutionsAr: ['ألواح شمسية مقاومة للحرارة', 'أنظمة تهوية متقدمة', 'بطاريات Pylontech المصممة للمناخ الحار'],
    solutionsEn: ['Heat-resistant solar panels', 'Advanced ventilation systems', 'Pylontech batteries designed for hot climates'],
    coordinates: { lat: 12.7855, lng: 45.0187 },
    solarRadiation: '6.2 kWh/m²/day',
    projectsCount: 120,
    isMainBranch: false,
    addressAr: 'كريتر، شارع الملكة أروى',
    addressEn: 'Crater, Queen Arwa Street',
    phone: '+967 777 777 778',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
    teamSize: 12,
  },
  taiz: {
    nameAr: 'تعز',
    nameEn: 'Taiz',
    descAr: 'العاصمة الثقافية ومركز صناعي مهم',
    descEn: 'The cultural capital and important industrial hub',
    longDescAr: 'تعز هي العاصمة الثقافية لليمن وتعد من أكبر المدن اليمنية. تتميز بمناخها المعتدل وموقعها الاستراتيجي.',
    longDescEn: 'Taiz is the cultural capital of Yemen and one of the largest Yemeni cities. It features a moderate climate and strategic location.',
    solarPotentialAr: 'تعز تجمع بين المناخ المعتدل والإشعاع الشمسي الجيد مع متوسط 5.8 kWh/m²/day، مثالية للأنظمة السكنية والتجارية.',
    solarPotentialEn: 'Taiz combines a moderate climate with good solar radiation averaging 5.8 kWh/m²/day, ideal for residential and commercial systems.',
    challengesAr: ['انقطاع الكهرباء لفترات طويلة', 'تكلفة الوقود المرتفعة', 'الحاجة لحلول طاقة موثوقة'],
    challengesEn: ['Long power outages', 'High fuel costs', 'Need for reliable energy solutions'],
    solutionsAr: ['أنظمة هجينة تجمع بين الشبكة والطاقة الشمسية', 'تخزين طاقة كافي لـ 24+ ساعة', 'صيانة دورية مضمونة'],
    solutionsEn: ['Hybrid systems combining grid and solar', 'Energy storage for 24+ hours', 'Guaranteed regular maintenance'],
    coordinates: { lat: 13.5775, lng: 44.0178 },
    solarRadiation: '5.8 kWh/m²/day',
    projectsCount: 100,
    isMainBranch: false,
    addressAr: 'شارع جمال عبد الناصر',
    addressEn: 'Gamal Abdel Nasser Street',
    phone: '+967 777 777 779',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
    teamSize: 10,
  },
  hudaydah: {
    nameAr: 'الحديدة',
    nameEn: 'Hudaydah',
    descAr: 'الميناء الرئيسي على البحر الأحمر',
    descEn: 'The main port on the Red Sea',
    longDescAr: 'الحديدة هي الميناء الرئيسي على البحر الأحمر وتعد بوابة اليمن التجارية الغربية. تتميز بأعلى معدلات الإشعاع الشمسي.',
    longDescEn: 'Hudaydah is the main port on the Red Sea and is Yemen\'s western commercial gateway. It features the highest solar radiation rates.',
    solarPotentialAr: 'الحديدة تتميز بأعلى معدلات الإشعاع الشمسي في اليمن مع متوسط 6.5 kWh/m²/day، مما يجعلها مثالية للمشاريع الكبيرة.',
    solarPotentialEn: 'Hudaydah has the highest solar radiation rates in Yemen with an average of 6.5 kWh/m²/day, making it ideal for large projects.',
    challengesAr: ['الرطوبة العالية والملوحة', 'درجات الحرارة المرتفعة', 'الحاجة لمعدات مقاومة للتآكل'],
    challengesEn: ['High humidity and salinity', 'High temperatures', 'Need for corrosion-resistant equipment'],
    solutionsAr: ['ألواح ومعدات مقاومة للتآكل', 'أنظمة تبريد متقدمة للبطاريات', 'صيانة دورية ضد الملوحة'],
    solutionsEn: ['Corrosion-resistant panels and equipment', 'Advanced battery cooling systems', 'Regular maintenance against salinity'],
    coordinates: { lat: 14.7979, lng: 42.9544 },
    solarRadiation: '6.5 kWh/m²/day',
    projectsCount: 80,
    isMainBranch: false,
    addressAr: 'شارع صنعاء الرئيسي',
    addressEn: "Sana'a Main Street",
    phone: '+967 777 777 780',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
    teamSize: 8,
  },
  marib: {
    nameAr: 'مأرب',
    nameEn: 'Marib',
    descAr: 'مركز الطاقة والثروات الطبيعية',
    descEn: 'Energy and natural resources center',
    longDescAr: 'مأرب هي مركز الطاقة في اليمن وتضم أكبر حقول النفط والغاز. مناخها الصحراوي يوفر إشعاعاً شمسياً ممتازاً.',
    longDescEn: 'Marib is Yemen\'s energy center and hosts the largest oil and gas fields. Its desert climate provides excellent solar radiation.',
    solarPotentialAr: 'مأرب تتميز بمناخ صحراوي وإشعاع شمسي عالي جداً مع متوسط 6.0 kWh/m²/day، مثالية للمشاريع الصناعية الكبيرة.',
    solarPotentialEn: 'Marib features a desert climate with very high solar radiation averaging 6.0 kWh/m²/day, ideal for large industrial projects.',
    challengesAr: ['المناخ الصحراوي القاسي', 'العواصف الرملية', 'درجات الحرارة المرتفعة'],
    challengesEn: ['Harsh desert climate', 'Sandstorms', 'High temperatures'],
    solutionsAr: ['ألواح مقاومة للظروف القاسية', 'أنظمة تنظيف ذاتي', 'حماية متقدمة للمعدات'],
    solutionsEn: ['Panels resistant to harsh conditions', 'Self-cleaning systems', 'Advanced equipment protection'],
    coordinates: { lat: 15.4632, lng: 45.3268 },
    solarRadiation: '6.0 kWh/m²/day',
    projectsCount: 60,
    isMainBranch: false,
    addressAr: 'شارع السبعين',
    addressEn: 'Al-Sabeen Street',
    phone: '+967 777 777 781',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
    teamSize: 6,
  },
  ibb: {
    nameAr: 'إب',
    nameEn: 'Ibb',
    descAr: 'اللواء الأخضر ومركز زراعي رئيسي',
    descEn: 'The Green Province and major agricultural center',
    longDescAr: 'إب هي اللواء الأخضر وتعد من أكثر المناطق خضرة في اليمن. تتميز بأمطارها الغزيرة ومناخها المعتدل.',
    longDescEn: 'Ibb is the Green Province and one of the greenest regions in Yemen. It features heavy rainfall and a moderate climate.',
    solarPotentialAr: 'إب تتميز بمناخ معتدل مع إشعاع شمسي جيد يصل إلى 5.6 kWh/m²/day، مثالية لتشغيل مضخات الري ومشاريع المزارع.',
    solarPotentialEn: 'Ibb features a moderate climate with good solar radiation of 5.6 kWh/m²/day, ideal for irrigation pumps and farm projects.',
    challengesAr: ['الأمطار الموسمية الغزيرة', 'الغيوم المتكررة في بعض الفترات', 'التضاريس الجبلية'],
    challengesEn: ['Heavy seasonal rainfall', 'Frequent clouds in some periods', 'Mountainous terrain'],
    solutionsAr: ['أنظمة مقاومة للماء', 'تصميم يراعي التضاريس', 'بطاريات إضافية للأيام الغائمة'],
    solutionsEn: ['Waterproof systems', 'Terrain-conscious design', 'Extra batteries for cloudy days'],
    coordinates: { lat: 13.9659, lng: 44.1709 },
    solarRadiation: '5.6 kWh/m²/day',
    projectsCount: 70,
    isMainBranch: false,
    addressAr: 'شارع التحرير',
    addressEn: 'Al-Tahrir Street',
    phone: '+967 777 777 782',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
    teamSize: 7,
  },
  dhamar: {
    nameAr: 'ذمار',
    nameEn: 'Dhamar',
    descAr: 'مركز تعليمي وزراعي مهم',
    descEn: 'Important educational and agricultural center',
    longDescAr: 'ذمار هي مركز تعليمي وزراعي مهم في اليمن. تقع في منطقة مرتفعة وتتميز بمناخها المعتدل.',
    longDescEn: 'Dhamar is an important educational and agricultural center in Yemen. It is located in a highland area with a moderate climate.',
    solarPotentialAr: 'ذمار تتميز بارتفاعها وسمائها الصافية مع إشعاع شمسي جيد يصل إلى 5.7 kWh/m²/day، مثالية للأنظمة السكنية والتعليمية.',
    solarPotentialEn: 'Dhamar features high altitude and clear skies with good solar radiation of 5.7 kWh/m²/day, ideal for residential and educational systems.',
    challengesAr: ['البرودة في فصل الشتاء', 'انقطاع الكهرباء المتكرر', 'الحاجة للتدفئة'],
    challengesEn: ['Cold winters', 'Frequent power outages', 'Need for heating'],
    solutionsAr: ['أنظمة هجينة للتدفئة والكهرباء', 'تخزين طاقة كافي', 'بطاريات مقاومة للبرودة'],
    solutionsEn: ['Hybrid heating and electricity systems', 'Sufficient energy storage', 'Cold-resistant batteries'],
    coordinates: { lat: 14.5427, lng: 44.4038 },
    solarRadiation: '5.7 kWh/m²/day',
    projectsCount: 45,
    isMainBranch: false,
    addressAr: 'شارع الجامعة',
    addressEn: 'University Street',
    phone: '+967 777 777 783',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
    teamSize: 5,
  },
};

type CityKey = keyof typeof cities;

export default function LocationPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const city = cities[citySlug as CityKey];
  
  if (!city) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}</h1>
          <Link to="/locations" className="text-primary hover:underline">{isRTL ? 'العودة لصفحة المواقع' : 'Back to Locations'}</Link>
        </div>
      </Layout>
    );
  }

  const cityName = isRTL ? city.nameAr : city.nameEn;
  const challenges = isRTL ? city.challengesAr : city.challengesEn;
  const solutions = isRTL ? city.solutionsAr : city.solutionsEn;
  const solarPotential = isRTL ? city.solarPotentialAr : city.solarPotentialEn;
  const longDesc = isRTL ? city.longDescAr : city.longDescEn;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'مواقعنا' : 'Locations', url: '/locations' },
    { name: cityName, url: `/locations/${citySlug}` },
  ]);

  const localBusinessSchemaCity = {
    ...localBusinessSchema,
    "@id": `https://alqatta.com/locations/${citySlug}#business`,
    "name": isRTL ? `القطاع للطاقة الشمسية - ${cityName}` : `Al-Qatta Solar Energy - ${cityName}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.nameEn,
      "addressCountry": "YE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city.nameEn
    }
  };

  return (
    <Layout>
      <SEO
        title={`Solar Energy in ${city.nameEn}, Yemen | Al-Qatta Solar Energy`}
        titleAr={`الطاقة الشمسية في ${city.nameAr}، اليمن | القطاع للطاقة الشمسية`}
        description={`Professional solar energy installation and Pylontech batteries in ${city.nameEn}, Yemen. Complete solar solutions for homes and businesses with expert installation and maintenance.`}
        descriptionAr={`تركيب طاقة شمسية احترافي وبطاريات Pylontech في ${city.nameAr}، اليمن. حلول طاقة شمسية متكاملة للمنازل والشركات مع تركيب وصيانة من خبراء.`}
        keywords={`solar energy ${city.nameEn.toLowerCase()}, solar panels ${city.nameEn.toLowerCase()}, pylontech ${city.nameEn.toLowerCase()}, solar installation ${city.nameEn.toLowerCase()} yemen`}
        keywordsAr={`طاقة شمسية ${city.nameAr}، ألواح شمسية ${city.nameAr}، بايلونتيك ${city.nameAr}، تركيب طاقة شمسية ${city.nameAr} اليمن`}
        canonical={`/locations/${citySlug}`}
        jsonLd={[breadcrumbSchema, localBusinessSchemaCity]}
      />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1 text-center lg:text-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
                  <MapPin className="h-4 w-4" />
                  {city.isMainBranch ? (isRTL ? 'الفرع الرئيسي' : 'Main Branch') : (isRTL ? 'فرعنا في' : 'Our Branch in')} {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {isRTL ? `الطاقة الشمسية في ${cityName}` : `Solar Energy in ${cityName}`}
                </h1>
                <p className="text-lg opacity-90 mb-6">
                  {longDesc}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <a href={`https://wa.me/${city.phone.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                      {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
                      <Arrow className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <a href={`tel:${city.phone}`}>
                      <Phone className="h-4 w-4" />
                      {isRTL ? 'اتصل بالفرع' : 'Call Branch'}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Branch Stats Card */}
              <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 lg:w-80">
                <h3 className="font-bold text-lg mb-4 text-center">
                  {isRTL ? 'إحصائيات الفرع' : 'Branch Statistics'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">{city.projectsCount}+</div>
                    <div className="text-sm opacity-80">{isRTL ? 'مشروع منجز' : 'Projects'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">{city.teamSize}</div>
                    <div className="text-sm opacity-80">{isRTL ? 'فني ومهندس' : 'Team Members'}</div>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="text-2xl font-bold text-secondary">{city.solarRadiation}</div>
                    <div className="text-sm opacity-80">{isRTL ? 'الإشعاع الشمسي' : 'Solar Radiation'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Info */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{isRTL ? 'العنوان' : 'Address'}</div>
                  <div className="font-medium">{isRTL ? city.addressAr : city.addressEn}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{isRTL ? 'رقم الهاتف' : 'Phone'}</div>
                  <a href={`tel:${city.phone}`} className="font-medium hover:text-primary transition-colors" dir="ltr">{city.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{isRTL ? 'ساعات العمل' : 'Working Hours'}</div>
                  <div className="font-medium">{isRTL ? city.workingHoursAr : city.workingHoursEn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Potential */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-secondary/10 text-secondary flex-shrink-0">
                <Sun className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {isRTL ? `إمكانات الطاقة الشمسية في ${cityName}` : `Solar Potential in ${cityName}`}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{solarPotential}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Challenges */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-destructive">
                {isRTL ? `تحديات الطاقة في ${cityName}` : `Energy Challenges in ${cityName}`}
              </h3>
              <ul className="space-y-3">
                {challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-destructive/10 text-destructive text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-success/5 border border-success/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-success">
                {isRTL ? 'حلولنا' : 'Our Solutions'}
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isRTL ? `خدماتنا في ${cityName}` : `Our Services in ${cityName}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Sun, title: isRTL ? 'تركيب الألواح الشمسية' : 'Solar Panel Installation', desc: isRTL ? 'تركيب احترافي بأيدي خبراء محليين' : 'Professional installation by local experts' },
              { icon: Battery, title: isRTL ? 'بطاريات Pylontech' : 'Pylontech Batteries', desc: isRTL ? 'بطاريات أصلية مع ضمان 10 سنوات' : 'Original batteries with 10-year warranty' },
              { icon: Wrench, title: isRTL ? 'الصيانة والدعم' : 'Maintenance & Support', desc: isRTL ? 'صيانة دورية ودعم فني سريع' : 'Regular maintenance and fast support' },
            ].map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in This City */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              {isRTL ? `لماذا تختار القطاع في ${cityName}؟` : `Why Choose Al-Qatta in ${cityName}?`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Users, textAr: 'فريق محلي متخصص يفهم احتياجات المنطقة', textEn: 'Local specialized team that understands the area needs' },
                { icon: Star, textAr: 'سجل حافل من المشاريع الناجحة', textEn: 'Proven track record of successful projects' },
                { icon: Wrench, textAr: 'استجابة سريعة للصيانة والدعم', textEn: 'Fast response for maintenance and support' },
                { icon: CheckCircle, textAr: 'ضمان شامل على جميع الأعمال', textEn: 'Comprehensive warranty on all work' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{isRTL ? item.textAr : item.textEn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? `هل أنت في ${cityName}؟` : `Are You in ${cityName}?`}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمنطقتك'
                : 'Contact us now for a free consultation and a customized quote for your area'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href={`https://wa.me/${city.phone.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                  {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href={`tel:${city.phone}`}>
                  <Phone className="h-4 w-4" />
                  {isRTL ? 'اتصل بنا' : 'Call Us'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 bg-surface">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">
            {isRTL ? 'فروعنا الأخرى' : 'Our Other Branches'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(cities)
              .filter(([slug]) => slug !== citySlug)
              .map(([slug, c]) => (
                <Link
                  key={slug}
                  to={`/locations/${slug}`}
                  className="px-6 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <span className="font-medium">{isRTL ? c.nameAr : c.nameEn}</span>
                </Link>
              ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/locations" className="text-primary hover:underline inline-flex items-center gap-1">
              {isRTL ? 'عرض جميع المواقع' : 'View All Locations'}
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
