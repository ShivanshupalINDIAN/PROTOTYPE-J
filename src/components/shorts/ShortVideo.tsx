import { useState, useRef } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical } from 'lucide-react';
import type { Short } from '../../types';
import { MOCK_SHORTS } from '../../data/mockShorts';


interface ShortVideoProps {
  short: Short;
}

export function ShortVideo({ short }: ShortVideoProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(short.likes); // Track likes count

  const lastTapRef = useRef<number | null>(null);
 


  const handleLikeToggle = () => {
    setIsLiked((prev) => {
      const newIsLiked = prev;
      setLikes((prevLikes) => (newIsLiked ? prevLikes + 1 : prevLikes - 1));
      return newIsLiked;
    });
  };

  const handleDoubleTap = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    const now = Date.now();

    if (lastTapRef.current && now - lastTapRef.current < 300) {
      handleLikeToggle();
    }

    lastTapRef.current = now;
  };

  return (
    <div
      className="relative aspect-[5/8] w-full max-w-[400px] mx-auto bg-gray-900 rounded-lg overflow-hidden"
      onTouchStart={handleDoubleTap}
      onClick={handleDoubleTap}
    >
      {/* Video Container */}
      <div className="absolute inset-0">
        {short.videoUrls.map((videoUrl, index) => (
          <video
            key={index}
            src={videoUrl}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            controls={false}
          />
        ))}
      </div>

      {/* Overlay Controls */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60">
        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
          <button onClick={handleLikeToggle} className="flex flex-col items-center" aria-label="Like Video">
            <Heart className={`w-7 h-7 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
            <span className="text-xs mt-1 text-white">{likes.toLocaleString()}</span>
          </button>

          <button className="flex flex-col items-center" aria-label="Comment on Video">
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="text-xs mt-1 text-white">{short.comments?.toLocaleString() || '0'}</span>
          </button>

          <button className="flex flex-col items-center" aria-label="Share Video">
            <Share2 className="w-7 h-7 text-white" />
            <span className="text-xs mt-1 text-white">Share</span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex flex-col items-center"
            aria-label="Save Video"
          >
            <Bookmark className={`w-7 h-7 ${isSaved ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} />
            <span className="text-xs mt-1 text-white">Save</span>
          </button>

          <button className="flex flex-col items-center" aria-label="More Options">
            <MoreVertical className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-16 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <img
              src={short.user.avatar}
              alt={short.user.username}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="font-semibold">{short.user.username}</span>
          </div>
          <p className="text-sm line-clamp-2">{short.description}</p>
        </div>
      </div>
    </div>
  );
}
