// src/lib/solarSizingEngine.ts
// Solar Sizing Engine - Adapted from WordPress plugin

export type SystemType = "home" | "commercial" | "industrial" | "agricultural";

export type ElectricInfoMethod =
  | "invoice" // حسب معلومات فاتورة الكهرباء
  | "consumption"; // حسب معلومات التيار الكهربائي

export type YesNo = "yes" | "no";

export type CommercialElectricType = "single" | "three"; // فاز / ثلاثة فاز
export type IndustrialCurrentSource = "commercial" | "generator"; // كهرباء تجاري / مولد كهربائي

export type BatteryType = "standard" | "carbon" | "gel" | "lithium";
export type CableType = "copper" | "aluminum";

export interface SolarPanelOption {
  id: string;
  name: { ar: string; en: string };
  watt: number;
  price?: number;
}

export interface EngineOptions {
  compatMode?: boolean;
  defaultSunHours?: number; // Default 5
  batteryUnitKwh?: number; // Default 4.8 kWh (Pylontech US5000)
}

const DEFAULT_OPTS: Required<EngineOptions> = {
  compatMode: true,
  defaultSunHours: 5,
  batteryUnitKwh: 4.8,
};

function num(x: unknown, fallback = 0): number {
  const n = typeof x === "number" ? x : Number(x);
  return Number.isFinite(n) ? n : fallback;
}

function ceil(n: number) {
  return Math.ceil(n);
}

function round(n: number) {
  return Math.round(n);
}

/** Convert HH:MM to minutes */
function timeToMin(t: string): number {
  const m = /^(\d{1,2}):(\d{2})$/.exec((t || "").trim());
  if (!m) return 0;
  const hh = Math.max(0, Math.min(23, Number(m[1])));
  const mm = Math.max(0, Math.min(59, Number(m[2])));
  return hh * 60 + mm;
}

/**
 * Duration between two times (in hours) with midnight crossing support
 */
function durationHours(from: string, to: string): number {
  const a = timeToMin(from);
  const b = timeToMin(to);
  const minutes = b >= a ? b - a : 24 * 60 - a + b;
  return minutes / 60;
}

/**
 * Solar overlap hours between [start,end] and solar window [08:00,16:00]
 * يحسب ساعات الشمس الفعلية (من 8 صباحاً إلى 4 مساءً)
 */
function solarOverlapHours(from: string, to: string): number {
  const a = timeToMin(from);
  const b = timeToMin(to);
  const spans: Array<[number, number]> =
    b >= a ? [[a, b]] : [[a, 24 * 60], [0, b]];

  const SOL_A = timeToMin("08:00");
  const SOL_B = timeToMin("16:00");

  let overlap = 0;
  for (const [s, e] of spans) {
    const x = Math.max(s, SOL_A);
    const y = Math.min(e, SOL_B);
    if (y > x) overlap += (y - x) / 60;
  }
  return overlap;
}

/**
 * Night hours (hours outside solar window)
 * ساعات الليل = إجمالي الساعات - ساعات الشمس
 */
function nightHours(from: string, to: string): number {
  const total = durationHours(from, to);
  const solar = solarOverlapHours(from, to);
  const night = total - solar;
  return night > 0 ? night : 0;
}

/**
 * Calculate kWh/day based on method
 * حساب الاستهلاك اليومي بالكيلو واط
 */
function kiloInDayByMethod(input: {
  method: ElectricInfoMethod;
  invoiceKiloReading?: number;
  invoiceTotalDays: number;
  totalInvoicePrice?: number;
  kiloPrice?: number;
}): number {
  const days = Math.max(1, num(input.invoiceTotalDays, 1));
  const inv = num(input.invoiceKiloReading, 0);
  const totalPrice = num(input.totalInvoicePrice, 0);
  const kiloPrice = num(input.kiloPrice, 0);

  // من الفاتورة: (إجمالي السعر / سعر الكيلو) / عدد الأيام
  if (input.method === "invoice") {
    return kiloPrice > 0 ? (totalPrice / kiloPrice) / days : 0;
  }

  // من قراءة العداد: قراءة الكيلو / عدد الأيام
  return inv / days;
}

/* =========================
   Pump Data for Agricultural
   بيانات المضخات للنظام الزراعي
========================= */

interface PumpData {
  production: number; // الإنتاج بالبوصة
  ability: number;    // القدرة (المراحل)
  consumption: number; // الاستهلاك بالواط
}

// بيانات المضخات حسب البوصة والعمق
const PUMP_DATA: PumpData[] = [
  { production: 1, ability: 10, consumption: 370 },
  { production: 1.5, ability: 12, consumption: 550 },
  { production: 2, ability: 14, consumption: 750 },
  { production: 2.5, ability: 16, consumption: 1100 },
  { production: 3, ability: 18, consumption: 1500 },
  { production: 4, ability: 22, consumption: 2200 },
  { production: 5, ability: 26, consumption: 3000 },
];

function findPumpData(requiredInch: number): PumpData {
  const found = PUMP_DATA.find(p => p.production === requiredInch);
  return found || PUMP_DATA[2]; // Default to 2 inch
}

/* =========================
   Results Interface
========================= */

export interface BaseResult {
  systemType: SystemType;
  panel: { id: string; name: { ar: string; en: string }; watt: number };
  notes: { ar: string; en: string }[];
  // General values
  kiloInDay?: number;     // kWh/day
  kiloInHour?: number;    // kW (approx)
  solarHours?: number;
  nightHours?: number;
  totalHours?: number;
  // Main outputs
  systemKw?: number;      // kW (approx)
  inverterW?: number;     // W
  panelsCount?: number;
  batteryKwhNeeded?: number;
  batteriesCount?: number;
  // Industrial extras
  industrial?: {
    groups20?: number;
    finalPanelsRoundedTo20?: number;
  };
  // Agricultural extras
  agricultural?: {
    pumpStages?: number;
    pumpConsumptionKw?: number;
    groups15?: number;
    finalPanelsRoundedTo15?: number;
    combinerBoxes?: number;
    solarCableLengthM?: number;
    pumpCableLengthM?: number;
  };
}

export interface HomeInput {
  type: "home";
  method: ElectricInfoMethod;
  invoiceKiloReading?: number;
  invoiceTotalDays: number;
  totalInvoicePrice?: number;
  kiloPrice?: number;
  batteryType: BatteryType;
  panel: SolarPanelOption;
}

export interface CommercialInput {
  type: "commercial";
  method: ElectricInfoMethod;
  electricType: CommercialElectricType;
  usesBattery: YesNo;
  workingStartTime: string; // HH:MM
  workingEndTime: string;   // HH:MM
  invoiceKiloReading?: number;
  invoiceTotalDays: number;
  totalInvoicePrice?: number;
  kiloPrice?: number;
  batteryType: BatteryType;
  panel: SolarPanelOption;
}

export interface IndustrialInput {
  type: "industrial";
  electricCurrentSource: IndustrialCurrentSource;
  workingHours: number;
  invoiceKiloReading?: number;
  invoiceTotalDays?: number;
  dieselQuantity?: number; // liters/day
  panel: SolarPanelOption;
}

export interface AgriculturalInput {
  type: "agricultural";
  pirDepth: number;           // Well depth (m) عمق البئر
  requiredInch: number;       // Inch size البوصة المطلوبة
  cableType: CableType;
  panel: SolarPanelOption;
}

export type AnyInput = HomeInput | CommercialInput | IndustrialInput | AgriculturalInput;

export function calculateSizing(input: AnyInput, options?: EngineOptions): BaseResult {
  const opts = { ...DEFAULT_OPTS, ...(options || {}) };
  const panelW = Math.max(1, num(input.panel?.watt, 580));

  const base: BaseResult = {
    systemType: input.type,
    panel: { id: input.panel.id, name: input.panel.name, watt: panelW },
    notes: [],
  };

  /* =========================
     HOME SYSTEM - النظام السكني
     المعادلة: (kWh/day × 1.3) ÷ 5 = kW الألواح
     البطاريات: kWh/day × 0.75
  ========================= */
  if (input.type === "home") {
    const kiloInDay = kiloInDayByMethod({
      method: input.method,
      invoiceKiloReading: input.invoiceKiloReading,
      invoiceTotalDays: input.invoiceTotalDays,
      totalInvoicePrice: input.totalInvoicePrice,
      kiloPrice: input.kiloPrice,
    });

    const kiloFinal = kiloInDay;
    // kW = (kWh/day × 1.3) ÷ ساعات الشمس
    const solarPanelQuantityKw = (kiloFinal * 1.3) / opts.defaultSunHours;
    // عدد الألواح = (kW × 1000) ÷ قدرة اللوح
    const panels = ceil((solarPanelQuantityKw * 1000) / panelW);
    // الانفرتر = (kW + 0.2) × 1000
    const inverterW = round((solarPanelQuantityKw + 0.2) * 1000);

    // البطاريات = 75% من الاستهلاك اليومي
    const batteryKwhNeeded = kiloFinal * 0.75;
    const batteries = ceil(batteryKwhNeeded / opts.batteryUnitKwh);

    return {
      ...base,
      kiloInDay,
      systemKw: solarPanelQuantityKw,
      inverterW,
      panelsCount: panels,
      batteryKwhNeeded,
      batteriesCount: batteries,
      notes: [
        {
          ar: `الألواح = (${kiloFinal.toFixed(1)} × 1.3) ÷ ${opts.defaultSunHours} = ${solarPanelQuantityKw.toFixed(2)} kW`,
          en: `Panels = (${kiloFinal.toFixed(1)} × 1.3) ÷ ${opts.defaultSunHours} = ${solarPanelQuantityKw.toFixed(2)} kW`
        },
        {
          ar: `البطاريات = ${kiloFinal.toFixed(1)} × 0.75 = ${batteryKwhNeeded.toFixed(2)} kWh`,
          en: `Batteries = ${kiloFinal.toFixed(1)} × 0.75 = ${batteryKwhNeeded.toFixed(2)} kWh`
        },
      ],
    };
  }

  /* =========================
     COMMERCIAL SYSTEM - النظام التجاري
     بدون بطاريات: kW = kWh/hour × 1.3
     مع بطاريات: kW = (kWh/day × 1.3) ÷ 5
  ========================= */
  if (input.type === "commercial") {
    const total = Math.max(0.01, durationHours(input.workingStartTime, input.workingEndTime));
    const solarH = solarOverlapHours(input.workingStartTime, input.workingEndTime);
    const nightH = nightHours(input.workingStartTime, input.workingEndTime);

    const kiloInDay = kiloInDayByMethod({
      method: input.method,
      invoiceKiloReading: input.invoiceKiloReading,
      invoiceTotalDays: input.invoiceTotalDays,
      totalInvoicePrice: input.totalInvoicePrice,
      kiloPrice: input.kiloPrice,
    });

    const kiloInHour = kiloInDay / total;

    // بدون بطاريات
    if (input.usesBattery === "no") {
      const kiloFinal = kiloInHour;
      // kW = kWh/hour × 1.3
      const systemKw = kiloFinal * 1.3;
      const panels = round((systemKw * 1000) / panelW);

      let inverterW = systemKw * 1000;
      // إذا لا يوجد ساعات شمس، الانفرتر = kWh/hour × 1000
      if (solarH === 0) inverterW = kiloInHour * 1000;

      return {
        ...base,
        totalHours: total,
        solarHours: solarH,
        nightHours: nightH,
        kiloInDay,
        kiloInHour,
        systemKw,
        inverterW: round(inverterW),
        panelsCount: panels,
        notes: [
          {
            ar: `kW = ${kiloFinal.toFixed(2)} × 1.3 = ${systemKw.toFixed(2)}`,
            en: `kW = ${kiloFinal.toFixed(2)} × 1.3 = ${systemKw.toFixed(2)}`
          },
        ],
      };
    }

    // مع بطاريات
    // kW الألواح = (kWh/day × 1.3) ÷ 5
    const systemKw = (kiloInDay * 1.3) / opts.defaultSunHours;
    const panels = round((systemKw * 1000) / panelW);

    let inverterW = systemKw * 1000;
    if (solarH === 0) inverterW = kiloInHour * 1000;

    // طاقة الليل = ساعات الليل × kWh/hour
    const nightKwh = nightH * kiloInHour;
    const batteryKwhNeeded = nightKwh;
    const batteries = ceil(batteryKwhNeeded / opts.batteryUnitKwh);

    return {
      ...base,
      totalHours: total,
      solarHours: solarH,
      nightHours: nightH,
      kiloInDay,
      kiloInHour,
      systemKw,
      inverterW: round(inverterW),
      panelsCount: panels,
      batteryKwhNeeded,
      batteriesCount: batteries,
      notes: [
        {
          ar: `الألواح = (${kiloInDay.toFixed(1)} × 1.3) ÷ ${opts.defaultSunHours} = ${systemKw.toFixed(2)} kW`,
          en: `Panels = (${kiloInDay.toFixed(1)} × 1.3) ÷ ${opts.defaultSunHours} = ${systemKw.toFixed(2)} kW`
        },
        {
          ar: `البطاريات = ${nightH.toFixed(1)} × ${kiloInHour.toFixed(2)} = ${nightKwh.toFixed(2)} kWh`,
          en: `Batteries = ${nightH.toFixed(1)} × ${kiloInHour.toFixed(2)} = ${nightKwh.toFixed(2)} kWh`
        },
      ],
    };
  }

  /* =========================
     INDUSTRIAL SYSTEM - النظام الصناعي
     من الكهرباء: kW = (قراءة العداد ÷ الأيام) ÷ ساعات التشغيل
     من المولد: kW = (لترات الديزل × 3.2) ÷ ساعات التشغيل
     الألواح = kW × 1.2 × 1000 ÷ قدرة اللوح
     تجميع في مجموعات 20
  ========================= */
  if (input.type === "industrial") {
    const workingHours = Math.max(0.25, num(input.workingHours, 1));
    let kiloInHour = 0;

    if (input.electricCurrentSource === "commercial") {
      const inv = num(input.invoiceKiloReading, 0);
      const days = Math.max(1, num(input.invoiceTotalDays, 1));
      // kW/hour = (قراءة العداد ÷ الأيام) ÷ ساعات التشغيل
      kiloInHour = round((inv / days) / workingHours);
    } else {
      const diesel = num(input.dieselQuantity, 0);
      // kW/hour = (لترات الديزل × 3.2) ÷ ساعات التشغيل
      kiloInHour = round((diesel * 3.2) / workingHours);
    }

    // عدد الألواح = (kW × 1.2 × 1000) ÷ قدرة اللوح
    const panelsRaw = round(((kiloInHour * 1.2) * 1000) / panelW);
    
    // تجميع في مجموعات 20 لوح
    const groups20 = panelsRaw < 20 ? 1 : round(panelsRaw / 20);
    const finalPanels = panelsRaw < 20 ? panelsRaw : groups20 * 20;
    
    const inverterW = round(kiloInHour * 1000);

    return {
      ...base,
      kiloInHour,
      panelsCount: finalPanels,
      inverterW,
      systemKw: kiloInHour,
      industrial: {
        groups20,
        finalPanelsRoundedTo20: finalPanels,
      },
      notes: [
        {
          ar: `الاستهلاك = ${kiloInHour} kW/hour`,
          en: `Consumption = ${kiloInHour} kW/hour`
        },
        {
          ar: `الألواح = (${kiloInHour} × 1.2 × 1000) ÷ ${panelW} = ${panelsRaw} → ${finalPanels} (مجموعات ${groups20})`,
          en: `Panels = (${kiloInHour} × 1.2 × 1000) ÷ ${panelW} = ${panelsRaw} → ${finalPanels} (${groups20} groups)`
        },
      ],
    };
  }

  /* =========================
     AGRICULTURAL SYSTEM - النظام الزراعي
     المراحل = العمق ÷ قدرة المضخة
     استهلاك المضخة kW = (المراحل × استهلاك المضخة بالواط) ÷ 1000
     الألواح = (kW × 1.4 × 1000) ÷ قدرة اللوح
     تجميع في مجموعات 15 إذا >= 15 kW
  ========================= */
  {
    const pirDepth = Math.max(0, num(input.pirDepth, 0));
    const requiredInch = Math.max(0, num(input.requiredInch, 0));

    // إيجاد بيانات المضخة حسب البوصة المطلوبة
    const pumpData = findPumpData(requiredInch);
    
    // عدد المراحل = العمق ÷ قدرة المضخة
    const pumpStages = round(pirDepth / pumpData.ability);
    
    // استهلاك المضخة kW = (المراحل × استهلاك المضخة) ÷ 1000
    const pumpConsumptionKw = round((pumpStages * pumpData.consumption) / 1000);

    // عدد الألواح = (kW × 1.4 × 1000) ÷ قدرة اللوح
    const panelsRaw = round(((pumpConsumptionKw * 1.4) * 1000) / panelW);

    let groups15 = 1;
    let finalPanels = panelsRaw;

    // تجميع في مجموعات 15 إذا استهلاك المضخة >= 15 kW
    if (pumpConsumptionKw >= 15) {
      groups15 = round(panelsRaw / 15);
      finalPanels = groups15 * 15;
    }

    const solarCableLengthM = groups15 * 30;
    const pumpCableLengthM = Math.round(pirDepth + 20);
    const combinerBoxes = Math.round(groups15 + 2);

    return {
      ...base,
      panelsCount: finalPanels,
      systemKw: pumpConsumptionKw,
      agricultural: {
        pumpStages,
        pumpConsumptionKw,
        groups15,
        finalPanelsRoundedTo15: finalPanels,
        combinerBoxes,
        solarCableLengthM,
        pumpCableLengthM,
      },
      notes: [
        {
          ar: `المراحل = ${pirDepth} ÷ ${pumpData.ability} = ${pumpStages}`,
          en: `Stages = ${pirDepth} ÷ ${pumpData.ability} = ${pumpStages}`
        },
        {
          ar: `استهلاك المضخة = (${pumpStages} × ${pumpData.consumption}) ÷ 1000 = ${pumpConsumptionKw} kW`,
          en: `Pump consumption = (${pumpStages} × ${pumpData.consumption}) ÷ 1000 = ${pumpConsumptionKw} kW`
        },
        {
          ar: `الألواح = (${pumpConsumptionKw} × 1.4 × 1000) ÷ ${panelW} = ${finalPanels}`,
          en: `Panels = (${pumpConsumptionKw} × 1.4 × 1000) ÷ ${panelW} = ${finalPanels}`
        },
      ],
    };
  }
}

// Default Panel Options - خيارات الألواح
export const PANEL_OPTIONS: SolarPanelOption[] = [
  { id: "trina-685", name: { ar: "لوح Trina 685W N-Type", en: "Trina 685W N-Type" }, watt: 685 },
  { id: "trina-670", name: { ar: "لوح Trina 670W", en: "Trina 670W" }, watt: 670 },
  { id: "trina-580", name: { ar: "لوح Trina 580W", en: "Trina 580W" }, watt: 580 },
  { id: "p550", name: { ar: "لوح 550W", en: "550W Panel" }, watt: 550 },
  { id: "p450", name: { ar: "لوح 450W", en: "450W Panel" }, watt: 450 },
];

// Battery Types - أنواع البطاريات
export const BATTERY_OPTIONS: { id: BatteryType; name: { ar: string; en: string } }[] = [
  { id: "lithium", name: { ar: "ليثيوم (Pylontech)", en: "Lithium (Pylontech)" } },
  { id: "gel", name: { ar: "جل", en: "Gel" } },
  { id: "carbon", name: { ar: "كربون", en: "Carbon" } },
  { id: "standard", name: { ar: "عادي (حمض رصاص)", en: "Standard (Lead Acid)" } },
];

// Inch Options - خيارات البوصة للنظام الزراعي
export const INCH_OPTIONS: { value: number; name: { ar: string; en: string } }[] = [
  { value: 1, name: { ar: "1 إنش", en: "1 inch" } },
  { value: 1.5, name: { ar: "1.5 إنش", en: "1.5 inch" } },
  { value: 2, name: { ar: "2 إنش", en: "2 inch" } },
  { value: 2.5, name: { ar: "2.5 إنش", en: "2.5 inch" } },
  { value: 3, name: { ar: "3 إنش", en: "3 inch" } },
  { value: 4, name: { ar: "4 إنش", en: "4 inch" } },
  { value: 5, name: { ar: "5 إنش", en: "5 inch" } },
];
