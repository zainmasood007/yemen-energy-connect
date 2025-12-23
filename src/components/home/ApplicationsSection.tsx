import { Home, Building2, Factory, Truck } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function ApplicationsSection() {
  const { isRTL } = useLanguage();

  const applications = [
    { icon: Home, title: isRTL ? 'المنازل' : 'Homes', desc: isRTL ? 'أنظمة منزلية متكاملة' : 'Complete home systems' },
    { icon: Building2, title: isRTL ? 'المكاتب' : 'Offices', desc: isRTL ? 'حلول للشركات' : 'Business solutions' },
    { icon: Factory, title: isRTL ? 'المصانع' : 'Factories', desc: isRTL ? 'أنظمة صناعية' : 'Industrial systems' },
    { icon: Truck, title: isRTL ? 'المشاريع' : 'Projects', desc: isRTL ? 'مشاريع كبيرة' : 'Large-scale projects' },
  ];

  return (
    <section className="py-14 md:py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            {isRTL ? 'حلول لكل القطاعات' : 'Solutions for Every Sector'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {isRTL ? 'نقدم حلول طاقة شمسية مخصصة لجميع أنواع المباني والمشاريع' : 'We provide customized solar solutions for all types of buildings and projects'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="group text-center p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/8 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <app.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold mb-1">{app.title}</h3>
              <p className="text-muted-foreground text-sm">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
