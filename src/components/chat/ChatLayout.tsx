import React from 'react';
import { ChatSidebar } from './ChatSidebar';
import { ChatContent } from './ChatContent';

export function ChatLayout() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatSidebar />
      <ChatContent />
    </div>
  );
}