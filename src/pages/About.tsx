import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  Shield, Users, Award, MapPin, Target, Eye, CheckCircle, 
  Zap, Clock, Heart, Star, Battery, ArrowRight, ArrowLeft,
  Building2, Lightbulb, Trophy
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SEO, { organizationSchema, createBreadcrumbSchema } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import { useLocation } from 'react-router-dom';

export default function About() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const homePath = isEnPath ? '/en' : '/';
  const aboutPath = isEnPath ? '/en/about' : '/about';
  
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: pageLang === 'ar' ? 'الرئيسية' : 'Home', url: homePath },
    { name: pageLang === 'ar' ? 'من نحن' : 'About Us', url: aboutPath },
  ]);

  const aboutJsonLd = [
    organizationSchema,
    breadcrumbSchema,
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": pageLang === 'ar' ? "من نحن - القطاع للطاقة الشمسية" : "About Us - Al-Qatta Solar Energy",
      "description": pageLang === 'ar'
        ? "تعرف على القطاع للطاقة الشمسية، الوكيل المعتمد الوحيد لـ Pylontech في اليمن"
        : "Learn about Al-Qatta Solar Energy, the only authorized Pylontech agent in Yemen",
      "mainEntity": organizationSchema
    }
  ];

  const timeline = [
    {
      year: '2014',
      titleEn: 'The Beginning',
      titleAr: 'البداية',
      descEn: 'Founded with a vision to bring reliable solar energy solutions to Yemen',
      descAr: 'تأسست الشركة برؤية لتقديم حلول طاقة شمسية موثوقة لليمن'
    },
    {
      year: '2017',
      titleEn: 'Pylontech Partnership',
      titleAr: 'شراكة Pylontech',
      descEn: 'Became the exclusive authorized agent for Pylontech batteries in Yemen',
      descAr: 'أصبحنا الوكيل المعتمد الحصري لبطاريات Pylontech في اليمن'
    },
    {
      year: '2020',
      titleEn: 'National Expansion',
      titleAr: 'التوسع الوطني',
      descEn: 'Expanded services to cover all 18 Yemeni governorates',
      descAr: 'توسعت خدماتنا لتغطية جميع المحافظات اليمنية الـ 18'
    },
    {
      year: '2024',
      titleEn: '500+ Projects',
      titleAr: '+500 مشروع',
      descEn: 'Reached milestone of 500+ successful solar installations',
      descAr: 'وصلنا إلى إنجاز 500+ تركيب ناجح للطاقة الشمسية'
    },
  ];

  const values = [
    { 
      icon: Shield, 
      titleEn: 'Authenticity', 
      titleAr: 'الأصالة', 
      descEn: '100% original products with factory warranty and certification',
      descAr: 'منتجات أصلية 100% مع ضمان المصنع والشهادات'
    },
    { 
      icon: Heart, 
      titleEn: 'Trust', 
      titleAr: 'الثقة', 
      descEn: 'Building long-term relationships with our customers through transparency',
      descAr: 'بناء علاقات طويلة الأمد مع عملائنا من خلال الشفافية'
    },
    { 
      icon: Zap, 
      titleEn: 'Innovation', 
      titleAr: 'الابتكار', 
      descEn: 'Always bringing the latest solar technology to Yemen',
      descAr: 'نقدم دائماً أحدث تقنيات الطاقة الشمسية لليمن'
    },
    { 
      icon: Users, 
      titleEn: 'Service', 
      titleAr: 'الخدمة', 
      descEn: '24/7 support with a team that truly cares about your success',
      descAr: 'دعم على مدار الساعة مع فريق يهتم بنجاحك'
    },
  ];

  const stats = [
    { value: '500+', labelEn: 'Projects Completed', labelAr: 'مشروع منجز', icon: Trophy },
    { value: '10+', labelEn: 'Years Experience', labelAr: 'سنوات خبرة', icon: Clock },
    { value: '18', labelEn: 'Governorates Covered', labelAr: 'محافظة مغطاة', icon: MapPin },
    { value: '98%', labelEn: 'Customer Satisfaction', labelAr: 'رضا العملاء', icon: Star },
  ];

  const team = [
    {
      roleEn: 'Technical Team',
      roleAr: 'الفريق الفني',
      descEn: 'Certified engineers specializing in solar system design and installation',
      descAr: 'مهندسون معتمدون متخصصون في تصميم وتركيب الأنظمة الشمسية',
      icon: Lightbulb
    },
    {
      roleEn: 'Support Team',
      roleAr: 'فريق الدعم',
      descEn: 'Dedicated support available 24/7 via WhatsApp and phone',
      descAr: 'دعم مخصص متاح على مدار الساعة عبر واتساب والهاتف',
      icon: Users
    },
    {
      roleEn: 'Field Team',
      roleAr: 'الفريق الميداني',
      descEn: 'Installation and maintenance crews across all governorates',
      descAr: 'فرق التركيب والصيانة في جميع المحافظات',
      icon: Building2
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Us - Al-Qatta Solar Energy | Authorized Pylontech Agent"
        titleAr="من نحن - القطاع للطاقة الشمسية | الوكيل المعتمد لـ Pylontech"
        description="Learn about Al-Qatta Solar Energy, Yemen's only authorized Pylontech agent. Over 10 years of experience in solar energy solutions and energy storage systems."
        descriptionAr="تعرف على القطاع للطاقة الشمسية، الوكيل المعتمد الوحيد لـ Pylontech في اليمن. أكثر من 10 سنوات خبرة في حلول الطاقة الشمسية."
        keywords="about al-qatta, solar company yemen, pylontech authorized agent, solar energy experts yemen"
        keywordsAr="عن القطاع، شركة طاقة شمسية اليمن، وكيل بايلونتيك معتمد، خبراء الطاقة الشمسية اليمن"
        canonical={isEnPath ? '/en/about' : '/about'}
        lang={pageLang}
        jsonLd={aboutJsonLd}
      />

      {/* Hero Section */}
      <PageHero
        badge={isRTL ? 'الوكيل المعتمد الوحيد لـ Pylontech' : 'Only Authorized Pylontech Agent'}
        badgeIcon={Shield}
        title={isRTL ? 'قصة القطاع للطاقة الشمسية' : 'The Story of Al-Qatta Solar'}
        subtitle={isRTL 
          ? 'منذ عام 2014، نعمل على توفير حلول طاقة شمسية موثوقة ومستدامة لكل منزل وشركة في اليمن. نفخر بكوننا الوكيل المعتمد الوحيد لـ Pylontech في اليمن.'
          : 'Since 2014, we have been providing reliable and sustainable solar energy solutions for every home and business in Yemen. We are proud to be the only authorized Pylontech agent in Yemen.'}
      />

      {/* Stats - with glass effect */}
      <section className="py-10 bg-gradient-to-r from-secondary via-secondary/95 to-secondary relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 start-1/4 w-40 h-40 bg-secondary-foreground/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 end-1/4 w-32 h-32 bg-secondary-foreground/5 rounded-full blur-2xl animate-blob delay-300" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="group text-center p-4 rounded-xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary-foreground/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-5 w-5 text-secondary-foreground icon-bounce" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-secondary-foreground">{stat.value}</div>
                <div className="text-sm text-secondary-foreground/75">{isRTL ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              {isRTL ? 'رحلتنا' : 'Our Journey'}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {isRTL 
                ? 'من بداية متواضعة إلى الريادة في مجال الطاقة الشمسية في اليمن'
                : 'From humble beginnings to leading solar energy in Yemen'}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute start-6 md:start-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {timeline.map((item, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "relative flex items-start gap-4 mb-8 last:mb-0",
                    "md:flex-row",
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Year marker */}
                  <div className="absolute start-6 md:start-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10 border-4 border-background">
                    {item.year.slice(2)}
                  </div>
                  
                  {/* Content */}
                  <div className={cn(
                    "ms-16 md:ms-0 md:w-[calc(50%-2rem)]",
                    idx % 2 === 0 ? "md:text-end md:pe-8" : "md:text-start md:ps-8"
                  )}>
                    <GlassCard hover glow className="border-animated">
                      <div className="text-secondary font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="font-bold text-lg mb-2">{isRTL ? item.titleAr : item.titleEn}</h3>
                      <p className="text-muted-foreground text-sm">{isRTL ? item.descAr : item.descEn}</p>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-surface relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-dots opacity-30" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <GlassCard variant="bordered" className="group">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow-primary">
                <Target className="h-7 w-7 icon-pulse" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">{isRTL ? 'مهمتنا' : 'Our Mission'}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {isRTL 
                  ? 'توفير حلول طاقة شمسية موثوقة وعالية الجودة لكل منزل وشركة في اليمن، مع ضمان أفضل خدمة ما بعد البيع ودعم فني على مدار الساعة. نسعى لجعل الطاقة النظيفة في متناول الجميع.'
                  : 'To provide reliable, high-quality solar energy solutions for every home and business in Yemen, ensuring the best after-sales service and 24/7 technical support. We strive to make clean energy accessible to everyone.'}
              </p>
            </GlassCard>
            <GlassCard variant="bordered" className="group">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-secondary text-secondary-foreground mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Eye className="h-7 w-7 icon-pulse" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">{isRTL ? 'رؤيتنا' : 'Our Vision'}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {isRTL 
                  ? 'أن نكون الشركة الرائدة في مجال الطاقة الشمسية وتخزين الطاقة في اليمن والمنطقة. نطمح لمستقبل يعتمد على الطاقة النظيفة والمستدامة للجميع.'
                  : 'To be the leading company in solar energy and energy storage in Yemen and the region. We aspire to a future powered by clean and sustainable energy for all.'}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        {/* Background animated blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 end-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-blob delay-500" />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3">{isRTL ? 'قيمنا' : 'Our Values'}</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {isRTL 
                ? 'المبادئ التي توجه عملنا وعلاقاتنا مع عملائنا'
                : 'The principles that guide our work and relationships with customers'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((item, i) => (
              <GlassCard 
                key={i} 
                variant="frosted"
                className="group text-center border-animated"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{isRTL ? item.titleAr : item.titleEn}</h3>
                <p className="text-sm text-muted-foreground">{isRTL ? item.descAr : item.descEn}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3">{isRTL ? 'فريقنا' : 'Our Team'}</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {isRTL 
                ? 'فريق متخصص يعمل معاً لتقديم أفضل خدمة'
                : 'A specialized team working together to deliver the best service'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground mb-4">
                  <member.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">{isRTL ? member.roleAr : member.roleEn}</h3>
                <p className="text-muted-foreground text-sm">{isRTL ? member.descAr : member.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pylontech Partnership */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary/20 border border-secondary/30 mb-6">
              <Battery className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              {isRTL ? 'الوكيل المعتمد الوحيد لـ Pylontech' : 'The Only Authorized Pylontech Agent'}
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              {isRTL 
                ? 'نفخر بكوننا الوكيل الرسمي والمعتمد الوحيد لبطاريات Pylontech في اليمن. هذا يعني أنك تحصل على منتجات أصلية 100% مع ضمان المصنع الكامل والدعم الفني المباشر.'
                : 'We are proud to be the official and only authorized agent for Pylontech batteries in Yemen. This means you get 100% original products with full factory warranty and direct technical support.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {[
                { labelEn: 'Factory Warranty', labelAr: 'ضمان المصنع' },
                { labelEn: 'Authentic Products', labelAr: 'منتجات أصلية' },
                { labelEn: 'Direct Support', labelAr: 'دعم مباشر' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>{isRTL ? item.labelAr : item.labelEn}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/pylontech">
                {isRTL ? 'تعرف على منتجات Pylontech' : 'Explore Pylontech Products'}
                <Arrow className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container">
          <div className="bg-secondary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-3">
              {isRTL ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-lg mx-auto text-sm">
              {isRTL 
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص'
                : 'Contact us today for a free consultation and customized quote'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  {t('contact.whatsapp')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/contact">
                  {t('nav.contact')}
                  <Arrow className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
