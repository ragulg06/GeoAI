import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImageSelect: (file: File, previewUrl: string) => void;
  currentImage?: string | null;
  onRemoveImage?: () => void;
}

export default function ImageUpload({ onImageSelect, currentImage, onRemoveImage }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const previewUrl = URL.createObjectURL(file);
      onImageSelect(file, previewUrl);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      onImageSelect(file, previewUrl);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  if (currentImage) {
    return (
      <Card className="relative overflow-hidden">
        <img 
          src={currentImage} 
          alt="Selected satellite" 
          className="w-full max-h-64 object-cover rounded-lg"
        />
        {onRemoveImage && (
          <Button
            size="icon"
            variant="destructive"
            className="absolute top-2 right-2"
            onClick={onRemoveImage}
            data-testid="button-remove-image"
          >
            <X className="size-4" />
          </Button>
        )}
      </Card>
    );
  }

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.tif,.tiff"
        onChange={handleFileInput}
        className="hidden"
        data-testid="input-file"
      />
      
      <Card
        className={cn(
          "border-2 border-dashed cursor-pointer transition-all hover-elevate",
          isDragging && "border-primary bg-primary/10"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        data-testid="dropzone"
      >
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
          <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4">
            {isDragging ? (
              <Upload className="size-8 text-primary" />
            ) : (
              <ImageIcon className="size-8 text-primary" />
            )}
          </div>
          <p className="text-sm font-medium mb-1">
            {isDragging ? "Drop image here" : "Upload satellite image"}
          </p>
          <p className="text-xs text-muted-foreground">
            Supports JPG, PNG, TIF formats. Drag & drop or click to browse.
          </p>
        </div>
      </Card>
    </div>
  );
}
