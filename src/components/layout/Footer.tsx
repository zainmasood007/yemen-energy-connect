import { Link } from 'react-router-dom';
import { Sun, Zap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.products', path: '/products' },
    { key: 'nav.pylontech', path: '/pylontech' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const serviceLinks = [
    { key: 'services.items.design.title', path: '/services/design' },
    { key: 'services.items.installation.title', path: '/services/installation' },
    { key: 'services.items.storage.title', path: '/services/storage' },
    { key: 'services.items.maintenance.title', path: '/services/maintenance' },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <Sun className="h-5 w-5 text-secondary-foreground" />
                <Zap className="absolute -bottom-0.5 -right-0.5 h-4 w-4 text-secondary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  {isRTL ? 'القطع' : 'Al-Qatta'}
                </span>
                <span className="text-xs opacity-80 leading-tight">
                  {isRTL ? 'للطاقة الشمسية' : 'Solar Energy'}
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-4 leading-relaxed">
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

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.ourServices')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
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
            © {currentYear} {isRTL ? 'القطع للطاقة الشمسية' : 'Al-Qatta Solar Energy'}. {t('footer.rights')}.
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
