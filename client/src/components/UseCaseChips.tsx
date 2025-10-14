import { Button } from "@/components/ui/button";
import { Image, MessageCircleQuestion, GitCompare, FileText } from "lucide-react";

interface UseCaseChipsProps {
  onSelectUseCase: (useCase: string, prompt: string) => void;
}

const useCases = [
  {
    id: "captioning",
    label: "Image Captioning",
    icon: Image,
    prompt: "Describe this satellite image in detail, including visible land features and geographic characteristics."
  },
  {
    id: "vqa",
    label: "Visual Q&A",
    icon: MessageCircleQuestion,
    prompt: "What is the main land cover type in this image?"
  },
  {
    id: "change_detection",
    label: "Change Detection",
    icon: GitCompare,
    prompt: "Identify any significant changes or anomalies in this Earth observation data."
  },
  {
    id: "report",
    label: "Report Generation",
    icon: FileText,
    prompt: "Generate a comprehensive analysis report for this satellite imagery, including land use classification and environmental indicators."
  }
];

export default function UseCaseChips({ onSelectUseCase }: UseCaseChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {useCases.map((useCase) => {
        const Icon = useCase.icon;
        return (
          <Button
            key={useCase.id}
            variant="secondary"
            size="sm"
            onClick={() => onSelectUseCase(useCase.id, useCase.prompt)}
            className="rounded-full"
            data-testid={`chip-${useCase.id}`}
          >
            <Icon className="size-4 mr-2" />
            {useCase.label}
          </Button>
        );
      })}
    </div>
  );
}
