import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ROOMS } from '../../data/mockRooms';
import { ChatListItem } from './ChatListItem';

export function ChatList() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4 space-y-2">
        {MOCK_ROOMS.map((room) => (
          <ChatListItem
            key={room.id}
            room={room}
            onClick={() => navigate(`/chat/room/${room.id}`)}
          />
        ))}
      </div>
    </div>
  );
}