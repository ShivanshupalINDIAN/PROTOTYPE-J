import React, { useState } from 'react';
import { X, Video, FileText, Users } from 'lucide-react';
import { MOCK_VIDEOS } from '../../data/mockVideos';
import { MOCK_POLITICAL_POSTS } from '../../data/mockPoliticalPosts';

interface ShareContentProps {
  onClose: () => void;
}

export function ShareContent({ onClose }: ShareContentProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'posts' | 'protests'>('videos');

  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Share Content</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'videos' ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Video className="h-4 w-4 mr-2" />
            Videos
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'posts' ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="h-4 w-4 mr-2" />
            Posts
          </button>
          <button
            onClick={() => setActiveTab('protests')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'protests' ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            Protests
          </button>
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto">
          {activeTab === 'videos' && MOCK_VIDEOS.map(video => (
            <div key={video.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-20 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{video.title}</h4>
                <p className="text-sm text-gray-600">{video.views.toLocaleString()} views</p>
              </div>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg">
                Share
              </button>
            </div>
          ))}

          {activeTab === 'posts' && MOCK_POLITICAL_POSTS.map(post => (
            <div key={post.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-20 h-12 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{post.title}</h4>
                <p className="text-sm text-gray-600">By {post.author.name}</p>
              </div>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg">
                Share
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}