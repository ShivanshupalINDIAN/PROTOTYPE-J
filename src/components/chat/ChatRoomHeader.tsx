import React from 'react';
import { Users, Info } from 'lucide-react';

export function ChatRoomHeader() {
  return (
    <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200 bg-white">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Discussion Title</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>12 participants</span>
        </div>
      </div>
      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
        <Info className="w-5 h-5" />
      </button>
    </div>
  );
}