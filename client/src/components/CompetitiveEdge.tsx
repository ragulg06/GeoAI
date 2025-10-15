import { Card } from "@/components/ui/card";
import { Zap, Brain, Globe, Clock, Database, Shield } from "lucide-react";
import { Check, X } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Multimodal Intelligence",
    description: "Advanced vision-language model for comprehensive Earth Observation analysis"
  },
  {
    icon: Zap,
    title: "Low-Latency Processing",
    description: "Real-time inference with optimized GPT-OSS architecture"
  },
  {
    icon: Globe,
    title: "ISRO Integration Ready",
    description: "Built for seamless integration with ISRO's EO data infrastructure"
  },
  {
    icon: Clock,
    title: "Instant Insights",
    description: "Natural language responses from complex satellite imagery in seconds"
  },
  {
    icon: Database,
    title: "Open Dataset Training",
    description: "Reproducible training with publicly available multimodal datasets"
  },
  {
    icon: Shield,
    title: "Open Source",
    description: "Fully transparent, auditable, and customizable for mission-critical applications"
  }
];

const comparison = [
  { feature: "Vision Understanding", geoai: true, traditional: false },
  { feature: "Natural Language Output", geoai: true, traditional: false },
  { feature: "Real-time Analysis", geoai: true, traditional: true },
  { feature: "Multimodal Reasoning", geoai: true, traditional: false },
  { feature: "Open Source", geoai: true, traditional: true },
  { feature: "Low Compute Cost", geoai: true, traditional: false },
];

export default function CompetitiveEdge() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Competitive Edge</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Next-generation Earth Observation intelligence powered by multimodal AI
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-elevate transition-all"
                data-testid={`feature-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-foreground">GeoAI vs Traditional EO Analysis</h3>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 sm:p-4 font-semibold text-foreground text-sm sm:text-base">Feature</th>
                    <th className="text-center p-3 sm:p-4 font-semibold text-foreground text-sm sm:text-base">GeoAI</th>
                    <th className="text-center p-3 sm:p-4 font-semibold text-foreground text-sm sm:text-base">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-border last:border-0"
                      data-testid={`comparison-row-${index}`}
                    >
                      <td className="p-3 sm:p-4 text-foreground text-sm sm:text-base">{row.feature}</td>
                      <td className="p-3 sm:p-4 text-center">
                        {row.geoai ? (
                          <Check className="size-5 text-chart-3 mx-auto" />
                        ) : (
                          <X className="size-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.traditional ? (
                          <Check className="size-5 text-chart-3 mx-auto" />
                        ) : (
                          <X className="size-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
