import React from 'react';
import { Video, Play as PlayIcon } from 'lucide-react';
import type { Short } from '../../types';
import { useNavigate } from 'react-router-dom';

interface ShortsPreviewProps {
  shorts: Short[];
}

export function ShortsPreview({ shorts }: ShortsPreviewProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-custom-cyan rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Video className="h-5 w-5 text-red-500" />
          <h2 className="text-lg font-semibold text-gray-900">Shorts</h2>
        </div>
        <button
          onClick={() => navigate('/shorts')}
          className="text-sm text-gray-400 hover:text-white"
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {shorts.slice(0, 6).map((short) => (
          <div
            key={short.id}
            className="aspect-[9/16] relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => navigate('/shorts')}
          >
            <video
              src={short.videoUrl}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <PlayIcon className="h-8 w-8" />
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-xs line-clamp-2">{short.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                {short.views.toLocaleString()} views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
