// components/TravelStories.jsx
import React from "react";
import { travelStories } from "../assets/assets";

const TravelStories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-4">
          Travel Stories & Guides
        </h2>
        <p className="text-gray-500">Inspiration for your next adventure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {travelStories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="p-5">
              <span className="text-xs text-orange-500 font-medium">
                {story.category}
              </span>

              <h3 className="font-semibold text-gray-900 mt-2 mb-2">
                {story.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">{story.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{story.date}</span>
                <span>{story.readTime}</span>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <img
                  src={story.authorImage}
                  alt={story.author}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">{story.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelStories;
