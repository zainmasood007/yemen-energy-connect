import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AdminProduct, AdminArticle, AdminProject, AdminState } from '../types';

interface AdminContextType {
  // State
  products: AdminProduct[];
  articles: AdminArticle[];
  projects: AdminProject[];
  
  // Products
  addProduct: (product: AdminProduct) => void;
  updateProduct: (id: string, product: Partial<AdminProduct>) => void;
  deleteProduct: (id: string) => void;
  
  // Articles
  addArticle: (article: AdminArticle) => void;
  updateArticle: (id: string, article: Partial<AdminArticle>) => void;
  deleteArticle: (id: string) => void;
  
  // Projects
  addProject: (project: AdminProject) => void;
  updateProject: (id: string, project: Partial<AdminProject>) => void;
  deleteProject: (id: string) => void;
  
  // Export/Import
  exportData: () => string;
  importData: (jsonString: string) => boolean;
  
  // Site Data
  loadSiteData: (products: AdminProduct[], articles: AdminArticle[], projects: AdminProject[]) => void;
  clearAllData: () => void;
  
  // Utils
  generateId: () => string;
}

const STORAGE_KEY = 'admin_local_data';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const defaultAdminContext: AdminContextType = {
  products: [],
  articles: [],
  projects: [],
  addProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
  addArticle: () => {},
  updateArticle: () => {},
  deleteArticle: () => {},
  addProject: () => {},
  updateProject: () => {},
  deleteProject: () => {},
  exportData: () => JSON.stringify({ products: [], articles: [], projects: [] }),
  importData: () => false,
  loadSiteData: () => {},
  clearAllData: () => {},
  generateId: () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [projects, setProjects] = useState<AdminProject[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data: AdminState = JSON.parse(saved);
        setProducts(data.products || []);
        setArticles(data.articles || []);
        setProjects(data.projects || []);
      } catch (e) {
        console.error('Failed to parse admin data:', e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    const data: AdminState = { products, articles, projects };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [products, articles, projects]);

  const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Products CRUD
  const addProduct = (product: AdminProduct) => {
    setProducts(prev => [...prev, { ...product, id: product.id || generateId() }]);
  };

  const updateProduct = (id: string, updates: Partial<AdminProduct>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Articles CRUD
  const addArticle = (article: AdminArticle) => {
    setArticles(prev => [...prev, { ...article, id: article.id || generateId() }]);
  };

  const updateArticle = (id: string, updates: Partial<AdminArticle>) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  // Projects CRUD
  const addProject = (project: AdminProject) => {
    setProjects(prev => [...prev, { ...project, id: project.id || generateId() }]);
  };

  const updateProject = (id: string, updates: Partial<AdminProject>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // Export all data as JSON
  const exportData = (): string => {
    const data: AdminState = { products, articles, projects };
    return JSON.stringify(data, null, 2);
  };

  // Import data from JSON
  const importData = (jsonString: string): boolean => {
    try {
      const data: AdminState = JSON.parse(jsonString);
      if (data.products) setProducts(data.products);
      if (data.articles) setArticles(data.articles);
      if (data.projects) setProjects(data.projects);
      return true;
    } catch (e) {
      console.error('Failed to import data:', e);
      return false;
    }
  };

  // Load site data (from siteDataLoader)
  const loadSiteData = (newProducts: AdminProduct[], newArticles: AdminArticle[], newProjects: AdminProject[]) => {
    setProducts(newProducts);
    setArticles(newArticles);
    setProjects(newProjects);
  };

  // Clear all data
  const clearAllData = () => {
    setProducts([]);
    setArticles([]);
    setProjects([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AdminContext.Provider value={{
      products,
      articles,
      projects,
      addProduct,
      updateProduct,
      deleteProduct,
      addArticle,
      updateArticle,
      deleteArticle,
      addProject,
      updateProject,
      deleteProject,
      exportData,
      importData,
      loadSiteData,
      clearAllData,
      generateId,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context ?? defaultAdminContext;
}

