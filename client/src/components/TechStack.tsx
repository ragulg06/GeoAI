import { Card } from "@/components/ui/card";
import { Code, Database, Cpu, Package, Cloud, Lock } from "lucide-react";

const stackCategories = [
  {
    icon: Code,
    title: "Frontend & Visualization",
    items: ["React", "Leaflet Maps", "Streamlit Analytics", "FastAPI Integration"]
  },
  {
    icon: Database,
    title: "Training Datasets",
    items: ["ChatEarthNet", "Landsat30-AU", "RSICD/CC-Foundation", "LLaVA Instruct 150K"]
  },
  {
    icon: Cpu,
    title: "Processing Stack",
    items: ["PyTorch", "Transformers", "BitsAndBytes", "FP16/4-bit Quantization"]
  },
  {
    icon: Package,
    title: "Core Models",
    items: ["GPT-OSS-20B", "EarthDial Vision Encoder", "Q-Former + LoRA Adapters"]
  },
  {
    icon: Cloud,
    title: "Deployment",
    items: ["Docker Containers", "FastAPI Microservices", "GPU Inference Server", "On-premise Ready"]
  },
  {
    icon: Lock,
    title: "ISRO Integration",
    items: ["Bhuvan API Compatible", "VEDAS Data Pipeline", "Secure Offline Mode", "Government Standards"]
  }
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on proven open-source technologies for production-grade reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stackCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover-elevate transition-all"
                data-testid={`tech-category-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Deployment Highlights */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-chart-2/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">&lt;10 GB</div>
              <p className="text-sm text-muted-foreground">Single GPU Memory</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-2 mb-2">36-52h</div>
              <p className="text-sm text-muted-foreground">MVP Development</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-3 mb-2">3 months</div>
              <p className="text-sm text-muted-foreground">Production Ready</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-4 mb-2">Zero</div>
              <p className="text-sm text-muted-foreground">Licensing Fees</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
