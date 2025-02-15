import React from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    content: 'Participated in the digital rights awareness campaign today! #DigitalRights',
    imageUrl: 'https://images.unsplash.com/photo-1577017040065-650ee4d43339?w=1280',
    likes: 245,
    comments: 23,
    shares: 12,
    timestamp: '2h ago'
  },
  {
    id: '2',
    content: 'Sharing insights from our latest community governance meeting.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1280',
    likes: 189,
    comments: 15,
    shares: 8,
    timestamp: '5h ago'
  }
];

export function ProfilePosts() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4 text-white">Posts</h2>
      {MOCK_POSTS.map((post) => (
        <div key={post.id} className="bg-gray-900 rounded-lg p-4">
          <p className="mb-4 text-white">{post.content}</p>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="Post content"
              className="rounded-lg mb-4 w-full object-cover max-h-96"
            />
          )}
          <div className="flex justify-between text-white">
            <button className="flex items-center gap-2 hover:text-white">
              <Heart className="h-5 w-5" />
              <span className="text-white">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <MessageCircle className="h-5 w-5" />
              <span className="text-white">{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <Share2 className="h-5 w-5" />
              <span className="text-white">{post.shares}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
