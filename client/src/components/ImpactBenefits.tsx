import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Zap, Globe, Users, Database } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Accelerated Decision-Making",
    description: "Real-time insights enable faster response for ISRO analysts and government agencies"
  },
  {
    icon: Shield,
    title: "Early Disaster Detection",
    description: "Automated change detection supports community preparedness and timely intervention"
  },
  {
    icon: Globe,
    title: "Democratized Intelligence",
    description: "Makes geospatial insights accessible to public and private stakeholders"
  },
  {
    icon: Database,
    title: "Unlocked Archive Value",
    description: "Extracts actionable intelligence from dormant EO data archives"
  },
  {
    icon: Users,
    title: "Enhanced Research Productivity",
    description: "Greater efficiency in Earth observation research workflows"
  },
  {
    icon: Zap,
    title: "Reduced Operational Costs",
    description: "Automated analysis significantly cuts costs across national EO missions"
  }
];

const benefits = [
  "Reduced time and cost for large-scale EO data analysis",
  "Automated detection of deforestation and pollution for timely intervention",
  "Delivers competitive performance on standard benchmarks",
  "Improved national security through automated border surveillance",
  "Bridges the gap between Level-1 and Level-2 EO data",
  "Seamless integration with ISRO workflows (Bhuvan/VEDAS APIs)"
];

export default function ImpactBenefits() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Impact & Benefits</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming Earth Observation workflows for ISRO and the broader geospatial community
          </p>
        </div>

        {/* Impacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover-elevate transition-all"
                data-testid={`impact-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground text-sm sm:text-base">{impact.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Benefits List */}
        <Card className="p-4 sm:p-8 bg-gradient-to-br from-primary/5 to-chart-3/5">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-foreground">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3"
                data-testid={`benefit-${index}`}
              >
                <div className="size-6 rounded-full bg-chart-3/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="size-3 text-chart-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
