import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical } from 'lucide-react';
import type { Short } from '../../types';

interface ShortVideoProps {
  short: Short;
}

export function ShortVideo({ short }: ShortVideoProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full max-w-[400px] mx-auto bg-gray-900 rounded-lg overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0">
        {short.videoUrls.map((videoUrl, index) => (
          <video
            key={index}
            src={videoUrl}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            controls={false}
          />
        ))}
      </div>

      {/* Overlay Controls */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60">
        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="flex flex-col items-center"
          >
            <Heart 
              className={`w-7 h-7 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`}
            />
            <span className="text-xs mt-1 text-white">{short.likes.toLocaleString()}</span>
          </button>

          <button className="flex flex-col items-center">
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="text-xs mt-1 text-white">{short.comments?.toLocaleString() || '0'}</span>
          </button>

          <button className="flex flex-col items-center">
            <Share2 className="w-7 h-7 text-white" />
            <span className="text-xs mt-1 text-white">Share</span>
          </button>

          <button 
            onClick={() => setIsSaved(!isSaved)}
            className="flex flex-col items-center"
          >
            <Bookmark 
              className={`w-7 h-7 ${isSaved ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`}
            />
            <span className="text-xs mt-1 text-white">Save</span>
          </button>

          <button className="flex flex-col items-center">
            <MoreVertical className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-16 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <img
              src={short.user.avatar}
              alt={short.user.username}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="font-semibold">{short.user.username}</span>
            <button className="ml-2 px-4 py-1 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors">
              Follow
            </button>
          </div>
          <p className="text-sm line-clamp-2">{short.description}</p>
        </div>
      </div>
    </div>
  );
}
