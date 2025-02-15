import React from 'react';
import { MapPin, Edit2 } from 'lucide-react';
import { componentStyles } from '../../styles/theme';
import type { User } from '../../types';

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-32 h-32 rounded-full border-4 border-white"
        />
        <button 
          className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          aria-label="Edit profile picture"
        >
          <Edit2 className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
          <h1 className="text-2xl font-bold text-black">{user.username}</h1>
          {user.isVerified && (
            <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          )}
          <button className={componentStyles.button.primary}>
            Edit Profile
          </button>
        </div>

        <p className="text-black mb-4">{user.bio}</p>

        <div className="flex items-center justify-center md:justify-start gap-6 mb-4">
          <div className="text-center">
            <span className="font-bold text-black">150</span>
            <span className="text-black text-sm block">Posts</span>
          </div>
          <div className="text-center">
            <span className="font-bold text-black">12</span>
            <span className="text-black text-sm block">Friends</span>
          </div>
          <div className="text-center">
            <span className="font-bold text-black">{user.protestsParticipated}</span>
            <span className="text-black text-sm block">Protests</span>
          </div>
          
        </div>

        <div className="flex items-center justify-center md:justify-start gap-2 text-black">
          <MapPin className="h-4 w-4" />
          <span>{user.location}</span>
        </div>
      </div>
    </div>
  );
}
