import React, { useState, useMemo } from 'react';
import { TrendingCard } from '../components/trending/TrendingCard';
import { TrendingFilters } from '../components/trending/TrendingFilters';
import type { Trend } from '../types';

const MOCK_TRENDS: Trend[] = [
  { id: '1', title: '#DigitalIndia', postCount: 52400, category: 'Technology' },
  { id: '2', title: '#CleanGovernance', postCount: 33200, category: 'Politics' },
  { id: '3', title: '#SmartCities', postCount: 28900, category: 'Development' },
  { id: '4', title: '#RuralDevelopment', postCount: 25600, category: 'Society' },
  { id: '5', title: '#DigitalLiteracy', postCount: 22100, category: 'Education' },
  { id: '6', title: '#TechInnovation', postCount: 19800, category: 'Technology' },
  { id: '7', title: '#PolicyReform', postCount: 18500, category: 'Politics' },
  { id: '8', title: '#DigitalSkills', postCount: 17200, category: 'Education' }
];

export function TrendingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTrends = useMemo(() => {
    if (selectedCategory === 'All') return MOCK_TRENDS;
    return MOCK_TRENDS.filter(trend => trend.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Trending Topics</h1>
        <p className="text-gray-400">Discover what's trending in your areas of interest</p>
      </div>

      <TrendingFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid gap-4">
        {filteredTrends.map((trend) => (
          <TrendingCard key={trend.id} trend={trend} />
        ))}
      </div>
    </div>
  );
}