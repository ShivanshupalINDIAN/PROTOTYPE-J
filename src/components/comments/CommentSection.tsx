import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { AnonymousComment } from './AnonymousComment';
import { AnonymousCommentInput } from './AnonymousCommentInput';

interface Comment {
  id: string;
  content: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      timestamp: Date.now(),
      likes: 0,
      dislikes: 0
    };
    setComments(prev => [newComment, ...prev]);
  };

  const handleLike = (commentId: string) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const handleDislike = (commentId: string) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === commentId
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : comment
      )
    );
  };

  return (
    <div className="border-t border-gray-800 mt-4">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-semibold">
            Comments ({comments.length})
          </h3>
        </div>
      </div>

      <AnonymousCommentInput onSubmit={handleAddComment} />

      <div className="space-y-2">
        {comments.map(comment => (
          <AnonymousComment
            key={comment.id}
            comment={comment}
            onLike={() => handleLike(comment.id)}
            onDislike={() => handleDislike(comment.id)}
          />
        ))}
      </div>
    </div>
  );
}