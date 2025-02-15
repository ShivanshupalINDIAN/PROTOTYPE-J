import React from 'react';
import { formatDistanceToNow } from '../../utils/formatters';
import type { Room } from '../../types/room';

interface RoomItemProps {
  room: Room;
  onClick?: () => void;
}

export function RoomItem({ room, onClick }: RoomItemProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full p-3 flex items-center space-x-3 hover:bg-gray-800 rounded-lg transition-colors"
    >
      <div className="relative flex -space-x-2">
        {room.participants.slice(0, 2).map(participant => (
          <div key={participant.id} className="relative">
            <img
              src={participant.avatar}
              alt={participant.username}
              className="w-10 h-10 rounded-full border-2 border-gray-900"
            />
            {participant.isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full" />
            )}
          </div>
        ))}
      </div>
      
      <div className="flex-1 text-left">
        <h3 className="font-semibold">{room.name}</h3>
        <p className="text-sm text-gray-400 truncate">
          {room.lastMessage?.content || room.description}
        </p>
      </div>
      
      <div className="text-right">
        <p className="text-xs text-gray-400">
          {formatDistanceToNow(room.createdAt)}
        </p>
        {room.unreadCount > 0 && (
          <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs rounded-full mt-1">
            {room.unreadCount}
          </span>
        )}
      </div>
    </button>
  );
}