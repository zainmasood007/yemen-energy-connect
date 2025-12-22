import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/logo.png';

const navItems = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.products', path: '/products' },
  { key: 'nav.pylontech', path: '/pylontech' },
  { key: 'nav.projects', path: '/projects' },
  { 
    key: 'nav.locations',
    path: '/locations',
    children: [
      { key: 'جميع المواقع', keyEn: 'All Locations', path: '/locations' },
      { key: 'صنعاء', keyEn: "Sana'a", path: '/locations/sanaa' },
      { key: 'عدن', keyEn: 'Aden', path: '/locations/aden' },
      { key: 'تعز', keyEn: 'Taiz', path: '/locations/taiz' },
      { key: 'الحديدة', keyEn: 'Hudaydah', path: '/locations/hudaydah' },
      { key: 'مأرب', keyEn: 'Marib', path: '/locations/marib' },
      { key: 'إب', keyEn: 'Ibb', path: '/locations/ibb' },
      { key: 'ذمار', keyEn: 'Dhamar', path: '/locations/dhamar' },
    ]
  },
  { key: 'nav.knowledge', path: '/knowledge' },
  { key: 'nav.contact', path: '/contact' },
];

export default function Header() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      scrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft" 
        : "bg-transparent"
    )}>
      <div className="container flex h-18 py-3 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt={isRTL ? 'القطاع لأنظمة الطاقة الشمسية والكهرباء' : 'Al-Qatta Solar Energy Systems'} 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.children ? (
              <div key={item.path} className="relative group">
                <button
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
                    location.pathname.startsWith('/locations')
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/80"
                  )}
                >
                  {isRTL ? 'مواقعنا' : 'Locations'}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full start-0 mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px] py-2 overflow-hidden">
                  {item.children.map((child, idx) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={cn(
                        "block px-4 py-2.5 text-sm hover:bg-muted/80 transition-all duration-200",
                        idx === 0 && "font-medium border-b border-border/50 mb-1"
                      )}
                    >
                      {isRTL ? child.key : child.keyEn}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/80"
                )}
              >
                {t(item.key)}
              </Link>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          <Button 
            asChild 
            className="hidden sm:inline-flex bg-gradient-solar text-secondary-foreground hover:opacity-90 shadow-glow hover:shadow-[0_0_30px_hsl(32_95%_55%/0.4)] transition-all duration-500 rounded-xl px-6 font-semibold"
          >
            <a 
              href="https://wa.me/967777777777" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('nav.getQuote')}
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-muted/80 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden transition-all duration-500",
        mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="container py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            item.children ? (
              <div key={item.path}>
                <button
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/80 transition-all duration-300"
                >
                  {isRTL ? 'مواقعنا' : 'Locations'}
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", locationsOpen && "rotate-180")} />
                </button>
                <div className={cn(
                  "ps-4 overflow-hidden transition-all duration-300",
                  locationsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {isRTL ? child.key : child.keyEn}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/80"
                )}
              >
                {t(item.key)}
              </Link>
            )
          ))}
          <Button 
            asChild 
            className="mt-3 bg-gradient-solar text-secondary-foreground hover:opacity-90 shadow-glow rounded-xl font-semibold"
          >
            <a 
              href="https://wa.me/967777777777" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('nav.getQuote')}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}