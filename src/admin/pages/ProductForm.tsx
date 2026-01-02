import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Save, Plus, Trash2, Eye, FileText, ExternalLink, Zap, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAdmin } from '../context/AdminContext';
import AdminLayout from '../components/AdminLayout';
import ProductPreview from '../components/ProductPreview';
import { AdminProduct } from '../types';
import { toast } from '@/hooks/use-toast';
import { generateSlug } from '@/admin/utils/slugGenerator';

const emptyProduct: AdminProduct = {
  id: '',
  slug: '',
  category: 'inverters',
  brand: '',
  model: '',
  nameAr: '',
  nameEn: '',
  shortDescAr: '',
  shortDescEn: '',
  fullDescAr: '',
  fullDescEn: '',
  keyTakeaways: [{ ar: '', en: '' }],
  specifications: [{ keyAr: '', keyEn: '', value: '', unit: '' }],
  yemenSuitability: {
    ratings: {
      heatResistance: 3,
      coastalSuitability: 3,
      powerOutageSupport: 3,
      dustResistance: 3,
    },
    explanationAr: '',
    explanationEn: '',
    bestRegionsAr: [],
    bestRegionsEn: [],
    climateNotesAr: '',
    climateNotesEn: '',
  },
  useCases: [],
  recommendedForAr: [],
  recommendedForEn: [],
  notRecommendedForAr: [],
  notRecommendedForEn: [],
  faqs: [],
  relatedProductSlugs: [],
  seoTitleAr: '',
  seoTitleEn: '',
  seoDescriptionAr: '',
  seoDescriptionEn: '',
  seoKeywordsAr: [],
  seoKeywordsEn: [],
  image: '',
  gallery: [],
  datasheetUrl: '',
  isAvailable: true,
  isFeatured: false,
};

export default function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct, generateId } = useAdmin();
  const isEdit = id && id !== 'new';

  const [product, setProduct] = useState<AdminProduct>(emptyProduct);
  const [showPreview, setShowPreview] = useState(false);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const found = products.find(p => p.id === id);
      if (found) {
        setProduct(found);
      }
    }
  }, [id, products, isEdit]);

  const handleChange = (field: keyof AdminProduct, value: any) => {
    setProduct(prev => ({ ...prev, [field]: value }));
  };

  // Auto-generate slug from name (Arabic-safe)
  const autoGenerateSlug = (name: string) => {
    return generateSlug(name);
  };

  // Auto-fill SEO from name
  const autoFillSEO = () => {
    if (product.nameAr && !product.seoTitleAr) {
      handleChange('seoTitleAr', `${product.nameAr} | القطع للطاقة الشمسية`);
    }
    if (product.nameEn && !product.seoTitleEn) {
      handleChange('seoTitleEn', `${product.nameEn} | Al-Qatta Solar`);
    }
    if (product.shortDescAr && !product.seoDescriptionAr) {
      handleChange('seoDescriptionAr', product.shortDescAr);
    }
    if (product.shortDescEn && !product.seoDescriptionEn) {
      handleChange('seoDescriptionEn', product.shortDescEn);
    }
  };

  const handleSave = () => {
    if (!product.nameAr) {
      toast({ title: 'خطأ', description: 'الاسم بالعربي مطلوب', variant: 'destructive' });
      return;
    }

    // Auto-generate slug if empty
    let finalProduct = { ...product };
    if (!finalProduct.slug) {
      finalProduct.slug = autoGenerateSlug(product.nameEn || product.model || product.nameAr);
    }

    // Auto-fill SEO if empty
    if (!finalProduct.seoTitleAr) {
      finalProduct.seoTitleAr = `${finalProduct.nameAr} | القطع للطاقة الشمسية`;
    }
    if (!finalProduct.seoDescriptionAr && finalProduct.shortDescAr) {
      finalProduct.seoDescriptionAr = finalProduct.shortDescAr;
    }

    if (isEdit) {
      updateProduct(id!, finalProduct);
      toast({ title: 'تم التحديث', description: 'تم تحديث المنتج بنجاح' });
    } else {
      addProduct({ ...finalProduct, id: generateId() });
      toast({ title: 'تمت الإضافة', description: 'تم إضافة المنتج بنجاح' });
    }
    navigate('/admin-local/products');
  };

  // Specifications handlers
  const addSpec = () => {
    setProduct(prev => ({
      ...prev,
      specifications: [...prev.specifications, { keyAr: '', keyEn: '', value: '', unit: '' }]
    }));
  };

  const updateSpec = (index: number, field: string, value: string) => {
    setProduct(prev => ({
      ...prev,
      specifications: prev.specifications.map((s, i) => 
        i === index ? { ...s, [field]: value } : s
      )
    }));
  };

  const removeSpec = (index: number) => {
    setProduct(prev => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index)
    }));
  };

  // Key Takeaways handlers
  const addTakeaway = () => {
    setProduct(prev => ({
      ...prev,
      keyTakeaways: [...prev.keyTakeaways, { ar: '', en: '' }]
    }));
  };

  const updateTakeaway = (index: number, lang: 'ar' | 'en', value: string) => {
    setProduct(prev => ({
      ...prev,
      keyTakeaways: prev.keyTakeaways.map((t, i) => 
        i === index ? { ...t, [lang]: value } : t
      )
    }));
  };

  const removeTakeaway = (index: number) => {
    setProduct(prev => ({
      ...prev,
      keyTakeaways: prev.keyTakeaways.filter((_, i) => i !== index)
    }));
  };

  // FAQ handlers
  const addFaq = () => {
    setProduct(prev => ({
      ...prev,
      faqs: [...prev.faqs, { questionAr: '', questionEn: '', answerAr: '', answerEn: '' }]
    }));
  };

  const updateFaq = (index: number, field: string, value: string) => {
    setProduct(prev => ({
      ...prev,
      faqs: prev.faqs.map((f, i) => 
        i === index ? { ...f, [field]: value } : f
      )
    }));
  };

  const removeFaq = (index: number) => {
    setProduct(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/admin-local/products')}>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">
                {isEdit ? 'تعديل المنتج' : 'إضافة منتج جديد'}
              </h1>
              <p className="text-muted-foreground">
                {isEdit ? product.nameAr : 'أدخل بيانات المنتج'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Mode Toggle */}
            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
              <Button
                variant={!isAdvancedMode ? "default" : "ghost"}
                size="sm"
                onClick={() => setIsAdvancedMode(false)}
                className="gap-1.5"
              >
                <Zap className="h-4 w-4" />
                سريع
              </Button>
              <Button
                variant={isAdvancedMode ? "default" : "ghost"}
                size="sm"
                onClick={() => setIsAdvancedMode(true)}
                className="gap-1.5"
              >
                <Settings2 className="h-4 w-4" />
                متقدم
              </Button>
            </div>
            <Button variant="outline" onClick={() => setShowPreview(true)} className="gap-2">
              <Eye className="h-4 w-4" />
              معاينة
            </Button>
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              حفظ
            </Button>
          </div>
        </div>

        {/* Quick Mode Notice */}
        {!isAdvancedMode && (
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="flex items-center gap-3 py-3">
              <Zap className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-primary">الوضع السريع</p>
                <p className="text-sm text-muted-foreground">
                  أدخل الأساسيات فقط. يتم توليد SEO والـ Slug تلقائياً عند الحفظ.
                </p>
              </div>
              <Badge variant="secondary">4 حقول فقط</Badge>
            </CardContent>
          </Card>
        )}

        {/* Quick Mode Form */}
        {!isAdvancedMode ? (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إضافة سريعة</CardTitle>
                <CardDescription>أدخل البيانات الأساسية فقط - الباقي يُملأ تلقائياً</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category & Brand Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base">الفئة *</Label>
                    <Select value={product.category} onValueChange={(v) => handleChange('category', v)}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="اختر الفئة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pylontech">🔋 بطاريات Pylontech</SelectItem>
                        <SelectItem value="panels">☀️ ألواح شمسية</SelectItem>
                        <SelectItem value="inverters">⚡ انفرترات</SelectItem>
                        <SelectItem value="controllers">🎛️ منظمات شحن</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base">العلامة التجارية</Label>
                    <Input 
                      value={product.brand}
                      onChange={(e) => handleChange('brand', e.target.value)}
                      placeholder="مثال: Pylontech, Trina, Huawei..."
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base">اسم المنتج بالعربي *</Label>
                    <Input 
                      value={product.nameAr}
                      onChange={(e) => handleChange('nameAr', e.target.value)}
                      placeholder="مثال: بطارية ليثيوم US5000"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base">اسم المنتج بالإنجليزي</Label>
                    <Input 
                      value={product.nameEn}
                      onChange={(e) => handleChange('nameEn', e.target.value)}
                      placeholder="Example: US5000 Lithium Battery"
                      className="h-12 text-base"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Description Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base">وصف مختصر (عربي)</Label>
                    <Textarea 
                      value={product.shortDescAr}
                      onChange={(e) => handleChange('shortDescAr', e.target.value)}
                      placeholder="وصف قصير للمنتج في سطر أو سطرين..."
                      rows={3}
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base">وصف مختصر (إنجليزي)</Label>
                    <Textarea 
                      value={product.shortDescEn}
                      onChange={(e) => handleChange('shortDescEn', e.target.value)}
                      placeholder="Short product description..."
                      rows={3}
                      className="text-base"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Image & Datasheet Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base">صورة المنتج</Label>
                    <Input 
                      value={product.image}
                      onChange={(e) => handleChange('image', e.target.value)}
                      placeholder="/assets/products/image.jpg"
                      className="h-12"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base">ملف المواصفات (PDF)</Label>
                    <Input 
                      value={product.datasheetUrl || ''}
                      onChange={(e) => handleChange('datasheetUrl', e.target.value)}
                      placeholder="/datasheets/product.pdf"
                      className="h-12"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Status Switches */}
                <div className="flex gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={product.isAvailable}
                      onCheckedChange={(v) => handleChange('isAvailable', v)}
                    />
                    <Label className="text-base">متوفر للبيع</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={product.isFeatured}
                      onCheckedChange={(v) => handleChange('isFeatured', v)}
                    />
                    <Label className="text-base">منتج مميز</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Switch to Advanced */}
            <Card className="border-dashed">
              <CardContent className="py-4 text-center">
                <Button variant="ghost" onClick={() => setIsAdvancedMode(true)} className="gap-2">
                  <Settings2 className="h-4 w-4" />
                  تريد إضافة المواصفات التقنية والأسئلة الشائعة؟ انتقل للوضع المتقدم
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Advanced Mode - Original Tabs Interface */
          <Tabs defaultValue="basic" className="space-y-6">
            <TabsList className="grid grid-cols-5 w-full max-w-2xl">
              <TabsTrigger value="basic">الأساسيات</TabsTrigger>
              <TabsTrigger value="specs">المواصفات</TabsTrigger>
              <TabsTrigger value="yemen">ملاءمة اليمن</TabsTrigger>
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
                    <Label>الفئة *</Label>
                    <Select value={product.category} onValueChange={(v) => handleChange('category', v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pylontech">بطاريات Pylontech</SelectItem>
                        <SelectItem value="panels">ألواح شمسية</SelectItem>
                        <SelectItem value="inverters">انفرترات</SelectItem>
                        <SelectItem value="controllers">منظمات شحن</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Slug (للرابط) *</Label>
                    <Input 
                      value={product.slug}
                      onChange={(e) => handleChange('slug', e.target.value)}
                      placeholder="product-name"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>العلامة التجارية</Label>
                    <Input 
                      value={product.brand}
                      onChange={(e) => handleChange('brand', e.target.value)}
                      placeholder="Huawei, Trina..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الاسم بالعربي *</Label>
                    <Input 
                      value={product.nameAr}
                      onChange={(e) => handleChange('nameAr', e.target.value)}
                      placeholder="اسم المنتج"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الاسم بالإنجليزي</Label>
                    <Input 
                      value={product.nameEn}
                      onChange={(e) => handleChange('nameEn', e.target.value)}
                      placeholder="Product Name"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الموديل</Label>
                    <Input 
                      value={product.model}
                      onChange={(e) => handleChange('model', e.target.value)}
                      placeholder="SUN2000-10KTL"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>صورة المنتج</Label>
                    <Input 
                      value={product.image}
                      onChange={(e) => handleChange('image', e.target.value)}
                      placeholder="/uploads/products/image.jpg"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Datasheet/Attachments */}
                <Card className="border-dashed">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      ملف المواصفات (Datasheet)
                    </CardTitle>
                    <CardDescription>
                      رابط ملف PDF للمواصفات التقنية - الملفات في مجلد public/datasheets/
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <Input 
                        value={product.datasheetUrl || ''}
                        onChange={(e) => handleChange('datasheetUrl', e.target.value)}
                        placeholder="/datasheets/product-manual.pdf"
                        dir="ltr"
                        className="flex-1"
                      />
                      {product.datasheetUrl && (
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => window.open(product.datasheetUrl, '_blank')}
                          title="فتح الملف"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      أمثلة: /datasheets/pylontech-us5000.pdf أو /datasheets/trina-vertex.pdf
                    </p>
                  </CardContent>
                </Card>

                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={product.isAvailable}
                      onCheckedChange={(v) => handleChange('isAvailable', v)}
                    />
                    <Label>متوفر</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={product.isFeatured}
                      onCheckedChange={(v) => handleChange('isFeatured', v)}
                    />
                    <Label>مميز</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الوصف</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>وصف مختصر (عربي)</Label>
                    <Textarea 
                      value={product.shortDescAr}
                      onChange={(e) => handleChange('shortDescAr', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>وصف مختصر (إنجليزي)</Label>
                    <Textarea 
                      value={product.shortDescEn}
                      onChange={(e) => handleChange('shortDescEn', e.target.value)}
                      rows={3}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>وصف كامل (عربي)</Label>
                    <Textarea 
                      value={product.fullDescAr}
                      onChange={(e) => handleChange('fullDescAr', e.target.value)}
                      rows={6}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>وصف كامل (إنجليزي)</Label>
                    <Textarea 
                      value={product.fullDescEn}
                      onChange={(e) => handleChange('fullDescEn', e.target.value)}
                      rows={6}
                      dir="ltr"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>النقاط الرئيسية</CardTitle>
                <CardDescription>أهم المميزات للعرض السريع</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.keyTakeaways.map((takeaway, index) => (
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

          {/* Specifications Tab */}
          <TabsContent value="specs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>المواصفات التقنية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex gap-2 items-start p-3 bg-muted/50 rounded-lg">
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Input 
                        value={spec.keyAr}
                        onChange={(e) => updateSpec(index, 'keyAr', e.target.value)}
                        placeholder="المفتاح (عربي)"
                      />
                      <Input 
                        value={spec.keyEn}
                        onChange={(e) => updateSpec(index, 'keyEn', e.target.value)}
                        placeholder="Key (EN)"
                        dir="ltr"
                      />
                      <Input 
                        value={spec.value}
                        onChange={(e) => updateSpec(index, 'value', e.target.value)}
                        placeholder="القيمة"
                      />
                      <Input 
                        value={spec.unit || ''}
                        onChange={(e) => updateSpec(index, 'unit', e.target.value)}
                        placeholder="الوحدة"
                      />
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeSpec(index)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={addSpec} className="gap-2">
                  <Plus className="h-4 w-4" />
                  إضافة مواصفة
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Yemen Suitability Tab */}
          <TabsContent value="yemen" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تقييم ملاءمة اليمن</CardTitle>
                <CardDescription>تقييم من 1 إلى 5 لكل معيار</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: 'heatResistance', label: 'مقاومة الحرارة' },
                    { key: 'coastalSuitability', label: 'ملاءمة المناطق الساحلية' },
                    { key: 'powerOutageSupport', label: 'دعم انقطاع الكهرباء' },
                    { key: 'dustResistance', label: 'مقاومة الغبار' },
                  ].map(({ key, label }) => (
                    <div key={key} className="space-y-2">
                      <Label>{label}</Label>
                      <Select 
                        value={String(product.yemenSuitability.ratings[key as keyof typeof product.yemenSuitability.ratings])}
                        onValueChange={(v) => setProduct(prev => ({
                          ...prev,
                          yemenSuitability: {
                            ...prev.yemenSuitability,
                            ratings: {
                              ...prev.yemenSuitability.ratings,
                              [key]: parseInt(v) as 1 | 2 | 3 | 4 | 5
                            }
                          }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map(n => (
                            <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>شرح الملاءمة (عربي)</Label>
                    <Textarea 
                      value={product.yemenSuitability.explanationAr}
                      onChange={(e) => setProduct(prev => ({
                        ...prev,
                        yemenSuitability: { ...prev.yemenSuitability, explanationAr: e.target.value }
                      }))}
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>شرح الملاءمة (إنجليزي)</Label>
                    <Textarea 
                      value={product.yemenSuitability.explanationEn}
                      onChange={(e) => setProduct(prev => ({
                        ...prev,
                        yemenSuitability: { ...prev.yemenSuitability, explanationEn: e.target.value }
                      }))}
                      rows={4}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>ملاحظات المناخ (عربي)</Label>
                    <Textarea 
                      value={product.yemenSuitability.climateNotesAr}
                      onChange={(e) => setProduct(prev => ({
                        ...prev,
                        yemenSuitability: { ...prev.yemenSuitability, climateNotesAr: e.target.value }
                      }))}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>ملاحظات المناخ (إنجليزي)</Label>
                    <Textarea 
                      value={product.yemenSuitability.climateNotesEn}
                      onChange={(e) => setProduct(prev => ({
                        ...prev,
                        yemenSuitability: { ...prev.yemenSuitability, climateNotesEn: e.target.value }
                      }))}
                      rows={3}
                      dir="ltr"
                    />
                  </div>
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
                {product.faqs.map((faq, index) => (
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
                      value={product.seoTitleAr}
                      onChange={(e) => handleChange('seoTitleAr', e.target.value)}
                      placeholder="عنوان الصفحة للسيو"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>عنوان SEO (إنجليزي)</Label>
                    <Input 
                      value={product.seoTitleEn}
                      onChange={(e) => handleChange('seoTitleEn', e.target.value)}
                      placeholder="SEO Page Title"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>وصف SEO (عربي)</Label>
                    <Textarea 
                      value={product.seoDescriptionAr}
                      onChange={(e) => handleChange('seoDescriptionAr', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>وصف SEO (إنجليزي)</Label>
                    <Textarea 
                      value={product.seoDescriptionEn}
                      onChange={(e) => handleChange('seoDescriptionEn', e.target.value)}
                      rows={3}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>كلمات مفتاحية (عربي) - مفصولة بفاصلة</Label>
                    <Input 
                      value={product.seoKeywordsAr.join(', ')}
                      onChange={(e) => handleChange('seoKeywordsAr', e.target.value.split(',').map(s => s.trim()))}
                      placeholder="كلمة1، كلمة2، كلمة3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>كلمات مفتاحية (إنجليزي) - مفصولة بفاصلة</Label>
                    <Input 
                      value={product.seoKeywordsEn.join(', ')}
                      onChange={(e) => handleChange('seoKeywordsEn', e.target.value.split(',').map(s => s.trim()))}
                      placeholder="keyword1, keyword2, keyword3"
                      dir="ltr"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          </Tabs>
        )}

        <ProductPreview 
          product={product} 
          open={showPreview} 
          onClose={() => setShowPreview(false)} 
        />
      </div>
    </AdminLayout>
  );
}
