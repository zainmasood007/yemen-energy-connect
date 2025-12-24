import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Save, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAdmin } from '../context/AdminContext';
import AdminLayout from '../components/AdminLayout';
import { AdminProject } from '../types';
import { toast } from '@/hooks/use-toast';

const emptyProject: AdminProject = {
  id: '',
  slug: '',
  titleAr: '',
  titleEn: '',
  descAr: '',
  descEn: '',
  type: 'residential',
  location: { ar: '', en: '', governorate: '' },
  systemSize: '',
  batteryCapacity: '',
  panels: 0,
  date: new Date().getFullYear().toString(),
  clientAr: '',
  clientEn: '',
  images: [],
  features: { ar: [], en: [] },
  productsUsed: [],
  isFeatured: false,
};

export default function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, addProject, updateProject, generateId, products } = useAdmin();
  const isEdit = id && id !== 'new';

  const [project, setProject] = useState<AdminProject>(emptyProject);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newFeatureAr, setNewFeatureAr] = useState('');
  const [newFeatureEn, setNewFeatureEn] = useState('');

  useEffect(() => {
    if (isEdit) {
      const found = projects.find(p => p.id === id);
      if (found) {
        setProject(found);
      }
    }
  }, [id, projects, isEdit]);

  const handleChange = (field: keyof AdminProject, value: any) => {
    setProject(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!project.titleAr || !project.slug) {
      toast({ title: 'خطأ', description: 'العنوان و slug مطلوبان', variant: 'destructive' });
      return;
    }

    if (isEdit) {
      updateProject(id!, project);
      toast({ title: 'تم التحديث', description: 'تم تحديث المشروع بنجاح' });
    } else {
      addProject({ ...project, id: generateId() });
      toast({ title: 'تمت الإضافة', description: 'تم إضافة المشروع بنجاح' });
    }
    navigate('/admin-local/projects');
  };

  // Image handlers
  const addImage = () => {
    if (newImageUrl.trim()) {
      setProject(prev => ({
        ...prev,
        images: [...prev.images, newImageUrl.trim()]
      }));
      setNewImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    setProject(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Feature handlers
  const addFeature = () => {
    if (newFeatureAr.trim() || newFeatureEn.trim()) {
      setProject(prev => ({
        ...prev,
        features: {
          ar: [...prev.features.ar, newFeatureAr.trim()],
          en: [...prev.features.en, newFeatureEn.trim()]
        }
      }));
      setNewFeatureAr('');
      setNewFeatureEn('');
    }
  };

  const removeFeature = (index: number) => {
    setProject(prev => ({
      ...prev,
      features: {
        ar: prev.features.ar.filter((_, i) => i !== index),
        en: prev.features.en.filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/admin-local/projects')}>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">
                {isEdit ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
              </h1>
              <p className="text-muted-foreground">
                {isEdit ? project.titleAr : 'أدخل بيانات المشروع'}
              </p>
            </div>
          </div>
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            حفظ
          </Button>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-xl">
            <TabsTrigger value="basic">الأساسيات</TabsTrigger>
            <TabsTrigger value="specs">المواصفات</TabsTrigger>
            <TabsTrigger value="images">الصور</TabsTrigger>
            <TabsTrigger value="features">المميزات</TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>معلومات أساسية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>نوع المشروع *</Label>
                    <Select value={project.type} onValueChange={(v) => handleChange('type', v as any)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">سكني</SelectItem>
                        <SelectItem value="commercial">تجاري</SelectItem>
                        <SelectItem value="institutional">مؤسسي</SelectItem>
                        <SelectItem value="agricultural">زراعي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Slug (للرابط) *</Label>
                    <Input 
                      value={project.slug}
                      onChange={(e) => handleChange('slug', e.target.value)}
                      placeholder="project-name"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>السنة</Label>
                    <Input 
                      value={project.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      placeholder="2024"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>العنوان بالعربي *</Label>
                    <Input 
                      value={project.titleAr}
                      onChange={(e) => handleChange('titleAr', e.target.value)}
                      placeholder="عنوان المشروع"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>العنوان بالإنجليزي</Label>
                    <Input 
                      value={project.titleEn}
                      onChange={(e) => handleChange('titleEn', e.target.value)}
                      placeholder="Project Title"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الوصف بالعربي</Label>
                    <Textarea 
                      value={project.descAr}
                      onChange={(e) => handleChange('descAr', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الوصف بالإنجليزي</Label>
                    <Textarea 
                      value={project.descEn}
                      onChange={(e) => handleChange('descEn', e.target.value)}
                      rows={3}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>العميل بالعربي</Label>
                    <Input 
                      value={project.clientAr || ''}
                      onChange={(e) => handleChange('clientAr', e.target.value)}
                      placeholder="فيلا خاصة"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>العميل بالإنجليزي</Label>
                    <Input 
                      value={project.clientEn || ''}
                      onChange={(e) => handleChange('clientEn', e.target.value)}
                      placeholder="Private Villa"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Switch 
                    checked={project.isFeatured}
                    onCheckedChange={(v) => handleChange('isFeatured', v)}
                  />
                  <Label>مشروع مميز</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الموقع</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>الموقع بالعربي</Label>
                    <Input 
                      value={project.location.ar}
                      onChange={(e) => setProject(prev => ({
                        ...prev,
                        location: { ...prev.location, ar: e.target.value }
                      }))}
                      placeholder="صنعاء"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الموقع بالإنجليزي</Label>
                    <Input 
                      value={project.location.en}
                      onChange={(e) => setProject(prev => ({
                        ...prev,
                        location: { ...prev.location, en: e.target.value }
                      }))}
                      placeholder="Sana'a"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>المحافظة</Label>
                    <Input 
                      value={project.location.governorate || ''}
                      onChange={(e) => setProject(prev => ({
                        ...prev,
                        location: { ...prev.location, governorate: e.target.value }
                      }))}
                      placeholder="sanaa"
                      dir="ltr"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Specs Tab */}
          <TabsContent value="specs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>مواصفات النظام</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>قدرة النظام</Label>
                    <Input 
                      value={project.systemSize}
                      onChange={(e) => handleChange('systemSize', e.target.value)}
                      placeholder="10 kW"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>سعة البطاريات</Label>
                    <Input 
                      value={project.batteryCapacity}
                      onChange={(e) => handleChange('batteryCapacity', e.target.value)}
                      placeholder="14.4 kWh"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>عدد الألواح</Label>
                    <Input 
                      type="number"
                      value={project.panels}
                      onChange={(e) => handleChange('panels', parseInt(e.target.value) || 0)}
                      placeholder="20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Images Tab */}
          <TabsContent value="images" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>صور المشروع</CardTitle>
                <CardDescription>أضف روابط الصور من مجلد public/uploads</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="/uploads/projects/image.jpg"
                    dir="ltr"
                  />
                  <Button onClick={addImage} className="gap-2">
                    <Plus className="h-4 w-4" />
                    إضافة
                  </Button>
                </div>

                {project.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.images.map((img, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={img} 
                            alt={`صورة ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/placeholder.svg';
                            }}
                          />
                        </div>
                        <Button 
                          variant="destructive" 
                          size="icon"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                          onClick={() => removeImage(index)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                        <p className="text-xs text-muted-foreground mt-1 truncate">{img}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>مميزات المشروع</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 items-end">
                  <div className="flex-1 space-y-1">
                    <Label className="text-xs">بالعربي</Label>
                    <Input 
                      value={newFeatureAr}
                      onChange={(e) => setNewFeatureAr(e.target.value)}
                      placeholder="20 لوح شمسي 550W"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Label className="text-xs">بالإنجليزي</Label>
                    <Input 
                      value={newFeatureEn}
                      onChange={(e) => setNewFeatureEn(e.target.value)}
                      placeholder="20 × 550W Solar Panels"
                      dir="ltr"
                    />
                  </div>
                  <Button onClick={addFeature} className="gap-2">
                    <Plus className="h-4 w-4" />
                    إضافة
                  </Button>
                </div>

                {project.features.ar.length > 0 && (
                  <div className="space-y-2">
                    {project.features.ar.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                        <div className="flex-1">
                          <p>{feature}</p>
                          <p className="text-sm text-muted-foreground" dir="ltr">
                            {project.features.en[index]}
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeFeature(index)}
                          className="text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
