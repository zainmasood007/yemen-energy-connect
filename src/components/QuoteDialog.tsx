import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Download, User, Phone, MapPin, Loader2 } from "lucide-react";
import type { QuoteCustomer } from "@/lib/generateQuotePdf";
import type { BaseResult } from "@/lib/solarSizingEngine";
import { useToast } from "@/hooks/use-toast";
import { logPerformanceMetric } from "@/lib/performanceMetrics";
 
interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: BaseResult;
  systemType: string;
}

export default function QuoteDialog({
  open,
  onOpenChange,
  result,
  systemType,
}: QuoteDialogProps) {
  const { lang, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [customer, setCustomer] = useState<QuoteCustomer>({
    name: "",
    phone: "",
    address: "",
  });

  const handleGenerate = async () => {
    if (!customer.name.trim()) {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL ? "الرجاء إدخال الاسم" : "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    if (!customer.phone.trim()) {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL ? "الرجاء إدخال رقم الهاتف" : "Please enter your phone number",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
 
    const startTime = performance.now?.() ?? Date.now();
 
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
 
      const { generateQuotePdf } = await import("@/lib/generateQuotePdf");
 
      await generateQuotePdf({
        customer,
        result,
        systemType,
        lang,
      });
 
      const endTime = performance.now?.() ?? Date.now();
      const durationMs = endTime - startTime;
      logPerformanceMetric({ type: "quote_pdf", durationMs });
 
      logPerformanceMetric({ type: "quote_pdf", durationMs });
 
      toast({
        title: isRTL ? "تم بنجاح" : "Success",
        description: isRTL
          ? "تم تحميل عرض السعر بنجاح"
          : "Quote downloaded successfully",
      });
 
      onOpenChange(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL
          ? "حدث خطأ أثناء إنشاء عرض السعر"
          : "Error generating quote",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            {isRTL ? "إنشاء عرض سعر" : "Generate Quote"}
          </DialogTitle>
          <DialogDescription>
            {isRTL
              ? "أدخل بياناتك لتحميل عرض سعر مفصل بصيغة PDF"
              : "Enter your details to download a detailed PDF quote"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Customer Name */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              {isRTL ? "الاسم الكامل" : "Full Name"} *
            </Label>
            <Input
              placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              {isRTL ? "رقم الهاتف" : "Phone Number"} *
            </Label>
            <Input
              type="tel"
              placeholder={isRTL ? "مثال: 777800063" : "e.g., 777800063"}
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              dir="ltr"
            />
          </div>

          {/* Address (Optional) */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              {isRTL ? "العنوان (اختياري)" : "Address (Optional)"}
            </Label>
            <Input
              placeholder={isRTL ? "المدينة / المنطقة" : "City / Area"}
              value={customer.address || ""}
              onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Summary */}
          <div className="p-4 rounded-xl bg-muted/50 border border-border/50 space-y-2">
            <h4 className="font-semibold text-sm">
              {isRTL ? "ملخص النظام" : "System Summary"}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {result.panelsCount && result.panelsCount > 0 && (
                <>
                  <span className="text-muted-foreground">
                    {isRTL ? "الألواح:" : "Panels:"}
                  </span>
                  <span className="font-medium">
                    {result.panelsCount} × {result.panel.watt}W
                  </span>
                </>
              )}
              {result.inverterW && result.inverterW > 0 && (
                <>
                  <span className="text-muted-foreground">
                    {isRTL ? "الانفرتر:" : "Inverter:"}
                  </span>
                  <span className="font-medium">{Math.round(result.inverterW)}W</span>
                </>
              )}
              {result.batteriesCount && result.batteriesCount > 0 && (
                <>
                  <span className="text-muted-foreground">
                    {isRTL ? "البطاريات:" : "Batteries:"}
                  </span>
                  <span className="font-medium">
                    {result.batteriesCount} × Pylontech
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onOpenChange(false)}
            disabled={isGenerating}
          >
            {isRTL ? "إلغاء" : "Cancel"}
          </Button>
          <Button
            className="flex-1 bg-gradient-solar text-secondary-foreground hover:opacity-90"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 me-2 animate-spin" />
                {isRTL ? "جاري الإنشاء..." : "Generating..."}
              </>
            ) : (
              <>
                <Download className="h-4 w-4 me-2" />
                {isRTL ? "تحميل PDF" : "Download PDF"}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
