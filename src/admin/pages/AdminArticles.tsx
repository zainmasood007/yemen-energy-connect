import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, FileText } from 'lucide-react';
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

export default function AdminArticles() {
  const { articles, deleteArticle } = useAdmin();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredArticles = articles.filter((a) => {
    const matchesSearch = 
      a.titleAr.toLowerCase().includes(search.toLowerCase()) ||
      a.titleEn.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'all' || a.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleDelete = (id: string, title: string) => {
    deleteArticle(id);
    toast({ title: 'تم الحذف', description: `تم حذف ${title}` });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">إدارة المقالات</h1>
            <p className="text-muted-foreground">إضافة وتعديل مقالات مركز المعرفة</p>
          </div>
          <Link to="/admin-local/articles/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              إضافة مقال
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
                  placeholder="البحث عن مقال..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pr-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={typeFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTypeFilter('all')}
                >
                  الكل
                </Button>
                <Button
                  variant={typeFilter === 'pillar' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTypeFilter('pillar')}
                >
                  أدلة شاملة
                </Button>
                <Button
                  variant={typeFilter === 'supporting' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTypeFilter('supporting')}
                >
                  مقالات داعمة
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Articles Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              المقالات ({filteredArticles.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">لا توجد مقالات</p>
                <Link to="/admin-local/articles/new">
                  <Button variant="link" className="mt-2">إضافة مقال جديد</Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>المقال</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>الحالة</TableHead>
                      <TableHead>التاريخ</TableHead>
                      <TableHead className="text-left">الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredArticles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{article.titleAr}</p>
                            <p className="text-xs text-muted-foreground">{article.slug}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={article.type === 'pillar' ? 'default' : 'secondary'}>
                            {article.type === 'pillar' ? 'دليل شامل' : 'مقال داعم'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={article.status === 'published' ? 'default' : 'outline'}>
                            {article.status === 'published' ? 'منشور' : 'مسودة'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">
                            {new Date(article.updatedAt).toLocaleDateString('ar')}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => navigate(`/admin-local/articles/${article.id}`)}
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
                                  <AlertDialogTitle>حذف المقال</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    هل أنت متأكد من حذف "{article.titleAr}"؟
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                  <AlertDialogAction 
                                    onClick={() => handleDelete(article.id, article.titleAr)}
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
