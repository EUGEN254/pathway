// hooks/useMobileFilters.js
import { useState, useEffect } from 'react';

const useMobileFilters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setShowFilters(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return {
    showFilters,
    isMobile,
    toggleFilters,
    setShowFilters,
  };
};

export default useMobileFilters;