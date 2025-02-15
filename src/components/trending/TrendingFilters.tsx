import React from 'react';
import { Filter } from 'lucide-react';

interface TrendingFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  'All',
  'Technology',
  'Politics',
  'Development',
  'Society',
  'Education'
];

export function TrendingFilters({ selectedCategory, onCategoryChange }: TrendingFiltersProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Filter by Category</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-white text-gray-900'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}