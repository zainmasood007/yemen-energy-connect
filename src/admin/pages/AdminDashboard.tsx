import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, FileText, FolderKanban, Plus, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAdmin } from '../context/AdminContext';
import AdminLayout from '../components/AdminLayout';
import { getPerformanceMetrics, type PerformanceMetric } from '@/lib/performanceMetrics';

export default function AdminDashboard() {
  const { products, articles, projects } = useAdmin();

  const stats = [
    { 
      label: 'المنتجات', 
      value: products.length, 
      icon: Package, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      path: '/admin-local/products'
    },
    { 
      label: 'المقالات', 
      value: articles.length, 
      icon: FileText, 
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      path: '/admin-local/articles'
    },
    { 
      label: 'المشاريع', 
      value: projects.length, 
      icon: FolderKanban, 
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      path: '/admin-local/projects'
    },
  ];

  const quickActions = [
    { label: 'إضافة منتج', path: '/admin-local/products/new', icon: Package },
    { label: 'إضافة مقال', path: '/admin-local/articles/new', icon: FileText },
    { label: 'إضافة مشروع', path: '/admin-local/projects/new', icon: FolderKanban },
  ];

  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);

  useEffect(() => {
    const stored = getPerformanceMetrics();
    const latest = stored.slice(-8).reverse();
    setMetrics(latest);
  }, []);
 
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">لوحة التحكم المحلية</h1>
          <p className="text-muted-foreground mt-1">
            إدارة المحتوى محليًا قبل البناء والنشر
          </p>
        </div>

        {/* Development Notice */}
        <Card className="border-amber-500/50 bg-amber-500/5">
          <CardContent className="flex items-start gap-3 pt-4">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-600">وضع التطوير المحلي</p>
              <p className="text-sm text-muted-foreground mt-1">
                هذه اللوحة تعمل فقط في بيئة التطوير. البيانات تُحفظ في localStorage ويمكنك تصديرها كملف JSON.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Link key={stat.path} to={stat.path}>
              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="flex items-center gap-4 pt-6">
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Performance Monitor */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                مراقبة الأداء (محلي)
              </CardTitle>
              <CardDescription>
                أوقات تحميل الصفحة الرئيسية وتوليد عروض الأسعار (لا تُرسل للخادم)
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {metrics.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-4">
                لا توجد بيانات أداء بعد. جرّب فتح الصفحة الرئيسية أو إنشاء PDF.
              </p>
            ) : (
              <div className="space-y-2 text-sm">
                {metrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2"
                  >
                    <div className="space-y-0.5">
                      <p className="font-medium">
                        {metric.type === 'home_load'
                          ? 'تحميل الصفحة الرئيسية'
                          : 'توليد عرض سعر PDF'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(metric.timestamp).toLocaleString('ar-YE')}
                      </p>
                    </div>
                    <p className="font-semibold tabular-nums">
                      {Math.round(metric.durationMs)}
                      <span className="text-xs text-muted-foreground ms-1">مللي ثانية</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
 
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
            <CardDescription>إضافة محتوى جديد بسرعة</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {quickActions.map((action) => (
              <Link key={action.path} to={action.path}>
                <Button variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  {action.label}
                </Button>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Products */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">آخر المنتجات</CardTitle>
                <CardDescription>آخر المنتجات المضافة</CardDescription>
              </div>
              <Link to="/admin-local/products">
                <Button variant="ghost" size="sm">عرض الكل</Button>
              </Link>
            </CardHeader>
            <CardContent>
              {products.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-4">
                  لا توجد منتجات بعد
                </p>
              ) : (
                <div className="space-y-3">
                  {products.slice(-3).reverse().map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{product.nameAr}</p>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                      </div>
                      <Badge variant={product.isAvailable ? 'default' : 'secondary'}>
                        {product.isAvailable ? 'متوفر' : 'غير متوفر'}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Articles */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">آخر المقالات</CardTitle>
                <CardDescription>آخر المقالات المضافة</CardDescription>
              </div>
              <Link to="/admin-local/articles">
                <Button variant="ghost" size="sm">عرض الكل</Button>
              </Link>
            </CardHeader>
            <CardContent>
              {articles.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-4">
                  لا توجد مقالات بعد
                </p>
              ) : (
                <div className="space-y-3">
                  {articles.slice(-3).reverse().map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{article.titleAr}</p>
                        <p className="text-xs text-muted-foreground">{article.type}</p>
                      </div>
                      <Badge variant={article.status === 'published' ? 'default' : 'secondary'}>
                        {article.status === 'published' ? 'منشور' : 'مسودة'}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">كيفية الاستخدام</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>أضف المنتجات والمقالات والمشاريع من خلال هذه اللوحة</li>
              <li>البيانات تُحفظ تلقائيًا في المتصفح (localStorage)</li>
              <li>استخدم زر "تصدير JSON" لتحميل البيانات</li>
              <li>انسخ البيانات إلى ملفات <code>src/data/</code> أو <code>src/content/</code></li>
              <li>قم بعمل build ورفع الموقع للاستضافة</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
