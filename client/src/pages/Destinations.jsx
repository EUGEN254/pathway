// pages/Destinations.jsx
import React from "react";

import useDestinationFilters from "../hooks/useDestinationFilters";
import useMobileFilters from "../hooks/useMobileFilters";
import FilterSidebar from "../components/FilterSidebar";
import SearchSortBar from "../components/SearchSortBar";
import DestinationCard from "../components/DestinationCard";
import Pagination from "../components/Pagination";
import EmptyState from "../components/EmptyState";
import { categories, topDestinations } from "../assets/assets";

const Destinations = () => {
  const {
    selectedCategory,
    searchQuery,
    sortBy,
    priceRange,
    duration,
    currentPage,
    totalPages,
    filteredCount,
    paginatedDestinations,
    setSelectedCategory,
    setSearchQuery,
    setSortBy,
    setPriceRange,
    setDuration,
    setCurrentPage,
    clearFilters,
  } = useDestinationFilters(topDestinations, categories);

  const { showFilters, isMobile, toggleFilters } = useMobileFilters();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-light text-gray-900 mb-3">
            Destinations
          </h1>
          <p className="text-gray-500">
            Find your perfect getaway from around the world
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              duration={duration}
              setDuration={setDuration}
              clearFilters={clearFilters}
              showFilters={showFilters}
              isMobile={isMobile}
              toggleFilters={toggleFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <SearchSortBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            <div className="mb-4 text-sm text-gray-500">
              Showing {paginatedDestinations.length} of {filteredCount}{" "}
              destinations
            </div>

            {paginatedDestinations.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedDestinations.map((dest) => (
                    <DestinationCard key={dest.id} destination={dest} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              </>
            ) : (
              <EmptyState onClear={clearFilters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
