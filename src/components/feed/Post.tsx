import React, { useState } from 'react';
import { PostActions } from './PostActions';
import { CommentSection } from '../comments/CommentSection';
import type { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="bg-black border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-900">{post.user.username}</p>
          <p className="text-sm text-gray-500">
            {new Date(post.timestamp).toLocaleDateString()}
          </p>
        </div>
      </div>

      <p className="text-gray-800 mb-4">{post.content}</p>

      {post.description && (
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-black text-sm">{post.description}</p>
        </div>
      )}

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="Post content"
          className="rounded-lg mb-4 w-full"
        />
      )}

      <PostActions
        postId={post.id}
        likes={post.likes}
        comments={post.comments}
        onLike={() => setIsLiked(!isLiked)}
        onSave={() => setIsSaved(!isSaved)}
        onCommentClick={() => setShowComments(!showComments)}
        isLiked={isLiked}
        isSaved={isSaved}
      />

      {showComments && <CommentSection />}
    </article>
  );
}
