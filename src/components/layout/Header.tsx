import { useState } from 'react';
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
  { key: 'nav.contact', path: '/contact' },
];

export default function Header() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt={isRTL ? 'القطاع لأنظمة الطاقة الشمسية والكهرباء' : 'Al-Qatta Solar Energy Systems'} 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.children ? (
              <div key={item.path} className="relative group">
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    location.pathname.startsWith('/locations')
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {isRTL ? 'مواقعنا' : 'Locations'}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full start-0 mt-1 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[160px] py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
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
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {t(item.key)}
              </Link>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          
          <Button 
            asChild 
            className="hidden sm:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90"
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
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.path}>
                  <button
                    onClick={() => setLocationsOpen(!locationsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {isRTL ? 'مواقعنا' : 'Locations'}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", locationsOpen && "rotate-180")} />
                  </button>
                  {locationsOpen && (
                    <div className="ps-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {isRTL ? child.key : child.keyEn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {t(item.key)}
                </Link>
              )
            ))}
            <Button 
              asChild 
              className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
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
      )}
    </header>
  );
}
