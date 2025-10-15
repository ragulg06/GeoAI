import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, User, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedChatMessageProps {
  role: "user" | "assistant";
  content: string;
  imageUrl?: string;
  timestamp?: string;
  confidence?: number;
  landCoverData?: {
    type: string;
    percentage: number;
  }[];
  useCase?: string;
}

export default function EnhancedChatMessage({ 
  role, 
  content, 
  imageUrl, 
  timestamp, 
  confidence,
  landCoverData,
  useCase
}: EnhancedChatMessageProps) {
  const isUser = role === "user";

  return (
    <div 
      className={cn(
        "flex gap-4 mb-6",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
      data-testid={`message-${role}`}
    >
      <Avatar className="size-8 shrink-0">
        <AvatarFallback className={cn(
          isUser ? "bg-primary/10 text-primary" : "bg-chart-2/10 text-chart-2"
        )}>
          {isUser ? <User className="size-4" /> : <Bot className="size-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={cn("flex flex-col gap-2 max-w-[85%] sm:max-w-[80%]", isUser && "items-end")}>
        {useCase && !isUser && (
          <Badge variant="secondary" className="w-fit">
            {useCase}
          </Badge>
        )}
        
        <Card className={cn(
          "p-4",
          isUser ? "bg-primary/10" : "bg-card"
        )}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt="Satellite imagery" 
              className="rounded-lg mb-3 max-h-64 object-cover w-full"
            />
          )}
          
          <p className="text-sm leading-relaxed whitespace-pre-wrap mb-3 text-foreground">{content}</p>
          
          {landCoverData && landCoverData.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border/40 space-y-2">
              <h4 className="text-xs font-semibold mb-3 text-foreground">Land Cover Analysis</h4>
              {landCoverData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-24">{item.type}</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium w-12 text-right text-foreground">{item.percentage}%</span>
                </div>
              ))}
            </div>
          )}
          
          {confidence !== undefined && (
            <div className="mt-3 pt-3 border-t border-border/40 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-chart-3" />
              <span className="text-xs text-muted-foreground">
                Confidence: <span className="font-semibold text-chart-3">{confidence}%</span>
              </span>
            </div>
          )}
        </Card>
        
        {timestamp && (
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
