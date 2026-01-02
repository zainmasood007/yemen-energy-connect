import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Battery,
  Factory,
  Home,
  Leaf,
  Sun,
  Zap,
  Calculator as CalcIcon,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Info,
  Sparkles,
  FileText,
} from "lucide-react";
import {
  calculateSizing,
  PANEL_OPTIONS,
  BATTERY_OPTIONS,
  INCH_OPTIONS,
  type SystemType,
  type ElectricInfoMethod,
  type YesNo,
  type CommercialElectricType,
  type IndustrialCurrentSource,
  type BatteryType,
  type CableType,
} from "@/lib/solarSizingEngine";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import QuoteDialog from "@/components/QuoteDialog";

const systemTypeConfig = {
  home: {
    icon: Home,
    name: { ar: "سكني", en: "Residential" },
    desc: { ar: "منازل وشقق", en: "Homes & Apartments" },
  },
  commercial: {
    icon: Zap,
    name: { ar: "تجاري", en: "Commercial" },
    desc: { ar: "محلات ومكاتب", en: "Shops & Offices" },
  },
  industrial: {
    icon: Factory,
    name: { ar: "صناعي", en: "Industrial" },
    desc: { ar: "مصانع ومنشآت", en: "Factories & Facilities" },
  },
  agricultural: {
    icon: Leaf,
    name: { ar: "زراعي", en: "Agricultural" },
    desc: { ar: "مزارع وآبار", en: "Farms & Wells" },
  },
};

export default function Calculator() {
  const { lang, isRTL } = useLanguage();

  // System Type
  const [systemType, setSystemType] = useState<SystemType>("home");

  // Common
  const [panelId, setPanelId] = useState("trina-685");
  const [sunHours, setSunHours] = useState(5);

  // Home
  const [homeMethod, setHomeMethod] = useState<ElectricInfoMethod>("invoice");
  const [homeInvoiceDays, setHomeInvoiceDays] = useState(30);
  const [homeInvoiceKilo, setHomeInvoiceKilo] = useState(0);
  const [homeTotalPrice, setHomeTotalPrice] = useState(20000);
  const [homeKiloPrice, setHomeKiloPrice] = useState(300);
  const [homeBatteryType, setHomeBatteryType] = useState<BatteryType>("lithium");

  // Commercial
  const [comMethod, setComMethod] = useState<ElectricInfoMethod>("invoice");
  const [comElectricType, setComElectricType] = useState<CommercialElectricType>("single");
  const [comUsesBattery, setComUsesBattery] = useState<YesNo>("yes");
  const [comStart, setComStart] = useState("08:00");
  const [comEnd, setComEnd] = useState("18:00");
  const [comDays, setComDays] = useState(30);
  const [comInvoiceKilo, setComInvoiceKilo] = useState(0);
  const [comTotalPrice, setComTotalPrice] = useState(30000);
  const [comKiloPrice, setComKiloPrice] = useState(300);
  const [comBatteryType, setComBatteryType] = useState<BatteryType>("lithium");

  // Industrial
  const [indSource, setIndSource] = useState<IndustrialCurrentSource>("commercial");
  const [indWorkingHours, setIndWorkingHours] = useState(8);
  const [indDays, setIndDays] = useState(30);
  const [indInvoiceKilo, setIndInvoiceKilo] = useState(0);
  const [indDiesel, setIndDiesel] = useState(0);

  // Agricultural
  const [agrDepth, setAgrDepth] = useState(80);
  const [agrInch, setAgrInch] = useState(2);
  const [agrCableType, setAgrCableType] = useState<CableType>("copper");

  // Quote Dialog
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  const panel = useMemo(
    () => PANEL_OPTIONS.find((p) => p.id === panelId) ?? PANEL_OPTIONS[0],
    [panelId]
  );

  const result = useMemo(() => {
    if (systemType === "home") {
      return calculateSizing(
        {
          type: "home",
          method: homeMethod,
          invoiceTotalDays: homeInvoiceDays,
          invoiceKiloReading: homeInvoiceKilo,
          totalInvoicePrice: homeTotalPrice,
          kiloPrice: homeKiloPrice,
          batteryType: homeBatteryType,
          panel,
        },
        { defaultSunHours: sunHours }
      );
    }

    if (systemType === "commercial") {
      return calculateSizing(
        {
          type: "commercial",
          method: comMethod,
          electricType: comElectricType,
          usesBattery: comUsesBattery,
          workingStartTime: comStart,
          workingEndTime: comEnd,
          invoiceTotalDays: comDays,
          invoiceKiloReading: comInvoiceKilo,
          totalInvoicePrice: comTotalPrice,
          kiloPrice: comKiloPrice,
          batteryType: comBatteryType,
          panel,
        },
        { defaultSunHours: sunHours }
      );
    }

    if (systemType === "industrial") {
      return calculateSizing(
        {
          type: "industrial",
          electricCurrentSource: indSource,
          workingHours: indWorkingHours,
          invoiceKiloReading: indInvoiceKilo,
          invoiceTotalDays: indDays,
          dieselQuantity: indDiesel,
          panel,
        },
        {}
      );
    }

    return calculateSizing(
      {
        type: "agricultural",
        pirDepth: agrDepth,
        requiredInch: agrInch,
        cableType: agrCableType,
        panel,
      },
      {}
    );
  }, [
    systemType,
    panel,
    sunHours,
    homeMethod,
    homeInvoiceDays,
    homeInvoiceKilo,
    homeTotalPrice,
    homeKiloPrice,
    homeBatteryType,
    comMethod,
    comElectricType,
    comUsesBattery,
    comStart,
    comEnd,
    comDays,
    comInvoiceKilo,
    comTotalPrice,
    comKiloPrice,
    comBatteryType,
    indSource,
    indWorkingHours,
    indDays,
    indInvoiceKilo,
    indDiesel,
    agrDepth,
    agrInch,
    agrCableType,
  ]);

  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: isRTL
      ? "حاسبة تحجيم أنظمة الطاقة الشمسية"
      : "Solar System Sizing Calculator",
    description: isRTL
      ? "أداة مجانية لحساب حجم نظام الطاقة الشمسية المناسب لمنزلك أو مشروعك في اليمن"
      : "Free tool to calculate the right solar system size for your home or project in Yemen",
    url: "https://alqatta.com/calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "YER",
    },
    provider: {
      "@type": "Organization",
      name: isRTL ? "القطاع لأنظمة الطاقة الشمسية" : "Al-Qatta Solar Energy Systems",
    },
  };

  const baseUrl = 'https://alqatta.com';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isRTL ? "الرئيسية" : "Home", item: `${baseUrl}${isRTL ? '' : '/en'}` },
      { "@type": "ListItem", position: 2, name: isRTL ? "الحاسبة الشمسية" : "Solar Calculator", item: `${baseUrl}${isRTL ? '/calculator' : '/en/calculator'}` },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>
          {isRTL
            ? "حاسبة الطاقة الشمسية - احسب حجم النظام المناسب | القطاع"
            : "Solar Calculator - Calculate Your System Size | Al-Qatta"}
        </title>
        <meta
          name="description"
          content={
            isRTL
              ? "حاسبة مجانية لتحديد حجم نظام الطاقة الشمسية المناسب لمنزلك أو مشروعك في اليمن. احسب عدد الألواح والبطاريات وقدرة الانفرتر بناءً على استهلاكك."
              : "Free calculator to determine the right solar system size for your home or project in Yemen. Calculate panels, batteries and inverter based on your consumption."
          }
        />
        <link rel="canonical" href="https://alqatta.com/calculator" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <PageHero
        badge={isRTL ? "أداة مجانية" : "Free Tool"}
        title={isRTL ? "حاسبة الطاقة الشمسية" : "Solar Calculator"}
        subtitle={
          isRTL
            ? "أداة ذكية لحساب حجم النظام الشمسي المناسب لاحتياجاتك"
            : "Smart tool to calculate the right solar system for your needs"
        }
      />

      <section className="py-12 md:py-20">
        <div className="container">
          {/* System Type Selection */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {(Object.keys(systemTypeConfig) as SystemType[]).map((type) => {
                const config = systemTypeConfig[type];
                const Icon = config.icon;
                const isActive = systemType === type;

                return (
                  <button
                    key={type}
                    onClick={() => setSystemType(type)}
                    className={`p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 text-start ${
                      isActive
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-xl flex items-center justify-center mb-3 ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg">{config.name[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{config.desc[lang]}</p>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs Card */}
            <ScrollReveal delay={0.1}>
              <Card className="border-border/50 shadow-lg">
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="flex items-center gap-2">
                    <CalcIcon className="h-5 w-5 text-primary" />
                    {isRTL ? "بيانات الاستهلاك" : "Consumption Data"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Panel Selection */}
                  <div className="space-y-2">
                    <Label>{isRTL ? "نوع اللوح الشمسي" : "Solar Panel Type"}</Label>
                    <Select value={panelId} onValueChange={setPanelId}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PANEL_OPTIONS.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name[lang]} ({p.watt}W)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sun Hours Slider */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-secondary" />
                      {isRTL ? `ساعات الشمس: ${sunHours}` : `Sun Hours: ${sunHours}`}
                    </Label>
                    <Slider
                      value={[sunHours]}
                      onValueChange={(v) => setSunHours(v[0])}
                      min={3}
                      max={7}
                      step={0.5}
                      className="py-2"
                    />
                  </div>

                  {/* Home Inputs */}
                  {systemType === "home" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "طريقة الحساب" : "Calculation Method"}</Label>
                          <Select value={homeMethod} onValueChange={(v) => setHomeMethod(v as ElectricInfoMethod)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="invoice">{isRTL ? "من الفاتورة" : "From Invoice"}</SelectItem>
                              <SelectItem value="consumption">{isRTL ? "من الاستهلاك" : "From Consumption"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? "نوع البطارية" : "Battery Type"}</Label>
                          <Select value={homeBatteryType} onValueChange={(v) => setHomeBatteryType(v as BatteryType)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {BATTERY_OPTIONS.map((b) => (
                                <SelectItem key={b.id} value={b.id}>
                                  {b.name[lang]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "أيام الفاتورة" : "Invoice Days"}</Label>
                          <Input
                            type="number"
                            value={homeInvoiceDays}
                            onChange={(e) => setHomeInvoiceDays(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? "قراءة الكيلو (اختياري)" : "kWh Reading (optional)"}</Label>
                          <Input
                            type="number"
                            value={homeInvoiceKilo || ""}
                            onChange={(e) => setHomeInvoiceKilo(Number(e.target.value))}
                            placeholder="0"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "إجمالي الفاتورة (ر.ي)" : "Total Invoice (YER)"}</Label>
                          <Input
                            type="number"
                            value={homeTotalPrice}
                            onChange={(e) => setHomeTotalPrice(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? "سعر الكيلو (ر.ي)" : "Price per kWh (YER)"}</Label>
                          <Input
                            type="number"
                            value={homeKiloPrice}
                            onChange={(e) => setHomeKiloPrice(Number(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Commercial Inputs */}
                  {systemType === "commercial" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "طريقة الحساب" : "Calculation Method"}</Label>
                          <Select value={comMethod} onValueChange={(v) => setComMethod(v as ElectricInfoMethod)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="invoice">{isRTL ? "من الفاتورة" : "From Invoice"}</SelectItem>
                              <SelectItem value="consumption">{isRTL ? "من الاستهلاك" : "From Consumption"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? "نوع الكهرباء" : "Electric Type"}</Label>
                          <Select value={comElectricType} onValueChange={(v) => setComElectricType(v as CommercialElectricType)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single">{isRTL ? "فاز واحد" : "Single Phase"}</SelectItem>
                              <SelectItem value="three">{isRTL ? "ثلاثة فاز" : "Three Phase"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>{isRTL ? "استخدام بطاريات" : "Use Batteries"}</Label>
                        <Select value={comUsesBattery} onValueChange={(v) => setComUsesBattery(v as YesNo)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">{isRTL ? "نعم" : "Yes"}</SelectItem>
                            <SelectItem value="no">{isRTL ? "لا" : "No"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Battery Type - Only show when batteries are selected */}
                      {comUsesBattery === "yes" && (
                        <div className="space-y-2">
                          <Label>{isRTL ? "نوع البطارية" : "Battery Type"}</Label>
                          <Select value={comBatteryType} onValueChange={(v) => setComBatteryType(v as BatteryType)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {BATTERY_OPTIONS.map((b) => (
                                <SelectItem key={b.id} value={b.id}>
                                  {b.name[lang]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "بداية العمل" : "Work Start"}</Label>
                          <Input type="time" value={comStart} onChange={(e) => setComStart(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? "نهاية العمل" : "Work End"}</Label>
                          <Input type="time" value={comEnd} onChange={(e) => setComEnd(e.target.value)} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "إجمالي الفاتورة (ر.ي)" : "Total Invoice (YER)"}</Label>
                          <Input
                            type="number"
                            value={comTotalPrice}
                            onChange={(e) => setComTotalPrice(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? "سعر الكيلو (ر.ي)" : "Price per kWh (YER)"}</Label>
                          <Input
                            type="number"
                            value={comKiloPrice}
                            onChange={(e) => setComKiloPrice(Number(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Industrial Inputs */}
                  {systemType === "industrial" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>{isRTL ? "مصدر الكهرباء" : "Power Source"}</Label>
                        <Select value={indSource} onValueChange={(v) => setIndSource(v as IndustrialCurrentSource)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="commercial">{isRTL ? "كهرباء تجاري" : "Commercial Power"}</SelectItem>
                            <SelectItem value="generator">{isRTL ? "مولد كهربائي" : "Generator"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label>
                          {isRTL ? `ساعات التشغيل: ${indWorkingHours}` : `Working Hours: ${indWorkingHours}`}
                        </Label>
                        <Slider
                          value={[indWorkingHours]}
                          onValueChange={(v) => setIndWorkingHours(v[0])}
                          min={1}
                          max={24}
                          step={1}
                        />
                      </div>

                      {indSource === "commercial" ? (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>{isRTL ? "أيام الفاتورة" : "Invoice Days"}</Label>
                            <Input
                              type="number"
                              value={indDays}
                              onChange={(e) => setIndDays(Number(e.target.value))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>{isRTL ? "قراءة الكيلو" : "kWh Reading"}</Label>
                            <Input
                              type="number"
                              value={indInvoiceKilo}
                              onChange={(e) => setIndInvoiceKilo(Number(e.target.value))}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Label>{isRTL ? "كمية الديزل يوميًا (لتر)" : "Daily Diesel (liters)"}</Label>
                          <Input
                            type="number"
                            value={indDiesel}
                            onChange={(e) => setIndDiesel(Number(e.target.value))}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Agricultural Inputs */}
                  {systemType === "agricultural" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "عمق البئر (متر)" : "Well Depth (m)"}</Label>
                          <Input
                            type="number"
                            value={agrDepth}
                            onChange={(e) => setAgrDepth(Number(e.target.value))}
                            min={10}
                            max={500}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? "البوصة المطلوبة" : "Required Inch"}</Label>
                          <Select value={String(agrInch)} onValueChange={(v) => setAgrInch(Number(v))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {INCH_OPTIONS.map((opt) => (
                                <SelectItem key={opt.value} value={String(opt.value)}>
                                  {opt.name[lang]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>{isRTL ? "نوع الكابل" : "Cable Type"}</Label>
                        <Select value={agrCableType} onValueChange={(v) => setAgrCableType(v as CableType)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="copper">{isRTL ? "نحاسي" : "Copper"}</SelectItem>
                            <SelectItem value="aluminum">{isRTL ? "ألمنيوم" : "Aluminum"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Info Note */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/50 flex gap-3">
                    <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {isRTL
                        ? "هذه الحاسبة تقدم تقديرات أولية. للحصول على تصميم دقيق، تواصل مع فريقنا الهندسي."
                        : "This calculator provides initial estimates. For accurate design, contact our engineering team."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Results Card */}
            <ScrollReveal delay={0.2}>
              <Card className="border-primary/20 shadow-lg shadow-primary/5 sticky top-24">
                <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    {isRTL ? "النتائج المقترحة" : "Suggested Results"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {/* Main Results */}
                  <ResultRow
                    icon={<Sun className="h-4 w-4" />}
                    label={isRTL ? "اللوح الشمسي" : "Solar Panel"}
                    value={`${result.panel.name[lang]} (${result.panel.watt}W)`}
                  />

                  {typeof result.kiloInDay === "number" && result.kiloInDay > 0 && (
                    <ResultRow
                      label={isRTL ? "الاستهلاك اليومي" : "Daily Consumption"}
                      value={`${result.kiloInDay.toFixed(1)} kWh/day`}
                    />
                  )}

                  {typeof result.systemKw === "number" && result.systemKw > 0 && (
                    <ResultRow
                      icon={<Zap className="h-4 w-4" />}
                      label={isRTL ? "حجم النظام" : "System Size"}
                      value={`${result.systemKw.toFixed(2)} kW`}
                      highlight
                    />
                  )}

                  {typeof result.panelsCount === "number" && result.panelsCount > 0 && (
                    <ResultRow
                      label={isRTL ? "عدد الألواح" : "Panels Count"}
                      value={`${result.panelsCount} ${isRTL ? "لوح" : "panels"}`}
                      highlight
                    />
                  )}

                  {typeof result.inverterW === "number" && result.inverterW > 0 && (
                    <ResultRow
                      label={isRTL ? "قدرة الانفرتر" : "Inverter Power"}
                      value={`${Math.round(result.inverterW)} W`}
                    />
                  )}

                  {typeof result.batteriesCount === "number" && result.batteriesCount > 0 && (
                    <ResultRow
                      icon={<Battery className="h-4 w-4" />}
                      label={isRTL ? "عدد البطاريات" : "Batteries Count"}
                      value={`${result.batteriesCount} ${isRTL ? "بطارية" : "batteries"}`}
                      highlight
                    />
                  )}

                  {typeof result.batteryKwhNeeded === "number" && result.batteryKwhNeeded > 0 && (
                    <ResultRow
                      label={isRTL ? "سعة التخزين المطلوبة" : "Storage Capacity"}
                      value={`${result.batteryKwhNeeded.toFixed(1)} kWh`}
                    />
                  )}

                  {/* Industrial Extra */}
                  {result.industrial && (
                    <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border/50 space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Factory className="h-4 w-4 text-primary" />
                        {isRTL ? "تفاصيل صناعية" : "Industrial Details"}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">{isRTL ? "مجموعات (20 لوح):" : "Groups (20 panels):"}</span>
                        <span className="font-medium">{result.industrial.groups20}</span>
                        <span className="text-muted-foreground">{isRTL ? "الألواح النهائية:" : "Final Panels:"}</span>
                        <span className="font-medium">{result.industrial.finalPanelsRoundedTo20}</span>
                      </div>
                    </div>
                  )}

                  {/* Agricultural Extra */}
                  {result.agricultural && (
                    <div className="mt-4 p-4 rounded-xl bg-accent/5 border border-accent/20 space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-accent" />
                        {isRTL ? "تفاصيل زراعية" : "Agricultural Details"}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">{isRTL ? "عدد المراحل:" : "Pump Stages:"}</span>
                        <span className="font-medium">{result.agricultural.pumpStages}</span>
                        <span className="text-muted-foreground">{isRTL ? "استهلاك المضخة:" : "Pump Consumption:"}</span>
                        <span className="font-medium">{result.agricultural.pumpConsumptionKw} kW</span>
                        <span className="text-muted-foreground">{isRTL ? "مجموعات الألواح:" : "Panel Groups:"}</span>
                        <span className="font-medium">{result.agricultural.groups15}</span>
                        <span className="text-muted-foreground">{isRTL ? "طول كابل الألواح:" : "Solar Cable:"}</span>
                        <span className="font-medium">{result.agricultural.solarCableLengthM} m</span>
                        <span className="text-muted-foreground">{isRTL ? "طول كابل المضخة:" : "Pump Cable:"}</span>
                        <span className="font-medium">{result.agricultural.pumpCableLengthM} m</span>
                        <span className="text-muted-foreground">{isRTL ? "Combiner Box:" : "Combiner Box:"}</span>
                        <span className="font-medium">{result.agricultural.combinerBoxes}</span>
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  {result.notes.length > 0 && (
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">{isRTL ? "ملاحظات:" : "Notes:"}</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {result.notes.map((note, idx) => (
                          <li key={idx}>• {note[lang]}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="pt-4 space-y-3">
                    {/* Generate Quote PDF Button */}
                    <Button
                      className="w-full bg-gradient-solar text-secondary-foreground hover:opacity-90"
                      onClick={() => setQuoteDialogOpen(true)}
                    >
                      <FileText className="h-4 w-4 me-2" />
                      {isRTL ? "تحميل عرض سعر PDF" : "Download Quote PDF"}
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full">
                      <a href="https://wa.me/967777800063" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 me-2" />
                        {isRTL ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
                      </a>
                    </Button>
                    
                    <Button asChild variant="ghost" className="w-full">
                      <Link to="/products">
                        {isRTL ? "استكشف منتجاتنا" : "Explore Products"}
                        {isRTL ? <ChevronLeft className="h-4 w-4 ms-2" /> : <ChevronRight className="h-4 w-4 ms-2" />}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Related Links */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 p-8 rounded-3xl bg-muted/30 border border-border/50">
              <h3 className="text-xl font-bold mb-6 text-center">
                {isRTL ? "مقالات ذات صلة" : "Related Articles"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/knowledge/inverter-sizing"
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <h4 className="font-semibold mb-1">
                    {isRTL ? "كيفية حساب حجم الانفرتر" : "How to Size Your Inverter"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? "دليل شامل لاختيار الانفرتر المناسب" : "Complete guide to choosing the right inverter"}
                  </p>
                </Link>
                <Link
                  to="/knowledge/lithium-vs-lead-acid"
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <h4 className="font-semibold mb-1">
                    {isRTL ? "الليثيوم vs الرصاص" : "Lithium vs Lead Acid"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? "مقارنة شاملة بين أنواع البطاريات" : "Comprehensive battery comparison"}
                  </p>
                </Link>
                <Link
                  to="/pricing"
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <h4 className="font-semibold mb-1">
                    {isRTL ? "تكلفة الطاقة الشمسية" : "Solar System Costs"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? "دليل الأسعار التقديرية في اليمن" : "Pricing guide for Yemen"}
                  </p>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* Quote Dialog */}
      <QuoteDialog
        open={quoteDialogOpen}
        onOpenChange={setQuoteDialogOpen}
        result={result}
        systemType={systemType}
      />
    </Layout>
  );
}

// Result Row Component
function ResultRow({
  icon,
  label,
  value,
  highlight,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 p-3 rounded-xl ${
        highlight ? "bg-primary/5 border border-primary/20" : "bg-muted/30"
      }`}
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>
      <span className={`text-sm font-semibold ${highlight ? "text-primary" : ""}`}>{value}</span>
    </div>
  );
}
