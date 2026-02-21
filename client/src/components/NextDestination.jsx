// components/NextDestination.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { topDestinations } from '../assets/assets';
import useHorizontalScroll from '../hooks/useHorizontalScroll';

const NextDestination = () => {
  const {
    scrollContainerRef,
    showLeftArrow,
    showRightArrow,
    activeDot,
    totalDots,
    scrollLeft,
    scrollRight,
    scrollTo,
  } = useHorizontalScroll(topDestinations.length, {
    itemsPerPage: 4,
    scrollAmount: 400
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header (same as before) */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-light text-gray-900 mb-2">
            Where to next?
          </h2>
          <p className="text-gray-500">
            Explore popular destinations loved by travelers
          </p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            disabled={!showLeftArrow}
            className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center ${
              showLeftArrow
                ? 'border-gray-200 bg-white text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer'
                : 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!showRightArrow}
            className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center ${
              showRightArrow
                ? 'border-gray-200 bg-white text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer'
                : 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Cards */}
        {topDestinations.map((destination) => (
          <div
            key={destination.id}
            className="flex-none w-72 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <Link to={`/details/${destination.id}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-medium text-gray-700">
                    {destination.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({destination.reviews})
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-500">{destination.country}</p>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                  <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-full">
                    +{destination.highlights.length - 2}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400">From</span>
                    <p className="text-lg font-semibold text-gray-900">
                      {destination.price}
                    </p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `/details/${destination.id}`;
                    }}
                    className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    View Deals
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Progress Dots */}
      {totalDots > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeDot
                  ? 'w-8 bg-orange-500'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NextDestination;