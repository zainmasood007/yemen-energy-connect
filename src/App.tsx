import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/hooks/use-theme";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const queryClient = new QueryClient();

export function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen" />}>
              <Outlet />
            </Suspense>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default RootLayout;
