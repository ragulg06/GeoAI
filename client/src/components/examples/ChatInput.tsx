import { useState } from 'react';
import ChatInput from '../ChatInput';

export default function ChatInputExample() {
  const [message, setMessage] = useState("");

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1" />
      <ChatInput 
        value={message}
        onChange={setMessage}
        onSend={(msg) => {
          console.log('Sending message:', msg);
          setMessage("");
        }}
        onImageUploadClick={() => console.log('Upload clicked')}
      />
    </div>
  );
}
