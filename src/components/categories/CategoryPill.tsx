import React from 'react';
import { Category } from '../../types';

interface CategoryPillProps {
  category: Category;
  selected?: boolean;
  onClick?: () => void;
}

export function CategoryPill({ category, selected, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${
        selected
          ? 'bg-white text-black'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      <span>{category.icon}</span>
      <span>{category.name}</span>
    </button>
  );
}