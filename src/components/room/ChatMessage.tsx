import React from 'react';
import { formatDistanceToNow } from '../../utils/formatters';
import type { Message } from '../../types/room';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className="flex items-start space-x-3">
      <img
        src={message.sender.avatar}
        alt={message.sender.username}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-baseline space-x-2">
          <span className="font-semibold text-gray-900">{message.sender.username}</span>
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(message.timestamp)}
          </span>
        </div>
        <p className="mt-1 text-gray-700 bg-gray-50 rounded-lg py-2 px-3">{message.content}</p>
      </div>
    </div>
  );
}