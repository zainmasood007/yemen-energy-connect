import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, Send, 
  User, FileText, CheckCircle, AlertCircle, Sparkles,
  Shield, Zap, Building2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import SEO, { localBusinessSchema, createBreadcrumbSchema } from '@/components/SEO';
import { z } from 'zod';
import { useLocation } from 'react-router-dom';

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, { message: 'الاسم قصير جداً' }).max(100, { message: 'الاسم طويل جداً' }),
  phone: z.string().trim().min(9, { message: 'رقم الهاتف غير صحيح' }).max(20, { message: 'رقم الهاتف غير صحيح' }),
  email: z.string().trim().email({ message: 'البريد الإلكتروني غير صحيح' }).optional().or(z.literal('')),
  subject: z.string().trim().min(1, { message: 'الرجاء اختيار الموضوع' }),
  message: z.string().trim().min(10, { message: 'الرسالة قصيرة جداً' }).max(1000, { message: 'الرسالة طويلة جداً' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const location = useLocation();
  const isEnPath = location.pathname.startsWith('/en');
  const pageLang: 'ar' | 'en' = isEnPath ? 'en' : 'ar';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const homePath = isEnPath ? '/en' : '/';
  const contactPath = isEnPath ? '/en/contact' : '/contact';

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: pageLang === 'ar' ? 'الرئيسية' : 'Home', url: homePath },
    { name: pageLang === 'ar' ? 'اتصل بنا' : 'Contact Us', url: contactPath },
  ]);

  const contactJsonLd = [
    localBusinessSchema,
    breadcrumbSchema,
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": pageLang === 'ar' ? "اتصل بنا - القطاع للطاقة الشمسية" : "Contact Us - Al-Qatta Solar Energy",
      "description": pageLang === 'ar'
        ? "تواصل مع القطاع للطاقة الشمسية - الوكيل المعتمد الوحيد لـ Pylontech في اليمن"
        : "Contact Al-Qatta Solar Energy - The only authorized Pylontech agent in Yemen",
      "mainEntity": localBusinessSchema
    }
  ];

  const subjects = [
    { valueEn: 'quote', valueAr: 'quote', labelEn: 'Request a Quote', labelAr: 'طلب عرض سعر' },
    { valueEn: 'consultation', valueAr: 'consultation', labelEn: 'Free Consultation', labelAr: 'استشارة مجانية' },
    { valueEn: 'support', valueAr: 'support', labelEn: 'Technical Support', labelAr: 'دعم فني' },
    { valueEn: 'maintenance', valueAr: 'maintenance', labelEn: 'Maintenance Request', labelAr: 'طلب صيانة' },
    { valueEn: 'other', valueAr: 'other', labelEn: 'Other Inquiry', labelAr: 'استفسار آخر' },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      titleEn: 'WhatsApp',
      titleAr: 'واتساب',
      value: '+967 777 800 063',
      descEn: 'Fastest response - usually within minutes',
      descAr: 'أسرع استجابة - عادة خلال دقائق',
      href: 'https://wa.me/967777800063',
      color: 'bg-[#25D366]',
      featured: true
    },
    {
      icon: Phone,
      titleEn: 'Phone',
      titleAr: 'الهاتف',
      value: '+967 777 800 063',
      descEn: 'Call us during business hours',
      descAr: 'اتصل بنا خلال ساعات العمل',
      href: 'tel:+967777800063',
      color: 'bg-primary'
    },
    {
      icon: Mail,
      titleEn: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: 'info@alqatta.com',
      descEn: 'For detailed inquiries',
      descAr: 'للاستفسارات التفصيلية',
      href: 'mailto:info@alqatta.com',
      color: 'bg-primary'
    },
  ];

  const offices = [
    {
      cityEn: "Sana'a",
      cityAr: 'صنعاء',
      addressEn: "Main Office - Sho'ub, in front of Military Hospital",
      addressAr: 'المكتب الرئيسي - شعوب أمام المستشفى العسكري',
      phone: '+967 777 800 063',
      isMain: true
    },
    {
      cityEn: 'Aden',
      cityAr: 'عدن',
      addressEn: 'Branch Office - Al-Maalla District',
      addressAr: 'فرع المعلا',
      phone: '+967 777 777 778',
      isMain: false
    },
    {
      cityEn: 'Taiz',
      cityAr: 'تعز',
      addressEn: 'Branch Office - Al-Hawban Area',
      addressAr: 'فرع الحوبان',
      phone: '+967 777 777 779',
      isMain: false
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const subjectLabel = subjects.find(s => s.valueEn === formData.subject);
    const messageText = `*${isRTL ? 'رسالة جديدة من الموقع' : 'New Website Message'}*

*${isRTL ? 'الاسم' : 'Name'}:* ${formData.name}
*${isRTL ? 'الهاتف' : 'Phone'}:* ${formData.phone}
${formData.email ? `*${isRTL ? 'البريد' : 'Email'}:* ${formData.email}` : ''}
*${isRTL ? 'الموضوع' : 'Subject'}:* ${isRTL ? subjectLabel?.labelAr : subjectLabel?.labelEn}

*${isRTL ? 'الرسالة' : 'Message'}:*
${formData.message}`;

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/967777800063?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: isRTL ? 'تم فتح واتساب' : 'WhatsApp Opened',
      description: isRTL ? 'أرسل الرسالة عبر واتساب للتواصل معنا' : 'Send the message via WhatsApp to contact us',
    });

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - Al-Qatta Solar Energy | WhatsApp, Phone, Email"
        titleAr="اتصل بنا - القطاع للطاقة الشمسية | واتساب، هاتف، بريد إلكتروني"
        description="Contact Al-Qatta Solar Energy for solar system inquiries, quotes, and support. WhatsApp: +967 777 777 777. The only authorized Pylontech agent in Yemen."
        descriptionAr="تواصل مع القطاع للطاقة الشمسية للاستفسارات وطلب عروض الأسعار والدعم الفني. واتساب: +967 777 777 777. الوكيل المعتمد الوحيد لـ Pylontech في اليمن."
        keywords="contact al-qatta, solar company yemen contact, pylontech yemen phone, solar energy support yemen"
        keywordsAr="اتصل بالقطاع، تواصل شركة طاقة شمسية اليمن، هاتف بايلونتيك اليمن، دعم طاقة شمسية اليمن"
        canonical={isEnPath ? '/en/contact' : '/contact'}
        lang={pageLang}
        jsonLd={contactJsonLd}
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>{isRTL ? 'استشارة مجانية' : 'Free Consultation'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">{t('contact.title')}</h1>
            <p className="text-primary-foreground/80">{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-10 bg-surface border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300",
                  method.featured 
                    ? "bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20" 
                    : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                )}
              >
                <div className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center text-white shrink-0",
                  method.color
                )}>
                  <method.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-sm">{isRTL ? method.titleAr : method.titleEn}</div>
                  <div className="text-xs text-muted-foreground" dir="ltr">{method.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {isRTL ? method.descAr : method.descEn}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-black mb-2">
                  {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {isRTL 
                    ? 'املأ النموذج وسيتم إرسال رسالتك عبر واتساب للرد السريع'
                    : 'Fill the form and your message will be sent via WhatsApp for quick response'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                    {isRTL ? 'الاسم الكامل' : 'Full Name'} *
                  </Label>
                  <div className="relative">
                    <User className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                      className={cn("ps-10", errors.name && "border-destructive")}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
                    {isRTL ? 'رقم الهاتف' : 'Phone Number'} *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="777 777 777"
                      className={cn("ps-10", errors.phone && "border-destructive")}
                      dir="ltr"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                    {isRTL ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={cn("ps-10", errors.email && "border-destructive")}
                      dir="ltr"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-1.5 block">
                    {isRTL ? 'الموضوع' : 'Subject'} *
                  </Label>
                  <div className="relative">
                    <FileText className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={cn(
                        "w-full h-10 ps-10 pe-4 rounded-md border border-input bg-background text-sm",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        errors.subject && "border-destructive"
                      )}
                    >
                      <option value="">{isRTL ? 'اختر الموضوع' : 'Select subject'}</option>
                      {subjects.map((subject) => (
                        <option key={subject.valueEn} value={subject.valueEn}>
                          {isRTL ? subject.labelAr : subject.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.subject && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                    {isRTL ? 'الرسالة' : 'Message'} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    rows={4}
                    className={cn(errors.message && "border-destructive")}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                  disabled={isSubmitting}
                >
                  <MessageCircle className="h-5 w-5" />
                  {isSubmitting 
                    ? (isRTL ? 'جاري الإرسال...' : 'Sending...') 
                    : (isRTL ? 'إرسال عبر واتساب' : 'Send via WhatsApp')}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {isRTL 
                    ? 'سيتم فتح واتساب مع رسالتك جاهزة للإرسال'
                    : 'WhatsApp will open with your message ready to send'}
                </p>
              </form>
            </div>

            {/* Contact Info & Offices */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">{isRTL ? 'ساعات العمل' : 'Working Hours'}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isRTL ? 'السبت - الخميس' : 'Saturday - Thursday'}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isRTL ? 'المكاتب' : 'Offices'}</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isRTL ? 'الدعم الفني' : 'Tech Support'}</span>
                    <span className="font-medium text-success">24/7</span>
                  </div>
                </div>
              </div>

              {/* Our Offices */}
              <div>
                <h3 className="font-bold text-lg mb-4">{isRTL ? 'مكاتبنا' : 'Our Offices'}</h3>
                <div className="space-y-3">
                  {offices.map((office, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "p-4 rounded-xl border",
                        office.isMain 
                          ? "bg-primary/5 border-primary/20" 
                          : "bg-card border-border"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          "h-8 w-8 rounded-lg flex items-center justify-center shrink-0",
                          office.isMain ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        )}>
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">{isRTL ? office.cityAr : office.cityEn}</span>
                            {office.isMain && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                {isRTL ? 'رئيسي' : 'Main'}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {isRTL ? office.addressAr : office.addressEn}
                          </p>
                          <a 
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="text-sm text-primary hover:underline"
                            dir="ltr"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-bold text-sm mb-4">{isRTL ? 'لماذا تتواصل معنا؟' : 'Why Contact Us?'}</h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle, textEn: 'Free consultation for your solar project', textAr: 'استشارة مجانية لمشروعك الشمسي' },
                    { icon: Zap, textEn: 'Quick response within 1 hour', textAr: 'رد سريع خلال ساعة واحدة' },
                    { icon: Shield, textEn: 'Expert advice from certified engineers', textAr: 'نصائح من مهندسين معتمدين' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <item.icon className="h-4 w-4 text-success shrink-0" />
                      <span>{isRTL ? item.textAr : item.textEn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
