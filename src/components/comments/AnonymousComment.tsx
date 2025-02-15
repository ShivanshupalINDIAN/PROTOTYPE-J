import React from 'react';
import { User, ThumbsUp, ThumbsDown, MoreVertical } from 'lucide-react';
import { formatDistanceToNow } from '../../utils/formatters';

interface AnonymousCommentProps {
  comment: {
    id: string;
    content: string;
    timestamp: number;
    likes: number;
    dislikes: number;
  };
  onLike: () => void;
  onDislike: () => void;
}

export function AnonymousComment({ comment, onLike, onDislike }: AnonymousCommentProps) {
  return (
    <div className="flex space-x-3 p-4 hover:bg-gray-800/50 rounded-lg transition-colors">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Anonymous</span>
            <span className="text-gray-500 text-sm">
              {formatDistanceToNow(comment.timestamp)}
            </span>
          </div>
          <button className="p-1 hover:bg-gray-700 rounded-full">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        
        <p className="mt-1 text-white">{comment.content}</p>
        
        <div className="flex items-center space-x-4 mt-2">
          <button 
            onClick={onLike}
            className="flex items-center space-x-1 text-gray-400 hover:text-white"
          >
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm">{comment.likes}</span>
          </button>
          
          <button 
            onClick={onDislike}
            className="flex items-center space-x-1 text-gray-400 hover:text-white"
          >
            <ThumbsDown className="w-4 h-4" />
            <span className="text-sm">{comment.dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}