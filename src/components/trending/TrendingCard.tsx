import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Trend } from '../../types';

interface TrendingCardProps {
  trend: Trend;
}

export function TrendingCard({ trend }: TrendingCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold mb-2 text-white">{trend.title}</h2>
          <div className="flex items-center text-white text-sm">
            <span className="mr-2">{trend.category}</span>
            <ArrowUpRight className="h-4 w-4" />
            <span className="ml-1">Trending</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-white">
            {trend.postCount.toLocaleString()}
          </span>
          <p className="text-sm text-white">posts</p>
        </div>
      </div>
    </div>
  );
}
