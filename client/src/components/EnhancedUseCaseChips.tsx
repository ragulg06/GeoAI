import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image, MessageCircleQuestion, GitCompare, FileText, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedUseCaseChipsProps {
  onSelectUseCase: (useCase: string, prompt: string) => void;
  selectedUseCase?: string;
}

const useCases = [
  {
    id: "captioning",
    label: "Image Captioning",
    icon: Image,
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
    selectedClass: "border-primary bg-primary/5",
    prompt: "Provide a detailed caption for this satellite image, including visible land features, geographic characteristics, and notable patterns.",
    description: "Generate comprehensive descriptions of satellite imagery"
  },
  {
    id: "vqa",
    label: "Visual Q&A",
    icon: MessageCircleQuestion,
    bgClass: "bg-chart-2/10",
    iconClass: "text-chart-2",
    selectedClass: "border-chart-2 bg-chart-2/5",
    prompt: "What is the primary land cover type visible in this satellite image? Provide percentages if possible.",
    description: "Ask specific questions about image content"
  },
  {
    id: "change_detection",
    label: "Change Detection",
    icon: GitCompare,
    bgClass: "bg-chart-4/10",
    iconClass: "text-chart-4",
    selectedClass: "border-chart-4 bg-chart-4/5",
    prompt: "Analyze this satellite imagery for temporal changes, environmental shifts, or anomalies. Highlight areas of significant change.",
    description: "Detect changes and anomalies over time"
  },
  {
    id: "report",
    label: "Report Generation",
    icon: FileText,
    bgClass: "bg-chart-3/10",
    iconClass: "text-chart-3",
    selectedClass: "border-chart-3 bg-chart-3/5",
    prompt: "Generate a comprehensive Earth Observation analysis report for this satellite imagery. Include: land use classification, NDVI values, environmental indicators, and actionable insights.",
    description: "Create detailed analytical reports"
  }
];

export default function EnhancedUseCaseChips({ onSelectUseCase, selectedUseCase }: EnhancedUseCaseChipsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="size-4 text-primary" />
        <span className="text-sm font-semibold">Quick Analysis Modes</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {useCases.map((useCase) => {
          const Icon = useCase.icon;
          const isSelected = selectedUseCase === useCase.id;
          
          return (
            <Card
              key={useCase.id}
              className={cn(
                "p-4 cursor-pointer transition-all hover-elevate",
                isSelected && useCase.selectedClass
              )}
              onClick={() => onSelectUseCase(useCase.id, useCase.prompt)}
              data-testid={`chip-${useCase.id}`}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  "size-10 rounded-lg flex items-center justify-center shrink-0",
                  useCase.bgClass
                )}>
                  <Icon className={cn("size-5", useCase.iconClass)} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1">{useCase.label}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{useCase.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
