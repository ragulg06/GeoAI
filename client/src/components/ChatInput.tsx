import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  onImageUploadClick: () => void;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export default function ChatInput({ 
  onSend, 
  onImageUploadClick, 
  disabled, 
  value: externalValue,
  onChange: externalOnChange
}: ChatInputProps) {
  const [internalValue, setInternalValue] = useState("");
  const value = externalValue !== undefined ? externalValue : internalValue;
  const onChange = externalOnChange || setInternalValue;

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value);
      onChange("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="sticky bottom-0 border-t border-border/40 bg-background/80 backdrop-blur-xl p-4">
      <div className="max-w-4xl mx-auto flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={onImageUploadClick}
          data-testid="button-upload"
        >
          <Paperclip className="size-5" />
        </Button>
        
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask about the satellite image or describe what you want to analyze..."
          className="resize-none min-h-[60px] max-h-[200px]"
          disabled={disabled}
          data-testid="input-message"
        />
        
        <Button
          size="icon"
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          data-testid="button-send"
        >
          <Send className="size-5" />
        </Button>
      </div>
    </div>
  );
}
