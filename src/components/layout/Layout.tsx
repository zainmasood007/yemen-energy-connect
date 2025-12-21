import { ReactNode } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { dir, isRTL } = useLanguage();

  return (
    <div 
      dir={dir} 
      className={cn(
        "min-h-screen flex flex-col",
        isRTL ? "font-arabic" : "font-sans"
      )}
    >
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton showText />
    </div>
  );
}
