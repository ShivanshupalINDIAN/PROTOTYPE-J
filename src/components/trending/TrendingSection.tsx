import React from 'react';
import type { Trend } from '../../types';

const MOCK_TRENDS: Trend[] = [
  { id: '1', title: '#DigitalIndia', postCount: 52400, category: 'Technology' },
  { id: '2', title: '#CleanGovernance', postCount: 33200, category: 'Politics' },
  { id: '3', title: '#SmartCities', postCount: 28900, category: 'Development' },
];

export function TrendingSection() {
  return (
    <div className="bg-black text-white rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Trending Now</h2>
      <div className="space-y-4">
        {MOCK_TRENDS.map((trend) => (
          <div key={trend.id} className="hover:bg-gray-900 p-3 rounded-lg cursor-pointer">
            <p className="text-sm text-gray-400">{trend.category}</p>
            <p className="font-bold">{trend.title}</p>
            <p className="text-sm text-gray-400">{trend.postCount.toLocaleString()} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
}