import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/logo.png';

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.products', path: '/products' },
    { key: 'nav.pylontech', path: '/pylontech' },
    { key: 'nav.knowledge', path: '/knowledge' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const serviceLinks = [
    { key: 'services.items.design.title', path: '/services' },
    { key: 'services.items.installation.title', path: '/services' },
    { key: 'services.items.storage.title', path: '/services' },
    { key: 'services.items.maintenance.title', path: '/services' },
  ];

  const locationLinks = [
    { name: { ar: 'صنعاء', en: "Sana'a" }, path: '/locations/sanaa' },
    { name: { ar: 'عدن', en: 'Aden' }, path: '/locations/aden' },
    { name: { ar: 'تعز', en: 'Taiz' }, path: '/locations/taiz' },
    { name: { ar: 'الحديدة', en: 'Hudaydah' }, path: '/locations/hudaydah' },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt={isRTL ? 'القطاع لأنظمة الطاقة الشمسية والكهرباء' : 'Al-Qatta Solar Energy Systems'} 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm opacity-80 mb-4 leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-md bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-md bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-md bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4">{isRTL ? 'مواقعنا' : 'Our Locations'}</h4>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {isRTL ? link.name.ar : link.name.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+967777777777" 
                  className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span dir="ltr">+967 777 777 777</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@alqatta.com" 
                  className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@alqatta.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{isRTL ? 'صنعاء، اليمن' : "Sana'a, Yemen"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm opacity-70">
          <p>
            © {currentYear} {isRTL ? 'القطاع لأنظمة الطاقة الشمسية والكهرباء' : 'Al-Qatta Solar Energy Systems'}. {t('footer.rights')}.
          </p>
          <p className="flex items-center gap-1">
            <span>{isRTL ? 'الوكيل المعتمد لـ' : 'Authorized Agent of'}</span>
            <span className="font-bold text-secondary">Pylontech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
