import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite } from "lucide-react";
import { Link } from "wouter";
import satelliteImage from "@assets/stock_images/satellite_orbiting_e_3e0f2d40.jpg";

export default function HeroSection() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={satelliteImage} 
          alt="Satellite orbiting Earth" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
      </div>

      {/* Animated Satellite Icon */}
      <div className="absolute top-20 right-20 animate-pulse opacity-20">
        <Satellite className="size-32 text-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <div className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Powered by GPT-OSS Multimodal AI</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            GeoAI
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">Multimodal Vision-Language Intelligence</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          Transforms manual satellite analysis into automated intelligence using <span className="text-foreground font-semibold">EarthDial vision encoder</span> with <span className="text-foreground font-semibold">GPT-OSS LLM</span>. Processes terabytes of daily imagery <span className="text-primary font-semibold">10x faster</span> on existing compute.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-sm">
          <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium">Team Tessaract</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-card/50 border border-border">
            <span className="text-foreground">Smart India Hackathon 2025</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-card/50 border border-border">
            <span className="text-foreground">ISRO Earth Observation</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/chat">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" data-testid="button-start-chat">
              Start Analyzing
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 backdrop-blur-sm bg-background/60 w-full sm:w-auto"
              data-testid="button-view-docs"
            >
              View Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
