// components/BookingCard.jsx
import React from 'react';
import { FiCalendar, FiMapPin, FiUsers, FiStar } from 'react-icons/fi';
import useBookingForm from '../hooks/useBookingForm';

const BookingCard = ({ destination }) => {
  const { formData, updateField, handleSubmit, isValid } = useBookingForm();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
      {/* Title & Rating */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{destination.name}</h1>
        <p className="text-gray-500 flex items-center gap-2 mb-3">
          <FiMapPin className="text-orange-500" />
          {destination.country}
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FiStar className="text-yellow-400 fill-current" />
            <span className="font-semibold">{destination.rating}</span>
            <span className="text-gray-400">({destination.reviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <span className="text-sm text-gray-500">Starting from</span>
        <p className="text-3xl font-bold text-gray-900">{destination.price}</p>
        <span className="text-sm text-gray-500">per person</span>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => updateField('checkIn', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => updateField('checkOut', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
          <select
            value={formData.travelers}
            onChange={(e) => updateField('travelers', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          >
            <option>1 traveler</option>
            <option>2 travelers</option>
            <option>3 travelers</option>
            <option>4+ travelers</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!isValid()}
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300 shadow-lg ${
            isValid()
              ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Book Now
        </button>

        <p className="text-xs text-center text-gray-400">
          No payment required to book
        </p>
      </form>
    </div>
  );
};

export default BookingCard;