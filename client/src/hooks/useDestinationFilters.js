// hooks/useDestinationFilters.js
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useDestinationFilters = (destinations, categories) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [duration, setDuration] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Update category from URL
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter destinations
  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      // Category filter
      if (selectedCategory !== 'All' && dest.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery && !dest.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !dest.country.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Price filter
      const priceNum = parseInt(dest.price.replace('KES', ''));
      if (priceNum < priceRange[0] || priceNum > priceRange[1]) {
        return false;
      }

      // Duration filter
      if (duration !== 'all') {
        const destDays = parseInt(dest.duration.split('-')[0]);
        if (duration === 'short' && destDays > 4) return false;
        if (duration === 'medium' && (destDays < 5 || destDays > 7)) return false;
        if (duration === 'long' && destDays < 8) return false;
      }

      return true;
    });
  }, [destinations, selectedCategory, searchQuery, priceRange, duration]);

  // Sort destinations
  const sortedDestinations = useMemo(() => {
    return [...filteredDestinations].sort((a, b) => {
      if (sortBy === 'price-low') {
        return parseInt(a.price.replace('KES', '')) - parseInt(b.price.replace('KES', ''));
      }
      if (sortBy === 'price-high') {
        return parseInt(b.price.replace('KES', '')) - parseInt(a.price.replace('KES', ''));
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      // Popular - default
      return b.reviews - a.reviews;
    });
  }, [filteredDestinations, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedDestinations.length / itemsPerPage);
  const paginatedDestinations = useMemo(() => {
    return sortedDestinations.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [sortedDestinations, currentPage, itemsPerPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy, priceRange, duration]);

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('popular');
    setPriceRange([0, 2000]);
    setDuration('all');
  };

  return {
    // State
    selectedCategory,
    searchQuery,
    sortBy,
    priceRange,
    duration,
    currentPage,
    totalPages,
    
    // Data
    filteredCount: filteredDestinations.length,
    paginatedDestinations,
    
    // Setters
    setSelectedCategory,
    setSearchQuery,
    setSortBy,
    setPriceRange,
    setDuration,
    setCurrentPage,
    
    // Actions
    clearFilters,
    
    // Constants
    itemsPerPage,
  };
};

export default useDestinationFilters;