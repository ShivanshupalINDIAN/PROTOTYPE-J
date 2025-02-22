import { useState, useRef } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical } from "lucide-react";

interface User {
  avatar: string;
  username: string;
}

interface VideoProps {
  videoUrls: string[];
  likes: number;
  comments?: number;
  description: string;
  user: User;
}

interface LocalPoliticsProps {
  videoData?: VideoProps; // Make videoData optional to prevent errors
}

export function LocalPolitics({ videoData }: LocalPoliticsProps) {
  if (!videoData) {
    return <div className="text-white">Loading video...</div>;
  }

  const { videoUrls, likes: initialLikes, comments = 0, description, user } = videoData;
  const { avatar, username } = user;

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  
  const lastTapRef = useRef<number | null>(null);

  const handleDoubleTap = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    const now = Date.now();

    if (lastTapRef.current && now - lastTapRef.current < 300) {
      setIsLiked((prev) => !prev);
      setLikes((prev) => (prev === initialLikes ? prev + 1 : initialLikes)); // Fix like logic
    }

    lastTapRef.current = now;
  };

  return (
    <div
      className="relative aspect-[9/16] w-full max-w-[400px] mx-auto bg-gray-900 rounded-lg overflow-hidden"
      onTouchStart={handleDoubleTap}
      onClick={handleDoubleTap}
    >
      {/* Video Container */}
      <div className="absolute inset-0">
        {videoUrls.length > 0 ? (
          <video
            src={videoUrls[0]} // Ensure at least one video is loaded
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            controls={false}
          />
        ) : (
          <div className="text-white">No video available</div>
        )}
      </div>

      {/* Overlay Controls */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60">
        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              setLikes((prev) => (isLiked ? prev - 1 : prev + 1)); // Fix like toggle logic
            }}
            className="flex flex-col items-center"
            aria-label="Like Video"
          >
            <Heart className={`w-7 h-7 ${isLiked ? "text-red-500 fill-red-500" : "text-white"}`} />
            <span className="text-xs mt-1 text-white">{likes.toLocaleString()}</span>
          </button>

          <button className="flex flex-col items-center" aria-label="Comment on Video">
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="text-xs mt-1 text-white">{comments.toLocaleString()}</span>
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
            <Bookmark className={`w-7 h-7 ${isSaved ? "text-yellow-500 fill-yellow-500" : "text-white"}`} />
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
              src={avatar}
              alt={username}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="font-semibold">{username}</span>
            <button className="ml-2 px-4 py-1 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors">
              Follow
            </button>
          </div>
          <p className="text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
