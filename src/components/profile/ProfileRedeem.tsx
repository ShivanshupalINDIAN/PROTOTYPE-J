import React from 'react';
import { Gift, Award, Zap } from 'lucide-react';

interface RewardItem {
  id: string;
  title: string;
  description: string;
  tokenCost: number;
  icon: keyof typeof icons;
}

const icons = {
  gift: Gift,
  award: Award,
  zap: Zap
};

const MOCK_REWARDS: RewardItem[] = [
  {
    id: '1',
    title: 'Premium Membership',
    description: 'Get access to exclusive features and content',
    tokenCost: 500,
    icon: 'award'
  },
  {
    id: '2',
    title: 'Boost Post',
    description: 'Increase visibility of your next post',
    tokenCost: 100,
    icon: 'zap'
  },
  {
    id: '3',
    title: 'Custom Badge',
    description: 'Create your own profile badge',
    tokenCost: 300,
    icon: 'gift'
  }
];

export function ProfileRedeem() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Redeem Tokens</h2>
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <span className="text-white font-semibold">2,500 tokens</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_REWARDS.map((reward) => {
          const IconComponent = icons[reward.icon];
          return (
            <div key={reward.id} className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white">{reward.title}</h3>
              </div>
              <p className="text-white text-sm mb-4">{reward.description}</p>
              <button className="w-full bg-white text-white py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Redeem for {reward.tokenCost} tokens
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
