import React from 'react';
import { Clock, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Video } from '../../types';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
      <div className="aspect-video relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black px-2 py-1 rounded text-xs">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <div className="flex space-x-3">
          <img
            src={video.user.avatar}
            alt={video.user.username}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold line-clamp-2">{video.title}</h3>
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <span>{video.user.username}</span>
              {video.user.isVerified && (
                <svg className="h-4 w-4 ml-1 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              )}
            </div>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{video.likes.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>{video.comments.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{video.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}