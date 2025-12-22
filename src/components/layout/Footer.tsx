import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Zap } from 'lucide-react';
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

  const locationLinks = [
    { name: { ar: 'صنعاء', en: "Sana'a" }, path: '/locations/sanaa' },
    { name: { ar: 'عدن', en: 'Aden' }, path: '/locations/aden' },
    { name: { ar: 'تعز', en: 'Taiz' }, path: '/locations/taiz' },
    { name: { ar: 'الحديدة', en: 'Hudaydah' }, path: '/locations/hudaydah' },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Main Footer */}
      <div className="container relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt={isRTL ? 'القطاع لأنظمة الطاقة الشمسية والكهرباء' : 'Al-Qatta Solar Energy Systems'} 
                className="h-14 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-base opacity-75 mb-6 leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="h-11 w-11 flex items-center justify-center rounded-xl bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 flex items-center gap-2">
              <Zap className="h-4 w-4 text-secondary" />
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-5 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              {isRTL ? 'مواقعنا' : 'Our Locations'}
            </h4>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-300 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block"
                  >
                    {isRTL ? link.name.ar : link.name.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-5">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+967777777777" 
                  className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-300 group"
                >
                  <span className="h-10 w-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span dir="ltr">+967 777 777 777</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@alqatta.com" 
                  className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-300 group"
                >
                  <span className="h-10 w-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>info@alqatta.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <span className="h-10 w-10 rounded-xl bg-background/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>{isRTL ? 'صنعاء، اليمن' : "Sana'a, Yemen"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 relative">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm opacity-60">
          <p>
            © {currentYear} {isRTL ? 'القطاع لأنظمة الطاقة الشمسية والكهرباء' : 'Al-Qatta Solar Energy Systems'}. {t('footer.rights')}.
          </p>
          <p className="flex items-center gap-2">
            <span>{isRTL ? 'الوكيل المعتمد لـ' : 'Authorized Agent of'}</span>
            <span className="font-bold text-secondary">Pylontech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}