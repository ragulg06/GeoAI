import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import UseCaseChips from "@/components/UseCaseChips";
import ImageUpload from "@/components/ImageUpload";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  imageUrl?: string;
  timestamp: string;
}

export default function Chat() {
  //todo: remove mock functionality - replace with real API calls
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showImageUpload, setShowImageUpload] = useState(false);
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

    //todo: remove mock functionality - simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Based on the analysis, I can provide insights on the satellite imagery:\n\n**Image Analysis:**\nThe satellite data shows clear patterns of land use classification. I've identified urban development areas, agricultural zones, and natural vegetation cover.\n\n**Key Findings:**\n• Urban density: High concentration in central regions\n• Vegetation health: NDVI values indicate healthy crop growth\n• Water resources: Several water bodies detected in the eastern quadrant\n\nWould you like me to provide more detailed analysis on any specific aspect?`,
        timestamp
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleUseCaseSelect = (useCase: string, prompt: string) => {
    setInputValue(prompt);
    console.log('Selected use case:', useCase);
  };

  const handleImageSelect = (file: File, previewUrl: string) => {
    setUploadedImage(previewUrl);
    setShowImageUpload(false);
    console.log('Image selected:', file.name);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16 pb-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {messages.length === 0 && !showImageUpload ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="size-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-3">Start Your Earth Observation Analysis</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
                Upload satellite imagery and select a use case to get AI-powered insights on land cover, change detection, and environmental monitoring.
              </p>
              <Button 
                size="lg"
                onClick={() => setShowImageUpload(true)}
                data-testid="button-start-upload"
              >
                Upload Satellite Image
              </Button>
            </div>
          ) : (
            <>
              {showImageUpload && (
                <Card className="mb-6 p-6">
                  <h3 className="font-semibold mb-4">Upload Satellite Image</h3>
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    currentImage={uploadedImage}
                    onRemoveImage={() => setUploadedImage(null)}
                  />
                </Card>
              )}

              {uploadedImage && !showImageUpload && (
                <Card className="mb-6 p-6">
                  <h3 className="font-semibold mb-4">Select Analysis Type</h3>
                  <UseCaseChips onSelectUseCase={handleUseCaseSelect} />
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    currentImage={uploadedImage}
                    onRemoveImage={() => setUploadedImage(null)}
                  />
                </Card>
              )}

              <div className="space-y-4">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    role={message.role}
                    content={message.content}
                    imageUrl={message.imageUrl}
                    timestamp={message.timestamp}
                  />
                ))}
                {isLoading && <LoadingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            </>
          )}
        </div>
      </main>

      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendMessage}
        onImageUploadClick={() => setShowImageUpload(!showImageUpload)}
        disabled={isLoading}
      />

      {/* Floating Help Button */}
      <Button
        size="icon"
        variant="secondary"
        className="fixed bottom-24 right-6 size-12 rounded-full shadow-lg"
        data-testid="button-help"
      >
        <HelpCircle className="size-6" />
      </Button>
    </div>
  );
}
