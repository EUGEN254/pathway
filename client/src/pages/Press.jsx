// pages/Press.jsx
import React from 'react';

const pressReleases = [
  {
    id: 1,
    title: "Pathway Raises $10M to Expand Travel Platform",
    date: "Feb 28, 2024",
    source: "TechCrunch",
    excerpt: "The travel startup plans to use the funding to enhance its AI-powered planning tools."
  },
  {
    id: 2,
    title: "Pathway Named Top Travel App of 2024",
    date: "Feb 15, 2024",
    source: "Travel Weekly",
    excerpt: "Users love the personalized itineraries and easy booking process."
  },
  {
    id: 3,
    title: "Partnership with 100+ Hotels Worldwide",
    date: "Jan 20, 2024",
    source: "Hotel News",
    excerpt: "New partnerships bring exclusive deals to Pathway users."
  }
];

const Press = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Press Room</h1>
          <p className="text-gray-500 mb-8">Latest news and announcements</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Media Contact</h2>
            <p className="text-gray-600 mb-2">For press inquiries, please contact:</p>
            <p className="text-orange-500">press@pathway.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <p className="text-sm text-gray-400 mb-2">{item.date} • {item.source}</p>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.excerpt}</p>
                  <button className="text-orange-500 text-sm hover:underline">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Press Kit</h2>
            <p className="text-gray-600 mb-4">Download our logo and brand assets</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Download Press Kit (ZIP)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;