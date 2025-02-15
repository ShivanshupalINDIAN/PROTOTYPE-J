import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { CategoryPill } from './CategoryPill';

interface CategoryFilterProps {
  selectedCategories: string[];
  onToggleCategory: (categoryId: string) => void;
  className?: string;
}

export function CategoryFilter({ 
  selectedCategories, 
  onToggleCategory,
  className = "" 
}: CategoryFilterProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-lg font-semibold mb-3">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <CategoryPill
            key={category.id}
            category={category}
            selected={selectedCategories.includes(category.id)}
            onClick={() => onToggleCategory(category.id)}
          />
        ))}
      </div>
    </div>
  );
}