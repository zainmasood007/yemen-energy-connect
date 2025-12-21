import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Zap, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.products', path: '/products' },
  { key: 'nav.pylontech', path: '/pylontech' },
  { key: 'nav.contact', path: '/contact' },
];

export default function Header() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-md bg-primary">
            <Sun className="h-5 w-5 text-secondary" />
            <Zap className="absolute -bottom-0.5 -right-0.5 h-4 w-4 text-secondary" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              {isRTL ? 'القطع' : 'Al-Qatta'}
            </span>
            <span className="text-xs text-muted-foreground leading-tight">
              {isRTL ? 'للطاقة الشمسية' : 'Solar Energy'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
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
