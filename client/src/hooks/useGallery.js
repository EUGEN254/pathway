// hooks/useGallery.js
import { useState, useCallback } from 'react';

const useGallery = (images = []) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectImage = useCallback((index) => {
    if (index >= 0 && index < images.length) {
      setSelectedIndex(index);
    }
  }, [images.length]);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return {
    selectedImage: images[selectedIndex],
    selectedIndex,
    selectImage,
    nextImage,
    prevImage,
    hasMultiple: images.length > 1,
  };
};

export default useGallery;