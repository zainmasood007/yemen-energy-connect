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
  commercialNightFactor?: number;
  batteryUnitKwh?: number; // Default 4.8 kWh (Pylontech US5000)
}

const DEFAULT_OPTS: Required<EngineOptions> = {
  compatMode: true,
  defaultSunHours: 5,
  commercialNightFactor: 1,
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
 * Example: 20:00 -> 02:00 = 6 hours
 */
function durationHours(from: string, to: string): number {
  const a = timeToMin(from);
  const b = timeToMin(to);
  const minutes = b >= a ? b - a : 24 * 60 - a + b;
  return minutes / 60;
}

/**
 * Solar overlap hours between [start,end] and solar window [08:00,16:00]
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

function nightHours(from: string, to: string): number {
  const total = durationHours(from, to);
  const solar = solarOverlapHours(from, to);
  const night = total - solar;
  return night > 0 ? night : 0;
}

function kiloInDayByMethod(input: {
  method: ElectricInfoMethod;
  invoiceKiloReading?: number;
  invoiceTotalDays: number;
  totalInvoicePrice?: number;
  kiloPrice?: number;
}, compatMode: boolean): number {
  const days = Math.max(1, num(input.invoiceTotalDays, 1));
  const inv = num(input.invoiceKiloReading, 0);
  const totalPrice = num(input.totalInvoicePrice, 0);
  const kiloPrice = num(input.kiloPrice, 0);

  if (input.method === "invoice") {
    return kiloPrice > 0 ? (totalPrice / kiloPrice) / days : 0;
  }

  if (compatMode) {
    if (kiloPrice > 0 && totalPrice > 0) {
      return (totalPrice / kiloPrice) / days;
    }
  }

  return inv / days;
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
  // Agricultural extras
  agricultural?: {
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
  pirDepth: number;           // Well depth (m)
  requiredInch: number;       // Inch size
  cableType: CableType;
  panel: SolarPanelOption;
  pumpConsumptionKilo?: number; // kW (optional)
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

  if (input.type === "home") {
    const kiloInDay = kiloInDayByMethod({
      method: input.method,
      invoiceKiloReading: input.invoiceKiloReading,
      invoiceTotalDays: input.invoiceTotalDays,
      totalInvoicePrice: input.totalInvoicePrice,
      kiloPrice: input.kiloPrice,
    }, opts.compatMode);

    const kiloFinal = kiloInDay;
    const solarPanelQuantityKw = (kiloFinal * 1.3) / opts.defaultSunHours;
    const panels = ceil((solarPanelQuantityKw * 1000) / panelW);
    const inverterW = round((solarPanelQuantityKw + 0.2) * 1000);

    const batteryKwhNeeded = (kiloFinal * 0.75);
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
          ar: "سكني: تم تطبيق (kWh/day × 1.3) ÷ 5 لحساب قدرة الألواح.",
          en: "Residential: Applied (kWh/day × 1.3) ÷ 5 for panel capacity."
        },
        {
          ar: "سكني: بطاريات الليل = 75% من الاستهلاك اليومي.",
          en: "Residential: Night batteries = 75% of daily consumption."
        },
      ],
    };
  }

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
    }, opts.compatMode);

    const kiloInHour = kiloInDay / total;

    if (input.usesBattery === "no") {
      const kiloFinal = kiloInHour;
      const systemKw = kiloFinal * 1.3;
      const panels = round((systemKw * 1000) / panelW);

      let inverterW = systemKw * 1000;
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
            ar: "تجاري بدون بطاريات: kW = (kWh/day ÷ ساعات التشغيل) × 1.3",
            en: "Commercial without batteries: kW = (kWh/day ÷ working hours) × 1.3"
          },
        ],
      };
    }

    // usesBattery === "yes"
    const nightKwh = nightH * kiloInHour * opts.commercialNightFactor;
    const systemKw = (kiloInDay * 1.3) / opts.defaultSunHours;
    const panels = round((systemKw * 1000) / panelW);

    let inverterW = systemKw * 1000;
    if (solarH === 0) inverterW = kiloInHour * 1000;

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
          ar: "تجاري مع بطاريات: kW الألواح = (kWh/day × 1.3) ÷ 5",
          en: "Commercial with batteries: Panel kW = (kWh/day × 1.3) ÷ 5"
        },
        {
          ar: "تجاري مع بطاريات: طاقة الليل = ساعات الليل × kW.",
          en: "Commercial with batteries: Night energy = night hours × kW."
        },
      ],
    };
  }

  if (input.type === "industrial") {
    const workingHours = Math.max(0.25, num(input.workingHours, 1));
    let kiloInHour = 0;

    if (input.electricCurrentSource === "commercial") {
      const inv = num(input.invoiceKiloReading, 0);
      const days = Math.max(1, num(input.invoiceTotalDays, 1));
      kiloInHour = round((inv / days) / workingHours);
    } else {
      const diesel = num(input.dieselQuantity, 0);
      kiloInHour = round((diesel * 3.2) / workingHours);
    }

    const panels = round(((kiloInHour * 1.2) * 1000) / panelW);
    const inverterW = round(kiloInHour * 1000);

    return {
      ...base,
      kiloInHour,
      panelsCount: panels,
      inverterW,
      systemKw: kiloInHour,
      notes: [
        {
          ar: "صناعي: الألواح = (kW × 1.2 × 1000) ÷ قدرة اللوح",
          en: "Industrial: Panels = (kW × 1.2 × 1000) ÷ panel wattage"
        },
      ],
    };
  }

  // agricultural
  {
    const pirDepth = Math.max(0, num(input.pirDepth, 0));
    const requiredInch = Math.max(0, num(input.requiredInch, 0));

    const fallbackPumpConsumptionKilo =
      requiredInch > 0 ? (requiredInch * 0.75) + (pirDepth / 200) : 0;

    const pumpConsumptionKilo = Math.max(0, num(input.pumpConsumptionKilo, fallbackPumpConsumptionKilo));

    const panelsRaw = round(((pumpConsumptionKilo * 1.4) * 1000) / panelW);

    const groups15 = Math.max(1, round(panelsRaw / 15));
    const finalPanelsRoundedTo15 = groups15 * 15;

    const solarCableLengthM = groups15 * 30;
    const pumpCableLengthM = Math.round(pirDepth + 20);
    const combinerBoxes = Math.round(groups15 + 2);

    return {
      ...base,
      panelsCount: finalPanelsRoundedTo15,
      systemKw: pumpConsumptionKilo,
      agricultural: {
        groups15,
        finalPanelsRoundedTo15,
        combinerBoxes,
        solarCableLengthM,
        pumpCableLengthM,
      },
      notes: [
        {
          ar: "زراعي: تجميع الألواح على مجموعات 15 لوح.",
          en: "Agricultural: Panels grouped in sets of 15."
        },
      ],
    };
  }
}

// Default Panel Options
export const PANEL_OPTIONS: SolarPanelOption[] = [
  { id: "trina-685", name: { ar: "لوح Trina 685W N-Type", en: "Trina 685W N-Type" }, watt: 685 },
  { id: "trina-670", name: { ar: "لوح Trina 670W", en: "Trina 670W" }, watt: 670 },
  { id: "trina-580", name: { ar: "لوح Trina 580W", en: "Trina 580W" }, watt: 580 },
  { id: "p550", name: { ar: "لوح 550W", en: "550W Panel" }, watt: 550 },
  { id: "p450", name: { ar: "لوح 450W", en: "450W Panel" }, watt: 450 },
];

// Battery Types with labels
export const BATTERY_OPTIONS: { id: BatteryType; name: { ar: string; en: string } }[] = [
  { id: "lithium", name: { ar: "ليثيوم (Pylontech)", en: "Lithium (Pylontech)" } },
  { id: "gel", name: { ar: "جل", en: "Gel" } },
  { id: "carbon", name: { ar: "كربون", en: "Carbon" } },
  { id: "standard", name: { ar: "عادي (حمض رصاص)", en: "Standard (Lead Acid)" } },
];
