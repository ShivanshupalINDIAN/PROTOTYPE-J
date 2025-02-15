import React from 'react';
import { StoriesBar } from '../stories/StoriesBar';
import { Post } from './Post';
import type { Post as PostType } from '../../types';

const MOCK_POSTS: PostType[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'janedoe',
      fullName: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop',
      followers: 1234,
      following: 432,
      isVerified: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    caption: 'Living my best life ✨',
    likes: 1234,
    comments: 56,
    timestamp: Date.now() - 3600000,
    saved: false,
    liked: false
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'johndoe',
      fullName: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop',
      followers: 5678,
      following: 345,
      isVerified: false
    },
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    caption: 'Just another day at the office 💼',
    likes: 567,
    comments: 23,
    timestamp: Date.now() - 7200000,
    saved: true,
    liked: true
  }
];

export function Feed() {
  return (
    <div className="max-w-xl mx-auto pt-20 pb-8">
      <StoriesBar />
      {MOCK_POSTS.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}