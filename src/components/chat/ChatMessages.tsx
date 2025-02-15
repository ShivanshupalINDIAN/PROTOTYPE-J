import React from 'react';
import { ChatMessage } from './ChatMessage';

export function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {/* Placeholder messages */}
      <ChatMessage 
        message={{
          id: '1',
          content: 'This is a sample message',
          timestamp: Date.now(),
          sender: {
            id: '1',
            username: 'User',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64',
            isOnline: true
          }
        }}
      />
    </div>
  );
}