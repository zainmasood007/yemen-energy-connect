import { Category } from './types';

export const categories: Category[] = [
  {
    slug: 'pylontech',
    nameAr: 'بطاريات Pylontech',
    nameEn: 'Pylontech Batteries',
    descriptionAr: 'بطاريات ليثيوم فوسفات الحديد (LiFePO4) الأكثر موثوقية في العالم. الوكيل المعتمد الوحيد في اليمن مع ضمان 10 سنوات.',
    descriptionEn: 'The most reliable LiFePO4 lithium batteries in the world. The only authorized agent in Yemen with a 10-year warranty.',
    icon: 'Battery',
    image: '/placeholder.svg',
  },
  {
    slug: 'panels',
    nameAr: 'الألواح الشمسية',
    nameEn: 'Solar Panels',
    descriptionAr: 'ألواح شمسية عالية الكفاءة من أفضل العلامات التجارية العالمية، مصممة لتحمل ظروف المناخ اليمني.',
    descriptionEn: 'High-efficiency solar panels from top global brands, designed to withstand Yemeni climate conditions.',
    icon: 'Sun',
    image: '/placeholder.svg',
  },
  {
    slug: 'inverters',
    nameAr: 'الانفرترات',
    nameEn: 'Inverters',
    descriptionAr: 'انفرترات هجينة وشبكية بقدرات متعددة، متوافقة مع بطاريات Pylontech وأنظمة الطاقة الشمسية المختلفة.',
    descriptionEn: 'Hybrid and on-grid inverters with multiple capacities, compatible with Pylontech batteries and various solar systems.',
    icon: 'Zap',
    image: '/placeholder.svg',
  },
  {
    slug: 'controllers',
    nameAr: 'منظمات الشحن',
    nameEn: 'Charge Controllers',
    descriptionAr: 'منظمات شحن MPPT و PWM لتحسين كفاءة الشحن وحماية البطاريات من الشحن الزائد.',
    descriptionEn: 'MPPT and PWM charge controllers to optimize charging efficiency and protect batteries from overcharging.',
    icon: 'Gauge',
    image: '/placeholder.svg',
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

export const getCategoryName = (slug: string, isRTL: boolean): string => {
  const category = getCategoryBySlug(slug);
  if (!category) return slug;
  return isRTL ? category.nameAr : category.nameEn;
};
