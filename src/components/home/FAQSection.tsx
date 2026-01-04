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
      questionAr: 'ما هي أفضل بطاريات طاقة شمسية في اليمن للمنازل والشركات؟',
      questionEn: 'What are the best solar batteries in Yemen for homes and businesses?',
      answerAr: 'تُعتبر بطاريات Pylontech من أفضل بطاريات الطاقة الشمسية في اليمن بفضل اعتمادها على خلايا LiFePO4 الآمنة، وعمرها الطويل الذي يتجاوز 6000 دورة، وضمان يصل حتى 10 سنوات عند التركيب من قبل جهة معتمدة مثل مؤسسة القطاع.',
      answerEn: 'Pylontech batteries are among the best solar batteries in Yemen thanks to their safe LiFePO4 cells, long lifetime of over 6,000 cycles, and warranties of up to 10 years when installed by an authorized provider like Al-Qatta.'
    },
    {
      questionAr: 'ما هو أفضل نظام طاقة شمسية للمنازل في اليمن لمواجهة انقطاع الكهرباء؟',
      questionEn: 'What is the best home solar system in Yemen to handle power outages?',
      answerAr: 'أفضل نظام طاقة شمسية للمنازل في اليمن هو النظام المصمم حسب أحمال المنزل، ويجمع بين ألواح شمسية عالية الجودة، إنفرتر موثوق، وبطاريات ليثيوم مثل Pylontech، مع ضمان ودعم فني محلي من جهة متخصصة في السوق اليمني.',
      answerEn: 'The best home solar system in Yemen is one designed according to your loads, combining high-quality panels, a reliable inverter, and lithium batteries such as Pylontech, with proper warranty and local technical support from a team experienced in the Yemeni market.'
    },
    {
      questionAr: 'هل أنتم الوكيل المعتمد لبطاريات Pylontech في اليمن؟',
      questionEn: 'Are you the authorized distributor of Pylontech batteries in Yemen?',
      answerAr: 'نعم، مؤسسة القطاع لأنظمة الطاقة الشمسية والكهرباء تعمل كجهة معتمدة لتوريد وتركيب بطاريات Pylontech في اليمن، وتوفر حلول تخزين طاقة متكاملة مع التزام بشروط الضمان وخدمة ما بعد البيع داخل اليمن.',
      answerEn: 'Yes, Al-Qatta for Solar & Electrical Systems is an authorized provider for supplying and installing Pylontech batteries in Yemen, offering complete energy storage solutions with full warranty compliance and after-sales service inside Yemen.'
    },
    {
      questionAr: 'ما هي أفضل حلول تخزين الطاقة في اليمن لمشكلة انقطاع الكهرباء؟',
      questionEn: 'What are the best energy storage solutions in Yemen for frequent power cuts?',
      answerAr: 'أفضل حلول تخزين الطاقة في اليمن تعتمد على بطاريات ليثيوم احترافية مثل Pylontech الموصولة بأنظمة طاقة شمسية مُصمّمة بشكل صحيح، بحيث تغطي أحمال المنزل أو المشروع لفترات انقطاع الكهرباء الطويلة بكفاءة وأمان.',
      answerEn: 'The best energy storage solutions in Yemen rely on professional lithium batteries like Pylontech, connected to properly designed solar systems so they can safely and efficiently cover your home or business loads during long power outages.'
    },
    {
      questionAr: 'كم تبلغ أسعار أنظمة الطاقة الشمسية في صنعاء للمنازل؟',
      questionEn: 'How much do home solar systems in Sana’a typically cost?',
      answerAr: 'تختلف أسعار أنظمة الطاقة الشمسية في صنعاء حسب سعة النظام وجودة المكونات وطبيعة أحمال المنزل. عادةً يتم تقديم عرض سعر مخصص بعد دراسة الاستهلاك وتحديد عدد الألواح والبطاريات المناسبة، لذلك يُنصح بالتواصل معنا للحصول على تسعيرة تقديرية دقيقة لنظامك.',
      answerEn: 'The cost of home solar systems in Sana’a varies depending on system size, component quality, and your household loads. We usually prepare a tailored quotation after studying your consumption and sizing the panels and batteries, so it is best to contact us for an accurate indicative price for your system.',
    },
    {
      questionAr: 'كيف أختار أفضل شركة طاقة شمسية في صنعاء واليمن؟',
      questionEn: 'How can I choose the best solar company in Sana’a and Yemen?',
      answerAr: 'لاختيار أفضل شركة طاقة شمسية في صنعاء واليمن، ابحث عن جهة معتمدة بخبرة عملية، تستخدم مكونات أصلية مثل بطاريات Pylontech وإنفرترات موثوقة، وتقدّم تصميماً هندسياً واضحاً، وضماناً مكتوباً، ودعم فني داخل اليمن.',
      answerEn: 'To choose the best solar company in Sana’a and Yemen, look for an accredited provider with practical experience that uses genuine components like Pylontech batteries and reliable inverters, offers clear engineering designs, written warranties, and local technical support.',
    },
    {
      questionAr: 'هل أنظمة الطاقة الشمسية حل فعّال ونهائي لمشكلة انقطاع الكهرباء في اليمن؟',
      questionEn: 'Are solar systems an effective long-term solution to power cuts in Yemen?',
      answerAr: 'نعم، أنظمة الطاقة الشمسية المصممة بشكل صحيح مع بطاريات تخزين مناسبة أصبحت الحل الأكثر استدامة لمشكلة انقطاع الكهرباء في اليمن، بشرط اختيار شركة متخصصة ومكونات أصلية وتركيب وفقاً للمعايير الفنية.',
      answerEn: 'Yes, properly designed solar systems with suitable battery storage have become the most sustainable solution to power cuts in Yemen, provided you choose a specialized company, use original components, and install according to professional standards.',
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
            {isRTL ? 'لديك سؤال آخر أو تريد تفاصيل أكثر عن اليمن؟' : 'Want more Yemen-specific answers?'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild variant="outline" className="border-border hover:border-primary/30 min-w-[220px]">
              <a href={isRTL ? '/knowledge/solar-faq-yemen' : '/en/knowledge/solar-faq-yemen'}>
                {isRTL ? 'عرض صفحة الأسئلة الشائعة في اليمن' : 'Open full Yemen solar FAQ page'}
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-xs sm:text-sm">
              <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                {isRTL ? 'أو تواصل معنا عبر واتساب' : 'Or contact us on WhatsApp'}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
