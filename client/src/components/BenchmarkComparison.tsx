import { Card } from "@/components/ui/card";
import { Check, X, TrendingUp } from "lucide-react";

const benchmarks = [
  {
    metric: "Accuracy / F1 Score",
    geoai: { value: "0.89", status: "high", icon: Check },
    blip2: { value: "Medium", status: "medium", icon: Check },
    clipllm: { value: "Medium", status: "medium", icon: Check },
    internvl: { value: "High", status: "high", icon: Check }
  },
  {
    metric: "Latency",
    geoai: { value: "<3s", status: "high", icon: Check },
    blip2: { value: "5-7s", status: "low", icon: X },
    clipllm: { value: "5-8s", status: "low", icon: X },
    internvl: { value: "7-10s", status: "medium", icon: X }
  },
  {
    metric: "Resource Efficiency",
    geoai: { value: "<10 GB GPU", status: "high", icon: Check },
    blip2: { value: "24 GB", status: "low", icon: X },
    clipllm: { value: "24 GB", status: "low", icon: X },
    internvl: { value: "40 GB", status: "low", icon: X }
  },
  {
    metric: "Adapter-Only Training",
    geoai: { value: "Yes (LoRA)", status: "high", icon: Check },
    blip2: { value: "No", status: "low", icon: X },
    clipllm: { value: "No", status: "low", icon: X },
    internvl: { value: "Partial", status: "medium", icon: Check }
  },
  {
    metric: "Temporal Reasoning",
    geoai: { value: "Yes", status: "high", icon: Check },
    blip2: { value: "No", status: "low", icon: X },
    clipllm: { value: "No", status: "low", icon: X },
    internvl: { value: "Partial", status: "medium", icon: Check }
  },
  {
    metric: "CLIP Score Alignment",
    geoai: { value: "0.82", status: "high", icon: Check },
    blip2: { value: "0.75", status: "medium", icon: Check },
    clipllm: { value: "0.74", status: "medium", icon: Check },
    internvl: { value: "0.80", status: "high", icon: Check }
  }
];

export default function BenchmarkComparison() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 border border-chart-3/20 mb-6">
            <TrendingUp className="size-4 text-chart-3" />
            <span className="text-sm font-medium text-chart-3">Benchmark Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Performance Comparison</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            GeoAI outperforms existing multimodal solutions in speed, efficiency, and EO-specific capabilities
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-card/50">
                <tr className="border-b border-border">
                  <th className="text-left p-2 sm:p-4 font-semibold text-foreground text-xs sm:text-sm md:text-base">Metric</th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-xs sm:text-sm md:text-base">
                    <div className="flex flex-col items-center">
                      <span className="text-primary">GeoAI</span>
                      <span className="text-xs font-normal text-muted-foreground hidden sm:inline">(Our Solution)</span>
                    </div>
                  </th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-foreground text-xs sm:text-sm md:text-base hidden lg:table-cell">BLIP-2</th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-foreground text-xs sm:text-sm md:text-base hidden md:table-cell">CLIP+LLM</th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-foreground text-xs sm:text-sm md:text-base">InternVL/LLaVA</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((row, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border last:border-0 hover-elevate"
                    data-testid={`benchmark-row-${index}`}
                  >
                    <td className="p-2 sm:p-4 font-medium text-foreground text-xs sm:text-sm">{row.metric}</td>
                    <td className="p-2 sm:p-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                          row.geoai.status === 'high' ? 'bg-chart-3/10 text-chart-3' : 
                          row.geoai.status === 'medium' ? 'bg-chart-4/10 text-chart-4' : 
                          'bg-destructive/10 text-destructive'
                        }`}>
                          {row.geoai.status === 'high' && <Check className="size-4" />}
                          <span className="text-sm font-medium">{row.geoai.value}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground hidden lg:table-cell">{row.blip2.value}</td>
                    <td className="p-2 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground hidden md:table-cell">{row.clipllm.value}</td>
                    <td className="p-2 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground">{row.internvl.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10x</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Faster processing on existing compute</p>
          </Card>
          <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-chart-3/5 to-chart-3/10 border-chart-3/20">
            <div className="text-3xl sm:text-4xl font-bold text-chart-3 mb-2">92%</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Parameter reduction with LoRA fine-tuning</p>
          </Card>
          <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-chart-2/5 to-chart-2/10 border-chart-2/20">
            <div className="text-3xl sm:text-4xl font-bold text-chart-2 mb-2">88%</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Compute savings while maintaining accuracy</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
