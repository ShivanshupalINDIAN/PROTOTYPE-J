import React from 'react';
import { VideoPlayer } from './VideoPlayer';
import { MessageCircle, Share2, ThumbsUp, Bookmark, MoreVertical } from 'lucide-react';
import type { Video } from '../../types';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <VideoPlayer video={video} />
      
      <div className="p-6">
        <div className="flex space-x-4">
          <img
            src={video.user.avatar}
            alt={video.user.username}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mt-1">
                  <span>{video.user.username}</span>
                  {video.user.isVerified && (
                    <svg className="h-4 w-4 ml-1 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                  <span className="mx-2">•</span>
                  <span>{video.views.toLocaleString()} views</span>
                  <span className="mx-2">•</span>
                  <span>{video.timestamp}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-gray-400 mt-3">{video.description}</p>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <ThumbsUp className="h-5 w-5" />
                <span>{video.likes.toLocaleString()}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <MessageCircle className="h-5 w-5" />
                <span>{video.comments.toLocaleString()}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Bookmark className="h-5 w-5" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}