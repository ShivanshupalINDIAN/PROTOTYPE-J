import React from 'react';
import { Post } from './Post';
import type { Post as PostType } from '../types';

const MOCK_POSTS: PostType[] = [
  {
    id: '1',
    author: {
      id: '1',
      username: 'DigiPub',
      reputation: 95,
      isVerified: true
    },
    content: 'Breaking: New environmental protection measures announced for sustainable urban development.',
    timestamp: Date.now() - 3600000,
    factCheckStatus: 'verified',
    verificationScore: 0.95
  },
  {
    id: '2',
    author: {
      id: '2',
      username: 'CommunityWatch',
      reputation: 82,
      isVerified: true
    },
    content: 'Local community initiative launches to promote digital literacy among senior citizens.',
    timestamp: Date.now() - 7200000,
    factCheckStatus: 'pending',
    verificationScore: 0.7
  }
];

export function Feed() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      {MOCK_POSTS.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}