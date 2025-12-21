import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  className?: string;
  showText?: boolean;
}

export default function WhatsAppButton({ className, showText = false }: WhatsAppButtonProps) {
  const { isRTL } = useLanguage();
  
  const whatsappNumber = '967777777777';
  const message = isRTL 
    ? 'مرحباً، أريد الاستفسار عن منتجات الطاقة الشمسية' 
    : 'Hello, I want to inquire about solar energy products';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl animate-pulse-glow",
        isRTL ? "left-6" : "right-6",
        showText ? "pr-5" : "p-3",
        className
      )}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      {showText && (
        <span className="font-medium">
          {isRTL ? 'تواصل معنا' : 'Chat with us'}
        </span>
      )}
    </a>
  );
}
