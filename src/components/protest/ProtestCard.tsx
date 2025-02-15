import React, { useState } from 'react';
import { Users, MapPin, Calendar, Share2, MessageCircle, Heart, Bell } from 'lucide-react';

interface ProtestProps {
  protest: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    participants: number;
    status: 'upcoming' | 'active' | 'completed';
    videoUrl: string;
    likes: number;
    comments: number;
    dailyUpdates: Array<{
      date: string;
      content: string;
    }>;
  };
}

export function ProtestCard({ protest }: ProtestProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
      {/* Video Section */}
      <div className="aspect-video relative">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EuEKWlXSLeY?si=cPirbxfFmbA4AFLg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{protest.title}</h2>
            <p className="text-gray-400">{protest.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            protest.status === 'active' ? 'bg-green-500' :
            protest.status === 'upcoming' ? 'bg-blue-500' :
            'bg-gray-500'
          }`}>
            {protest.status}
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="h-5 w-5" />
            <span>{protest.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="h-5 w-5" />
            <span>{protest.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="h-5 w-5" />
            <span>{protest.participants} Reposted</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setHasJoined(!hasJoined)}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              hasJoined
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {hasJoined ? 'Reposted' : 'Repost'}
          </button>
          <button
            onClick={() => setIsSubscribed(!isSubscribed)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Bell className={`h-5 w-5 ${isSubscribed ? 'text-blue-400' : 'text-gray-400'}`} />
          </button>
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <Share2 className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Engagement Stats */}
        <div className="flex gap-6 mb-6 text-gray-400">
          <button className="flex items-center gap-2 hover:text-white">
            <Heart className="h-5 w-5" />
            <span>{protest.likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-white">
            <MessageCircle className="h-5 w-5" />
            <span>{protest.comments}</span>
          </button>
        </div>

        {/* Daily Updates */}
        <div className="border-t border-gray-800 pt-4">
          <button
            onClick={() => setShowUpdates(!showUpdates)}
            className="flex items-center justify-between w-full text-left mb-2"
          >
            <h3 className="font-semibold text-white">Daily Updates</h3>
            <span className="text-sm text-white">
              {showUpdates ? 'Hide' : 'Show'}
            </span>
          </button>
          
          {showUpdates && (
            <div className="space-y-4">
              {protest.dailyUpdates.map((update, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="text-sm text-white mb-2">{update.date}</div>
                  <p className="text-white">{update.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
