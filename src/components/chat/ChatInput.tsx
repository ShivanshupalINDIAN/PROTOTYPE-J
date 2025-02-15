import React, { useState } from 'react';
import { Send, Image, Link, Smile } from 'lucide-react';

export function ChatInput() {
  const [message, setMessage] = useState('');

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Image className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Link className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Smile className="w-5 h-5" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
        
        <button 
          className="p-2 bg-gray-900 text-white hover:bg-gray-800 rounded-full disabled:opacity-50"
          disabled={!message.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}