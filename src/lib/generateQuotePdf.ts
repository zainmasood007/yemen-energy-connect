import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { BaseResult } from "./solarSizingEngine";
import { quoteProductPrices, quoteServicePrices, getProductsByCategory } from "@/data/quotePricing";

export interface QuoteCustomer {
  name: string;
  phone: string;
  address?: string;
}

export interface QuoteData {
  customer: QuoteCustomer;
  result: BaseResult;
  systemType: string;
  lang: "ar" | "en";
}

// Generate unique quote number
function generateQuoteNumber(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `${year}${month}${day}-${random}`;
}

// Format date
function formatDate(lang: "ar" | "en"): string {
  const now = new Date();
  if (lang === "ar") {
    return now.toLocaleDateString("ar-YE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Get best matching panel from quote prices
function getBestPanel(panelWatt: number) {
  const panels = getProductsByCategory('panels');
  // Find closest match
  const sorted = panels.sort((a, b) => {
    const aWatt = parseInt(a.productSlug.match(/\d+/)?.[0] || '0');
    const bWatt = parseInt(b.productSlug.match(/\d+/)?.[0] || '0');
    return Math.abs(aWatt - panelWatt) - Math.abs(bWatt - panelWatt);
  });
  return sorted[0] || panels[0];
}

// Get best matching inverter from quote prices
function getBestInverter(inverterKw: number) {
  const inverters = getProductsByCategory('inverters');
  // Find closest match by power
  const sorted = inverters.sort((a, b) => {
    const aKw = parseInt(a.productSlug.match(/\d+/)?.[0] || '0');
    const bKw = parseInt(b.productSlug.match(/\d+/)?.[0] || '0');
    return Math.abs(aKw - inverterKw) - Math.abs(bKw - inverterKw);
  });
  return sorted[0] || inverters[0];
}

// Get battery from quote prices
function getBattery() {
  const batteries = getProductsByCategory('pylontech');
  return batteries[0]; // Default to first available
}

export function generateQuotePdf(data: QuoteData): void {
  const { customer, result, systemType, lang } = data;
  const isRTL = lang === "ar";

  // Create PDF
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let yPos = margin;

  // Colors
  const primaryColor: [number, number, number] = [30, 58, 95]; // Dark blue
  const secondaryColor: [number, number, number] = [218, 165, 32]; // Gold
  const textColor: [number, number, number] = [50, 50, 50];

  // Header background
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 45, "F");

  // Company name (English for PDF compatibility)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Al-Qatta Solar Energy Systems", pageWidth / 2, 20, { align: "center" });

  // Subtitle
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Authorized Pylontech Agent in Yemen", pageWidth / 2, 28, { align: "center" });

  // Contact info
  doc.setFontSize(8);
  doc.text("Tel: +967 777 800 063 | www.alqatta.com | info@alqatta.com", pageWidth / 2, 36, {
    align: "center",
  });

  yPos = 55;

  // Quotation title
  doc.setTextColor(...secondaryColor);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("QUOTATION", pageWidth / 2, yPos, { align: "center" });

  yPos += 15;

  // Quote info box
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 25, 3, 3, "S");

  doc.setTextColor(...textColor);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const quoteNumber = generateQuoteNumber();
  const quoteDate = formatDate("en"); // Always English for PDF

  doc.text(`Quote No: ${quoteNumber}`, margin + 5, yPos + 8);
  doc.text(`Date: ${quoteDate}`, margin + 5, yPos + 16);
  doc.text(`Customer: ${customer.name}`, pageWidth / 2, yPos + 8);
  doc.text(`Phone: ${customer.phone}`, pageWidth / 2, yPos + 16);

  yPos += 35;

  // System type label
  const systemTypeLabels: Record<string, string> = {
    home: "Residential System",
    commercial: "Commercial System",
    industrial: "Industrial System",
    agricultural: "Agricultural System",
  };

  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 10, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(
    `System Type: ${systemTypeLabels[systemType] || systemType}`,
    pageWidth / 2,
    yPos + 7,
    { align: "center" }
  );

  yPos += 18;

  // Get products from quote pricing
  const panelWatt = result.panel.watt;
  const selectedPanel = getBestPanel(panelWatt);
  const panelsCount = result.panelsCount || 0;
  const panelsTotal = panelsCount * (selectedPanel?.unitPrice || 150);

  const inverterKw = (result.inverterW || 0) / 1000;
  const selectedInverter = getBestInverter(inverterKw);
  const inverterPrice = selectedInverter?.unitPrice || Math.round(inverterKw * 150);

  const batteriesCount = result.batteriesCount || 0;
  const selectedBattery = getBattery();
  const batteriesTotal = batteriesCount * (selectedBattery?.unitPrice || 1000);

  // Calculate service costs from quote pricing
  const systemKw = result.systemKw || 1;
  let servicesTotal = 0;
  quoteServicePrices.forEach(service => {
    if (service.fixedPrice) {
      servicesTotal += service.fixedPrice;
    } else {
      servicesTotal += service.pricePerKw * systemKw;
    }
  });

  // Build table data using real products
  const tableData: any[] = [];
  let itemNo = 1;

  // Solar Panels
  if (panelsCount > 0 && selectedPanel) {
    tableData.push([
      itemNo++,
      `${selectedPanel.nameEn}\n- Power: ${panelWatt}W\n- Type: N-Type Mono\n- Warranty: 25 Years`,
      "Pcs",
      panelsCount,
      selectedPanel.unitPrice,
      panelsTotal,
    ]);
  }

  // Inverter
  if (result.inverterW && result.inverterW > 0 && selectedInverter) {
    tableData.push([
      itemNo++,
      `${selectedInverter.nameEn}\n- Power: ${Math.round(result.inverterW)}W\n- Type: Hybrid MPPT\n- Warranty: 2 Years`,
      "Pcs",
      1,
      selectedInverter.unitPrice,
      selectedInverter.unitPrice,
    ]);
  }

  // Batteries
  if (batteriesCount > 0 && selectedBattery) {
    tableData.push([
      itemNo++,
      `${selectedBattery.nameEn}\n- Capacity: 4.8kWh\n- Voltage: 48V\n- Warranty: 10 Years`,
      "Pcs",
      batteriesCount,
      selectedBattery.unitPrice,
      batteriesTotal,
    ]);
  }

  // Services from quote pricing
  quoteServicePrices.forEach(service => {
    const serviceTotal = service.fixedPrice || (service.pricePerKw * systemKw);
    tableData.push([
      itemNo++,
      service.nameEn,
      "Service",
      1,
      serviceTotal,
      serviceTotal,
    ]);
  });

  // Products table
  autoTable(doc, {
    startY: yPos,
    head: [["No", "Description", "Unit", "Qty", "Unit Price ($)", "Total ($)"]],
    body: tableData,
    theme: "grid",
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "center",
      fontSize: 9,
    },
    bodyStyles: {
      fontSize: 8,
      textColor: textColor,
      cellPadding: 3,
    },
    columnStyles: {
      0: { halign: "center", cellWidth: 10 },
      1: { cellWidth: 70 },
      2: { halign: "center", cellWidth: 15 },
      3: { halign: "center", cellWidth: 15 },
      4: { halign: "right", cellWidth: 25 },
      5: { halign: "right", cellWidth: 25 },
    },
    margin: { left: margin, right: margin },
    didDrawPage: function (data: any) {
      // Footer on each page
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Page ${data.pageNumber}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" }
      );
    },
  });

  // Get final Y position after table
  const finalY = (doc as any).lastAutoTable.finalY + 10;

  // Total calculation
  const grandTotal = panelsTotal + inverterPrice + batteriesTotal + servicesTotal;

  // Total box
  doc.setFillColor(...primaryColor);
  doc.roundedRect(pageWidth - margin - 60, finalY, 60, 15, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(`Total: $${grandTotal.toLocaleString()}`, pageWidth - margin - 30, finalY + 10, {
    align: "center",
  });

  // Notes section
  const notesY = finalY + 25;
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("Notes:", margin, notesY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const notes = [
    "- Prices are based on current market rates and may vary.",
    "- Cable lengths adjustable based on installation requirements.",
    "- Mounting structure cost depends on roof/ground type.",
    "- Quotation valid for 14 days from date of issue.",
    "- Payment terms: 50% advance, 50% on completion.",
  ];
  notes.forEach((note, i) => {
    doc.text(note, margin, notesY + 6 + i * 5);
  });

  // Footer
  const footerY = pageHeight - 25;
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(0.3);
  doc.line(margin, footerY, pageWidth - margin, footerY);

  doc.setFontSize(8);
  doc.setTextColor(...primaryColor);
  doc.text("Al-Qatta Corporation for Solar Energy Systems", margin, footerY + 6);
  doc.text("Authorized Pylontech Dealer in Yemen", margin, footerY + 11);

  doc.setTextColor(100, 100, 100);
  doc.text(
    "Phone: +967 777 800 063 | +967 1 237 379",
    pageWidth - margin,
    footerY + 6,
    { align: "right" }
  );
  doc.text("www.alqatta.com | info@alqatta.com", pageWidth - margin, footerY + 11, {
    align: "right",
  });

  // Save the PDF
  const fileName = `AlQatta-Quote-${quoteNumber}.pdf`;
  doc.save(fileName);
}
