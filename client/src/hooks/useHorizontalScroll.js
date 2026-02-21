// hooks/useHorizontalScroll.js
import { useRef, useState, useEffect, useCallback } from 'react';

const useHorizontalScroll = (itemCount, options = {}) => {
  const { itemsPerPage = 4, scrollAmount = 400 } = options;
  
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const totalDots = Math.ceil(itemCount / itemsPerPage);

  const updateArrows = useCallback(() => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  }, []);

  const updateActiveDot = useCallback(() => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const percentage = scrollLeft / maxScroll;
    const newIndex = Math.round(percentage * (totalDots - 1));
    setActiveIndex(Math.min(newIndex, totalDots - 1));
  }, [totalDots]);

  const handleScroll = useCallback(() => {
    updateArrows();
    updateActiveDot();
  }, [updateArrows, updateActiveDot]);

  useEffect(() => {
    const element = scrollContainerRef.current;
    if (!element) return;

    handleScroll();
    
    element.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  const scrollLeft = useCallback(() => {
    const element = scrollContainerRef.current;
    if (!element) return;

    element.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }, [scrollAmount]);

  const scrollRight = useCallback(() => {
    const element = scrollContainerRef.current;
    if (!element) return;

    element.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, [scrollAmount]);

  const scrollTo = useCallback((index) => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const { scrollWidth, clientWidth } = element;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (index / (totalDots - 1)) * maxScroll;

    element.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, [totalDots]);

  return {
    scrollContainerRef,
    showLeftArrow,
    showRightArrow,
    activeDot: activeIndex,
    totalDots,
    scrollLeft,
    scrollRight,
    scrollTo,
  };
};

export default useHorizontalScroll;