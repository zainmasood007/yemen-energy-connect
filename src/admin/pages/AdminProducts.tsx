import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, Eye, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useAdmin } from '../context/AdminContext';
import AdminLayout from '../components/AdminLayout';
import { toast } from '@/hooks/use-toast';

const categoryLabels: Record<string, string> = {
  pylontech: 'بطاريات Pylontech',
  panels: 'ألواح شمسية',
  inverters: 'انفرترات',
  controllers: 'منظمات شحن',
};

export default function AdminProducts() {
  const { products, deleteProduct } = useAdmin();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredProducts = products.filter((p) => {
    const matchesSearch = 
      p.nameAr.toLowerCase().includes(search.toLowerCase()) ||
      p.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string, name: string) => {
    deleteProduct(id);
    toast({ title: 'تم الحذف', description: `تم حذف ${name}` });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">إدارة المنتجات</h1>
            <p className="text-muted-foreground">إضافة وتعديل وحذف المنتجات</p>
          </div>
          <Link to="/admin-local/products/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              إضافة منتج
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="البحث عن منتج..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pr-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={categoryFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('all')}
                >
                  الكل
                </Button>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={categoryFilter === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCategoryFilter(key)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              المنتجات ({filteredProducts.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">لا توجد منتجات</p>
                <Link to="/admin-local/products/new">
                  <Button variant="link" className="mt-2">إضافة منتج جديد</Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>المنتج</TableHead>
                      <TableHead>الفئة</TableHead>
                      <TableHead>العلامة التجارية</TableHead>
                      <TableHead>الحالة</TableHead>
                      <TableHead className="text-left">الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {product.image && (
                              <img 
                                src={product.image} 
                                alt={product.nameAr}
                                className="w-10 h-10 rounded object-cover bg-muted"
                              />
                            )}
                            <div>
                              <p className="font-medium">{product.nameAr}</p>
                              <p className="text-xs text-muted-foreground">{product.slug}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">
                            {categoryLabels[product.category] || product.category}
                          </Badge>
                        </TableCell>
                        <TableCell>{product.brand}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {product.isAvailable && (
                              <Badge variant="default" className="text-xs">متوفر</Badge>
                            )}
                            {product.isFeatured && (
                              <Badge variant="secondary" className="text-xs">مميز</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => navigate(`/admin-local/products/${product.id}`)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>حذف المنتج</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    هل أنت متأكد من حذف "{product.nameAr}"؟ لا يمكن التراجع عن هذا الإجراء.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                  <AlertDialogAction 
                                    onClick={() => handleDelete(product.id, product.nameAr)}
                                    className="bg-destructive text-destructive-foreground"
                                  >
                                    حذف
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
