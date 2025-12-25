// Admin Local Routes
// DEV-only routes for local content management
// These routes are only available in development mode

import { Routes, Route } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminArticles from './pages/AdminArticles';
import AdminProjects from './pages/AdminProjects';
import ProductForm from './pages/ProductForm';
import ArticleForm from './pages/ArticleForm';
import ProjectForm from './pages/ProjectForm';
import DataExport from './pages/DataExport';
import QuotePricing from './pages/QuotePricing';

export default function AdminLocalRoutes() {
  return (
    <AdminProvider>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/:id" element={<ProductForm />} />
        <Route path="articles" element={<AdminArticles />} />
        <Route path="articles/new" element={<ArticleForm />} />
        <Route path="articles/:id" element={<ArticleForm />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="projects/new" element={<ProjectForm />} />
        <Route path="projects/:id" element={<ProjectForm />} />
        <Route path="quote-pricing" element={<QuotePricing />} />
        <Route path="export" element={<DataExport />} />
      </Routes>
    </AdminProvider>
  );
}
