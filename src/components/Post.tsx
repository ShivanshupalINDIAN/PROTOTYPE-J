import React from 'react';
import { ThumbsUp, MessageSquare, Share2, Flag, Check, AlertCircle } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const getVerificationBadge = () => {
    switch (post.factCheckStatus) {
      case 'verified':
        return (
          <div className="flex items-center text-green-600">
            <Check className="h-4 w-4 mr-1" />
            <span className="text-sm">Verified</span>
          </div>
        );
      case 'disputed':
        return (
          <div className="flex items-center text-red-600">
            <AlertCircle className="h-4 w-4 mr-1" />
            <span className="text-sm">Disputed</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center text-gray-500">
            <span className="text-sm">Pending verification</span>
          </div>
        );
    }
  };

  return (
    <article className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        <div className="ml-3">
          <p className="font-semibold">{post.author.username}</p>
          <p className="text-sm text-gray-500">
            {new Date(post.timestamp).toLocaleDateString()}
          </p>
        </div>
        {getVerificationBadge()}
      </div>

      <p className="text-gray-800 mb-4">{post.content}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <ThumbsUp className="h-5 w-5 mr-1" />
          <span>Like</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <MessageSquare className="h-5 w-5 mr-1" />
          <span>Comment</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <Share2 className="h-5 w-5 mr-1" />
          <span>Share</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <Flag className="h-5 w-5 mr-1" />
          <span>Report</span>
        </button>
      </div>
    </article>
  );
}