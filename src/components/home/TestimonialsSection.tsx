import { Users, Star, Quote } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useParallax } from '@/hooks/use-parallax';

export function TestimonialsSection() {
  const { isRTL } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });

  const testimonials = [
    {
      nameAr: 'محمد أحمد العامري',
      nameEn: 'Mohammed Ahmed Al-Ameri',
      roleAr: 'صاحب منزل - صنعاء',
      roleEn: 'Homeowner - Sana\'a',
      textAr: 'أفضل استثمار قمت به! النظام يعمل بشكل ممتاز منذ سنتين بدون أي مشاكل.',
      textEn: 'Best investment I made! The system has been working perfectly for 2 years without any issues.',
      rating: 5
    },
    {
      nameAr: 'شركة النور للتجارة',
      nameEn: 'Al-Nour Trading Company',
      roleAr: 'مكتب تجاري - عدن',
      roleEn: 'Commercial Office - Aden',
      textAr: 'وفرنا أكثر من 70% من تكاليف الكهرباء. بطاريات Pylontech ممتازة.',
      textEn: 'We saved over 70% on electricity costs. Pylontech batteries are excellent.',
      rating: 5
    },
    {
      nameAr: 'علي حسن المقطري',
      nameEn: 'Ali Hassan Al-Maqtari',
      roleAr: 'مزارع - تعز',
      roleEn: 'Farmer - Taiz',
      textAr: 'حلّوا لي مشكلة ضخ المياه للمزرعة. النظام قوي ويعمل بكفاءة عالية.',
      textEn: 'They solved my farm water pumping problem. The system is powerful and works efficiently.',
      rating: 5
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-secondary/4 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/4 rounded-full blur-[60px]" />
      </div>
      
      <div className="container relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-5 animate-fade-in">
            <Users className="h-4 w-4" />
            <span>{isRTL ? 'آراء عملائنا' : 'Customer Reviews'}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 animate-slide-up tracking-tight">
            {isRTL ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-slide-up delay-100">
            {isRTL ? 'نفتخر بثقة عملائنا وشهاداتهم عن خدماتنا' : 'We are proud of our clients\' trust and testimonials'}
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 end-5 h-10 w-10 rounded-lg bg-secondary/8 flex items-center justify-center">
                <Quote className="h-5 w-5 text-secondary/50" />
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-5 leading-relaxed text-sm">
                "{isRTL ? testimonial.textAr : testimonial.textEn}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {(isRTL ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{isRTL ? testimonial.nameAr : testimonial.nameEn}</div>
                  <div className="text-xs text-muted-foreground">{isRTL ? testimonial.roleAr : testimonial.roleEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
