import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Book, Code, Zap, Database, Globe, Terminal } from "lucide-react";

const sections = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of GeoAI and how to set up your first analysis",
    items: ["Quick Start Guide", "Installation", "Authentication", "First Analysis"]
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation for integrating GeoAI into your applications",
    items: ["REST API", "WebSocket Streaming", "Authentication", "Rate Limits"]
  },
  {
    icon: Zap,
    title: "Use Cases",
    description: "Explore different analysis types and their applications",
    items: ["Image Captioning", "Visual Q&A", "Change Detection", "Report Generation"]
  },
  {
    icon: Database,
    title: "Training Data",
    description: "Information about datasets and model training",
    items: ["Open Datasets", "Training Scripts", "Model Architecture", "Benchmarks"]
  },
  {
    icon: Globe,
    title: "ISRO Integration",
    description: "Guidelines for integrating with ISRO's EO data infrastructure",
    items: ["Data Formats", "API Endpoints", "Security", "Best Practices"]
  },
  {
    icon: Terminal,
    title: "Developer Tools",
    description: "SDKs, CLI tools, and development resources",
    items: ["Python SDK", "JavaScript SDK", "CLI Tool", "VS Code Extension"]
  }
];

export default function Docs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to integrate GeoAI into your Earth Observation workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover-elevate transition-all cursor-pointer"
                  data-testid={`doc-section-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm hover:text-primary transition-colors">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Join our community or reach out to our support team
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  data-testid="link-github-docs"
                >
                  GitHub Discussions
                </a>
                <span className="text-muted-foreground">•</span>
                <a 
                  href="#" 
                  className="text-primary hover:underline"
                  data-testid="link-discord"
                >
                  Discord Community
                </a>
                <span className="text-muted-foreground">•</span>
                <a 
                  href="#" 
                  className="text-primary hover:underline"
                  data-testid="link-support"
                >
                  Support Email
                </a>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
