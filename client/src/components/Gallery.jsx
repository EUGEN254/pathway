// components/Gallery.jsx
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useGallery from '../hooks/useGallery';

const Gallery = ({ images, destinationName }) => {
  const { selectedImage, selectedIndex, selectImage, nextImage, prevImage, hasMultiple } = 
    useGallery(images);

  return (
    <div className="space-y-4">
      {/* Main Image with Navigation */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm group">
        <img
          src={selectedImage}
          alt={destinationName}
          className="w-full h-96 object-cover"
        />
        
        {hasMultiple && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
              aria-label="Previous image"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
              aria-label="Next image"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => selectImage(idx)}
              className={`rounded-lg overflow-hidden border-2 transition ${
                selectedIndex === idx ? 'border-orange-500' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img src={img} alt={`${destinationName} ${idx + 1}`} className="w-full h-20 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;