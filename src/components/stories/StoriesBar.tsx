import React from 'react';
import { Plus } from 'lucide-react';
import { StoryCircle } from './StoryCircle';
import type { Story } from '../../types';

const MOCK_STORIES: Story[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'yourstory',
      fullName: 'Your Story',
      followers: 0,
      following: 0,
      isVerified: false
    },
    imageUrl: '',
    timestamp: Date.now(),
    viewed: false
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'janedoe',
      fullName: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop',
      followers: 1234,
      following: 432,
      isVerified: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    timestamp: Date.now() - 3600000,
    viewed: false
  },
  {
    id: '3',
    user: {
      id: '3',
      username: 'johndoe',
      fullName: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop',
      followers: 5678,
      following: 345,
      isVerified: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    timestamp: Date.now() - 7200000,
    viewed: true
  }
];

export function StoriesBar() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        <button className="flex flex-col items-center space-y-1">
          <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-50">
            <Plus className="h-6 w-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-500">Add story</span>
        </button>
        
        {MOCK_STORIES.map((story) => (
          <StoryCircle
            key={story.id}
            story={story}
            onClick={() => console.log('View story:', story.id)}
          />
        ))}
      </div>
    </div>
  );
}