import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ProductsMain from "./pages/ProductsMain";
import ProductCategory from "./pages/ProductCategory";
import ProductPage from "./pages/ProductPage";
import Pylontech from "./pages/Pylontech";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import LocationPage from "./pages/LocationPage";
import Locations from "./pages/Locations";
import KnowledgeHub from "./pages/knowledge";
import InverterGuide from "./pages/knowledge/InverterGuide";
import LithiumVsLeadAcid from "./pages/knowledge/LithiumVsLeadAcid";
import SolarYemenGuide from "./pages/knowledge/SolarYemenGuide";
import InverterSizingGuide from "./pages/knowledge/articles/InverterSizingGuide";
import InverterCommonFaults from "./pages/knowledge/articles/InverterCommonFaults";
import LithiumBatteryLifespan from "./pages/knowledge/articles/LithiumBatteryLifespan";
import SeriesVsParallelBatteries from "./pages/knowledge/articles/SeriesVsParallelBatteries";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* Products Routes */}
            <Route path="/products" element={<ProductsMain />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:slug" element={<ProductPage />} />
            <Route path="/pylontech" element={<Pylontech />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:citySlug" element={<LocationPage />} />
            {/* Knowledge Hub Routes */}
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/knowledge/inverter-guide" element={<InverterGuide />} />
            <Route path="/knowledge/lithium-vs-lead-acid" element={<LithiumVsLeadAcid />} />
            <Route path="/knowledge/solar-yemen-guide" element={<SolarYemenGuide />} />
            {/* Supporting Articles */}
            <Route path="/knowledge/inverter-sizing" element={<InverterSizingGuide />} />
            <Route path="/knowledge/inverter-common-faults" element={<InverterCommonFaults />} />
            <Route path="/knowledge/lithium-battery-lifespan" element={<LithiumBatteryLifespan />} />
            <Route path="/knowledge/series-vs-parallel-batteries" element={<SeriesVsParallelBatteries />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
