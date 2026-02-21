// components/WhyChooseUs.jsx
import React from 'react';
import { FiShield, FiClock, FiHeadphones, FiThumbsUp } from 'react-icons/fi';

const features = [
  {
    id: 1,
    icon: FiShield,
    title: 'Safe Travels',
    description: '24/7 support and secure bookings',
  },
  {
    id: 2,
    icon: FiClock,
    title: 'Flexible Booking',
    description: 'Free cancellation up to 24 hours',
  },
  {
    id: 3,
    icon: FiHeadphones,
    title: 'Expert Guides',
    description: 'Local experts who know best',
  },
  {
    id: 4,
    icon: FiThumbsUp,
    title: 'Best Price Guarantee',
    description: 'We match any lower price',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-light text-center text-gray-900 mb-12">
        Why Travel With Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.id} className="text-center p-6">
            <feature.icon className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;