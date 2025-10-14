import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot } from "lucide-react";

export default function LoadingIndicator() {
  return (
    <div className="flex gap-4 mb-6" data-testid="loading-indicator">
      <Avatar className="size-8 shrink-0">
        <AvatarFallback className="bg-chart-2/10 text-chart-2">
          <Bot className="size-4" />
        </AvatarFallback>
      </Avatar>

      <Card className="p-4 bg-card">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="size-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="size-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="size-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>
          <span className="text-sm text-muted-foreground">GeoAI is analyzing...</span>
        </div>
      </Card>
    </div>
  );
}
