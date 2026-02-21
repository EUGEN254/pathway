// components/FilterSidebar.jsx
import React from 'react';
import { categories } from '../assets/assets';

const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  duration,
  setDuration,
  clearFilters,
  showFilters,
  isMobile,
  toggleFilters,
}) => {
  return (
    <>
      {/* Mobile Filter Toggle */}
      {isMobile && (
        <button 
          onClick={toggleFilters}
          className="lg:hidden w-full bg-white p-3 rounded-lg shadow-sm mb-4 flex items-center justify-between"
        >
          <span className="font-medium">Filters</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      )}

      {/* Filter Content */}
      <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    selectedCategory === 'All'
                      ? 'bg-orange-50 text-orange-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  All Destinations
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-center justify-between ${
                      selectedCategory === category.name
                        ? 'bg-orange-50 text-orange-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-400">{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Price Range (KES)</h3>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-orange-500"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{priceRange[0]}</span>
                <span className="text-gray-500">{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Duration</h3>
            <div className="space-y-2">
              {['all', 'short', 'medium', 'long'].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    duration === d
                      ? 'bg-orange-50 text-orange-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {d === 'all' && 'Any duration'}
                  {d === 'short' && 'Short (1-4 days)'}
                  {d === 'medium' && 'Medium (5-7 days)'}
                  {d === 'long' && 'Long (8+ days)'}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="w-full text-center text-sm text-orange-500 hover:text-orange-600 py-2 border-t border-gray-100 mt-4"
          >
            Clear all filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;