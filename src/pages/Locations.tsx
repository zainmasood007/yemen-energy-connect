import { Link, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Users, Building2, Wrench, Phone, ArrowLeft, ArrowRight, Sun, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO, { createBreadcrumbSchema, organizationSchema } from '@/components/SEO';

// All cities data
const cities = [
  {
    slug: 'sanaa',
    nameAr: 'صنعاء',
    nameEn: "Sana'a",
    descAr: 'العاصمة ومركز الأعمال الرئيسي - فرعنا الرئيسي',
    descEn: 'The capital and main business hub - Our main branch',
    projectsCount: 150,
    isMainBranch: true,
    solarRadiation: '5.5 kWh/m²/day',
    addressAr: 'صنعاء شعوب أمام المستشفى العسكري',
    addressEn: "Sana'a Sho'ub, in front of Military Hospital",
    phone: '+967 777 800 063',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
  },
  {
    slug: 'aden',
    nameAr: 'عدن',
    nameEn: 'Aden',
    descAr: 'العاصمة الاقتصادية والميناء الرئيسي',
    descEn: 'The economic capital and main port',
    projectsCount: 120,
    isMainBranch: false,
    solarRadiation: '6.2 kWh/m²/day',
    addressAr: 'كريتر، شارع الملكة أروى',
    addressEn: 'Crater, Queen Arwa Street',
    phone: '+967 777 777 778',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
  },
  {
    slug: 'taiz',
    nameAr: 'تعز',
    nameEn: 'Taiz',
    descAr: 'العاصمة الثقافية ومركز صناعي مهم',
    descEn: 'The cultural capital and important industrial hub',
    projectsCount: 100,
    isMainBranch: false,
    solarRadiation: '5.8 kWh/m²/day',
    addressAr: 'شارع جمال عبد الناصر',
    addressEn: 'Gamal Abdel Nasser Street',
    phone: '+967 777 777 779',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
  },
  {
    slug: 'hudaydah',
    nameAr: 'الحديدة',
    nameEn: 'Hudaydah',
    descAr: 'الميناء الرئيسي على البحر الأحمر',
    descEn: 'The main port on the Red Sea',
    projectsCount: 80,
    isMainBranch: false,
    solarRadiation: '6.5 kWh/m²/day',
    addressAr: 'شارع صنعاء الرئيسي',
    addressEn: "Sana'a Main Street",
    phone: '+967 777 777 780',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
  },
  {
    slug: 'marib',
    nameAr: 'مأرب',
    nameEn: 'Marib',
    descAr: 'مركز الطاقة والثروات الطبيعية',
    descEn: 'Energy and natural resources center',
    projectsCount: 60,
    isMainBranch: false,
    solarRadiation: '6.0 kWh/m²/day',
    addressAr: 'شارع السبعين',
    addressEn: 'Al-Sabeen Street',
    phone: '+967 777 777 781',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
  },
  {
    slug: 'ibb',
    nameAr: 'إب',
    nameEn: 'Ibb',
    descAr: 'اللواء الأخضر ومركز زراعي رئيسي',
    descEn: 'The Green Province and major agricultural center',
    projectsCount: 70,
    isMainBranch: false,
    solarRadiation: '5.6 kWh/m²/day',
    addressAr: 'شارع التحرير',
    addressEn: 'Al-Tahrir Street',
    phone: '+967 777 777 782',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
  },
  {
    slug: 'dhamar',
    nameAr: 'ذمار',
    nameEn: 'Dhamar',
    descAr: 'مركز تعليمي وزراعي مهم',
    descEn: 'Important educational and agricultural center',
    projectsCount: 45,
    isMainBranch: false,
    solarRadiation: '5.7 kWh/m²/day',
    addressAr: 'شارع الجامعة',
    addressEn: 'University Street',
    phone: '+967 777 777 783',
    workingHoursAr: 'السبت - الخميس: 8ص - 6م',
    workingHoursEn: 'Sat - Thu: 8AM - 6PM',
  },
];

// Stats
const stats = [
  { valueAr: '+625', valueEn: '625+', labelAr: 'مشروع منجز', labelEn: 'Projects Completed' },
  { valueAr: '7', valueEn: '7', labelAr: 'فروع رئيسية', labelEn: 'Main Branches' },
  { valueAr: '18', valueEn: '18', labelAr: 'محافظة مغطاة', labelEn: 'Governorates Covered' },
  { valueAr: '+50', valueEn: '50+', labelAr: 'فني ومهندس', labelEn: 'Technicians & Engineers' },
];

export default function Locations() {
  const { isRTL } = useLanguage();
  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const homePath = isEnPath ? '/en' : '/';
  const locationsPath = isEnPath ? '/en/locations' : '/locations';

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: pageLang === 'ar' ? 'الرئيسية' : 'Home', url: homePath },
    { name: pageLang === 'ar' ? 'مواقعنا' : 'Locations', url: locationsPath },
  ]);

  return (
    <Layout>
      <SEO
        title="Our Locations in Yemen | Al-Qatta Solar Energy"
        titleAr="مواقعنا في اليمن | القطاع للطاقة الشمسية"
        description="Find Al-Qatta Solar Energy branches across Yemen. We serve Sana'a, Aden, Taiz, Hudaydah, Marib, Ibb, and Dhamar with professional solar installation services."
        descriptionAr="اعثر على فروع القطاع للطاقة الشمسية في جميع أنحاء اليمن. نخدم صنعاء، عدن، تعز، الحديدة، مأرب، إب، وذمار بخدمات تركيب طاقة شمسية احترافية."
        keywords="solar energy yemen, al-qatta branches, solar installation yemen, pylontech yemen locations"
        keywordsAr="طاقة شمسية اليمن، فروع القطاع، تركيب طاقة شمسية اليمن، بايلونتيك اليمن مواقع"
        canonical={isEnPath ? '/en/locations' : '/locations'}
        lang={pageLang}
        jsonLd={[breadcrumbSchema, organizationSchema]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              {isRTL ? 'تغطية شاملة' : 'Full Coverage'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {isRTL ? 'مواقعنا في اليمن' : 'Our Locations in Yemen'}
            </h1>
            <p className="text-lg opacity-90 mb-8">
              {isRTL 
                ? 'فروع رسمية في المحافظات الرئيسية لتقديم أفضل خدمات الطاقة الشمسية'
                : 'Official branches in major governorates providing the best solar energy services'}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {isRTL ? stat.valueAr : stat.valueEn}
                </div>
                <div className="text-sm text-muted-foreground">
                  {isRTL ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yemen Map Placeholder */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-6">
                <MapPin className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {isRTL ? 'خريطة تغطية خدماتنا' : 'Our Service Coverage Map'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                {isRTL 
                  ? 'نغطي 18 محافظة يمنية مع 7 فروع رئيسية وفرق فنية متنقلة'
                  : 'We cover 18 Yemeni governorates with 7 main branches and mobile technical teams'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/locations/${city.slug}`}
                    className="px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    {isRTL ? city.nameAr : city.nameEn}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isRTL ? 'فروعنا الرئيسية' : 'Our Main Branches'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'اختر أقرب فرع إليك للحصول على خدمات الطاقة الشمسية واستشارة مجانية'
                : 'Choose the nearest branch to get solar energy services and free consultation'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div 
                key={city.slug}
                className={`bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all group ${
                  city.isMainBranch ? 'border-primary/50 ring-2 ring-primary/20' : 'border-border'
                }`}
              >
                {/* City Header */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 relative">
                  {city.isMainBranch && (
                    <span className="absolute top-4 end-4 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {isRTL ? 'الفرع الرئيسي' : 'Main Branch'}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{isRTL ? city.nameAr : city.nameEn}</h3>
                      <p className="text-sm text-muted-foreground">{isRTL ? city.descAr : city.descEn}</p>
                    </div>
                  </div>
                </div>

                {/* City Details */}
                <div className="p-6 space-y-4">
                  {/* Solar Radiation */}
                  <div className="flex items-center gap-3 text-sm">
                    <Sun className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {isRTL ? 'الإشعاع الشمسي:' : 'Solar Radiation:'}
                    </span>
                    <span className="font-medium">{city.solarRadiation}</span>
                  </div>

                  {/* Projects Count */}
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {isRTL ? 'المشاريع المنجزة:' : 'Completed Projects:'}
                    </span>
                    <span className="font-medium">{city.projectsCount}+</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span>{isRTL ? city.addressAr : city.addressEn}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a href={`tel:${city.phone}`} className="hover:text-primary transition-colors" dir="ltr">
                      {city.phone}
                    </a>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-3 text-sm">
                    <Wrench className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{isRTL ? city.workingHoursAr : city.workingHoursEn}</span>
                  </div>
                </div>

                {/* City Actions */}
                <div className="px-6 pb-6">
                  <Link to={`/locations/${city.slug}`}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground" variant="outline">
                      {isRTL ? 'تفاصيل الفرع' : 'Branch Details'}
                      <Arrow className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical Teams */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {isRTL ? 'فرق فنية متنقلة' : 'Mobile Technical Teams'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {isRTL 
                    ? 'فرق فنية مدربة تصل إلى جميع المناطق خارج نطاق الفروع لتقديم خدمات التركيب والصيانة'
                    : 'Trained technical teams reach all areas outside branch coverage for installation and maintenance services'}
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    { ar: 'تركيب في الموقع', en: 'On-site installation' },
                    { ar: 'صيانة دورية', en: 'Regular maintenance' },
                    { ar: 'دعم فني طوارئ', en: 'Emergency technical support' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      {isRTL ? item.ar : item.en}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fast Response */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary/10 text-secondary mb-4">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {isRTL ? 'استجابة سريعة' : 'Fast Response'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {isRTL 
                    ? 'نضمن الاستجابة لطلبات الصيانة والدعم الفني في أسرع وقت ممكن'
                    : 'We guarantee responding to maintenance and technical support requests as quickly as possible'}
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    { ar: 'استجابة خلال 24 ساعة', en: 'Response within 24 hours' },
                    { ar: 'دعم عبر الهاتف 24/7', en: '24/7 phone support' },
                    { ar: 'قطع غيار أصلية متوفرة', en: 'Original spare parts available' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      {isRTL ? item.ar : item.en}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? 'لم تجد فرعاً قريباً منك؟' : "Didn't Find a Branch Near You?"}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'لا تقلق! فرقنا الفنية المتنقلة تصل إلى جميع المحافظات اليمنية. تواصل معنا الآن'
                : "Don't worry! Our mobile technical teams reach all Yemeni governorates. Contact us now"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="tel:+967777800063">
                  <Phone className="h-4 w-4" />
                  {isRTL ? 'اتصل بنا' : 'Call Us'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
