import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import EnhancedChatMessage from "@/components/EnhancedChatMessage";
import ChatInput from "@/components/ChatInput";
import EnhancedUseCaseChips from "@/components/EnhancedUseCaseChips";
import ImageUpload from "@/components/ImageUpload";
import LoadingIndicator from "@/components/LoadingIndicator";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Satellite } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  imageUrl?: string;
  timestamp: string;
  confidence?: number;
  landCoverData?: { type: string; percentage: number }[];
  useCase?: string;
}

export default function Chat() {
  //todo: remove mock functionality - replace with real API calls
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      imageUrl: uploadedImage || undefined,
      timestamp
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setUploadedImage(null);
    setIsLoading(true);

    //todo: remove mock functionality - simulate AI response with realistic EO data
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `**Earth Observation Analysis Complete**\n\nBased on multispectral analysis using EarthDial vision encoder and GPT-OSS processing:\n\n**Land Cover Classification:**\nThe imagery reveals a diverse landscape with distinct land use patterns:\n\n• **Urban/Built-up Areas:** Dense settlement clusters visible in the southern quadrant, covering approximately 28% of the analyzed region\n• **Agricultural Land:** Extensive cultivated fields showing healthy vegetation (NDVI: 0.72-0.85), representing 42% of total area\n• **Forest Cover:** Dense canopy in northern sectors with high biomass indicators, approximately 23% coverage\n• **Water Bodies:** Multiple reservoirs and river systems detected in eastern region (7% of area)\n\n**Environmental Indicators:**\n• Vegetation Health Index: 0.78 (Healthy)\n• Surface Temperature: 28-32°C (Normal range)\n• Soil Moisture: Adequate levels detected in agricultural zones\n\n**Change Detection Notes:**\nMinor urban expansion detected compared to baseline imagery (2.3% increase in built-up area over 6 months).\n\n*Analysis completed in 2.8 seconds using quantized single-GPU deployment.*`,
        timestamp,
        confidence: 94,
        landCoverData: [
          { type: "Agriculture", percentage: 42 },
          { type: "Urban", percentage: 28 },
          { type: "Forest", percentage: 23 },
          { type: "Water", percentage: 7 }
        ],
        useCase: selectedUseCase === "captioning" ? "Image Captioning" : 
                selectedUseCase === "vqa" ? "Visual Q&A" :
                selectedUseCase === "change_detection" ? "Change Detection" : "Report Generation"
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      setSelectedUseCase("");
    }, 2500);
  };

  const handleUseCaseSelect = (useCase: string, prompt: string) => {
    setInputValue(prompt);
    setSelectedUseCase(useCase);
    console.log('Selected use case:', useCase);
  };

  const handleImageSelect = (file: File, previewUrl: string) => {
    setUploadedImage(previewUrl);
    console.log('Image selected:', file.name);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16 pb-64 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Analytics Dashboard */}
          <div className="mb-8">
            <AnalyticsDashboard />
          </div>

          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Satellite className="size-10 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">GeoAI Analysis Platform</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl">
                Upload satellite imagery and select an analysis mode to get AI-powered insights using EarthDial + GPT-OSS
              </p>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto space-y-4">
              {messages.map((message) => (
                <EnhancedChatMessage
                  key={message.id}
                  role={message.role}
                  content={message.content}
                  imageUrl={message.imageUrl}
                  timestamp={message.timestamp}
                  confidence={message.confidence}
                  landCoverData={message.landCoverData}
                  useCase={message.useCase}
                />
              ))}
              {isLoading && <LoadingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>

      {/* Enhanced Input Area with Persistent Chips */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          {/* Image Upload Section */}
          {uploadedImage && (
            <div className="mb-4">
              <ImageUpload
                onImageSelect={handleImageSelect}
                currentImage={uploadedImage}
                onRemoveImage={() => setUploadedImage(null)}
              />
            </div>
          )}
          
          {/* Use Case Chips - Always Visible */}
          <div className="mb-4">
            <EnhancedUseCaseChips 
              onSelectUseCase={handleUseCaseSelect}
              selectedUseCase={selectedUseCase}
            />
          </div>
          
          {/* Input Area */}
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*,.tif,.tiff';
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    handleImageSelect(file, previewUrl);
                  }
                };
                input.click();
              }}
              data-testid="button-upload"
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </Button>
            
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }
              }}
              placeholder="Ask about satellite imagery, land cover, change detection, or request a detailed report..."
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none text-foreground text-sm sm:text-base"
              disabled={isLoading}
              data-testid="input-message"
            />
            
            <Button
              size="icon"
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
              data-testid="button-send"
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Help Button */}
      <Button
        size="icon"
        variant="secondary"
        className="fixed bottom-24 right-4 sm:right-6 size-10 sm:size-12 rounded-full shadow-lg"
        data-testid="button-help"
      >
        <HelpCircle className="size-6" />
      </Button>
    </div>
  );
}
