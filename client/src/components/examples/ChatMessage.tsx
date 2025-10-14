import ChatMessage from '../ChatMessage';
import sampleImage from "@assets/stock_images/aerial_satellite_ima_860a5c9f.jpg";

export default function ChatMessageExample() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <ChatMessage 
        role="user" 
        content="Can you analyze this satellite image and identify the land cover types?"
        imageUrl={sampleImage}
        timestamp="2:30 PM"
      />
      <ChatMessage 
        role="assistant" 
        content="Based on the satellite imagery analysis, I can identify the following land cover types:

1. **Urban/Built-up Areas**: Dense clusters visible in the lower-left quadrant
2. **Agricultural Land**: Patchwork patterns indicating cultivated fields
3. **Forest Cover**: Dark green regions in the northern section
4. **Water Bodies**: Blue-tinted areas along the eastern edge

The multispectral analysis suggests this is a mixed-use landscape with approximately 35% agricultural land, 25% urban development, 30% forest, and 10% water coverage."
        timestamp="2:30 PM"
      />
    </div>
  );
}
