import { HelpCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const { isRTL } = useLanguage();

  const faqs = [
    {
      questionAr: 'كم تكلفة نظام الطاقة الشمسية للمنزل؟',
      questionEn: 'How much does a home solar system cost?',
      answerAr: 'تختلف التكلفة حسب حجم النظام واحتياجاتك. نظام منزلي متوسط (5-10 كيلووات) يتراوح بين 3,000-8,000 دولار شاملاً التركيب والبطاريات.',
      answerEn: 'Cost varies based on system size and your needs. An average home system (5-10 kW) ranges from $3,000-$8,000 including installation and batteries.'
    },
    {
      questionAr: 'كم سنة يدوم النظام الشمسي؟',
      questionEn: 'How long does a solar system last?',
      answerAr: 'الألواح الشمسية تدوم 25-30 سنة. بطاريات Pylontech تدوم أكثر من 15 سنة مع ضمان 10 سنوات.',
      answerEn: 'Solar panels last 25-30 years. Pylontech batteries last over 15 years with 10-year warranty.'
    },
    {
      questionAr: 'هل الطاقة الشمسية تعمل في الأيام الغائمة؟',
      questionEn: 'Does solar energy work on cloudy days?',
      answerAr: 'نعم، الألواح الشمسية تعمل في الأيام الغائمة لكن بكفاءة أقل (10-25% من الطاقة العادية).',
      answerEn: 'Yes, solar panels work on cloudy days but at lower efficiency (10-25% of normal output).'
    },
    {
      questionAr: 'ما الفرق بين بطاريات الليثيوم وبطاريات الرصاص؟',
      questionEn: 'What\'s the difference between lithium and lead-acid batteries?',
      answerAr: 'بطاريات الليثيوم أخف وزناً، تدوم 3-4 مرات أطول، كفاءة 95%+، ولا تحتاج صيانة.',
      answerEn: 'Lithium batteries are lighter, last 3-4x longer, 95%+ efficiency, and maintenance-free.'
    },
    {
      questionAr: 'لماذا أختار Pylontech؟',
      questionEn: 'Why choose Pylontech?',
      answerAr: 'Pylontech هي العلامة الأولى عالمياً في بطاريات تخزين الطاقة مع تقنية LiFePO4 الأكثر أماناً وعمر 6000+ دورة.',
      answerEn: "Pylontech is the world's #1 brand in energy storage with the safest LiFePO4 technology and 6000+ cycle lifespan."
    },
    {
      questionAr: 'هل يمكن توسيع النظام لاحقاً؟',
      questionEn: 'Can I expand the system later?',
      answerAr: 'نعم، نصمم جميع أنظمتنا لتكون قابلة للتوسيع. بطاريات Pylontech تدعم التوصيل المتوازي حتى 16 وحدة.',
      answerEn: 'Yes, we design all systems to be expandable. Pylontech batteries support parallel connection up to 16 units.'
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-4">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {isRTL 
              ? 'إجابات على أكثر الأسئلة شيوعاً حول الطاقة الشمسية'
              : 'Answers to the most common questions about solar energy'}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-primary/25 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-start hover:no-underline py-4">
                  <span className="font-medium text-sm">
                    {isRTL ? faq.questionAr : faq.questionEn}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed text-sm">
                  {isRTL ? faq.answerAr : faq.answerEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-3 text-sm">
            {isRTL ? 'لديك سؤال آخر؟' : 'Have another question?'}
          </p>
          <Button asChild variant="outline" className="border-border hover:border-primary/30">
            <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
              {isRTL ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
