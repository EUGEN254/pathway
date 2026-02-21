// components/TabContent.jsx
import React from 'react';
import { FiCalendar, FiUsers } from 'react-icons/fi';

const TabContent = ({ activeTab, destination }) => {
  const tabs = {
    overview: (
      <p className="text-gray-600 leading-relaxed">{destination.description}</p>
    ),
    
    highlights: (
      <ul className="space-y-2">
        {destination.highlights.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-600">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    ),
    
    details: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <FiCalendar className="text-orange-500" />
          <span>Best time: {destination.bestTime}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FiUsers className="text-orange-500" />
          <span>Duration: {destination.duration}</span>
        </div>
      </div>
    ),
  };

  return tabs[activeTab] || null;
};

export default TabContent;