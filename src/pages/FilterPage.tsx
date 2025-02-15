import React, { useState } from 'react';
import { Filter as FilterIcon } from 'lucide-react';
import { FILTER_CATEGORIES } from '../constants/filterCategories';
import { FilterCategory } from '../components/filter/FilterCategory';
import { FilterActions } from '../components/filter/FilterActions';

type FilterState = Record<keyof typeof FILTER_CATEGORIES, string[]>;

export function FilterPage() {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    contentType: [],
    topics: [],
    location: [],
    language: [],
    sortBy: []
  });

  const handleFilterChange = (category: keyof typeof FILTER_CATEGORIES, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

const handleSubmit = () => {
    console.log('Applied filters:', selectedFilters);
    // Example logic to apply filters (this should be replaced with actual filtering logic)
    const filteredResults = allItems.filter(item => {
        return (
            (selectedFilters.contentType.length === 0 || selectedFilters.contentType.includes(item.contentType)) &&
            (selectedFilters.topics.length === 0 || selectedFilters.topics.includes(item.topic)) &&
            (selectedFilters.location.length === 0 || selectedFilters.location.includes(item.location)) &&
            (selectedFilters.language.length === 0 || selectedFilters.language.includes(item.language))
        );
    });
    console.log('Filtered results:', filteredResults);

  };

  const handleReset = () => {
    setSelectedFilters({
      contentType: [],
      topics: [],
      location: [],
      language: [],
      sortBy: []
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-8">
        <FilterIcon className="h-8 w-8" />
        <h1 className="text-2xl font-bold">Content Filters</h1>
      </div>

      <div className="space-y-8">
        {(Object.entries(FILTER_CATEGORIES) as [keyof typeof FILTER_CATEGORIES, string[]][]).map(
          ([category, options]) => (
            <FilterCategory
              key={category}
              category={category}
              options={options}
              selectedOptions={selectedFilters[category]}
              onOptionChange={(option) => handleFilterChange(category, option)}
            />
          )
        )}
      </div>

      <FilterActions
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </div>
  );
}
