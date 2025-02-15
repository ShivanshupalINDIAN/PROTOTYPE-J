import React, { useState } from 'react';
import { Send, Image, Link, Smile, Share2 } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ShareContent } from './ShareContent';
import type { Message } from '../../types/room';

interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  const [message, setMessage] = useState('');
  const [showShare, setShowShare] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </div>

      {/* Share Content Drawer */}
      {showShare && (
        <ShareContent onClose={() => setShowShare(false)} />
      )}

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <Image className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <Link className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setShowShare(true)}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-600"
          >
            <Share2 className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <Smile className="h-5 w-5" />
          </button>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 rounded-full transition-colors text-white"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}