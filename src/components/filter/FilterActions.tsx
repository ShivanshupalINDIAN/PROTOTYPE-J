import React from 'react';

interface FilterActionsProps {
  onSubmit: () => void;
  onReset: () => void;
}

export function FilterActions({ onSubmit, onReset }: FilterActionsProps) {
  return (
    <div className="flex gap-4 mt-8">
      <button
        onClick={onSubmit}
        className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Apply Filters
      </button>
      <button
        onClick={onReset}
        className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}