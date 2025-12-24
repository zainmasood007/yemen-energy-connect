import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Save, Plus, Trash2 } from 'lucide-react';
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
import { AdminArticle } from '../types';
import { toast } from '@/hooks/use-toast';

const emptyArticle: AdminArticle = {
  id: '',
  slug: '',
  type: 'supporting',
  icon: 'FileText',
  titleAr: '',
  titleEn: '',
  descAr: '',
  descEn: '',
  contentAr: '',
  contentEn: '',
  keyTakeaways: [{ ar: '', en: '' }],
  faqs: [],
  relatedProductSlugs: [],
  relatedArticleSlugs: [],
  pillarSlug: '',
  seoTitleAr: '',
  seoTitleEn: '',
  seoDescriptionAr: '',
  seoDescriptionEn: '',
  status: 'draft',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const iconOptions = [
  'Zap', 'Battery', 'Sun', 'BookOpen', 'Calculator', 'Wrench', 
  'RefreshCw', 'ArrowUpDown', 'Lightbulb', 'FileText'
];

export default function ArticleForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles, addArticle, updateArticle, generateId } = useAdmin();
  const isEdit = id && id !== 'new';

  const [article, setArticle] = useState<AdminArticle>(emptyArticle);

  useEffect(() => {
    if (isEdit) {
      const found = articles.find(a => a.id === id);
      if (found) {
        setArticle(found);
      }
    }
  }, [id, articles, isEdit]);

  const handleChange = (field: keyof AdminArticle, value: any) => {
    setArticle(prev => ({ ...prev, [field]: value, updatedAt: new Date().toISOString() }));
  };

  const handleSave = () => {
    if (!article.titleAr || !article.slug) {
      toast({ title: 'خطأ', description: 'العنوان و slug مطلوبان', variant: 'destructive' });
      return;
    }

    if (isEdit) {
      updateArticle(id!, article);
      toast({ title: 'تم التحديث', description: 'تم تحديث المقال بنجاح' });
    } else {
      addArticle({ ...article, id: generateId() });
      toast({ title: 'تمت الإضافة', description: 'تم إضافة المقال بنجاح' });
    }
    navigate('/admin-local/articles');
  };

  // Key Takeaways handlers
  const addTakeaway = () => {
    setArticle(prev => ({
      ...prev,
      keyTakeaways: [...prev.keyTakeaways, { ar: '', en: '' }]
    }));
  };

  const updateTakeaway = (index: number, lang: 'ar' | 'en', value: string) => {
    setArticle(prev => ({
      ...prev,
      keyTakeaways: prev.keyTakeaways.map((t, i) => 
        i === index ? { ...t, [lang]: value } : t
      )
    }));
  };

  const removeTakeaway = (index: number) => {
    setArticle(prev => ({
      ...prev,
      keyTakeaways: prev.keyTakeaways.filter((_, i) => i !== index)
    }));
  };

  // FAQ handlers
  const addFaq = () => {
    setArticle(prev => ({
      ...prev,
      faqs: [...prev.faqs, { questionAr: '', questionEn: '', answerAr: '', answerEn: '' }]
    }));
  };

  const updateFaq = (index: number, field: string, value: string) => {
    setArticle(prev => ({
      ...prev,
      faqs: prev.faqs.map((f, i) => 
        i === index ? { ...f, [field]: value } : f
      )
    }));
  };

  const removeFaq = (index: number) => {
    setArticle(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/admin-local/articles')}>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">
                {isEdit ? 'تعديل المقال' : 'إضافة مقال جديد'}
              </h1>
              <p className="text-muted-foreground">
                {isEdit ? article.titleAr : 'أدخل بيانات المقال'}
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
            <TabsTrigger value="content">المحتوى</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
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
                    <Label>نوع المقال *</Label>
                    <Select value={article.type} onValueChange={(v) => handleChange('type', v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pillar">دليل شامل (Pillar)</SelectItem>
                        <SelectItem value="supporting">مقال داعم (Supporting)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Slug (للرابط) *</Label>
                    <Input 
                      value={article.slug}
                      onChange={(e) => handleChange('slug', e.target.value)}
                      placeholder="article-slug"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الأيقونة</Label>
                    <Select value={article.icon} onValueChange={(v) => handleChange('icon', v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {iconOptions.map(icon => (
                          <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>العنوان بالعربي *</Label>
                    <Input 
                      value={article.titleAr}
                      onChange={(e) => handleChange('titleAr', e.target.value)}
                      placeholder="عنوان المقال"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>العنوان بالإنجليزي</Label>
                    <Input 
                      value={article.titleEn}
                      onChange={(e) => handleChange('titleEn', e.target.value)}
                      placeholder="Article Title"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>وصف مختصر (عربي)</Label>
                    <Textarea 
                      value={article.descAr}
                      onChange={(e) => handleChange('descAr', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>وصف مختصر (إنجليزي)</Label>
                    <Textarea 
                      value={article.descEn}
                      onChange={(e) => handleChange('descEn', e.target.value)}
                      rows={3}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={article.status === 'published'}
                      onCheckedChange={(v) => handleChange('status', v ? 'published' : 'draft')}
                    />
                    <Label>منشور</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>النقاط الرئيسية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {article.keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <Input 
                        value={takeaway.ar}
                        onChange={(e) => updateTakeaway(index, 'ar', e.target.value)}
                        placeholder="النقطة بالعربي"
                      />
                      <Input 
                        value={takeaway.en}
                        onChange={(e) => updateTakeaway(index, 'en', e.target.value)}
                        placeholder="Point in English"
                        dir="ltr"
                      />
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeTakeaway(index)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={addTakeaway} className="gap-2">
                  <Plus className="h-4 w-4" />
                  إضافة نقطة
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>محتوى المقال</CardTitle>
                <CardDescription>يمكنك استخدام Markdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>المحتوى بالعربي</Label>
                  <Textarea 
                    value={article.contentAr}
                    onChange={(e) => handleChange('contentAr', e.target.value)}
                    rows={15}
                    className="font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label>المحتوى بالإنجليزي</Label>
                  <Textarea 
                    value={article.contentEn}
                    onChange={(e) => handleChange('contentEn', e.target.value)}
                    rows={15}
                    className="font-mono text-sm"
                    dir="ltr"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الأسئلة الشائعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {article.faqs.map((faq, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">سؤال {index + 1}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeFaq(index)}
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        value={faq.questionAr}
                        onChange={(e) => updateFaq(index, 'questionAr', e.target.value)}
                        placeholder="السؤال بالعربي"
                      />
                      <Input 
                        value={faq.questionEn}
                        onChange={(e) => updateFaq(index, 'questionEn', e.target.value)}
                        placeholder="Question in English"
                        dir="ltr"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Textarea 
                        value={faq.answerAr}
                        onChange={(e) => updateFaq(index, 'answerAr', e.target.value)}
                        placeholder="الإجابة بالعربي"
                        rows={3}
                      />
                      <Textarea 
                        value={faq.answerEn}
                        onChange={(e) => updateFaq(index, 'answerEn', e.target.value)}
                        placeholder="Answer in English"
                        rows={3}
                        dir="ltr"
                      />
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={addFaq} className="gap-2">
                  <Plus className="h-4 w-4" />
                  إضافة سؤال
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>عنوان SEO (عربي)</Label>
                    <Input 
                      value={article.seoTitleAr}
                      onChange={(e) => handleChange('seoTitleAr', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>عنوان SEO (إنجليزي)</Label>
                    <Input 
                      value={article.seoTitleEn}
                      onChange={(e) => handleChange('seoTitleEn', e.target.value)}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>وصف SEO (عربي)</Label>
                    <Textarea 
                      value={article.seoDescriptionAr}
                      onChange={(e) => handleChange('seoDescriptionAr', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>وصف SEO (إنجليزي)</Label>
                    <Textarea 
                      value={article.seoDescriptionEn}
                      onChange={(e) => handleChange('seoDescriptionEn', e.target.value)}
                      rows={3}
                      dir="ltr"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
