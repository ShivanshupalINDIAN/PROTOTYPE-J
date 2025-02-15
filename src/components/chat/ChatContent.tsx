import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChatRoom } from './ChatRoom';
import { ChatWelcome } from './ChatWelcome';

export function ChatContent() {
  return (
    <div className="flex-1 bg-white">
      <Routes>
        <Route index element={<ChatWelcome />} />
        <Route path="room/:roomId" element={<ChatRoom />} />
        <Route path="post/:postId" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}