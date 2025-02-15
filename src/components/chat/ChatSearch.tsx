import React from 'react';
import { Search } from 'lucide-react';

export function ChatSearch() {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search chats..."
          className="w-full pl-28 pr-6 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"

        />
      </div>
    </div>
  );
}
