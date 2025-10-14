import { useState } from 'react';
import ImageUpload from '../ImageUpload';

export default function ImageUploadExample() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <ImageUpload 
        onImageSelect={(file, previewUrl) => {
          console.log('File selected:', file.name);
          setImage(previewUrl);
        }}
        currentImage={image}
        onRemoveImage={() => setImage(null)}
      />
    </div>
  );
}
