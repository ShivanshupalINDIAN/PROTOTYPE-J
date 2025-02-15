import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PostActionsProps {
  postId: string;
  likes: number;
  comments: number;
  onLike: () => void;
  onSave: () => void;
  onCommentClick: () => void; // Added this line
  isLiked?: boolean;
  isSaved?: boolean;
}

export function PostActions({ 
  postId, 
  likes, 
  comments, 
  onLike, 
  onSave, 
  onCommentClick, // Added this line
  isLiked = false, 
  isSaved = false 
}: PostActionsProps) {
  return (
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
      <button 
        onClick={onLike}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        <span>{likes}</span>
      </button>

      <button 
        onClick={onCommentClick} // Correctly using the onCommentClick prop
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{comments}</span>
      </button>

      <Link 
        to={`/chat/post/${postId}`}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <Share2 className="h-5 w-5" />
        <span>Share</span>
      </Link>

      <button 
        onClick={onSave}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-yellow-500 text-yellow-500' : ''}`} />
        <span>Save</span>
      </button>
    </div>
  );
}
