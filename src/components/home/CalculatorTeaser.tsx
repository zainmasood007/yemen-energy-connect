import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Sun, Zap, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CalculatorTeaser() {
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.1),transparent_50%)]" />

      <div className="container relative">
        <ScrollReveal>
          <div className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-8 md:p-14 overflow-hidden shadow-xl">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -end-20 w-60 h-60 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -start-20 w-60 h-60 bg-secondary/20 rounded-full blur-[100px]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                  <Sparkles className="h-4 w-4" />
                  {isRTL ? "أداة مجانية" : "Free Tool"}
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {isRTL ? (
                    <>
                      احسب حجم نظامك الشمسي{" "}
                      <span className="text-primary">في ثوانٍ</span>
                    </>
                  ) : (
                    <>
                      Calculate Your Solar System{" "}
                      <span className="text-primary">in Seconds</span>
                    </>
                  )}
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  {isRTL
                    ? "أداة ذكية تساعدك على تقدير حجم النظام الشمسي المناسب لمنزلك أو مشروعك بناءً على فاتورة الكهرباء أو استهلاكك الفعلي."
                    : "Smart tool to help you estimate the right solar system size for your home or project based on your electricity bill or actual consumption."}
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-solar text-secondary-foreground hover:opacity-90 font-bold h-14 px-8 rounded-full text-lg shadow-lg shadow-secondary/25"
                  >
                    <a href="https://alqatta-sizing.com" target="_blank" rel="noopener noreferrer">
                      <Calculator className="h-5 w-5 me-2" />
                      {isRTL ? "جرب الحاسبة الآن" : "Try Calculator Now"}
                      <Arrow className="h-5 w-5 ms-2" />
                    </a>
                  </Button>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Sun className="h-4 w-4 text-secondary" />
                      <span>{isRTL ? "دقة عالية" : "High Accuracy"}</span>
                    </div>
                    <div className="w-1 h-1 bg-border rounded-full" />
                    <span>{isRTL ? "مجانية 100%" : "100% Free"}</span>
                  </div>
                </div>
              </div>

              {/* Mockup UI */}
              <div className="relative">
                <div className="relative z-10 bg-background border border-border/50 rounded-2xl p-6 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* Window Controls */}
                  <div className="flex justify-between items-center mb-6 border-b border-border/50 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/70" />
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      <div className="w-3 h-3 rounded-full bg-success" />
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      Solar_Calculator_v2.0
                    </div>
                  </div>

                  {/* Calculator Preview */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">
                        {isRTL ? "فاتورة الكهرباء الشهرية" : "Monthly Electricity Bill"}
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-gradient-solar rounded-full" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground font-mono">
                        <span>0</span>
                        <span className="text-foreground font-semibold">20,000 YER</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl text-center">
                        <div className="text-xs text-muted-foreground mb-1">
                          {isRTL ? "النظام المقترح" : "Suggested System"}
                        </div>
                        <div className="text-2xl font-bold text-primary">3.5 kW</div>
                      </div>
                      <div className="bg-success/5 border border-success/20 p-4 rounded-xl text-center">
                        <div className="text-xs text-muted-foreground mb-1">
                          {isRTL ? "عدد الألواح" : "Panels Count"}
                        </div>
                        <div className="text-2xl font-bold text-success">6</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2">
                      <Zap className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">
                        {isRTL ? "نتائج فورية ودقيقة" : "Instant & accurate results"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl -z-10 transform scale-90" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
