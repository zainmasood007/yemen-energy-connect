import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Shield, Battery, CheckCircle, Star, ArrowLeft, ArrowRight, Zap, ThermometerSun, Gauge, Clock, Award, Phone, MessageCircle, Scale, Box, Cpu, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO, { createBreadcrumbSchema, createProductSchema, createFAQSchema } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Pylontech() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  
  const features = [
    { value: '6000+', label: isRTL ? 'دورة شحن' : 'Charge Cycles', icon: Zap, desc: isRTL ? 'أكثر من 15 سنة استخدام' : '15+ years of use' },
    { value: '10', label: isRTL ? 'سنوات ضمان' : 'Years Warranty', icon: Shield, desc: isRTL ? 'ضمان المصنع الكامل' : 'Full factory warranty' },
    { value: '95%+', label: isRTL ? 'كفاءة الشحن' : 'Round-trip Efficiency', icon: Gauge, desc: isRTL ? 'أعلى كفاءة في السوق' : 'Market-leading efficiency' },
    { value: 'A+', label: isRTL ? 'تصنيف الأمان' : 'Safety Rating', icon: Award, desc: isRTL ? 'شهادات عالمية' : 'Global certifications' },
  ];

  const products = [
    { 
      name: 'US2000C', 
      capacity: '2.4 kWh', 
      voltage: '48V',
      nominalVoltage: '51.2V',
      usableCapacity: '2.28 kWh',
      maxChargeVoltage: '53.5V',
      dischargeCurrent: '25A',
      peakDischargeCurrent: '50A',
      chargeCurrent: '25A',
      weight: '24 kg',
      dimensions: '442 × 420 × 132 mm',
      operatingTemp: '-10°C ~ 50°C',
      dod: '90%',
      efficiency: '≥95%',
      communication: 'RS485, CAN',
      parallel: isRTL ? 'حتى 16 وحدة' : 'Up to 16 units',
      desc: isRTL ? 'مثالي للاستخدام المنزلي الصغير' : 'Ideal for small home use',
      idealFor: isRTL ? 'المنازل الصغيرة، الأنظمة الاحتياطية' : 'Small homes, backup systems',
      popular: false
    },
    { 
      name: 'US3000C', 
      capacity: '3.5 kWh', 
      voltage: '48V',
      nominalVoltage: '51.2V',
      usableCapacity: '3.37 kWh',
      maxChargeVoltage: '53.5V',
      dischargeCurrent: '37A',
      peakDischargeCurrent: '74A',
      chargeCurrent: '37A',
      weight: '32 kg',
      dimensions: '442 × 420 × 174 mm',
      operatingTemp: '-10°C ~ 50°C',
      dod: '90%',
      efficiency: '≥95%',
      communication: 'RS485, CAN',
      parallel: isRTL ? 'حتى 16 وحدة' : 'Up to 16 units',
      desc: isRTL ? 'الأكثر شعبية للمنازل المتوسطة' : 'Most popular for medium homes',
      idealFor: isRTL ? 'المنازل المتوسطة، المكاتب الصغيرة' : 'Medium homes, small offices',
      popular: true
    },
    { 
      name: 'US5000', 
      capacity: '4.8 kWh', 
      voltage: '48V',
      nominalVoltage: '51.2V',
      usableCapacity: '4.56 kWh',
      maxChargeVoltage: '53.5V',
      dischargeCurrent: '50A',
      peakDischargeCurrent: '100A',
      chargeCurrent: '50A',
      weight: '41 kg',
      dimensions: '442 × 420 × 220 mm',
      operatingTemp: '-10°C ~ 50°C',
      dod: '90%',
      efficiency: '≥96%',
      communication: 'RS485, CAN',
      parallel: isRTL ? 'حتى 16 وحدة' : 'Up to 16 units',
      desc: isRTL ? 'للاستخدام الكثيف والتجاري' : 'For heavy and commercial use',
      idealFor: isRTL ? 'المنازل الكبيرة، المتاجر، الفلل' : 'Large homes, shops, villas',
      popular: false
    },
    { 
      name: 'Force H1', 
      capacity: '7.1 kWh', 
      voltage: 'High Voltage',
      nominalVoltage: '134.4V',
      usableCapacity: '6.76 kWh',
      maxChargeVoltage: '147.7V',
      dischargeCurrent: '50A',
      peakDischargeCurrent: '75A',
      chargeCurrent: '50A',
      weight: '78 kg',
      dimensions: '600 × 535 × 250 mm',
      operatingTemp: '-10°C ~ 50°C',
      dod: '95%',
      efficiency: '≥97%',
      communication: 'RS485, CAN, BMS',
      parallel: isRTL ? 'حتى 8 وحدات (56.8 kWh)' : 'Up to 8 units (56.8 kWh)',
      desc: isRTL ? 'للأنظمة الكبيرة والمشاريع' : 'For large systems and projects',
      idealFor: isRTL ? 'المشاريع التجارية، المزارع، المصانع' : 'Commercial projects, farms, factories',
      popular: false
    },
  ];

  const faqs = [
    { 
      question: isRTL ? 'ما الفرق بين بطاريات LiFePO4 وبطاريات الرصاص التقليدية؟' : 'What is the difference between LiFePO4 and traditional lead-acid batteries?',
      answer: isRTL ? 'بطاريات LiFePO4 أخف وزناً بنسبة 60%، تدوم 4-5 مرات أطول (6000+ دورة مقابل 1500)، أكثر أماناً بكثير، ولا تحتاج صيانة. رغم أن سعرها الأولي أعلى، إلا أن التكلفة على المدى الطويل أقل بكثير.' : 'LiFePO4 batteries are 60% lighter, last 4-5 times longer (6000+ cycles vs 1500), are much safer, and require no maintenance. Although the initial cost is higher, the long-term cost is much lower.'
    },
    {
      question: isRTL ? 'كيف أتأكد من أصالة منتجات Pylontech؟' : 'How do I verify Pylontech product authenticity?',
      answer: isRTL ? 'كل منتج Pylontech من القطع يأتي مع رقم تسلسلي فريد يمكن التحقق منه مباشرة من موقع Pylontech الرسمي. كما نوفر شهادة الوكالة المعتمدة وفاتورة رسمية.' : 'Every Pylontech product from Al-Qatta comes with a unique serial number verifiable on the official Pylontech website. We also provide the authorized agency certificate and official invoice.'
    },
    {
      question: isRTL ? 'هل يمكن توسيع النظام لاحقاً؟' : 'Can the system be expanded later?',
      answer: isRTL ? 'نعم! جميع بطاريات Pylontech قابلة للتوسعة. يمكن ربط حتى 16 وحدة US-series معاً للحصول على سعة تصل إلى 76.8 kWh، أو 8 وحدات Force H1 للحصول على 56.8 kWh.' : 'Yes! All Pylontech batteries are expandable. You can connect up to 16 US-series units together for up to 76.8 kWh capacity, or 8 Force H1 units for 56.8 kWh.'
    },
    {
      question: isRTL ? 'ما هي أفضل بطارية لمنزلي؟' : 'What is the best battery for my home?',
      answer: isRTL ? 'يعتمد على استهلاكك: US2000C للمنازل الصغيرة (1-3 أجهزة)، US3000C للمنازل المتوسطة (الأكثر شعبية)، US5000 للمنازل الكبيرة أو الاستخدام التجاري. تواصل معنا للحصول على استشارة مجانية.' : 'It depends on your consumption: US2000C for small homes (1-3 appliances), US3000C for medium homes (most popular), US5000 for large homes or commercial use. Contact us for a free consultation.'
    },
    {
      question: isRTL ? 'ما هي مدة الضمان وماذا يشمل؟' : 'What is the warranty period and what does it cover?',
      answer: isRTL ? '10 سنوات ضمان شامل من المصنع يغطي جميع عيوب التصنيع والأداء. نحن كوكيل معتمد نوفر الدعم الفني الكامل والاستبدال الفوري في حالة وجود أي مشكلة.' : '10 years comprehensive factory warranty covering all manufacturing and performance defects. As an authorized agent, we provide full technical support and immediate replacement if any issues arise.'
    },
  ];

  const techComparison = [
    { spec: isRTL ? 'عدد دورات الشحن' : 'Charge Cycles', lifepo4: '6,000+', leadAcid: '1,200-1,500' },
    { spec: isRTL ? 'العمر الافتراضي' : 'Lifespan', lifepo4: isRTL ? '15+ سنة' : '15+ years', leadAcid: isRTL ? '3-5 سنوات' : '3-5 years' },
    { spec: isRTL ? 'عمق التفريغ (DoD)' : 'Depth of Discharge', lifepo4: '90-95%', leadAcid: '50%' },
    { spec: isRTL ? 'الكفاءة' : 'Efficiency', lifepo4: '95-97%', leadAcid: '80-85%' },
    { spec: isRTL ? 'الوزن (لكل kWh)' : 'Weight (per kWh)', lifepo4: '~10 kg', leadAcid: '~25 kg' },
    { spec: isRTL ? 'الصيانة' : 'Maintenance', lifepo4: isRTL ? 'لا تحتاج' : 'None', leadAcid: isRTL ? 'دورية' : 'Regular' },
    { spec: isRTL ? 'خطر الانفجار' : 'Explosion Risk', lifepo4: isRTL ? 'معدوم' : 'None', leadAcid: isRTL ? 'موجود' : 'Present' },
  ];

  const certifications = [
    { name: 'CE', desc: isRTL ? 'معايير السلامة الأوروبية' : 'European Safety Standards' },
    { name: 'UN38.3', desc: isRTL ? 'شهادة نقل البطاريات' : 'Battery Transport Certification' },
    { name: 'IEC62619', desc: isRTL ? 'معايير سلامة البطاريات' : 'Battery Safety Standards' },
    { name: 'UL1973', desc: isRTL ? 'شهادة UL الأمريكية' : 'UL American Certification' },
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: 'Pylontech', url: '/pylontech' },
  ]);

  const pylontechProductSchema = createProductSchema({
    name: 'Pylontech LiFePO4 Batteries',
    description: 'Original Pylontech lithium iron phosphate batteries with 10-year warranty. The only authorized agent in Yemen.',
    brand: 'Pylontech',
    category: 'Energy Storage Batteries'
  });

  const faqSchema = createFAQSchema(faqs);

  return (
    <Layout>
      <SEO
        title="Pylontech Batteries Yemen | Official Authorized Agent | Al-Qatta"
        titleAr="بطاريات Pylontech اليمن | الوكيل المعتمد الرسمي | القطع"
        description="Buy original Pylontech LiFePO4 batteries in Yemen from the only authorized agent. US2000C, US3000C, US5000, Force H1 with 10-year warranty and full support."
        descriptionAr="اشتري بطاريات Pylontech الأصلية LiFePO4 في اليمن من الوكيل المعتمد الوحيد. US2000C، US3000C، US5000، Force H1 مع ضمان 10 سنوات ودعم كامل."
        keywords="pylontech yemen, pylontech batteries yemen, US2000C yemen, US3000C yemen, LiFePO4 batteries yemen, pylontech authorized agent"
        keywordsAr="بايلونتيك اليمن، بطاريات بايلونتيك اليمن، US2000C اليمن، US3000C اليمن، بطاريات ليثيوم فوسفات الحديد اليمن، وكيل بايلونتيك معتمد"
        canonical="/pylontech"
        jsonLd={[breadcrumbSchema, pylontechProductSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 border border-secondary/30">
              <Shield className="h-4 w-4" />
              {t('pylontech.authorized')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {t('pylontech.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('pylontech.subtitle')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="p-5 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors">
                  <feature.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-black text-secondary mb-1">{feature.value}</div>
                  <div className="text-sm font-medium text-primary-foreground/90 mb-1">{feature.label}</div>
                  <div className="text-xs text-primary-foreground/60">{feature.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-semibold">
                <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  {t('contact.whatsapp')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-semibold">
                <a href="tel:+967777800063">
                  <Phone className="h-5 w-5" />
                  {isRTL ? 'اتصل الآن' : 'Call Now'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
              {isRTL ? 'تشكيلة المنتجات' : 'Product Range'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL ? 'بطاريات Pylontech' : 'Pylontech Batteries'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL ? 'اختر البطارية المناسبة لاحتياجاتك - جميع المنتجات أصلية 100% مع ضمان 10 سنوات' : 'Choose the right battery for your needs - all products are 100% original with 10-year warranty'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product, i) => (
              <article 
                key={i} 
                className={cn(
                  "relative bg-card border rounded-2xl p-6 transition-all cursor-pointer group",
                  selectedProduct === i 
                    ? "border-secondary shadow-lg ring-2 ring-secondary/20" 
                    : "border-border hover:border-secondary/50 hover:shadow-lg",
                  product.popular && "ring-2 ring-secondary/30"
                )}
                onClick={() => setSelectedProduct(selectedProduct === i ? null : i)}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                    {isRTL ? 'الأكثر مبيعاً' : 'Best Seller'}
                  </div>
                )}
                
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                  <Battery className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 bg-secondary/10 text-secondary font-medium rounded-full">{product.capacity}</span>
                  <span className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full">{product.voltage}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                
                {/* Quick Specs */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isRTL ? 'السعة الفعلية:' : 'Usable:'}</span>
                    <span className="font-medium">{product.usableCapacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isRTL ? 'التفريغ:' : 'Discharge:'}</span>
                    <span className="font-medium">{product.dischargeCurrent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isRTL ? 'الكفاءة:' : 'Efficiency:'}</span>
                    <span className="font-medium text-success">{product.efficiency}</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-2 mb-4">
                  <strong>{isRTL ? 'مثالي لـ:' : 'Ideal for:'}</strong> {product.idealFor}
                </div>
                
                <Button 
                  variant={selectedProduct === i ? "default" : "outline"} 
                  size="sm" 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(selectedProduct === i ? null : i);
                  }}
                >
                  {selectedProduct === i 
                    ? (isRTL ? 'إخفاء التفاصيل' : 'Hide Details')
                    : (isRTL ? 'عرض المواصفات' : 'View Specs')
                  }
                </Button>
              </article>
            ))}
          </div>

          {/* Expanded Product Details */}
          {selectedProduct !== null && (
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Battery className="h-8 w-8 text-primary" />
                  {products[selectedProduct].name} - {isRTL ? 'المواصفات التقنية الكاملة' : 'Full Technical Specifications'}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedProduct(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Electrical Specs */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2 text-primary">
                    <Zap className="h-5 w-5" />
                    {isRTL ? 'المواصفات الكهربائية' : 'Electrical Specifications'}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'السعة الكلية' : 'Total Capacity'}</span>
                      <span className="font-medium">{products[selectedProduct].capacity}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'السعة القابلة للاستخدام' : 'Usable Capacity'}</span>
                      <span className="font-medium">{products[selectedProduct].usableCapacity}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'الجهد الاسمي' : 'Nominal Voltage'}</span>
                      <span className="font-medium">{products[selectedProduct].nominalVoltage}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'أقصى جهد شحن' : 'Max Charge Voltage'}</span>
                      <span className="font-medium">{products[selectedProduct].maxChargeVoltage}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'تيار التفريغ' : 'Discharge Current'}</span>
                      <span className="font-medium">{products[selectedProduct].dischargeCurrent}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'تيار التفريغ الأقصى' : 'Peak Discharge'}</span>
                      <span className="font-medium">{products[selectedProduct].peakDischargeCurrent}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">{isRTL ? 'تيار الشحن' : 'Charge Current'}</span>
                      <span className="font-medium">{products[selectedProduct].chargeCurrent}</span>
                    </div>
                  </div>
                </div>

                {/* Physical Specs */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2 text-primary">
                    <Box className="h-5 w-5" />
                    {isRTL ? 'المواصفات الفيزيائية' : 'Physical Specifications'}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'الأبعاد' : 'Dimensions'}</span>
                      <span className="font-medium text-xs">{products[selectedProduct].dimensions}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'الوزن' : 'Weight'}</span>
                      <span className="font-medium">{products[selectedProduct].weight}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'درجة حرارة التشغيل' : 'Operating Temp'}</span>
                      <span className="font-medium">{products[selectedProduct].operatingTemp}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'الاتصال' : 'Communication'}</span>
                      <span className="font-medium">{products[selectedProduct].communication}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">{isRTL ? 'التوسعة' : 'Expansion'}</span>
                      <span className="font-medium">{products[selectedProduct].parallel}</span>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2 text-primary">
                    <BarChart3 className="h-5 w-5" />
                    {isRTL ? 'الأداء' : 'Performance'}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'عمق التفريغ (DoD)' : 'Depth of Discharge'}</span>
                      <span className="font-medium text-success">{products[selectedProduct].dod}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'الكفاءة' : 'Efficiency'}</span>
                      <span className="font-medium text-success">{products[selectedProduct].efficiency}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{isRTL ? 'دورات الشحن' : 'Charge Cycles'}</span>
                      <span className="font-medium">6,000+</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">{isRTL ? 'الضمان' : 'Warranty'}</span>
                      <span className="font-medium">{isRTL ? '10 سنوات' : '10 Years'}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-4">
                    <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      {t('common.requestQuote')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
              {isRTL ? 'مقارنة التقنيات' : 'Technology Comparison'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL ? 'لماذا LiFePO4؟' : 'Why LiFePO4?'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL ? 'مقارنة شاملة بين تقنية الليثيوم فوسفات الحديد وبطاريات الرصاص التقليدية' : 'Comprehensive comparison between lithium iron phosphate technology and traditional lead-acid batteries'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="p-4 font-semibold">{isRTL ? 'المواصفة' : 'Specification'}</div>
                <div className="p-4 font-semibold text-center bg-secondary text-secondary-foreground">LiFePO4</div>
                <div className="p-4 font-semibold text-center">{isRTL ? 'رصاص حمضي' : 'Lead Acid'}</div>
              </div>
              {/* Rows */}
              {techComparison.map((row, i) => (
                <div key={i} className={cn("grid grid-cols-3", i % 2 === 0 ? "bg-muted/30" : "")}>
                  <div className="p-4 text-sm font-medium">{row.spec}</div>
                  <div className="p-4 text-sm text-center font-semibold text-success bg-success/5">{row.lifepo4}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">{row.leadAcid}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">{isRTL ? 'شهادات الجودة والأمان' : 'Quality & Safety Certifications'}</h2>
            <p className="text-muted-foreground">{isRTL ? 'جميع منتجات Pylontech حاصلة على أعلى الشهادات العالمية' : 'All Pylontech products have the highest global certifications'}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 text-center hover:border-secondary/50 transition-colors">
                <div className="text-2xl font-black text-primary mb-1">{cert.name}</div>
                <div className="text-xs text-muted-foreground">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pylontech */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
              {isRTL ? 'المميزات' : 'Benefits'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">{t('pylontech.whyTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                icon: Clock,
                title: isRTL ? 'عمر افتراضي طويل' : 'Long Lifespan', 
                desc: isRTL ? 'أكثر من 6000 دورة شحن، أي ما يعادل أكثر من 15 سنة من الاستخدام اليومي مع الحفاظ على 80% من السعة' : 'Over 6000 charge cycles, equivalent to 15+ years of daily use while maintaining 80% capacity'
              },
              { 
                icon: Shield,
                title: isRTL ? 'أمان عالي' : 'High Safety', 
                desc: isRTL ? 'تقنية LiFePO4 الأكثر أماناً - لا خطر انفجار أو حريق حتى في أصعب الظروف، مع نظام BMS متطور' : 'Safest LiFePO4 technology - no explosion or fire risk even in extreme conditions, with advanced BMS'
              },
              { 
                icon: Award,
                title: isRTL ? 'ضمان شامل' : 'Full Warranty', 
                desc: isRTL ? '10 سنوات ضمان من المصنع مع دعم فني كامل من القطع - الوكيل المعتمد الوحيد في اليمن' : '10 years factory warranty with full technical support from Al-Qatta - the only authorized agent in Yemen'
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:border-secondary/50 transition-all group">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-success/10 text-success mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              {isRTL ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors">
                <h3 className="font-bold text-lg mb-3 flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary/10 text-secondary text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pr-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {isRTL ? 'فريقنا المتخصص جاهز لمساعدتك في اختيار البطارية المناسبة لاحتياجاتك' : 'Our specialized team is ready to help you choose the right battery for your needs'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-semibold">
              <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t('contact.whatsapp')}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-semibold">
              <Link to="/contact">
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
                <Arrow className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
