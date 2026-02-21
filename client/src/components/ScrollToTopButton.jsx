// components/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
          
          {/* Tooltip */}
          <span className="absolute right-14 bottom-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Back to top
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;