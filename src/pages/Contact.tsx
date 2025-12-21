import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { t, isRTL } = useLanguage();
  
  return (
    <Layout>
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('contact.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer" className="card-industrial p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all group">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-[#25D366]/10 text-[#25D366] mb-4 group-hover:bg-[#25D366] group-hover:text-white transition-colors"><MessageCircle className="h-7 w-7" /></div>
              <h3 className="text-lg font-bold mb-1">{t('contact.whatsapp')}</h3>
              <p className="text-sm text-muted-foreground" dir="ltr">+967 777 777 777</p>
            </a>
            <a href="tel:+967777777777" className="card-industrial p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all group">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Phone className="h-7 w-7" /></div>
              <h3 className="text-lg font-bold mb-1">{t('contact.phone')}</h3>
              <p className="text-sm text-muted-foreground" dir="ltr">+967 777 777 777</p>
            </a>
            <a href="mailto:info@alqatta.com" className="card-industrial p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all group">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Mail className="h-7 w-7" /></div>
              <h3 className="text-lg font-bold mb-1">{t('contact.email')}</h3>
              <p className="text-sm text-muted-foreground">info@alqatta.com</p>
            </a>
            <div className="card-industrial p-6 text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 text-primary mb-4"><MapPin className="h-7 w-7" /></div>
              <h3 className="text-lg font-bold mb-1">{t('contact.address')}</h3>
              <p className="text-sm text-muted-foreground">{isRTL ? 'صنعاء، اليمن' : "Sana'a, Yemen"}</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t('contact.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
