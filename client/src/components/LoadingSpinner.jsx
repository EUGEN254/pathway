// components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'orange', fullScreen = false }) => {
  // Size mappings
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Color mappings
  const colors = {
    orange: 'border-orange-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
    gray: 'border-gray-500',
    white: 'border-white'
  };

  const spinnerSize = sizes[size] || sizes.md;
  const spinnerColor = colors[color] || colors.orange;

  const spinner = (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${spinnerSize} 
          border-4 
          border-t-transparent 
          ${spinnerColor} 
          rounded-full 
          animate-spin
        `}
        role="status"
        aria-label="loading"
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Different variants for different use cases
export const PageSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

export const ButtonSpinner = () => (
  <LoadingSpinner size="sm" color="white" />
);

export const CardSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <LoadingSpinner size="md" />
  </div>
);

export default LoadingSpinner;