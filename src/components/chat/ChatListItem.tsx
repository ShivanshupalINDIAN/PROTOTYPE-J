import React from 'react';
import { formatDistanceToNow } from '../../utils/formatters';
import type { Room } from '../../types/room';

interface ChatListItemProps {
  room: Room;
  onClick: () => void;
}

export function ChatListItem({ room, onClick }: ChatListItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-3 flex items-center space-x-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
    >
      <div className="relative">
        <img
          src={room.participants[0]?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64'}
          alt={room.name}
          className="w-10 h-10 rounded-full"
        />
        {room.participants[0]?.isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{room.name}</h3>
        <p className="text-sm text-gray-500 truncate">
          {room.lastMessage?.content || room.description || 'Start a conversation'}
        </p>
      </div>

      <div className="text-right">
        <p className="text-xs text-gray-500">
          {formatDistanceToNow(room.createdAt)}
        </p>
        {room.unreadCount > 0 && (
          <span className="inline-block px-2 py-1 bg-gray-900 text-white text-xs rounded-full mt-1">
            {room.unreadCount}
          </span>
        )}
      </div>
    </button>
  );
}