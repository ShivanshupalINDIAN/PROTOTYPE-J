import React from 'react';
import { RoomList } from '../components/room/RoomList';
import { ChatArea } from '../components/room/ChatArea';
import { RoomInfo } from '../components/room/RoomInfo';

export function RoomPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] mt-16">
      {/* Room List Sidebar */}
      <div className="w-80 border-r border-gray-800 bg-gray-900">
        <RoomList />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <RoomInfo />
        <ChatArea />
      </div>
    </div>
  );
}