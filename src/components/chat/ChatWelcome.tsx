import React from 'react';
import { MessageSquare } from 'lucide-react';

export function ChatWelcome() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Chat</h2>
        <p className="text-gray-600">Select a conversation to start messaging</p>
      </div>
    </div>
  );
}