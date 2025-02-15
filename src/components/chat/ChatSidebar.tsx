import React from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatList } from './ChatList';
import { ChatSearch } from './ChatSearch';

export function ChatSidebar() {
  return (
    <div className="w-80 top-24 bg-white border-r border-gray-200 flex flex-col">

      <ChatHeader />
      <ChatSearch />
      <ChatList />
    </div>
  );
}
