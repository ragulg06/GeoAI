import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Brain, Zap, FileText, Image as ImageIcon, MapPin, Clock } from "lucide-react";

export default function ArchitectureDiagram() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">System Architecture</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end multimodal pipeline powered by EarthDial Vision Encoder and GPT-OSS LLM
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="relative">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 text-center hover-elevate">
              <Database className="size-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2 text-foreground">EO Images</h4>
              <p className="text-sm text-muted-foreground">Multispectral & SAR imagery</p>
            </Card>
            <Card className="p-6 text-center hover-elevate">
              <MapPin className="size-8 text-chart-2 mx-auto mb-3" />
              <h4 className="font-semibold mb-2 text-foreground">Geo-coordinates</h4>
              <p className="text-sm text-muted-foreground">Spatial metadata</p>
            </Card>
            <Card className="p-6 text-center hover-elevate">
              <FileText className="size-8 text-chart-4 mx-auto mb-3" />
              <h4 className="font-semibold mb-2 text-foreground">Textual Queries</h4>
              <p className="text-sm text-muted-foreground">Natural language input</p>
            </Card>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-8">
            <ArrowRight className="size-8 text-muted-foreground" />
          </div>

          {/* Processing Pipeline */}
          <Card className="p-4 sm:p-8 mb-8 bg-gradient-to-br from-primary/5 to-chart-2/5">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-6">
              <div className="text-center md:col-span-2">
                <div className="size-12 sm:size-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <ImageIcon className="size-6 sm:size-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base text-foreground">EarthDial<br/>Vision Encoder</h4>
                <p className="text-xs text-muted-foreground">Multispectral + SAR trained</p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="size-6 text-muted-foreground" />
              </div>

              <div className="text-center md:col-span-2">
                <div className="size-12 sm:size-16 rounded-lg bg-chart-2/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="size-6 sm:size-8 text-chart-2" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base text-foreground">Q-Former +<br/>LoRA Adapters</h4>
                <p className="text-xs text-muted-foreground">Lightweight alignment</p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="size-6 text-muted-foreground" />
              </div>

              <div className="text-center md:col-span-2">
                <div className="size-12 sm:size-16 rounded-lg bg-chart-4/10 flex items-center justify-center mx-auto mb-3">
                  <Brain className="size-6 sm:size-8 text-chart-4" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base text-foreground">GPT-OSS<br/>LLM (20B)</h4>
                <p className="text-xs text-muted-foreground">Frozen reasoning core</p>
              </div>
            </div>

            {/* Geo-Temporal Adapter */}
            <div className="mt-6 pt-6 border-t border-border/40">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
                <Clock className="size-5 text-primary" />
                <span className="font-semibold text-foreground text-sm sm:text-base">Geo-Temporal Adapter</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Location + Time awareness for change detection</span>
              </div>
            </div>
          </Card>

          {/* Arrow */}
          <div className="flex justify-center mb-8">
            <ArrowRight className="size-8 text-muted-foreground" />
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-6 text-center hover-elevate border-primary/40">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <ImageIcon className="size-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Image Captioning</h4>
            </Card>
            <Card className="p-6 text-center hover-elevate border-chart-2/40">
              <div className="size-12 rounded-full bg-chart-2/10 flex items-center justify-center mx-auto mb-3">
                <FileText className="size-6 text-chart-2" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Visual Q&A</h4>
            </Card>
            <Card className="p-6 text-center hover-elevate border-chart-3/40">
              <div className="size-12 rounded-full bg-chart-3/10 flex items-center justify-center mx-auto mb-3">
                <Database className="size-6 text-chart-3" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Land Cover<br/>Classification</h4>
            </Card>
            <Card className="p-6 text-center hover-elevate border-chart-4/40">
              <div className="size-12 rounded-full bg-chart-4/10 flex items-center justify-center mx-auto mb-3">
                <Brain className="size-6 text-chart-4" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Natural Language<br/>Reports</h4>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
