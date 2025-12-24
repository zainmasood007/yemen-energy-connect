import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, FolderKanban, MapPin, Calendar } from 'lucide-react';
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

const typeLabels: Record<string, string> = {
  residential: 'سكني',
  commercial: 'تجاري',
  institutional: 'مؤسسي',
  agricultural: 'زراعي',
};

export default function AdminProjects() {
  const { projects, deleteProject } = useAdmin();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = 
      p.titleAr.toLowerCase().includes(search.toLowerCase()) ||
      p.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      p.location.ar.includes(search);
    const matchesType = typeFilter === 'all' || p.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleDelete = (id: string, title: string) => {
    deleteProject(id);
    toast({ title: 'تم الحذف', description: `تم حذف ${title}` });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">إدارة المشاريع</h1>
            <p className="text-muted-foreground">إضافة وتعديل معرض المشاريع</p>
          </div>
          <Link to="/admin-local/projects/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              إضافة مشروع
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
                  placeholder="البحث عن مشروع..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pr-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={typeFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTypeFilter('all')}
                >
                  الكل
                </Button>
                {Object.entries(typeLabels).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={typeFilter === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTypeFilter(key)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderKanban className="h-5 w-5" />
              المشاريع ({filteredProjects.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <FolderKanban className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">لا توجد مشاريع</p>
                <Link to="/admin-local/projects/new">
                  <Button variant="link" className="mt-2">إضافة مشروع جديد</Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>المشروع</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>الموقع</TableHead>
                      <TableHead>القدرة</TableHead>
                      <TableHead>التاريخ</TableHead>
                      <TableHead className="text-left">الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {project.images[0] && (
                              <img 
                                src={project.images[0]} 
                                alt={project.titleAr}
                                className="w-12 h-8 rounded object-cover bg-muted"
                              />
                            )}
                            <div>
                              <p className="font-medium">{project.titleAr}</p>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {project.clientAr}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">
                            {typeLabels[project.type] || project.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3 w-3" />
                            {project.location.ar}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-medium">{project.systemSize}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {project.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => navigate(`/admin-local/projects/${project.id}`)}
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
                                  <AlertDialogTitle>حذف المشروع</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    هل أنت متأكد من حذف "{project.titleAr}"؟
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                  <AlertDialogAction 
                                    onClick={() => handleDelete(project.id, project.titleAr)}
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
