// components/DestinationCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiMapPin } from 'react-icons/fi';

const DestinationCard = ({ destination }) => {
  const { id, name, country, image, rating, description, highlights, price, duration } = destination;

  return (
    <Link
      to={`/details/${id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e';
          }}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
          <FiStar className="text-yellow-400 fill-current text-xs" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <FiMapPin className="text-xs" />
              {country}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {highlights.slice(0, 2).map((h, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {h}
            </span>
          ))}
          <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-full">
            +{highlights.length - 2}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400">From</span>
            <p className="font-semibold text-gray-900">{price}</p>
          </div>
          <span className="text-xs text-gray-400">{duration}</span>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;