import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  imageUrl?: string;
  timestamp?: string;
}

export default function ChatMessage({ role, content, imageUrl, timestamp }: ChatMessageProps) {
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

      <div className={cn("flex flex-col gap-2 max-w-[80%]", isUser && "items-end")}>
        <Card className={cn(
          "p-4",
          isUser ? "bg-primary/10" : "bg-card"
        )}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt="Uploaded satellite" 
              className="rounded-lg mb-3 max-h-64 object-cover"
            />
          )}
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </Card>
        {timestamp && (
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
