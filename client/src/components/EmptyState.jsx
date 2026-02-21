// components/EmptyState.jsx
import React from 'react';

const EmptyState = ({ onClear }) => {
  return (
    <div className="bg-white rounded-xl p-12 text-center">
      <p className="text-gray-500 mb-2">No destinations found</p>
      <p className="text-sm text-gray-400">Try adjusting your filters</p>
      <button
        onClick={onClear}
        className="mt-4 text-orange-500 hover:text-orange-600 text-sm"
      >
        Clear all filters
      </button>
    </div>
  );
};

export default EmptyState;