import React from 'react';
import { useParams } from 'react-router-dom';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { ChatRoomHeader } from './ChatRoomHeader';

export function ChatRoom() {
  const { roomId, postId } = useParams();

  return (
    <div className="h-full flex flex-col bg-white">
      <ChatRoomHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}