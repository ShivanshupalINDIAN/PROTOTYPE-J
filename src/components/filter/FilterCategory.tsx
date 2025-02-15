import React from 'react';

interface FilterCategoryProps {
  category: string;
  options: readonly string[];
  selectedOptions: string[];
  onOptionChange: (option: string) => void;
}

export function FilterCategory({ 
  category, 
  options, 
  selectedOptions, 
  onOptionChange 
}: FilterCategoryProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold capitalize">
        {category.replace(/([A-Z])/g, ' $1').trim()}
      </h2>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => onOptionChange(option)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedOptions.includes(option)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}