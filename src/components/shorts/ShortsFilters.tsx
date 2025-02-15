import React from 'react';
import { Tag } from 'lucide-react';

interface ShortsFiltersProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const SHORTS_TAGS = [
  'All',
  'Local politics',
  'State politics',
  'Central politics'
] as const;

export function ShortsFilters({ selectedTags, onTagToggle }: ShortsFiltersProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Filter by Tags</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {SHORTS_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}