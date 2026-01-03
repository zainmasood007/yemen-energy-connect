export type PerformanceMetricType = "home_load" | "quote_pdf";

export interface PerformanceMetric {
  id: string;
  type: PerformanceMetricType;
  durationMs: number;
  timestamp: string; // ISO string
  metadata?: Record<string, unknown>;
}

const STORAGE_KEY = "alqatta_performance_metrics";
const MAX_METRICS = 100;

function safeParse(json: string | null): PerformanceMetric[] {
  if (!json) return [];
  try {
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed)) return [];
    return parsed as PerformanceMetric[];
  } catch {
    return [];
  }
}

export function getPerformanceMetrics(): PerformanceMetric[] {
  if (typeof window === "undefined") return [];
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return safeParse(stored);
}

export function logPerformanceMetric(
  input: Omit<PerformanceMetric, "id" | "timestamp">,
): void {
  if (typeof window === "undefined") return;

  const metric: PerformanceMetric = {
    ...input,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    timestamp: new Date().toISOString(),
  };

  const existing = getPerformanceMetrics();
  const next = [...existing, metric].slice(-MAX_METRICS);

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage errors (quota, private mode, etc.)
  }
}
