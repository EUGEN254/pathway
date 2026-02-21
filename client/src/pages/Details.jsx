// components/Details.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import useDestination from "../hooks/useDestination";
import useTabs from "../hooks/useTabs";
import BookingCard from "../components/BookingCard";
import TabContent from "../components/TabContent";
import Gallery from "../components/Gallery";

const Details = () => {
  const { destination, loading, error } = useDestination();
  const { activeTab, setTab, isActive } = useTabs("overview");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading destination...</p>
        </div>
      </div>
    );
  }

  if (error || !destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
          <p className="text-gray-600 mb-6">
            {error || "The destination you're looking for doesn't exist"}
          </p>
          <Link to="/" className="text-orange-500 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [destination.image, ...destination.images];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to destinations
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-2">
            <Gallery images={allImages} destinationName={destination.name} />
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <BookingCard destination={destination} />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          {/* Tab Headers */}
          <div className="flex gap-4 border-b border-gray-200">
            {["overview", "highlights", "details"].map((tab) => (
              <button
                key={tab}
                onClick={() => setTab(tab)}
                className={`pb-2 px-1 font-medium capitalize transition ${
                  isActive(tab)
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-4">
            <TabContent activeTab={activeTab} destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
