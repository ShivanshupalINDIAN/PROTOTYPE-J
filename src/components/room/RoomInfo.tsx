import React from 'react';
import { Users, Info } from 'lucide-react';

export function RoomInfo() {
  return (
    <div className="border-b border-gray-200 bg-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Digital Rights Discussion</h2>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Users className="h-4 w-4 mr-1" />
            <span>8 participants</span>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <Info className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}