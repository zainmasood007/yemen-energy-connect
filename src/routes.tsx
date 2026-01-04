import type { RouteRecord } from "vite-react-ssg";
import RootLayout from "./App";
import { lazy } from "react";

// Lazy-loaded pages for better initial bundle size
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ProductsMain = lazy(() => import("./pages/ProductsMain"));
const ProductCategory = lazy(() => import("./pages/ProductCategory"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Pylontech = lazy(() => import("./pages/Pylontech"));
const PylontechBatteries = lazy(() => import("./pages/PylontechBatteries"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Locations = lazy(() => import("./pages/Locations"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const KnowledgeHub = lazy(() => import("./pages/knowledge"));
const KnowledgeArticlePage = lazy(() => import("./pages/knowledge/KnowledgeArticlePage"));
const InverterGuide = lazy(() => import("./pages/knowledge/InverterGuide"));
const LithiumVsLeadAcid = lazy(() => import("./pages/knowledge/LithiumVsLeadAcid"));
const SolarYemenGuide = lazy(() => import("./pages/knowledge/SolarYemenGuide"));
const InverterSizingGuide = lazy(() => import("./pages/knowledge/articles/InverterSizingGuide"));
const InverterCommonFaults = lazy(() => import("./pages/knowledge/articles/InverterCommonFaults"));
const LithiumBatteryLifespan = lazy(() => import("./pages/knowledge/articles/LithiumBatteryLifespan"));
const SeriesVsParallelBatteries = lazy(() => import("./pages/knowledge/articles/SeriesVsParallelBatteries"));
const SolarSystemCostYemen = lazy(() => import("./pages/knowledge/articles/SolarSystemCostYemen"));
const SolarYemenFAQ = lazy(() => import("./pages/knowledge/SolarYemenFAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Calculator = lazy(() => import("./pages/Calculator"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLocalRoutes = lazy(() => import("./admin/AdminLocalRoutes"));

import { allProducts } from "@/data/products";
import { pillarPages, supportingArticles } from "@/data/articles";
import { citySlugs } from "./pages/LocationPage";
import { projects as projectData } from "@/data/projects";

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Index },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      // Products Routes
      { path: "products", Component: ProductsMain },
      {
        path: "products/:category",
        Component: ProductCategory,
        getStaticPaths: () => {
          const categories = Array.from(new Set(allProducts.map((p) => p.category)));
          return categories.map((category) => `products/${category}`);
        },
      },
      {
        path: "products/:category/:slug",
        Component: ProductPage,
        getStaticPaths: () =>
          allProducts.map((product) => `products/${product.category}/${product.slug}`),
      },
      { path: "pylontech", Component: Pylontech },
      { path: "بطاريات-بايلونتك", Component: PylontechBatteries },
      { path: "contact", Component: Contact },
      { path: "projects", Component: Projects },
      {
        path: "projects/:slug",
        Component: ProjectDetail,
        getStaticPaths: () => projectData.filter((p) => p.slug).map((p) => `projects/${p.slug}`),
      },
      { path: "locations", Component: Locations },
      {
        path: "locations/:citySlug",
        Component: LocationPage,
        getStaticPaths: () =>
          citySlugs.filter(Boolean).map((slug) => `locations/${slug}`),
      },
      // Knowledge Hub Routes
      { path: "knowledge", Component: KnowledgeHub },
      // Legacy knowledge static pages (SEO aliases)
      { path: "knowledge/inverter-guide", Component: InverterGuide },
      { path: "knowledge/lithium-vs-lead-acid", Component: LithiumVsLeadAcid },
      { path: "knowledge/solar-yemen-guide", Component: SolarYemenGuide },
      { path: "knowledge/solar-faq-yemen", Component: SolarYemenFAQ },
      { path: "knowledge/inverter-sizing", Component: InverterSizingGuide },
      { path: "knowledge/solar-system-cost-yemen", Component: SolarSystemCostYemen },
      { path: "knowledge/lithium-battery-lifespan", Component: LithiumBatteryLifespan },
      { path: "knowledge/series-vs-parallel-batteries", Component: SeriesVsParallelBatteries },
      { path: "knowledge/inverter-common-faults", Component: InverterCommonFaults },
      {
        path: "knowledge/:slug",
        Component: KnowledgeArticlePage,
        getStaticPaths: () => {
          const slugs = [
            ...pillarPages.map((p) => p.slug),
            ...supportingArticles.map((a) => a.slug),
          ].filter(Boolean);
          return slugs.map((slug) => `knowledge/${slug}`);
        },
      },
      // Pricing & Calculator
      { path: "pricing", Component: Pricing },
      { path: "calculator", Component: Calculator },
      // Admin Local Routes - DEV only
      ...(import.meta.env.DEV
        ? ([{ path: "admin-local/*", Component: AdminLocalRoutes }] as RouteRecord[])
        : []),
      // Catch-all route
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/en",
    Component: RootLayout,
    children: [
      { index: true, Component: Index },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      // Products Routes
      { path: "products", Component: ProductsMain },
      {
        path: "products/:category",
        Component: ProductCategory,
        getStaticPaths: () => {
          const categories = Array.from(new Set(allProducts.map((p) => p.category)));
          return categories.map((category) => `products/${category}`);
        },
      },
      {
        path: "products/:category/:slug",
        Component: ProductPage,
        getStaticPaths: () =>
          allProducts.map((product) => `products/${product.category}/${product.slug}`),
      },
      { path: "pylontech", Component: Pylontech },
      { path: "بطاريات-بايلونتك", Component: PylontechBatteries },
      { path: "contact", Component: Contact },
      { path: "projects", Component: Projects },
      {
        path: "projects/:slug",
        Component: ProjectDetail,
        getStaticPaths: () => projectData.filter((p) => p.slug).map((p) => `projects/${p.slug}`),
      },
      { path: "locations", Component: Locations },
      {
        path: "locations/:citySlug",
        Component: LocationPage,
        getStaticPaths: () =>
          citySlugs.filter(Boolean).map((slug) => `locations/${slug}`),
      },
      // Knowledge Hub Routes
      { path: "knowledge", Component: KnowledgeHub },
      // Legacy knowledge static pages (SEO aliases)
      { path: "knowledge/inverter-guide", Component: InverterGuide },
      { path: "knowledge/lithium-vs-lead-acid", Component: LithiumVsLeadAcid },
      { path: "knowledge/solar-yemen-guide", Component: SolarYemenGuide },
      { path: "knowledge/solar-faq-yemen", Component: SolarYemenFAQ },
      { path: "knowledge/inverter-sizing", Component: InverterSizingGuide },
      { path: "knowledge/solar-system-cost-yemen", Component: SolarSystemCostYemen },
      { path: "knowledge/lithium-battery-lifespan", Component: LithiumBatteryLifespan },
      { path: "knowledge/series-vs-parallel-batteries", Component: SeriesVsParallelBatteries },
      { path: "knowledge/inverter-common-faults", Component: InverterCommonFaults },
      {
        path: "knowledge/:slug",
        Component: KnowledgeArticlePage,
        getStaticPaths: () => {
          const slugs = [
            ...pillarPages.map((p) => p.slug),
            ...supportingArticles.map((a) => a.slug),
          ].filter(Boolean);
          return slugs.map((slug) => `knowledge/${slug}`);
        },
      },
      // Pricing & Calculator
      { path: "pricing", Component: Pricing },
      { path: "calculator", Component: Calculator },
      // Catch-all route for /en
      { path: "*", Component: NotFound },
    ],
  },
];

export default routes;
