import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import type { User } from '../../types';

interface ProfileStatsProps {
  user: User;
}

export function ProfileStats({ user }: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="h-6 w-6 text-white" />
          <h2 className="font-semibold text-white">Social Credit Score</h2>
        </div>
        <div className="text-3xl font-bold text-red-500">{user.socialCreditScore}</div>
        <p className="text-sm text-gray-300 mt-1">Excellent Standing</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <Award className="h-6 w-6 text-white" />
          <h2 className="font-semibold text-white">Tokens Earned</h2>
        </div>
        <div className="text-3xl font-bold text-yellow-500">{user.tokens}</div>
        <p className="text-sm text-gray-300 mt-1">Available Balance</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <Users className="h-6 w-6 text-white" />
          <h2 className="font-semibold text-white">Protest Impact</h2>
        </div>
        <div className="text-3xl font-bold text-blue-500">{user.protestsParticipated}</div>
        <p className="text-sm text-gray-300 mt-1">Protests Participated</p>
      </div>
    </div>
  );
}
