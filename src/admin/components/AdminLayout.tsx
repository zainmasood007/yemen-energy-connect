import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Package, FileText, FolderKanban, Settings, Download, Upload,
  Menu, X, Home, ChevronLeft, ChevronRight, Database, Receipt
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAdmin } from '../context/AdminContext';
import { toast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: '/admin-local', icon: Home, label: 'الرئيسية', labelEn: 'Dashboard' },
  { path: '/admin-local/products', icon: Package, label: 'المنتجات', labelEn: 'Products' },
  { path: '/admin-local/articles', icon: FileText, label: 'المقالات', labelEn: 'Articles' },
  { path: '/admin-local/projects', icon: FolderKanban, label: 'المشاريع', labelEn: 'Projects' },
  { path: '/admin-local/quote-pricing', icon: Receipt, label: 'أسعار العروض', labelEn: 'Quote Pricing' },
  { path: '/admin-local/export', icon: Download, label: 'التصدير', labelEn: 'Export' },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const { exportData, importData } = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `admin-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: 'تم التصدير بنجاح', description: 'تم تحميل ملف JSON' });
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          if (importData(content)) {
            toast({ title: 'تم الاستيراد بنجاح', description: 'تم تحميل البيانات' });
          } else {
            toast({ title: 'فشل الاستيراد', description: 'ملف غير صالح', variant: 'destructive' });
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* DEV Warning Banner - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-500 text-amber-950 px-4 py-2 text-center text-sm font-bold">
        ⚠️ Local Admin – للتطوير فقط – لا يعمل في الإنتاج ⚠️
      </div>
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-10 left-0 right-0 h-14 bg-card border-b border-border z-50 flex items-center justify-between px-4">
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <span className="font-bold">لوحة التحكم المحلية</span>
        </div>
        <div className="w-10" />
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-foreground/50 z-40 mt-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-10 right-0 h-[calc(100vh-40px)] bg-card border-l border-border z-50 transition-all duration-300",
        "lg:translate-x-0",
        sidebarOpen ? "w-64" : "w-16",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      )}>
        {/* Logo */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-border">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <span className="font-bold text-sm">لوحة التحكم</span>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden lg:flex"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== '/admin-local' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        {sidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={handleExport}>
              <Download className="h-4 w-4" />
              تصدير JSON
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={handleImport}>
              <Upload className="h-4 w-4" />
              استيراد JSON
            </Button>
            <Link to="/" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground">
                <Home className="h-4 w-4" />
                العودة للموقع
              </Button>
            </Link>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className={cn(
        "transition-all duration-300 pt-24 lg:pt-14",
        sidebarOpen ? "lg:mr-64" : "lg:mr-16"
      )}>
        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
