import React from 'react';
import { formatDistanceToNow } from '../../utils/formatters';
import { Users } from 'lucide-react';

interface BaseChatPreview {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
}

interface NativeChatPreview extends BaseChatPreview {
  online: boolean;
}

interface GlobalChatPreview extends BaseChatPreview {
  participants: number;
}

interface ChatPreviewProps {
  chat: NativeChatPreview | GlobalChatPreview;
  type: 'native' | 'global';
}

export function ChatPreview({ chat, type }: ChatPreviewProps) {
  return (
    <button className="w-full p-3 flex items-center space-x-3 hover:bg-gray-100 rounded-lg transition-colors text-left">
      <div className="relative">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="w-12 h-12 rounded-full"
        />
        {'online' in chat && chat.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {formatDistanceToNow(chat.timestamp.getTime())}
          </span>
        </div>

        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          {chat.unread > 0 && (
            <span className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
              {chat.unread}
            </span>
          )}
        </div>

        {'participants' in chat && (
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <Users className="h-3 w-3 mr-1" />
            <span>{chat.participants} participants</span>
          </div>
        )}
      </div>
    </button>
  );
}