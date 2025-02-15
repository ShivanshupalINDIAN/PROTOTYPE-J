import React from 'react';
import { Play, Volume2, Settings, Maximize2 } from 'lucide-react';
import type { Short } from '../../types';

interface VideoPlayerProps {
  video: Short; // Updated to use Short type
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className="relative aspect-[9/16] w-full bg-black rounded-lg overflow-hidden group">
        <video
          className="object-cover" // Removed duplicate className

          src={video.videoUrl}
          poster={video.thumbnailUrl}
          controls={false}
        />
      
      {/* Custom Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Play className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Volume2 className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Maximize2 className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1 bg-gray-600 rounded-full">
            <div className="h-full w-1/3 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
