import React from 'react';
import { Vote, FileText, Users } from 'lucide-react';
import { PoliticalPost } from '../components/governance/PoliticalPost';
import { MOCK_POLITICAL_POSTS } from '../data/mockPoliticalPosts';

export function GovernancePage() {
  return (
    <div className="space-y-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-900 p-6 rounded-lg">
        <Vote className="h-8 w-8 mb-4 text-white" />
        <h2 className="text-xl font-semibold mb-2 text-white">Active Proposals</h2>
        <p className="text-white">12 proposals need your vote</p>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <FileText className="h-8 w-8 mb-4 text-white" />
        <h2 className="text-xl font-semibold mb-2 text-white">Policy Updates</h2>
        <p className="text-white">Latest community guidelines</p>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <Users className="h-8 w-8 mb-4 text-white" />
        <h2 className="text-xl font-semibold mb-2 text-white">Community Decisions</h2>
        <p className="text-white">View voting history</p>
      </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Latest Updates from Leaders</h2>
        {MOCK_POLITICAL_POSTS.map((post) => (
          <PoliticalPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}