import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Flag, ThumbsDown, Play } from 'lucide-react';
import { CommentSection } from '../comments/CommentSection';
import { ReportModal } from '../../components/report/ReportModal';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  channelName: string;
  channelLogo: string;
  isPrimary?: boolean;
  className?: string;
}

export function VideoEmbed({ 
  videoId, 
  title, 
  channelName,
  channelLogo,
  isPrimary = false,
  className = '' 
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(isPrimary);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className={`relative w-full pt-[56.25%] group ${className}`}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Play className="w-12 h-12 text-white" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src={channelLogo}
              alt={`${channelName} logo`}
              className="w-10 h-10 rounded-full"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              {title}
            </h3>
            <div className="flex items-center text-sm text-gray-400">
              <span className="font-medium">{channelName}</span>
              <span className="mx-2">•</span>
              <span>10K views</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center space-x-2 ${isLiked ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>4.2K</span>
          </button>
          
          <button 
            onClick={() => setIsDisliked(!isDisliked)}
            className={`flex items-center space-x-2 ${isDisliked ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
          >
            <ThumbsDown className="w-5 h-5" />
            <span>24</span>
          </button>
          
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <MessageCircle className="w-5 h-5" />
            <span>256</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
          
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className={`flex items-center space-x-2 ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            <span>Save</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-400 hover:text-white" onClick={() => setIsReportModalOpen(true)}>
            <Flag className="w-5 h-5" />
            <span>Report</span>
          </button>
        </div>

        {isPrimary && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-white">Description:</span>
              <p className="mt-1">
                Learn about digital rights and privacy in this comprehensive guide. Join us in understanding how to protect your online presence and advocate for digital freedom.
              </p>
            </div>
          </div>
        )}

        {showComments && <CommentSection />}
      </div>

      {/* Report Modal */}
      <ReportModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} />
    </div>
  );
}
