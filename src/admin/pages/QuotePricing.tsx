import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { quoteProductPrices, quoteServicePrices, QuoteProductPrice, QuoteServicePrice } from '@/data/quotePricing';
import { Battery, Sun, Zap, Wrench, Save, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import AdminLayout from '../components/AdminLayout';

const categoryIcons = {
  pylontech: Battery,
  panels: Sun,
  inverters: Zap,
  controllers: Wrench,
};

const categoryNames = {
  pylontech: 'البطاريات',
  panels: 'الألواح الشمسية',
  inverters: 'الانفرترات',
  controllers: 'المتحكمات',
};

const QuotePricing: React.FC = () => {
  const [productPrices, setProductPrices] = useState<QuoteProductPrice[]>(quoteProductPrices);
  const [servicePrices, setServicePrices] = useState<QuoteServicePrice[]>(quoteServicePrices);

  const handleProductPriceChange = (index: number, newPrice: number) => {
    const updated = [...productPrices];
    updated[index] = { ...updated[index], unitPrice: newPrice };
    setProductPrices(updated);
  };

  const handleServicePriceChange = (index: number, field: 'pricePerKw' | 'fixedPrice', value: number) => {
    const updated = [...servicePrices];
    updated[index] = { ...updated[index], [field]: value };
    setServicePrices(updated);
  };

  const handleSave = () => {
    // في الوضع الحالي، الأسعار محفوظة في ملف TypeScript
    // لتغييرها بشكل دائم، يجب تعديل ملف src/data/quotePricing.ts
    toast.info('لحفظ الأسعار بشكل دائم، قم بتعديل ملف quotePricing.ts', {
      description: 'الأسعار المعروضة هنا للعرض فقط حالياً',
      duration: 5000,
    });
  };

  const groupedProducts = productPrices.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, QuoteProductPrice[]>);

  return (
    <AdminLayout>
      <div className="space-y-6" dir="rtl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">أسعار عروض الأسعار</h1>
            <p className="text-muted-foreground">
              هذه الأسعار تظهر فقط في ملفات PDF لعروض الأسعار ولا تظهر في الموقع
            </p>
          </div>
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            حفظ التغييرات
          </Button>
        </div>

        <Card className="border-amber-500/50 bg-amber-500/10">
          <CardContent className="flex items-center gap-3 py-4">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <p className="text-sm">
              ملاحظة: لتغيير الأسعار بشكل دائم، قم بتعديل ملف <code className="bg-muted px-1 rounded">src/data/quotePricing.ts</code>
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">أسعار المنتجات</TabsTrigger>
            <TabsTrigger value="services">أسعار الخدمات</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6 mt-6">
            {Object.entries(groupedProducts).map(([category, products]) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      {categoryNames[category as keyof typeof categoryNames]}
                    </CardTitle>
                    <CardDescription>{products.length} منتج</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-right">المنتج</TableHead>
                          <TableHead className="text-right">الوحدة</TableHead>
                          <TableHead className="text-right w-32">السعر ($)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products.map((product) => {
                          const globalIndex = productPrices.findIndex(p => p.productId === product.productId);
                          return (
                            <TableRow key={product.productId}>
                              <TableCell>
                                <div>
                                  <p className="font-medium">{product.nameAr}</p>
                                  <p className="text-sm text-muted-foreground">{product.nameEn}</p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">{product.unit}</Badge>
                              </TableCell>
                              <TableCell>
                                <Input
                                  type="number"
                                  value={product.unitPrice}
                                  onChange={(e) => handleProductPriceChange(globalIndex, Number(e.target.value))}
                                  className="w-24"
                                />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  أسعار الخدمات والتركيب
                </CardTitle>
                <CardDescription>
                  الأسعار تحسب بناءً على حجم النظام بالكيلوواط
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الخدمة</TableHead>
                      <TableHead className="text-right w-32">السعر/كيلوواط ($)</TableHead>
                      <TableHead className="text-right w-32">سعر ثابت ($)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {servicePrices.map((service, idx) => (
                      <TableRow key={service.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{service.nameAr}</p>
                            <p className="text-sm text-muted-foreground">{service.nameEn}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={service.pricePerKw}
                            onChange={(e) => handleServicePriceChange(idx, 'pricePerKw', Number(e.target.value))}
                            className="w-24"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={service.fixedPrice || 0}
                            onChange={(e) => handleServicePriceChange(idx, 'fixedPrice', Number(e.target.value))}
                            className="w-24"
                            placeholder="اختياري"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default QuotePricing;
