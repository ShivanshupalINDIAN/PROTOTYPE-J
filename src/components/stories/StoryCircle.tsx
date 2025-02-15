import React from 'react';
import type { Story } from '../../types';

interface StoryCircleProps {
  story: Story;
  onClick: () => void;
}

export function StoryCircle({ story, onClick }: StoryCircleProps) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center space-y-1"
    >
      <div className={`w-16 h-16 rounded-full p-[2px] ${story.viewed ? 'bg-gray-300' : 'bg-gradient-to-tr from-gray-900 to-gray-600'}`}>
        <img
          src={story.user.avatar || 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop'}
          alt={story.user.username}
          className="w-full h-full rounded-full object-cover border-2 border-white"
        />
      </div>
      <span className="text-xs truncate w-16 text-center">
        {story.user.username}
      </span>
    </button>
  );
}