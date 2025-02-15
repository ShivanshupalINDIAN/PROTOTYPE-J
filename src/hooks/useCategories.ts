import { useState, useCallback } from 'react';

export function useCategories() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = useCallback((categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  }, []);

  const filterByCategories = useCallback(<T extends { categories: string[] }>(
    items: T[],
  ): T[] => {
    if (selectedCategories.length === 0) return items;
    return items.filter(item =>
      item.categories.some(cat => selectedCategories.includes(cat))
    );
  }, [selectedCategories]);

  return {
    selectedCategories,
    toggleCategory,
    filterByCategories
  };
}